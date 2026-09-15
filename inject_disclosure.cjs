const fs = require('fs');
const pages = [
  'src/pages/recommend/2026-airport.astro',
  'src/pages/recommend/cheap-airport.astro',
  'src/pages/recommend/stable-airport.astro',
  'src/pages/recommend/premium-line.astro',
  'src/pages/recommend/clash.astro',
  'src/pages/airports/[slug].astro',
  'src/pages/compare/index.astro'
];

for (const page of pages) {
  if (!fs.existsSync(page)) continue;
  let content = fs.readFileSync(page, 'utf8');
  
  // 1. Add import if not exists
  if (!content.includes('import AffiliateDisclosure')) {
    content = content.replace(/---([\s\S]*?)---/, (match, p1) => {
      return `---${p1}import AffiliateDisclosure from '../../components/AffiliateDisclosure.astro';\n---`;
    });
    // In airports/[slug].astro, the component import might need a different path
    if (page === 'src/pages/airports/[slug].astro') {
      content = content.replace(`import AffiliateDisclosure from '../../components/AffiliateDisclosure.astro';`, `import AffiliateDisclosure from '../../components/AffiliateDisclosure.astro';`);
    }
  }

  // 2. Add component right before the first CTA or the list of items
  // Usually this is after <div class="prose dark:prose-invert max-w-none mb-12">...</div>
  // Or in airports/[slug].astro, it can be before the <article>
  
  if (page.includes('/recommend/') || page.includes('/compare/')) {
    content = content.replace(/(<div class="space-y-6">)/, '<AffiliateDisclosure />\n    $1');
    content = content.replace(/(<div class="bg-white dark:bg-midnight rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden mb-8">)/, '<AffiliateDisclosure />\n    $1');
  } else if (page.includes('airports/[slug].astro')) {
    content = content.replace(/(<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">)/, '<AffiliateDisclosure />\n    $1');
  }

  fs.writeFileSync(page, content);
}
console.log('Injected AffiliateDisclosure');
