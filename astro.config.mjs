// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.timkibele.com',
  trailingSlash: 'always',
  // Alte Adresse der Geheimnisse-Seite (früher "Erfolge").
  redirects: { '/de/erfolge/': '/de/geheimnisse/', '/en/erfolge/': '/en/geheimnisse/' },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: true },
  },
});
