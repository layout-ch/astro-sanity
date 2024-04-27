import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "de", "en"],
        routing: {
            prefixDefaultLocale: true
        }
    },
    output: "static", adapter: vercel()
});
