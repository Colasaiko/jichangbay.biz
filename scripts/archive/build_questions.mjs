import fs from 'fs';
import path from 'path';

const originalTxtPath = 'C:/Users/USER/Desktop/BLOG/机场长尾问题库.txt';
const newQuestionsList = [
  "为什么 Clash 节点全部超时？",
  "Clash 有节点但是打不开网页怎么办？",
  "Clash 订阅更新失败怎么办？",
  "Clash 更新订阅提示错误怎么办？",
  "Clash 开了代理还是上不了网怎么办？",
  "Clash Verge 没有节点怎么办？",
  "Clash Verge 导入订阅没有反应怎么办？",
  "Clash Verge 和 Mihomo 有什么区别？",
  "Shadowrocket 节点全部超时怎么办？",
  "Shadowrocket 有节点但是连不上怎么办？",
  "Shadowrocket 更新订阅失败怎么办？",
  "Shadowrocket 显示 URL 无效怎么办？",
  "小火箭为什么显示连接成功但打不开网页？",
  "iPhone 没有 Shadowrocket 怎么办？",
  "v2rayN 节点全部超时怎么办？",
  "v2rayN 更新订阅失败怎么办？",
  "v2rayN 有节点但是打不开网页怎么办？",
  "机场连 Wi-Fi 能用，手机流量不能用怎么办？",
  "机场手机流量能用，Wi-Fi 不能用怎么办？",
  "机场 DNS 错误怎么办？",
  "机场节点延迟很低为什么还是很慢？",
  "机场测速很快为什么实际使用很卡？",
  "机场连接成功为什么打不开 Google？",
  "机场连接成功为什么打不开 YouTube？",
  "机场突然全部节点失效怎么办？",
  "为什么连了机场还是打不开 ChatGPT？",
  "ChatGPT 显示地区不支持怎么办？",
  "ChatGPT 为什么提示 unsupported country？",
  "换了机场节点为什么 ChatGPT 还是不能用？",
  "什么地区节点适合 ChatGPT？",
  "ChatGPT 经常掉登录和机场有关系吗？",
  "Claude 为什么连机场还是不能用？",
  "Gemini 为什么更换节点后还是打不开？",
  "Netflix 为什么检测到代理？",
  "Netflix 显示代理错误怎么办？",
  "机场节点能打开 Netflix 但看不了内容怎么办？",
  "为什么同一个机场有些节点能看 Netflix 有些不能？",
  "看 Netflix 4K 一个月需要多少流量？",
  "看 YouTube 1080P 一小时多少流量？",
  "看 YouTube 4K 一小时多少流量？",
  "机场续费后为什么流量没有重置？",
  "机场买了套餐为什么订阅还是过期？",
  "机场套餐到期和流量用完有什么区别？",
  "机场订阅链接泄露会有什么后果？",
  "机场账号可以同时给几个人用？",
  "机场为什么会封账号？",
  "机场客服不回复怎么办？",
  "机场官网突然打不开是不是跑路了？"
];

const originalQuestions = fs.readFileSync(originalTxtPath, 'utf8')
  .split('\n').map(l => l.trim()).filter(Boolean);

const allRaw = [...originalQuestions, ...newQuestionsList];

const p0List = [
  "机场是什么？",
  "机场和 VPN 有什么区别？",
  "机场怎么用？",
  "机场购买后如何开始使用？",
  "机场订阅链接是什么？",
  "2026 年机场怎么选？",
  "新手怎么选择机场？",
  "便宜机场靠谱吗？",
  "稳定机场怎么判断？",
  "100GB 流量一个月够用吗？",
  "机场买月付还是年付？",
  "IPLC 和 IEPL 有什么区别？",
  "专线机场和中转机场哪个好？",
  "机场节点倍率是什么意思？",
  "机场晚高峰为什么会卡？",
  "机场节点全部超时怎么办？",
  "机场订阅链接失效怎么办？",
  "Clash 怎么导入机场订阅？",
  "Clash 导入订阅失败怎么办？",
  "Clash 节点全部超时怎么办？",
  "Clash 有节点但是打不开网页怎么办？",
  "Shadowrocket 怎么导入机场订阅？",
  "Shadowrocket 节点全部超时怎么办？",
  "v2rayN 怎么导入机场订阅？",
  "为什么连了机场还是打不开 ChatGPT？",
  "ChatGPT 显示地区不支持怎么办？",
  "机场能看 Netflix 吗？",
  "Netflix 为什么检测到代理？",
  "机场跑路了怎么办？",
  "机场订阅链接泄露怎么办？"
];

