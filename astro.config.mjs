import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import liciousI18n from "@astrolicious/i18n";


// https://astro.build/config
export default defineConfig({
  site: "https://test.com",
  output: "hybrid",
  adapter: vercel(),
  integrations: [liciousI18n({
    defaultLocale: "fr",
    locales: ["fr", "de", "en"],
    strategy: "prefix",
    sitemap: true
  })]
});