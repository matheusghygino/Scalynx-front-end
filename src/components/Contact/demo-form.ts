type Messages = Record<"fast" | "phone" | "consent" | "captcha" | "captchaLoad" | "worker" | "generic" | "unknown" | "sending" | "submit" | "redirecting" | "busy" | "unavailable" | "retry", string>;
interface Turnstile { render(container: HTMLElement, options: Record<string, unknown>): string; reset(id: string): void; execute(id: string): void; }
type DemoWindow = Window & { turnstile?: Turnstile; dataLayer?: unknown[] };

function validPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("55") && digits.length > 11) return validPhone(digits.slice(2));
  return /^[1-9]\d\d{8}$/.test(digits) || /^[1-9]\d9\d{8}$/.test(digits);
}

export function initializeDemoForms(): void {
  document.querySelectorAll<HTMLFormElement>("[data-demo-form]").forEach(initialize);
}

function initialize(form: HTMLFormElement): void {
  if (form.dataset.initialized) return;
  form.dataset.initialized = "true";
  const win = window as DemoWindow;
  const messages = JSON.parse(form.dataset.messages || "{}") as Messages;
  const result = form.querySelector<HTMLElement>("[data-result]")!;
  const button = form.querySelector<HTMLButtonElement>("[data-submit-button]")!;
  const followup = form.querySelector<HTMLElement>("[data-demo-followup]")!;
  const container = document.getElementById(`${form.id}-turnstile`)!;
  const field = (name: string) => form.querySelector<HTMLInputElement>(`[name="${name}"]`)!;
  field("ts_loaded").value = String(Date.now());
  let widget: string | null = null;
  let pending: { resolve(value: string): void; reject(reason: Error): void; timer: number } | null = null;
  let sending = false;
  let capturedSignature = "";

  function finish(token?: string): void {
    if (!pending) return;
    window.clearTimeout(pending.timer);
    const current = pending; pending = null;
    if (token) current.resolve(token); else current.reject(new Error("captcha_failed"));
  }
  function renderWidget(): void {
    if (widget !== null || !win.turnstile) return;
    widget = win.turnstile.render(container, {
      sitekey: form.dataset.sitekey, theme: "auto", execution: "execute",
      callback: (token: string) => { if (token) finish(token); },
      "error-callback": () => finish(),
    });
  }
  document.addEventListener("scalyns:turnstile-ready", renderWidget, { once: true });
  renderWidget();
  function nextToken(): Promise<string> {
    renderWidget();
    return new Promise((resolve, reject) => {
      if (widget === null || !win.turnstile) { reject(new Error("captcha_not_ready")); return; }
      pending = { resolve, reject, timer: window.setTimeout(() => finish(), 15000) };
      try { win.turnstile.reset(widget); win.turnstile.execute(widget); } catch { finish(); }
    });
  }
  function show(message: string, error = false): void {
    result.textContent = message;
    result.className = `mt-2 text-center text-sm ${error ? "text-red-300" : "text-emerald-300"}`;
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending || field("company_website").value) return;
    if (Date.now() - Number(field("ts_loaded").value) < 2000) { show(messages.fast, true); return; }
    if (form.dataset.validatePhone === "true" && !validPhone(field("phone").value)) { show(messages.phone, true); field("phone").focus(); return; }
    if (!field("consent").checked) { show(messages.consent, true); return; }
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const worker = form.dataset.workerUrl; const api = form.dataset.demoApi?.replace(/\/$/, "");
    if (!worker || !api) { show(messages.worker, true); return; }
    const email = field("email").value.trim(); const firstName = field("firstName").value.trim(); const lastName = field("lastName").value.trim();
    const signature = JSON.stringify([email, firstName, lastName, field("phone").value, field("message").value]);
    sending = true; button.disabled = true; button.textContent = messages.sending; show(messages.sending);
    let redirecting = false;
    try {
      if (capturedSignature !== signature) {
        const token = await nextToken();
        field("submittedAt").value = new Date().toISOString();
        const data = new FormData(form); data.set("cf-turnstile-response", token);
        const response = await fetch(worker, { method: "POST", body: data, signal: AbortSignal.timeout(20000) });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || !payload.success) throw new Error("lead_failed");
        capturedSignature = signature;
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({ event: "user_identified", user_email: email, user_first_name: firstName, user_last_name: lastName });
        win.dataLayer.push({ event: "form_submit", form_id: form.id, form_name: `Scalyns ${form.dataset.demoProduct?.toUpperCase()} Demo Request`, form_source: `${form.dataset.demoProduct}-demo` });
      }
      show(messages.redirecting); button.textContent = messages.redirecting;
      const token = await nextToken();
      const response = await fetch(`${api}/api/demo/access`, {
        method: "POST", headers: { "content-type": "application/json" }, signal: AbortSignal.timeout(20000),
        // Keep the existing strict CRM v1.6.1 form contract compatible during rollout.
        body: JSON.stringify({ email, name: `${firstName} ${lastName}`.trim(), turnstileToken: token, ...(form.dataset.demoProduct === "erp" ? { locale: form.dataset.demoLocale } : {}) }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || typeof payload.url !== "string") { show(payload.error === "demo_busy" || payload.message === "demo_busy" ? messages.busy : messages.unavailable, true); return; }
      const destination = new URL(payload.url);
      if (destination.origin !== new URL(api).origin || destination.pathname !== "/api/demo/start" || !destination.searchParams.get("token")) throw new Error("invalid_demo_url");
      win.dataLayer?.push({ event: "demo_access_granted", product: form.dataset.demoProduct, form_source: `${form.dataset.demoProduct}-demo` });
      redirecting = true; window.location.assign(destination.href);
    } catch (error) {
      show(capturedSignature === signature ? messages.unavailable : error instanceof Error && error.message.startsWith("captcha") ? messages.captcha : messages.generic, true);
    } finally {
      sending = false;
      if (!redirecting) { button.disabled = false; button.textContent = capturedSignature === signature ? messages.retry : messages.submit; followup.classList.toggle("hidden", capturedSignature !== signature); followup.classList.toggle("block", capturedSignature === signature); }
    }
  });
}