const slugs = {
  "机场是什么？": "what-is-airport",
  "机场和 VPN 有什么区别？": "airport-vs-vpn",
  "机场怎么用？": "how-to-use-airport",
  "机场购买后如何开始使用？": "getting-started-with-airport",
  "机场订阅链接是什么？": "what-is-airport-subscription-link",
  "2026 年机场怎么选？": "how-to-choose-airport-2026",
  "新手怎么选择机场？": "airport-guide-for-beginners",
  "便宜机场靠谱吗？": "are-cheap-airports-reliable",
  "稳定机场怎么判断？": "how-to-find-stable-airport",
  "100GB 流量一个月够用吗？": "is-100gb-data-enough",
  "机场买月付还是年付？": "airport-monthly-vs-annual",
  "IPLC 和 IEPL 有什么区别？": "iplc-vs-iepl",
  "专线机场和中转机场哪个好？": "dedicated-line-vs-transit-airport",
  "机场节点倍率是什么意思？": "what-is-node-multiplier",
  "机场晚高峰为什么会卡？": "why-airport-slow-during-peak-hours",
  "机场节点全部超时怎么办？": "airport-all-nodes-timeout",
  "机场订阅链接失效怎么办？": "airport-subscription-invalid",
  "Clash 怎么导入机场订阅？": "how-to-import-subscription-to-clash",
  "Clash 导入订阅失败怎么办？": "clash-import-subscription-failed",
  "Clash 节点全部超时怎么办？": "clash-all-nodes-timeout",
  "Clash 有节点但是打不开网页怎么办？": "clash-nodes-ok-but-cannot-browse",
  "Shadowrocket 怎么导入机场订阅？": "how-to-import-subscription-shadowrocket",
  "Shadowrocket 节点全部超时怎么办？": "shadowrocket-all-nodes-timeout",
  "v2rayN 怎么导入机场订阅？": "how-to-import-subscription-v2rayn",
  "为什么连了机场还是打不开 ChatGPT？": "cannot-open-chatgpt-with-airport",
  "ChatGPT 显示地区不支持怎么办？": "chatgpt-unsupported-country-error",
  "机场能看 Netflix 吗？": "can-airport-watch-netflix",
  "Netflix 为什么检测到代理？": "netflix-proxy-detected",
  "机场跑路了怎么办？": "what-to-do-if-airport-runs-away",
  "机场订阅链接泄露怎么办？": "airport-subscription-leaked"
};

let finalQuestions = [];
let seen = new Set();
let removedCount = 0;

function simplify(q) {
  return q.replace(/[？\?吗呢的]/g, '').trim();
}

function getCategory(q) {
  if (q.includes('是什么') || q.includes('怎么用') || q.includes('新手')) return '新手入门';
  if (q.includes('Clash') || q.includes('Shadowrocket') || q.includes('小火箭') || q.includes('v2rayN') || q.includes('Mihomo') || q.includes('Stash')) return '客户端';
  if (q.includes('ChatGPT') || q.includes('Claude') || q.includes('Gemini') || q.includes('AI')) return 'AI 工具';
  if (q.includes('Netflix') || q.includes('YouTube') || q.includes('流媒体')) return '流媒体';
  if (q.includes('超时') || q.includes('打不开') || q.includes('连不上') || q.includes('失败') || q.includes('错误') || q.includes('卡')) return '故障排查';
  if (q.includes('钱') || q.includes('月付') || q.includes('年付') || q.includes('流量') || q.includes('套餐') || q.includes('便宜') || q.includes('按量')) return '套餐与价格';
  if (q.includes('节点') || q.includes('IPLC') || q.includes('IEPL') || q.includes('专线') || q.includes('中转') || q.includes('地区') || q.includes('延迟') || q.includes('测速')) return '线路与节点';
  if (q.includes('跑路') || q.includes('泄露') || q.includes('封账号') || q.includes('安全')) return '安全与风险';
  if (q.includes('推荐') || q.includes('怎么选') || q.includes('适合') || q.includes('哪个好')) return '机场选择';
  return '使用场景';
}

