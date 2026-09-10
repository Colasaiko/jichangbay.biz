import fs from 'fs';

function fixCompareAstro() {
  let filepath = 'src/pages/compare/index.astro';
  let content = fs.readFileSync(filepath, 'utf8');
  
  if (!content.includes('import { getDisplayPrice')) {
     content = content.replace(/import { getMonthlySortPrice/g, `import { getDisplayPrice, getMonthlySortPrice`);
  }

  // Replace data-price
  content = content.replace(/data-price=\{airport\.monthlyStartingPrice \|\| 0\}/g, `data-price={getMonthlySortPrice(airport)}`);
  
  // Replace starting price display cell
  // <td class="p-4 font-bold text-coral">¥{airport.monthlyStartingPrice || 0}</td>
  content = content.replace(/<td class="p-4 font-bold text-coral">¥\{airport\.monthlyStartingPrice \|\| 0\}<\/td>/g, `<td class="p-4 font-bold text-coral">{getDisplayPrice(airport)}</td>`);

  fs.writeFileSync(filepath, content);
}

fixCompareAstro();
console.log('compare/index.astro fixed.');
