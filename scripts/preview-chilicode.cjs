const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve('ChiliCode');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.mp4': 'video/mp4' };
http.createServer((req, res) => {
  let file;
  try { file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname)); }
  catch { res.writeHead(400).end(); return; }
  if (file === root) file = path.join(root, 'index.html');
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.stat(file, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404).end(); return; }
    const range = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    const start = range ? Number(range[1]) : 0;
    const end = range && range[2] ? Number(range[2]) : stat.size - 1;
    if (start > end || end >= stat.size) { res.writeHead(416).end(); return; }
    res.writeHead(range ? 206 : 200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Content-Length': end - start + 1,
      'Accept-Ranges': 'bytes',
      ...(range ? { 'Content-Range': `bytes ${start}-${end}/${stat.size}` } : {})
    });
    fs.createReadStream(file, { start, end }).pipe(res);
  });
}).listen(4322, '127.0.0.1', () => console.log('Diferio preview: http://127.0.0.1:4322'));
