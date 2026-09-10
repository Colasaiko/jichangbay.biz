import fs from 'fs';
import path from 'path';

// 1. Update index.astro
let idxPath = 'src/pages/index.astro';
let idxContent = fs.readFileSync(idxPath, 'utf8');

// replace import
idxContent = idxContent.replace(
  /import { airports } from '\.\.\/data\/airports';/,
  `import { airports } from '../data/airports';\nimport { getRankedAirports } from '../utils/airportRanking';`
);

// replace featuredAirports definition
idxContent = idxContent.replace(
  /const featuredAirports = airports\.slice\(0, 8\);/,
  `const featuredAirports = getRankedAirports().slice(0, 8);`
);

// We need to add index to the map and render rank
idxContent = idxContent.replace(
  /featuredAirports\.map\(\(airport\)/g,
  `featuredAirports.map((airport, index)`
);

// Before <a href={...} class="hover:text-cyan-blue ...">{airport.name}</a>
// We inject the rank badge
idxContent = idxContent.replace(
  /<a href=\{`\/airports\/\$\{airport\.slug\}`\} class="hover:text-cyan-blue flex items-center gap-2">\{airport\.name\}<\/a>/g,
  `<div class="flex flex-col"><a href={\`/airports/\${airport.slug}\`} class="hover:text-cyan-blue flex items-center gap-2">{airport.name}</a>
   {index === 0 && <span class="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1 py-0.5 rounded font-bold mt-1 w-max">#1 编辑首选</span>}
   {index === 1 && <span class="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1 py-0.5 rounded font-bold mt-1 w-max">#2 综合推荐</span>}
   {index > 1 && <span class="text-xs text-gray-400 mt-1 w-max">#{index + 1}</span>}
   </div>`
);

fs.writeFileSync(idxPath, idxContent);

// 2. Update airports/index.astro
let aIdxPath = 'src/pages/airports/index.astro';
let aIdxContent = fs.readFileSync(aIdxPath, 'utf8');

if (!aIdxContent.includes('getRankedAirports')) {
  aIdxContent = aIdxContent.replace(
    /import { airports } from '\.\.\/\.\.\/data\/airports';/,
    `import { airports } from '../../data/airports';\nimport { getRankedAirports } from '../../utils/airportRanking';`
  );
}

// remove const sortedAirports = airports.sort(...)
aIdxContent = aIdxContent.replace(
  /const sortedAirports = airports.*?;/s,
  `const sortedAirports = getRankedAirports();`
);

// In airports.map, add rank highlight. Wait, aIdxContent uses grid of cards.
// <div class="bg-white dark:bg-midnight rounded-2xl ... p-6">
// <div class="flex justify-between items-start mb-4">
//   <h2 class="text-xl font-bold"><a href={`/airports/${airport.slug}`} class="hover:text-cyan-blue">{airport.name}</a></h2>
aIdxContent = aIdxContent.replace(
  /sortedAirports\.map\(\(airport\)/g,
  `sortedAirports.map((airport, index)`
);

aIdxContent = aIdxContent.replace(
  /<h2 class="text-xl font-bold"><a href=\{`\/airports\/\$\{airport\.slug\}`\} class="hover:text-cyan-blue">\{airport\.name\}<\/a><\/h2>/g,
  `<h2 class="text-xl font-bold flex items-center gap-2"><a href={\`/airports/\${airport.slug}\`} class="hover:text-cyan-blue">{airport.name}</a>
    {index === 0 && <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">#1 编辑首选</span>}
    {index === 1 && <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold">#2 综合推荐</span>}
    {index > 1 && <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold">#{index + 1}</span>}
   </h2>`
);

fs.writeFileSync(aIdxPath, aIdxContent);

// 3. Update recommend/2026-airport.astro
let r2026Path = 'src/pages/recommend/2026-airport.astro';
let r2026Content = fs.readFileSync(r2026Path, 'utf8');

if (!r2026Content.includes('getRankedAirports')) {
  r2026Content = r2026Content.replace(
    /import { airports } from '\.\.\/\.\.\/data\/airports';/,
    `import { airports } from '../../data/airports';\nimport { getRankedAirports } from '../../utils/airportRanking';`
  );
}

// Replace filtered logic
// const filtered = airports.filter(...).slice(0, 8);
r2026Content = r2026Content.replace(
  /const filtered = airports\.filter.*?slice\(0, 8\);/s,
  `const filtered = getRankedAirports().slice(0, 8);`
);

r2026Content = r2026Content.replace(
  /filtered\.map\(\(airport\)/g,
  `filtered.map((airport, index)`
);

r2026Content = r2026Content.replace(
  /<h2 class="text-xl font-bold mb-2"><a href=\{`\/airports\/\$\{airport\.slug\}`\} class="hover:text-cyan-blue">\{airport\.name\}<\/a><\/h2>/g,
  `<h2 class="text-xl font-bold mb-2 flex items-center gap-2"><a href={\`/airports/\${airport.slug}\`} class="hover:text-cyan-blue">{airport.name}</a>
    {index === 0 && <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">#1 编辑首选</span>}
    {index === 1 && <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold">#2 综合推荐</span>}
    {index > 1 && <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold">#{index + 1}</span>}
   </h2>`
);

fs.writeFileSync(r2026Path, r2026Content);


// 4. Update recommend/stable-airport.astro
let rsPath = 'src/pages/recommend/stable-airport.astro';
let rsContent = fs.readFileSync(rsPath, 'utf8');

if (!rsContent.includes('getRankedAirports')) {
  rsContent = rsContent.replace(
    /import { airports } from '\.\.\/\.\.\/data\/airports';/,
    `import { airports } from '../../data/airports';\nimport { getRankedAirports } from '../../utils/airportRanking';`
  );
}

// Replace filtered logic
// const filtered = airports.filter(...).sort(...).slice(...)
rsContent = rsContent.replace(
  /const filtered = airports\.filter.*?slice\(0, 8\);/s,
  `const filtered = getRankedAirports().slice(0, 8);`
);

rsContent = rsContent.replace(
  /filtered\.map\(\(airport\)/g,
  `filtered.map((airport, index)`
);

rsContent = rsContent.replace(
  /<h2 class="text-xl font-bold mb-2"><a href=\{`\/airports\/\$\{airport\.slug\}`\} class="hover:text-cyan-blue">\{airport\.name\}<\/a><\/h2>/g,
  `<h2 class="text-xl font-bold mb-2 flex items-center gap-2"><a href={\`/airports/\${airport.slug}\`} class="hover:text-cyan-blue">{airport.name}</a>
    {index === 0 && <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded font-bold">#1 编辑首选</span>}
    {index === 1 && <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded font-bold">#2 综合推荐</span>}
    {index > 1 && <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold">#{index + 1}</span>}
   </h2>`
);

fs.writeFileSync(rsPath, rsContent);

console.log("Ranking refactor applied to UI.");

