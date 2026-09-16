const fs = require('fs');
const path = require('path');

function write(file, content) {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(file, content.trim() + '\n', 'utf8');
  console.log('Updated:', file);
}

// 7. Sing-box Client
const singBoxPath = 'src/pages/clients/sing-box/index.astro';
const singBoxContent = `---
import Layout from '../../../layouts/Layout.astro';
import { getRankedAirports } from '../../../utils/airportRanking';
import StructuredData from '../../../components/StructuredData.astro';

const rankedAirports = getRankedAirports().slice(0, 5);
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sing-box配置与下载教程：如何使用这款全能代理工具",
  "description": "详解什么是 Sing-box，如何在 Mac/Windows 上下载安装，以及 config.json 基础配置、FakeIP 和 TUN 模式的开启方法。",
  "author": { "@type": "Organization", "name": "机场湾" }
};
---

<Layout title="Sing-box配置与下载教程：如何使用这款全能代理工具" description="详解什么是 Sing-box，如何在 Mac/Windows 上下载安装，以及 config.json 基础配置、FakeIP 和 TUN 模式的开启方法。">
  <StructuredData type="Article" data={schemaData} />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
    <div class="lg:w-3/4">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Sing-box配置与下载教程：如何使用这款全能代理工具</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <h2>Sing-box是什么？</h2>
        <p><strong>Sing-box</strong> 是新一代的通用代理平台，被称为“瑞士军刀”。它比 V2ray 更轻量，比原版 Clash 支持更多的协议（如 ShadowTLS, Reality, Hysteria2）。许多用户将其作为软路由或服务器端的核心，同时它也在桌面端和移动端推出了优秀的 GUI 客户端（如 SFA - Sing-box for Android）。</p>

        <h2>如何下载 Sing-box</h2>
        <p>大部分普通用户不需要直接使用内核代码。推荐使用带有图形界面的客户端版本：</p>
        <ul>
          <li><strong>Mac / iOS</strong>：可以通过 App Store 下载官方版本（非国区）。</li>
          <li><strong>Windows</strong>：推荐使用 <code>sing-box-windows</code> GUI 客户端，在 Github 的官方发布页可找到。</li>
          <li><strong>Android</strong>：直接下载 SFA（Sing-box for Android）安装包。</li>
        </ul>

        <h2>config.json 基础与配置导入</h2>
        <p>如果你使用第三方 GUI 或软路由，常常需要接触 <code>config.json</code>。</p>
        <p>不同于 Clash 使用 YAML，Sing-box 完全基于 JSON 进行配置。一个标准的配置包含入站 (inbounds)、出站 (outbounds) 和路由 (route)。</p>
        <p><strong>普通用户如何配置？</strong> 现在绝大多数中高端机场都在后台提供了直接导出 Sing-box 订阅链接的功能。你只需要将订阅链接复制到客户端中即可，无需手动编写复杂的 JSON 规则。</p>

        <h2>高级功能FAQ</h2>
        <h3>如何配置 FakeIP 与 TUN 模式？</h3>
        <p>在 JSON 配置的 <code>inbounds</code> 部分，配置一个类型为 <code>tun</code> 的入站，并在 <code>dns</code> 模块中开启 <code>fakeip</code>。这允许接管系统级流量，无需每次手动设置代理。不过 GUI 客户端大多已将此功能做成了一键开关，强烈建议新手直接使用界面按钮。</p>

        <h3>Sing box client_subnet 是什么？</h3>
        <p><code>client_subnet</code> 用于在查询 DNS 时附带你的本地网段信息，帮助 CDN 服务器分配离你最近的节点（EDNS Client Subnet 技术）。通常在使用代理规则解决 DNS 污染时配置。</p>
        
        <h3>Sing-box 和 Clash 有什么区别？</h3>
        <p>如果你在纠结到底用哪个，请查看我们的深度对比：<a href="/compare/sing-box-vs-clash/">Sing-box 与 Clash 优缺点全面对比</a>。</p>
      </div>
    </div>
  </div>
</Layout>
`;
write(singBoxPath, singBoxContent);

