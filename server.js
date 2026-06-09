const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
  html: 'text/html', css: 'text/css', js: 'application/javascript',
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
  gif: 'image/gif', svg: 'image/svg+xml', webp: 'image/webp',
  ico: 'image/x-icon', json: 'application/json', woff: 'font/woff',
  woff2: 'font/woff2', ttf: 'font/ttf'
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  let decoded;
  try { decoded = decodeURIComponent(urlPath); } catch(e) { decoded = urlPath; }

  let filePath = path.join('.', decoded === '/' ? 'index.html' : decoded);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).slice(1).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(5000, '0.0.0.0', () => console.log('Serving on port 5000'));
