import fs from 'fs';
import path from 'path';

const BRAND_PAGE = path.resolve('src/pages/airports/[slug].astro');
const INDEX_PAGE = path.resolve('src/pages/index.astro');
const METHODOLOGY_PAGE = path.resolve('src/pages/methodology.astro');
const DISCLAIMER_PAGE = path.resolve('src/pages/disclaimer.astro');
const AFFILIATE_DISCLOSURE = path.resolve('src/components/AffiliateDisclosure.astro');

const FORBIDDEN = [
  { pattern: '9.2 / 10', desc: '虚假评分 9.2/10' },
  { pattern: '模拟测试数据看板', desc: '模拟测试数据看板' },
  { pattern: '45ms', desc: '假测速延迟 45ms' },
  { pattern: '850 Mbps', desc: '假测速带宽 850 Mbps' },
  { pattern: '620 Mbps', desc: '假测速带宽 620 Mbps' },
  { pattern: '480 Mbps', desc: '假测速带宽 480 Mbps' },
  { pattern: 'monthlyStartingPrice || 999', desc: '硬编码 || 999 fallback' },
  { pattern: '完美兼容以下主流客户端', desc: '未经核实的完美客户端兼容声明' },
  { pattern: '性价比极高', desc: '无来源的性价比极高评价' },
  { pattern: '节点稳定性好', desc: '无来源的节点稳定性好' },
  { pattern: '晚高峰少数节点存在偶发延迟波动', desc: '固化虚假缺点描述' },
  { pattern: '最新测速评测', desc: '未经证实的测速评测字样' },
  { pattern: '{displayPriceText}起', desc: '重复起起' },
  { pattern: '默认最优价', desc: '虚假的优惠保证' },
  { pattern: '合作因素', desc: '虚假合作因素描述' },
  { pattern: '合作权重', desc: '虚假合作权重描述' },
  { pattern: '绝对不会增加', desc: '过于绝对的成本承诺' },
];

const BRAND_SPECIFIC_FORBIDDEN = [
  { pattern: 'p.halfYear', desc: '错误的字段名 halfYear' },
  { pattern: 'p.yearly', desc: '错误的字段名 yearly' },
];

const FILES_TO_CHECK = [
  BRAND_PAGE,
  INDEX_PAGE,
  METHODOLOGY_PAGE,
  DISCLAIMER_PAGE,
  AFFILIATE_DISCLOSURE
];

let errors = 0;
for (const file of FILES_TO_CHECK) {
  if (!fs.existsSync(file)) {
    console.error(`[ERROR] 文件不存在: ${file}`);
    errors++;
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const rel = path.relative('.', file);
  
  for (const { pattern, desc } of FORBIDDEN) {
    if (content.includes(pattern)) {
      console.error(`[FAIL] ${rel}: 发现禁止内容 "${desc}"`);
      errors++;
    }
  }

  if (file === BRAND_PAGE) {
    for (const { pattern, desc } of BRAND_SPECIFIC_FORBIDDEN) {
      if (content.includes(pattern)) {
        console.error(`[FAIL] ${rel}: 发现禁止内容 "${desc}"`);
        errors++;
      }
    }
    
    // Check required plan fields
    const requiredFields = ['p.monthly', 'p.quarterly', 'p.semiannual', 'p.annual', 'p.oneTime'];
    for (const field of requiredFields) {
      if (!content.includes(field)) {
         console.error(`[FAIL] ${rel}: 缺失必要的套餐字段 "${field}"`);
         errors++;
      }
    }
  }
}

if (errors > 0) {
  console.error(`\n[VALIDATION FAILED] 发现 ${errors} 处违规，build 终止。`);
  process.exit(1);
} else {
  console.log('[PASS] validate-brand-pages: 无禁止内容，验证通过。');
}
