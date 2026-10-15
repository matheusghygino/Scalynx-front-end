import type { Lang } from "../i18n/ui";

export interface ClienteCase {
  id: string;
  nome: string;
  segmento: Record<Lang, string>;
  descricao: Record<Lang, string>;
  ganhos: Record<Lang, string[]>;
  metricas: Record<Lang, string[]>;
  site?: string;
  instagram?: string;
  crm?: string;
  preview?: string;
  monograma: string;
  cor: string;
}

export const clientes: ClienteCase[] = [
  {
    id: "jsm",
    nome: "JSM Cleaning Solutions",
    segmento: { pt: "Limpeza residencial e comercial · MA/RI, EUA", en: "Residential & commercial cleaning · MA/RI, USA" },
    descricao: {
      pt: "A JSM Cleaning Solutions atua há mais de 7 anos em Massachusetts e Rhode Island. Com a Scalyns, a marca saiu de um site sem resultados para uma operação digital completa — hoje gera mais de 50 leads por mês, cerca de 20% vindos de forma orgânica, com tráfego pago, CRM integrado, automações e relatórios de crescimento.",
      en: "JSM Cleaning Solutions has operated for over 7 years in Massachusetts and Rhode Island. With Scalyns, the brand moved from a website that generated no results to a complete digital operation — now generating 50+ leads per month, about 20% organically, with paid media, integrated CRM, automations and growth reports.",
    },
    ganhos: {
      pt: [
        "Site novo com alta taxa de conversão e PageSpeed 90+",
        "Campanhas de tráfego pago e remarketing",
        "CRM + Slack + e-mail + automações integrados",
        "E-mail marketing e fluxo de NPS automatizado",
        "Relatórios mensais com KPIs de crescimento",
      ],
      en: [
        "New website with high conversion rate and 90+ PageSpeed",
        "Paid media and remarketing campaigns",
        "Integrated CRM + Slack + email + automations",
        "Email marketing and automated NPS flow",
        "Monthly reports with growth KPIs",
      ],
    },
    metricas: {
      pt: ["50+ leads/mês", "20% orgânicos", "PageSpeed 90+"],
      en: ["50+ leads/month", "20% organic", "90+ PageSpeed"],
    },
    site: "https://www.jsmcleaningsolutions.com/",
    crm: "https://crm.jsmcleaningsolutions.com/",
    monograma: "JSM",
    cor: "#0ea5e9",
  },
  {
    id: "fs",
    nome: "FS Construction & Remodeling",
    segmento: { pt: "Reformas e construção residencial · MA, EUA", en: "Residential remodeling & construction · MA, USA" },
    descricao: {
      pt: "A FS Construction & Remodeling é referência em reformas residenciais em Massachusetts. Antes da Scalyns, o site era lento e não gerava leads. Após o redesign e a primeira campanha no Google Ads, o site alcançou nota 90+ no PageSpeed e gerou 20 leads já no primeiro mês. O alcance no Instagram saltou de cerca de 8 mil para mais de 50 mil visualizações mensais em 3 meses.",
      en: "FS Construction & Remodeling is a reference in residential remodeling in Massachusetts. Before Scalyns, the website was slow and generated no leads. After the redesign and the first Google Ads campaign, the site reached 90+ PageSpeed and generated 20 leads in its first month. Instagram reach jumped from around 8k to over 50k monthly views in 3 months.",
    },
    ganhos: {
      pt: [
        "Site 90+ no PageSpeed (antes lento e ineficiente)",
        "20 leads no primeiro mês de campanha",
        "Crescimento de mais de 100 mil visualizações/mês no Instagram",
        "Google e Meta Ads com campanhas sazonais",
        "E-mail e Slack integrados, com automação de relatórios",
      ],
      en: [
        "90+ PageSpeed website (previously slow and inefficient)",
        "20 leads in the first campaign month",
        "100k+ monthly Instagram views growth",
        "Google and Meta Ads with seasonal campaigns",
        "Integrated email and Slack, with automated reports",
      ],
    },
    metricas: {
      pt: ["20 leads no 1º mês", "+100k views/mês", "PageSpeed 90+"],
      en: ["20 leads in month 1", "+100k views/month", "90+ PageSpeed"],
    },
    site: "https://www.fsconstructionandremodeling.com/",
    instagram: "https://www.instagram.com/fsconstructionandremodeling/",
    crm: "https://crm.fsconstructionandremodeling.com/",
    monograma: "FS",
    cor: "#f59e0b",
  },
  {
    id: "eb",
    nome: "EB Serviços",
    segmento: { pt: "Empresa de serviços · Brasil", en: "Services company · Brazil" },
    descricao: {
      pt: "A EB Serviços estruturou sua operação comercial com a plataforma Scalyns. Implantamos o CRM próprio com funil de vendas, cadastro centralizado de contatos e histórico de atendimento — dando visibilidade total do processo comercial para o time.",
      en: "EB Serviços structured its sales operation with the Scalyns platform. We deployed our CRM with a sales pipeline, centralized contact records and full service history — giving the team complete visibility of the sales process.",
    },
    ganhos: {
      pt: [
        "CRM próprio implantado no domínio da empresa",
        "Funil de vendas organizado por etapas",
        "Base de contatos centralizada com histórico",
        "Equipe trabalhando com acessos por perfil",
      ],
      en: [
        "Our CRM deployed on the company's own domain",
        "Sales pipeline organized by stages",
        "Centralized contact base with full history",
        "Team working with role-based access",
      ],
    },
    metricas: {
      pt: ["CRM implantado", "Funil organizado", "Equipe com acessos por perfil"],
      en: ["CRM deployed", "Organized pipeline", "Role-based access"],
    },
    crm: "https://crm.eb-servicos.com/",
    monograma: "EB",
    cor: "#10b981",
  },
];
