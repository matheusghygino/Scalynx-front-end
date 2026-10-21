# Scalyns — Site institucional

Site da Scalyns (Astro 5 + Tailwind CSS v4), com versões em português e inglês,
mockups do CRM, cases de clientes e formulário de contato próprio.

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
envia eventos para o GTM. O campo `source` diferencia a origem do lead
(`site-home`, `waitlist-erp`, `waitlist-workspace`), e os botões de lista de espera pré-preenchem o
assunto automaticamente.

O formulário de demonstração do CRM (`src/components/Contact/DemoForm.astro`, usado apenas na
página do CRM) segue o mesmo envio do lead e, em seguida, chama a API da demo
(`PUBLIC_DEMO_API_URL`, padrão `https://demo.scalyns.cloud`) para redirecionar o visitante à
demonstração de 1 hora. Se a demo estiver indisponível, o visitante vai para `/thanks`.

## Deploy (VPS)

1. `npm ci && npm run build`
2. Publique o conteúdo de `dist/` no seu servidor (nginx, Caddy ou o proxy já usado na VPS).
3. O site é 100% estático — não requer runtime Node em produção.
