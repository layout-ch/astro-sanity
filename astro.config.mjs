import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import liciousI18n from "@astrolicious/i18n";

import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://test.com",
  output: "hybrid",
  adapter: vercel(),
  integrations: [liciousI18n({
    defaultLocale: "fr",
    locales: ["fr", "de", "en"],
    strategy: "prefix",
    sitemap: true,
    pages: {
      "a-propos": {
        de: "ueber-uns",
        en: "about-us"
      }
    }
  }), sanityIntegration(
    {
      projectId: "t9cmnozc",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }
  ), react()]
});