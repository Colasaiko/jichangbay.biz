import fs from 'fs';
import path from 'path';

function replaceInFile(filepath, replacements) {
  let content = fs.readFileSync(filepath, 'utf8');
  let changed = false;
  for (const [regex, replacement] of replacements) {
    const newContent = content.replace(regex, replacement);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }
  if (changed) fs.writeFileSync(filepath, content);
  return changed;
}

function ensureImport(filepath, importStr) {
  let content = fs.readFileSync(filepath, 'utf8');
  if (!content.includes(importStr.trim())) {
    content = content.replace(/import { airports } from .*?;/, `$& \n${importStr}`);
    fs.writeFileSync(filepath, content);
  }
}

// 1. fix /airports/index.astro
ensureImport('src/pages/airports/index.astro', `import { getRankedAirports } from '../../utils/airportRanking';`);
ensureImport('src/pages/airports/index.astro', `import { getDisplayPrice } from '../../utils/airportPrice';`);
replaceInFile('src/pages/airports/index.astro', [
  [/\{airports\.map\(airport => \(/g, `{getRankedAirports().map((airport, index) => (`],
  [/<h2 class="text-xl font-bold mb-2"><a href=\{`\/airports\/\$\{airport\.slug\}`\} class="hover:text-cyan-blue">\{airport\.name\}<\/a><\/h2>/g,
  `<h2 class="text-xl font-bold mb-2 flex items-center gap-2">
     <a href={\`/airports/\${airport.slug}\`} class="hover:text-cyan-blue">{airport.name}</a>
     {index === 0 && <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">#1 编辑首选</span>}
     {index === 1 && <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold">#2 综合推荐</span>}
     {index > 1 && <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold">#{index + 1}</span>}
   </h2>`],
  [/¥\{airport\.monthlyStartingPrice \|\| 999\}\/月/g, `{getDisplayPrice(airport)}`]
]);

// 2. fix /compare/index.astro
ensureImport('src/pages/compare/index.astro', `import { getRankedAirports } from '../../utils/airportRanking';`);
ensureImport('src/pages/compare/index.astro', `import { getMonthlySortPrice } from '../../utils/airportPrice';`);
replaceInFile('src/pages/compare/index.astro', [
  [/\{airports\.map\(airport => \(/g, `{getRankedAirports().map(airport => (`],
  [/data-price=\{airport\.monthlyStartingPrice \|\| 999\}/g, `data-price={getMonthlySortPrice(airport)}`]
]);

// 3. fix recommend/*.astro
const recDir = 'src/pages/recommend';
const recFiles = fs.readdirSync(recDir);
for (const f of recFiles) {
  let p = path.join(recDir, f);
  if (!p.endsWith('.astro')) continue;
  ensureImport(p, `import { getRankedAirports } from '../../utils/airportRanking';`);
  ensureImport(p, `import { getDisplayPrice } from '../../utils/airportPrice';`);
  
  // replace airports.filter -> getRankedAirports().filter
  // replace airports.slice -> getRankedAirports().slice
  replaceInFile(p, [
    [/airports\.filter/g, `getRankedAirports().filter`],
    [/airports\.slice/g, `getRankedAirports().slice`],
    // Also remove the local getDisplayPrice if it's there
    [/const getDisplayPrice = \(airport.*?\};/s, '']
  ]);
}

// 4. fix index.astro
ensureImport('src/pages/index.astro', `import { getRankedAirports } from '../utils/airportRanking';`);
ensureImport('src/pages/index.astro', `import { getDisplayPrice } from '../utils/airportPrice';`);
replaceInFile('src/pages/index.astro', [
  [/const getDisplayPrice = \(airport.*?\};/s, ''],
  [/airport\.monthlyStartingPrice \|\| 999\}\/月/g, `{getDisplayPrice(airport)}`]
]);

console.log("Refactoring complete.");
