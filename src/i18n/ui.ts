export const languages = ['de', 'en'] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  de: {
    siteTitle: 'Tim Kibele',
    tagline: 'Informatikstudent an der LMU München.',
    nav: { home: 'Start', projects: 'Projekte', interests: 'Interessen', cv: 'Lebenslauf', legal: 'Datenschutz', imprint: 'Impressum', achievements: 'Geheimnisse', menu: 'Menü' },
    home: {
      heading: 'Hallo, ich bin Tim.',
      intro: 'Hier zeige ich, woran ich arbeite und was ich dabei lerne.',
      portraitAlt: 'Porträt von Tim Kibele: Er lächelt leicht, trägt einen hellen Hoodie und hat die Arme vor der Brust verschränkt.',
      more: 'Mehr von mir',
      cvNote: 'Mein Werdegang auf einen Blick.',
      closing: 'Schreib mir.',
    },
    projects: { title: 'Projekte', intro: 'Meine Projekte. Hier findest du die Übersicht.', open: 'Öffnen', code: 'Code', motivation: 'Motivation', learnings: 'Learnings', stack: 'Stack' },
    interests: {
      title: 'Interessen',
      intro: 'Wofür ich mich interessiere und was mir wichtig ist.',
      note: 'Text folgt.',
    },
    cv: { title: 'Lebenslauf', pdf: 'Als PDF herunterladen', pdfFile: 'Tim-Kibele-Lebenslauf.pdf' },
    achievements: {
      title: 'Geheimnisse',
      intro: 'Auf dieser Seite sind Easter Eggs versteckt. Gefundene stehen hier, für alle anderen gibt es einen Tipp.',
      of: 'von', tip: 'Tipp', hiddenOn: 'Versteckt auf der',
      local: 'Der Fortschritt bleibt in diesem Browser.', reset: 'Zurücksetzen',
    },
    legal: { title: 'Datenschutz' },
    imprint: { title: 'Impressum' },
    switchTo: 'English',
    theme: { dark: 'Dunkel', light: 'Hell' },
    back: 'Zurück',
  },
  en: {
    siteTitle: 'Tim Kibele',
    tagline: 'Computer science student at LMU Munich.',
    nav: { home: 'Home', projects: 'Projects', interests: 'Interests', cv: 'CV', legal: 'Privacy', imprint: 'Legal notice', achievements: 'Secrets', menu: 'Menu' },
    home: {
      heading: "Hi, I'm Tim.",
      intro: 'Here I share what I work on and what I learn.',
      portraitAlt: 'Portrait of Tim Kibele: he smiles slightly, wears a light hoodie and has his arms crossed in front of his chest.',
      more: 'More about me',
      cvNote: 'My background at a glance.',
      closing: 'Get in touch.',
    },
    projects: { title: 'Projects', intro: 'My projects. Here you will find the overview.', open: 'Open', code: 'Code', motivation: 'Motivation', learnings: 'Learnings', stack: 'Stack' },
    interests: {
      title: 'Interests',
      intro: 'What I am into and what matters to me.',
      note: 'Text to come.',
    },
    cv: { title: 'CV', pdf: 'Download as PDF', pdfFile: 'Tim-Kibele-CV.pdf' },
    achievements: {
      title: 'Secrets',
      intro: 'This site hides Easter eggs. The ones you found are listed here; for the others there is a hint.',
      of: 'of', tip: 'Hint', hiddenOn: 'Hidden on the',
      local: 'Your progress stays in this browser.', reset: 'Reset',
    },
    legal: { title: 'Privacy policy' },
    imprint: { title: 'Legal notice' },
    switchTo: 'Deutsch',
    theme: { dark: 'Dark', light: 'Light' },
    back: 'Back',
  },
} as const;

export const other = (lang: Lang): Lang => (lang === 'de' ? 'en' : 'de');
export const t = (lang: Lang) => ui[lang];
export const dateFmt = (lang: Lang, d: Date) =>
  d.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
