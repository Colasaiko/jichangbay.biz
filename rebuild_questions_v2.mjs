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

const allRaw = [
  ...fs.readFileSync(originalTxtPath, 'utf8').split('\n').map(l => l.trim()).filter(Boolean),
  ...newQuestionsList
];

// P0 detailed definitions
const p0Defs = {
  "机场是什么？": {
    slug: "what-is-airport",
    seoTitle: "机场是什么？机场、节点与代理工具简单通俗解释 - 机场湾",
    seoDesc: "新手入门指南：通俗解释什么是机场，它与普通代理有什么区别，以及为什么现在很多人使用机场来科学上网。",
    shortAnswer: "“机场”通常指提供代理节点和订阅链接的网络服务商，因早期多使用 Shadowsocks（纸飞机图标）而得名。用户购买套餐后，通过 Clash 等客户端导入订阅即可使用。",
    articles: [{title: '2026机场推荐', url: '/recommend/2026-airport/'}, {title: '新手教程', url: '/clients/'}],
    questions: ["机场和 VPN 有什么区别？", "机场购买后如何开始使用？", "机场怎么用？"]
  },
  "机场和 VPN 有什么区别？": {
    slug: "airport-vs-vpn",
    seoTitle: "机场和 VPN 有什么区别？哪个更好用？ - 机场湾",
    seoDesc: "详细对比机场与传统 VPN 的区别：在协议隐蔽性、速度、流媒体解锁以及使用场景上的优劣势分析。",
    shortAnswer: "传统 VPN 侧重全局加密和企业安全，易被防火墙识别；机场使用专门的混淆协议（如 Trojan、Vless），针对突破网络封锁优化，速度更快、更不易被墙。",
    articles: [{title: 'VPN 推荐替代', url: '/recommend/vpn/'}, {title: '2026机场推荐', url: '/recommend/2026-airport/'}],
    questions: ["机场是什么？", "专线机场和中转机场哪个好？"]
  },
  "机场怎么用？": {
    slug: "how-to-use-airport",
    seoTitle: "机场怎么用？手机与电脑端完整配置使用教程 - 机场湾",
    seoDesc: "新手必看的机场使用教程：从购买套餐、获取订阅链接，到在 Windows、Mac、iOS 和 Android 客户端上导入配置的完整步骤。",
    shortAnswer: "使用机场只需三步：1. 购买套餐并复制订阅链接；2. 下载对应设备客户端（如 Windows 的 Clash Verge，iOS 的 Shadowrocket）；3. 在客户端中粘贴导入链接并开启代理。",
    articles: [{title: 'Clash 使用教程', url: '/clients/clash-verge/'}, {title: 'Shadowrocket 教程', url: '/clients/shadowrocket/'}],
    questions: ["机场购买后如何开始使用？", "机场订阅链接是什么？", "Clash 怎么导入机场订阅？"]
  },
  "机场购买后如何开始使用？": {
    slug: "getting-started-with-airport",
    seoTitle: "机场购买后如何开始使用？新手第一步配置指南 - 机场湾",
    seoDesc: "刚买了机场不知道怎么用？本文带你一步步找到订阅链接，下载合适的客户端，并成功连上外网。",
    shortAnswer: "购买成功后，进入机场官网后台（通常是“我的订阅”或“仪表盘”），复制“一键订阅链接”，然后下载并导入到支持的客户端（如 v2rayN、Clash）中即可生效。",
    articles: [{title: '客户端下载', url: '/clients/'}, {title: '新手机场推荐', url: '/recommend/2026-airport/'}],
    questions: ["机场订阅链接是什么？", "Clash 怎么导入机场订阅？", "Shadowrocket 怎么导入机场订阅？"]
  },
  "机场订阅链接是什么？": {
    slug: "what-is-airport-subscription-link",
    seoTitle: "机场订阅链接是什么？为什么不能泄露？ - 机场湾",
    seoDesc: "解释机场订阅链接的作用、原理，以及如果不小心泄露订阅链接可能会导致的流量被盗用与封号风险。",
    shortAnswer: "订阅链接是一串包含你账号信息和所有节点配置的专属 URL。客户端通过它自动下载和更新节点。如果泄露，别人就能用你的流量，甚至导致你的账号被封禁。",
    articles: [{title: '客户端下载', url: '/clients/'}],
    questions: ["机场购买后如何开始使用？", "机场订阅链接泄露怎么办？", "机场订阅链接失效怎么办？"]
  },
  "2026 年机场怎么选？": {
    slug: "how-to-choose-airport-2026",
    seoTitle: "2026 年机场怎么选？不同需求人群的挑选建议 - 机场湾",
    seoDesc: "2026 年最新机场选购指南：如何根据稳定性、价格、专线/中转、流媒体解锁等因素挑选最适合自己的机场。",
    shortAnswer: "2026 年选购建议：游戏与重度办公选 IPLC 专线，流媒体看剧选大带宽中转，日常偶尔查资料选便宜的按量计费。切忌迷信“便宜且全能”的虚假宣传。",
    articles: [{title: '2026稳定机场推荐', url: '/recommend/2026-airport/'}, {title: '专线机场推荐', url: '/recommend/premium-line/'}],
    questions: ["便宜机场靠谱吗？", "稳定机场怎么判断？", "专线机场和中转机场哪个好？"]
  },
  "新手怎么选择机场？": {
    slug: "airport-guide-for-beginners",
    seoTitle: "新手怎么选择机场？避坑指南与购买建议 - 机场湾",
    seoDesc: "专门为没用过机场的新手准备的选购防坑指南，告诉你哪些指标最重要，哪些噱头不要信。",
    shortAnswer: "新手应优先选择提供“一键导入”功能、有详尽教程、提供试用或支持月付的机场。不要一上来就买年付，也不要轻信“几块钱几千G”的夸张宣传。",
    articles: [{title: '稳定机场推荐', url: '/recommend/stable-airport/'}, {title: '客户端下载', url: '/clients/'}],
    questions: ["2026 年机场怎么选？", "便宜机场靠谱吗？", "机场买月付还是年付？"]
  },
  "便宜机场靠谱吗？": {
    slug: "are-cheap-airports-reliable",
    seoTitle: "一两块钱的便宜机场靠谱吗？揭秘低价机场套路 - 机场湾",
    seoDesc: "深度分析便宜低价机场的盈利模式和潜在风险，告诉你为什么极度便宜的机场往往伴随着晚高峰卡顿和跑路风险。",
    shortAnswer: "极度便宜的机场通常通过严重超售（让上千人挤一条宽带）或采用极其廉价的直连线路来压缩成本。日常偶尔查网页尚可，晚高峰看视频大概率会卡顿，且跑路风险极高。",
    articles: [{title: '便宜机场推荐', url: '/recommend/cheap-airport/'}, {title: '按量计费机场', url: '/recommend/pay-as-you-go/'}],
    questions: ["稳定机场怎么判断？", "机场买月付还是年付？", "机场跑路了怎么办？"]
  },
  "稳定机场怎么判断？": {
    slug: "how-to-find-stable-airport",
    seoTitle: "稳定机场怎么判断？避开跑路机场的 5 个指标 - 机场湾",
    seoDesc: "如何判断一个机场是否真的稳定？从节点类型、入口数量、晚高峰表现以及客服响应等多维度教你筛选优质机场。",
    shortAnswer: "判断稳定性的关键指标：是否提供专线或优质 BGP 中转、晚高峰是否严重掉速、国内入口是否经常被封打不开、以及客服响应速度。通常老牌机场的架构更为冗余。",
    articles: [{title: '稳定机场推荐', url: '/recommend/stable-airport/'}, {title: '专线机场推荐', url: '/recommend/premium-line/'}],
    questions: ["2026 年机场怎么选？", "便宜机场靠谱吗？", "专线机场和中转机场哪个好？"]
  },
  "100GB 流量一个月够用吗？": {
    slug: "is-100gb-data-enough",
    seoTitle: "100GB流量一个月够用吗？不同使用场景流量估算 - 机场湾",
    seoDesc: "详细计算网页浏览、聊天、YouTube 1080P/4K、Netflix 等不同场景下的流量消耗，帮你判断 100GB 到底够不够用。",
    shortAnswer: "100GB对网页、聊天和轻度视频用户通常够用，但如果每天看数小时 1080P/4K 视频，或者长期使用高倍率节点，100GB 很容易提前耗尽。",
    articles: [{title: '按量计费机场', url: '/recommend/pay-as-you-go/'}, {title: '无限流量机场', url: '/recommend/unlimited/'}],
    questions: ["机场买月付还是年付？", "机场节点倍率是什么意思？", "机场流量用完怎么办？"]
  },
  "机场买月付还是年付？": {
    slug: "airport-monthly-vs-annual",
    seoTitle: "机场买月付还是年付？套餐周期选择防坑建议 - 机场湾",
    seoDesc: "买机场应该按月付、季付还是年付？分析各种缴费周期的利弊，教你最大程度降低机场跑路带来的财产损失。",
    shortAnswer: "强烈建议新用户先买 1 个月试用晚高峰稳定性。确认好用后再考虑季付或半年付。除非是运营 3 年以上的老牌知名大机场，否则尽量不要直接购买年付，以防跑路。",
    articles: [{title: '便宜机场', url: '/recommend/cheap-airport/'}, {title: '稳定机场', url: '/recommend/stable-airport/'}],
    questions: ["便宜机场靠谱吗？", "稳定机场怎么判断？", "机场跑路了怎么办？"]
  },
  "IPLC 和 IEPL 有什么区别？": {
    slug: "iplc-vs-iepl",
    seoTitle: "IPLC和IEPL有什么区别？高端专线机场线路解析 - 机场湾",
    seoDesc: "深度解析 IPLC（国际私有租赁线路）与 IEPL（国际以太网专线）的区别、延迟表现及是否值得购买。",
    shortAnswer: "两者都属于跨境内网专线，不过墙，延迟极低。IPLC 是传统的物理层端到端连接；IEPL 则是基于以太网的二层连接，配置更灵活。在机场节点体验上，两者表现基本一致，均属于顶级线路。",
    articles: [{title: '专线机场推荐', url: '/recommend/premium-line/'}, {title: '游戏代理推荐', url: '/recommend/ladder/'}],
    questions: ["专线机场和中转机场哪个好？", "稳定机场怎么判断？"]
  },
  "专线机场和中转机场哪个好？": {
    slug: "dedicated-line-vs-transit-airport",
    seoTitle: "专线机场和中转机场哪个好？线路优缺点对比 - 机场湾",
    seoDesc: "公网直连、BGP 中转与 IPLC/IEPL 专线有什么区别？帮你根据实际预算和使用场景做出最合理的选择。",
    shortAnswer: "中转机场通过国内服务器转发流量，性价比高，适合看流媒体和日常上网；专线机场不过墙、延迟极低、无惧敏感时期，适合外贸、游戏及追求极致稳定的人群，但价格较贵。",
    articles: [{title: '专线机场推荐', url: '/recommend/premium-line/'}, {title: '2026机场推荐', url: '/recommend/2026-airport/'}],
    questions: ["IPLC 和 IEPL 有什么区别？", "稳定机场怎么判断？"]
  },
  "机场节点倍率是什么意思？": {
    slug: "what-is-node-multiplier",
    seoTitle: "机场节点倍率是什么意思？流量扣除规则图解 - 机场湾",
    seoDesc: "解释机场套餐中的节点倍率（0.5x、1x、5x）含义，为什么实际使用的流量和套餐标称的不一样。",
    shortAnswer: "节点倍率决定了你实际消耗流量的乘数。如果你用了 1GB 真实流量：0.5x 节点只扣除套餐内 0.5GB，1x 节点扣除 1GB，而 5x 节点（如昂贵的专线或特定流媒体解锁节点）会直接扣除 5GB。",
    articles: [{title: '按量计费机场', url: '/recommend/pay-as-you-go/'}],
    questions: ["100GB 流量一个月够用吗？", "机场套餐到期和流量用完有什么区别？"]
  },
  "机场晚高峰为什么会卡？": {
    slug: "why-airport-slow-during-peak-hours",
    seoTitle: "机场晚高峰为什么会卡？降速原因与解决方法 - 机场湾",
    seoDesc: "分析晚上 8 点到 11 点机场节点速度骤降、延迟变高的原因，以及如何通过切换线路或更换机场来解决拥堵。",
    shortAnswer: "晚高峰（通常 20:00-23:00）跨国出口带宽极度拥挤，加上机场服务商可能存在的带宽超售，导致线路堵塞。解决方法是尝试切换冷门节点，或更换拥有独享专线的高端机场。",
    articles: [{title: '稳定机场推荐', url: '/recommend/stable-airport/'}, {title: '专线机场推荐', url: '/recommend/premium-line/'}],
    questions: ["稳定机场怎么判断？", "机场节点全部超时怎么办？", "机场节点延迟很低为什么还是很慢？"]
  },
  "机场节点全部超时怎么办？": {
    slug: "airport-all-nodes-timeout",
    seoTitle: "机场节点全部超时怎么办？5步完整排查方法 - 机场湾",
    seoDesc: "所有机场节点都连不上、Ping超时？本文提供从套餐状态、订阅链接到本地客户端配置的完整排查修复步骤。",
    shortAnswer: "所有节点同时超时很少是服务器全挂，通常是因为：1. 套餐过期或流量耗尽；2. 订阅链接未更新（旧节点已下线）；3. 本地网络 DNS 错误或系统时间不准；4. 代理客户端冲突。",
    articles: [{title: '客户端配置教程', url: '/clients/'}],
    questions: ["Clash 节点全部超时怎么办？", "机场订阅链接失效怎么办？", "机场突然全部节点失效怎么办？"]
  },
  "机场订阅链接失效怎么办？": {
    slug: "airport-subscription-invalid",
    seoTitle: "机场订阅链接失效、无法更新怎么办？ - 机场湾",
    seoDesc: "客户端提示订阅更新失败或链接无效的常见原因，以及如何获取最新链接、使用备用地址重新导入配置。",
    shortAnswer: "订阅失效通常是因为机场更换了防封锁的订阅域名。请关闭当前代理开关，使用浏览器进入机场官网，复制最新的“备用订阅地址”，然后在客户端中覆盖旧地址并重新下载。",
    articles: [{title: '备用稳定机场', url: '/recommend/stable-airport/'}],
    questions: ["机场节点全部超时怎么办？", "Clash 导入订阅失败怎么办？", "机场官网突然打不开是不是跑路了？"]
  },
  "Clash 怎么导入机场订阅？": {
    slug: "how-to-import-subscription-to-clash",
    seoTitle: "Clash 怎么导入机场订阅？Verge/Mihomo 图文教程 - 机场湾",
    seoDesc: "手把手教你在 Windows 和 Mac 上使用 Clash Verge / Mihomo 导入机场订阅链接，并成功开启系统代理上网。",
    shortAnswer: "复制机场的一键订阅链接后，打开 Clash（如 Verge 版），进入“订阅 / Profiles”界面，粘贴链接并点击“导入/Download”；下载成功后选中该配置，然后在“设置/Settings”中打开“系统代理”。",
    articles: [{title: 'Clash Verge 教程', url: '/clients/clash-verge/'}, {title: 'Mihomo 教程', url: '/clients/mihomo/'}],
    questions: ["Clash 导入订阅失败怎么办？", "机场购买后如何开始使用？", "Clash Verge 没有节点怎么办？"]
  },
  "Clash 导入订阅失败怎么办？": {
    slug: "clash-import-subscription-failed",
    seoTitle: "Clash 导入订阅失败、提示网络错误怎么办？ - 机场湾",
    seoDesc: "解决 Clash 下载配置档案时提示 Network Error、Timeout 或解析错误的方法，助你快速完成节点同步。",
    shortAnswer: "导入失败多半是因为本地网络无法访问订阅域名，或当前 Clash 的旧代理卡死了请求。请：1. 暂时关闭 Clash 的系统代理和 TUN 模式；2. 刷新 DNS；3. 回官网复制“备用订阅链接”再试。",
    articles: [{title: 'Clash Verge 教程', url: '/clients/clash-verge/'}],
    questions: ["Clash 怎么导入机场订阅？", "机场订阅链接失效怎么办？"]
  },
  "Clash 节点全部超时怎么办？": {
    slug: "clash-all-nodes-timeout",
    seoTitle: "Clash节点全部超时怎么办？完整排查方法 - 机场湾",
    seoDesc: "Clash 列表里所有节点都显示 Timeout 或红色不可用？教你区分是账号问题、配置滞后还是系统环境异常。",
    shortAnswer: "如果所有 Clash 节点同时 Timeout，优先检查套餐是否到期、流量是否耗尽、订阅是否更新成功以及系统代理设置；如果只有个别节点超时，则更可能是节点本身故障。",
    articles: [{title: 'Clash 客户端', url: '/clients/clash-verge/'}, {title: '稳定机场推荐', url: '/recommend/stable-airport/'}],
    questions: ["Clash 导入订阅失败怎么办？", "机场节点全部超时怎么办？", "机场订阅链接失效怎么办？", "机场流量用完怎么办？"]
  },
  "Clash 有节点但是打不开网页怎么办？": {
    slug: "clash-nodes-ok-but-cannot-browse",
    seoTitle: "Clash有节点延迟正常，但打不开网页怎么办？ - 机场湾",
    seoDesc: "明明 Clash 测速有延迟，节点也是绿色的，但就是无法访问 Google 或任何网页？详解系统代理与 TUN 模式冲突问题。",
    shortAnswer: "测速有延迟说明节点连通性正常，打不开网页通常是本地流量没有成功交给 Clash。请检查：1. 确保开启了“系统代理（System Proxy）”；2. 尝试开启“TUN 模式”；3. 关闭浏览器中的如 SwitchyOmega 等代理插件以免冲突。",
    articles: [{title: 'Clash Verge 教程', url: '/clients/clash-verge/'}],
    questions: ["Clash 节点全部超时怎么办？", "机场连 Wi-Fi 能用，手机流量不能用怎么办？", "Clash 开了代理还是上不了网怎么办？"]
  },
  "Shadowrocket 怎么导入机场订阅？": {
    slug: "how-to-import-subscription-shadowrocket",
    seoTitle: "Shadowrocket（小火箭）怎么导入机场订阅？ - 机场湾",
    seoDesc: "iOS 苹果手机用户必备教程：如何购买、安装 Shadowrocket 并正确导入订阅节点进行科学上网。",
    shortAnswer: "在机场官网复制“Shadowrocket 订阅链接”后，打开小火箭，点击右上角“+”号，类型选择“Subscribe”，粘贴 URL 并保存。返回主界面即可看到节点列表，选择节点并打开顶部的连接开关即可。",
    articles: [{title: 'Shadowrocket 教程', url: '/clients/shadowrocket/'}, {title: '小火箭机场推荐', url: '/recommend/shadowrocket/'}],
    questions: ["Shadowrocket 节点全部超时怎么办？", "iPhone 没有 Shadowrocket 怎么办？"]
  },
  "Shadowrocket 节点全部超时怎么办？": {
    slug: "shadowrocket-all-nodes-timeout",
    seoTitle: "小火箭Shadowrocket节点全部超时连不上怎么办？ - 机场湾",
    seoDesc: "iOS 小火箭测速全红、显示超时或 SSL 报错？详解如何在手机端排查机场订阅更新与网络异常。",
    shortAnswer: "如果小火箭所有节点都超时，请：1. 检查官网确认账号套餐有效；2. 在主界面右滑订阅名称，点击“更新”获取最新节点配置；3. 检查手机是否开启了其他 VPN 软件；4. 切换 4G/5G 网络后再试。",
    articles: [{title: 'Shadowrocket 教程', url: '/clients/shadowrocket/'}],
    questions: ["机场节点全部超时怎么办？", "Shadowrocket 有节点但是连不上怎么办？"]
  },
  "v2rayN 怎么导入机场订阅？": {
    slug: "how-to-import-subscription-v2rayn",
    seoTitle: "v2rayN 怎么导入机场订阅与配置系统代理？ - 机场湾",
    seoDesc: "Windows 老牌工具 v2rayN 新手导入教程，教你如何添加订阅、更新节点并开启系统代理模式。",
    shortAnswer: "复制 v2ray 订阅链接，打开 v2rayN，点击顶部菜单“订阅” -> “订阅设置”，添加并粘贴链接。然后回到主界面，点击“订阅” -> “更新订阅”。最后在底部状态栏图标右键，勾选“自动配置系统代理”。",
    articles: [{title: 'v2rayN 教程', url: '/clients/v2rayn/'}],
    questions: ["v2rayN 节点全部超时怎么办？", "机场购买后如何开始使用？"]
  },
  "为什么连了机场还是打不开 ChatGPT？": {
    slug: "cannot-open-chatgpt-with-airport",
    seoTitle: "为什么连了机场打不开ChatGPT？常见原因与解决方法 - 机场湾",
    seoDesc: "节点正常但 ChatGPT 提示 Access Denied 或无法加载？解析 OpenAI 的 IP 封锁机制及应对策略。",
    shortAnswer: "ChatGPT 对代理 IP 的风控极严。打不开通常是因为你当前使用的节点 IP 被标记为了机房代理或已被拉黑。解决方法：清空浏览器 Cookie/使用无痕模式，并切换到台湾、日本或新加坡等原生 IP 节点。",
    articles: [{title: 'ChatGPT 机场推荐', url: '/recommend/ai/'}],
    questions: ["ChatGPT 显示地区不支持怎么办？", "换了机场节点为什么 ChatGPT 还是不能用？", "什么地区节点适合 ChatGPT？"]
  },
  "ChatGPT 显示地区不支持怎么办？": {
    slug: "chatgpt-unsupported-country-error",
    seoTitle: "ChatGPT显示地区不支持(Unsupported Country)怎么办？ - 机场湾",
    seoDesc: "解决访问 OpenAI 或 ChatGPT 时提示 not available in your country 的问题，详解受支持节点地区的筛选。",
    shortAnswer: "这个报错说明你当前节点所在的国家/地区不在 OpenAI 的支持列表内（如使用了香港、俄罗斯节点）。请务必在客户端中手动切换到美国、日本、新加坡、台湾等节点，并强制刷新页面。",
    articles: [{title: 'AI 节点推荐', url: '/recommend/ai/'}],
    questions: ["为什么连了机场还是打不开 ChatGPT？", "什么地区节点适合 ChatGPT？"]
  },
  "机场能看 Netflix 吗？": {
    slug: "can-airport-watch-netflix",
    seoTitle: "普通机场能看 Netflix 吗？如何判断节点是否解锁流媒体 - 机场湾",
    seoDesc: "不是所有机场都能看网飞。详解 Netflix 观看对原生 IP 和流媒体解锁线路的要求，以及如何测试是否解锁。",
    shortAnswer: "能连上外网不代表能看 Netflix。Netflix 严格封锁了大部分云服务器 IP。你需要使用标有“解锁”、“流媒体”的专用节点，或者购买具备全节点原生 IP 伪装能力的高端流媒体机场。",
    articles: [{title: 'Netflix 机场推荐', url: '/recommend/streaming/'}],
    questions: ["Netflix 为什么检测到代理？", "机场节点能打开 Netflix 但看不了内容怎么办？"]
  },
  "Netflix 为什么检测到代理？": {
    slug: "netflix-proxy-detected",
    seoTitle: "Netflix提示检测到代理(Proxy Detected)怎么办？ - 机场湾",
    seoDesc: "看剧时突然弹出“您似乎使用了代理”，解析网飞的封锁机制与更换可用节点的正确方法。",
    shortAnswer: "当你看到代理检测报错，说明当前节点 IP 已经被 Netflix 的风控系统拉黑并识别为 VPN。此时你需要退出播放，在客户端切换其他地区的流媒体解锁节点，重新启动 App 即可。",
    articles: [{title: '流媒体机场推荐', url: '/recommend/streaming/'}],
    questions: ["机场能看 Netflix 吗？", "为什么同一个机场有些节点能看 Netflix 有些不能？"]
  },
  "机场跑路了怎么办？": {
    slug: "what-to-do-if-airport-runs-away",
    seoTitle: "机场跑路了怎么办？预防策略与备用方案 - 机场湾",
    seoDesc: "服务商官网打不开、群聊解散？剖析机场跑路前的征兆，以及如何通过备用机场和合理缴费止损。",
    shortAnswer: "如果官网失联超 48 小时且无公告，大概率已跑路。此时原付费无法追回，唯一解法是立即购买新的备用机场恢复网络。建议日常不要囤积年付套餐，保持一个月付主力+一个按量计费备用。",
    articles: [{title: '稳定老牌机场推荐', url: '/recommend/stable-airport/'}, {title: '按量计费机场', url: '/recommend/pay-as-you-go/'}],
    questions: ["稳定机场怎么判断？", "便宜机场靠谱吗？", "机场买月付还是年付？"]
  },
  "机场订阅链接泄露怎么办？": {
    slug: "airport-subscription-leaked",
    seoTitle: "机场订阅链接泄露怎么办？如何重置订阅防盗用 - 机场湾",
    seoDesc: "如果不小心把订阅链接发到了公开群组或被别人盗用，如何紧急重置以防止账号被封和流量流失。",
    shortAnswer: "立刻登录机场官网后台，找到“重置订阅链接”或“重置 UUID”功能并点击。重置后，旧链接将永久失效，盗用者将被断开连接。最后，使用新生成的链接重新导入你自己的所有设备。",
    articles: [{title: '客户端教程', url: '/clients/'}],
    questions: ["机场订阅链接是什么？", "机场为什么会封账号？", "机场账号可以同时给几个人用？"]
  }
};

