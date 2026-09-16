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
    ],
    "searchAliases": [
      "clash配置",
      "clash教程",
      "重置clash配置",
      "clash配置教程",
      "clash如何配置",
      "电脑clash配置",
      "clash mac命令行",
      "clash规则配置推荐",
      "clash for windows配置教程手机",
      "clash 如何配置",
      "通过clash内核导出订阅配置",
      "clash使用指南",
      "clash自用配置教程"
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
    ],
    "searchAliases": [
      "clash timeout",
      "clash节点timeout",
      "clash全部timeout",
      "clash所有节点全部超时",
      "代理有流量但是连不上全部timeout",
      "clash开启tun后全部timeout",
      "校园网连接节点超时",
      "clash导入为什么timeout",
      "电脑clash verge用着用着突然全部timeout",
      "clash windows突然连不上"
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
    "slug": "how-to-import-v2rayn",
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
    "category": "故障排查",
    "intent": "informational",
    "priority": "P0",
    "seoTitle": "为什么连了机场打不开ChatGPT？常见原因与解决方法 - 机场湾",
    "seoDescription": "节点正常但 ChatGPT 提示 Access Denied 或无法加载？解析 OpenAI 的 IP 封锁机制及应对策略。",
    "shortAnswer": "如果其他网站正常但 ChatGPT 无法访问，应先检查当前地区是否在 OpenAI 官方支持范围，并排除 VPN/代理、Cookie、DNS、临时安全限制或服务状态等因素。",
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
    "shortAnswer": "该提示通常表示当前网络出口被识别为 OpenAI 尚未支持的地区。应先核对官方支持地区，并在符合支持条件的正常网络环境下重试。",
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
    "shortAnswer": "是否能正常观看取决于具体网络出口和 Netflix 的检测结果，同一服务不同节点也可能表现不同。",
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
    "shortAnswer": "Netflix 可能限制部分 VPN/代理连接，表现可能包括代理提示、播放失败或内容库变化；具体情况会随 IP、地区和网络环境变化。",
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
    "slug": "are-airport-and-proxy-the-same",
    "question": "机场和梯子是一回事吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "虽然在网络社区中经常混用，但两个词有细微区别。机场专指提供订阅节点的服务商，梯子则是更泛化的说法，泛指各类能绕过访问限制的工具或方案。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 32,
    "slug": "why-airport-ladder",
    "question": "为什么很多人把机场叫做梯子？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "早期代理协议使用飞机图标（Shadowsocks），梯子是对科学上网工具的戏称，两者都属于社区俗语，没有严格定义，在使用中含义基本相同。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 33,
    "slug": "what-is-internet-proxy-tool",
    "question": "科学上网工具是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "通俗指能让你访问到被本地网络屏蔽的互联网服务的代理类工具，如节点订阅、VPN 或自建代理服务器等，没有统一的官方定义。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 34,
    "slug": "what-does-magic-internet-mean",
    "question": "魔法上网工具是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "是科学上网工具的另一种民间说法，本质上指同类代理或节点订阅服务，没有行业标准定义，使用场景基本相同。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 35,
    "slug": "airport-recommend-which",
    "question": "机场推荐应该看哪些因素？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "主要看线路类型（直连/中转/专线）、支持的客户端格式、套餐价格与流量、设备数限制，以及服务商运营时间和是否提供月付测试。",
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
    "shortAnswer": "2026 年仍有稳定的服务商在运营，但网络环境持续变化，建议优先选择有专线线路和备用域名的服务商，并以月付方式先测试再续费。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 37,
    "slug": "is-airport-service-beginner-friendly",
    "question": "机场适合新手使用吗？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "适合，但新手建议优先选择提供图形界面客户端、一键导入教程和月付套餐的服务，避免从复杂协议或年付套餐开始。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 38,
    "slug": "how-airport-service-works",
    "question": "机场一般怎么使用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "购买节点订阅后复制链接，在客户端（如 Clash 或 Shadowrocket）中导入，打开系统代理或 TUN 模式，选择可用节点即可开始使用。",
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
    "shortAnswer": "在服务商后台复制订阅链接，打开 Clash（如 Clash Verge Rev），进入 Profiles 页面，粘贴链接后点击下载，选中配置后打开系统代理即可。",
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
    "shortAnswer": "在机场后台复制 Shadowrocket 订阅链接，打开 Shadowrocket，点击右上角加号，选择类型 Subscribe，粘贴链接并保存，即可获取节点列表。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 41,
    "slug": "import-subscription-to-v2rayn",
    "question": "机场订阅链接怎么导入 v2rayN？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "复制机场订阅链接，打开 v2rayN，点击订阅设置添加链接后，在主界面点击更新订阅获取节点，最后在托盘图标右键开启系统代理。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 42,
    "slug": "airport-stash",
    "question": "机场订阅链接怎么导入 Stash？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "在 Stash 的配置管理页面中添加远程订阅，粘贴服务商提供的 Clash 格式链接并保存，下载完成后即可选择配置启动代理。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 43,
    "slug": "airport-quantumult-x",
    "question": "机场订阅链接怎么导入 Quantumult X？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "在 Quantumult X 中进入节点管理页面，添加引用（远程订阅），粘贴服务商提供的链接并开启自动更新，保存后在策略中选择节点启动代理。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 44,
    "slug": "airport-sing-box",
    "question": "机场订阅链接怎么导入 sing-box？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "获取服务商支持的 sing-box 格式订阅链接（通常在后台选择 sing-box 格式），在 sing-box 客户端中添加远程配置，保存后启动代理服务。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 45,
    "slug": "clash-airport-recommend-how-to-choose",
    "question": "Clash 机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "确认服务商是否提供 Clash/Mihomo 可读取的 YAML 格式订阅，并查看是否有一键导入或官方 Clash 配置教程，购买前以官方后台为准。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 46,
    "slug": "shadowrocket-airport-recommend-how-to-choose",
    "question": "Shadowrocket 机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "确认服务商是否提供 Shadowrocket 可直接导入的订阅链接，并查看是否支持你常用的协议（SS、Vmess、Trojan 等），购买前先查后台。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 47,
    "slug": "airport-recommend-how-to-choose",
    "question": "小火箭机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "选购逻辑与 Shadowrocket 相同，需确认服务商是否提供兼容格式的订阅，是否有 iOS 专属的导入教程。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 48,
    "slug": "v2rayn-airport-recommend-how-to-choose",
    "question": "v2rayN 机场推荐怎么选？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "确认服务商是否提供 v2rayN 支持的格式订阅，是否有适合 Windows 的入门教程，以及更新订阅是否正常。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 49,
    "slug": "android-airport",
    "question": "安卓手机用什么机场客户端？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Android 常见选择有 v2rayNG、Hiddify、Mihomo 系客户端等，具体看服务商支持的协议格式，购买前确认服务商是否提供 Android 导入教程。",
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
    "shortAnswer": "iOS 主流选择是 Shadowrocket，需要境外 App Store 账户购买。Stash 和 Quantumult X 同样可用，具体看服务商提供哪种导入格式的教程。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 51,
    "slug": "windows-pc-how-to-use-airport",
    "question": "Windows 电脑怎么用机场？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Windows 用户通常使用 Clash Verge Rev 或 v2rayN，购买套餐后复制订阅链接，导入客户端并开启系统代理即可使用。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 52,
    "slug": "mac-pc-how-to-use-airport",
    "question": "Mac 电脑怎么用机场？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Mac 用户可以使用 Clash Verge Rev（支持 Apple Silicon）或 Surge 等工具，导入订阅链接并在设置中开启系统代理或 TUN 模式即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 53,
    "slug": "airport-node-what-is",
    "question": "机场节点是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "节点是服务商部署在海外的代理服务器，客户端连接后将流量通过该服务器转发，从而访问被屏蔽的内容，每个节点对应不同地区或性能。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 54,
    "slug": "airport-node-latency-how-to-check",
    "question": "机场节点延迟怎么看？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "延迟（ms）反映节点响应速度，通常越低越好，适合游戏和实时通讯。在客户端的节点测速功能中可以看到，但实际体验还受带宽和丢包影响。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 55,
    "slug": "airport-node-speed-how-to-check",
    "question": "机场节点速度怎么看？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "节点速度通常指带宽吞吐量，可用 Speedtest 等工具测试。但单次测速仅供参考，晚高峰实际速度可能和测速结果差距较大。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 56,
    "slug": "are-more-airport-nodes-better",
    "question": "机场节点越多越好吗？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "不是。节点数量多不等于稳定或快速，更重要的是节点所在地区是否符合需求、线路质量和服务器带宽是否充足。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 57,
    "slug": "airport-node-how-to-choose",
    "question": "机场节点地区怎么选？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "选节点地区主要看使用目的：访问美区内容选美国，看 Netflix 日本区选日本，游戏加速选离目标服务器最近的地区，无特殊需求选延迟最低的。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 58,
    "slug": "hk-node-scenario",
    "question": "香港节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "香港节点延迟极低，适合需要低延迟的游戏和实时业务，但受大带宽用户共享影响，晚高峰可能拥挤；也适合访问部分亚太区内容。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 59,
    "slug": "tw-node-scenario",
    "question": "台湾节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "台湾节点延迟低、带宽通常较充足，适合访问台湾地区的内容服务（如动画疯、台区 Netflix），以及对东亚低延迟有需求的场景。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 60,
    "slug": "jp-node-scenario",
    "question": "日本节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "日本节点带宽大、延迟适中，适合观看日本流媒体、下载大文件，以及对亚太地区连接质量有要求的使用场景。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 61,
    "slug": "sg-node-scenario",
    "question": "新加坡节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "新加坡节点延迟低、网络基础设施好，适合跨境工作、游戏和访问东南亚地区服务，也是许多 AI 工具支持的地区之一。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 62,
    "slug": "us-node-scenario",
    "question": "美国节点适合什么场景？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "美国节点带宽大、地区内容多，适合解锁北美流媒体（Netflix、Hulu）、使用 ChatGPT 等 AI 工具，以及大文件下载场景。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 63,
    "slug": "is-peak-hour-slowdown-normal",
    "question": "机场晚高峰卡顿正常吗？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "晚高峰（20:00-23:00）国际出口带宽紧张，如果服务商没有专线或带宽冗余不足，卡顿是正常现象，可以尝试切换冷门地区节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 64,
    "slug": "how-to-fix-peak-hour-slowdown",
    "question": "机场晚高峰卡怎么办？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "尝试切换到延迟更低或使用率更少的节点（如台湾、日本的低负载节点），或联系服务商确认是否有专线套餐可以应对高峰时段。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 65,
    "slug": "why-airport-is-slower-at-night",
    "question": "机场为什么白天快晚上慢？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "白天国际出口带宽较为宽裕，而晚间大家都在集中看视频和玩游戏，导致公网链路拥堵。专线网络受此影响较小，而普通直连线路则波动明显。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 66,
    "slug": "airport-speed-what-is",
    "question": "机场速度慢是什么原因？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "可能原因包括：节点带宽超售、所选节点离目标服务器较远、本地网络质量差或晚高峰公网拥堵，可依次排查排除。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 67,
    "slug": "airport-cannot-connect-what-is",
    "question": "机场连不上是什么原因？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "可能原因：套餐过期、流量用完、订阅未更新、本地网络异常或 DNS 污染。先登录服务商后台确认账号状态，再检查客户端设置。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 68,
    "slug": "airport-node-solution",
    "question": "机场节点全红怎么办？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "节点全红通常不是所有服务器都挂了，更可能是订阅未更新（旧节点已失效）、套餐到期，或本地 DNS/网络异常导致无法连接。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 69,
    "slug": "airport-timeout-solution",
    "question": "机场显示超时怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "先更新订阅获取最新节点，确认套餐未到期，再检查系统时间是否准确（V2ray 类协议对时间差敏感），最后尝试切换其他节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 70,
    "slug": "shadowrocket-solution",
    "question": "Shadowrocket 导入订阅失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "检查复制的链接是否完整，关闭其他代理软件或 VPN 后重试，若依然失败则返回服务商后台重新复制链接，或换用移动网络尝试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 71,
    "slug": "v2rayn-solution",
    "question": "v2rayN 连接失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "可能是订阅未加载成功或系统时间误差导致协议握手失败。请确认订阅已成功更新、系统时间准确，并检查代理模式是否正确开启。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 72,
    "slug": "airport-traffic-solution",
    "question": "机场流量用完了怎么办？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "可以在服务商后台购买补充流量包，或等下一个账期自动重置（如为月付套餐）；也可以购买按量计费套餐作为临时补充，避免中断使用。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 73,
    "slug": "airport-traffic",
    "question": "机场流量每月会重置吗？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "大多数按月计费套餐会在账期（如每月特定日期）自动重置，具体重置时间以购买日期和服务商规则为准，可在后台查看下次重置时间。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 74,
    "slug": "airport-traffic-multiplier",
    "question": "机场流量倍率怎么计算？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "流量倍率是指消耗该节点流量时的计算乘数。倍率 2 表示使用 1GB 实际消耗 2GB 额度，高倍率通常对应高带宽节点，购买前查看套餐说明。",
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
    "shortAnswer": "如果只是日常网页浏览和通讯，100GB 通常够用；但每天看高清视频或频繁下载大文件，100GB 可能撑不了一个月，建议估算自己的实际用量。",
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
    "shortAnswer": "按量计费（流量不过期）套餐最适合，用多少买多少；小额月付基础套餐也可以，但注意月底流量不够用时不会自动补充，需手动购买。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 77,
    "slug": "traffic-airport-muhg",
    "question": "大流量用户适合买什么机场？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "大流量用户应优先关注月流量额度、是否有专线保障晚高峰速度，以及是否有无限流量或超大流量的年付套餐，价格通常按流量阶梯计算。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 78,
    "slug": "airport-which",
    "question": "按量计费机场适合哪些人？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "按量计费适合使用频率不固定、偶尔才需要代理的用户，以及作为备用节点的补充。不适合每天高强度使用的用户，成本会较高。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 79,
    "slug": "airport-what-is",
    "question": "不限时机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "不限时套餐指流量没有过期日期，直到消耗完毕前可以持续使用。适合使用频率低、不确定何时需要用的用户。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 80,
    "slug": "airport-monthly-airport",
    "question": "不限时机场和月付机场哪个好？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "不限时套餐适合使用频率低、断断续续用的用户；月付适合使用稳定、每月有固定用量的用户。两者各有适用场景，选择取决于自己的使用习惯。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 81,
    "slug": "monthly-airport-which",
    "question": "月付机场适合哪些用户？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "月付适合新用户测试（风险低）、需求不稳定的用户，以及不确定某个服务商是否可靠时的初次购买，不建议一开始就买年付。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 82,
    "slug": "quarterly-airport",
    "question": "季付机场划算吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "通常比月付便宜，适合已通过月付测试确认满意的用户。但季付依然存在商家关停风险，不建议第一次购买就冲季付。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 83,
    "slug": "yearly-airport",
    "question": "年付机场值得买吗？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "如果已通过月付测试确认该服务商稳定可靠，年付价格通常有一定折扣，值得购买。但仍有跑路风险，年付金额越高风险越大，需自行判断。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 84,
    "slug": "is-it-safe-to-use-airport-long-term",
    "question": "机场可以长期使用吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "可以长期使用，但建议不要一次性购买超过一年。服务商能否持续运营无法保证，月付或季付的风险相对更低。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 85,
    "slug": "airport-vqyrva",
    "question": "低价机场有什么风险？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "低价服务商可能存在带宽超售、晚高峰卡顿、节点稳定性差等问题，跑路风险也相对较高。购买前先用月付测试，不要一次性购买年付。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 86,
    "slug": "cheap-airport-recommend-which",
    "question": "便宜机场推荐看哪些指标？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "应关注月付价格、流量大小、线路类型（直连/中转/专线）、可用地区是否符合需求，以及是否提供月付测试选项。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 87,
    "slug": "cost-effective-airport",
    "question": "高性价比机场怎么判断？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "通常是指将国内某些服务出口绕出，或将境外流量引导回国内，实现反向访问。具体实现方式因服务商不同而有差异。",
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
    "shortAnswer": "稳定性通常看是否有 IPLC/IEPL 专线、服务商的运营年限、晚高峰节点可用率，以及是否有备用线路保障，价格是次要因素。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 89,
    "slug": "dedicated-airport-what-is",
    "question": "专线机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "专线通常指通过私有网络专用线路（如 IPLC 或 IEPL）进行流量传输，不经过普通公网，延迟更低、更稳定，价格通常高于普通中转套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 90,
    "slug": "iplc-airport-what-is",
    "question": "IPLC 机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "IPLC（International Private Leased Circuit）是一种国际专用租用线路，物理链路独立，抗干扰性强，常用于高稳定性需求的代理传输。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 91,
    "slug": "iepl-airport-what-is",
    "question": "IEPL 机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "IEPL（International Ethernet Private Line）是以太网形式的国际专线，技术实现与 IPLC 类似，延迟低、稳定性高，价格通常高于普通中转线路。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 92,
    "slug": "transit-airport-what-is",
    "question": "中转机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "中转是指在国内部署入口服务器，流量经由国内优化线路转至海外节点，比直连更稳定，延迟比直连低，价格比专线低。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 93,
    "slug": "direct-airport-what-is",
    "question": "直连机场是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "直连指客户端直接连接海外服务器，不经过国内中转节点，成本最低，但晚高峰容易受公网拥堵影响，稳定性低于中转或专线。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 94,
    "slug": "direct-airport-transit-airport-difference",
    "question": "直连机场和中转机场有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "直连成本低但稳定性受公网影响大；中转加入国内优化线路后延迟更低、更稳定，但价格较高。两者适用不同的预算和使用场景。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 95,
    "slug": "dedicated-airport-why-expensive",
    "question": "专线机场为什么更贵？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "专线使用私有传输链路，不走普通公网，稳定性高且延迟低，建设和维护成本远高于普通中转，因此套餐价格通常更贵。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 96,
    "slug": "dedicated-airport",
    "question": "普通用户有必要买专线机场吗？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "如果日常只用于浏览网页或偶发使用，普通中转线路通常够用。重度游戏、视频会议或对低延迟要求高的用户才更有必要考虑专线。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 97,
    "slug": "airport-unlock-netflix",
    "question": "机场能解锁 Netflix 吗？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "部分服务商的特定节点支持 Netflix 解锁，但不是所有机场都支持，且解锁能力会随 IP 状态变化。购买前确认服务商是否明确说明提供流媒体解锁节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 98,
    "slug": "airport-unlock-disney",
    "question": "机场能解锁 Disney+ 吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "在具体配置时，目标网站（如 Netflix/ChatGPT）的风控机制在不断升级，理解这一点，能帮你避开市面上 80% 的营销陷阱。",
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
    "shortAnswer": "YouTube 通常可以正常访问，但速度取决于节点带宽和线路质量，4K 视频需要较大带宽。晚高峰节点拥堵时可能出现缓冲，可尝试切换节点。",
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
    "shortAnswer": "在实际操作中，优质的专线（IPLC/IEPL）能有效绕过公网拥堵，总之，没有绝对完美的网络，只有最适合自己预算的妥协。",
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
    "shortAnswer": "许多服务商提供支持 ChatGPT 的节点（通常是美日地区），但 OpenAI 对 IP 有检测机制，部分节点可能无法使用。购买前建议询问或先月付测试。",
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
    "shortAnswer": "Gemini 的地区限制较严，通常需要未被 Google 标记的节点。服务商是否支持、哪些节点有效，建议直接询问客服或参考近期用户反馈。",
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
    "shortAnswer": "Claude 对 IP 纯净度要求较高，普通节点可能被拒绝。建议选择服务商明确说明支持 Claude 访问的套餐，或使用高质量原生 IP 节点测试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 104,
    "slug": "chatgpt-airport-recommend-how-to-choose",
    "question": "ChatGPT 机场推荐怎么选？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "优先选择服务商明确标注 AI 解锁或提供原生 IP 节点的服务，确认支持的地区（如美国、日本），购买前以服务商当前说明为准。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 105,
    "slug": "streaming-unlock-airport-how-to-choose",
    "question": "流媒体解锁机场怎么选？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "应优先选择服务商明确说明提供流媒体解锁节点，并确认支持的平台（Netflix、Disney+ 等）和地区，购买前以服务商当前后台说明为准。",
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
    "shortAnswer": "关注节点是否能稳定解锁（不只是偶尔成功）、地区库是否符合需求，以及服务商对 Netflix 解锁的维护是否及时，可先月付测试验证。",
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
    "shortAnswer": "TikTok 对 IP 纯净度要求较高，需确认服务商是否明确标注支持 TikTok 或提供干净出口 IP，而不是依赖通用节点碰运气。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 108,
    "slug": "airport-ip-what-is",
    "question": "机场原生 IP 是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "原生 IP 通常指注册地与机房所在地一致的 IP，未被平台标记为数据中心或代理，能减少被流媒体、AI 平台风控的概率。",
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
    "shortAnswer": "原生 IP 能够有效绕过各种平台（如流媒体、社交媒体、AI 工具、跨境电商）的风控与地区限制，降低账号被封禁或被强制验证的风险。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 110,
    "slug": "airport-ip-what-is-sgsa",
    "question": "机场住宅 IP 是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "住宅 IP 是通过真实家庭宽带分配的 IP，被各平台视为普通用户访问，风控触发率通常低于数据中心 IP，但成本较高且速度有限。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 111,
    "slug": "airport-ip-ip-difference",
    "question": "机场动态 IP 和静态 IP 有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "动态 IP 每次连接可能变化，不易被固定追踪；静态 IP 保持不变，适合需要固定地址的跨境电商账号维护，选择时依实际需求而定。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 112,
    "slug": "airport-why-node-streaming",
    "question": "机场为什么有些节点不能看流媒体？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各平台会对数据中心 IP 和已知代理 IP 进行检测，被标记的节点无法正常播放内容。服务商通常会标注哪些节点具备流媒体解锁能力。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 113,
    "slug": "airport-why-node-ai",
    "question": "机场为什么有些节点不能用 AI 工具？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "各 AI 平台（ChatGPT、Claude、Gemini）对 IP 信誉度有检测，数据中心 IP 和被大量用户共用的节点容易被拒绝，这是平台检测机制造成的。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 114,
    "slug": "airport-coupon",
    "question": "机场优惠码在哪里找？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "通常可以在服务商官网公告、官方 Telegram 群组、节日促销邮件，以及本站的推荐评测页面中找到最新的优惠码。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 115,
    "slug": "airport-promo-code-how-to-use",
    "question": "机场折扣码怎么用？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "在服务商结账页面找到优惠码输入框，填入后点击应用，确认折扣生效后再支付，优惠码通常有使用条件，请以页面说明为准。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 116,
    "slug": "are-airport-promotions-reliable",
    "question": "机场优惠活动靠谱吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "正规服务商的节假日促销通常是真实的，但需警惕用极低价格诱导购买多年套餐的操作，这可能是跑路前的大量变现行为。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 117,
    "slug": "free-trial-airport-security",
    "question": "免费试用机场安全吗？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "大服务商的免费试用通常是安全的，旨在让用户测试线路质量。但不要在不知名网站输入个人信息或绑定主卡，注意试用结束后的自动续费规则。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 118,
    "slug": "trial-airport",
    "question": "一元试用机场值得买吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "一元试用可以用低成本验证线路速度和连通性，确认满意后再购买正式套餐是合理的做法。但应注意绑定支付方式时的续费规则。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 119,
    "slug": "airport-trial",
    "question": "机场试用应该测试什么？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "主要风险是泄露你的使用行为和出口 IP；对于有安全意识的用户，建议评估服务商的隐私政策，并避免在敏感场景下使用低信誉服务商。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 120,
    "slug": "what-to-know-before-buying-airport",
    "question": "机场购买前要注意什么？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "明确使用场景和预算，确认服务商支持你所用的客户端，查看套餐说明和设备数限制，坚持先月付测试，不要因价格优惠直接购买年付。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 121,
    "slug": "airport-run-away-what-is",
    "question": "机场跑路是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "跑路指服务商停止运营，关闭官网和服务器，停止响应用户请求，已付款的套餐无法继续使用，这是购买机场服务时最主要的风险之一。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 122,
    "slug": "airport-run-away",
    "question": "怎么判断机场会不会跑路？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "无法百分百预测，但高危信号包括：域名频繁更换、节点长时间大量失效无修复、疯狂推销极低价多年套餐、官方渠道突然全部禁言。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 123,
    "slug": "airport-cannot-open-solution",
    "question": "机场官网打不开怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "可能是域名被封锁或服务器临时故障。尝试换网络（4G/5G）、换 DNS（如 8.8.8.8）、访问备用官网，或在官方 Telegram 频道查看公告。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 124,
    "slug": "what-to-do-if-airport-support-unreachable",
    "question": "机场客服联系不上怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "如果只是单次访问困难，多半是 DNS 问题或节点未连接；如果长期都打不开，建议更换节点地区、检查代理规则是否将该网站排除在外。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 125,
    "slug": "what-to-do-if-subscription-stops-working",
    "question": "机场订阅突然不能用了怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "先登录后台确认套餐状态，再在客户端中手动更新订阅；如官网也无法访问，到官方 Telegram 频道确认服务商是否发布了故障或域名更换公告。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 126,
    "slug": "airport-solution-rccu",
    "question": "机场被封了怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "节点被封通常是服务商的出口 IP 被针对性封锁。服务商通常会在几小时至几天内更换 IP，可尝试更新订阅获取新节点，或临时使用备用服务。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 127,
    "slug": "airport-solution-yhsm",
    "question": "机场换域名怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "服务商换域名是为应对封锁，你需要通过官方 Telegram 频道或注册邮件获取最新备用域名，登录后台重新复制订阅链接更新即可。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 128,
    "slug": "where-to-find-airport-announcements",
    "question": "机场公告在哪里看？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "公告通常发布在服务商官网用户中心首页、绑定的官方 Telegram 频道，或通过注册邮箱发送，建议关注官方频道以获取第一手信息。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 129,
    "slug": "why-you-need-backup-airport-website",
    "question": "机场备用官网有什么用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "备用官网（防失联地址）用于在主域名被封时，仍能让用户登录后台更新订阅或查看公告，是避免彻底失联的重要保障。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 130,
    "slug": "what-is-airport-directory",
    "question": "机场导航是什么？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "机场导航是收录代理服务商官网地址和基本信息的目录站，帮助用户在主域名被封时找到备用入口或新的服务商，是辅助找站的工具。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 131,
    "slug": "ladder-what-is",
    "question": "梯子导航是什么？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "梯子导航和机场导航功能类似，收录代理工具和服务商资源，侧重点可能更广，包括客户端下载、教程和服务商列表等内容。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 132,
    "slug": "are-airport-rankings-reliable",
    "question": "机场排行榜靠谱吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "排行榜有参考价值，但要关注榜单的更新时间、评分依据是否透明，以及是否存在推广关系，不能只看排名顺序做决定。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 133,
    "slug": "is-airport-tier-list-trustworthy",
    "question": "机场天梯榜靠谱吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "天梯榜反映历史口碑，可作为筛选参考，但服务商表现会变化，应结合近期用户评价和自己的月付测试结果做综合判断。",
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
    "shortAnswer": "建议综合看多个不同来源的榜单，关注其评测方法、更新时间和是否透明说明推广关系，不能依赖单一榜单做购买决定。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 135,
    "slug": "how-to-evaluate-airport-recommendations",
    "question": "机场推荐榜单应该看哪些维度？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "优质榜单应基于实测速度、线路类型、流媒体解锁、价格合理性和历史运营时长等维度，而非只依据赞助或流量排名。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 136,
    "slug": "are-airport-reviews-credible",
    "question": "机场评测文章可信吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "测评文章可以作为参考，但要核对文章发布时间、测试条件、是否有推广关系，并与服务商当前套餐页交叉验证，避免依赖过时数据。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 137,
    "slug": "airport-recommend",
    "question": "机场推荐知乎可信吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "知乎回答质量差异大，有真实经验也有推广内容，建议查看回答日期、是否披露推广关系，并与服务商当前官网信息交叉核对。",
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
    "shortAnswer": "GitHub 上的推荐有开源性，但也混有大量 SEO 导流链接，应核对更新时间、贡献者背景和数据来源，不能单一依赖某个仓库。",
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
    "shortAnswer": "Reddit 用户讨论较真实，但用户分布全球，对大陆特定网络环境的推荐不一定适用，需甄别回答者的使用场景是否与你相符。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 140,
    "slug": "airport-speed-stable",
    "question": "机场评测应该看速度还是稳定性？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "两者都要关注，但长期使用通常更应重视稳定性。单次测速只反映某一时刻的速度，还需观察晚高峰波动、断线频率和本地网络下的实际体验。",
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
    "shortAnswer": "价格决定预算门槛，线路类型只是选购时的参考字段之一，不能单独代表实际性能。应结合预算、付款周期、公开线路资料，以及自己网络环境下的实际体验综合判断。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 142,
    "slug": "airport-recommend-which-fovg",
    "question": "机场推荐里常见的坑有哪些？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "常见坑包括：受超低年付价格吸引导致跑路损失、轻信测速图忽略晚高峰表现、选了协议不兼容常用客户端的服务商。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 143,
    "slug": "airport-which-zugo",
    "question": "机场新手最容易踩哪些坑？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "新手最常见的坑：为省钱一次购买年付结果商家跑路、不会配置客户端以为节点全挂、选了不支持常用客户端的服务商。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 144,
    "slug": "airport-plan-how-to-check",
    "question": "机场套餐名字怎么看？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "套餐名通常包含流量额度（如 100G）、计费周期（月付/年付）、线路类型（专线/中转）和设备数，理解这些字段可以快速比较不同套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 145,
    "slug": "airport-device-what-is",
    "question": "机场在线设备数是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "在线设备数指同一时间允许连接到该账号节点的客户端数量，超过限制可能被服务商系统自动断开，购买前应查看套餐说明。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 146,
    "slug": "airport-limit-device-count",
    "question": "机场限制设备数量吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "设备数限制因服务商和套餐而不同，有些允许 3 台，有些允许更多，也有不限制的套餐，购买前查看套餐说明是唯一准确的方式。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 147,
    "slug": "can-multiple-people-share-an-airport",
    "question": "机场可以多人共用吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "是否可以多人共用取决于服务商的设备数限制和共享规则，有些套餐允许家庭共享，有些则会因设备超限触发封号，购买前查看套餐说明。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 148,
    "slug": "airport-security",
    "question": "机场共享账号安全吗？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "非常不建议，超出设备数会触发封号，且账号可能暴露订阅配置。是否允许家庭共享，应以服务商的套餐说明和账号规则为准。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 149,
    "slug": "why-airport-account-banned",
    "question": "机场账号被封是什么原因？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "常见原因包括：同时在线设备数超出限制、订阅链接被多人使用、使用节点进行违规操作，或触发了服务商的防滥用检测规则。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 150,
    "slug": "can-i-share-my-subscription-link",
    "question": "机场订阅链接可以分享给别人吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "不建议随意分享。订阅链接包含你的账号配置，泄露后他人可用你的流量；是否允许家庭共享以服务商的账号和设备规则为准。",
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
    "shortAnswer": "需要确认服务商是否提供 Clash/Mihomo 可读取的订阅格式，而不是仅凭机场这个名称判断，购买前以服务商当前帮助文档为准。",
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
    "shortAnswer": "Mihomo（原 Clash Meta）是否能够直接使用，取决于服务商提供的订阅格式和节点协议。购买前查看其当前导入教程或向客服确认。",
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
    "shortAnswer": "Mihomo（原 Clash Meta）的兼容性较广，大多数主流协议都支持，购买前确认服务商是否提供 Mihomo/Clash 格式的订阅链接或配置文件。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 154,
    "slug": "does-airport-support-shadowrocket",
    "question": "机场是否支持 Shadowrocket？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "购买前确认服务商是否提供 Shadowrocket 一键导入链接或 SS/Vmess/Trojan 协议支持，不是所有服务商都明确标注了 iOS 兼容说明。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 155,
    "slug": "airport-quantumult-x-dser",
    "question": "机场是否支持 Quantumult X？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "购买前确认服务商是否提供 Quantumult X 格式的节点资源，或其订阅格式是否可通过 Quantumult X 的引用功能正常解析。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 156,
    "slug": "airport-surge",
    "question": "机场是否支持 Surge？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Surge 的订阅格式较特殊，建议询问服务商是否提供 Surge 托管配置，或通过第三方工具将通用订阅转换为 Surge 可用格式后导入。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 157,
    "slug": "does-airport-support-stash",
    "question": "机场是否支持 Stash？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Stash 原生支持 Clash 格式订阅，确认服务商提供标准 Clash YAML 格式即可，导入方式与 Clash 客户端基本相同。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 158,
    "slug": "does-airport-support-v2rayn",
    "question": "机场是否支持 v2rayN？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "确认服务商是否提供 v2rayN 支持的格式（Vmess、Trojan 等），或通用订阅链接能否被 v2rayN 正常识别并更新。",
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
    "shortAnswer": "v2rayNG 支持大多数主流协议，购买前确认服务商提供的订阅格式是否能被 v2rayNG 正常解析，或询问官方是否有 Android 使用教程。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 160,
    "slug": "airport-sing-box-ficg",
    "question": "机场是否支持 sing-box？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "sing-box 的配置格式较特殊，购买前确认服务商是否提供 sing-box 格式的配置文件或订阅链接，不是所有机场都支持 sing-box 格式输出。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 161,
    "slug": "airport-hiddify",
    "question": "机场是否支持 Hiddify？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Hiddify 支持多种协议，购买前确认服务商是否提供通用格式订阅链接（V2ray/Xray），并查看服务商帮助页面的 Hiddify 导入教程。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 162,
    "slug": "airport-difference",
    "question": "机场和代理有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "代理是一种网络转发技术，机场则是将代理协议商业化、提供多节点订阅套餐的服务商，可以把机场理解为代理服务的集成销售方。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 163,
    "slug": "airport-node-difference",
    "question": "机场和节点订阅有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "机场指提供订阅服务的服务商；节点订阅则是你购买后获得的配置资源本身，可以通过链接导入客户端使用，两者是包含关系。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 164,
    "slug": "relationship-between-subscription-and-client",
    "question": "机场订阅和代理软件是什么关系？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "服务商负责提供节点服务器和订阅链接；代理软件（如 Clash、Shadowrocket）安装在你的设备上，负责读取链接并接管本地网络流量。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 165,
    "slug": "do-i-need-to-build-airport-myself",
    "question": "机场需要自己搭建吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "不需要自己搭建。机场服务已包含服务器和节点配置，用户只需购买套餐并在客户端中导入订阅链接，不需要有任何技术基础。",
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
    "shortAnswer": "自建节点适合有 Linux 基础、注重隐私或需要独享 IP 的用户；买现成服务更适合需要多地区节点、不愿折腾运维的普通用户。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 167,
    "slug": "airport-foreign-trade",
    "question": "机场适合外贸用户吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "可以。外贸用户通常需要访问 Google 工作套件、WhatsApp 等工具，选择时注意节点稳定性和 IP 纯净度，以免影响账号正常使用。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 168,
    "slug": "is-airport-suitable-for-international-students",
    "question": "机场适合留学生吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "可以。留学生可以用于回国访问国内内容，或在出国前配置好设备保持与家人的联系，建议选支持多设备的套餐。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 169,
    "slug": "is-airport-good-for-programmers",
    "question": "机场适合程序员吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "可以。程序员常需访问 GitHub、文档资源和拉取依赖包，建议选速度稳定、带宽充足的服务，以免影响工作效率。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 170,
    "slug": "is-airport-suitable-for-cross-border-ecommerce",
    "question": "机场适合跨境电商吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "跨境电商对 IP 纯净度和一致性要求很高，普通大流量节点可能触发平台风控。建议提前向服务商确认 IP 类型，并在实际操作前测试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 171,
    "slug": "is-airport-good-for-short-videos",
    "question": "机场适合刷短视频吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "可以用于访问 TikTok 等短视频平台，但平台对 IP 有检测机制，需要服务商节点本身未被标记。建议在购买前确认服务商是否明确说明支持。",
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
    "shortAnswer": "可以，但流媒体解锁能力因服务商、节点地区和 IP 状态不同而有差异。购买前确认是否提供解锁说明，或先以月付小流量测试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 173,
    "slug": "airport-gaming",
    "question": "机场适合打游戏吗？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "可以，但游戏对延迟和稳定性要求高，建议选有专线线路的服务商，并在实际游戏中测试节点表现，而不是只看测速图。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 174,
    "slug": "gaming-airport",
    "question": "游戏加速能用机场吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "可以，但不建议长期作为主要上网方式，应根据需求选择套餐，并了解流量限制和设备数规定，避免超额触发限制。",
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
    "shortAnswer": "不一定。低延迟表示到达节点的速度快，但如果节点带宽有限或被超售，下载速度依然会很慢。实际体验还取决于带宽和丢包情况。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 176,
    "slug": "does-fast-speed-mean-stable",
    "question": "机场速度快就一定稳定吗？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "速度快说明带宽足够，但稳定性还要看晚高峰表现、丢包率和断线频率。单次测速高不代表全天候使用都流畅。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 177,
    "slug": "airport-node-packet-loss-what-is",
    "question": "机场节点丢包是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "丢包是指发出的数据包未能到达目标，通常表现为网页加载卡住、视频频繁缓冲或游戏掉帧，丢包率高通常意味着线路不稳定。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 178,
    "slug": "airport-speedtest-how-to-check",
    "question": "机场测速怎么看才准确？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "最准确的方式是在晚高峰时段观察实际使用体验（如 YouTube 4K 的加载速度），单次测速图只能反映某一时刻的峰值，不能代表日常表现。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 179,
    "slug": "airport-speedtest",
    "question": "机场测速软件可信吗？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "测速软件可以作为参考，但单次结果受测试时间、本地网络和服务器状态影响，不能代表全天候的实际体验，尤其是晚高峰时段。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 180,
    "slug": "airport-speedtest-why",
    "question": "机场测速结果和实际体验为什么不一样？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "测速工具通常使用多线程测试最大带宽，而实际使用（如浏览、视频）是单线程或特定协议请求，两者测量对象不同，结果差距是正常的。",
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
    "shortAnswer": "推荐页面应列出月付价格基准、流量额度、线路类型、设备数限制等核心参数对比，帮助用户做横向比较，避免只靠广告标语判断。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 182,
    "slug": "what-to-look-for-on-brand-page",
    "question": "机场品牌页应该看哪些信息？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "品牌页应提供成立时长、线路类型、套餐价格结构、支持的客户端、客服联系方式等实际可核对信息，避免只堆营销语言。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 183,
    "slug": "how-to-identify-fake-airport-website",
    "question": "机场官网入口怎么辨别真假？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "不要轻信搜索引擎广告结果，建议通过官方 Telegram 频道、原始注册邮件或可信导航站核对当前官网地址。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 184,
    "slug": "how-to-save-backup-addresses",
    "question": "机场备用地址怎么保存？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "机场 Emoji 常用于社区帖子和 Telegram 中表示节点服务，属于用户约定俗成的记号，没有行业标准用法。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 185,
    "slug": "precautions-when-using-airport",
    "question": "机场使用过程中需要注意什么？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "比较表应基于可核实的参数，如月付价格、流量额度、线路类型和设备数，不要加入无法核实的稳定性评分或主观描述。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 186,
    "slug": "how-to-reduce-long-term-risk",
    "question": "机场长期使用怎么降低风险？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "品牌评分目前没有行业统一标准。如果网站展示评分，应说明评分依据，否则不具参考价值，用户更应关注可核实的实际参数。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 187,
    "slug": "airport-recommend-2026",
    "question": "机场推荐 2026 应该怎么更新？",
    "category": "客户端",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "更新推荐需要移除已跑路品牌，核对套餐价格是否变化，重新评估晚高峰稳定性，并补充经测试的新品牌，不能只靠旧数据维护。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 188,
    "slug": "airport-why-bjhm",
    "question": "机场相关内容为什么需要经常更新？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "机场问答页应围绕用户实际遇到的问题，包括如何导入订阅、常见故障排查、套餐选择逻辑、客户端兼容性等，避免堆砌关键词。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 189,
    "slug": "brand-keyword-landing-page-guide",
    "question": "机场品牌词落地页应该写哪些问题？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "落地页应说明该品牌的核心套餐价格、线路类型、支持的客户端、购买方式和备用官网，帮助用户快速判断是否适合自己。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 190,
    "slug": "airport-recommend-what-is",
    "question": "机场替代推荐是什么意思？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "通常指当某个服务商跑路或停服后，给出功能相似的备选服务商建议，供用户平滑切换，而不是只说换一家。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 191,
    "slug": "airport-cannot-open",
    "question": "某个机场打不开时可以换什么？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "如果是节点被封，可先尝试更新订阅换节点；如果是服务商暂时宕机，可临时启用备用订阅；建议日常维护一个月付备用服务商。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 192,
    "slug": "what-to-do-after-airport-runs-away",
    "question": "某个机场跑路后怎么处理？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "跑路后先停止使用该服务商，更换设备上的所有订阅链接，并在可信渠道找到备用服务商快速恢复上网，之后吸取教训控制单次充值金额。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 193,
    "slug": "what-should-airport-directory-include",
    "question": "机场导航页应该收录哪些内容？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "机场导航页应收录各服务商的最新可用官网和备用地址，帮助用户在主域名被封时找到服务入口，同时提供基础评测参考。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 194,
    "slug": "ladder-recommend-which",
    "question": "梯子推荐页应该解决哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "梯子推荐页应解答什么是梯子、如何选择、各类工具的区别，以及购买注意事项，并说明推荐与广告的关系，帮助用户做自主判断。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 195,
    "slug": "scientific-surfing-recommend",
    "question": "科学上网工具推荐页应该写什么？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "推荐页应说明工具适用平台、配置难度、订阅方式和常见兼容问题，区分代理软件本身与网络服务的区别，避免只堆下载链接。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 196,
    "slug": "magic-surfing-recommend",
    "question": "魔法上网工具推荐页应该写什么？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "内容应重点介绍各平台主流代理客户端的特点和配置方式，说明软件本身不含免费节点，并提供基本安装与导入教程。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 197,
    "slug": "airport-coupon-which",
    "question": "机场优惠码页面应该写哪些问题？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "应说明优惠码适用范围、有效期、是否限新用户，以及最终价格以服务商结算页为准，避免用户因促销信息产生误解。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 198,
    "slug": "free-trial-airport-which",
    "question": "免费试用机场页面应该写哪些问题？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "应说明试用时长、流量限制、是否需要绑定支付方式，以及试用结束后的自动续费规则，帮助用户在了解条件后再决定。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 199,
    "slug": "pay-as-you-go-airport-guide",
    "question": "按量计费机场页面应该写哪些问题？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "应解释按量计费的实际规则（流量不过期，用完再充）、适合人群，以及余额在服务商关闭时可能无法退款的风险，帮助用户理性决策。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 200,
    "slug": "cheap-airport-recommendation-guide",
    "question": "便宜机场推荐页面应该写哪些问题？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "便宜推荐页应说明低价服务可能的局限（晚高峰稳定性、无专线保障），建议月付测试，并以可核实的套餐数据为基础，避免只展示最低价排行。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 201,
    "slug": "stable-airport-recommend-which",
    "question": "稳定机场推荐页面应该写哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "稳定性推荐页应说明稳定性难以单次测速判断的原因，列出可观察指标（如晚高峰波动、丢包频率），以及建议用户先试用再决定。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 202,
    "slug": "dedicated-airport-recommend-which",
    "question": "专线机场推荐页面应该写哪些问题？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "应解释专线的技术优势（低延迟、高稳定性）和使用场景，说明为何通常比普通中转贵，并帮助用户判断是否真的需要专线。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 203,
    "slug": "clash-airport-recommend-which",
    "question": "Clash 机场推荐页面应该写哪些问题？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "应涵盖如何确认服务商支持 Clash/Mihomo 格式、一键导入方法、常见配置问题，以及如何判断订阅链接是否兼容。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 204,
    "slug": "shadowrocket-airport-recommend-which",
    "question": "Shadowrocket 机场推荐页面应该写哪些问题？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "应包含如何确认服务商支持 Shadowrocket 导入格式、订阅类型的区别、常见导入失败原因，以及 iOS 系统的特殊注意事项。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 205,
    "slug": "2026-ladder-recommend-which",
    "question": "2026 梯子推荐页面应该写哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "梯子推荐页面应解答当前主流代理工具类型、各客户端的区别与适用场景，以及如何结合网络需求选择合适的工具和订阅服务。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 206,
    "slug": "2026-airport-recommend-which",
    "question": "2026 机场推荐页面应该写哪些问题？",
    "category": "机场选择",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "应提供按场景分类的选购逻辑（流媒体/游戏/日常/AI），列出关键参数对比，并说明 2026 年的线路趋势和常见购买误区。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 207,
    "slug": "why-clash-node-timeout",
    "question": "为什么 Clash 节点全部超时？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "可能是套餐到期、流量用完、订阅链接失效、系统时间不准，或本地网络 DNS 异常。按这个顺序逐一检查，通常能快速定位原因。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 208,
    "slug": "clash-solution",
    "question": "Clash 订阅更新失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "先确认订阅链接是否有效，暂时关闭系统代理后重新尝试更新，如仍失败则返回服务商后台重新复制备用订阅链接，并检查本地 DNS。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 209,
    "slug": "clash-update-subscription-error",
    "question": "Clash 更新订阅提示错误怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "提示错误通常是 URL 失效或当前网络无法访问订阅服务器。先关闭现有代理连接，换用直连网络，或重新从服务商后台获取最新订阅地址。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 210,
    "slug": "clash-solution-hhzx",
    "question": "Clash 开了代理还是上不了网怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "先检查是否开启了系统代理，再尝试切换到全局（Global）模式排除规则问题，如还不行可开启 TUN 模式让 Clash 接管全部流量。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 211,
    "slug": "clash-verge-node-solution",
    "question": "Clash Verge 没有节点怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "可能是订阅没有成功下载，或配置文件为空。检查订阅链接是否有效，在 Profiles 页面重新导入，下载成功后选中配置即可出现节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 212,
    "slug": "clash-verge-solution",
    "question": "Clash Verge 导入订阅没有反应怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "可能是配置文件格式不兼容或订阅下载失败。检查链接是否为标准 Clash YAML 格式，尝试在 Profiles 页面删除后重新添加，或重启内核。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 213,
    "slug": "clash-verge-mihomo-difference",
    "question": "Clash Verge 和 Mihomo 有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Clash Verge Rev 是一个图形界面（GUI）客户端，Mihomo 是其底层运行的代理内核（原名 Clash Meta），二者是界面与引擎的关系。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 214,
    "slug": "shadowrocket-node-cannot-connect-solution",
    "question": "Shadowrocket 有节点但是连不上怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "测试节点可连通但连接失败可能是协议参数错误或节点已限速。尝试切换其他节点，确认订阅已更新至最新版本，再检查 TUN 模式是否冲突。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 215,
    "slug": "shadowrocket-update-subscription-failed",
    "question": "Shadowrocket 更新订阅失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "确认链接是否有效，关闭 VPN 后右滑订阅点击更新，若仍失败则登录后台重新复制订阅链接，并检查手机是否有其他代理软件干扰。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 216,
    "slug": "shadowrocket-url-solution",
    "question": "Shadowrocket 显示 URL 无效怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "URL 无效通常是链接复制不完整或包含多余空格，重新从服务商后台复制完整链接，粘贴时注意不要截断后再试一次。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 217,
    "slug": "why-cannot-open",
    "question": "小火箭为什么显示连接成功但打不开网页？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "连接成功只表示本地代理已启动，如打不开网页说明节点未正常工作或规则阻止了请求。建议开启全局模式后测试，或切换其他节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 218,
    "slug": "iphone-shadowrocket-solution",
    "question": "iPhone 没有 Shadowrocket 怎么办？",
    "category": "客户端",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Shadowrocket 只在非大陆区 App Store 上架，需要注册或切换到境外 Apple ID（如美区）后，在商店搜索购买，费用约 2.99 美元。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 219,
    "slug": "v2rayn-node-timeout-solution",
    "question": "v2rayN 节点全部超时怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "检查订阅是否更新成功，确认套餐未过期，查看系统时间是否准确；如以上都没问题，尝试切换协议或联系服务商确认节点状态。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 220,
    "slug": "v2rayn-update-subscription-failed",
    "question": "v2rayN 更新订阅失败怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "检查网络是否能访问订阅域名（可先关闭代理），确认 v2rayN 中的订阅地址没有被修改，尝试重新从后台复制最新链接替换原有地址。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 221,
    "slug": "v2rayn-node-cannot-open-solution",
    "question": "v2rayN 有节点但是打不开网页怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "有节点但打不开网页通常是系统代理未开启。检查 v2rayN 托盘图标是否已勾选自动配置系统代理，并确认选中了一个具体节点（而非 auto）。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 222,
    "slug": "airport-wi-fi-mobile-traffic-solution",
    "question": "机场连 Wi-Fi 能用，手机流量不能用怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "可能是 Wi-Fi 路由器的 DNS 设置或防火墙规则与代理冲突。尝试将路由器 DNS 修改为 114.114.114.114 或 8.8.8.8，再重新测试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 223,
    "slug": "airport-mobile-traffic-wi-fi-solution",
    "question": "机场手机流量能用，Wi-Fi 不能用怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "可能是运营商对 DNS 的特殊处理或 Wi-Fi 环境的 DNS 污染。尝试在手机网络设置中将 DNS 改为 223.5.5.5 或 8.8.8.8，或切换客户端的 DNS 模式。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 224,
    "slug": "airport-dns-solution",
    "question": "机场 DNS 错误怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "先在客户端中清除 DNS 缓存或重启代理服务，检查本地 DNS 设置是否被污染，也可以尝试在客户端高级设置中切换到可靠的远程 DNS 服务。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 225,
    "slug": "airport-node-latency-why",
    "question": "机场节点延迟很低为什么还是很慢？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "低延迟说明网络往返快，但节点的实际带宽可能已被超售或限速，导致数据传输速率极低，让人感觉延迟低但就是卡。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 226,
    "slug": "why-fast-speedtest-but-slow-usage",
    "question": "机场测速很快为什么实际使用很卡？",
    "category": "线路与节点",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "测速通常使用并发多线程，而实际使用是单连接流量，晚高峰时节点带宽被多用户共享，测速结果高但实际体验卡是正常现象。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 227,
    "slug": "airport-why-cannot-open-google",
    "question": "机场连接成功为什么打不开 Google？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "Google 的检测机制较严格，节点 IP 可能已被标记。尝试切换到其他节点，或切换代理模式为全局，确认代理确实接管了对 Google 的请求。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 228,
    "slug": "airport-why-cannot-open-youtube",
    "question": "机场连接成功为什么打不开 YouTube？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "节点本身可连通但 YouTube 打不开，可能是节点 IP 已被 Google 拉黑，或代理规则将 YouTube 排除在外。尝试切换节点或开启全局模式。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 229,
    "slug": "airport-node-invalid-solution",
    "question": "机场突然全部节点失效怎么办？",
    "category": "故障排查",
    "intent": "troubleshooting",
    "priority": "P1",
    "shortAnswer": "先确认套餐状态和订阅有效性，登录服务商后台查看是否有故障公告；如果官网也打不开，到 Telegram 频道确认服务商是否发布了维护通知。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 230,
    "slug": "chatgpt-why-unsupported-country",
    "question": "ChatGPT 为什么提示 unsupported country？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Unsupported country 表示当前出口 IP 不在 OpenAI 支持地区列表内，需切换至美国、日本等支持地区节点，清除浏览器 Cookie 后重试。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 231,
    "slug": "airport-node-why-chatgpt",
    "question": "换了机场节点为什么 ChatGPT 还是不能用？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "ChatGPT 可能记住了之前的风控状态，需清除浏览器 Cookie 和缓存，切换到不同支持地区节点（如换美国其他节点），再用无痕模式重新访问。",
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
    "shortAnswer": "建议使用美国、日本、英国、新加坡等在 OpenAI 明确支持列表内的地区节点，且节点 IP 应尽量干净、未被大量用户共用。",
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
    "shortAnswer": "有一定关系。若节点 IP 被 OpenAI 检测为代理，可能触发登录状态失效。建议使用干净的固定节点，避免频繁切换 IP 造成账号异常。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 234,
    "slug": "claude-why-airport",
    "question": "Claude 为什么连机场还是不能用？",
    "category": "AI 工具",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Claude 的 IP 检测比 ChatGPT 更严，普通节点通常无法使用。建议选择服务商标注为 Claude 可用的节点，或咨询服务商哪些节点支持访问。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 235,
    "slug": "gemini-why-node-cannot-open",
    "question": "Gemini 为什么更换节点后还是打不开？",
    "category": "故障排查",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "Gemini 需要符合支持地区的干净 IP，IP 被风控后换节点可能仍无效。尝试清除浏览器 Cookie 和缓存，换用不同地区节点，并确认该地区在支持列表内。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 236,
    "slug": "netflix-solution",
    "question": "Netflix 显示代理错误怎么办？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "代理提示可能与当前出口 IP、地区识别、平台检测策略或节点状态有关。可以尝试切换服务商明确标注支持该地区流媒体的节点，并重新登录或清理应用缓存；实际可用性会随时间变化。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 237,
    "slug": "airport-node-netflix-solution",
    "question": "机场节点能打开 Netflix 但看不了内容怎么办？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "能打开但无法播放内容，通常说明节点可访问 Netflix 服务器，但该节点 IP 无法通过内容解锁验证，需更换服务商标注的解锁节点。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 238,
    "slug": "why-airport-node-netflix",
    "question": "为什么同一个机场有些节点能看 Netflix 有些不能？",
    "category": "流媒体",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "不同节点使用不同的出口 IP，平台会逐个 IP 进行解锁授权和检测，因此同一服务商下不同节点的解锁能力可能不同，这是正常现象。",
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
    "shortAnswer": "Netflix 4K 画质约消耗 7GB/小时，一个月若每天看 1 小时 4K，需要约 200GB 流量；不同画质消耗差异较大，HD 约 3GB/小时。",
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
    "shortAnswer": "YouTube 1080P 每小时约消耗 1.5~2GB，具体取决于视频码率和平台自动调整的画质设定。",
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
    "shortAnswer": "YouTube 4K 每小时约消耗 5~7GB，码率较高的视频可能更多。4K 视频同时对节点带宽要求也较高，选择大带宽节点效果更好。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 242,
    "slug": "airport-why-traffic",
    "question": "机场续费后为什么流量没有重置？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "续费只延长套餐有效期，流量重置日期取决于服务商规则（通常按账期重置而不是按续费日期），查看后台的下次重置时间确认。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 243,
    "slug": "airport-plan-why",
    "question": "机场买了套餐为什么订阅还是过期？",
    "category": "套餐与价格",
    "intent": "commercial",
    "priority": "P1",
    "shortAnswer": "续费后客户端不会自动刷新状态，需要手动在代理软件中点击更新订阅，拉取最新的有效期和节点信息，否则显示仍会是旧的过期状态。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 244,
    "slug": "airport-plan-traffic-difference",
    "question": "机场套餐到期和流量用完有什么区别？",
    "category": "新手入门",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "套餐到期是账户有效期结束，即使流量还有剩余也无法使用；流量用完是额度耗尽，即使套餐未到期也会断网，两者触发机制不同。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 245,
    "slug": "consequences-of-leaked-subscription",
    "question": "机场订阅链接泄露会有什么后果？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "订阅链接泄露后，他人可以使用你的流量额度，超出设备限制还可能导致封号。应立即登录服务商后台重置订阅链接，让旧链接失效。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 246,
    "slug": "how-many-users-per-account",
    "question": "机场账号可以同时给几个人用？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "是否允许多人共用取决于服务商的账号设备数限制和共享规则，有些套餐允许家庭共享，有些则会因设备超限触发封号，购买前确认说明。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 247,
    "slug": "airport-why-nzro",
    "question": "机场为什么会封账号？",
    "category": "安全与风险",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "常见封号原因：同时在线设备数超限、订阅被多人共用、使用节点进行违规行为（如 BT 下载），或触发了服务商的防滥用检测机制。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 248,
    "slug": "what-to-do-if-support-ignores-you",
    "question": "机场客服不回复怎么办？",
    "category": "使用场景",
    "intent": "informational",
    "priority": "P1",
    "shortAnswer": "先查看服务商是否有工单超时说明，可以尝试通过官方 Telegram 频道寻求帮助；如果长期无回复，评估是否需要启用备用服务商。",
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
    "shortAnswer": "不一定是跑路，也可能是域名被封锁或服务器故障。先到官方 Telegram 频道查公告，确认 48 小时以上无任何通知且联系方式全部中断，再做判断。",
    "relatedArticles": [],
    "relatedQuestions": []
  },
  {
    "id": 250,
    "slug": "is-tun-mode-global",
    "question": "TUN模式是全局模式吗？",
    "category": "客户端",
    "intent": "INFORMATIONAL",
    "priority": "P1",
    "shortAnswer": "TUN 和全局模式是两个不同维度。TUN 是流量接管方式（接管所有网络栈），全局/规则是路由策略（决定哪些流量走代理），可以同时开启也可分别使用。",
    "searchAliases": [
      "tun模式是全局模式吗",
      "什么是tun模式",
      "tun模式 规则模式",
      "vpn规则模式和tun模式",
      "singbox tun模式",
      "singbox_tun是什么"
    ]
  },
  {
    "id": 251,
    "slug": "clash-verge-vs-clash-for-windows",
    "question": "Clash Verge和Clash for Windows有什么区别？",
    "category": "客户端",
    "intent": "INFORMATIONAL",
    "priority": "P1",
    "shortAnswer": "Clash Verge Rev 基于 Mihomo 内核开发，功能更丰富，且持续维护；Clash for Windows 已停止更新，功能老旧，建议迁移到 Clash Verge Rev 使用。",
    "searchAliases": [
      "clash verge和clash for windows区别",
      "clash verge与clash for windows区别",
      "clash for windows 替代品",
      "clash for windows 停止维护"
    ]
  },
  {
    "id": 252,
    "slug": "sing-box-vs-clash",
    "question": "Sing-box和Clash有什么区别？",
    "category": "客户端",
    "intent": "INFORMATIONAL",
    "priority": "P1",
    "shortAnswer": "Sing-box 是更底层的通用代理内核，协议支持广泛但配置门槛较高；Clash（Mihomo）有更完善的图形界面生态，对普通用户更友好。",
    "searchAliases": [
      "sing box clash 对比",
      "clash meta 和 sing-box",
      "singbox内核和clash",
      "s-ui sing-box web panel vs v2raya 对比 客户端"
    ]
  },
  {
    "id": 253,
    "slug": "how-to-write-sing-box-config",
    "question": "Sing-box怎么编写配置？",
    "category": "客户端",
    "intent": "HOW_TO",
    "priority": "P2",
    "shortAnswer": "sing-box 的配置使用 JSON 格式，需要手动指定入站、出站、路由规则等字段。可以从官方文档或社区的模板配置入手，逐步修改适配自己的需求。",
    "searchAliases": [
      "sing-box 配置",
      "sing-box用的config.json配置如何编写",
      "如何编写或修改 sing-box 路由规则 (routing)",
      "sing-box自定义出站json",
      "修改 sing-box outbound 文件, 一步一步"
    ]
  },
  {
    "id": 254,
    "slug": "is-one-yuan-airport-good",
    "question": "一元机场好用吗？",
    "category": "选购指南",
    "intent": "INFORMATIONAL",
    "priority": "P2",
    "shortAnswer": "一元价位本身无法判断是否好用，可能是正式低价套餐、促销体验或季节性活动。购买前应确认流量额度、付款周期、线路类型、设备限制和服务条款，并优先用短周期实际测试。",
    "searchAliases": [
      "一元机场好用吗",
      "两块钱机场推荐 clash",
      "白菜机场",
      "廉价机场官网节点"
    ]
  },
  {
    "id": 255,
    "slug": "philippines-airport-node",
    "question": "菲律宾节点机场适合什么场景？",
    "category": "线路与节点",
    "intent": "INFORMATIONAL",
    "priority": "P2",
    "shortAnswer": "菲律宾节点适合在菲律宾工作、旅游或访问本地内容的用户，也适合外服游戏或业务测试场景。购买前确认服务商是否实际提供菲律宾节点。",
    "searchAliases": [
      "菲律宾节点机场",
      "菲律宾节点",
      "菲律宾加速器"
    ]
  }
];
