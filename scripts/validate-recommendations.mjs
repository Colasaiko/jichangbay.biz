import fs from 'fs';
import path from 'path';

let errors = 0;

const checkFile = (filepath, checks) => {
  if (!fs.existsSync(filepath)) {
    console.error(`Missing file: ${filepath}`);
    errors++;
    return;
  }
  const content = fs.readFileSync(filepath, 'utf8');
  checks.forEach(check => {
    if (check.shouldExist && !content.includes(check.text)) {
      console.error(`[Error] ${filepath} missing expected string: "${check.text}"`);
      errors++;
    }
    if (!check.shouldExist && content.includes(check.text)) {
      console.error(`[Error] ${filepath} contains forbidden string: "${check.text}"`);
      errors++;
    }
  });
};

// 1. Cheap Airport Validation
checkFile('src/pages/recommend/cheap-airport.astro', [
  { text: 'sort((a, b) => a.effectiveMonthly - b.effectiveMonthly)', shouldExist: true }, 
  { text: 'slice(0, 8)', shouldExist: true }, 
  { text: 'airport.plans[0].monthly', shouldExist: false }, 
  { text: 'lowestDirect', shouldExist: true } 
]);

// 2. Stable Airport Validation
checkFile('src/pages/recommend/stable-airport.astro', [
  { text: 'monthlyStartingPrice >= 20', shouldExist: false }, 
  { text: '保障高净值用户带宽', shouldExist: false },
  { text: '具备真正抗压能力', shouldExist: false }
]);

// 3. Premium Airport Validation
checkFile('src/pages/recommend/premium-line.astro', [
  { text: '不过墙', shouldExist: false },
  { text: '无 GFW 阻断风险', shouldExist: false }
]);

// 4. Clash Airport Validation
checkFile('src/pages/recommend/clash.astro', [
  { text: '完美支持', shouldExist: false },
  { text: '面板提供完善自动测速', shouldExist: false },
  { text: '支持一键下发 YAML', shouldExist: false }
]);

// 5. AI Airport Validation
checkFile('src/pages/recommend/ai.astro', [
  { text: '官方 AI 承诺', shouldExist: false },
  { text: '原生IP节点库', shouldExist: false },
  { text: '避免使用极度便宜', shouldExist: false }
]);

// 6. Streaming Airport Validation
checkFile('src/pages/recommend/streaming.astro', [
  { text: '官方解锁承诺', shouldExist: false },
  { text: 'DNS 劫持修复', shouldExist: false },
  { text: '原生IP', shouldExist: false } 
]);

if (errors === 0) {
  console.log("Validation passed: Data integrity and unsupported claims fixed.");
} else {
  console.log(`Validation failed with ${errors} errors.`);
  process.exit(1);
}
