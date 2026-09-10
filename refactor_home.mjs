import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('src/pages/index.astro', 'utf-8');

// 1. Fix latestPosts sorting
content = content.replace(
  "const latestPosts = posts.slice(0, 4);",
  "const latestPosts = [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 4);"
);

// 2. Fix copy
content = content.replace("系统每 24 小时根据全网 29 个节点表现动态更新权重", "根据收录品牌资料与编辑规则定期人工整理");
content = content.replace("🚀 2026 年最新测速数据已同步 · 收录 29 个品牌", "🚀 2026 年资料持续更新 · 严选收录 29 个品牌");

fs.writeFileSync('src/pages/index.astro', content);
console.log("Homepage fixed.");
