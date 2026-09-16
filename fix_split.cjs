const fs = require('fs');

let c = fs.readFileSync('scripts/indexnow.js', 'utf8');
c = c.replace(/split\('\\\\n'\)/g, "split('\\n')");
fs.writeFileSync('scripts/indexnow.js', c);
