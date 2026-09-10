import fs from 'fs';
import path from 'path';

let unlimited = 'src/pages/recommend/unlimited.astro';
let c1 = fs.readFileSync(unlimited, 'utf8');
c1 = c1.replace(
  /a\.traffic\.includes\("大流量"\) \|\| a\.startingPrice > 25/g,
  'a.plans.some(p => p.traffic.includes("TB") || p.traffic.includes("000 G"))'
);
fs.writeFileSync(unlimited, c1);

console.log('Fixed unlimited.astro');
