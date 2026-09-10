import fs from 'fs';
import path from 'path';

let content = fs.readFileSync('src/pages/clients/index.astro', 'utf8');

// Update Windows section
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <strong>Clash Verge Rev</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <a href="/clients/clash-verge" class="font-bold hover:text-cyan-blue transition">Clash Verge Rev</a>'
);
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span> <strong>v2rayN</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span> <a href="/clients/v2rayn" class="font-bold hover:text-cyan-blue transition">v2rayN</a>'
);
content = content.replace(
  '查看图文教程 &rarr;',
  'Windows 客户端使用指南 &rarr;'
);
content = content.replace(
  /href="https:\/\/www\.clashwiki\.blog\/" target="_blank" rel="noopener"/,
  'href="/clients/clash-verge"'
);

// macOS
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <strong>ClashX Meta</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <a href="/clients/mihomo" class="font-bold hover:text-cyan-blue transition">Mihomo Party</a>'
);
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-purple-400"></span> <strong>Surge Mac</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-purple-400"></span> <a href="/clients/surge" class="font-bold hover:text-cyan-blue transition">Surge</a>'
);
content = content.replace(
  /href="https:\/\/www\.clashwiki\.blog\/" target="_blank" rel="noopener"/,
  'href="/clients/mihomo"'
);

// iOS
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <strong>Shadowrocket</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <a href="/clients/shadowrocket" class="font-bold hover:text-cyan-blue transition">Shadowrocket</a>'
);
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span> <strong>Quantumult X</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span> <a href="/clients/quantumult-x" class="font-bold hover:text-cyan-blue transition">Quantumult X</a>'
);
content = content.replace(
  '获取外区 ID 教程 &rarr;',
  'iOS 客户端导入教程 &rarr;'
);
content = content.replace(
  /href="https:\/\/www\.clashwiki\.blog\/" target="_blank" rel="noopener"/,
  'href="/clients/shadowrocket"'
);

// Android
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <strong>Clash Meta for Android</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-blue"></span> <a href="/clients/mihomo" class="font-bold hover:text-cyan-blue transition">Clash Meta</a>'
);
content = content.replace(
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span> <strong>v2rayNG</strong>',
  '<li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></span> <a href="/clients/v2rayng" class="font-bold hover:text-cyan-blue transition">v2rayNG</a>'
);
content = content.replace(
  /href="https:\/\/www\.clashwiki\.blog\/" target="_blank" rel="noopener"/,
  'href="/clients/v2rayng"'
);

fs.writeFileSync('src/pages/clients/index.astro', content);
console.log("Client index updated.");
