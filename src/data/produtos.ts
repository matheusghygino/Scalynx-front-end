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
    status: "available",
    nameKey: "erpName",
    descriptionKey: "erpDescription",
    ctaKey: "erpCta",
    icon: "erp",
    href: "/erp",
    demo: true,
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
