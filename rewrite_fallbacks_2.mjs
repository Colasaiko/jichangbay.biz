import fs from 'fs';
import path from 'path';

const contentDir = 'src/data/questions_content';

const rewrites = {
  "airport-subscription-invalid.md": "## 为什么订阅会失效？\n在使用代理的过程中，客户端突然提示“获取订阅失败”或“URL Invalid”，通常是因为服务商为了规避防火墙封锁，更换了订阅的域名或入口。\n\n### 如何排查与解决\n1. **确认网络状态**：关闭现有的代理开关（设置为直连），确保你的本地网络能正常上网。\n2. **登录官网获取新链接**：使用浏览器登录服务商后台，复制最新的“备用订阅链接”。\n3. **覆盖旧配置**：在客户端内找到原有的订阅配置，粘贴新链接并保存，然后点击更新/下载即可。",
  
  "airport-subscription-leaked.md": "## 订阅泄露的严重后果\n订阅链接包含你的用户凭据。如果不小心截图发到了公开的群组，任何人都可以直接导入你的配置。\n\n### 产生的影响\n- 你的套餐流量会被迅速耗尽。\n- 服务商检测到多个异地 IP 同时在线，可能会判定你违规共享账号，从而封禁封号。\n\n### 紧急补救措施\n发现泄露后，应第一时间登录官网后台。在“仪表盘”或订阅管理中，点击**“重置订阅链接”**或**“重置 UUID”**。重置后，旧链接立即永久失效，盗用者也会被强制断开。随后，你需要用新链接在自己的所有设备上重新导入一次。",
  
  "chatgpt-unsupported-country-error.md": "## Unsupported Country 错误解析\n在访问 OpenAI 服务（如 ChatGPT）时，如果页面提示 `not available in your country`，这表明你当前网络出口的 IP 属于 OpenAI 尚未正式提供服务的国家或地区。\n\n### 地区支持情况\n- 目前 OpenAI 支持美国、日本、新加坡、台湾等多个主要地区。\n- **香港**目前不在 OpenAI 官方支持地区列表中。\n\n### 故障排查建议\n1. 请参考 OpenAI 官方支持的国家和地区列表。\n2. 如果你开启了代理，确认当前节点所在地区是否属于官方支持地区。建议避免使用未开放地区的节点。\n3. 在遇到问题时，可以尝试切换网络环境，清除浏览器缓存，或使用无痕窗口测试。必要时联系 OpenAI Support。",
  
  "clash-import-subscription-failed.md": "## Clash 导入失败原因及解决\n在 Clash (Verge / Mihomo) 中粘贴订阅链接点击下载时，有时会提示 Network Error 或 Timeout。\n\n### 常见原因\n1. **系统代理卡死**：当前开启了失效的代理，导致连下载配置的请求都被阻断。\n2. **DNS 污染**：本地网络无法解析订阅域名的真实 IP。\n\n### 解决步骤\n- 首先，**关闭 Clash 的系统代理（System Proxy）和 TUN 模式**。\n- 其次，如果直连依然下载失败，说明该订阅域名在你的网络环境下被屏蔽。请登录机场官网，通常会提供备用的订阅下载地址，复制备用地址重新导入。\n- 最后，如果所有备用地址都失效，请联系客服获取最新的防封锁链接。",
  
  "how-to-find-stable-airport.md": "## 判断稳定性的核心维度\n对于重度网络用户而言，速度快只是锦上添花，晚高峰不掉线才是刚需。\n\n### 优质服务商的特征\n1. **线路架构**：提供国内 BGP 隧道中转或专线（IPLC/IEPL），而非脆弱的公网直连。\n2. **冗余设计**：拥有多个不同地区的入口 IP。当某个入口遭到阻断时，能够自动容灾切换。\n3. **晚高峰表现**：在晚上 8点-11点，视频缓冲速度不会出现断崖式下跌。\n\n### 防范不良商家\n判断稳定性的最好方法是实践。建议新用户先购买短期套餐，并在最拥堵的时间段进行测试。那些依靠极度夸张促销、且缺乏长期运营口碑的商家，跑路或线路劣化的风险较高。"
};

for (const [file, content] of Object.entries(rewrites)) {
  fs.writeFileSync(path.join(contentDir, file), content);
}
console.log('Rewrote remaining fallback files');
