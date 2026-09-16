const fs = require('fs');

const slugAstroPath = 'src/pages/airports/[slug].astro';
let content = fs.readFileSync(slugAstroPath, 'utf8');

// The goal is to replace the "资料特点" and "客户端使用说明" sections with dynamic H2s and FAQs
// Let's locate the existing <h2>资料特点</h2> block and replace everything down to the end of <article>

const startStr = '<h2>资料特点</h2>';
const endStr = '</article>';

const newBlock = `
        <h2>{airport.name}是什么？</h2>
        <p>本站数据库当前记录 <strong>{airport.name}</strong> 线路类型为 <strong>{airport.lineType}</strong>，最低付款方案约 <strong>{displayPriceText}</strong>。根据数据库标签，其对流媒体的支持状况为：<strong>{airport.streamingSupport}</strong>，对 ChatGPT/Claude 等 AI 平台的支持状况为：<strong>{airport.aiSupport}</strong>。</p>
        
        <h3>核心特性</h3>
        <ul>
          {airport.features.map((f: string) => <li>{f}</li>)}
        </ul>

        <h2>{airport.name}套餐价格</h2>
        <div class="overflow-x-auto not-prose mb-8">
          <table class="min-w-full text-sm text-left border-collapse border border-gray-200 dark:border-gray-700 rounded-lg hidden md:table">
            <thead class="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th class="p-3 border border-gray-200 dark:border-gray-700">套餐名称</th>
                <th class="p-3 border border-gray-200 dark:border-gray-700">流量</th>
                <th class="p-3 border border-gray-200 dark:border-gray-700">月付</th>
                <th class="p-3 border border-gray-200 dark:border-gray-700">季付</th>
                <th class="p-3 border border-gray-200 dark:border-gray-700">半年付</th>
                <th class="p-3 border border-gray-200 dark:border-gray-700">年付</th>
                <th class="p-3 border border-gray-200 dark:border-gray-700">一次性</th>
              </tr>
            </thead>
            <tbody>
              {airport.plans && airport.plans.map((p: any) => (
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="p-3 border border-gray-200 dark:border-gray-700 font-bold">{p.name}</td>
                  <td class="p-3 border border-gray-200 dark:border-gray-700">{p.traffic}</td>
                  <td class="p-3 border border-gray-200 dark:border-gray-700">{p.monthly ? \`¥\${p.monthly}\` : '-'}</td>
                  <td class="p-3 border border-gray-200 dark:border-gray-700">{p.quarterly ? \`¥\${p.quarterly}\` : '-'}</td>
                  <td class="p-3 border border-gray-200 dark:border-gray-700">{p.semiannual ? \`¥\${p.semiannual}\` : '-'}</td>
                  <td class="p-3 border border-gray-200 dark:border-gray-700">{p.annual ? \`¥\${p.annual}\` : '-'}</td>
                  <td class="p-3 border border-gray-200 dark:border-gray-700">{p.oneTime ? \`¥\${p.oneTime}\` : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div class="md:hidden space-y-4 mt-4">
            {airport.plans && airport.plans.map((p: any) => (
              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div class="flex justify-between items-center mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">
                  <div class="font-bold text-lg">{p.name}</div>
                  <div class="text-cyan-blue font-bold">{p.traffic}</div>
                </div>
                <div class="grid grid-cols-2 gap-2 text-sm">
                  {p.monthly && <div>月付: <span class="font-medium text-gray-900 dark:text-gray-100">¥{p.monthly}</span></div>}
                  {p.quarterly && <div>季付: <span class="font-medium text-gray-900 dark:text-gray-100">¥{p.quarterly}</span></div>}
                  {p.semiannual && <div>半年付: <span class="font-medium text-gray-900 dark:text-gray-100">¥{p.semiannual}</span></div>}
                  {p.annual && <div>年付: <span class="font-medium text-gray-900 dark:text-gray-100">¥{p.annual}</span></div>}
                  {p.oneTime && <div>一次性: <span class="font-medium text-gray-900 dark:text-gray-100">¥{p.oneTime}</span></div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>{airport.name}好用吗？</h2>
        <p>结合收录的资料特性，<strong>{airport.name}</strong> 属于 <strong>{airport.lineType}</strong> 网络。它对流媒体的支持表现为 {airport.streamingSupport}，支持情况因实际节点而异。</p>
        <p><strong>注意：</strong>由于网络环境复杂，任何商家的真实测速与晚高峰表现均受本地运营商和实时路由状态影响。本站无法对任何商家的“绝对稳定”作出保证，建议先购买月付或试用套餐进行体验。</p>
        
        <h2>常见问题（FAQ）</h2>
        
        {airport.slug === 'weifeng' && (
          <>
            <h3>微风网络手机怎么上网？微风网络可以用 Clash 吗？</h3>
            <p>购买后，可在微风网络官网用户中心找到对应教程。针对安卓，常用 Clash for Android；针对 iOS，通常使用 Shadowrocket。只要服务商提供对应格式的订阅链接，即可导入并使用。</p>
          </>
        )}
        
        {airport.slug === 'kuajieyun' && (
          <>
            <h3>跨界云怎么样？适合什么场景？</h3>
            <p>跨界云提供了平价的套餐体系，适合日常查阅资料及轻度流媒体用户。具体延迟情况取决于你的本地网络运营商。</p>
          </>
        )}

        {airport.slug === 'wuyou' && (
          <>
            <h3>无忧链接怎么购买？购买前应该确认什么？</h3>
            <p>可以直接前往无忧链接官网注册购买。购买前，请确认其支持的客户端订阅格式，并先通过月付测试晚高峰是否卡顿。</p>
          </>
        )}

        {airport.slug === 'firefly' && (
          <>
            <h3>萤火虫能不能用 Clash？</h3>
            <p>购买前应以服务商当前订阅格式和官方教程为准。通常情况下，主流服务商都原生支持输出 Clash 或 Mihomo 兼容格式。</p>
          </>
        )}
        
        {airport.slug === 'muguang' && (
          <>
            <h3>暮光加速器好用吗？</h3>
            <p>暮光网络（暮光加速）收录于本站数据库。在做出购买决定前，建议你对比本站其他品牌并先从短周期套餐开始体验。</p>
          </>
        )}

        <h3>{airport.name} 怎么使用？能在手机/电脑上用吗？</h3>
        <p>不同服务商提供的订阅格式可能不同，购买前建议在服务商后台或官方教程确认是否兼容你使用的客户端（如 Clash、Shadowrocket、Sing-box 等）。</p>
        {airport.macDownload && (
          <p><a href={airport.macDownload} target="_blank" rel="noopener noreferrer">获取相关 Mac 客户端入口</a></p>
        )}
        <p>更多跨平台客户端的配置教程，请参阅本站的 <a href="/compare/">客户端对比指南</a> 及 <a href="/clients/">下载专区</a>。</p>
      </div>
    </article>
`;

let newPage = content;
const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);
if (startIndex !== -1 && endIndex !== -1) {
  newPage = content.substring(0, startIndex) + newBlock + content.substring(endIndex);
}

fs.writeFileSync(slugAstroPath, newPage);
console.log('Updated slug.astro');
