import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import liciousI18n from "@astrolicious/i18n";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "de", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  output: "hybrid",
  adapter: vercel(),
  integrations: [liciousI18n()]
});