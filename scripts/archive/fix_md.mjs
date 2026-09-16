import fs from 'fs';
import path from 'path';

const contentDir = 'src/data/questions_content';
const files = fs.readdirSync(contentDir);

for (const file of files) {
  if (!file.endsWith('.md')) continue;
  let filePath = path.join(contentDir, file);
  let c = fs.readFileSync(filePath, 'utf8');
  
  // 1. Remove absolute phrases
  c = c.replace(/不到 2000 人的小机场/g, '部分缺乏长期运营记录的小型服务商');
  c = c.replace(/超过 1-2 年/g, '长期且有良好口碑');
  c = c.replace(/99%|80%|百分百/g, '大多数');
  c = c.replace(/绝对不会/g, '通常不会');
  c = c.replace(/必定/g, '通常会');
  c = c.replace(/100% 无法访问/g, '可能无法访问');
  c = c.replace(/绝对避开/g, '建议避免使用');
  c = c.replace(/一定拒绝/g, '可能会拒绝连接');
  c = c.replace(/超过 2 分钟，服务器将直接拒绝连接/g, '偏差较大，服务器可能会拒绝连接');
  c = c.replace(/误差需小于 2 分钟/g, '确保系统时间与网络同步');
  c = c.replace(/一天重度使用也不会超过 50MB/g, '日常使用通常消耗较少');
  c = c.replace(/100GB 闭眼买，绝对用不完/g, '100GB 对轻度浏览通常十分充足');
  c = c.replace(/100GB 非常安全/g, '100GB 通常够用');
  c = c.replace(/第一笔订单绝对只买一个月/g, '第一笔订单建议先买短期套餐试用');
  c = c.replace(/几乎一定是你自身账号或系统环境出现了问题/g, '通常应该先检查账号、订阅、本地网络和服务商状态');

  // ChatGPT specific
  if (file === 'cannot-open-chatgpt-with-airport.md' || file === 'chatgpt-unsupported-country-error.md') {
    c = c.replace(/绕过 OpenAI 地区限制/g, '');
    c = c.replace(/规避/g, '');
    c = c.replace(/手动挑选标注有 .*?原生 IP.*? 的节点/g, '确认当前节点所在地区是否属于 OpenAI 官方支持地区');
    c = c.replace(/推荐使用.*?地区.*?节点/g, '请参考 OpenAI 官方支持的国家和地区列表，并在遇到问题时关闭代理或切换网络环境进行测试。');
    c = c.replace(/香港目前不在.*?100%.*?/g, '香港目前不在 OpenAI 官方支持地区列表中。');
    c = c.replace(/切换到干净的原生 IP 节点/g, '确认网络环境');
    
    // Add disclaimer
    if (!c.includes('官方支持地区')) {
        c += '\n\n## 地区支持说明\n如果出现 `unsupported country`，说明当前网络出口可能被识别为不受支持地区。如果出现 `Sorry, you have been blocked`，可能与代理、IP 风险或临时安全限制有关。建议检查官方支持地区、清除缓存、使用无痕窗口测试，必要时联系 OpenAI Support。';
    }
  }

  // Netflix specific
  if (file.includes('netflix')) {
    c = c.replace(/只能看到带有红色 N 标志的网飞自制剧。这被称为.*?伪解锁.*?这证明你的 IP 已被部分屏蔽。/g, '代理被识别时，Netflix 的具体表现可能变化，包括内容库受限、播放报错或提示代理/VPN。');
    c = c.replace(/通常新加坡、台湾、美国的节点内容库最丰富。/g, '不同地区的 Netflix 内容库不同，选择哪个地区应取决于你想观看的内容。');
  }

  // 100GB specific
  if (file.includes('100gb')) {
    c = c.replace(/约 100MB \/ 小时/g, '常见范围约 100MB / 小时');
    c = c.replace(/约 800MB ~ 1GB \/ 小时/g, '常见范围约 800MB ~ 1GB / 小时');
    c = c.replace(/约 1.5GB ~ 2GB \/ 小时/g, '常见范围约 1.5GB ~ 2GB / 小时');
  }

  fs.writeFileSync(filePath, c);
}

