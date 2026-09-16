import { getRankedAirports } from './src/utils/airportRanking.js';

const airports = getRankedAirports();
airports.forEach((a, i) => {
  console.log(`#${i + 1} ${a.name}`);
});

let ok = true;
if (airports.length !== 29) ok = false;
if (airports[0].slug !== 'weifeng') ok = false;
if (airports[1].slug !== 'feimaoyun') ok = false;

const tierB = airports.slice(2, 7).map(a => a.slug);
const expectedB = ["firefly", "wuyou", "lingmao", "kuajieyun", "shanyue"];
const hasAllB = expectedB.every(b => tierB.includes(b));
if (!hasAllB) ok = false;

console.log('---');
console.log('Total Count:', airports.length);
console.log('Has Duplicates:', new Set(airports.map(a => a.slug)).size !== airports.length);
console.log('Validation passed:', ok);
