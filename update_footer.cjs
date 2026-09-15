const fs = require('fs');
let c = fs.readFileSync('src/components/Footer.astro', 'utf8');

c = c.replace(/围绕网络工具、加速器与专线测评建立的中文内容中心。从 2026 最新行业动态到深度节点解析，助你打破网络边界。/, '围绕网络工具、机场套餐资料、客户端教程与常见问题建立的中文内容中心。');
c = c.replace(/<li><a href="\/about"/, '<li><a href="/methodology" class="hover:text-cyan-blue transition">资料来源与推荐方法</a></li>\n        <li><a href="/about"');

fs.writeFileSync('src/components/Footer.astro', c);
console.log('Footer.astro updated');
