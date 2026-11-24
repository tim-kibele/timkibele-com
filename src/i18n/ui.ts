export const languages = ['de', 'en'] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  de: {
    siteTitle: 'Tim Kibele',
    tagline: 'Entwickler, Tüftler, Neugieriger.',
    nav: { home: 'Start', projects: 'Projekte', reports: 'Berichte', cv: 'Lebenslauf', legal: 'Datenschutz' },
    home: {
      heading: 'Hallo, ich bin Tim.',
      intro: 'Hier zeige ich, woran ich arbeite und was ich dabei lerne.',
      portrait: 'Foto folgt',
      more: 'Mehr von mir',
      cvNote: 'Mein Werdegang auf einen Blick.',
      closing: 'Schreib mir.',
      closingNote: 'Kontaktadresse folgt.',
    },
    projects: { title: 'Projekte', intro: 'Meine Projekte laufen auf eigenen (Sub-)Domains. Hier findest du die Übersicht.', open: 'Öffnen', code: 'Code', motivation: 'Motivation', learnings: 'Learnings', stack: 'Stack' },
    reports: { title: 'Berichte', intro: 'Hintergründe, Entscheidungen und Learnings zu meinen Projekten.', empty: 'Noch keine Berichte.' },
    cv: { title: 'Lebenslauf' },
    legal: { title: 'Datenschutz' },
    switchTo: 'English',
    theme: { dark: 'Dunkel', light: 'Hell' },
    back: 'Zurück',
  },
  en: {
    siteTitle: 'Tim Kibele',
    tagline: 'Developer, tinkerer, curious mind.',
    nav: { home: 'Home', projects: 'Projects', reports: 'Write-ups', cv: 'CV', legal: 'Privacy' },
    home: {
      heading: "Hi, I'm Tim.",
      intro: 'Here I share what I work on and what I learn.',
      portrait: 'Photo to come',
      more: 'More about me',
      cvNote: 'My background at a glance.',
      closing: 'Get in touch.',
      closingNote: 'Contact address to follow.',
    },
    projects: { title: 'Projects', intro: 'My projects live on their own (sub)domains. This is the overview.', open: 'Open', code: 'Code', motivation: 'Motivation', learnings: 'Learnings', stack: 'Stack' },
    reports: { title: 'Write-ups', intro: 'Background, decisions and learnings about my projects.', empty: 'No write-ups yet.' },
    cv: { title: 'CV' },
    legal: { title: 'Privacy policy' },
    switchTo: 'Deutsch',
    theme: { dark: 'Dark', light: 'Light' },
    back: 'Back',
  },
} as const;

export const other = (lang: Lang): Lang => (lang === 'de' ? 'en' : 'de');
export const t = (lang: Lang) => ui[lang];
export const dateFmt = (lang: Lang, d: Date) =>
  d.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
