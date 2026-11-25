# timkibele.com

Persönliche Profilseite von Tim Kibele, online unter [www.timkibele.com](https://www.timkibele.com). Die Seite zeigt Lebenslauf, Projekte und Interessen auf Deutsch und Englisch.

## Inhalt

- **Start:** kurze Vorstellung
- **Projekte:** Einträge mit Beschreibung, Stack, Code-Link und einer Animation zum jeweiligen Thema
- **Interessen:** KI, Gaming, mechanische Tastaturen und weitere. Die Seiten haben eine große Animation neben dem Text. Auf der Gaming-Seite gibt es eine Schachpartie gegen Stockfish, auf der Tastaturen-Seite ein Tippduell
- **Lebenslauf:** Berufserfahrung, Ausbildung, Technologien
- **Geheimnisse:** Übersicht der Easter Eggs, die auf der Seite versteckt sind. Gefundene stehen dort, für die anderen gibt es einen Tipp. Der Fortschritt bleibt im Browser (localStorage), nichts wird gesendet
- **Datenschutz**
- Sitemap, robots.txt, Open-Graph-Vorschaubild und Lebenslauf als PDF zum Herunterladen. Besucherzahlen über Cloudflare Web Analytics (ohne Cookies, nur im Produktions-Build)

## Technik

- [Astro](https://astro.build) 7, vollständig statisch, ohne Frontend-Framework
- Zwei Sprachen über die Routen `/de/…` und `/en/…`, Oberflächentexte in `src/i18n/ui.ts`
- Inhalte als Markdown in Content Collections (`projects`, `interests`)
- [chess.js](https://github.com/jhlywa/chess.js) für die Schachregeln, [Stockfish.js](https://github.com/nmrugg/stockfish.js) als Engine (läuft als Worker im Browser, Dateien in `public/stockfish/`)
- Schriften über [Fontsource](https://fontsource.org) (Newsreader, Vollkorn, Hanken Grotesk), Hell- und Dunkelmodus
- Hosting auf GitHub Pages, Deployment per GitHub Actions bei Push auf `main`

## Projektstruktur

```text
public/                 Statische Dateien (CNAME, Favicon, Stockfish)
src/
├── components/         Seitenbausteine, Schachpartie, Tippduell
│   └── animations/     Animationen für Projekt- und Interessenseiten
├── content/
│   ├── projects/       Ein Markdown-Eintrag pro Projekt
│   └── interests/      Ein Markdown-Eintrag pro Interessenseite
├── data/               Liste der Easter Eggs
├── i18n/               Oberflächentexte (de, en)
├── layouts/            Basislayout mit Kopfleiste und Fußzeile
├── pages/[lang]/       Seiten für beide Sprachen
├── scripts/            Gemeinsamer Code (Easter Eggs freischalten)
└── styles/             Tokens, Basis-CSS und globale Stile
AGENTS.md               Regeln für Layout, Animationen und Easter Eggs
```

## Befehle

Alle Befehle laufen im Hauptverzeichnis. Voraussetzung ist Node.js ab Version 22.23.4.

| Befehl            | Aktion                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installiert die Abhängigkeiten                   |
| `npm run dev`     | Startet den Entwicklungsserver auf `localhost:4321` |
| `npm run build`   | Baut die Seite nach `./dist/`                    |
| `npm run preview` | Zeigt den Build lokal an                         |

## Inhalte pflegen

- **Projekt:** `src/content/projects/<name>.md` mit Titel und Beschreibung je Sprache, Stack-Tags, Jahr und optional `repo`, `url` und `animation`
- **Interessenseite:** `src/content/interests/<name>.md` mit dem Text je Sprache im Feld `text`. Abschnitte beginnen mit `##`, Listen mit `-`. Eine Schachpartie oder ein Tippduell lassen sich über `::chess` und `::race` einbinden
- **Neues Easter Egg:** in `src/data/easter-eggs.ts` eintragen und beim Finden `unlock('<id>')` aufrufen (aus `src/scripts/achievements.ts`)

## Lizenzen von Drittcode

- Stockfish.js steht unter der GPLv3. Die Lizenz liegt in `public/stockfish/Copying.txt`, die Seite verlinkt den Quellcode unter der Schachpartie
- chess.js steht unter der BSD-Lizenz
- Die Schriften stehen unter der SIL Open Font License
