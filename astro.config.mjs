// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Cambia este dominio cuando el sitio tenga hosting definitivo.
// Sitemap y las etiquetas canonical/OG dependen de este valor.
const SITE_URL = "https://www.vitreocapital.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: "directory",
  },
});
