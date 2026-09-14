export const questions = [
  {
    "id": 1,
    "slug": "what-is-airport",
    "question": "机场是什么？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场是什么？机场、节点与代理工具简单通俗解释 - 机场湾",
    "seoDescription": "新手入门指南：通俗解释什么是机场，它与普通代理有什么区别，以及为什么现在很多人使用机场来科学上网。",
    "shortAnswer": "“机场”通常指提供代理节点和订阅链接的网络服务商，因早期多使用 Shadowsocks（纸飞机图标）而得名。用户购买套餐后，通过 Clash 等客户端导入订阅即可使用。",
    "relatedArticles": [
      {
        "title": "2026机场推荐",
        "url": "/recommend/2026-airport/"
      },
      {
        "title": "新手教程",
        "url": "/clients/"
      }
    ],
    "relatedQuestions": [
      "机场和 VPN 有什么区别？",
      "机场购买后如何开始使用？",
      "机场怎么用？"
    ]
  },
  {
    "id": 2,
    "slug": "airport-vs-vpn",
    "question": "机场和 VPN 有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场和 VPN 有什么区别？哪个更好用？ - 机场湾",
    "seoDescription": "详细对比机场与传统 VPN 的区别：在协议隐蔽性、速度、流媒体解锁以及使用场景上的优劣势分析。",
    "shortAnswer": "传统 VPN 侧重全局加密和企业安全，易被防火墙识别；机场使用专门的混淆协议（如 Trojan、Vless），针对突破网络封锁优化，速度更快、更不易被墙。",
    "relatedArticles": [
      {
        "title": "VPN 推荐替代",
        "url": "/recommend/vpn/"
      },
      {
        "title": "2026机场推荐",
        "url": "/recommend/2026-airport/"
      }
    ],
    "relatedQuestions": [
      "机场是什么？",
      "专线机场和中转机场哪个好？"
    ]
  },
  {
    "id": 3,
    "slug": "how-to-use-airport",
    "question": "机场怎么用？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场怎么用？手机与电脑端完整配置使用教程 - 机场湾",
    "seoDescription": "新手必看的机场使用教程：从购买套餐、获取订阅链接，到在 Windows、Mac、iOS 和 Android 客户端上导入配置的完整步骤。",
    "shortAnswer": "使用机场只需三步：1. 购买套餐并复制订阅链接；2. 下载对应设备客户端（如 Windows 的 Clash Verge，iOS 的 Shadowrocket）；3. 在客户端中粘贴导入链接并开启代理。",
    "relatedArticles": [
      {
        "title": "Clash 使用教程",
        "url": "/clients/clash-verge/"
      },
      {
        "title": "Shadowrocket 教程",
        "url": "/clients/shadowrocket/"
      }
    ],
    "relatedQuestions": [
      "机场购买后如何开始使用？",
      "机场订阅链接是什么？",
      "Clash 怎么导入机场订阅？"
    ]
  },
  {
    "id": 4,
    "slug": "getting-started-with-airport",
    "question": "机场购买后如何开始使用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场购买后如何开始使用？新手第一步配置指南 - 机场湾",
    "seoDescription": "刚买了机场不知道怎么用？本文带你一步步找到订阅链接，下载合适的客户端，并成功连上外网。",
    "shortAnswer": "购买成功后，进入机场官网后台（通常是“我的订阅”或“仪表盘”），复制“一键订阅链接”，然后下载并导入到支持的客户端（如 v2rayN、Clash）中即可生效。",
    "relatedArticles": [
      {
        "title": "客户端下载",
        "url": "/clients/"
      },
      {
        "title": "新手机场推荐",
        "url": "/recommend/2026-airport/"
      }
    ],
    "relatedQuestions": [
      "机场订阅链接是什么？",
      "Clash 怎么导入机场订阅？",
      "Shadowrocket 怎么导入机场订阅？"
    ]
  },
  {
    "id": 5,
    "slug": "what-is-airport-subscription-link",
    "question": "机场订阅链接是什么？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场订阅链接是什么？为什么不能泄露？ - 机场湾",
    "seoDescription": "解释机场订阅链接的作用、原理，以及如果不小心泄露订阅链接可能会导致的流量被盗用与封号风险。",
    "shortAnswer": "订阅链接是一串包含你账号信息和所有节点配置的专属 URL。客户端通过它自动下载和更新节点。如果泄露，别人就能用你的流量，甚至导致你的账号被封禁。",
    "relatedArticles": [
      {
        "title": "客户端下载",
        "url": "/clients/"
      }
    ],
    "relatedQuestions": [
      "机场购买后如何开始使用？",
      "机场订阅链接泄露怎么办？",
      "机场订阅链接失效怎么办？"
    ]
  },
  {
    "id": 6,
    "slug": "how-to-choose-airport-2026",
    "question": "2026 年机场怎么选？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P0",
    "seoTitle": "2026 年机场怎么选？不同需求人群的挑选建议 - 机场湾",
    "seoDescription": "2026 年最新机场选购指南：如何根据稳定性、价格、专线/中转、流媒体解锁等因素挑选最适合自己的机场。",
    "shortAnswer": "2026 年选购建议：游戏与重度办公选 IPLC 专线，流媒体看剧选大带宽中转，日常偶尔查资料选便宜的按量计费。切忌迷信“便宜且全能”的虚假宣传。",
    "relatedArticles": [
      {
        "title": "2026稳定机场推荐",
        "url": "/recommend/2026-airport/"
      },
      {
        "title": "专线机场推荐",
        "url": "/recommend/premium-line/"
      }
    ],
    "relatedQuestions": [
      "便宜机场靠谱吗？",
      "稳定机场怎么判断？",
      "专线机场和中转机场哪个好？"
    ]
  },
  {
    "id": 7,
    "slug": "airport-guide-for-beginners",
    "question": "新手怎么选择机场？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "新手怎么选择机场？避坑指南与购买建议 - 机场湾",
    "seoDescription": "专门为没用过机场的新手准备的选购防坑指南，告诉你哪些指标最重要，哪些噱头不要信。",
    "shortAnswer": "新手应优先选择提供“一键导入”功能、有详尽教程、提供试用或支持月付的机场。不要一上来就买年付，也不要轻信“几块钱几千G”的夸张宣传。",
    "relatedArticles": [
      {
        "title": "稳定机场推荐",
        "url": "/recommend/stable-airport/"
      },
      {
        "title": "客户端下载",
        "url": "/clients/"
      }
    ],
    "relatedQuestions": [
      "2026 年机场怎么选？",
      "便宜机场靠谱吗？",
      "机场买月付还是年付？"
    ]
  },
  {
    "id": 8,
    "slug": "are-cheap-airports-reliable",
    "question": "便宜机场靠谱吗？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P0",
    "seoTitle": "一两块钱的便宜机场靠谱吗？揭秘低价机场套路 - 机场湾",
    "seoDescription": "深度分析便宜低价机场的盈利模式和潜在风险，告诉你为什么极度便宜的机场往往伴随着晚高峰卡顿和跑路风险。",
    "shortAnswer": "极度便宜的机场通常通过严重超售（让上千人挤一条宽带）或采用极其廉价的直连线路来压缩成本。日常偶尔查网页尚可，晚高峰看视频大概率会卡顿，且跑路风险极高。",
    "relatedArticles": [
      {
        "title": "便宜机场推荐",
        "url": "/recommend/cheap-airport/"
      },
      {
        "title": "按量计费机场",
        "url": "/recommend/pay-as-you-go/"
      }
    ],
    "relatedQuestions": [
      "稳定机场怎么判断？",
      "机场买月付还是年付？",
      "机场跑路了怎么办？"
    ]
  },
  {
    "id": 9,
    "slug": "how-to-find-stable-airport",
    "question": "稳定机场怎么判断？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "稳定机场怎么判断？避开跑路机场的 5 个指标 - 机场湾",
    "seoDescription": "如何判断一个机场是否真的稳定？从节点类型、入口数量、晚高峰表现以及客服响应等多维度教你筛选优质机场。",
    "shortAnswer": "判断稳定性的关键指标：是否提供专线或优质 BGP 中转、晚高峰是否严重掉速、国内入口是否经常被封打不开、以及客服响应速度。通常老牌机场的架构更为冗余。",
    "relatedArticles": [
      {
        "title": "稳定机场推荐",
        "url": "/recommend/stable-airport/"
      },
      {
        "title": "专线机场推荐",
        "url": "/recommend/premium-line/"
      }
    ],
    "relatedQuestions": [
      "2026 年机场怎么选？",
      "便宜机场靠谱吗？",
      "专线机场和中转机场哪个好？"
    ]
  },
  {
    "id": 10,
    "slug": "is-100gb-data-enough",
    "question": "100GB 流量一个月够用吗？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P0",
    "seoTitle": "100GB流量一个月够用吗？不同使用场景流量估算 - 机场湾",
    "seoDescription": "详细计算网页浏览、聊天、YouTube 1080P/4K、Netflix 等不同场景下的流量消耗，帮你判断 100GB 到底够不够用。",
    "shortAnswer": "100GB对网页、聊天和轻度视频用户通常够用，但如果每天看数小时 1080P/4K 视频，或者长期使用高倍率节点，100GB 很容易提前耗尽。",
    "relatedArticles": [
      {
        "title": "按量计费机场",
        "url": "/recommend/pay-as-you-go/"
      },
      {
        "title": "无限流量机场",
        "url": "/recommend/unlimited/"
      }
    ],
    "relatedQuestions": [
      "机场买月付还是年付？",
      "机场节点倍率是什么意思？",
      "机场流量用完怎么办？"
    ]
  },
  {
    "id": 11,
    "slug": "airport-monthly-vs-annual",
    "question": "机场买月付还是年付？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P0",
    "seoTitle": "机场买月付还是年付？套餐周期选择防坑建议 - 机场湾",
    "seoDescription": "买机场应该按月付、季付还是年付？分析各种缴费周期的利弊，教你最大程度降低机场跑路带来的财产损失。",
    "shortAnswer": "强烈建议新用户先买 1 个月试用晚高峰稳定性。确认好用后再考虑季付或半年付。除非是运营 3 年以上的老牌知名大机场，否则尽量不要直接购买年付，以防跑路。",
    "relatedArticles": [
      {
        "title": "便宜机场",
        "url": "/recommend/cheap-airport/"
      },
      {
        "title": "稳定机场",
        "url": "/recommend/stable-airport/"
      }
    ],
    "relatedQuestions": [
      "便宜机场靠谱吗？",
      "稳定机场怎么判断？",
      "机场跑路了怎么办？"
    ]
  },
  {
    "id": 12,
    "slug": "iplc-vs-iepl",
    "question": "IPLC 和 IEPL 有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "IPLC和IEPL有什么区别？高端专线机场线路解析 - 机场湾",
    "seoDescription": "深度解析 IPLC（国际私有租赁线路）与 IEPL（国际以太网专线）的区别、延迟表现及是否值得购买。",
    "shortAnswer": "两者都属于跨境内网专线，不过墙，延迟极低。IPLC 是传统的物理层端到端连接；IEPL 则是基于以太网的二层连接，配置更灵活。在机场节点体验上，两者表现基本一致，均属于顶级线路。",
    "relatedArticles": [
      {
        "title": "专线机场推荐",
        "url": "/recommend/premium-line/"
      },
      {
        "title": "游戏代理推荐",
        "url": "/recommend/ladder/"
      }
    ],
    "relatedQuestions": [
      "专线机场和中转机场哪个好？",
      "稳定机场怎么判断？"
    ]
  },
  {
    "id": 13,
    "slug": "dedicated-line-vs-transit-airport",
    "question": "专线机场和中转机场哪个好？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "专线机场和中转机场哪个好？线路优缺点对比 - 机场湾",
    "seoDescription": "公网直连、BGP 中转与 IPLC/IEPL 专线有什么区别？帮你根据实际预算和使用场景做出最合理的选择。",
    "shortAnswer": "中转机场通过国内服务器转发流量，性价比高，适合看流媒体和日常上网；专线机场不过墙、延迟极低、无惧敏感时期，适合外贸、游戏及追求极致稳定的人群，但价格较贵。",
    "relatedArticles": [
      {
        "title": "专线机场推荐",
        "url": "/recommend/premium-line/"
      },
      {
        "title": "2026机场推荐",
        "url": "/recommend/2026-airport/"
      }
    ],
    "relatedQuestions": [
      "IPLC 和 IEPL 有什么区别？",
      "稳定机场怎么判断？"
    ]
  },
  {
    "id": 14,
    "slug": "what-is-node-multiplier",
    "question": "机场节点倍率是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场节点倍率是什么意思？流量扣除规则图解 - 机场湾",
    "seoDescription": "解释机场套餐中的节点倍率（0.5x、1x、5x）含义，为什么实际使用的流量和套餐标称的不一样。",
    "shortAnswer": "节点倍率决定了你实际消耗流量的乘数。如果你用了 1GB 真实流量：0.5x 节点只扣除套餐内 0.5GB，1x 节点扣除 1GB，而 5x 节点（如昂贵的专线或特定流媒体解锁节点）会直接扣除 5GB。",
    "relatedArticles": [
      {
        "title": "按量计费机场",
        "url": "/recommend/pay-as-you-go/"
      }
    ],
    "relatedQuestions": [
      "100GB 流量一个月够用吗？",
      "机场套餐到期和流量用完有什么区别？"
    ]
  },
  {
    "id": 15,
    "slug": "why-airport-slow-during-peak-hours",
    "question": "机场晚高峰为什么会卡？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场晚高峰为什么会卡？降速原因与解决方法 - 机场湾",
    "seoDescription": "分析晚上 8 点到 11 点机场节点速度骤降、延迟变高的原因，以及如何通过切换线路或更换机场来解决拥堵。",
    "shortAnswer": "晚高峰（通常 20:00-23:00）跨国出口带宽极度拥挤，加上机场服务商可能存在的带宽超售，导致线路堵塞。解决方法是尝试切换冷门节点，或更换拥有独享专线的高端机场。",
    "relatedArticles": [
      {
        "title": "稳定机场推荐",
        "url": "/recommend/stable-airport/"
      },
      {
        "title": "专线机场推荐",
        "url": "/recommend/premium-line/"
      }
    ],
    "relatedQuestions": [
      "稳定机场怎么判断？",
      "机场节点全部超时怎么办？",
      "机场节点延迟很低为什么还是很慢？"
    ]
  },
  {
    "id": 16,
    "slug": "airport-all-nodes-timeout",
    "question": "机场节点全部超时怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P0",
    "seoTitle": "机场节点全部超时怎么办？5步完整排查方法 - 机场湾",
    "seoDescription": "所有机场节点都连不上、Ping超时？本文提供从套餐状态、订阅链接到本地客户端配置的完整排查修复步骤。",
    "shortAnswer": "所有节点同时超时很少是服务器全挂，通常是因为：1. 套餐过期或流量耗尽；2. 订阅链接未更新（旧节点已下线）；3. 本地网络 DNS 错误或系统时间不准；4. 代理客户端冲突。",
    "relatedArticles": [
      {
        "title": "客户端配置教程",
        "url": "/clients/"
      }
    ],
    "relatedQuestions": [
      "Clash 节点全部超时怎么办？",
      "机场订阅链接失效怎么办？",
      "机场突然全部节点失效怎么办？"
    ]
  },
  {
    "id": 17,
    "slug": "airport-subscription-invalid",
    "question": "机场订阅链接失效怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P0",
    "seoTitle": "机场订阅链接失效、无法更新怎么办？ - 机场湾",
    "seoDescription": "客户端提示订阅更新失败或链接无效的常见原因，以及如何获取最新链接、使用备用地址重新导入配置。",
    "shortAnswer": "订阅失效通常是因为机场更换了防封锁的订阅域名。请关闭当前代理开关，使用浏览器进入机场官网，复制最新的“备用订阅地址”，然后在客户端中覆盖旧地址并重新下载。",
    "relatedArticles": [
      {
        "title": "备用稳定机场",
        "url": "/recommend/stable-airport/"
      }
    ],
    "relatedQuestions": [
      "机场节点全部超时怎么办？",
      "Clash 导入订阅失败怎么办？",
      "机场官网突然打不开是不是跑路了？"
    ]
  },
  {
    "id": 18,
    "slug": "how-to-import-subscription-to-clash",
    "question": "Clash 怎么导入机场订阅？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "Clash 怎么导入机场订阅？Verge/Mihomo 图文教程 - 机场湾",
    "seoDescription": "手把手教你在 Windows 和 Mac 上使用 Clash Verge / Mihomo 导入机场订阅链接，并成功开启系统代理上网。",
    "shortAnswer": "复制机场的一键订阅链接后，打开 Clash（如 Verge 版），进入“订阅 / Profiles”界面，粘贴链接并点击“导入/Download”；下载成功后选中该配置，然后在“设置/Settings”中打开“系统代理”。",
    "relatedArticles": [
      {
        "title": "Clash Verge 教程",
        "url": "/clients/clash-verge/"
      },
      {
        "title": "Mihomo 教程",
        "url": "/clients/mihomo/"
      }
    ],
    "relatedQuestions": [
      "Clash 导入订阅失败怎么办？",
      "机场购买后如何开始使用？",
      "Clash Verge 没有节点怎么办？"
    ]
  },
  {
    "id": 19,
    "slug": "clash-import-subscription-failed",
    "question": "Clash 导入订阅失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P0",
    "seoTitle": "Clash 导入订阅失败、提示网络错误怎么办？ - 机场湾",
    "seoDescription": "解决 Clash 下载配置档案时提示 Network Error、Timeout 或解析错误的方法，助你快速完成节点同步。",
    "shortAnswer": "导入失败多半是因为本地网络无法访问订阅域名，或当前 Clash 的旧代理卡死了请求。请：1. 暂时关闭 Clash 的系统代理和 TUN 模式；2. 刷新 DNS；3. 回官网复制“备用订阅链接”再试。",
    "relatedArticles": [
      {
        "title": "Clash Verge 教程",
        "url": "/clients/clash-verge/"
      }
    ],
    "relatedQuestions": [
      "Clash 怎么导入机场订阅？",
      "机场订阅链接失效怎么办？"
    ]
  },
  {
    "id": 20,
    "slug": "clash-all-nodes-timeout",
    "question": "Clash 节点全部超时怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P0",
    "seoTitle": "Clash节点全部超时怎么办？完整排查方法 - 机场湾",
    "seoDescription": "Clash 列表里所有节点都显示 Timeout 或红色不可用？教你区分是账号问题、配置滞后还是系统环境异常。",
    "shortAnswer": "如果所有 Clash 节点同时 Timeout，优先检查套餐是否到期、流量是否耗尽、订阅是否更新成功以及系统代理设置；如果只有个别节点超时，则更可能是节点本身故障。",
    "relatedArticles": [
      {
        "title": "Clash 客户端",
        "url": "/clients/clash-verge/"
      },
      {
        "title": "稳定机场推荐",
        "url": "/recommend/stable-airport/"
      }
    ],
    "relatedQuestions": [
      "Clash 导入订阅失败怎么办？",
      "机场节点全部超时怎么办？",
      "机场订阅链接失效怎么办？",
      "机场流量用完怎么办？"
    ]
  },
  {
    "id": 21,
    "slug": "clash-nodes-ok-but-cannot-browse",
    "question": "Clash 有节点但是打不开网页怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P0",
    "seoTitle": "Clash有节点延迟正常，但打不开网页怎么办？ - 机场湾",
    "seoDescription": "明明 Clash 测速有延迟，节点也是绿色的，但就是无法访问 Google 或任何网页？详解系统代理与 TUN 模式冲突问题。",
    "shortAnswer": "测速有延迟说明节点连通性正常，打不开网页通常是本地流量没有成功交给 Clash。请检查：1. 确保开启了“系统代理（System Proxy）”；2. 尝试开启“TUN 模式”；3. 关闭浏览器中的如 SwitchyOmega 等代理插件以免冲突。",
    "relatedArticles": [
      {
        "title": "Clash Verge 教程",
        "url": "/clients/clash-verge/"
      }
    ],
    "relatedQuestions": [
      "Clash 节点全部超时怎么办？",
      "机场连 Wi-Fi 能用，手机流量不能用怎么办？",
      "Clash 开了代理还是上不了网怎么办？"
    ]
  },
  {
    "id": 22,
    "slug": "how-to-import-subscription-shadowrocket",
    "question": "Shadowrocket 怎么导入机场订阅？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "Shadowrocket（小火箭）怎么导入机场订阅？ - 机场湾",
    "seoDescription": "iOS 苹果手机用户必备教程：如何购买、安装 Shadowrocket 并正确导入订阅节点进行科学上网。",
    "shortAnswer": "在机场官网复制“Shadowrocket 订阅链接”后，打开小火箭，点击右上角“+”号，类型选择“Subscribe”，粘贴 URL 并保存。返回主界面即可看到节点列表，选择节点并打开顶部的连接开关即可。",
    "relatedArticles": [
      {
        "title": "Shadowrocket 教程",
        "url": "/clients/shadowrocket/"
      },
      {
        "title": "小火箭机场推荐",
        "url": "/recommend/shadowrocket/"
      }
    ],
    "relatedQuestions": [
      "Shadowrocket 节点全部超时怎么办？",
      "iPhone 没有 Shadowrocket 怎么办？"
    ]
  },
  {
    "id": 23,
    "slug": "shadowrocket-all-nodes-timeout",
    "question": "Shadowrocket 节点全部超时怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P0",
    "seoTitle": "小火箭Shadowrocket节点全部超时连不上怎么办？ - 机场湾",
    "seoDescription": "iOS 小火箭测速全红、显示超时或 SSL 报错？详解如何在手机端排查机场订阅更新与网络异常。",
    "shortAnswer": "如果小火箭所有节点都超时，请：1. 检查官网确认账号套餐有效；2. 在主界面右滑订阅名称，点击“更新”获取最新节点配置；3. 检查手机是否开启了其他 VPN 软件；4. 切换 4G/5G 网络后再试。",
    "relatedArticles": [
      {
        "title": "Shadowrocket 教程",
        "url": "/clients/shadowrocket/"
      }
    ],
    "relatedQuestions": [
      "机场节点全部超时怎么办？",
      "Shadowrocket 有节点但是连不上怎么办？"
    ]
  },
  {
    "id": 24,
    "slug": "how-to-import-subscription-v2rayn",
    "question": "v2rayN 怎么导入机场订阅？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "v2rayN 怎么导入机场订阅与配置系统代理？ - 机场湾",
    "seoDescription": "Windows 老牌工具 v2rayN 新手导入教程，教你如何添加订阅、更新节点并开启系统代理模式。",
    "shortAnswer": "复制 v2ray 订阅链接，打开 v2rayN，点击顶部菜单“订阅” -> “订阅设置”，添加并粘贴链接。然后回到主界面，点击“订阅” -> “更新订阅”。最后在底部状态栏图标右键，勾选“自动配置系统代理”。",
    "relatedArticles": [
      {
        "title": "v2rayN 教程",
        "url": "/clients/v2rayn/"
      }
    ],
    "relatedQuestions": [
      "v2rayN 节点全部超时怎么办？",
      "机场购买后如何开始使用？"
    ]
  },
  {
    "id": 25,
    "slug": "cannot-open-chatgpt-with-airport",
    "question": "为什么连了机场还是打不开 ChatGPT？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "为什么连了机场打不开ChatGPT？常见原因与解决方法 - 机场湾",
    "seoDescription": "节点正常但 ChatGPT 提示 Access Denied 或无法加载？解析 OpenAI 的 IP 封锁机制及应对策略。",
    "shortAnswer": "ChatGPT 对代理 IP 的风控极严。打不开通常是因为你当前使用的节点 IP 被标记为了机房代理或已被拉黑。解决方法：清空浏览器 Cookie/使用无痕模式，并切换到台湾、日本或新加坡等原生 IP 节点。",
    "relatedArticles": [
      {
        "title": "ChatGPT 机场推荐",
        "url": "/recommend/ai/"
      }
    ],
    "relatedQuestions": [
      "ChatGPT 显示地区不支持怎么办？",
      "换了机场节点为什么 ChatGPT 还是不能用？",
      "什么地区节点适合 ChatGPT？"
    ]
  },
  {
    "id": 26,
    "slug": "chatgpt-unsupported-country-error",
    "question": "ChatGPT 显示地区不支持怎么办？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "ChatGPT显示地区不支持(Unsupported Country)怎么办？ - 机场湾",
    "seoDescription": "解决访问 OpenAI 或 ChatGPT 时提示 not available in your country 的问题，详解受支持节点地区的筛选。",
    "shortAnswer": "这个报错说明你当前节点所在的国家/地区不在 OpenAI 的支持列表内（如使用了香港、俄罗斯节点）。请务必在客户端中手动切换到美国、日本、新加坡、台湾等节点，并强制刷新页面。",
    "relatedArticles": [
      {
        "title": "AI 节点推荐",
        "url": "/recommend/ai/"
      }
    ],
    "relatedQuestions": [
      "为什么连了机场还是打不开 ChatGPT？",
      "什么地区节点适合 ChatGPT？"
    ]
  },
  {
    "id": 27,
    "slug": "can-airport-watch-netflix",
    "question": "机场能看 Netflix 吗？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "普通机场能看 Netflix 吗？如何判断节点是否解锁流媒体 - 机场湾",
    "seoDescription": "不是所有机场都能看网飞。详解 Netflix 观看对原生 IP 和流媒体解锁线路的要求，以及如何测试是否解锁。",
    "shortAnswer": "能连上外网不代表能看 Netflix。Netflix 严格封锁了大部分云服务器 IP。你需要使用标有“解锁”、“流媒体”的专用节点，或者购买具备全节点原生 IP 伪装能力的高端流媒体机场。",
    "relatedArticles": [
      {
        "title": "Netflix 机场推荐",
        "url": "/recommend/streaming/"
      }
    ],
    "relatedQuestions": [
      "Netflix 为什么检测到代理？",
      "机场节点能打开 Netflix 但看不了内容怎么办？"
    ]
  },
  {
    "id": 28,
    "slug": "netflix-proxy-detected",
    "question": "Netflix 为什么检测到代理？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "Netflix提示检测到代理(Proxy Detected)怎么办？ - 机场湾",
    "seoDescription": "看剧时突然弹出“您似乎使用了代理”，解析网飞的封锁机制与更换可用节点的正确方法。",
    "shortAnswer": "当你看到代理检测报错，说明当前节点 IP 已经被 Netflix 的风控系统拉黑并识别为 VPN。此时你需要退出播放，在客户端切换其他地区的流媒体解锁节点，重新启动 App 即可。",
    "relatedArticles": [
      {
        "title": "流媒体机场推荐",
        "url": "/recommend/streaming/"
      }
    ],
    "relatedQuestions": [
      "机场能看 Netflix 吗？",
      "为什么同一个机场有些节点能看 Netflix 有些不能？"
    ]
  },
  {
    "id": 29,
    "slug": "what-to-do-if-airport-runs-away",
    "question": "机场跑路了怎么办？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场跑路了怎么办？预防策略与备用方案 - 机场湾",
    "seoDescription": "服务商官网打不开、群聊解散？剖析机场跑路前的征兆，以及如何通过备用机场和合理缴费止损。",
    "shortAnswer": "如果官网失联超 48 小时且无公告，大概率已跑路。此时原付费无法追回，唯一解法是立即购买新的备用机场恢复网络。建议日常不要囤积年付套餐，保持一个月付主力+一个按量计费备用。",
    "relatedArticles": [
      {
        "title": "稳定老牌机场推荐",
        "url": "/recommend/stable-airport/"
      },
      {
        "title": "按量计费机场",
        "url": "/recommend/pay-as-you-go/"
      }
    ],
    "relatedQuestions": [
      "稳定机场怎么判断？",
      "便宜机场靠谱吗？",
      "机场买月付还是年付？"
    ]
  },
  {
    "id": 30,
    "slug": "airport-subscription-leaked",
    "question": "机场订阅链接泄露怎么办？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "机场订阅链接泄露怎么办？如何重置订阅防盗用 - 机场湾",
    "seoDescription": "如果不小心把订阅链接发到了公开群组或被别人盗用，如何紧急重置以防止账号被封和流量流失。",
    "shortAnswer": "立刻登录机场官网后台，找到“重置订阅链接”或“重置 UUID”功能并点击。重置后，旧链接将永久失效，盗用者将被断开连接。最后，使用新生成的链接重新导入你自己的所有设备。",
    "relatedArticles": [
      {
        "title": "客户端教程",
        "url": "/clients/"
      }
    ],
    "relatedQuestions": [
      "机场订阅链接是什么？",
      "机场为什么会封账号？",
      "机场账号可以同时给几个人用？"
    ]
  },
  {
    "id": 31,
    "slug": "airport",
    "question": "机场和梯子是一回事吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场和梯子是一回事吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 32,
    "slug": "airport-2",
    "question": "为什么很多人把机场叫做梯子？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'为什么很多人把机场叫做梯子'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 33,
    "slug": "faq-x7ai6",
    "question": "科学上网工具是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'科学上网工具是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 34,
    "slug": "faq-edopt",
    "question": "魔法上网工具是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'魔法上网工具是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 35,
    "slug": "airport-recommend",
    "question": "机场推荐应该看哪些因素？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场推荐应该看哪些因素'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 36,
    "slug": "2026-stable-airport-recommend",
    "question": "2026 年还有稳定机场推荐吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'2026 年还有稳定机场推荐吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 37,
    "slug": "airport-3",
    "question": "机场适合新手使用吗？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场适合新手使用吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 38,
    "slug": "airport-4",
    "question": "机场一般怎么使用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场一般怎么使用'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 39,
    "slug": "airport-clash",
    "question": "机场订阅链接怎么导入 Clash？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 40,
    "slug": "airport-shadowrocket",
    "question": "机场订阅链接怎么导入 Shadowrocket？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 41,
    "slug": "airport-v2rayn",
    "question": "机场订阅链接怎么导入 v2rayN？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 42,
    "slug": "airport-stash",
    "question": "机场订阅链接怎么导入 Stash？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场订阅链接怎么导入 Stash'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 43,
    "slug": "airport-quantumult-x",
    "question": "机场订阅链接怎么导入 Quantumult X？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场订阅链接怎么导入 Quantumult X'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 44,
    "slug": "airport-sing-box",
    "question": "机场订阅链接怎么导入 sing-box？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场订阅链接怎么导入 sing-box'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 45,
    "slug": "clash-airport-recommend",
    "question": "Clash 机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 46,
    "slug": "shadowrocket-airport-recommend",
    "question": "Shadowrocket 机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 47,
    "slug": "airport-recommend-2",
    "question": "小火箭机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 48,
    "slug": "v2rayn-airport-recommend",
    "question": "v2rayN 机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 49,
    "slug": "airport-5",
    "question": "安卓手机用什么机场客户端？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'安卓手机用什么机场客户端'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 50,
    "slug": "iphone-airport",
    "question": "iPhone 用什么机场客户端？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'iPhone 用什么机场客户端'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 51,
    "slug": "windows-airport",
    "question": "Windows 电脑怎么用机场？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'Windows 电脑怎么用机场'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 52,
    "slug": "mac-airport",
    "question": "Mac 电脑怎么用机场？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'Mac 电脑怎么用机场'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 53,
    "slug": "airport-node",
    "question": "机场节点是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 54,
    "slug": "airport-node-latency",
    "question": "机场节点延迟怎么看？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点延迟怎么看'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 55,
    "slug": "airport-node-2",
    "question": "机场节点速度怎么看？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点速度怎么看'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 56,
    "slug": "airport-node-3",
    "question": "机场节点越多越好吗？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点越多越好吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 57,
    "slug": "airport-node-4",
    "question": "机场节点地区怎么选？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点地区怎么选'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 58,
    "slug": "node",
    "question": "香港节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'香港节点适合什么场景'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 59,
    "slug": "node-2",
    "question": "台湾节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'台湾节点适合什么场景'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 60,
    "slug": "node-3",
    "question": "日本节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'日本节点适合什么场景'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 61,
    "slug": "node-4",
    "question": "新加坡节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'新加坡节点适合什么场景'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 62,
    "slug": "node-5",
    "question": "美国节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'美国节点适合什么场景'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 63,
    "slug": "airport-6",
    "question": "机场晚高峰卡顿正常吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场晚高峰卡顿正常吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 64,
    "slug": "airport-7",
    "question": "机场晚高峰卡怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场晚高峰卡怎么办'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 65,
    "slug": "airport-8",
    "question": "机场为什么白天快晚上慢？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场为什么白天快晚上慢'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 66,
    "slug": "airport-9",
    "question": "机场速度慢是什么原因？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场速度慢是什么原因'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 67,
    "slug": "airport-cannot-connect",
    "question": "机场连不上是什么原因？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场连不上是什么原因'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 68,
    "slug": "airport-node-5",
    "question": "机场节点全红怎么办？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点全红怎么办'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 69,
    "slug": "airport-timeout",
    "question": "机场显示超时怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场显示超时怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 70,
    "slug": "shadowrocket-failed",
    "question": "Shadowrocket 导入订阅失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'Shadowrocket 导入订阅失败怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 71,
    "slug": "v2rayn-connect-failed",
    "question": "v2rayN 连接失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'v2rayN 连接失败怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 72,
    "slug": "airport-traffic",
    "question": "机场流量用完了怎么办？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 73,
    "slug": "airport-traffic-2",
    "question": "机场流量每月会重置吗？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 74,
    "slug": "airport-traffic-3",
    "question": "机场流量倍率怎么计算？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 75,
    "slug": "airport-plan-100g",
    "question": "机场套餐里的 100G 够用吗？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 76,
    "slug": "traffic-airport",
    "question": "小流量用户适合买什么机场？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 77,
    "slug": "traffic-airport-2",
    "question": "大流量用户适合买什么机场？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 78,
    "slug": "airport-10",
    "question": "按量计费机场适合哪些人？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 79,
    "slug": "airport-11",
    "question": "不限时机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'不限时机场是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 80,
    "slug": "airport-airport",
    "question": "不限时机场和月付机场哪个好？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 81,
    "slug": "airport-12",
    "question": "月付机场适合哪些用户？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 82,
    "slug": "airport-13",
    "question": "季付机场划算吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'季付机场划算吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 83,
    "slug": "airport-14",
    "question": "年付机场值得买吗？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 84,
    "slug": "airport-15",
    "question": "机场可以长期使用吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场可以长期使用吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 85,
    "slug": "airport-16",
    "question": "低价机场有什么风险？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'低价机场有什么风险'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 86,
    "slug": "cheap-airport-recommend",
    "question": "便宜机场推荐看哪些指标？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 87,
    "slug": "airport-17",
    "question": "高性价比机场怎么判断？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'高性价比机场怎么判断'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 88,
    "slug": "stable-airport-recommend",
    "question": "稳定机场推荐看什么？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'稳定机场推荐看什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 89,
    "slug": "dedicated-airport",
    "question": "专线机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'专线机场是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 90,
    "slug": "iplc-airport",
    "question": "IPLC 机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'IPLC 机场是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 91,
    "slug": "iepl-airport",
    "question": "IEPL 机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'IEPL 机场是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 92,
    "slug": "airport-18",
    "question": "中转机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'中转机场是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 93,
    "slug": "airport-19",
    "question": "直连机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'直连机场是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 94,
    "slug": "airport-airport-2",
    "question": "直连机场和中转机场有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'直连机场和中转机场有什么区别'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 95,
    "slug": "dedicated-airport-2",
    "question": "专线机场为什么更贵？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'专线机场为什么更贵'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 96,
    "slug": "dedicated-airport-3",
    "question": "普通用户有必要买专线机场吗？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'普通用户有必要买专线机场吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 97,
    "slug": "airport-netflix",
    "question": "机场能解锁 Netflix 吗？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 98,
    "slug": "airport-disney",
    "question": "机场能解锁 Disney+ 吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场能解锁 Disney+ 吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 99,
    "slug": "airport-youtube",
    "question": "机场能看 YouTube 吗？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 100,
    "slug": "airport-tiktok",
    "question": "机场能用 TikTok 吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场能用 TikTok 吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 101,
    "slug": "airport-chatgpt",
    "question": "机场能用 ChatGPT 吗？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 102,
    "slug": "airport-gemini",
    "question": "机场能用 Gemini 吗？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 103,
    "slug": "airport-claude",
    "question": "机场能用 Claude 吗？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 104,
    "slug": "chatgpt-airport-recommend",
    "question": "ChatGPT 机场推荐怎么选？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 105,
    "slug": "streaming-airport",
    "question": "流媒体解锁机场怎么选？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 106,
    "slug": "netflix-airport-recommend",
    "question": "Netflix 机场推荐看什么？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 107,
    "slug": "tiktok-airport-recommend",
    "question": "TikTok 机场推荐看什么？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'TikTok 机场推荐看什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 108,
    "slug": "airport-ip",
    "question": "机场原生 IP 是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场原生 IP 是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 109,
    "slug": "ip-airport",
    "question": "原生 IP 机场有什么用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'原生 IP 机场有什么用'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 110,
    "slug": "airport-ip-2",
    "question": "机场住宅 IP 是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场住宅 IP 是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 111,
    "slug": "airport-ip-ip",
    "question": "机场动态 IP 和静态 IP 有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场动态 IP 和静态 IP 有什么区别'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 112,
    "slug": "airport-node-streaming",
    "question": "机场为什么有些节点不能看流媒体？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 113,
    "slug": "airport-node-ai",
    "question": "机场为什么有些节点不能用 AI 工具？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 114,
    "slug": "airport-20",
    "question": "机场优惠码在哪里找？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场优惠码在哪里找'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 115,
    "slug": "airport-21",
    "question": "机场折扣码怎么用？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场折扣码怎么用'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 116,
    "slug": "airport-22",
    "question": "机场优惠活动靠谱吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场优惠活动靠谱吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 117,
    "slug": "airport-23",
    "question": "免费试用机场安全吗？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'免费试用机场安全吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 118,
    "slug": "airport-24",
    "question": "一元试用机场值得买吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'一元试用机场值得买吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 119,
    "slug": "airport-test",
    "question": "机场试用应该测试什么？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场试用应该测试什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 120,
    "slug": "airport-25",
    "question": "机场购买前要注意什么？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场购买前要注意什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 121,
    "slug": "airport-run-away",
    "question": "机场跑路是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场跑路是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 122,
    "slug": "airport-run-away-2",
    "question": "怎么判断机场会不会跑路？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'怎么判断机场会不会跑路'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 123,
    "slug": "airport-cannot-open",
    "question": "机场官网打不开怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场官网打不开怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 124,
    "slug": "airport-26",
    "question": "机场客服联系不上怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场客服联系不上怎么办'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 125,
    "slug": "airport-27",
    "question": "机场订阅突然不能用了怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场订阅突然不能用了怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 126,
    "slug": "airport-28",
    "question": "机场被封了怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场被封了怎么办'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 127,
    "slug": "airport-29",
    "question": "机场换域名怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场换域名怎么办'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 128,
    "slug": "airport-30",
    "question": "机场公告在哪里看？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场公告在哪里看'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 129,
    "slug": "airport-31",
    "question": "机场备用官网有什么用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场备用官网有什么用'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 130,
    "slug": "airport-32",
    "question": "机场导航是什么？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场导航是什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 131,
    "slug": "faq-wvs4u",
    "question": "梯子导航是什么？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'梯子导航是什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 132,
    "slug": "airport-33",
    "question": "机场排行榜靠谱吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场排行榜靠谱吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 133,
    "slug": "airport-34",
    "question": "机场天梯榜靠谱吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场天梯榜靠谱吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 134,
    "slug": "2026-airport",
    "question": "2026 机场天梯榜怎么排名？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'2026 机场天梯榜怎么排名'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 135,
    "slug": "airport-recommend-3",
    "question": "机场推荐榜单应该看哪些维度？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场推荐榜单应该看哪些维度'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 136,
    "slug": "airport-35",
    "question": "机场评测文章可信吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场评测文章可信吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 137,
    "slug": "airport-recommend-4",
    "question": "机场推荐知乎可信吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场推荐知乎可信吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 138,
    "slug": "airport-recommend-github",
    "question": "机场推荐 GitHub 可信吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场推荐 GitHub 可信吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 139,
    "slug": "airport-recommend-reddit",
    "question": "机场推荐 Reddit 可信吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场推荐 Reddit 可信吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 140,
    "slug": "airport-stable",
    "question": "机场评测应该看速度还是稳定性？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场评测应该看速度还是稳定性'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 141,
    "slug": "airport-price",
    "question": "机场评测应该看价格还是线路？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场评测应该看价格还是线路'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 142,
    "slug": "airport-recommend-5",
    "question": "机场推荐里常见的坑有哪些？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场推荐里常见的坑有哪些'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 143,
    "slug": "airport-36",
    "question": "机场新手最容易踩哪些坑？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场新手最容易踩哪些坑'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 144,
    "slug": "airport-plan",
    "question": "机场套餐名字怎么看？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 145,
    "slug": "airport-37",
    "question": "机场在线设备数是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场在线设备数是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 146,
    "slug": "airport-38",
    "question": "机场限制设备数量吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场限制设备数量吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 147,
    "slug": "airport-39",
    "question": "机场可以多人共用吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场可以多人共用吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 148,
    "slug": "airport-40",
    "question": "机场共享账号安全吗？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场共享账号安全吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 149,
    "slug": "airport-41",
    "question": "机场账号被封是什么原因？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场账号被封是什么原因'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 150,
    "slug": "airport-42",
    "question": "机场订阅链接可以分享给别人吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场订阅链接可以分享给别人吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 151,
    "slug": "airport-clash-verge",
    "question": "机场是否支持 Clash Verge？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 152,
    "slug": "airport-clash-meta",
    "question": "机场是否支持 Clash Meta？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 153,
    "slug": "airport-mihomo",
    "question": "机场是否支持 Mihomo？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 154,
    "slug": "airport-shadowrocket-2",
    "question": "机场是否支持 Shadowrocket？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 155,
    "slug": "airport-quantumult-x-2",
    "question": "机场是否支持 Quantumult X？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场是否支持 Quantumult X'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 156,
    "slug": "airport-surge",
    "question": "机场是否支持 Surge？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场是否支持 Surge'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 157,
    "slug": "airport-stash-2",
    "question": "机场是否支持 Stash？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场是否支持 Stash'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 158,
    "slug": "airport-v2rayn-2",
    "question": "机场是否支持 v2rayN？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 159,
    "slug": "airport-v2rayng",
    "question": "机场是否支持 v2rayNG？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 160,
    "slug": "airport-sing-box-2",
    "question": "机场是否支持 sing-box？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场是否支持 sing-box'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 161,
    "slug": "airport-hiddify",
    "question": "机场是否支持 Hiddify？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场是否支持 Hiddify'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 162,
    "slug": "airport-43",
    "question": "机场和代理有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场和代理有什么区别'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 163,
    "slug": "airport-node-6",
    "question": "机场和节点订阅有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场和节点订阅有什么区别'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 164,
    "slug": "airport-44",
    "question": "机场订阅和代理软件是什么关系？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场订阅和代理软件是什么关系'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 165,
    "slug": "airport-45",
    "question": "机场需要自己搭建吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场需要自己搭建吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 166,
    "slug": "node-airport",
    "question": "自建节点和买机场哪个好？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'自建节点和买机场哪个好'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 167,
    "slug": "airport-46",
    "question": "机场适合外贸用户吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场适合外贸用户吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 168,
    "slug": "airport-47",
    "question": "机场适合留学生吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场适合留学生吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 169,
    "slug": "airport-48",
    "question": "机场适合程序员吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场适合程序员吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 170,
    "slug": "airport-49",
    "question": "机场适合跨境电商吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场适合跨境电商吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 171,
    "slug": "airport-50",
    "question": "机场适合刷短视频吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场适合刷短视频吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 172,
    "slug": "airport-streaming",
    "question": "机场适合看流媒体吗？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 173,
    "slug": "airport-51",
    "question": "机场适合打游戏吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场适合打游戏吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 174,
    "slug": "airport-52",
    "question": "游戏加速能用机场吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'游戏加速能用机场吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 175,
    "slug": "airport-latency",
    "question": "机场延迟低就一定快吗？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场延迟低就一定快吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 176,
    "slug": "airport-stable-2",
    "question": "机场速度快就一定稳定吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场速度快就一定稳定吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 177,
    "slug": "airport-node-7",
    "question": "机场节点丢包是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点丢包是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 178,
    "slug": "airport-speedtest",
    "question": "机场测速怎么看才准确？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场测速怎么看才准确'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 179,
    "slug": "airport-speedtest-2",
    "question": "机场测速软件可信吗？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场测速软件可信吗'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 180,
    "slug": "airport-speedtest-3",
    "question": "机场测速结果和实际体验为什么不一样？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场测速结果和实际体验为什么不一样'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 181,
    "slug": "airport-recommend-plan",
    "question": "机场推荐页面应该怎么对比套餐？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 182,
    "slug": "airport-53",
    "question": "机场品牌页应该看哪些信息？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场品牌页应该看哪些信息'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 183,
    "slug": "airport-54",
    "question": "机场官网入口怎么辨别真假？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场官网入口怎么辨别真假'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 184,
    "slug": "airport-55",
    "question": "机场备用地址怎么保存？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场备用地址怎么保存'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 185,
    "slug": "airport-56",
    "question": "机场使用过程中需要注意什么？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场使用过程中需要注意什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 186,
    "slug": "airport-57",
    "question": "机场长期使用怎么降低风险？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场长期使用怎么降低风险'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 187,
    "slug": "airport-recommend-2026",
    "question": "机场推荐 2026 应该怎么更新？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'机场推荐 2026 应该怎么更新'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 188,
    "slug": "airport-58",
    "question": "机场相关内容为什么需要经常更新？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场相关内容为什么需要经常更新'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 189,
    "slug": "airport-59",
    "question": "机场品牌词落地页应该写哪些问题？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场品牌词落地页应该写哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 190,
    "slug": "airport-recommend-6",
    "question": "机场替代推荐是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场替代推荐是什么意思'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 191,
    "slug": "airport-cannot-open-2",
    "question": "某个机场打不开时可以换什么？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '某个机场打不开时可以换什么'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 192,
    "slug": "airport-run-away-3",
    "question": "某个机场跑路后怎么处理？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'某个机场跑路后怎么处理'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 193,
    "slug": "airport-60",
    "question": "机场导航页应该收录哪些内容？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场导航页应该收录哪些内容'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 194,
    "slug": "recommend",
    "question": "梯子推荐页应该解决哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'梯子推荐页应该解决哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 195,
    "slug": "recommend-2",
    "question": "科学上网工具推荐页应该写什么？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'科学上网工具推荐页应该写什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 196,
    "slug": "recommend-3",
    "question": "魔法上网工具推荐页应该写什么？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'魔法上网工具推荐页应该写什么'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 197,
    "slug": "airport-61",
    "question": "机场优惠码页面应该写哪些问题？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场优惠码页面应该写哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 198,
    "slug": "airport-62",
    "question": "免费试用机场页面应该写哪些问题？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'免费试用机场页面应该写哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 199,
    "slug": "airport-63",
    "question": "按量计费机场页面应该写哪些问题？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 200,
    "slug": "cheap-airport-recommend-2",
    "question": "便宜机场推荐页面应该写哪些问题？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 201,
    "slug": "stable-airport-recommend-2",
    "question": "稳定机场推荐页面应该写哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'稳定机场推荐页面应该写哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 202,
    "slug": "dedicated-airport-recommend",
    "question": "专线机场推荐页面应该写哪些问题？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'专线机场推荐页面应该写哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 203,
    "slug": "clash-airport-recommend-2",
    "question": "Clash 机场推荐页面应该写哪些问题？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 204,
    "slug": "shadowrocket-airport-recommend-2",
    "question": "Shadowrocket 机场推荐页面应该写哪些问题？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 205,
    "slug": "2026-recommend",
    "question": "2026 梯子推荐页面应该写哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'2026 梯子推荐页面应该写哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 206,
    "slug": "2026-airport-recommend",
    "question": "2026 机场推荐页面应该写哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "关于'2026 机场推荐页面应该写哪些问题'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 207,
    "slug": "clash-node-timeout",
    "question": "为什么 Clash 节点全部超时？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '为什么 Clash 节点全部超时'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 208,
    "slug": "clash-failed",
    "question": "Clash 订阅更新失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'Clash 订阅更新失败怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 209,
    "slug": "clash-error",
    "question": "Clash 更新订阅提示错误怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'Clash 更新订阅提示错误怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 210,
    "slug": "clash",
    "question": "Clash 开了代理还是上不了网怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 211,
    "slug": "clash-verge-node",
    "question": "Clash Verge 没有节点怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 212,
    "slug": "clash-verge",
    "question": "Clash Verge 导入订阅没有反应怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'Clash Verge 导入订阅没有反应怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 213,
    "slug": "clash-verge-mihomo",
    "question": "Clash Verge 和 Mihomo 有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'Clash Verge 和 Mihomo 有什么区别'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 214,
    "slug": "shadowrocket-node-cannot-connect",
    "question": "Shadowrocket 有节点但是连不上怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'Shadowrocket 有节点但是连不上怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 215,
    "slug": "shadowrocket-failed-2",
    "question": "Shadowrocket 更新订阅失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'Shadowrocket 更新订阅失败怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 216,
    "slug": "shadowrocket-url",
    "question": "Shadowrocket 显示 URL 无效怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 217,
    "slug": "connect-cannot-open",
    "question": "小火箭为什么显示连接成功但打不开网页？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '小火箭为什么显示连接成功但打不开网页'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 218,
    "slug": "iphone-shadowrocket",
    "question": "iPhone 没有 Shadowrocket 怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 219,
    "slug": "v2rayn-node-timeout",
    "question": "v2rayN 节点全部超时怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'v2rayN 节点全部超时怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 220,
    "slug": "v2rayn-failed",
    "question": "v2rayN 更新订阅失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'v2rayN 更新订阅失败怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 221,
    "slug": "v2rayn-node-cannot-open",
    "question": "v2rayN 有节点但是打不开网页怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 'v2rayN 有节点但是打不开网页怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 222,
    "slug": "airport-wi-fi-traffic",
    "question": "机场连 Wi-Fi 能用，手机流量不能用怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场连 Wi-Fi 能用，手机流量不能用怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 223,
    "slug": "airport-traffic-wi-fi",
    "question": "机场手机流量能用，Wi-Fi 不能用怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场手机流量能用，Wi-Fi 不能用怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 224,
    "slug": "airport-dns-error",
    "question": "机场 DNS 错误怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场 DNS 错误怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 225,
    "slug": "airport-node-latency-2",
    "question": "机场节点延迟很低为什么还是很慢？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场节点延迟很低为什么还是很慢'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 226,
    "slug": "airport-speedtest-4",
    "question": "机场测速很快为什么实际使用很卡？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场测速很快为什么实际使用很卡'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 227,
    "slug": "airport-connect-cannot-open-google",
    "question": "机场连接成功为什么打不开 Google？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场连接成功为什么打不开 Google'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 228,
    "slug": "airport-connect-cannot-open-youtube",
    "question": "机场连接成功为什么打不开 YouTube？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 229,
    "slug": "airport-node-8",
    "question": "机场突然全部节点失效怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场突然全部节点失效怎么办'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 230,
    "slug": "chatgpt-unsupported-country",
    "question": "ChatGPT 为什么提示 unsupported country？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 231,
    "slug": "airport-node-chatgpt",
    "question": "换了机场节点为什么 ChatGPT 还是不能用？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 232,
    "slug": "node-chatgpt",
    "question": "什么地区节点适合 ChatGPT？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 233,
    "slug": "chatgpt-airport",
    "question": "ChatGPT 经常掉登录和机场有关系吗？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 234,
    "slug": "claude-airport",
    "question": "Claude 为什么连机场还是不能用？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 235,
    "slug": "gemini-node-cannot-open",
    "question": "Gemini 为什么更换节点后还是打不开？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 236,
    "slug": "netflix-error",
    "question": "Netflix 显示代理错误怎么办？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 237,
    "slug": "airport-node-netflix",
    "question": "机场节点能打开 Netflix 但看不了内容怎么办？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 238,
    "slug": "airport-node-netflix-2",
    "question": "为什么同一个机场有些节点能看 Netflix 有些不能？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 239,
    "slug": "netflix-4k-traffic",
    "question": "看 Netflix 4K 一个月需要多少流量？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 240,
    "slug": "youtube-1080p-traffic",
    "question": "看 YouTube 1080P 一小时多少流量？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 241,
    "slug": "youtube-4k-traffic",
    "question": "看 YouTube 4K 一小时多少流量？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 242,
    "slug": "airport-traffic-4",
    "question": "机场续费后为什么流量没有重置？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 243,
    "slug": "airport-plan-2",
    "question": "机场买了套餐为什么订阅还是过期？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 244,
    "slug": "airport-plan-traffic",
    "question": "机场套餐到期和流量用完有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场套餐到期和流量用完有什么区别'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 245,
    "slug": "airport-64",
    "question": "机场订阅链接泄露会有什么后果？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场订阅链接泄露会有什么后果'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 246,
    "slug": "airport-65",
    "question": "机场账号可以同时给几个人用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场账号可以同时给几个人用'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 247,
    "slug": "airport-66",
    "question": "机场为什么会封账号？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场为什么会封账号'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 248,
    "slug": "airport-67",
    "question": "机场客服不回复怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "关于'机场客服不回复怎么办'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 249,
    "slug": "airport-cannot-open-run-away",
    "question": "机场官网突然打不开是不是跑路了？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "针对 '机场官网突然打不开是不是跑路了'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  }
];