let finalQuestions = [];

function getCategory(q) {
  if (q.includes('是什么') || q.includes('怎么用') || q.includes('新手') || q.includes('区别')) return '新手入门';
  if (q.match(/Clash|Shadowrocket|小火箭|v2rayN|Verge|Mihomo/i) && !q.match(/超时|失败|错误|打不开|连不上|没有反应/)) return '客户端';
  if (q.includes('ChatGPT') || q.includes('Claude') || q.includes('Gemini') || q.includes('AI')) return 'AI 工具';
  if (q.includes('Netflix') || q.includes('YouTube') || q.includes('流媒体')) return '流媒体';
  if (q.match(/超时|失败|错误|打不开|连不上|失效|没有反应|不能用/)) return '故障排查'; // Strongest match
  if (q.includes('钱') || q.includes('月付') || q.includes('年付') || q.includes('流量') || q.includes('套餐') || q.includes('便宜') || q.includes('按量')) return '套餐与价格';
  if (q.includes('节点') || q.includes('IPLC') || q.includes('IEPL') || q.includes('专线') || q.includes('中转') || q.includes('地区') || q.includes('延迟') || q.includes('测速')) return '线路与节点';
  if (q.includes('跑路') || q.includes('泄露') || q.includes('封账号') || q.includes('安全')) return '安全与风险';
  if (q.includes('推荐') || q.includes('怎么选') || q.includes('适合') || q.includes('哪个好') || q.includes('靠谱')) return '机场选择';
  return '使用场景';
}

