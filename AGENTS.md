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
- Layout "Bühne": Jede Seite ist ein `.split` mit einer Jade-Fläche links (`.split-art`, bis an den Bildschirmrand) und dem Text rechts (`.split-text`). Auf der Bühne steht das Porträt (Startseite, `split--portrait`), die Animation (Projekt- und Interessenseiten mit `animation:`) oder sonst der Seitentitel groß (`split--title`, das `h1` steht dann auf der Bühne statt im Text). Innerhalb der Bühne gelten die Farb-Tokens immer in ihrer dunklen Variante (`color-scheme: dark`). Unter 64rem wird die Bühne zum Band über dem Text (Porträt, Titel), Animationen blenden sich dort aus.
- Jede Projektseite hat außerdem eine dekorative Animation auf der Bühne. Alle Animationen scrollen mit der Seite. Die mit fester Zeichnung füllen die ganze Bühne, so groß ihr Seitenverhältnis es erlaubt (absolut positioniert, damit sie die Seite nicht verlängern); die seitenlangen (Gaming, Tastaturen, Musik) richten sich nach dem Text. Die Textspalte streckt sich nicht auf die Bühnenhöhe (`align-self: start`), sonst schaukelt sich der Equalizer auf. Das Projekt wählt sie mit `animation: <name>`; eine Interessenseite kann dieselbe Registry nutzen (KI: `agents`, Enum in der Interessen-Sammlung in `src/content.config.ts`). Die Komponenten liegen in `src/components/animations/`, registriert werden sie in `src/components/animations/index.ts` und in der Enum `animation` in `src/content.config.ts`.
- Seitenanimationen außerhalb der Sammlungen werden direkt in der Seite eingebunden (nicht über die Registry): Lebenslauf `CvGraph` (Commit-Graph, ein Punkt pro Eintrag aus Berufserfahrung und Ausbildung, auf Höhe der Zeile), Interessen-Übersicht `InterestMarks` (Motiv je Unterseite neben ihrem Listeneintrag, über `data-topic`; Seiten ohne Motiv bekommen keins, neue Motive dort in `icons` ergänzen), 404 `LostStone` (Steinturm, dessen oberster Stein herunterfällt, nur CSS), Projekt-Übersicht `ProjectTower` (ein Stein pro Projekt aus der Sammlung, in Kartenreihenfolge, jeder Stein auf Höhe seiner Karte und so hoch wie sie; neue Projekte brauchen keine Änderung; Karten tragen `data-project` für das Hervorheben).
- Regeln für eine Animation: Klasse `margin-art` am Wurzelelement (die Platzierung übernimmt `.split` in den Seitenvorlagen), feste Zeichenfläche mit `viewBox` (Höhe etwa 5-mal die Breite, damit sie in der Spalte nicht zu lang wird), `aria-hidden`, die Struktur als festes SVG, damit sie ohne JavaScript und bei `prefers-reduced-motion` stillsteht, Farben nur über Tokens, nur `transform` und `opacity` bzw. Farbwechsel animieren.
- Schachpartie: Im Interessen-Textfeld startet `::chess` die Partie gegen Stockfish (`src/components/ChessGame.astro`). Die Engine (Stockfish.js, GPLv3, unverändert) liegt in `public/stockfish/`, die Regeln kommen von `chess.js`. Stärke: `UCI_Elo` 1500 mit fester Suchtiefe 6, in Testpartien gegen Stockfishs eigene Elo-Begrenzung (1320) ungefähr 1480 auf Stockfishs Skala (Tiefe statt fester Zeit, damit es nicht vom Gerät abhängt). Der Satz zu Tims eigener Elo (1200) im Seitentext bleibt davon unabhängig. Beim Aktualisieren der Engine die Lizenzdatei und die README mitpflegen.
- Easter Eggs auf der Gaming-Seite (in `Gamepad.astro`): Dreimal auf die Herzen klicken zeigt einen "YOU DIED"-Bildschirm, der die Seite sperrt. Wer die leere Strecke unter dem Schach (zwei Bildschirmhöhen, `.boss-gap`; auf dem Handy ohne Leiste, dort gibt es unter dem Einleitungsabsatz eine kleine Herzleiste `.hud` für das YOU-DIED-Easter-Egg) bis ganz unten durchscrollt, wobei die Leiste mitwächst, deckt eine fünfte Aufgabe auf der Leiste und darunter eine Partie gegen "Timgnus Kibelsen" auf (`::boss` im Textfeld, Stockfish ohne Stärkebegrenzung, 1,5 Sekunden pro Zug).
- Easter Egg auf der Musik-Seite (`PianoTilesGame.astro`, `::tiles` im Textfeld): Dreimal schnell auf die Überschrift der Songliste tippen öffnet ein Kachelspiel. Es gibt ein Level, eine Kurzfassung von "Für Elise" (Beethoven, gemeinfrei, das Thema einmal, etwa 11 Sekunden); jede Kachel spielt die nächste Note, die Töne erzeugt der Browser selbst. Neue Level dürfen nur gemeinfreie Stücke sein (Komponist seit über 70 Jahren tot), keine Aufnahmen und keine Songmelodien aus den Lieblingssongs.
- Easter Egg auf der Lebenslauf-Seite (Skript in `lebenslauf/index.astro`): Ein Klick auf den Chip "Git und GitHub" zeigt Berufserfahrung und Ausbildung als `git log` (aus der Seite gelesen, nichts Neues). Escape oder `$ exit` schaltet zurück.
- Easter Egg auf der Tastaturen-Seite (in `TypeRace.astro`): Wer das Tippduell startet und nichts tippt, bis der Bot die Hälfte des Textes geschafft hat, bekommt eine Fehlermeldung im Textfeld, der Bot stürzt ab, und man gewinnt. Der Erfolg gilt für jeden Sieg, auch für einen ehrlichen.
- Easter Egg auf der KI-Seite (in `AgentTeam.astro`): Der Rückweg vom Ergebnis zum Menschen fehlt. Wer ihn per Ziehen (Maus oder Touch, auch vom Menschen zum Ergebnis) verbindet, schließt den Kreislauf; erst dann prüft der Mensch in der Animation die Ergebnisse. Am Rand des Bildschirms scrollt die Seite beim Ziehen mit. Nur sichtbar, wo die Animation sichtbar ist (ab 64 rem).
- Easter Eggs: Jedes Easter Egg wird in `src/data/easter-eggs.ts` eingetragen (Seite, Titel, Tipp, Beschreibung auf Deutsch und Englisch) und ruft beim Finden `unlock('<id>')` aus `src/scripts/achievements.ts` auf. Die Seite `/<lang>/geheimnisse/` (Link im Hauptmenü) und das Pop-up lesen von dort; gefundene Easter Eggs liegen nur im lokalen Speicher des Browsers (`tk-easter-eggs`). Der Tipp für nicht gefundene Easter Eggs nennt die Seite und gibt einen vagen Hinweis, nie die Lösung. Neue Easter Eggs ohne Eintrag gelten als unfertig.
- Commit-Messages auf Englisch (siehe `../CLAUDE.md`).

