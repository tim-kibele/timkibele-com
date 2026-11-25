// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.timkibele.com',
  integrations: [
    sitemap({
      // Die Startadresse leitet nur auf /de/ weiter und gehört nicht in die Sitemap.
      // Familie und Freundin stehen erst drin, wenn die Texte da sind.
      filter: (page) => page !== 'https://www.timkibele.com/' && !/\/interessen\/(familie|freundin)\/$/.test(page),
      i18n: { defaultLocale: 'de', locales: { de: 'de-DE', en: 'en-US' } } }),
  ],
  trailingSlash: 'always',
  // Alte Adresse der Geheimnisse-Seite (früher "Erfolge").
  redirects: { '/de/erfolge/': '/de/geheimnisse/', '/en/erfolge/': '/en/geheimnisse/' },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: true },
  },
});
