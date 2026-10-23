# Scalyns — Site institucional

Site da Scalyns (Astro 5 + Tailwind CSS v4), com versões em português e inglês,
apresentação e mockups do CRM e ERP, cases de clientes e formulários de contato e demonstração.

## Comandos

| Comando           | Ação                                   |
| :---------------- | :------------------------------------- |
| `npm install`     | Instala as dependências                |
| `npm run dev`     | Servidor local em `localhost:4321`     |
| `npm run build`   | Gera o site estático em `./dist/`      |
| `npm run preview` | Prévia local do build de produção      |

## Estrutura

```text
src/
├── i18n/ui.ts            # Textos em PT e EN + dados de contato
├── data/
│   ├── produtos.ts       # Cards da Plataforma Scalyns (CRM, ERP, Workspace)
│   └── clientes.ts       # Cases de clientes (JSM, FS, EB)
├── components/           # Seções e blocos visuais (mockups, header, footer...)
├── layout/Layout.astro   # SEO, hreflang, detecção de idioma
└── pages/
    ├── index.astro       # Home (PT)
    ├── crm.astro         # Página do CRM (PT)
    ├── erp.astro         # Página do ERP (PT)
    ├── thanks.astro      # Obrigado (noindex)
    └── en/               # Versões em inglês das mesmas páginas
```

## Idioma

- O idioma padrão é detectado pelo navegador (`navigator.language`) na primeira visita
  e salvo em `localStorage` (`scalyns_lang`).
- O seletor PT/EN no header e no footer grava a preferência.
- Links podem forçar o idioma com `?lang=pt` ou `?lang=en`.

## Como adicionar fotos

Os mockups em código podem ser substituídos por imagens reais:

1. **Sites dos clientes:** coloque as miniaturas em `src/assets/`, importe-as em
   `src/data/clientes.ts` e atribua a imagem importada ao campo `preview` do cliente.
   O componente `BrowserFrame` gera versões WebP responsivas no build, preserva a imagem inteira
   e usa carregamento sob demanda. As miniaturas atuais já incluem a moldura de navegador.
2. **Vídeo de demonstração do CRM:** quando o vídeo estiver pronto, incorpore-o na seção
   `docs`/home adicionando um bloco de embed na seção do CRM (`CrmShowcase.astro`).

## Como adicionar um novo software à Plataforma

Edite `src/data/produtos.ts` e adicione uma entrada usando uma das chaves de texto de
`src/i18n/ui.ts` (seção `platform`). Produtos com `status: "soon"` mostram o selo
"Em breve" e o botão de lista de espera; `status: "available"` destaca o card com CTA.

## Formulários

O formulário de contato posta para o Worker `lead-gateway` (Cloudflare) com Cloudflare Turnstile e
envia eventos para o GTM. O campo `formSource` diferencia a origem do lead
(`site-home`, `crm-demo`, `erp-demo`, `waitlist-workspace`), e os botões de lista de espera pré-preenchem o
assunto automaticamente.

`src/components/Contact/DemoForm.astro` e `demo-form.ts` atendem aos dois produtos:

| Produto | Páginas | API pública (origem, sem `/api`) |
| --- | --- | --- |
| CRM | `/crm`, `/en/crm` | `PUBLIC_DEMO_API_URL=https://demo.scalyns.cloud` |
| ERP | `/erp`, `/en/erp` | `PUBLIC_ERP_DEMO_API_URL=https://erp-demo.scalyns.cloud` |

O formulário primeiro registra o lead no gateway e depois chama `POST /api/demo/access`, usando
dois tokens Turnstile novos e diferentes. A URL de entrada única retornada pela API abre a sessão
de 1 hora. O ERP recebe `locale: pt-BR` ou `en`, que define a interface e os exemplos BRL/USD.
O corpo da solicitação CRM continua compatível com a API anterior durante a atualização.

Se a demo estiver cheia ou indisponível após o registro do lead, o formulário permanece na página
e permite tentar abrir o teste novamente sem duplicar o mesmo lead. Um link para `/thanks`
permite optar pelo contato da equipe. Nenhuma credencial privada vai para o site.

As variáveis públicas são resolvidas no **build**. Seus valores padrão já apontam para os dois
domínios de demonstração. O ERP precisa estar publicado antes de divulgar o formulário em produção.
As duas demos bloqueiam administração, convites e conexões externas. Os mockups do ERP são
identificados como ilustrativos; os testes usam dados fictícios por visitante.

## Deploy (VPS)

1. `npm ci && npm run build`
2. Publique o conteúdo de `dist/` no seu servidor (nginx, Caddy ou o proxy já usado na VPS).
3. O site é 100% estático — não requer runtime Node em produção.
