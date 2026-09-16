import fs from 'fs';

// --- UPDATE QUESTIONS ---
const qsPath = 'src/data/questions.ts';
let qsContent = fs.readFileSync(qsPath, 'utf8');
let jsonStart = qsContent.indexOf('[');
let jsonEnd = qsContent.lastIndexOf(']');
let qList = JSON.parse(qsContent.substring(jsonStart, jsonEnd + 1));

const newQs = [
  {
    id: qList.length + 1,
    slug: 'is-tun-mode-global',
    question: 'TUN模式是全局模式吗？',
    category: '客户端',
    intent: 'INFORMATIONAL',
    priority: 'P1',
    shortAnswer: 'TUN 模式可以在网卡层级接管所有流量，因此常被称为全局代理，但具体仍受路由规则控制。',
    searchAliases: ['tun模式是全局模式吗', '什么是tun模式', '全局加速和tun加速', 'vpn规则模式和tun模式']
  },
  {
    id: qList.length + 2,
    slug: 'clash-verge-vs-clash-for-windows',
    question: 'Clash Verge和Clash for Windows有什么区别？',
    category: '客户端',
    intent: 'INFORMATIONAL',
    priority: 'P1',
    shortAnswer: 'Verge 采用了更现代的 Tauri 架构且支持 Meta(Mihomo) 内核，功能更强大，目前 CFW 已停止维护，推荐使用 Verge。',
    searchAliases: ['clash verge和clash for windows区别', 'clash verge vs clash for windows', 'windows clash verge 对比']
  },
  {
    id: qList.length + 3,
    slug: 'sing-box-vs-clash',
    question: 'Sing-box和Clash有什么区别？',
    category: '客户端',
    intent: 'INFORMATIONAL',
    priority: 'P1',
    shortAnswer: 'Sing-box 是一个更轻量、跨平台且支持更多新协议（如 VLESS Reality）的新一代核心，Clash 生态则更成熟且拥有丰富的图形界面。',
    searchAliases: ['sing box clash 对比', 'clash meta 和 sing-box', 'singbox内核和clash', 's-ui sing-box web panel vs v2raya 对比 客户端']
  },
  {
    id: qList.length + 4,
    slug: 'how-to-write-sing-box-config',
    question: 'Sing-box怎么编写配置？',
    category: '客户端',
    intent: 'HOW_TO',
    priority: 'P2',
    shortAnswer: 'Sing-box 采用纯 JSON 格式配置，重点在于配置入站(inbounds)、出站(outbounds)和路由规则(route)，建议利用图形化客户端自动生成。',
    searchAliases: ['sing-box 配置', 'sing-box用的config.json配置如何编写', '如何编写或修改 sing-box 路由规则 (routing)', 'sing-box自定义出站json', '修改 sing-box outbound 文件, 一步一步']
  },
  {
    id: qList.length + 5,
    slug: 'is-one-yuan-airport-good',
    question: '一元机场好用吗？',
    category: '选购指南',
    intent: 'INFORMATIONAL',
    priority: 'P2',
    shortAnswer: '极低价机场通常存在超售严重、晚高峰卡顿和高跑路风险，不适合作为主力，仅推荐作为临时备用。',
    searchAliases: ['一元机场好用吗', '两块钱机场推荐 clash', '白菜机场', '廉价机场官网节点']
  },
  {
    id: qList.length + 6,
    slug: 'philippines-airport-node',
    question: '菲律宾节点机场适合什么场景？',
    category: '线路与节点',
    intent: 'INFORMATIONAL',
    priority: 'P2',
    shortAnswer: '通常用于特定东南亚服游戏加速或注册限制区域的当地流媒体和业务账号，日常较少使用。',
    searchAliases: ['菲律宾节点机场']
  }
];

// Avoid duplicating if ran twice
newQs.forEach(nq => {
  if (!qList.find(q => q.slug === nq.slug)) {
    qList.push(nq);
  }
});

// Add aliases to existing questions
const timeoutQs = qList.find(q => q.slug === 'clash-all-nodes-timeout');
if (timeoutQs) {
  timeoutQs.searchAliases = [
    'clash timeout', 'clash节点timeout', 'clash全部timeout', 'clash所有节点全部超时', 'clash开启tun后全部timeout',
    '代理有流量但是连不上全部timeout', 'clash左下角总是显示未连接', 'clash全部节点time', 'clash全是timeout',
    'fclash的所有代理突然都timeout', 'clash输入链接时tcp连接超时', 'clash所有的节点都超时', 'calsh全部timeout',
    'clash verge节点全部超时间', '电脑clash verge用着用着突然全部timeout', 'clash连接显示检测超时或失败'
  ];
}

const configQs = qList.find(q => q.slug === 'how-to-import-subscription-to-clash');
if (configQs) {
  configQs.searchAliases = [
    'clash配置', 'clash教程', '重置clash配置', 'clash配置教程', 'clash如何配置', '电脑clash配置',
    'clash mac命令行', 'clash规则配置推荐', 'clash for windows配置教程手机', 'clash 如何配置',
    '通过clash内核导出订阅配置', 'clash使用指南', 'clash自用配置教程'
  ];
}

const resetConfigQs = qList.find(q => q.question === 'Clash左下角一直显示未连接怎么办？');
// (If we had more, we could add here. For now we added it to timeoutQs alias, which is fine based on intent)

fs.writeFileSync(qsPath, "export const questions = " + JSON.stringify(qList, null, 2) + ";\n");

// --- UPDATE AIRPORTS ---
const apPath = 'src/data/airports.ts';
let apContent = fs.readFileSync(apPath, 'utf8');
let apStart = apContent.indexOf('[');
let apEnd = apContent.lastIndexOf(']');
let aList = JSON.parse(apContent.substring(apStart, apEnd + 1));

const aliasMap = {
  'weifeng': ['微风网络', '微风机场', '微风加速器', '微风网络机场', '微风网络官网', '微风网络clash', '微风网络手机上网', '微风网络的机场好用吗', '微风测评', 'breeze加速器'],
  'wuyou': ['无忧链接'],
  'kuajieyun': ['跨界云', 'kuajie'],
  'shanyue': ['闪跃机场', '闪跃这个机场这么样'],
  'firefly': ['萤火虫网络', '萤火虫机场', 'firefly萤火虫机场', 'firefly机场', '萤火虫能不能用clash', '萤火虫加速', 'firefly 机场邀请码'],
  'muguang': ['暮光加速', '暮光加速器 二毛'],
  'lingmao': ['灵猫机场'],
  'bitznet': ['bitznet优惠券']
};

aList.forEach(a => {
  if (aliasMap[a.slug]) {
    a.searchAliases = aliasMap[a.slug];
  }
});

fs.writeFileSync(apPath, "export const airports = " + JSON.stringify(aList, null, 2) + ";\n");

console.log("Updated questions and airports with searchAliases.");