## Texte

- Jeder Text auf der Seite (DE und EN) läuft vor dem Zeigen und Committen durch den Skill `humanizer` (`.claude/skills/humanizer/`, https://github.com/blader/humanizer). Fakten, Zahlen und Namen bleiben unverändert, die Stimme des Autors bleibt erhalten, nichts wird erfunden.
- Interessenseiten: `src/content/interests/<thema>.md`, Feld `text` je Sprache; eine Leerzeile trennt Absätze.

## Suche, Vorschau und PDF

- Sitemap: `@astrojs/sitemap` (Filter in `astro.config.mjs`), `public/robots.txt` verweist darauf. Familie und Freundin sind ausgenommen, bis ihre Texte da sind; dann den Filter anpassen.
- Link-Vorschau: Open-Graph- und Twitter-Tags in `src/layouts/Base.astro`, ein gemeinsames Bild `public/og.png` (1200 × 630, Name und Porträt).
- Lebenslauf-PDFs (`public/Tim-Kibele-Lebenslauf.pdf`, `public/Tim-Kibele-CV.pdf`) kommen aus dem Druckstil der Lebenslaufseite (`@media print` in `global.css`). Nach jeder Änderung am Lebenslauf neu erzeugen: `npm run build`, dann `node scripts/cv-pdf.mjs` (braucht Playwright mit Chromium lokal).
- Kein RSS: Es gibt keinen Blog und keine Berichte, die ein Feed ausliefern könnte.

## Neue Projektseite

Bei jeder neuen Projektseite (`src/content/projects/*.md`) den Lebenslauf mitpflegen: Programmiersprachen, Technologien und Werkzeuge in `src/pages/[lang]/lebenslauf/index.astro` ergänzen (beide Sprachen, nur was wirklich zum Projekt gehört und Tim nutzt), danach `npm run build` und `node scripts/cv-pdf.mjs`, damit die PDFs stimmen. Die Ergänzungen in der Antwort nennen, damit Tim sie prüfen kann.
