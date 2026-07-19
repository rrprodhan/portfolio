import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const DEFAULT_SITE_URL = "https://raiyanprodhan.com";

function getSiteURL() {
  const siteURL = new URL(process.env.SITE_URL?.trim() || DEFAULT_SITE_URL);

  if (!["http:", "https:"].includes(siteURL.protocol)) {
    throw new Error("SITE_URL must use the http or https protocol.");
  }

  siteURL.search = "";
  siteURL.hash = "";
  return siteURL.href;
}

// Add the pathname of any future noindex or utility page here as well.
const sitemapExcludedPaths = new Set(["/404", "/404/"]);

export default defineConfig({
  site: getSiteURL(),
  integrations: [
    sitemap({
      filter: (page) => !sitemapExcludedPaths.has(new URL(page).pathname),
    }),
  ],
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  vite: {
    build: { cssMinify: true },
  },
});