// Explicitly rewrite what-is-airport.md
const whatIsAirport = `## 机场是什么？
“机场”是一个通俗的网络词汇，指代提供代理节点和订阅链接的网络服务商。由于早期的 Shadowsocks 客户端使用纸飞机作为图标，这类提供代理服务的商家便被用户形象地称为“机场”。

## 机场提供什么？
机场的核心产品是“节点”和“带宽”。用户购买的是通过这些服务器转发网络请求的权利。通过这些节点，用户的网络流量可以被加密并转发，从而访问国际互联网资源。

## 节点与订阅
- **节点**：分布在世界各地的云服务器（如香港、日本、美国）。每个节点代表一个不同的出口 IP。
- **订阅链接**：一串包含你账号认证信息和所有可用节点配置的专属网址。客户端通过它来获取和更新节点列表。

## 客户端是什么？
客户端是你安装在电脑或手机上的软件（如 Clash、Shadowrocket、v2rayN）。机场本身只提供网络通路，你需要借助客户端软件，将订阅链接导入其中，才能在设备上建立代理连接。

## 简单使用流程
1. **购买套餐**：在服务商官网注册并购买流量套餐。
2. **获取订阅**：在后台复制一键订阅链接。
3. **导入客户端**：下载适合你设备的客户端软件，将订阅链接粘贴导入。
4. **开启代理**：选中一个可用节点，打开系统代理开关，即可正常上网。
`;
fs.writeFileSync(path.join(contentDir, 'what-is-airport.md'), whatIsAirport);

// Explicitly rewrite airport-guide-for-beginners.md
const guideForBeginners = `## 新手选购第一步：明确核心需求
第一次购买代理服务，很容易被眼花缭乱的广告迷惑。新手选购的核心在于匹配自己的真实用途，切勿盲目追求高价专线，也不要贪图极度低廉的价格。

## 避坑指南：不要轻信夸张宣传
- **拒绝“几块钱几千G”**：国际带宽成本固定，极低的价格通常意味着严重的超售。这种服务在白天可能正常，但一到晚上 8-11 点的高峰期，通常会卡顿甚至断网。
- **谨慎购买年付套餐**：对于不了解的服务商，第一笔订单建议先买短期套餐试用。长期套餐会增加预付风险，是否续订长期应结合其历史稳定性、售后响应速度和自身实际体验来决定。

## 新手友好的重要指标
1. **一键导入功能**：优质服务商会提供针对各种设备（Windows, Mac, iOS, Android）的“一键导入”按钮，省去手动复制粘贴的繁琐步骤。
2. **完善的图文教程**：对于新手，一份能够覆盖常见报错、更新步骤的官方新手文档非常重要。
3. **客服支持**：是否提供网站工单或电报群的及时响应。

## 建议的购买策略
1. 先购买 1 个月的入门级套餐。
2. 在晚上 9 点左右（网络高峰期）测试常用网站（如视频播放）的流畅度。
3. 如果连续几天体验良好，再考虑升级流量或购买季付套餐。
`;
fs.writeFileSync(path.join(contentDir, 'airport-guide-for-beginners.md'), guideForBeginners);

// Explicitly rewrite how-to-choose-airport-2026.md
const choose2026 = `## 2026 年网络环境与技术变迁
随着网络环境的变化，传统的直连服务器在敏感时期的存活率越来越低。2026 年选购代理服务，核心考量已经从单纯的“速度”转变为“协议隐蔽性”与“链路稳定性”。

## 不同人群的选购建议

### 1. 影音流媒体爱好者
- **需求特征**：大流量、对画质有要求、需要解锁特定地区的流媒体库（如 Netflix, Disney+）。
- **选购建议**：优先选择提供 BGP 隧道中转的服务商。这类线路性价比高，带宽充足。同时，需要确认服务商是否对流媒体解锁提供支持。

### 2. 游戏玩家与跨境办公
- **需求特征**：极低延迟、不丢包、极度稳定。
- **选购建议**：必须选择提供 IPLC 或 IEPL 企业内网专线的服务商。这类线路不经过传统的公网审查，延迟极低且在晚高峰不受拥堵影响，但价格相对较高。

### 3. 轻度查资料与学术研究
- **需求特征**：流量消耗少、偶尔使用。
- **选购建议**：可选择提供“按量计费”（不限时流量包）的服务，用多少扣多少，没有月费压力，非常适合轻度用户。

## 总结
2026 年的选购策略是“对症下药”。不要为了看网页去购买昂贵的游戏专线，也不要指望用极其廉价的套餐获得流畅的 4K 体验。合理评估自己的流量消耗与延迟要求，才能选到最具性价比的方案。
`;
fs.writeFileSync(path.join(contentDir, 'how-to-choose-airport-2026.md'), choose2026);


console.log('Processed all markdown files!');
