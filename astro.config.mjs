// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Sitemap y las etiquetas canonical/OG dependen de este valor.
const SITE_URL = "https://www.vitreo.com.co";

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: "directory",
  },
});
