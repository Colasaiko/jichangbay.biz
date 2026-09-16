import fs from 'fs';

const c = fs.readFileSync('src/data/airports.ts', 'utf8');
const json = c.replace('export const airports = ', '').replace(/;$/, '');
const airports = JSON.parse(json);

function splitmix32(a) {
  return function() {
    a |= 0;
    a = a + 0x9e3779b9 | 0;
    let t = a ^ a >>> 16;
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ t >>> 15;
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
  }
}

function seededShuffle(array, randomFunc) {
  const result = [...array];
  let currentIndex = result.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(randomFunc() * currentIndex);
    currentIndex--;
    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }
  return result;
}

function getSeed() {
  const envSeed = process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || process.env.COMMIT_REF || process.env.VERCEL_GIT_COMMIT_SHA;
  if (envSeed) {
    let hash = 0;
    for (let i = 0; i < envSeed.length; i++) {
        const char = envSeed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
  }
  return 2026; 
}

const rng = splitmix32(getSeed());
const fixedTopSlugs = ["weifeng", "feimaoyun"];
const priorityPoolSlugs = ["firefly", "wuyou", "lingmao", "kuajieyun", "shanyue"];

const weifeng = airports.find(a => a.slug === 'weifeng');
const feimaoyun = airports.find(a => a.slug === 'feimaoyun');

const priorityAirports = airports.filter(a => priorityPoolSlugs.includes(a.slug));
const remainingAirports = airports.filter(a => !fixedTopSlugs.includes(a.slug) && !priorityPoolSlugs.includes(a.slug));

const shuffledPriority = seededShuffle(priorityAirports, rng);
const shuffledRemaining = seededShuffle(remainingAirports, rng);

const ranked = [];
if (weifeng) ranked.push(weifeng);
if (feimaoyun) ranked.push(feimaoyun);
const finalR = ranked.concat(shuffledPriority, shuffledRemaining);

finalR.forEach((a, i) => {
  console.log(`#${i + 1} ${a.name}`);
});

let ok = true;
if (finalR.length !== 29) ok = false;
if (finalR[0].slug !== 'weifeng') ok = false;
if (finalR[1].slug !== 'feimaoyun') ok = false;

const tierB = finalR.slice(2, 7).map(a => a.slug);
const expectedB = ["firefly", "wuyou", "lingmao", "kuajieyun", "shanyue"];
const hasAllB = expectedB.every(b => tierB.includes(b));
if (!hasAllB) ok = false;

console.log('---');
console.log('Total Count:', finalR.length);
console.log('Has Duplicates:', new Set(finalR.map(a => a.slug)).size !== finalR.length);
console.log('Validation passed:', ok);
