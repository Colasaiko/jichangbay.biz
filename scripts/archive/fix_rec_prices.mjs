import fs from 'fs';
import path from 'path';

const recDir = 'src/pages/recommend';
const files = fs.readdirSync(recDir);
for (const f of files) {
  let p = path.join(recDir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  c = c.replace(/\{airport\.startingPrice\}/g, `{airport.monthlyStartingPrice || '特惠'}`);
  c = c.replace(/a\.startingPrice/g, `(a.monthlyStartingPrice || 999)`);
  c = c.replace(/¥\{airport\.monthlyStartingPrice \|\| '特惠'\}\/月/g, `{getDisplayPrice(airport)}`);
  
  fs.writeFileSync(p, c);
}
console.log('Fixed all recommend startingPrice usages.');
