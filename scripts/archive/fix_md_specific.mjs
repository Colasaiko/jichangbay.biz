import fs from 'fs';
import path from 'path';

const contentDir = 'src/data/questions_content';

const chatgptFile = path.join(contentDir, 'cannot-open-chatgpt-with-airport.md');
let chatgpt = fs.readFileSync(chatgptFile, 'utf8');

const newChatGpt = `## 为什么其他网站能打开但 ChatGPT 不行？
当你发现可以正常访问 Google 等常见网站，却无法打开 ChatGPT 时，这通常意味着网络连接本身是正常的，而是访问请求被目标服务器或中间环节拦截。

### 可能原因包括：
- 当前网络出口地区不在 OpenAI 官方支持列表
- VPN/代理本身触发访问限制
- 浏览器 Cookie 或缓存
- 临时安全限制
- DNS / 网络出口异常
- OpenAI 服务本身异常

## 建议排查顺序
1. **查看官方支持地区**：首先确认当前网络环境所在国家和地区是否在 OpenAI 官方支持的列表中。
2. **关闭代理测试**：如果正在使用 VPN/代理，请尝试关闭后测试，以排除代理软件本身造成的干扰。
3. **使用无痕窗口**：浏览器可能残留了之前的访问状态，开启无痕模式可以排除 Cookie 和缓存的影响。
4. **清除站点数据**：尝试清除 ChatGPT/OpenAI 站点的专属 Cookie。
5. **更换网络环境**：切换到正常且符合条件的其他网络环境进行测试。
6. **检查服务状态**：访问 OpenAI Status 页面确认是否为官方服务器宕机。
7. **寻求官方支持**：必要时联系 OpenAI Support 获取协助。`;

fs.writeFileSync(chatgptFile, newChatGpt);

const netflixFile = path.join(contentDir, 'netflix-proxy-detected.md');
let netflix = fs.readFileSync(netflixFile, 'utf8');

const newNetflix = `## 代理检测与限制机制
Netflix 会根据 IP 和版权区域等因素，限制部分代理或 VPN 的连接。当平台检测到异常网络请求时，会采取相应的限制措施。

### 常见的可能表现
- **代理/VPN 提示**：在播放视频时直接弹出提示，告知您正在使用代理服务，并要求关闭后重试。
- **内容无法播放**：能够正常浏览网页，但在点击播放时报错。
- **内容库变化**：部分原本可见的内容突然消失，只能看到平台自制内容。
- **差异化表现**：同一个网络服务，在不同时间、不同设备或不同入口下的表现可能存在差异。

### 应对建议
- 了解不同地区的 Netflix 内容库不同，选择哪个地区应取决于你想观看的内容。
- 确认当前网络环境是否符合平台的正常使用规范。
- 尝试切换网络连接方式或重启客户端。`;

fs.writeFileSync(netflixFile, newNetflix);

console.log("Fixed Markdown content");
