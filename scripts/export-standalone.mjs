import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const output = path.join(root, 'exports');

async function readAsset(reference) {
  const file = path.resolve(dist, reference.replace(/^\//, ''));
  if (!file.startsWith(`${dist}${path.sep}`)) {
    throw new Error(`Asset outside the build directory: ${reference}`);
  }
  return readFile(file);
}

const mimeTypes = {
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
};

let html = await readFile(path.join(dist, 'index.html'), 'utf8');
const script = html.match(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/);
const stylesheet = html.match(/<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"[^>]*>/);
const favicon = html.match(/<link\b[^>]*\brel="icon"[^>]*\bhref="([^"]+)"[^>]*>/);

if (!script || !stylesheet || !favicon) {
  throw new Error('Expected a JavaScript bundle, stylesheet and favicon in the Vite build.');
}

let css = (await readAsset(stylesheet[1])).toString('utf8');
const urls = [...new Set([...css.matchAll(/url\(([^)]+)\)/g)].map(match => match[1]))];
for (const original of urls) {
  const reference = original.replace(/^['"]|['"]$/g, '');
  if (reference.startsWith('data:')) continue;
  if (/^(https?:)?\/\//.test(reference)) {
    throw new Error(`The standalone page must not depend on a remote asset: ${reference}`);
  }
  const asset = path.posix.join(path.posix.dirname(stylesheet[1]), reference);
  const mime = mimeTypes[path.extname(reference)];
  if (!mime) throw new Error(`Unsupported asset format: ${reference}`);
  const encoded = (await readAsset(asset)).toString('base64');
  css = css.replaceAll(`url(${original})`, `url("data:${mime};base64,${encoded}")`);
}

const javascript = (await readAsset(script[1])).toString('utf8');
const icon = (await readAsset(favicon[1])).toString('base64');
const licenses = await Promise.all([
  readFile(path.join(root, 'node_modules/@fontsource-variable/dm-sans/LICENSE'), 'utf8'),
  readFile(path.join(root, 'src/assets/fonts/OFL-Noto-Sans-JP.txt'), 'utf8'),
]);
const fontLicenses = licenses.join('\n\n');
if (fontLicenses.includes('-->')) throw new Error('Font license contains an HTML comment terminator.');
html = html
  .replace(script[0], () => `<script type="module">${javascript.replace(/<\/script/gi, '<\\/script')}</script>`)
  .replace(stylesheet[0], () => `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`)
  .replace(favicon[0], () => `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml;base64,${icon}">`)
  .replace('</head>', () => `<!-- Self-hosted font licenses:\n${fontLicenses}\n-->\n</head>`);

await mkdir(output, { recursive: true });
await writeFile(path.join(output, 'novi-sensi.html'), html);
await writeFile(path.join(output, 'FONT-LICENSES.txt'), fontLicenses);
console.log('Standalone page generated: exports/novi-sensi.html');
