import fs from 'fs';

let p = 'src/pages/airports/[slug].astro';
let c = fs.readFileSync(p, 'utf8');

const formatPriceLogic = `
  const getDisplayPrice = (airport) => {
    if (airport.monthlyStartingPrice !== null) return \`¥\${airport.monthlyStartingPrice}/月起\`;
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

if (!c.includes('getDisplayPrice')) {
  c = c.replace(
    /const schemaData =/i, 
    formatPriceLogic + '\nconst schemaData ='
  );
}

// Replace startingPrice with getDisplayPrice(airport)
c = c.replace(/¥{airport\.startingPrice}\/月起/g, `{getDisplayPrice(airport)}`);

// Remove fake rating
c = c.replace(/<div class="text-3xl font-bold text-gray-800 dark:text-gray-200">9\.2<\/div>\s*<div class="text-sm text-gray-500">综合评分<\/div>/g, '');
// Remove "起步价性价比极高"
c = c.replace(/<div class="text-sm text-gray-500 mt-1">起步价性价比极高<\/div>/g, '');

// Inject plans table & cards
const plansHtml = `
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">详细套餐价格表</h2>
        
        {/* Desktop Table */}
        <div class="hidden md:block overflow-x-auto bg-white dark:bg-midnight border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50 dark:bg-gray-800/50 text-gray-500 text-sm border-b border-gray-100 dark:border-gray-800">
                <th class="p-4 font-bold">套餐名称</th>
                <th class="p-4 font-bold">流量</th>
                <th class="p-4 font-bold">月付</th>
                <th class="p-4 font-bold">季付</th>
                <th class="p-4 font-bold">半年</th>
                <th class="p-4 font-bold">年付</th>
                <th class="p-4 font-bold">一次性</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              {airport.plans.map(p => (
                <tr class="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition">
                  <td class="p-4 font-bold text-gray-800 dark:text-gray-200">{p.name}</td>
                  <td class="p-4 text-cyan-blue font-medium">{p.traffic}</td>
                  <td class="p-4">{p.monthly !== null ? \`¥\${p.monthly}\` : '—'}</td>
                  <td class="p-4">{p.quarterly !== null ? \`¥\${p.quarterly}\` : '—'}</td>
                  <td class="p-4">{p.semiannual !== null ? \`¥\${p.semiannual}\` : '—'}</td>
                  <td class="p-4">{p.annual !== null ? \`¥\${p.annual}\` : '—'}</td>
                  <td class="p-4">{p.oneTime !== null ? \`¥\${p.oneTime}\` : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div class="md:hidden space-y-4">
          {airport.plans.map(p => (
            <div class="bg-white dark:bg-midnight p-5 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-lg">{p.name}</h3>
                <span class="px-2 py-1 bg-cyan-blue/10 text-cyan-blue text-xs font-bold rounded">{p.traffic}</span>
              </div>
              <div class="grid grid-cols-2 gap-2 text-sm">
                {p.monthly !== null && <div class="text-gray-600 dark:text-gray-400">月付: <span class="font-bold text-gray-800 dark:text-gray-200">¥{p.monthly}</span></div>}
                {p.quarterly !== null && <div class="text-gray-600 dark:text-gray-400">季付: <span class="font-bold text-gray-800 dark:text-gray-200">¥{p.quarterly}</span></div>}
                {p.semiannual !== null && <div class="text-gray-600 dark:text-gray-400">半年: <span class="font-bold text-gray-800 dark:text-gray-200">¥{p.semiannual}</span></div>}
                {p.annual !== null && <div class="text-gray-600 dark:text-gray-400">年付: <span class="font-bold text-gray-800 dark:text-gray-200">¥{p.annual}</span></div>}
                {p.oneTime !== null && <div class="text-gray-600 dark:text-gray-400">一次性: <span class="font-bold text-gray-800 dark:text-gray-200">¥{p.oneTime}</span></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
`;

// Replace features section safely
// The existing file has <h2 class="text-2xl font-bold mb-6">核心优势</h2>
c = c.replace(/<h2 class="text-2xl font-bold mb-6">核心优势<\/h2>/, plansHtml + '\n      <h2 class="text-2xl font-bold mb-6">核心优势</h2>');

fs.writeFileSync(p, c);
console.log('Airport details page updated.');
