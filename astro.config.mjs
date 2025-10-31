// astro.config.mjs
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';


import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: "https://scalyns.com",
  integrations: [tailwindcss(), sitemap({
    changefreq: "weekly",
    priority: 0.8,
    lastmod: new Date(),
    customPages: [
    ],
  })],
  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.PUBLIC_FORM_API_KEY": JSON.stringify(process.env.PUBLIC_FORM_API_KEY)
    },
  },
  integrations: [preact({ compat: false }), sitemap()],
});