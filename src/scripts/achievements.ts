import { eggs } from '../data/easter-eggs';

// Gefundene Easter Eggs liegen nur im lokalen Speicher des Browsers (nichts wird gesendet).
const KEY = 'tk-easter-eggs';
type Lang = 'de' | 'en';
const label = {
  de: { found: 'Easter Egg gefunden', link: 'Zu den Geheimnissen' },
  en: { found: 'Easter egg found', link: 'View secrets' },
};

export const read = (): Record<string, string> => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}');
  } catch {
    return {};
  }
};

export const reset = () => {
  try {
    localStorage.removeItem(KEY);
  } catch {}
};

const toast = (id: string) => {
  const lang: Lang = document.documentElement.lang === 'de' ? 'de' : 'en';
  const egg = eggs.find((e) => e.id === id);
  if (!egg) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.setAttribute('role', 'status');
  const text = document.createElement('p');
  text.className = 'toast-text';
  text.textContent = `${label[lang].found}: ${egg.title[lang]}`;
  const link = document.createElement('a');
  link.href = `/${lang}/geheimnisse/`;
  link.textContent = label[lang].link;
  el.append(text, link);
  document.body.append(el);
  setTimeout(() => el.remove(), 7000);
};

// Gibt true zurück, wenn das Easter Egg neu freigeschaltet wurde.
export const unlock = (id: string) => {
  if (!eggs.some((e) => e.id === id)) return false;
  const found = read();
  if (found[id]) return false;
  found[id] = new Date().toISOString();
  try {
    localStorage.setItem(KEY, JSON.stringify(found));
  } catch {}
  toast(id);
  return true;
};