// 8. Sing-box vs Clash Compare
const singBoxComparePath = 'src/pages/compare/sing-box-vs-clash.astro';
const singBoxCompareContent = `---
import Layout from '../../layouts/Layout.astro';
import StructuredData from '../../components/StructuredData.astro';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sing-box vs Clash 对比：2026年你应该选择哪个客户端？",
  "description": "深度解析 Sing-box 与 Clash (Mihomo) 的区别，从内核性能、协议支持、配置难度与移动端表现进行全面对比。",
  "author": { "@type": "Organization", "name": "机场湾" }
};
---
<Layout title="Sing-box vs Clash 对比：2026年你应该选择哪个客户端？" description="深度解析 Sing-box 与 Clash (Mihomo) 的区别，从内核性能、协议支持、配置难度与移动端表现进行全面对比。">
  <StructuredData type="Article" data={schemaData} />
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6">Sing-box vs Clash (Mihomo) 终极对比</h1>
    <div class="prose dark:prose-invert max-w-none">
      <p>当你寻找机场客户端时，经常会看到 <strong>sing box clash 对比</strong> 的讨论。虽然它们都是优秀的代理工具，但在 2026 年，它们的受众群体和使用体验已经有了明确的分野。</p>

      <h2>1. 核心架构与生态区别</h2>
      <p><strong>Clash (特指 Mihomo 内核，即原 Clash Meta)</strong>：拥有全世界最庞大的图形界面生态（Clash Verge Rev, Mihomo Party 等）。采用 YAML 作为配置文件，机场适配率高达 99%。</p>
      <p><strong>Sing-box</strong>：作为一个“通用代理平台”，以极高的性能和极低的内存占用闻名。配置采用 JSON，目前主流机场正在逐步普及原生支持。</p>

      <h2>2. 各平台使用体验建议</h2>
      <ul>
        <li><strong>Windows / Mac 桌面端</strong>：<strong>首选 Clash (Mihomo)</strong>。其图形客户端经过多年迭代，代理组切换、测速、分流等操作极度顺滑。相比之下，桌面版的 Sing-box GUI 仍然偏向极客。</li>
        <li><strong>iOS (苹果手机)</strong>：<strong>打平</strong>。不论是使用基于 Clash 的 Shadowrocket / Stash，还是官方的 Sing-box 客户端，体验都非常优秀。</li>
        <li><strong>Android (安卓手机)</strong>：<strong>推荐 Sing-box (SFA) 或 Clash for Android (Meta版)</strong>。Sing-box 在安卓后台的耗电量控制往往优于其他客户端。</li>
      </ul>

      <h2>总结：如何选择？</h2>
      <p>如果你是<strong>小白用户或普通玩家</strong>，请毫无悬念地选择基于 Clash Mihomo 内核的客户端，因为几乎所有机场都提供直接订阅，遇错也容易搜到教程。</p>
      <p>如果你是<strong>极客、软路由玩家或自建节点用户</strong>，Sing-box 丰富的前沿协议支持和极轻量的资源占用将是你的不二之选。</p>
    </div>
  </div>
</Layout>
`;
write(singBoxComparePath, singBoxCompareContent);

// 9. Clash recommend commercial page
const clashRecommendPath = 'src/pages/recommend/clash.astro';
const clashRecommendContent = `---
import Layout from '../../layouts/Layout.astro';
import { getRankedAirports } from '../../utils/airportRanking';
import StructuredData from '../../components/StructuredData.astro';
import AffiliateDisclosure from '../../components/AffiliateDisclosure.astro';

const rankedAirports = getRankedAirports().slice(0, 8);
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Clash机场推荐：2026年适合Clash/Mihomo的优质节点梯子",
  "description": "整理支持导入 Clash Verge、Clash for Windows 及其它 Mihomo 内核客户端的高性价比机场节点。",
};
---

<Layout title="Clash机场推荐：2026年适合Clash/Mihomo的优质节点梯子" description="整理支持导入 Clash Verge、Clash for Windows 及其它 Mihomo 内核客户端的高性价比机场节点。">
  <StructuredData type="Article" data={schemaData} />
  
  <div class="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
    <div class="lg:w-3/4">
      <h1 class="text-4xl font-bold mb-6">2026年 Clash 机场与节点推荐</h1>
      
      <div class="prose dark:prose-invert max-w-none mb-8">
        <p>如果你在使用 Clash Verge Rev、Mihomo Party 等客户端，你需要一个能够提供 <strong>Clash 订阅链接</strong> 的优质机场。绝大多数主流服务商都原生支持输出 YAML 格式的配置，一键导入即可使用。</p>
        
        <AffiliateDisclosure />

        <h2>购买前怎么确认兼容？</h2>
        <p>请注意：<strong>购买前务必在服务商用户后台或官方教程文档中确认，他们是否提供原生 Clash/Mihomo 订阅。</strong> 虽然目前 95% 的商家都支持，但部分老牌或特殊协议商家可能需要借助外部转换工具，这会增加使用门槛。</p>
        <p>如果你不懂如何导入配置，请参阅：<a href="/guides/clash-config/">Clash 配置文件导入与使用教程</a>。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rankedAirports.map((airport) => (
          <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 p-6">
            <h3 class="text-xl font-bold mb-2"><a href={\`/airports/\${airport.slug}/\`} class="hover:text-cyan-blue">{airport.name}</a></h3>
            <p class="text-sm text-gray-500 mb-4">{airport.lineType}</p>
            <a href={\`/airports/\${airport.slug}/\`} class="text-cyan-blue font-bold text-sm">查看套餐与详细资料 &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  </div>
</Layout>
`;
write(clashRecommendPath, clashRecommendContent);

