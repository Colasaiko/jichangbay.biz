import { airports } from '../data/airports';

function splitmix32(a: number) {
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

function seededShuffle<T>(array: T[], randomFunc: () => number): T[] {
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
  return 2026; // Default build-time fallback seed
}

export function getRankedAirports() {
  const rng = splitmix32(getSeed());
  
  const fixedTopSlugs = ["weifeng", "feimaoyun"];
  const priorityPoolSlugs = ["firefly", "wuyou", "lingmao", "kuajieyun", "shanyue"];
  const newBrands = ["jiuyun", "baoyun"];
  
  const weifeng = airports.find(a => a.slug === 'weifeng');
  const feimaoyun = airports.find(a => a.slug === 'feimaoyun');
  
  const priorityAirports = airports.filter(a => priorityPoolSlugs.includes(a.slug));
  const remainingAirports = airports.filter(a => 
    !fixedTopSlugs.includes(a.slug) && 
    !priorityPoolSlugs.includes(a.slug) && 
    !newBrands.includes(a.slug)
  );
  
  const shuffledPriority = seededShuffle(priorityAirports, rng);
  const shuffledRemaining = seededShuffle(remainingAirports, rng);
  
  const ranked: any[] = [];
  if (weifeng) ranked.push(weifeng);
  if (feimaoyun) ranked.push(feimaoyun);
  
  ranked.push(...shuffledPriority); // 2 + 5 = 7 items
  
  // We need exactly 10 items before newBrands. So we take 3 from shuffledRemaining.
  const next3 = shuffledRemaining.splice(0, 3);
  ranked.push(...next3);
  
  // Insert jiuyun and baoyun at position 11 and 12 (index 10 and 11)
  const jiuyun = airports.find(a => a.slug === 'jiuyun');
  const baoyun = airports.find(a => a.slug === 'baoyun');
  if (jiuyun) ranked.push(jiuyun);
  if (baoyun) ranked.push(baoyun);
  
  // Add the rest
  ranked.push(...shuffledRemaining);
  
  return ranked;
}
