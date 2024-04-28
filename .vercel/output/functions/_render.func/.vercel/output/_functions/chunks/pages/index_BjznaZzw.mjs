import { e as createAstro, f as createComponent } from '../astro_DZmWwCat.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro("https://test.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const preferredLocale = Astro2.preferredLocale;
  if (preferredLocale) {
    return Astro2.redirect(`/${preferredLocale}/`, 301);
  } else {
    return Astro2.redirect(`/en/`, 301);
  }
}, "/Users/kopp/Desktop/Code/astro-sanity/src/pages/index.astro", void 0);

const $$file = "/Users/kopp/Desktop/Code/astro-sanity/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
