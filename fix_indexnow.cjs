const fs = require('fs');
let c = fs.readFileSync('scripts/indexnow.js', 'utf8');
c = c.replace(
  "let p = u.replace('https://jichangbay.biz', '');",
  "let p = u.replace('https://jichangbay.biz', ''); p = p.replace(/^\\//, '');"
);
fs.writeFileSync('scripts/indexnow.js', c);
