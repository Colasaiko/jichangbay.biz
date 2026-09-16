import fs from 'fs';

let tsContent = fs.readFileSync('src/data/questions.ts', 'utf8');
let jsonStart = tsContent.indexOf('[');
let jsonEnd = tsContent.lastIndexOf(']');
let jsonStr = tsContent.substring(jsonStart, jsonEnd + 1);
let qList = JSON.parse(jsonStr);

let templateSentences = [
  "针对该问题，建议先从自身核心需求出发",
  "各类客户端的底层原理大同小异",
  "线路质量决定了晚高峰",
  "日本和新加坡是目前亚太地区",
  "此类网络故障请依次排查",
  "价格并非唯一衡量标准",
  "解锁流媒体的关键在于节点 IP 的纯净度",
  "防范跑路和封号的最佳策略是",
];

let templateCount = 0;
let weakSlugCount = 0;
let numericSlugCount = 0;

let shortCounts = {};
let weakSlugsList = [];

qList.forEach(q => {
  let ans = q.shortAnswer;
  for (let t of templateSentences) {
    if (ans.includes(t)) {
      templateCount++;
    }
  }

  let slug = q.slug;
  if (slug.length < 5 || ['what-is', 'airport', 'node'].includes(slug)) {
    weakSlugCount++;
    weakSlugsList.push(slug);
  }
  if (slug.match(/-\\d+$/)) {
    numericSlugCount++;
    weakSlugsList.push(slug);
  }

  shortCounts[ans] = (shortCounts[ans] || 0) + 1;
});

let repeatFails = 0;
for (let [ans, count] of Object.entries(shortCounts)) {
  if (count > 2) {
    console.error("Fail: shortAnswer repeated " + count + " times: " + ans);
    repeatFails++;
  }
}

let p0Count = qList.filter(q => q.priority === 'P0').length;
let p1Count = qList.length - p0Count;

console.log('--- FINAL REPORT ---');
console.log('总问题数:', qList.length);
console.log('P0 数量:', p0Count);
console.log('P1/P2 数量:', p1Count);
console.log('完全重复 shortAnswer 组数:', repeatFails);
console.log('模板句出现次数:', templateCount);
console.log('数字尾号 slug 数量:', numericSlugCount);
console.log('弱语义 slug 数量:', weakSlugCount);

if (repeatFails > 0 || templateCount > 0 || numericSlugCount > 0 || weakSlugCount > 0) {
  process.exit(1);
}
