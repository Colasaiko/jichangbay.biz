
import fs from 'fs';
import path from 'path';

// read airports.ts indirectly or directly
const content = fs.readFileSync('src/data/airports.ts', 'utf8');
const jsonStr = content.replace('export const airports = ', '').replace(/;$/, '');
const data = JSON.parse(jsonStr);

if (data.length !== 29) { console.error('Error: Length != 29'); process.exit(1); }
const slugs = new Set();
const names = new Set();
for (let a of data) {
  if (slugs.has(a.slug)) { console.error('Duplicate slug: ' + a.slug); process.exit(1); }
  slugs.add(a.slug);
  
  if (names.has(a.name)) { console.error('Duplicate name: ' + a.name); process.exit(1); }
  names.add(a.name);
  
  if (a.name === '-') { console.error('Name is -'); process.exit(1); }
  if (a.affiliateUrl.includes('example.com')) { console.error('Has example.com'); process.exit(1); }
  if (!a.affiliateUrl.startsWith('http')) { console.error('Invalid URL: ' + a.affiliateUrl); process.exit(1); }
  
  let minM = Math.min(...a.plans.map(p => p.monthly).filter(p => p !== null));
  if (minM === Infinity) minM = null;
  if (a.monthlyStartingPrice !== minM) { console.error('Mismatch starting price for ' + a.name); process.exit(1); }
  if (a.monthlyStartingPrice !== null && a.monthlyStartingPrice < 0) { console.error('Negative price'); process.exit(1); }
  
  if (a.plans.length === 0) { console.error('No plans for ' + a.name); process.exit(1); }
}

const nano = data.find(a => a.slug === 'nanocloud');
if (nano.monthlyStartingPrice !== 1) { console.error('NanoCloud price != 1'); process.exit(1); }

const phantom = data.find(a => a.slug === 'phantom');
if (phantom.monthlyStartingPrice !== 1) { console.error('Phantom price != 1'); process.exit(1); }

const wf = data.find(a => a.slug === 'weifeng');
if (wf.monthlyStartingPrice !== 11) { console.error('Weifeng price != 11'); process.exit(1); }

console.log('Validation passed!');
