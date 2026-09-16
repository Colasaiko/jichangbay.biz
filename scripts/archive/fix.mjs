import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('rebuild_questions_v2.mjs', 'utf8');

content = content.replace(/generateP1ShortAnswer[\s\S]+?let seen = new Set\(\);/, `
function generateP1ShortAnswer(q, category) {
  if (category === '故障排查') return "针对 '" + q.replace('？','') + "'，请优先检查节点是否超时、套餐是否到期、以及本地 DNS 是否存在污染，并尝试更新订阅重试。";
  if (category === '套餐与价格') return "这取决于具体使用场景。日常浏览消耗很小，但重度观看 4K 流媒体或大文件下载会快速消耗流量。建议根据实际测算选购套餐。";
  if (category === '流媒体' || category === 'AI 工具') return "部分服务（如 Netflix、ChatGPT）对 IP 代理检测非常严格。你需要选择对应地区且具备原生 IP 或解锁能力的专用节点。";
  if (category === '客户端') return "各大主流客户端（Clash、Shadowrocket等）核心原理一致。请进入官网复制对应订阅链接并在软件内导入、开启代理即可。";
  return "关于'" + q.replace('？','') + "'，通常建议根据自身预算、网络环境及核心需求（如延迟、带宽等）进行综合判断，不要迷信单一指标。";
}

let seen = new Set();
`);

fs.writeFileSync('rebuild_questions_v2.mjs', content);
console.log("Fixed backticks in generateP1ShortAnswer");
