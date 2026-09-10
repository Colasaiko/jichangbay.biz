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

// Fix compare/index.astro
let cmpPath = 'src/pages/compare/index.astro';
let cmpContent = fs.readFileSync(cmpPath, 'utf8');
if (!cmpContent.includes('getMinTraffic')) {
  cmpContent = cmpContent.replace(/const initialAirports/i, getMinTrafficLogic + '\nconst initialAirports');
}
cmpContent = cmpContent.replace(/\{airport\.startingPrice\}/g, `{airport.monthlyStartingPrice || 0}`);
cmpContent = cmpContent.replace(/\{airport\.traffic\}/g, `{getMinTraffic(airport)}`);
cmpContent = cmpContent.replace(/data-price=\{airport\.startingPrice\}/g, `data-price={airport.monthlyStartingPrice || 999}`);
fs.writeFileSync(cmpPath, cmpContent);

// Fix recommend/*.astro missing getDisplayPrice
const recDir = 'src/pages/recommend';
const files = fs.readdirSync(recDir);
for (const f of files) {
  let p = path.join(recDir, f);
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('const getDisplayPrice')) {
    c = c.replace(/const topic =/i, formatPriceLogic + '\nconst topic =');
  }
  // Also fix b.startingPrice
  c = c.replace(/b\.startingPrice/g, `(b.monthlyStartingPrice || 999)`);
  fs.writeFileSync(p, c);
}

console.log('Fixed final UI build errors.');
