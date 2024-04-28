import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

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
    output: "hybrid", adapter: vercel()
});
