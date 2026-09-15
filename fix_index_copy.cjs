const fs = require('fs');

let c = fs.readFileSync('src/pages/index.astro', 'utf8');

c = c.replace(/极致稳定的 IPLC/g, 'IPLC/IEPL 等线路');
c = c.replace(/性价比爆棚/g, '低预算中转方案');
c = c.replace(/需要干净的原生 IP 注册 ChatGPT 和 Claude/g, '关注 AI 平台支持地区与网络出口兼容性');
c = c.replace(/行业黑幕/g, '行业知识与避坑指南');

fs.writeFileSync('src/pages/index.astro', c);
console.log('index.astro fixed');
