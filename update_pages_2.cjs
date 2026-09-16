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

// 2. Clash Config
const clashConfigPath = 'src/pages/guides/clash-config/index.astro';
const clashConfigContent = `---
import Layout from '../../../layouts/Layout.astro';
import { getRankedAirports } from '../../../utils/airportRanking';
import StructuredData from '../../../components/StructuredData.astro';

const rankedAirports = getRankedAirports().slice(0, 5);

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Clash配置教程：订阅、规则、TUN与常见设置",
  "description": "详解电脑与手机端 Clash / Clash Verge 配置文件如何使用，从导入机场订阅、切换全局与规则模式，到设置 System Proxy 与 TUN 的完整自用配置指南。",
  "author": {
    "@type": "Organization",
    "name": "机场湾"
  }
};
---

<Layout title="Clash配置教程：订阅、规则、TUN与常见设置 - 机场湾" description="详解电脑与手机端 Clash / Clash Verge 配置文件如何使用，从导入机场订阅、切换全局与规则模式，到设置 System Proxy 与 TUN 的完整自用配置指南。">
  <StructuredData type="Article" data={schemaData} />
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
    <div class="lg:w-3/4">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">Clash配置教程：订阅、规则、TUN与常见设置</h1>
      
      <div class="prose dark:prose-invert max-w-none">
        <p>很多新手拿到机场的 Clash 订阅链接后，面对界面上复杂的代理组、规则和设置感到无所适从。这篇 Clash 配置教程将以最简单的方式，为你讲解如何激活配置、切换模式以及排查基础网络故障。</p>
        
        <h2>订阅链接与配置文件是什么？</h2>
        <p><strong>订阅链接（Subscription Link）</strong> 本质上是一个网页地址，客户端会去这个地址下载你的 <strong>配置文件（Profile）</strong>。这个文件是由 YAML 语言编写的，里面包含了节点服务器 IP、密码以及大量的路由分流规则。</p>
        <p><strong>普通用户需要手写 YAML 吗？</strong> 完全不需要。主流客户端（如 Clash Verge、Clash for Windows 替代品）已经做好了可视化界面，你只需粘贴订阅地址并更新，客户端会自动处理 YAML 解析。</p>

        <h2>Clash 的三大代理模式</h2>
        <ul>
          <li><strong>规则模式（Rule）</strong>：最推荐的日常模式。访问国内网站直连（不消耗机场流量，速度快），访问被封锁的国外网站才走代理。规则由配置文件自动判断。</li>
          <li><strong>全局模式（Global）</strong>：所有网页全部走代理。一般只在测试节点是否正常，或规则出错导致某个网站打不开时临时开启。</li>
          <li><strong>直连模式（Direct）</strong>：相当于关闭了翻墙功能，所有流量不走节点。</li>
        </ul>

        <h2>接管流量的两种方式</h2>
        <h3>System Proxy (系统代理)</h3>
        <p>这是最传统的接管方式。开启后，Clash 会向你的操作系统（Windows/Mac）注册一个 HTTP 代理端口。浏览器会自动将网页请求发往该端口。缺点是：对很多不支持系统代理的应用（如命令行终端、UWP 应用）无效。</p>

        <h3>TUN 模式</h3>
        <p>TUN 模式在系统底层创建一个虚拟网卡，强制接管所有软件的流量。无需软件主动支持代理，适合重度用户或运行环境复杂的开发者。<a href="/questions/is-tun-mode-global/">了解 TUN 与全局模式的区别</a>。</p>

        <h2>常见问题 (FAQ)</h2>
        <h3>如何重置 Clash 配置？</h3>
        <p>当出现莫名其妙的网络故障时，你可以：1) 在订阅界面删除当前配置；2) 重启客户端；3) 重新粘贴订阅链接进行下载；4) 确保在代理页面选择了正确的节点。</p>

        <h3>Clash 导入为什么 Timeout？</h3>
        <p>如果你在导入配置文件时就提示超时（Timeout），说明你本地网络连获取配置的请求都被墙了。请在机场后台寻找备用订阅链接，或者先用临时代理（如手机流量共享）拉取首次配置。</p>

        <h3>Clash 怎么配置访问外网？</h3>
        <p>简单三步：新建订阅并导入链接，点击使用该配置；进入代理页面在节点组里选择一个延迟正常的节点；进入设置打开 System Proxy（系统代理）。</p>
      </div>
    </div>
    
    <div class="lg:w-1/4">
      <div class="sticky top-8">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">稳定机场推荐</h3>
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
write(clashConfigPath, clashConfigContent);
