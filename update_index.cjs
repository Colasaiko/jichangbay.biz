const fs = require('fs');

let c = fs.readFileSync('src/pages/index.astro', 'utf8');

c = c.replace(/description="[^"]*"/, 'description="2026机场推荐与套餐资料整理，收录29个品牌，提供便宜机场、稳定机场、专线机场、Clash客户端、套餐对比和常见问题指南。"');
c = c.replace(/最真实的数据参考/g, '最全面的套餐资料参考');
c = c.replace(/全网最详尽的测速数据与购买建议。/g, '');
c = c.replace(/结合速度、价格与售后综合评分/g, '结合公开套餐与价格指标排序');

c = c.replace(/<h3 class="text-xl font-bold mb-6 flex items-center">.*?根据收录品牌资料与编辑规则定期人工整理<\/div>/s, 
`<h3 class="text-xl font-bold mb-6 flex items-center"><span class="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>实时收录数据看板</h3>
          <div class="space-y-5">
            <div class="flex justify-between items-center"><span class="text-sm text-gray-300 font-medium">当前收录品牌</span><span class="text-xl font-bold text-cyan-blue">29 家</span></div>
            <div class="flex justify-between items-center"><span class="text-sm text-gray-300 font-medium">问题百科条目</span><span class="text-xl font-bold text-purple-500">249 条</span></div>
            <div class="flex justify-between items-center"><span class="text-sm text-gray-300 font-medium">P0 深度解决指南</span><span class="text-xl font-bold text-green-500">30 篇</span></div>
            <div class="flex justify-between items-center"><span class="text-sm text-gray-300 font-medium">基础套餐数据</span><span class="text-sm font-bold text-coral">来自公开资料整理</span></div>
          </div>
          <div class="mt-6 pt-4 border-t border-white/10 text-xs text-gray-400 text-center">注：未独立核验的实际表现指标仅供参考</div>`);

// Also fix the bottom "关于机场湾" section
c = c.replace(/提供最真实、最客观的节点测速数据与购买建议。我们深知在海量商家中筛选出优质服务有多么困难，因此我们建立这套基于客观指标与长期监测的评测体系。/g, '整理基础的品牌资料与套餐数据，以减少信息差。我们深知在海量商家中筛选出优质服务有多么困难，因此我们试图搭建一个兼具公开信息与多维比对的分类导航体系。');

// Also fix "完美绕过限制的高端原生线路清单"
c = c.replace(/完美绕过限制的高端原生线路清单/g, '整理的支持 AI 或流媒体的专项方案');

fs.writeFileSync('src/pages/index.astro', c);
console.log('index.astro updated');
