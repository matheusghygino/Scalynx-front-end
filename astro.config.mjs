// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://scalyns.com",

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
      filter: (page) => !page.includes("/thanks"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],

    define: {
      "import.meta.env.PUBLIC_FORM_API_KEY": JSON.stringify(
        process.env.PUBLIC_FORM_API_KEY
      ),
    },

    build: {
      /* evita múltiplos CSS bloqueando render */
      cssCodeSplit: false,

      /* melhor compressão do bundle */
      minify: "esbuild",
    },
  },

  /* melhora performance geral */
  compressHTML: true,
});