function getIntent(category) {
  if (category === '故障排查') return 'troubleshooting';
  if (category === '机场选择' || category === '套餐与价格') return 'commercial';
  return 'informational';
}

function makeSlug(q, i) {
  if (slugs[q]) return slugs[q];
  return 'faq-item-' + i;
}

let idCounter = 1;
p0List.forEach(q => {
  const sq = simplify(q);
  seen.add(sq);
  finalQuestions.push({
    id: idCounter++,
    slug: slugs[q],
    question: q,
    category: getCategory(q),
    intent: getIntent(getCategory(q)),
    priority: 'P0',
    shortAnswer: "针对“" + q + "”的问题，这通常涉及到" + getCategory(q) + "的核心知识。请点击查看完整答案与排查指南。",
    relatedArticles: [],
    relatedQuestions: []
  });
});

allRaw.forEach((q, i) => {
  const sq = simplify(q);
  if (q === '机场买月付还是年付？' || q === '月付、季付、年付哪个好？' || q === '机场买季付划算吗？') {
    if (seen.has('机场买月付还是年付')) {
      removedCount++;
      return;
    }
  }
  
  if (!seen.has(sq)) {
    seen.add(sq);
    finalQuestions.push({
      id: idCounter++,
      slug: makeSlug(q, idCounter),
      question: q,
      category: getCategory(q),
      intent: getIntent(getCategory(q)),
      priority: 'P1',
      shortAnswer: "关于" + q.replace('？','') + "，最主要的原因和解决方法通常与配置或网络环境有关，建议逐步排查。",
      relatedArticles: [],
      relatedQuestions: []
    });
  } else {
    removedCount++;
  }
});

console.log("Original:", originalQuestions.length);
console.log("New:", newQuestionsList.length);
console.log("Removed Duplicates:", removedCount);
console.log("Final Unique:", finalQuestions.length);

const p0Count = finalQuestions.filter(q => q.priority === 'P0').length;
const p1Count = finalQuestions.filter(q => q.priority === 'P1').length;
const p2Count = finalQuestions.filter(q => q.priority === 'P2').length;
const catCount = new Set(finalQuestions.map(q => q.category)).size;

console.log("P0:", p0Count, "P1:", p1Count, "P2:", p2Count);
console.log("Categories:", catCount);
console.log("Generated URLs:", finalQuestions.length);

const tsContent = "export const questions = " + JSON.stringify(finalQuestions, null, 2) + ";\n";
fs.writeFileSync('src/data/questions.ts', tsContent);

if (!fs.existsSync('src/data/questions_content')) {
  fs.mkdirSync('src/data/questions_content', { recursive: true });
}