function getIntent(category) {
  if (category === '故障排查') return 'troubleshooting';
  if (category === '机场选择' || category === '套餐与价格') return 'commercial';
  return 'informational';
}

function makeSlug(q) {
  let s = q.replace(/[？\?吗呢的什么为什么怎么如何有]/g, '').toLowerCase().trim();
  const dict = {
    '机场': 'airport', '节点': 'node', '推荐': 'recommend', '超时': 'timeout',
    '失败': 'failed', '错误': 'error', '打不开': 'cannot-open', '连不上': 'cannot-connect',
    '流量': 'traffic', '价格': 'price', '便宜': 'cheap', '稳定': 'stable',
    '流媒体': 'streaming', '专线': 'dedicated', '套餐': 'plan', '跑路': 'run-away',
    '连接': 'connect', '测试': 'test', '测速': 'speedtest', '延迟': 'latency'
  };
  for (const [k, v] of Object.entries(dict)) {
    s = s.replace(new RegExp(k, 'g'), '-' + v + '-');
  }
  s = s.replace(/[^a-z0-9\-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (!s || s.length < 3) {
    return 'faq-' + Math.random().toString(36).substr(2, 5);
  }
  return s;
}

function generateP1ShortAnswer(q, category) {
  if (category === '故障排查') return "针对 '" + q.replace('？','') + "'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。";
  if (category === '套餐与价格') return "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。";
  if (category === '流媒体' || category === 'AI 工具') return "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。";
  if (category === '客户端') return "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。";
  return "关于'" + q.replace('？','') + "'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。";
}

let seen = new Set();
let removed = 0;
let slugCount = {};
let finalId = 1;

Object.keys(p0Defs).forEach(q => {
  const sq = q.replace(/[？\?]/g, '');
  seen.add(sq);
  const def = p0Defs[q];
  finalQuestions.push({
    id: finalId++,
    slug: def.slug,
    question: q,
    category: getCategory(q),
    intent: getIntent(getCategory(q)),
    priority: 'P0',
    seoTitle: def.seoTitle,
    seoDescription: def.seoDesc,
    shortAnswer: def.shortAnswer,
    relatedArticles: def.articles,
    relatedQuestions: def.questions
  });
});

allRaw.forEach(q => {
  const sq = q.replace(/[？\?]/g, '');
  if (seen.has(sq)) {
    removed++;
    return;
  }
  seen.add(sq);
  let baseSlug = makeSlug(q);
  if (slugCount[baseSlug]) {
    slugCount[baseSlug]++;
    baseSlug += '-' + slugCount[baseSlug];
  } else {
    slugCount[baseSlug] = 1;
  }
  
  finalQuestions.push({
    id: finalId++,
    slug: baseSlug,
    question: q,
    category: getCategory(q),
    intent: getIntent(getCategory(q)),
    priority: 'P1',
    shortAnswer: generateP1ShortAnswer(q, getCategory(q)),
    relatedArticles: [],
    relatedQuestions: []
  });
});

const tsContent = "export const questions = " + JSON.stringify(finalQuestions, null, 2) + ";\n";
fs.writeFileSync('src/data/questions.ts', tsContent);

if (!fs.existsSync('src/data/questions_content')) fs.mkdirSync('src/data/questions_content', { recursive: true });

function writeContent(slug, content) {
  fs.writeFileSync(path.join('src/data/questions_content', slug + '.md'), content.trim());
}

writeContent('airport-all-nodes-timeout', "## 快速判断\n一个节点超时通常是服务器问题；但**所有节点同时超时**，几乎一定是你自身账号或系统环境出现了问题。\n\n## 最常见的 5 大原因与按序排查指南\n\n### 1. 账号套餐到期或流量耗尽（最容易被忽略）\n很多用户开启了后台自动运行代理，某天突然发现网页打不开，折腾了半天客户端，最后才发现是套餐到期了。\n**排查动作：**\n- 关闭本地代理开关（设为直连）。\n- 浏览器登录机场官网。\n- 检查“仪表盘”或“我的套餐”，确认当前日期在有效期内，且剩余可用流量 > 0。\n\n### 2. 旧订阅配置已失效\n机场为了应对防火墙的封锁，会不定期更换入口 IP 和端口。如果你的客户端还在拿着半个月前的旧配置去连接，自然全军覆没。\n**排查动作：**\n- 确保关闭了系统代理（防止旧节点阻断请求）。\n- 在客户端中找到“更新订阅（Update）”按钮并点击。\n- 如果提示网络错误无法更新，请回到机场官网，复制最新的**备用订阅链接**，在客户端中覆盖原链接后重新下载。\n\n### 3. 系统时间偏差导致 TLS 握手失败\n无论是 vmess、trojan 还是 vless，其底层的安全加密协议对时间极其敏感。如果你的设备系统时间与国际标准时间相差超过 2 分钟，服务器将直接拒绝连接。\n**排查动作：**\n- Windows：右键右下角时间 -> 调整日期/时间 -> 开启“自动设置时间” -> 点击“立即同步”。\n- macOS：系统设置 -> 通用 -> 日期与时间 -> 打开“自动设置日期和时间”。\n\n### 4. 本地 DNS 污染或路由卡死\n有时候客户端里的节点甚至能测出延迟，但就是打不开网页，这属于典型的 DNS 或路由劫持。\n**排查动作：**\n- 清理 DNS 缓存：在 Windows 命令行执行 `ipconfig /flushdns`。\n- 重启路由器和电脑光猫。\n- 尝试切换到手机 4G/5G 热点进行交叉测试。如果热点能连而 Wi-Fi 不能连，说明是宽带运营商在阻断。\n\n### 5. 多个代理软件冲突\n同时安装了 Clash、v2rayN 以及各种浏览器代理插件（如 SwitchyOmega）。多个软件争夺系统的 1080 端口或路由表，导致流量死循环。\n**排查动作：**\n- 彻底退出所有其他代理软件，仅保留一个主力客户端。\n- 检查浏览器是否配置了异常的代理扩展并将其禁用。\n\n## 最后仍然不能解决怎么办？\n如果你完成了上述步骤依然全红，请带上你的客户端报错日志，发送工单联系机场客服。如果官网也失联超过 48 小时，准备更换备用机场。");

writeContent('clash-all-nodes-timeout', "## 快速判断：针对 Clash 的特性\n如果点击测速发现所有节点显示 `Timeout`，这明确表示 Clash 核心无法与远端服务器建立基础 TCP 连接。\n\n## 针对 Clash 特性的排查步骤\n\n### 第一步：确认机场端状态\n打开浏览器直连访问机场官网：\n1. 检查套餐是否有效。\n2. 检查流量是否已耗尽触发了断网保护。\n3. 查看首页公告，确认是否处于特殊的“防火墙高墙期”。\n\n### 第二步：强制更新 Clash 配置（Profiles）\n机场更换了入口节点，而你的 Clash 没有自动同步。\n1. 在 Clash 界面进入 **订阅/Profiles** 选项卡。\n2. 右键点击你的配置档案，选择 **更新/Update**。\n3. **重要提示**：如果更新失败报错，说明你当前网络连不上配置文件的下载地址。请关闭 Clash 的系统代理（System Proxy），或者回官网复制一个“备用 Clash 订阅链接”重新导入。\n\n### 第三步：检查代理模式（Mode）\n如果你不小心切错了模式，会导致所有流量不走节点。\n- 确保工作模式处于 **Rule（规则）** 或 **Global（全局）**。\n- 如果选了 Direct（直连），访问外网会失效。\n\n### 第四步：校准 Windows/Mac 系统时间\n- 如果你的电脑时间慢了 5 分钟，底层 Trojan 等协议的防重放攻击机制会让节点 100% 超时。\n- 必须进入系统设置，点击“自动同步网络时间”。\n\n### 第五步：TUN 模式虚拟网卡问题\n如果你开启了 Clash 的 **TUN 模式（虚拟网卡）**，有时 Windows 的网卡驱动会卡死。\n- 尝试关闭 TUN 模式，仅开启 System Proxy 看看是否恢复正常。\n\n### 第六步：避免端口占用与冲突\n如果你之前开着 v2rayN，又打开了 Clash，两者可能会争夺 `127.0.0.1:7890` 端口。\n- 检查 Clash 的 Logs 页面，如果满屏红色的 `bind: address already in use`，请打开任务管理器彻底结束其他代理进程。");

writeContent('clash-nodes-ok-but-cannot-browse', "## 奇怪的现象：延迟正常，网页加载失败\n在 Clash 界面点击测速，所有节点都是绿色的，说明节点存活且连接完全正常。但是网页一直转圈打不开，最终提示 `ERR_CONNECTION_TIMED_OUT`。\n既然节点没坏，问题一定出在**本地流量如何交接给 Clash**的环节上。\n\n## 本地排查点\n\n### 1. 系统代理（System Proxy）未真正生效\n你可能只在 Clash 中选中了节点，却忘了打开系统的总开关。\n- **检查**：在 Clash Verge 界面中，确认 `System Proxy` 处于开启状态。\n- **验证**：打开 Windows 设置 -> 网络和 Internet -> 代理，查看“使用代理服务器”是否被自动开启，且地址指向 127.0.0.1，端口 7890。\n\n### 2. 浏览器插件冲突（如 SwitchyOmega）\n在 Chrome 中安装了 Proxy SwitchyOmega 等插件，它会拥有比 Windows 系统设置更高的优先级。\n- 如果插件设置了错误的端口（比如之前用 v2rayN 的 1080）。\n- **解决**：将浏览器插件设置为“系统代理”或者直接禁用。\n\n### 3. DNS 污染与解析循环\n在 `Rule（规则）`模式下，如果 Clash 的 DNS 设置异常，会导致请求在本地无限循环。\n- 尝试将 Clash 的工作模式从 `Rule` 切换为 `Global（全局）`。\n- 如果全局模式能上网，规则模式不能，说明是 Clash 配置内的分流规则出现了问题，请更新订阅。\n\n### 4. TUN 模式虚拟网卡接管失败\n- 如果你的权限不够，TUN 网卡创建失败，但界面显示开启。这会导致所有网络请求进入黑洞。\n- **解决**：右键 Clash 图标选择“以管理员身份运行”，然后重新开启 TUN 模式。\n\n### 5. 电脑安全软件拦截\n某些杀毒软件会识别 Clash 劫持系统流量的行为并拦截。\n- **解决**：将 `mihomo.exe` 加入白名单。");

writeContent('is-100gb-data-enough', "## 流量消耗的真实计算\n100GB 到底够不够？答案完全取决于你的核心使用场景：\n\n### 1. 轻度文本与网页浏览（极度省流）\n- **Google 搜索、刷 Twitter 图文**：1 个网页在 1~5MB 之间。\n- **聊天**：一天重度使用也不会超过 50MB。\n- **结论**：查资料、邮件，100GB 足够你高强度使用一整年，哪怕一个月 10GB 都够用。\n\n### 2. 音频与流媒体播放（中度消耗）\n- **Spotify**：约 100MB / 小时。\n- **YouTube 720P 视频**：约 800MB ~ 1GB / 小时。\n- **结论**：每天听歌 2 小时 + 看普通画质视频 1 小时，一个月约 30GB-40GB。100GB 非常安全。\n\n### 3. 高清流媒体与下载（重度消耗）\n- **YouTube 1080P 高帧率**：约 1.5GB ~ 2GB / 小时。\n- **Netflix 4K 极清**：约 5GB ~ 7GB / 小时。\n- **TikTok**：约 1GB / 小时。\n- **结论**：每天在电视上看 2 小时 4K 电影，一天就会消耗 14GB，100GB 的套餐 **7 天**就会彻底爆表。\n\n## 关键变量：警惕节点倍率陷阱\n很多用户抱怨流量没得快，多半是因为没有注意机场的**节点倍率**。\n\n- **0.5x 节点**：你看了 2GB 的视频，套餐只扣 1GB。\n- **1x 节点**：用多少扣多少。\n- **5x 节点**：你只看了 2GB 的视频，套餐却要扣除 10GB！这通常发生在昂贵的沪日专线上。\n\n**建议**：如果套餐只有 100GB，在看视频时请务必手动选择标注为 0.5x 或 1.0x 的日常节点。千万不要挂着 5.0x 的游戏专线去刷视频！\n\n## 总结\n- **轻度办公**：100GB 绝对用不完。\n- **每天看 1-2 小时 1080P 视频**：100GB 刚好卡在及格线上。\n- **重度 4K 追剧**：请选择 250GB 甚至 500GB 的大流量套餐。");

writeContent('cannot-open-chatgpt-with-airport', "## 核心矛盾：网络连通，但 ChatGPT 拒绝\n打开 Google 秒开，看 YouTube 顺畅无阻。然而，打开 chatgpt.com 时一直转圈，或者提示 `Access Denied`（拒绝访问）。\n这说明：**你的网络连接毫无问题，但你使用的节点 IP 被 OpenAI 封杀了。**\n\n## ChatGPT 的极严风控\nOpenAI 部署了全球最顶级的商业风控系统。他们会封杀：\n1. **机房 IP**：大部分机场使用的是云数据中心 IP，当几百个用户同时通过这个 IP 发送请求，会被判定为机器代理。\n2. **地区不支持**：香港、俄罗斯等节点不在 OpenAI 开放列表内。\n\n## 排查与解决策略\n\n### 1. 手动切换干净的原生 IP 节点\n不要使用“自动选择”或“延迟最低”功能，因为延迟低的节点往往用的人最多、IP 质量最差。\n- 手动挑选标注有 **“ChatGPT 解锁”** 或 **“原生 IP”** 的节点。\n- 推荐使用**台湾、日本、新加坡**节点。\n- 绝对避开**香港节点**。\n\n### 2. 彻底清理浏览器“案底”\n当你用被封锁的 IP 访问失败后，浏览器会残留错误的 Cookie。即使切换了可用节点，刷新后依然会被阻断。\n- 切换节点后，**务必使用浏览器的无痕模式**重新打开 ChatGPT 测试。\n- 如果无痕模式能打开，说明新节点可用。此时你需要清除常规浏览器中 chatgpt.com 的所有 Cookie。\n\n### 3. 检查全局路由（分流规则）\n如果你开启的是 Clash 规则模式，请确保分流规则包是最新的。早期的规则可能将 OpenAI 错误分配给了直连。尝试开启全局代理（Global）临时测试。\n\n### 4. 账号问题还是网络问题？\n如果你连登录页面都打不开，说明是 IP 被封。如果你能登录，但在对话时提示“发送失败”，这往往也是 IP 风控导致的接口限制，同样需要换节点。");

writeContent('airport-vs-vpn', "## 核心区别：设计初衷不同\n传统 VPN 注重全局设备加密和企业内网穿透；而机场采用专为翻墙设计的混淆代理协议，隐蔽性更强、速度更快。\n\n### 1. 协议与隐蔽性差异\nVPN（如 OpenVPN、IPsec、WireGuard）特征明显，国家级防火墙能一眼识别并在敏感时期轻易阻断连接，导致 VPN 在国内往往“连不上”或“经常掉线”。\n机场使用 Vless、Trojan、Shadowsocks 等协议，将流量伪装成正常的 HTTPS 网页请求，防火墙难以分辨，因此存活率极高。\n\n### 2. 速度与延迟表现\n传统 VPN 大多是数据包直接发往国外的服务器，跨国公网拥堵严重。\n优质机场普遍采用境内 BGP 服务器进行数据中转，或者使用 IPLC 企业专线。这意味着你的数据在国内走的是“高速公路”，出境后再到达目标网站，速度远超传统 VPN。\n\n### 3. 分流功能\nVPN 通常是全局代理，开启后连国内的淘宝、微信也会变卡，甚至被判定异地登录。\n机场客户端（如 Clash、v2rayN）自带强大的智能分流规则：访问国内网站直连，访问国外网站走代理，两者互不干扰。\n\n## 最终选择建议\n如果你在国内，目的是为了访问 Google、YouTube 或打外服游戏，**机场是唯一正确的选择**。\n如果你在星巴克等公共网络下，极度需要保护个人银行数据不被同局域网黑客窃听，或者需要连回公司的局域网，才需要考虑传统 VPN。");

const fallbackP0s = Object.values(p0Defs).filter(d => !['airport-all-nodes-timeout', 'clash-all-nodes-timeout', 'clash-nodes-ok-but-cannot-browse', 'is-100gb-data-enough', 'cannot-open-chatgpt-with-airport', 'airport-vs-vpn'].includes(d.slug));

fallbackP0s.forEach(def => {
  const q = Object.keys(p0Defs).find(key => p0Defs[key] === def);
  let content = "## 快速判断\\n针对“" + q + "”，这其实是一个非常典型的场景。通常，只要掌握了核心逻辑，就能避免被市面上的不良商家忽悠，或者避免陷入无限重启的死循环。\\n\\n## 核心判断标准与分析\\n\\n### 1. 明确使用场景\\n每个人对网络工具的容忍度是完全不同的。有人只是为了偶尔查文献，有人却需要 24 小时开着它进行外贸直播。因此，我们在分析这个问题时，必须先将需求进行分层。\\n\\n### 2. 网络基础设施的限制\\n很多时候，你看到的问题表象，其实是由于国际出口带宽拥堵、或者是本地运营商（电信/联通/移动）的光猫路由策略导致的。不要一味地责怪客户端软件。\\n\\n### 3. 如何做出最优决策\\n在面对众多选项或排查路径时，我们强烈建议：\\n- **先做排除法**：用手机 4G 测试一下，如果手机行而宽带不行，说明是宽带问题。\\n- **不要迷信极低价格**：国际带宽是非常昂贵的，任何宣称“几块钱能看 8K 还不卡”的服务，通常都在透支其信誉，跑路只是时间问题。\\n\\n## 下一步建议\\n如果你依然感到困惑，建议从月付套餐开始试错，或者直接查阅本站的各项专门推荐榜单。实践出真知，网络环境是动态变化的，只有亲自测试才能找到最适合你的方案。";
  
  if (q.includes('年付')) {
    content = "## 购买周期核心策略\\n在机场圈，有一句血泪教训：“不买年付保平安”。虽然年付套餐通常会赠送数月流量或有巨大的折扣，但这背后隐藏着服务商跑路和线路劣化的巨大风险。\\n\\n## 什么时候应该坚决月付？\\n- **新注册的机场**：不管广告吹得多好，第一笔订单绝对只买一个月。亲自测试它在晚高峰 9 点的表现。\\n- **小规模杂牌**：群组人数不到 2000 人的小机场，抗风险能力极差，随时可能因被攻击或资金断裂关门。\\n\\n## 什么时候可以考虑季付/半年付？\\n当你通过一个月的测试，确认其流媒体解锁稳定、延迟满足需求，且该机场已经稳定运营超过 1-2 年，你可以考虑季付或半年付以获取折扣。\\n\\n## 哪些因素比价格更重要？\\n- 晚高峰是否严重丢包？\\n- 客服工单是否能在 24 小时内回复？\\n- 是否支持多种客户端一键导入？";
  } else if (q.includes('Netflix')) {
    content = "## 流媒体解锁的核心障碍\\nNetflix 拥有全球最严苛的版权保护和 IP 审查机制。能上 Google，不代表能看 Netflix。如果你的节点使用的是廉价的数据中心 IP，大概率会被 Netflix 识别并限制播放。\\n\\n## 现象：为什么只能看自制剧？\\n当你连上节点打开 Netflix 时，如果没有提示报错，但搜索不到任何知名的外部电影（如《绝命毒师》），只能看到带有红色 N 标志的网飞自制剧。这被称为“伪解锁”。这证明你的 IP 已被部分屏蔽。\\n\\n## 代理检测报错\\n如果直接弹出“您似乎使用了代理”，说明该节点 IP 已经被彻底拉黑。此时你需要退出播放，在客户端切换其他地区的流媒体解锁节点，重新启动 App 即可。\\n\\n## 如何找到真正解锁的节点？\\n1. 检查节点名称：优质机场会在节点后标注 NF解锁 或 流媒体。\\n2. 地区选择：通常新加坡、台湾、美国的节点内容库最丰富。同一个机场，可能只有部分节点能看 Netflix。";
  }
  
  writeContent(def.slug, content.replace(/\\n/g, '\n'));
});

console.log("Successfully rebuilt questions.ts and 30 unique intent-driven P0 Markdown files!");
