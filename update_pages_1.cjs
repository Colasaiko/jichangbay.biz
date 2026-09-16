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

// 1. Clash Mac
const clashMacPath = 'src/pages/clients/clash-mac/index.astro';
const clashMacContent = `---
import Layout from '../../../layouts/Layout.astro';
import { getRankedAirports } from '../../../utils/airportRanking';
import StructuredData from '../../../components/StructuredData.astro';

const rankedAirports = getRankedAirports().slice(0, 5);

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mac Clash怎么用？2026 Clash Verge安装、订阅与故障指南",
  "description": "提供最全 Mac Clash 使用教程，涵盖 M1/M2/M3 下载安装、导入节点订阅、开启 TUN 与 System Proxy 设置，解决所有超时与配置问题。",
  "author": {
    "@type": "Organization",
    "name": "机场湾"
  }
};
---

<Layout title="Mac Clash怎么用？2026 Clash Verge安装、订阅与故障指南" description="提供最全 Mac Clash 使用教程，涵盖 M1/M2/M3 下载安装、导入节点订阅、开启 TUN 与 System Proxy 设置，解决所有超时与配置问题。">
  <StructuredData type="Article" data={schemaData} />
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
    <div class="lg:w-3/4">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Mac Clash怎么用？2026 Clash Verge安装、订阅与故障指南</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <p>在 Mac 上使用 Clash 是许多用户的首选，因为其强大的规则分流与代理接管能力。随着旧版 ClashX 和 Clash for Windows 停止维护，2026年 <strong>Mac OS Clash</strong> 生态已经全面转向 <strong>Clash Verge Rev</strong> (基于 Mihomo 内核)。无论你是 Intel 还是 Apple Silicon M1/M2/M3/M4 芯片，这篇教程将带你从零开始下载、安装、导入节点，并解决 <code>clash timeout</code> 等常见故障。</p>
        
        <h2>Mac 现在应该使用什么 Clash / Mihomo 客户端？</h2>
        <p>很多旧教程仍推荐 ClashX 或 Clash for Mac，但这些项目早已删库停更。2026年，最佳的 Mac Clash 客户端是 <strong>Clash Verge Rev</strong>，它基于最新的 Mihomo (原 Clash Meta) 内核，全面支持各种现代协议（如 VLESS、Hysteria2）。</p>
        
        <h2>下载与安装 Clash Verge Mac</h2>
        <ol>
          <li>访问 Github 搜索 <code>Clash Verge Rev</code> 官方发布页。</li>
          <li>对于 Intel 电脑，下载 <code>x64.dmg</code>；对于 M1/M2/M3 苹果电脑，下载 <code>aarch64.dmg</code>。</li>
          <li>下载后双击挂载，将应用拖入“应用程序”文件夹。</li>
          <li>第一次启动权限：由于是第三方开源软件，Mac 会提示“无法验证开发者”。你需要前往 <strong>系统设置 > 隐私与安全性</strong>，向下滑动并点击“强制打开”。</li>
        </ol>

        <h2>导入机场订阅与更新节点</h2>
        <ol>
          <li>复制你的机场订阅链接（如果没有，请参阅 <a href="/recommend/clash/">Clash 机场推荐</a>）。</li>
          <li>打开 Clash Verge，点击左侧菜单的 <strong>订阅 (Subprofiles)</strong>。</li>
          <li>点击“新建”，在 URL 框中粘贴你的订阅链接。</li>
          <li>点击“导入/更新”。成功后会显示你的节点数量和流量信息。</li>
          <li>点击右侧的主配置让其高亮激活。</li>
        </ol>

        <h2>选择节点与代理接管</h2>
        <h3>系统代理 (System Proxy)</h3>
        <p>在左侧菜单点击 <strong>设置 (Settings)</strong>，打开 <strong>系统代理</strong>。此时你的 Mac 浏览器（如 Safari, Chrome）流量将经过 Clash。这是最常用的模式。</p>
        
        <h3>TUN 模式</h3>
        <p>如果你发现部分应用（如终端、非标准游戏）不走系统代理，你需要开启 <strong>TUN 模式</strong>。TUN 会创建一张虚拟网卡，接管 Mac 所有流量。Clash Verge Mac 需要管理员权限，第一次开启会弹窗要求输入 Mac 开机密码以安装 helper 工具。</p>

        <h2>常见问题 (FAQ)</h2>
        <h3>Mac Clash 怎么导入节点？</h3>
        <p>进入“订阅”界面新建，粘贴 URL 并保存即可。如果你遇到导入失败，可能是你的网络被墙阻断了订阅地址的访问。此时需联系机场索要备用订阅地址。</p>

        <h3>Clash Verge Mac 需要管理员权限吗？</h3>
        <p>正常使用系统代理不需要。只有当你开启 TUN 模式时，才需要输入管理员密码来创建虚拟网卡。</p>

        <h3>Mac 开 TUN 后全部 Timeout 怎么办？</h3>
        <p>这通常是因为 DNS 冲突或旧配置残留。尝试：1) 重启 Mac；2) 在设置中关闭再重新开启 TUN；3) 检查并重置你的 Clash 配置（点击 <a href="/guides/clash-config/">Clash 配置教程</a> 了解更多）。</p>
        
        <h3>Mac 电脑使用 Clash 为什么速度很慢？</h3>
        <p>如果只是速度慢而不是断网，通常是因为你选择的节点当前负载过高，或者你的网络运营商与该节点路由不佳。请尝试在“代理”页面测速并切换其他国家节点。</p>

        <h3>ClashX 还能不能用？</h3>
        <p>能用但不推荐。它缺乏对现代新协议的支持，并且不再收到安全补丁更新。</p>
      </div>
    </div>
    
    <div class="lg:w-1/4">
      <div class="sticky top-8">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">热门机场推荐</h3>
        <div class="space-y-4">
          {rankedAirports.map((airport) => (
            <a href={\`/airports/\${airport.slug}/\`} class="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
              <div class="font-bold text-gray-900 dark:text-white mb-1">{airport.name}</div>
              <div class="text-sm text-gray-500 mb-2">{airport.lineType}</div>
              <span class="text-xs bg-cyan-blue/10 text-cyan-blue px-2 py-1 rounded">查看详情</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</Layout>
`;
write(clashMacPath, clashMacContent);
