import fs from 'fs';
import path from 'path';

const tsContent = fs.readFileSync('src/data/questions.ts', 'utf8');
const jsonStart = tsContent.indexOf('[');
const jsonEnd = tsContent.lastIndexOf(']');
const jsonStr = tsContent.substring(jsonStart, jsonEnd + 1);
const qList = JSON.parse(jsonStr);

let fail = false;

// 1. Check total count
if (qList.length !== 249) {
  console.error(`Total questions expected 249, got ${qList.length}`);
  fail = true;
}

// 2. Check slugs
const slugs = new Set();
qList.forEach(q => {
  if (!q.slug || !q.question || !q.shortAnswer) {
    console.error(`Missing fields in: ${q.question}`);
    fail = true;
  }
  
  if (slugs.has(q.slug)) {
    console.error(`Duplicate slug: ${q.slug}`);
    fail = true;
  }
  slugs.add(q.slug);

  if (q.slug.match(/-(?=[a-z0-9]*[0-9])[a-z0-9]{4,6}$/) && !q.slug.match(/-(2026|100gb|4k|1080p|100g|v2rayn|v2ray)$/)) {
    console.error(`Possible hash/random slug: ${q.slug}`);
    fail = true;
  }

  if (q.slug.match(/-\\d+$/) && !q.slug.match(/-(2026|100gb|4k|1080p|100g)$/)) {
    console.error(`Numeric suffix slug: ${q.slug}`);
    fail = true;
  }

  if (['what-is', 'airport', 'node', 'airport-why', 'airport-node', 'airport-solution'].includes(q.slug) || q.slug.length < 8) {
    console.error(`Weak slug: ${q.slug}`);
    fail = true;
  }
});

// 3. Check Banned Templates
const bannedTemplates = [
  "通常建议大家在正式投入",
  "具体的软件设置取决于",
  "网络链路受物理距离和运营商策略",
  "针对该问题",
  "关于“",
  "各类客户端的底层原理大同小异",
  "建议先从自身核心需求出发"
];

qList.forEach(q => {
  bannedTemplates.forEach(t => {
    if (q.shortAnswer.includes(t)) {
      console.error(`Banned template found in "${q.question}": ${t}`);
      fail = true;
    }
  });
});

// 4. Check Semantic Duplication
const shortCounts = {};
qList.forEach(q => {
  let cleaned = q.shortAnswer;
  cleaned = cleaned.replace(q.question, '');
  cleaned = cleaned.replace(q.question.replace(/[？\\?]/g, ''), '');
  cleaned = cleaned.trim();
  shortCounts[cleaned] = (shortCounts[cleaned] || 0) + 1;
});

for (const [ans, count] of Object.entries(shortCounts)) {
  if (count >= 3) {
    console.error(`Semantic Duplicate >= 3 times (${count}): ${ans}`);
    fail = true;
  }
}

// 5. Check Categorization
qList.forEach(q => {
  const s = q.question.toLowerCase();
  const cat = q.category;
  
  const isFault = s.includes('超时') || s.includes('连不上') || s.includes('速度慢') || 
                  s.includes('晚高峰卡') || s.includes('全红') || s.includes('失败') || 
                  s.includes('打不开') || s.includes('url invalid') || s.includes('失效') || s.includes('怎么看才准确');
  
  if (isFault && cat !== '故障排查') {
    console.error(`Should be '故障排查': [${cat}] ${q.question}`);
    fail = true;
  }
});

if (fail) {
  process.exit(1);
} else {
  console.log("Validation passed: 0 templates, 0 weak slugs, valid categories.");
}
