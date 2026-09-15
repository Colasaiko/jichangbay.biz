const fs = require('fs');
let c = fs.readFileSync('src/pages/airports/[slug].astro', 'utf8');

c = c.replace(/\$\{displayPriceText\}起/g, '${displayPriceText}');
c = c.replace(/>\{displayPriceText\}起/g, '>{displayPriceText}');
c = c.replace(/\{displayPriceText\}起/g, '{displayPriceText}');

fs.writeFileSync('src/pages/airports/[slug].astro', c);
console.log('Fixed displayPriceText');
