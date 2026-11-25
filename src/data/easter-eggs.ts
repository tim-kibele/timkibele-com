// Alle Easter Eggs der Seite. Jedes neue Easter Egg wird hier eingetragen und ruft beim Finden
// `unlock('<id>')` aus `src/scripts/achievements.ts` auf. Die Erfolge-Seite und das Pop-up lesen von hier.
// `path` ist die Seite, auf der das Easter Egg versteckt ist (ohne Sprache), `page` ihr Name für den Tipp.
// Der Tipp nennt nur die Seite und verrät nichts weiter. `found` beschreibt, was man getan hat.
export type L10n = { de: string; en: string };
export type Egg = { id: string; path: string; page: L10n; title: L10n; found: L10n };

export const eggs: Egg[] = [
  {
    id: 'you-died',
    path: 'interessen/gaming/',
    page: { de: 'Gaming-Seite', en: 'gaming page' },
    title: { de: 'You Died', en: 'You Died' },
    found: { de: 'Dreimal auf die Herzen geklickt.', en: 'Clicked the hearts three times.' },
  },
  {
    id: 'final-boss',
    path: 'interessen/gaming/',
    page: { de: 'Gaming-Seite', en: 'gaming page' },
    title: { de: 'Der Endgegner', en: 'The final boss' },
    found: { de: 'Bis ganz ans Ende gescrollt und den Endgegner aufgedeckt.', en: 'Scrolled all the way down and uncovered the final boss.' },
  },
  {
    id: 'loop-closed',
    path: 'interessen/ki/',
    page: { de: 'KI-Seite', en: 'AI page' },
    title: { de: 'Der Kreis schließt sich', en: 'Closing the loop' },
    found: { de: 'Die Verbindung vom Ergebnis zurück zum Menschen gezogen.', en: 'Drew the connection from the result back to the human.' },
  },
];
