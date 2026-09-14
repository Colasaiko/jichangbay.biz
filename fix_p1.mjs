import fs from 'fs';

let tsContent = fs.readFileSync('src/data/questions.ts', 'utf8');
let jsonStart = tsContent.indexOf('[');
let jsonEnd = tsContent.lastIndexOf(']');
let jsonStr = tsContent.substring(jsonStart, jsonEnd + 1);
let qList = JSON.parse(jsonStr);

function getSemanticSlug(q) {
  let s = q.toLowerCase();
  
  // Specific mappings
  if (s.includes('安卓手机用什么机场客户端')) return 'android-airport-client';
  if (s.includes('windows电脑怎么用机场')) return 'windows-airport-guide';
  if (s.includes('mac苹果电脑怎么用机场')) return 'mac-airport-guide';
  if (s.includes('ios苹果手机没有小火箭怎么办')) return 'ios-no-shadowrocket-solution';
  if (s.includes('机场节点速度怎么看')) return 'how-to-check-node-speed';
  if (s.includes('机场节点越多越好吗')) return 'are-more-nodes-better';
  if (s.includes('机场节点地区怎么选')) return 'how-to-choose-node-region';
  if (s.includes('香港节点适合什么场景')) return 'hong-kong-node-use-cases';
  if (s.includes('日本节点适合什么场景')) return 'japan-node-use-cases';
  if (s.includes('台湾节点适合什么场景')) return 'taiwan-node-use-cases';
  if (s.includes('新加坡节点适合什么场景')) return 'singapore-node-use-cases';
  if (s.includes('美国节点适合什么场景')) return 'us-node-use-cases';
  if (s.includes('什么是原生ip')) return 'what-is-native-ip';
  if (s.includes('怎么测机场有没有解锁流媒体')) return 'how-to-test-streaming-unlock';
  if (s.includes('只看网页买什么套餐')) return 'plan-for-web-browsing';
  if (s.includes('打游戏买什么机场')) return 'airport-for-gaming';
  if (s.includes('tiktok免拔卡怎么用')) return 'how-to-use-tiktok-without-sim';

  // Generic keyword replacement fallback
  const dict = [
    ['安卓手机', 'android'], ['苹果手机', 'iphone'], ['安卓', 'android'], ['苹果', 'apple'], 
    ['手机', 'mobile'], ['电脑', 'pc'],
    ['路由器', 'router'], ['软路由', 'openwrt'], ['电视', 'tv'],
    ['测速', 'speedtest'], ['速度', 'speed'], ['延迟', 'latency'], ['丢包', 'packet-loss'],
    ['香港', 'hk'], ['日本', 'jp'], ['台湾', 'tw'], ['新加坡', 'sg'], ['美国', 'us'],
    ['韩国', 'kr'], ['英国', 'uk'], ['节点', 'node'], ['机场', 'airport'],
    ['流媒体', 'streaming'], ['游戏', 'gaming'], ['外贸', 'foreign-trade'],
    ['下载', 'download'], ['便宜', 'cheap'], ['贵', 'expensive'], ['性价比', 'cost-effective'],
    ['稳定', 'stable'], ['安全', 'security'], ['隐私', 'privacy'], ['跑路', 'run-away'],
    ['封号', 'banned'], ['被墙', 'blocked'], ['断流', 'disconnect'], ['超时', 'timeout'],
    ['打不开', 'cannot-open'], ['连不上', 'cannot-connect'], ['怎么办', 'solution'],
    ['怎么选', 'how-to-choose'], ['怎么看', 'how-to-check'], ['怎么用', 'how-to-use'],
    ['是什么', 'what-is'], ['区别', 'difference'], ['比较', 'vs'], ['推荐', 'recommend'],
    ['套餐', 'plan'], ['价格', 'price'], ['流量', 'traffic'], ['多少钱', 'how-much'],
    ['月付', 'monthly'], ['季付', 'quarterly'], ['年付', 'yearly'],
    ['专线', 'dedicated'], ['中转', 'transit'], ['直连', 'direct'],
    ['原生ip', 'native-ip'], ['解锁', 'unlock'], ['倍率', 'multiplier'],
    ['限制', 'limit'], ['设备', 'device'], ['数量', 'count'], ['哪些', 'which'],
    ['为什么', 'why'], ['合适', 'suitable'], ['场景', 'scenario'], ['失效', 'invalid']
  ];
  
  let res = s.replace(/[？\?吗呢的和里了有可以]/g, '');
  for (let [k, v] of dict) {
    res = res.replace(new RegExp(k, 'g'), '-' + v + '-');
  }
  
  // English words preservation
  res = res.replace(/clash/g, 'clash').replace(/shadowrocket/g, 'shadowrocket')
           .replace(/v2ray/g, 'v2ray').replace(/vpn/g, 'vpn').replace(/ai/g, 'ai')
           .replace(/chatgpt/g, 'chatgpt').replace(/netflix/g, 'netflix');
           
  res = res.replace(/[^a-z0-9\-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  
  return res || 'faq-' + Math.random().toString(36).substr(2, 6);
}

function getSpecificShortAnswer(q, category) {
  let s = q.toLowerCase();
  
  // Directly targeting user's prompt requests
  if (s.includes('安卓手机用什么')) return "Android 常见选择包括 v2rayNG、Hiddify、Mihomo 系客户端等，具体要看机场提供的订阅格式；购买机场前最好先确认它是否提供 Android 导入教程。";
  if (s.includes('windows电脑怎么用')) return "Windows 通常先安装 Clash Verge、v2rayN 或其他兼容客户端，再从机场后台复制订阅链接导入并开启系统代理。";
  if (s.includes('节点越多越好吗')) return "不一定。节点数量多不等于质量高，比数量更重要的是线路稳定性、地区覆盖、晚高峰表现以及备用入口。";
  if (s.includes('节点地区怎么选')) return "优先选择距离较近且满足目标服务地区要求的节点；日常浏览可以先测试香港、日本、新加坡等低延迟地区，但具体速度仍取决于本地运营商和线路质量。";

  // Heuristics for the rest
  if (s.includes('香港')) return "香港节点物理距离大陆最近，延迟最低，非常适合日常网页浏览和亚洲区游戏加速，但多数海外流媒体和 AI 服务（如 ChatGPT）不支持香港 IP。";
  if (s.includes('日本') || s.includes('新加坡')) return "日本和新加坡是目前亚太地区流媒体解锁和 AI 访问的最优选择，延迟适中且支持绝大部分国际服务。";
  if (s.includes('美国')) return "美国节点适合专门需要北美原生 IP 的业务，如访问美区 TikTok、美版 Hulu 或特定跨境电商平台，但物理延迟通常在 130ms 以上。";
  if (s.includes('游戏')) return "普通中转机场不适合 FPS 竞技游戏。打游戏请务必选择提供 IPLC / IEPL 专线的机场，或购买 UU、网易等专业游戏加速器。";
  if (s.includes('路由器') || s.includes('软路由')) return "将节点配置在软路由（如 OpenWRT 的 PassWall / OpenClash）可以实现全屋设备（包括电视、主机）无感翻墙，但对新手配置门槛较高。";
  if (s.includes('电视') || s.includes('tv')) return "Apple TV 可以安装 Surge 或 Shadowrocket；安卓电视推荐使用 Clash for Android 或 v2rayNG，也可直接通过旁路由接管。";
  if (s.includes('tiktok')) return "TikTok 封锁了大陆 SIM 卡。免拔卡观看通常需要搭配特定的重写规则模块（如 Shadowrocket 脚本），并连接原生 IP 节点。";
  if (s.includes('封号') || s.includes('跑路')) return "防范跑路和封号的最佳策略是：拒绝一次性购买长期（年付）套餐，保持一个月付主力节点加一个按量计费备用节点的组合。";
  if (s.includes('下载')) return "大多数机场禁止使用节点进行长期满带宽的 BT/PT 下载（会被封号）。普通的 HTTP 或网盘文件下载则受限于你的套餐总流量。";
  if (s.includes('倍率')) return "高倍率节点（如 5x、10x）通常是昂贵的专线或稀缺原生 IP。使用 1GB 实际数据会扣除你套餐里 5GB 或 10GB 额度，请按需使用。";
  if (s.includes('原生ip')) return "原生 IP（Native IP）指该 IP 注册地与机房物理所在地一致，且未被视频网站标记为商业机房。它能有效解锁 Netflix 甚至当地限制严格的银行 App。";
  if (s.includes('超时') || s.includes('打不开') || s.includes('连不上') || s.includes('失效')) return "此类网络故障请依次排查：套餐是否到期、流量是否耗尽、节点是否需要更新、本地 DNS 是否污染，以及是否开启了系统代理。";
  
  if (category === '客户端') return "各类客户端的底层原理大同小异，请务必根据机场官方提供的图文教程进行“一键导入”或“复制订阅”操作。";
  if (category === '流媒体') return "解锁流媒体的关键在于节点 IP 的纯净度。如果遇到提示“使用了代理”，请尝试切换其他标注了“解锁”字样的冷门节点。";
  if (category === '套餐与价格') return "价格并非唯一衡量标准。购买前请结合自己的实际流量消耗（视频重度还是文字轻度）以及是否需要高端专线来进行选择。";
  if (category === '线路与节点') return "线路质量决定了晚高峰（20:00-23:00）的可用性。有 BGP 中转或专线加持的节点，其稳定性远超普通的直连线路。";
  
  return "针对该问题，建议先从自身核心需求出发。如主要是看视频还是查资料。如果无法确定，可以先购买短期套餐（如月付）进行实际测试。";
}

// Track slugs to ensure uniqueness
let usedSlugs = new Set();
// Existing P0 slugs
qList.filter(q => q.priority === 'P0').forEach(q => usedSlugs.add(q.slug));

qList.forEach(q => {
  if (q.priority !== 'P0') {
    // Generate short answer
    q.shortAnswer = getSpecificShortAnswer(q.question, q.category);
    
    // Generate robust slug
    let newSlug = getSemanticSlug(q.question);
    
    // Uniquify
    let finalSlug = newSlug;
    let counter = 2;
    while (usedSlugs.has(finalSlug)) {
      finalSlug = newSlug + '-' + counter;
      counter++;
    }
    usedSlugs.add(finalSlug);
    q.slug = finalSlug;
  }
});

fs.writeFileSync('src/data/questions.ts', "export const questions = " + JSON.stringify(qList, null, 2) + ";\n");
console.log('Fixed P1 questions slugs and shortAnswers!');
