const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'ChiliCode');
const output = path.join(root, '_site');
const allowed = new Set(['.html', '.css', '.svg', '.png', '.mp4']);
const scripts = new Set(['main.js', 'hamburger.js', 'diferio.js', 'sw.js']);
const files = fs.readdirSync(source).filter(name =>
  allowed.has(path.extname(name)) || scripts.has(name)
);
const available = new Set(files);
let references = 0;
for (const name of files.filter(name => name.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(source, name), 'utf8');
  if (!html.includes('href="diferio.css"')) throw new Error(`Falta identidad Diferio: ${name}`);
  for (const match of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const url = match[1];
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#|\?)/i.test(url)) continue;
    const target = decodeURIComponent(url.split(/[?#]/)[0]).replace(/^\.\//, '');
    if (target && !available.has(target)) throw new Error(`Archivo no publicado: ${name} → ${target}`);
    references++;
  }
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (/\btype=["'](?:module|application\/ld\+json)["']/.test(match[1])) continue;
    new vm.Script(match[2], { filename: name });
  }
}
for (const name of scripts) new vm.Script(fs.readFileSync(path.join(source, name), 'utf8'), { filename: name });
// Only the dedicated generated directory may be replaced.
if (path.dirname(output) !== root || path.basename(output) !== '_site') throw new Error('Destino inválido');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output);
for (const name of files) fs.copyFileSync(path.join(source, name), path.join(output, name));
fs.writeFileSync(path.join(output, '.nojekyll'), '');
const size = files.reduce((total, name) => total + fs.statSync(path.join(output, name)).size, 0);
console.log(`Diferio listo: ${files.filter(name => name.endsWith('.html')).length} páginas, ${files.length} archivos, ${references} referencias locales verificadas, ${(size / 1024 / 1024).toFixed(2)} MB.`);
