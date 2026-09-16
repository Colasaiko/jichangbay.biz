const fs = require('fs');
let c = fs.readFileSync('src/pages/recommend/2026-airport.astro', 'utf8');
c = c.replace(/\/airports\/\$\{airport\.slug\}\//g, '/airports/${airport.slug}');
fs.writeFileSync('src/pages/recommend/2026-airport.astro', c);

let c2 = fs.readFileSync('src/pages/recommend/clash.astro', 'utf8');
c2 = c2.replace(/\/airports\/\$\{airport\.slug\}\//g, '/airports/${airport.slug}');
fs.writeFileSync('src/pages/recommend/clash.astro', c2);

let c3 = fs.readFileSync('src/pages/clients/clash-mac/index.astro', 'utf8');
c3 = c3.replace(/\/airports\/\$\{airport\.slug\}\//g, '/airports/${airport.slug}');
fs.writeFileSync('src/pages/clients/clash-mac/index.astro', c3);

let c4 = fs.readFileSync('src/pages/guides/clash-config/index.astro', 'utf8');
c4 = c4.replace(/\/airports\/\$\{airport\.slug\}\//g, '/airports/${airport.slug}');
fs.writeFileSync('src/pages/guides/clash-config/index.astro', c4);
