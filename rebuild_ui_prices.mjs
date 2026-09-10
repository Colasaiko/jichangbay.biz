import fs from 'fs';
import path from 'path';

// Helper logic for prices
// We will inject a helper function into Astro components or replace the JSX logic directly.
const formatPriceLogic = `
  const getDisplayPrice = (airport) => {
    if (airport.monthlyStartingPrice !== null) return \`¥\${airport.monthlyStartingPrice}/月起\`;
    
    // find lowest available payment
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
    return '价格未知';
  };
`;

// 1. Update index.astro
let indexPath = 'src/pages/index.astro';
let indexContent = fs.readFileSync(indexPath, 'utf8');
if (!indexContent.includes('getDisplayPrice')) {
  indexContent = indexContent.replace(
    /const latestPosts/i, 
    formatPriceLogic + '\nconst latestPosts'
  );
  // Replace the old display logic
  indexContent = indexContent.replace(
    /¥{airport\.startingPrice}\/月起/g, 
    `{getDisplayPrice(airport)}`
  );
  fs.writeFileSync(indexPath, indexContent);
}

// 2. Update recommend/*.astro
const recDir = 'src/pages/recommend';
const recFiles = fs.readdirSync(recDir);
for (const f of recFiles) {
  let p = path.join(recDir, f);
  let c = fs.readFileSync(p, 'utf8');
  if (!c.includes('getDisplayPrice')) {
    c = c.replace(
      /const topic =/i, 
      formatPriceLogic + '\nconst topic ='
    );
    c = c.replace(
      /¥{airport\.startingPrice}\/月起/g, 
      `{getDisplayPrice(airport)}`
    );
    fs.writeFileSync(p, c);
  }
}

// 3. Update airports/index.astro
let aIdxPath = 'src/pages/airports/index.astro';
let aIdxContent = fs.readFileSync(aIdxPath, 'utf8');
if (!aIdxContent.includes('getDisplayPrice')) {
  aIdxContent = aIdxContent.replace(
    /const sortedAirports/i, 
    formatPriceLogic + '\nconst sortedAirports'
  );
  aIdxContent = aIdxContent.replace(
    /¥{airport\.startingPrice}\/月起/g, 
    `{getDisplayPrice(airport)}`
  );
  fs.writeFileSync(aIdxPath, aIdxContent);
}

// 4. Update compare/index.astro
let cmpPath = 'src/pages/compare/index.astro';
let cmpContent = fs.readFileSync(cmpPath, 'utf8');
if (!cmpContent.includes('getDisplayPrice')) {
  cmpContent = cmpContent.replace(
    /const initialAirports/i, 
    formatPriceLogic + '\nconst initialAirports'
  );
  cmpContent = cmpContent.replace(
    /¥{airport\.startingPrice}\/月起/g, 
    `{getDisplayPrice(airport)}`
  );
  
  // Also update vanilla JS logic in compare
  cmpContent = cmpContent.replace(
    /\`¥\${a\.startingPrice}\/月起\`/g, 
    `a.monthlyStartingPrice !== null ? \`¥\${a.monthlyStartingPrice}/月起\` : (a.plans.some(p => p.quarterly !== null) ? \`季付 ¥\${Math.min(...a.plans.map(p => p.quarterly).filter(p => p !== null))} 起\` : '特惠套餐起')`
  );
  fs.writeFileSync(cmpPath, cmpContent);
}

console.log("Updated generic prices.");
