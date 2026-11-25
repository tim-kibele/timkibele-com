// Alle Easter Eggs der Seite. Jedes neue Easter Egg wird hier eingetragen und ruft beim Finden
// `unlock('<id>')` aus `src/scripts/achievements.ts` auf. Die Geheimnisse-Seite und das Pop-up lesen von hier.
// `path` ist die Seite, auf der das Easter Egg versteckt ist (ohne Sprache), `page` ihr Name für den Tipp.
// `hint` ist ein vager Hinweis ohne die Lösung zu verraten. `found` beschreibt, was man getan hat.
export type L10n = { de: string; en: string };
export type Egg = { id: string; path: string; page: L10n; title: L10n; hint: L10n; found: L10n };

export const eggs: Egg[] = [
  {
    id: 'you-died',
    path: 'interessen/gaming/',
    page: { de: 'Gaming-Seite', en: 'gaming page' },
    title: { de: 'You Died', en: 'You Died' },
    hint: { de: 'Die Herzen dort sind mehr als Deko.', en: 'The hearts there are more than decoration.' },
    found: { de: 'Dreimal auf die Herzen geklickt.', en: 'Clicked the hearts three times.' },
  },
  {
    id: 'final-boss',
    path: 'interessen/gaming/',
    page: { de: 'Gaming-Seite', en: 'gaming page' },
    title: { de: 'Der Endgegner', en: 'The final boss' },
    hint: { de: 'Die Leiste dort hört nicht auf, wo man denkt.', en: 'The bar there does not stop where you think it does.' },
    found: { de: 'Bis ganz ans Ende gescrollt und den Endgegner aufgedeckt.', en: 'Scrolled all the way down and uncovered the final boss.' },
  },
  {
    id: 'loop-closed',
    path: 'interessen/ki/',
    page: { de: 'KI-Seite', en: 'AI page' },
    title: { de: 'Der Kreis schließt sich', en: 'Closing the loop' },
    hint: { de: 'Der Kreislauf dort ist nicht ganz geschlossen.', en: 'The loop there is not quite closed.' },
    found: { de: 'Die Verbindung vom Ergebnis zurück zum Menschen gezogen.', en: 'Drew the connection from the result back to the human.' },
  },
  {
    id: 'race-won',
    path: 'interessen/mechanische-tastaturen/',
    page: { de: 'Tastaturen-Seite', en: 'keyboards page' },
    title: { de: 'Tippduell gewonnen', en: 'Typing race won' },
    hint: { de: 'Manchmal gewinnt man, indem man nichts tut.', en: 'Sometimes you win by doing nothing.' },
    found: { de: 'Das Tippduell gewonnen, schnell getippt oder gar nicht.', en: 'Won the typing race, by typing fast or not at all.' },
  },
  {
    id: 'git-log',
    path: 'lebenslauf/',
    page: { de: 'Lebenslauf-Seite', en: 'CV page' },
    title: { de: 'git log', en: 'git log' },
    hint: { de: 'Ein Werkzeug in meinen Fähigkeiten reagiert auf einen Klick.', en: 'One of the tools in my skills reacts to a click.' },
    found: { de: 'Auf Git und GitHub geklickt und den Lebenslauf als git log gesehen.', en: 'Clicked Git and GitHub and saw the CV as a git log.' },
  },
];
