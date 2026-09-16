import fs from 'fs';
import path from 'path';

// airports/[slug].astro
let p1 = 'src/pages/airports/[slug].astro';
let c1 = fs.readFileSync(p1, 'utf-8');
c1 = c1.replace(
  '<StructuredData type="Article"', 
  `<StructuredData type="BreadcrumbList" data={{
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichangbay.biz/" },
      { "@type": "ListItem", "position": 2, "name": "品牌库", "item": "https://jichangbay.biz/airports" },
      { "@type": "ListItem", "position": 3, "name": airport.name, "item": \`https://jichangbay.biz/airports/\${airport.slug}\` }
    ]
  }} />
  <StructuredData type="Article"`
);
fs.writeFileSync(p1, c1);

// clients/index.astro
let p2 = 'src/pages/clients/index.astro';
let c2 = fs.readFileSync(p2, 'utf-8');
c2 = c2.replace(
  '---', 
  `---
import StructuredData from '../../components/StructuredData.astro';`
);
c2 = c2.replace(
  '<Layout title="主流代理客户端下载与使用教程 - 机场湾" description="Clash Verge, Shadowrocket, v2rayN 等全平台客户端下载地址与图文配置导入教程。">',
  `<Layout title="主流代理客户端下载与使用教程 - 机场湾" description="Clash Verge, Shadowrocket, v2rayN 等全平台客户端下载地址与图文配置导入教程。">
  <StructuredData type="BreadcrumbList" data={{
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichangbay.biz/" },
      { "@type": "ListItem", "position": 2, "name": "客户端下载与教程中心", "item": "https://jichangbay.biz/clients/" }
    ]
  }} />`
);
fs.writeFileSync(p2, c2);

// recommend pages
const recDir = 'src/pages/recommend';
const recFiles = fs.readdirSync(recDir);
for(const f of recFiles) {
  let p = path.join(recDir, f);
  let c = fs.readFileSync(p, 'utf-8');
  if (!c.includes('StructuredData')) {
    c = c.replace(
      'import { airports } from \'../../data/airports\';',
      `import { airports } from '../../data/airports';\nimport StructuredData from '../../components/StructuredData.astro';`
    );
    c = c.replace(
      '<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">',
      `<StructuredData type="BreadcrumbList" data={{
        itemListElement: [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichangbay.biz/" },
          { "@type": "ListItem", "position": 2, "name": "专题推荐", "item": "https://jichangbay.biz/airports" },
          { "@type": "ListItem", "position": 3, "name": topic.title, "item": \`https://jichangbay.biz/recommend/\${topic.slug}\` }
        ]
      }} />\n  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">`
    );
    fs.writeFileSync(p, c);
  }
}
console.log('Schemas updated.');
