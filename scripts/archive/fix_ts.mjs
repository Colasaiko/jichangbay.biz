import fs from 'fs';
import path from 'path';

// 1. Rewrite functions with explicit 'any' types for TS
const fixLogic = (c) => {
  let text = c;
  text = text.replace(/const getDisplayPrice = \(airport\)/g, 'const getDisplayPrice = (airport: any)');
  text = text.replace(/p => p\.quarterly/g, '(p: any) => p.quarterly');
  text = text.replace(/p => p !== null/g, '(p: any) => p !== null');
  text = text.replace(/p => p\.semiannual/g, '(p: any) => p.semiannual');
  text = text.replace(/p => p\.annual/g, '(p: any) => p.annual');
  text = text.replace(/p => p\.oneTime/g, '(p: any) => p.oneTime');
  
  text = text.replace(/const getMinTraffic = \(airport\)/g, 'const getMinTraffic = (airport: any)');
  return text;
}

const updateAstroFile = (p) => {
  let c = fs.readFileSync(p, 'utf8');
  c = fixLogic(c);
  // Also catch stray airport.startingPrice
  c = c.replace(/\{airport\.startingPrice\}/g, `{airport.monthlyStartingPrice || 999}`);
  c = c.replace(/airport\.startingPrice/g, `(airport.monthlyStartingPrice || 999)`);
  fs.writeFileSync(p, c);
}

// Fix index, airports/index, compare/index, airports/[slug], recommend/*
updateAstroFile('src/pages/index.astro');
updateAstroFile('src/pages/airports/index.astro');
updateAstroFile('src/pages/compare/index.astro');
updateAstroFile('src/pages/airports/[slug].astro');

const recDir = 'src/pages/recommend';
const files = fs.readdirSync(recDir);
for (const f of files) {
  updateAstroFile(path.join(recDir, f));
}

console.log('Fixed TS typing errors.');
