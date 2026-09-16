const fs = require('fs');

let c = fs.readFileSync('scripts/indexnow.js', 'utf8');

const replacement = `
      const validUrls = [];
      for (const u of urlList) {
        let p = u.replace('https://jichangbay.biz', '');
        p = p.replace(/^\\/+/, '');
        let distPath;
        if (p === '') {
           distPath = path.join('dist', 'index.html');
        } else if (p.endsWith('.xml') || p.endsWith('.txt')) {
           distPath = path.join('dist', p);
        } else {
           distPath = path.join('dist', p, 'index.html');
        }
        
        if (!fs.existsSync(distPath)) {
          console.error('[ERROR] HTML file does not exist for URL:', u, 'at', distPath);
        } else {
          validUrls.push(u);
        }
      }
`;

c = c.replace(/const validUrls = \[\];[\s\S]*?urlList = validUrls;/, replacement + '\n      urlList = validUrls;');
fs.writeFileSync('scripts/indexnow.js', c);
