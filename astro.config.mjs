import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://rrprodhan.github.io",
  integrations: [sitemap()],
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  vite: {
    build: { cssMinify: true },
  },
});
