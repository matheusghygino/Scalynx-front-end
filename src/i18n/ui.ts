export type Lang = "pt" | "en";

export const defaultLang: Lang = "pt";

export const languages = {
  pt: { label: "PT", htmlLang: "pt-BR", homePath: "/" },
  en: { label: "EN", htmlLang: "en", homePath: "/en/" },
} as const;

export const whatsapp = {
  phone: "27992627793",
  phoneDisplay: "+55 27 99262-7793",
  link: "https://wa.me/5527992627793",
  messagePt: "Olá! Gostaria de saber mais sobre os serviços da Scalyns.",
  messageEn: "Hi! I would like to know more about Scalyns services.",
};

export const contact = {
  email: "commercial@scalyns.com",
  instagram: "https://instagram.com/scalyns.tech",
  linkedin: "",
};

const ui = {
  pt: {
    meta: {
      homeTitle: "Scalyns | CRM, ERP, Marketing e Tecnologia para Empresas",
      homeDescription:
        "CRM e ERP próprios, sites de alta performance, marketing e automações. Conecte vendas, financeiro e operação com a Scalyns e experimente nossas ferramentas.",
      erpTitle: "Scalyns ERP | Financeiro, Vendas e Estoque | Teste por 1 hora",
      erpDescription: "Organize clientes, fornecedores, produtos, orçamentos, pedidos, cobranças e despesas. Conheça o dashboard do Scalyns ERP e teste com dados fictícios por 1 hora.",
      crmTitle: "Scalyns CRM | Funil, Agenda e Operação em um só lugar",
      crmDescription:
        "CRM completo com funil visual, visibilidade por times, atividades sincronizadas com Google Agenda, anexos e relatórios. Solicite uma demonstração.",
      thanksTitle: "Obrigado pelo contato | Scalyns",
      thanksDescription: "Recebemos sua mensagem. Em breve nosso time entrará em contato.",
    },
    nav: {
      about: "Sobre",
      services: "Serviços",
      platform: "Plataforma",
      crm: "CRM",
      erp: "ERP",
      clients: "Clientes",
      contact: "Contato",
      cta: "Solicitar Proposta",
      crmCta: "Ver o CRM",
      menu: "Menu",
      languageLabel: "Idioma",
      switchTo: "Mudar para inglês",
    },
    hero: {
      eyebrow: "Marketing · Operação · Tecnologia",
      title: "Marketing, operação e tecnologia em um só ecossistema.",
      subtitle:
        "A Scalyns constrói a base digital da sua empresa: CRM para vender, ERP para gerir a operação, sites de alta performance, automações e marketing — uma estrutura que acompanha seu crescimento.",
      ctaPrimary: "Conhecer o CRM e o ERP",
      ctaSecondary: "Solicitar proposta",
      stats: [
        { value: "90+", label: "PageSpeed nos sites entregues" },
        { value: "50+", label: "leads/mês gerados para clientes" },
        { value: "+100k", label: "visualizações/mês em redes sociais" },
        { value: "BR + EUA", label: "empresas atendidas" },
      ],
      mockupActivity: "Reunião amanhã, 10:00",
      mockupSource: "Google Agenda",
    },
    about: {
      title: "Sobre a Scalyns",
      text: "A Scalyns é um ecossistema digital completo para empresas que querem crescer com estrutura. Desenvolvemos a base tecnológica do seu negócio — site, redes sociais, identidade visual, CRM e ERP próprios, automações, workspace colaborativo, tráfego pago e integrações. Criamos sistemas que aproximam marketing, vendas, operação e gestão.",
      points: [
        "Tecnologia proprietária: nossos próprios softwares, evoluindo com você",
        "Time único cuidando de marca, canais, dados e operação",
        "Foco em resultado: leads, conversão e previsibilidade — não só entregas",
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Arquitetura digital modular",
      subtitle:
        "Não entregamos serviços isolados: construímos um sistema completo para sua empresa operar, vender e se posicionar com estrutura.",
      cta: "Construir minha estrutura digital",
      items: [
        {
          icon: "globe",
          title: "Infraestrutura Digital",
          description:
            "Site de alta performance (90+ PageSpeed), e-mail profissional, CRM e ERP próprios e estrutura digital para a operação da sua empresa.",
          points: ["Sites rápidos e otimizados para conversão", "E-mail no seu domínio", "Workspace e arquivos na nuvem"],
        },
        {
          icon: "palette",
          title: "Branding & Identidade Visual",
          description:
            "Identidade visual estratégica, materiais institucionais, folders e padronização da presença digital da sua marca.",
          points: ["Logotipo e identidade completa", "Materiais institucionais", "Padronização de marca"],
        },
        {
          icon: "instagram",
          title: "Gestão de Redes Sociais",
          description:
            "Planejamento estratégico, criação de conteúdo, design para posts e gestão completa do Instagram, Facebook e outras plataformas.",
          points: ["Calendário editorial estratégico", "Conteúdo e design inclusos", "Crescimento de alcance e autoridade"],
        },
        {
          icon: "target",
          title: "Tráfego Pago & Performance",
          description:
            "Google Ads e Meta Ads com foco em geração de leads, campanhas sazonais e otimização contínua baseada em dados.",
          points: ["Campanhas orientadas a leads", "Otimização semanal por dados", "Remarketing e sazonalidade"],
        },
        {
          icon: "chat",
          title: "Atendimento Omnichannel",
          description:
            "Central integrada com WhatsApp, Instagram, Facebook e e-mail, conectada ao CRM para acompanhamento completo do cliente.",
          points: ["Canais unificados no CRM", "Histórico completo por contato", "Follow-up sem perder oportunidade"],
        },
        {
          icon: "bolt",
          title: "Automação & Integrações",
          description:
            "Fluxos automatizados via n8n, integrações entre marketing, vendas e operação, dashboards e relatórios estratégicos.",
          points: ["Automações entre marketing e vendas", "Integrações entre ferramentas", "Dashboards e relatórios"],
        },
      ],
    },
    platform: {
      eyebrow: "Plataforma Scalyns",
      title: "Nossos softwares, evoluindo com o seu negócio",
      subtitle:
        "Software próprio para cada etapa do negócio: CRM para o relacionamento comercial e ERP para vendas, financeiro e estoque. Conheça os produtos e teste com dados de exemplo.",
      statusAvailable: "Disponível",
      statusSoon: "Em breve",
      crmName: "Scalyns CRM",
      crmDescription:
        "Funil visual, atividades sincronizadas com Google Agenda, anexos em cada registro, inbox unificado e relatórios — com controle de visibilidade por time.",
      crmCta: "Ver o CRM",
      crmDemoCta: "Pedir demonstração",
      erpName: "Scalyns ERP",
      erpDescription:
        "Clientes, fornecedores, catálogo, orçamentos, pedidos, cobranças, despesas e estoque — com um dashboard para acompanhar sua operação.",
      erpCta: "Conhecer o ERP",
      workspaceName: "Scalyns Workspace",
      workspaceDescription:
        "E-mail corporativo, armazenamento em nuvem e colaboração para o time, dentro do mesmo ambiente da Scalyns.",
      workspaceCta: "Entrar na lista de espera",
    },
    crmHome: {
      eyebrow: "Produto Scalyns",
      title: "Conheça o Scalyns CRM",
      subtitle:
        "O CRM que organiza a sua operação comercial de ponta a ponta: do primeiro contato ao pós-venda. Rápido, visual e integrado com as ferramentas que seu time já usa.",
      demoCta: "Ver demonstração",
      specialistCta: "Falar com especialista",
      learnCta: "Conhecer todos os recursos",
      features: [
        { title: "Funil visual e fluido", description: "Kanban rápido com arrastar e soltar, acompanhando o ritmo real do seu time." },
        { title: "Visibilidade sob controle", description: "Funis e tarefas no modo geral, por time ou pessoal — cada um vê o que lhe cabe." },
        { title: "Agenda integrada ao Google", description: "Atividades sincronizadas com o Google Agenda, com lembretes também no celular." },
        { title: "Tudo registrado no lugar certo", description: "Notas, arquivos e fotos vinculados ao lead, à atividade e à demanda." },
        { title: "Inbox e campanhas unificados", description: "E-mails, SMS e ligações conectados aos contatos, sem sair do CRM." },
        { title: "Decisões com dados", description: "Dashboards e relatórios de conversão, leads e desempenho por período." },
      ],
    },
    clients: {
      eyebrow: "Clientes",
      title: "Empresas que já crescem com a Scalyns",
      subtitle: "Resultados reais de operações completas — marketing, site, CRM e automações trabalhando juntos.",
      gainsLabel: "O que fizemos",
      siteCta: "Visitar site",
      instagramCta: "Instagram",
      contactCta: "Fale com a gente",
      previewSoon: "Preview do site",
    },
    contact: {
      title: "Vamos estruturar o crescimento da sua empresa?",
      subtitle: "Diagnóstico estratégico e arquitetura digital personalizada",
      textOne:
        "A Scalyns desenvolve ecossistemas digitais para empresas que precisam crescer com organização e posicionamento forte: sites de alta performance, CRM e ERP próprios, automações, workspace corporativo, atendimento omnichannel, tráfego pago, redes sociais e identidade visual.",
      textTwo:
        "Se sua empresa precisa gerar mais leads, organizar processos internos, fortalecer a marca ou integrar tecnologia com marketing, vamos construir essa base juntos. Preencha o formulário e receba um diagnóstico estratégico personalizado.",
      address: "Atendemos empresas no Brasil e nos EUA",
      whatsappCta: "Chamar no WhatsApp",
      form: {
        title: "Fale com a Scalyns",
        firstName: "Nome",
        lastName: "Sobrenome",
        email: "E-mail",
        phone: "Telefone (com DDD)",
        subject: "Assunto",
        message: "Descreva sua necessidade (opcional)",
        consent: "Concordo em receber contato por e-mail ou WhatsApp.",
        submit: "Enviar solicitação",
        sending: "Enviando...",
        success: "Formulário enviado com sucesso! Redirecionando...",
        thanksUrl: "/thanks",
        privacy: "Ao enviar você aceita ser contatado via e-mail e WhatsApp.",
        demoSubject: "Quero ver uma demonstração do Scalyns CRM",
        demoNotice: "Você será direcionado para uma demonstração de 1 hora do Scalyns CRM.",
        demoSubmit: "Solicitar demonstração e testar agora",
        demoRedirecting: "Preparando sua demonstração...",
        demoBusy: "Nossa demonstração está temporariamente cheia. Tente novamente em alguns minutos — nosso time entrará em contato.",
        demoUnavailable: "Seu contato foi recebido, mas não foi possível abrir a demonstração agora. Tente novamente ou solicite o contato do nosso time.",
        demoRetry: "Tentar abrir a demonstração novamente",
        demoFollowup: "Receber contato do time",
        waitlistSubject: "Quero entrar na lista de espera",
        errors: {
          fast: "Envio muito rápido. Preencha o formulário normalmente e tente novamente.",
          phone: "Telefone inválido. Use DDD e, se celular, inclua o 9.",
          consent: "Você precisa aceitar o contato por e-mail ou WhatsApp.",
          captcha: "Confirme a verificação de segurança antes de enviar.",
          captchaLoad: "Erro ao carregar a verificação anti-robô. Atualize a página e tente novamente.",
          worker: "Erro de configuração: serviço de envio ausente.",
          generic: "Erro ao enviar",
          unknown: "desconhecido",
        },
      },
    },
    footer: {
      tagline: "Estratégia, conteúdo, tecnologia e automação para transformar negócios em marcas relevantes no ambiente digital.",
      navigation: "Navegação",
      contact: "Fale conosco",
      rights: "Todos os direitos reservados.",
      languageLabel: "Idioma",
      whatsappLabel: "WhatsApp",
    },
    crmPage: {
      eyebrow: "Produto Scalyns",
      title: "O CRM completo para vender com previsibilidade",
      subtitle:
        "Funil visual, agenda integrada ao Google, arquivos, inbox e relatórios em um sistema rápido, seguro e feito para a rotina do seu time.",
      ctaPrimary: "Solicitar demonstração",
      ctaSecondary: "Falar no WhatsApp",
      problemTitle: "Sua operação comercial perde oportunidades todos os dias — sem um lugar certo para acontecer.",
      problemPoints: [
        "Leads espalhados em planilhas, WhatsApp e cadernos",
        "Follow-ups esquecidos e negociações esfriando",
        "Ninguém sabe quem atendeu o cliente nem o que foi combinado",
        "Sem dados para saber onde as vendas travam",
      ],
      solutionTitle: "Um único ambiente para o seu processo comercial",
      solutionText:
        "O Scalyns CRM organiza o funil, as atividades e o histórico de cada cliente — com integrações que o seu time já usa no dia a dia.",
      featuresTitle: "Recursos que fazem diferença na rotina",
      features: [
        { title: "Kanban rápido e fluido", description: "Arraste cards entre etapas com atualização instantânea, paginação inteligente e navegação por teclado." },
        { title: "Visibilidade geral, por time ou pessoal", description: "Cada usuário vê apenas o que deve, com administração central e auditoria das ações sensíveis." },
        { title: "Atividades + Google Agenda", description: "Sincronização em dois sentidos: crie no CRM e receba lembretes do Google no seu celular." },
        { title: "Anexos e fotos nos registros", description: "Documentos e imagens vinculados ao lead, à atividade e à demanda, com acesso controlado." },
        { title: "Inbox unificado", description: "E-mails, SMS e ligações conectados aos contatos e ao histórico da negociação." },
        { title: "Relatórios e dashboards", description: "Conversão por etapa, leads por origem, desempenho por período e exportações." },
        { title: "Tarefas e projetos internos", description: "Demandas do time em quadros próprios, com checklist, comentários e prazos." },
        { title: "Automações", description: "Regras que movem negócios, criam tarefas e avisam o time no momento certo." },
      ],
      integrationsTitle: "Conectado ao que você já usa",
      integrationsText:
        "Google Agenda, Slack, Jobber, Google Ads, Google Analytics, e-mail, SMS e mais. Integrações evoluem continuamente com o seu processo.",
      securityTitle: "Segurança e controle",
      securityPoints: [
        "Permissões por papel (administrador, gestor, membro e leitor)",
        "Visibilidade por time com revogação imediata de acesso",
        "Auditoria das ações importantes",
        "Dados hospedados de forma dedicada para a sua empresa",
      ],
      faqTitle: "Perguntas frequentes",
      faq: [
        { q: "Preciso instalar algo para usar o CRM?", a: "Não. O CRM roda direto no navegador, em endereço próprio da sua empresa, acessível de computadores e celulares." },
        { q: "Dá para controlar quem vê cada funil e cada lead?", a: "Sim. Funis e quadros podem ser gerais, de um time específico ou pessoais, com permissões por papel e administração central." },
        { q: "O CRM recebe lembretes no celular?", a: "Sim. As atividades sincronizam com o Google Agenda e os lembretes chegam no celular pelo app de calendário." },
        { q: "Quanto tempo leva para implantar?", a: "O ambiente padrão entra no ar em poucos dias. Personalizações e integrações são planejadas conforme o seu processo." },
      ],
      demoTitle: "Veja o Scalyns CRM em ação",
      demoText:
        "Preencha o formulário e entre automaticamente em um ambiente exclusivo por 1 hora, com dados fictícios. Explore o CRM sem criar senha. Administração, convites e conexões externas ficam desabilitados no teste.",
      demoFormTitle: "Solicitar demonstração",
    },
    thanks: {
      badge: "Solicitação recebida",
      title: "Obrigado!",
      titleNamed: "Obrigado",
      subtitle: "Recebemos sua mensagem. Nosso time entrará em contato em breve.",
      reference: "ID de referência",
      source: "Origem",
      back: "Voltar para a página inicial",
      urgent: "Precisa de atendimento imediato?",
      whatsapp: "Fale conosco no WhatsApp",
    },
  },
  en: {
    meta: {
      homeTitle: "Scalyns | CRM, ERP, Marketing and Business Technology",
      homeDescription:
        "Our own CRM and ERP, high-performance websites, marketing and automation. Bring sales, finance and operations together with Scalyns and explore our tools.",
      erpTitle: "Scalyns ERP | Finance, Sales and Inventory | 1-Hour Demo",
      erpDescription: "Manage customers, vendors, products, quotes, orders, invoices and expenses. Explore the Scalyns ERP dashboard and try a 1-hour sandbox with fictional data.",
      crmTitle: "Scalyns CRM | Pipeline, Calendar and Operations in One Place",
      crmDescription:
        "A complete CRM with a visual pipeline, team visibility, activities synced with Google Calendar, attachments and reports. Request a demo.",
      thanksTitle: "Thank you | Scalyns",
      thanksDescription: "We received your message. Our team will reach out shortly.",
    },
    nav: {
      about: "About",
      services: "Services",
      platform: "Platform",
      crm: "CRM",
      erp: "ERP",
      clients: "Clients",
      contact: "Contact",
      cta: "Request a Proposal",
      crmCta: "See the CRM",
      menu: "Menu",
      languageLabel: "Language",
      switchTo: "Switch to Portuguese",
    },
    hero: {
      eyebrow: "Marketing · Operations · Technology",
      title: "Marketing, operations and technology in one ecosystem.",
      subtitle:
        "Scalyns builds your digital foundation: CRM for sales, ERP for business operations, high-performance websites, automation and marketing — a structure that grows with your company.",
      ctaPrimary: "Explore our CRM and ERP",
      ctaSecondary: "Request a proposal",
      stats: [
        { value: "90+", label: "PageSpeed on delivered websites" },
        { value: "50+", label: "leads/month generated for clients" },
        { value: "+100k", label: "monthly social media views" },
        { value: "US + BR", label: "businesses served" },
      ],
      mockupActivity: "Meeting tomorrow, 10:00 AM",
      mockupSource: "Google Calendar",
    },
    about: {
      title: "About Scalyns",
      text: "Scalyns is a complete digital ecosystem for businesses growing with structure. We build your technology foundation — websites, social media, brand identity, our own CRM and ERP, automation, collaborative workspace, paid media and integrations. Our systems bring marketing, sales, operations and management closer together.",
      points: [
        "Proprietary technology: our own software, evolving with you",
        "A single team handling brand, channels, data and operations",
        "Result-driven: leads, conversion and predictability — not just deliverables",
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Modular digital architecture",
      subtitle:
        "We do not deliver isolated services: we build a complete system for your company to operate, sell and position itself with structure.",
      cta: "Build my digital structure",
      items: [
        {
          icon: "globe",
          title: "Digital Infrastructure",
          description:
            "High-performance websites (90+ PageSpeed), professional email, our own CRM and ERP, and a digital foundation for your business operations.",
          points: ["Fast websites optimized for conversion", "Email on your own domain", "Workspace and cloud files"],
        },
        {
          icon: "palette",
          title: "Branding & Identity",
          description:
            "Strategic visual identity, institutional materials, folders and standardization of your brand's digital presence.",
          points: ["Logo and complete identity", "Institutional materials", "Brand standardization"],
        },
        {
          icon: "instagram",
          title: "Social Media Management",
          description:
            "Strategic planning, content creation, post design and full management of Instagram, Facebook and other platforms.",
          points: ["Strategic editorial calendar", "Content and design included", "Reach and authority growth"],
        },
        {
          icon: "target",
          title: "Paid Media & Performance",
          description:
            "Google Ads and Meta Ads focused on lead generation, seasonal campaigns and continuous data-driven optimization.",
          points: ["Lead-focused campaigns", "Weekly data-driven optimization", "Remarketing and seasonality"],
        },
        {
          icon: "chat",
          title: "Omnichannel Support",
          description:
            "A central hub for WhatsApp, Instagram, Facebook and email, connected to the CRM for complete customer tracking.",
          points: ["Unified channels in the CRM", "Full history per contact", "Follow-ups without losing deals"],
        },
        {
          icon: "bolt",
          title: "Automation & Integrations",
          description:
            "Automated workflows with n8n, integrations between marketing, sales and operations, dashboards and strategic reports.",
          points: ["Marketing-to-sales automations", "Tool integrations", "Dashboards and reports"],
        },
      ],
    },
    platform: {
      eyebrow: "Scalyns Platform",
      title: "Our software, evolving with your business",
      subtitle:
        "Our own software for each stage of your business: CRM for customer relationships and ERP for sales, finance and inventory. Explore the products and try them with sample data.",
      statusAvailable: "Available",
      statusSoon: "Coming soon",
      crmName: "Scalyns CRM",
      crmDescription:
        "Visual pipeline, activities synced with Google Calendar, attachments on every record, unified inbox and reports — with visibility control per team.",
      crmCta: "See the CRM",
      crmDemoCta: "Request a demo",
      erpName: "Scalyns ERP",
      erpDescription:
        "Customers, vendors, catalog, quotes, orders, invoices, expenses and inventory — with a dashboard to monitor your operations.",
      erpCta: "Explore the ERP",
      workspaceName: "Scalyns Workspace",
      workspaceDescription:
        "Corporate email, cloud storage and team collaboration, inside the same Scalyns environment.",
      workspaceCta: "Join the waitlist",
    },
    crmHome: {
      eyebrow: "Scalyns Product",
      title: "Meet the Scalyns CRM",
      subtitle:
        "The CRM that organizes your entire sales operation: from first contact to after-sales. Fast, visual and integrated with the tools your team already uses.",
      demoCta: "Request a demo",
      specialistCta: "Talk to a specialist",
      learnCta: "Explore all features",
      features: [
        { title: "Fast, fluid pipeline", description: "Quick kanban with drag and drop, following your team's real pace." },
        { title: "Visibility under control", description: "Pipelines and tasks in general, team or personal mode — everyone sees what they should." },
        { title: "Google Calendar integrated", description: "Activities synced with Google Calendar, with reminders on your phone too." },
        { title: "Everything filed in the right place", description: "Notes, files and photos linked to the lead, activity and request." },
        { title: "Unified inbox and campaigns", description: "Emails, SMS and calls connected to contacts, without leaving the CRM." },
        { title: "Decisions backed by data", description: "Dashboards and reports on conversion, leads and performance by period." },
      ],
    },
    clients: {
      eyebrow: "Clients",
      title: "Companies already growing with Scalyns",
      subtitle: "Real results from complete operations — marketing, website, CRM and automations working together.",
      gainsLabel: "What we delivered",
      siteCta: "Visit website",
      instagramCta: "Instagram",
      contactCta: "Talk to us",
      previewSoon: "Website preview",
    },
    contact: {
      title: "Shall we structure your company's growth?",
      subtitle: "Strategic diagnosis and personalized digital architecture",
      textOne:
        "Scalyns builds digital ecosystems for businesses growing with organization and strong positioning: high-performance websites, our own CRM and ERP, automation, corporate workspace, omnichannel support, paid media, social media and brand identity.",
      textTwo:
        "If your company needs to generate more leads, organize internal processes, strengthen its brand or connect technology with marketing, let's build that foundation together. Fill in the form and receive a personalized strategic diagnosis.",
      address: "Serving businesses in the US and Brazil",
      whatsappCta: "Chat on WhatsApp",
      form: {
        title: "Talk to Scalyns",
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        phone: "Phone (with area code)",
        subject: "Subject",
        message: "Describe your needs (optional)",
        consent: "I agree to be contacted via email or WhatsApp.",
        submit: "Send request",
        sending: "Sending...",
        success: "Form sent successfully! Redirecting...",
        thanksUrl: "/en/thanks",
        privacy: "By submitting you agree to be contacted via email and WhatsApp.",
        demoSubject: "I would like to see a Scalyns CRM demo",
        demoNotice: "You will be redirected to a 1-hour demo of the Scalyns CRM.",
        demoSubmit: "Request demo and try it now",
        demoRedirecting: "Preparing your demo...",
        demoBusy: "Our demo is temporarily at capacity. Try again in a few minutes — our team will reach out.",
        demoUnavailable: "We received your contact details, but could not open the demo right now. Retry or request a follow-up from our team.",
        demoRetry: "Try opening the demo again",
        demoFollowup: "Request a follow-up",
        waitlistSubject: "I would like to join the waitlist",
        errors: {
          fast: "Submitted too quickly. Please fill in the form normally and try again.",
          phone: "Invalid phone number. Include your area code and, for mobile, the 9 digit.",
          consent: "You need to accept contact via email or WhatsApp.",
          captcha: "Please complete the security check before submitting.",
          captchaLoad: "Could not load the anti-robot verification. Refresh the page and try again.",
          worker: "Configuration error: submission service missing.",
          generic: "Error sending",
          unknown: "unknown",
        },
      },
    },
    footer: {
      tagline: "Strategy, content, technology and automation to turn businesses into relevant brands in the digital landscape.",
      navigation: "Navigation",
      contact: "Contact us",
      rights: "All rights reserved.",
      languageLabel: "Language",
      whatsappLabel: "WhatsApp",
    },
    crmPage: {
      eyebrow: "Scalyns Product",
      title: "The complete CRM to sell with predictability",
      subtitle:
        "Visual pipeline, Google-integrated calendar, files, inbox and reports in a fast, secure system built for your team's daily routine.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "Chat on WhatsApp",
      problemTitle: "Your sales operation loses opportunities every day — with no single place to happen.",
      problemPoints: [
        "Leads spread across spreadsheets, WhatsApp and notebooks",
        "Forgotten follow-ups and cooling negotiations",
        "No one knows who served the customer or what was agreed",
        "No data to see where sales get stuck",
      ],
      solutionTitle: "One single place for your sales process",
      solutionText:
        "Scalyns CRM organizes the pipeline, the activities and the history of every customer — with the integrations your team already uses daily.",
      featuresTitle: "Features that make a difference daily",
      features: [
        { title: "Fast, fluid kanban", description: "Drag cards between stages with instant updates, smart pagination and keyboard navigation." },
        { title: "General, team or personal visibility", description: "Each user sees only what they should, with central administration and auditing of sensitive actions." },
        { title: "Activities + Google Calendar", description: "Two-way sync: create in the CRM and get Google reminders on your phone." },
        { title: "Attachments and photos on records", description: "Documents and images linked to the lead, activity and request, with controlled access." },
        { title: "Unified inbox", description: "Emails, SMS and calls connected to contacts and the negotiation history." },
        { title: "Reports and dashboards", description: "Conversion by stage, leads by source, performance by period and exports." },
        { title: "Internal tasks and projects", description: "Team requests on their own boards, with checklist, comments and due dates." },
        { title: "Automations", description: "Rules that move deals, create tasks and alert the team at the right moment." },
      ],
      integrationsTitle: "Connected to what you already use",
      integrationsText:
        "Google Calendar, Slack, Jobber, Google Ads, Google Analytics, email, SMS and more. Integrations keep evolving with your process.",
      securityTitle: "Security and control",
      securityPoints: [
        "Role-based permissions (admin, manager, member and viewer)",
        "Team visibility with immediate access revocation",
        "Auditing of important actions",
        "Data hosted dedicated to your company",
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        { q: "Do I need to install anything to use the CRM?", a: "No. The CRM runs directly in the browser, on your company's own address, accessible from computers and phones." },
        { q: "Can I control who sees each pipeline and lead?", a: "Yes. Pipelines and boards can be general, team-specific or personal, with role-based permissions and central administration." },
        { q: "Does the CRM send reminders to my phone?", a: "Yes. Activities sync with Google Calendar and reminders arrive on your phone through the calendar app." },
        { q: "How long does implementation take?", a: "The standard environment goes live within days. Customizations and integrations are planned around your process." },
      ],
      demoTitle: "See the Scalyns CRM in action",
      demoText:
        "Fill in the form to enter your own sandbox automatically for 1 hour, with fictional data and no password to create. Administration, invitations and external connections are disabled in the trial.",
      demoFormTitle: "Request a demo",
    },
    thanks: {
      badge: "Request received",
      title: "Thank you!",
      titleNamed: "Thank you",
      subtitle: "We received your message. Our team will reach out shortly.",
      reference: "Reference ID",
      source: "Source",
      back: "Back to home",
      urgent: "Need immediate assistance?",
      whatsapp: "Chat with us on WhatsApp",
    },
  },
} as const;

export type UiStrings = typeof ui.pt;

export function useTranslations(lang: Lang): UiStrings {
  return ui[lang] as UiStrings;
}

export function otherLang(lang: Lang): Lang {
  return lang === "pt" ? "en" : "pt";
}

export function htmlLang(lang: Lang): string {
  return languages[lang].htmlLang;
}
