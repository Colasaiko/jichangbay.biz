# 机场湾 · jichangbay.biz

## 项目定位
高级科技杂志风格的机场、VPN、梯子推荐与网络测评研究站。完全针对 2026 年最新网络环境进行 SEO 优化与视觉设计。

## 技术栈
- 框架：Astro 4.x (SSG)
- 语言：TypeScript
- 样式：Tailwind CSS (自适应深浅色模式)
- 内容：Astro Content Collections (Markdown/MDX)

## 部署说明 (Cloudflare Pages)
- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output**: `dist`
- **Node**: 20+

## 脚本
- `npm run dev`: 启动本地开发
- `npm run build`: 生产构建
- `node scripts/indexnow.js`: 自动读取 sitemap 提交至 Bing IndexNow (构建后执行)
