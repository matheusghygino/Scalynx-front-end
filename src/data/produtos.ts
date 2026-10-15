export type ProdutoStatus = "available" | "soon";

export interface Produto {
  id: string;
  status: ProdutoStatus;
  nameKey: "crmName" | "erpName" | "workspaceName";
  descriptionKey: "crmDescription" | "erpDescription" | "workspaceDescription";
  ctaKey: "crmCta" | "erpCta" | "workspaceCta";
  icon: "crm" | "erp" | "workspace";
  href?: string;
  waitlistSource?: string;
  demo?: boolean;
}

export const produtos: Produto[] = [
  {
    id: "crm",
    status: "available",
    nameKey: "crmName",
    descriptionKey: "crmDescription",
    ctaKey: "crmCta",
    icon: "crm",
    href: "/crm",
    demo: true,
  },
  {
    id: "erp",
    status: "soon",
    nameKey: "erpName",
    descriptionKey: "erpDescription",
    ctaKey: "erpCta",
    icon: "erp",
    waitlistSource: "waitlist-erp",
  },
  {
    id: "workspace",
    status: "soon",
    nameKey: "workspaceName",
    descriptionKey: "workspaceDescription",
    ctaKey: "workspaceCta",
    icon: "workspace",
    waitlistSource: "waitlist-workspace",
  },
];