const generateTroubleshootTemplate = (q) => "## 1. 问题现象\n很多用户在使用机场节点时会遇到“" + q.question + "”的情况。这种现象通常表现为：\n- 客户端虽然显示已连接，但实际网页一直处于加载状态（Loading）。\n- 测试延迟（Ping）全部报错或显示 Timeout。\n- 部分国内外网站均无法访问，甚至连原本直连的网络也受到影响。\n- 软件日志中出现大量的 Connection Refused 或 DNS 解析失败报错。\n\n这不仅影响了正常的工作和娱乐体验，还会让人怀疑是不是机场跑路了。但实际上，绝大多数情况仅仅是本地配置或偶尔的网络阻断引起的。\n\n## 2. 最常见原因分析\n导致“" + q.question + "”的核心原因通常可以分为以下几类：\n\n### 2.1 机场套餐状态异常\n这是最容易被忽视的一点。很多时候并非技术故障，而是账号本身的状态发生了变化：\n- **套餐过期**：虽然客户端里还有节点，但后台套餐已经到期，服务器主动拒绝了连接。\n- **流量耗尽**：本月流量超标，节点端口被限制。\n- **并发超限**：多台设备同时登录，触发了机场的防滥用（审计）机制。\n\n### 2.2 订阅信息未同步\n机场服务端会不定期调整节点 IP、端口或加密协议以应对防火墙审查。如果你的本地客户端还在使用旧的订阅缓存：\n- 节点看似存在，但实际对应的服务器已经下线或更换。\n- 此时必定出现全面超时现象。\n\n### 2.3 本地网络与客户端代理冲突\n- **DNS 污染**：本地系统 DNS 被劫持，无法正确解析代理服务器入口。\n- **系统代理冲突**：同时开启了多个代理软件，或某些浏览器插件（如 SwitchyOmega）接管了流量，导致闭环死循环。\n- **时间不准**：设备的系统时间与标准网络时间相差过大（超过 2 分钟），导致底层 v2ray/Trojan 协议的 TLS 握手直接被拒绝。\n\n## 3. 按顺序排查指南\n为了高效解决“" + q.question + "”问题，请严格按照以下步骤操作：\n\n### 步骤一：登录官网确认账号状态\n不要急着折腾客户端，首先使用浏览器登录你所购买的机场官网。\n1. 检查套餐是否处于**有效期**内。\n2. 检查剩余**流量**是否大于 0。\n3. 查看首页是否有最新的**官方维护公告**（例如遇到特殊时期被墙，或正在迁移服务器）。\n*如果官网打不开，尝试切换手机 4G/5G 网络访问。如果依然无法打开且长达 24 小时没有任何通知，才需要考虑跑路风险。*\n\n### 步骤二：强制更新订阅\n在确认账号无误后，回到你的客户端：\n- **Clash 系列**：找到对应的配置档案（Profile），点击更新（Update）。如果提示下载失败，请回到机场官网复制最新的订阅链接，重新导入。\n- **Shadowrocket**：在主界面向右滑动订阅组名称，点击更新。\n- **v2rayN**：选择订阅菜单 -> 更新订阅。\n**关键点**：更新订阅前，请务必关闭当前的代理开关（设为直连或断开连接），否则客户端可能会通过已经失效的节点去下载新配置，从而导致“永远更新失败”。\n\n### 步骤三：检查系统基础设置\n如果更新订阅成功，但节点依然超时：\n- 校准系统时间：在 Windows 或 macOS 的时间设置中，点击“立即同步时间”。\n- 清理 DNS 缓存：Windows 用户可以在 CMD 中执行 `ipconfig /flushdns`。\n- 重置网络适配器：部分情况下，Windows 的 TUN 网卡会卡死，重启电脑往往能解决 50% 的疑难杂症。\n\n## 4. 什么情况下是机场问题？\n- 官网发布了明确的被墙或维护公告。\n- 群里大量用户反馈同样的问题。\n- 只有某个特定地区的节点（如香港）超时，其他地区（如日本）正常（说明是部分线路被封锁或遭受 DDoS 攻击）。\n\n## 5. 什么情况下是本地问题？\n- 换了别的机场甚至免费节点，依然全部超时。\n- 手机连同一个 Wi-Fi 可以用，但电脑不能用（典型的电脑端系统代理卡死）。\n- 使用 4G/5G 正常，一连家里的宽带就超时（可能是运营商进行了严格的 SNI 阻断，或光猫自带的防火墙拦截了特定协议）。\n\n## 6. 仍然不行怎么办？\n如果你尝试了以上所有步骤依然无法解决：\n1. **寻求客服帮助**：带上你的客户端报错日志截图、账号邮箱，发送工单或联系电报群客服。千万不要只发一句“为什么连不上”，附带详细截图能让客服在 1 分钟内指出你的问题所在。\n2. **切换备用机场**：鸡蛋不要放在同一个篮子里。如果你对网络的稳定性要求极高（如外贸、运营），建议保留一个按量计费的备用机场。你可以在我们的 [2026 稳定机场推荐](/recommend/stable-airport/) 榜单中挑选一个评价较高的作为 Backup。\n\n> **总结**：面对“" + q.question + "”，保持冷静，从账号源头 -> 订阅更新 -> 客户端设置 -> 本地网络的顺序逐一排查，99% 的问题都能在 5 分钟内迎刃而解。\n";

