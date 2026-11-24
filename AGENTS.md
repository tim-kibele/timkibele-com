## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Projektseiten

- Jede Projektseite (`src/content/projects/<name>.md`, Route `/<lang>/projekte/<name>/`) nutzt dieselbe Struktur im Feld `detail`: `summary`, `motivation`, `learnings`, `stack`, `note`, jeweils für `de` und `en`.
- Jede Projektseite hat außerdem eine kleine, dekorative Animation am rechten Rand. Das Projekt wählt sie mit `animation: <name>`. Die Komponenten liegen in `src/components/animations/`, registriert werden sie in `src/components/animations/index.ts` und in der Enum `animation` in `src/content.config.ts`.
- Regeln für eine Animation: Klasse `margin-art` am Wurzelelement (verankert sie oben am rechten Seitenrand, sie scrollt mit der Seite weg, und blendet sie unter 77rem aus), `aria-hidden`, die Struktur als festes SVG, damit sie ohne JavaScript und bei `prefers-reduced-motion` stillsteht, Farben nur über Tokens, nur `transform` und `opacity` bzw. Farbwechsel animieren.
- Commit-Messages auf Englisch (siehe `../CLAUDE.md`).
