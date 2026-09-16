import fs from 'fs';
import path from 'path';

const formatPriceLogic = `
  const getDisplayPrice = (airport) => {
    if (airport.monthlyStartingPrice !== null) return \`¥\${airport.monthlyStartingPrice}/月起\`;
    if (airport.plans && airport.plans.length > 0) {
      let minQ = Math.min(...airport.plans.map(p => p.quarterly).filter(p => p !== null));
      if (minQ !== Infinity) return \`季付 ¥\${minQ} 起\`;
      let minH = Math.min(...airport.plans.map(p => p.semiannual).filter(p => p !== null));
      if (minH !== Infinity) return \`半年付 ¥\${minH} 起\`;
      let minA = Math.min(...airport.plans.map(p => p.annual).filter(p => p !== null));
      if (minA !== Infinity) return \`年付 ¥\${minA} 起\`;
      let minO = Math.min(...airport.plans.map(p => p.oneTime).filter(p => p !== null));
      if (minO !== Infinity) return \`¥\${minO} 一次性\`;
    }
    return '特惠起步';
  };
`;

const getMinTrafficLogic = `
  const getMinTraffic = (airport) => {
    if (airport.plans && airport.plans.length > 0) {
      return airport.plans[0].traffic;
    }
    return '未知';
  };
`;

const recDir = 'src/pages/recommend';
const files = fs.readdirSync(recDir);
for (const f of files) {
  let p = path.join(recDir, f);
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('const getDisplayPrice')) {
    c = c.replace(/import { airports } from '\.\.\/\.\.\/data\/airports';/, `import { airports } from '../../data/airports';\n` + formatPriceLogic);
  }
  fs.writeFileSync(p, c);
}

// airports/[slug].astro
let aSlug = 'src/pages/airports/[slug].astro';
let aC = fs.readFileSync(aSlug, 'utf8');
aC = aC.replace(/\{airport\.startingPrice\}/g, `{airport.monthlyStartingPrice || 999}`);
fs.writeFileSync(aSlug, aC);

// airports/index.astro
let aIdx = 'src/pages/airports/index.astro';
let aiC = fs.readFileSync(aIdx, 'utf8');
aiC = aiC.replace(/\{airport\.startingPrice\}/g, `{airport.monthlyStartingPrice || 999}`);
fs.writeFileSync(aIdx, aiC);

// compare/index.astro
let cIdx = 'src/pages/compare/index.astro';
let ciC = fs.readFileSync(cIdx, 'utf8');
if (!ciC.includes('const getMinTraffic')) {
  ciC = ciC.replace(/import { airports } from '\.\.\/\.\.\/data\/airports';/, `import { airports } from '../../data/airports';\n` + getMinTrafficLogic);
}
fs.writeFileSync(cIdx, ciC);

console.log("Fixed missing variables.");