const generateInfoTemplate = (q) => "## 1. 一句话核心解释\n针对大家最关心的“" + q.question + "”，一句话结论是：**这取决于你的核心使用场景和对稳定性的容忍度，但掌握基础概念能帮你避开市面上 80% 的坑。**\n\n对于刚接触网络加速工具的用户来说，面对各种专业术语往往感到一头雾水。了解其背后的运作机制，是选对产品、少花冤枉钱的第一步。\n\n## 2. 详细概念解析\n为了深入解答“" + q.question + "”，我们需要先拆解几个核心概念：\n\n### 2.1 运作原理\n不管是何种形式的科学上网或代理服务，本质上都是在你的设备和目标网站之间搭建了一座“桥梁”。当你发起访问请求时：\n1. 数据先在本地被加密软件（如 Clash、Shadowrocket）接管。\n2. 加密后的数据通过运营商网络，发送到服务商部署在海外的服务器（节点）。\n3. 海外服务器解密数据，代替你向目标网站（如 Google、Netflix）请求内容。\n4. 目标网站将数据返回给海外服务器，服务器再加密传回你的设备。\n\n这个过程中，**线路的质量**、**加密协议的隐蔽性**以及**服务器的算力**直接决定了最终的速度和稳定性。\n\n### 2.2 常见分类与对比\n在探讨“" + q.question + "”时，必然会涉及不同类型方案的对比：\n- **直连节点**：你的数据直接发往国外的 VPS。成本极低，但遇到防火墙严格审查时，很容易被阻断（即“墙”IP 或端口）。\n- **中转节点**：数据先发送到服务商在国内部署的 BGP 伪装服务器，再由国内服务器通过专门的隧道传输到国外。这种方式大幅降低了被封锁的概率，延迟也更低。\n- **专线（IPLC/IEPL）**：完全不过传统的防火墙，相当于拉了一根私有的网线。这是目前延迟最低、最稳定的方案，当然价格也最贵。\n\n## 3. 具体场景与应用举例\n\n理论太过枯燥，我们来看看在实际生活中，“" + q.question + "”会对你产生什么影响：\n\n- **场景 A：流媒体重度用户**\n如果你每天下班后要在 Apple TV 上看 4K 级别的 Netflix 或 Disney+。你不需要极致的低延迟，你需要的是**大带宽**和**原生原生 IP 解锁**。在这种情况下，购买昂贵的企业级专线反而是性能过剩且不划算的，大流量的中转节点才是性价比之选。\n\n- **场景 B：跨境电商与 AI 工作者**\n如果你需要运营 TikTok 账号，或者重度依赖 ChatGPT、Claude 等 AI 工具进行内容生成。这些平台对 IP 的风控极其严格。如果节点 IP 经常变动或被标记为滥用，你的账号随时面临被封禁的风险。此时，稳定性与 IP 纯净度远比单纯的下载速度重要。\n\n- **场景 C：游戏玩家**\n玩外服游戏（如 APEX、Valorant）对延迟（Ping）和丢包率的要求达到了苛刻的地步。此时，只有真正的 IPLC 专线能够满足需求。\n\n## 4. 常见误区排雷\n在摸索“" + q.question + "”的过程中，新手最容易踩中以下几个陷阱：\n\n1. **“便宜又稳定又快”**：在网络资源世界里，这是绝对的伪命题。国际带宽成本高昂，那些宣称几块钱一个月还能看 8K 视频不卡顿的服务，要么超售严重导致晚高峰彻底瘫痪，要么面临极高的随时跑路风险。\n2. **迷信某种特定协议**：很多老玩家依然执着于某种特定的加密协议。实际上，再先进的协议也比不上一条优质的物理线路。\n3. **把客户端当成全部**：很多人把 Clash 或小火箭直接当成梯子，以为下载了软件就能上网。软件只是汽车，你还需要购买“汽油”（节点订阅）才能上路。\n\n## 5. 相关知识拓展\n如果你已经完全理解了“" + q.question + "”，我们强烈建议你继续阅读以下进阶内容，以构建完整的知识体系：\n- 如果你正准备购买，可以参考我们的 [2026 机场推荐榜单](/recommend/2026-airport/)，里面详细对比了各家机场的线路和价格。\n- 如果你在使用过程中遇到任何网络问题，请查阅我们的 [常见故障排查大全](/questions/)，掌握自救技能。\n- 想要在各种设备上无缝切换？请前往 [客户端下载与配置指南](/clients/) 学习如何调教各个平台的优秀代理软件。\n\n> 掌握了这些知识，你就能根据自己的真实需求，花最少的钱，获得最舒适的网络体验。\n";

p0List.forEach(q => {
  const qObj = finalQuestions.find(fq => fq.question === q);
  if (!qObj) return;
  const isTrouble = qObj.intent === 'troubleshooting';
  const mdContent = isTrouble ? generateTroubleshootTemplate(qObj) : generateInfoTemplate(qObj);
  
  fs.writeFileSync('src/data/questions_content/' + qObj.slug + '.md', mdContent);
});
console.log("Generated P0 markdown files in src/data/questions_content/");
