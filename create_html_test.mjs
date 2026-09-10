import fs from 'fs';
import path from 'path';

const readJsonFromAstro = (filepath) => {
  // We can't easily parse Astro HTML output without building, but we can verify build output directly.
};

// We will add an Astro verification to scripts/validate-airports.mjs 
const vScript = `
import fs from 'fs';

// Read dist index to find order
const indexHtml = fs.readFileSync('dist/index.html', 'utf8');
const regex = /<a href="\\/airports\\/([^"]+)"/g;
let match;
const indexSlugs = [];
while ((match = regex.exec(indexHtml)) !== null) {
  indexSlugs.push(match[1]);
}

const top8 = indexSlugs.filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
console.log('Index Top 8:', top8);

const airpHtml = fs.readFileSync('dist/airports/index.html', 'utf8');
const airpSlugs = [];
while ((match = regex.exec(airpHtml)) !== null) {
  airpSlugs.push(match[1]);
}
const airpTop8 = airpSlugs.filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
console.log('Airports Top 8:', airpTop8);

const cmpHtml = fs.readFileSync('dist/compare/index.html', 'utf8');
const cmpSlugs = [];
while ((match = regex.exec(cmpHtml)) !== null) {
  cmpSlugs.push(match[1]);
}
const cmpTop8 = cmpSlugs.filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
console.log('Compare Top 8:', cmpTop8);

const r26Html = fs.readFileSync('dist/recommend/2026-airport/index.html', 'utf8');
const r26Slugs = [];
while ((match = regex.exec(r26Html)) !== null) {
  r26Slugs.push(match[1]);
}
const r26Top8 = r26Slugs.filter((v, i, a) => a.indexOf(v) === i).slice(0, 8);
console.log('2026 Top 8:', r26Top8);

// Verify they are the same
let same = true;
for(let i = 0; i<8; i++) {
  if (top8[i] !== airpTop8[i] || top8[i] !== cmpTop8[i] || top8[i] !== r26Top8[i]) same = false;
}
if (!same) {
  console.error("Top 8 are not consistent!");
  process.exit(1);
}

const allowedB = ["firefly", "wuyou", "lingmao", "kuajieyun", "shanyue"];
if (top8[0] !== 'weifeng' || top8[1] !== 'feimaoyun') {
  console.error("Top 2 are not weifeng and feimaoyun");
  process.exit(1);
}

for(let i = 2; i < 7; i++) {
  if (!allowedB.includes(top8[i])) {
    console.error("Tier B contains invalid slug:", top8[i]);
    process.exit(1);
  }
}

console.log("Validation passed: Consistency verified.");
`;

fs.writeFileSync('scripts/validate-html.mjs', vScript);
console.log('Verification script created.');
