import fs from 'fs';

// fix index.astro
let idxPath = 'src/pages/index.astro';
let idxContent = fs.readFileSync(idxPath, 'utf8');
idxContent = idxContent.replace(/¥\{\{getDisplayPrice\(airport\)\}/g, `{getDisplayPrice(airport)}`);
fs.writeFileSync(idxPath, idxContent);

// fix unlimited.astro
let unPath = 'src/pages/recommend/unlimited.astro';
let unContent = fs.readFileSync(unPath, 'utf8');
unContent = unContent.replace(/a\.plans\.some\(p =>/g, `a.plans.some((p: any) =>`);
fs.writeFileSync(unPath, unContent);

console.log("Fixed ts and syntax errors");