// 10. 2026 Airport recommend
const airport2026Path = 'src/pages/recommend/2026-airport.astro';
const airport2026Content = `---
import Layout from '../../layouts/Layout.astro';
import { getRankedAirports } from '../../utils/airportRanking';
import StructuredData from '../../components/StructuredData.astro';
import AffiliateDisclosure from '../../components/AffiliateDisclosure.astro';

const rankedAirports = getRankedAirports().slice(0, 8);
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "2026机场推荐怎么选？最新节点排行榜与防坑指南",
  "description": "2026年9月更新，全面解析今年选择机场梯子节点的核心标准，满足稳定、便宜与专线需求。",
};
---

<Layout title="2026机场推荐怎么选？最新节点梯子防坑指南" description="2026年9月更新，全面解析今年选择机场梯子节点的核心标准，满足稳定、便宜与专线需求。">
  <StructuredData type="Article" data={schemaData} />
  
  <div class="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12">
    <div class="lg:w-3/4">
      <h1 class="text-4xl font-bold mb-6">2026机场推荐怎么选？节点防坑指南</h1>
      
      <div class="prose dark:prose-invert max-w-none mb-8">
        <p>随着防火墙规则的不断升级和代理协议的演进，<strong>2026年9月</strong>寻找优质的机场节点有了新的标准。本站收录了包含微风网络、跨界云等在内的 29 个品牌的基础资料，帮你理清选择思路。</p>
        <AffiliateDisclosure />

        <h2>2026 机场推荐重点看什么？</h2>
        <ul>
          <li><strong>根据客户端选</strong>：如果你是 Clash 用户，绝大多数机场原生支持。如果你使用 Sing-box 客户端，最好确认商家支持 JSON 格式的一键订阅。<a href="/recommend/clash/">查看 Clash 专题</a>。</li>
          <li><strong>根据线路选</strong>：如果是重度游戏、视频会议需求，建议关注标明拥有 <strong>IPLC/IEPL 专线</strong> 的品牌。<a href="/recommend/premium-line/">查看专线专题</a>。</li>
          <li><strong>根据预算选</strong>：如果你只是查查资料偶尔上外网，性价比中转机场足以满足需求。<a href="/recommend/cheap-airport/">查看平价专题</a>。</li>
        </ul>
        <p>切记：不要盲目追求大流量年付。网络服务存在波段性，先买月付或季付测试，确认在你的本地网络（特别是晚高峰）体验良好后，再考虑长期续费。</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rankedAirports.map((airport) => (
          <div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 p-6">
            <h3 class="text-xl font-bold mb-2"><a href={\`/airports/\${airport.slug}/\`} class="hover:text-cyan-blue">{airport.name}</a></h3>
            <p class="text-sm text-gray-500 mb-4">{airport.lineType}</p>
            <a href={\`/airports/\${airport.slug}/\`} class="text-cyan-blue font-bold text-sm">查看套餐与详细资料 &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  </div>
</Layout>
`;
write(airport2026Path, airport2026Content);
