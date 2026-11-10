import assert from "node:assert/strict";
import test from "node:test";
import { demoAccessFailure } from "./demo-form";

test("demo form recognizes the actual bad_request/captcha_failed response", () => {
  assert.equal(demoAccessFailure({ error: "bad_request", message: "captcha_failed" }), "captchaRejected");
  assert.equal(demoAccessFailure({ error: "captcha_failed" }), "captchaRejected");
});
test("demo form distinguishes backend configuration, provider outage, capacity and field validation", () => {
  assert.equal(demoAccessFailure({ error: "demo_not_configured" }), "configuration");
  assert.equal(demoAccessFailure({ error: "captcha_unavailable" }), "verificationUnavailable");
  assert.equal(demoAccessFailure({ error: "demo_busy" }), "busy");
  assert.equal(demoAccessFailure({ error: "validation_error", issues: [] }), "validation");
});
test("unexpected demo responses never become UI instructions or expose provider payloads", () => {
  for (const value of [null, "<script>", { error: "provider-secret", message: { html: "untrusted" } }, { error: ["captcha_failed"] }]) assert.equal(demoAccessFailure(value), "unavailable");
});
