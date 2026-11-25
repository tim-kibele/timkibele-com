// Erzeugt die beiden Lebenslauf-PDFs in public/ aus den gebauten Seiten (dist/), mit dem Druckstil der Seite.
// Nach jeder Änderung am Lebenslauf: npm run build, dann dieses Skript. Playwright ist keine Abhängigkeit des
// Projekts, es muss lokal verfügbar sein (zum Beispiel über npx playwright install chromium).
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path.endsWith('/')) path += 'index.html';
  try {
    const body = await readFile(join('dist', path));
    res.writeHead(200, { 'content-type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch();
const page = await browser.newPage();
for (const [lang, file] of [['de', 'Tim-Kibele-Lebenslauf.pdf'], ['en', 'Tim-Kibele-CV.pdf']]) {
  await page.goto(`${base}/${lang}/lebenslauf/`, { waitUntil: 'load' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({ path: join('public', file), format: 'A4', printBackground: true, margin: { top: '18mm', bottom: '18mm', left: '18mm', right: '18mm' } });
  console.log('wrote public/' + file);
}
await browser.close();
server.close();
