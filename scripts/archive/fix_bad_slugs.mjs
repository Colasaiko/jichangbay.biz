import fs from 'fs';

const slugMap = {
  "v2rayN 怎么导入机场订阅？": "how-to-import-v2rayn",
  "机场订阅链接怎么导入 v2rayN？": "import-subscription-to-v2rayn",
  "机场节点越多越好吗？": "are-more-airport-nodes-better",
  "机场晚高峰卡顿正常吗？": "is-peak-hour-slowdown-normal",
  "机场晚高峰卡怎么办？": "how-to-fix-peak-hour-slowdown",
  "机场为什么白天快晚上慢？": "why-airport-is-slower-at-night",
  "机场可以长期使用吗？": "is-it-safe-to-use-airport-long-term",
  "机场优惠活动靠谱吗？": "are-airport-promotions-reliable",
  "机场购买前要注意什么？": "what-to-know-before-buying-airport",
  "机场客服联系不上怎么办？": "what-to-do-if-airport-support-unreachable",
  "机场订阅突然不能用了怎么办？": "what-to-do-if-subscription-stops-working",
  "机场公告在哪里看？": "where-to-find-airport-announcements",
  "机场备用官网有什么用？": "why-you-need-backup-airport-website",
  "机场导航是什么？": "what-is-airport-directory",
  "机场排行榜靠谱吗？": "are-airport-rankings-reliable",
  "机场天梯榜靠谱吗？": "is-airport-tier-list-trustworthy",
  "机场推荐榜单应该看哪些维度？": "how-to-evaluate-airport-recommendations",
  "机场评测文章可信吗？": "are-airport-reviews-credible",
  "机场可以多人共用吗？": "can-multiple-people-share-an-airport",
  "机场账号被封是什么原因？": "why-airport-account-banned",
  "机场订阅链接可以分享给别人吗？": "can-i-share-my-subscription-link",
  "机场是否支持 Shadowrocket？": "does-airport-support-shadowrocket",
  "机场是否支持 Stash？": "does-airport-support-stash",
  "机场是否支持 v2rayN？": "does-airport-support-v2rayn",
  "机场订阅和代理软件是什么关系？": "relationship-between-subscription-and-client",
  "机场需要自己搭建吗？": "do-i-need-to-build-airport-myself",
  "机场适合留学生吗？": "is-airport-suitable-for-international-students",
  "机场适合程序员吗？": "is-airport-good-for-programmers",
  "机场适合跨境电商吗？": "is-airport-suitable-for-cross-border-ecommerce",
  "机场适合刷短视频吗？": "is-airport-good-for-short-videos",
  "机场速度快就一定稳定吗？": "does-fast-speed-mean-stable",
  "机场品牌页应该看哪些信息？": "what-to-look-for-on-brand-page",
  "机场官网入口怎么辨别真假？": "how-to-identify-fake-airport-website",
  "机场备用地址怎么保存？": "how-to-save-backup-addresses",
  "机场使用过程中需要注意什么？": "precautions-when-using-airport",
  "机场长期使用怎么降低风险？": "how-to-reduce-long-term-risk",
  "机场品牌词落地页应该写哪些问题？": "brand-keyword-landing-page-guide",
  "某个机场跑路后怎么处理？": "what-to-do-after-airport-runs-away",
  "机场导航页应该收录哪些内容？": "what-should-airport-directory-include",
  "按量计费机场页面应该写哪些问题？": "pay-as-you-go-airport-guide",
  "便宜机场推荐页面应该写哪些问题？": "cheap-airport-recommendation-guide",
  "Clash 更新订阅提示错误怎么办？": "clash-update-subscription-error",
  "Shadowrocket 更新订阅失败怎么办？": "shadowrocket-update-subscription-failed",
  "v2rayN 更新订阅失败怎么办？": "v2rayn-update-subscription-failed",
  "机场测速很快为什么实际使用很卡？": "why-fast-speedtest-but-slow-usage",
  "机场订阅链接泄露会有什么后果？": "consequences-of-leaked-subscription",
  "机场账号可以同时给几个人用？": "how-many-users-per-account",
  "机场客服不回复怎么办？": "what-to-do-if-support-ignores-you"
};

let c = fs.readFileSync('src/data/questions.ts', 'utf8');
let qList = JSON.parse(c.substring(c.indexOf('['), c.lastIndexOf(']')+1));

qList.forEach(q => {
  if (slugMap[q.question]) {
    q.slug = slugMap[q.question];
  }
});

fs.writeFileSync('src/data/questions.ts', "export const questions = " + JSON.stringify(qList, null, 2) + ";\n");
console.log('Fixed bad slugs');
