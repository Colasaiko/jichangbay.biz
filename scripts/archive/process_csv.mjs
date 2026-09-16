import fs from 'fs';
import path from 'path';

const lines = fs.readFileSync('raw_keywords.csv', 'utf8').trim().split(/\r?\n/);
const header = lines.shift();

let kwMap = new Map();

for (let line of lines) {
  let lastComma1 = line.lastIndexOf(',');
  let lastComma2 = line.lastIndexOf(',', lastComma1 - 1);
  let lastComma3 = line.lastIndexOf(',', lastComma2 - 1);
  let lastComma4 = line.lastIndexOf(',', lastComma3 - 1);

  if (lastComma4 === -1) continue;

  let keyword = line.substring(0, lastComma4).replace(/^"|"$/g, '').trim().toLowerCase();
  let imp = parseInt(line.substring(lastComma4 + 1, lastComma3), 10) || 0;
  let clk = parseInt(line.substring(lastComma3 + 1, lastComma2), 10) || 0;
  let ctr = line.substring(lastComma2 + 1, lastComma1);
  let pos = parseFloat(line.substring(lastComma1 + 1)) || 0;

  if (kwMap.has(keyword)) {
    let old = kwMap.get(keyword);
    let totalImp = old.imp + imp;
    let avgPos = (old.pos * old.imp + pos * imp) / (totalImp || 1);
    kwMap.set(keyword, { imp: totalImp, clk: old.clk + clk, pos: avgPos, count: old.count + 1 });
  } else {
    kwMap.set(keyword, { imp, clk, pos, count: 1 });
  }
}

let reportLines = [
  "# Real Search Keyword Map",
  "",
  "| Keyword | Impressions | Clicks | Avg Position | Sources | Action | Target |",
  "|---|---|---|---|---|---|---|"
];

let ignoreCount = 0;
let expandCount = 0;
let newCount = 0;
let brandCount = 0;

let sorted = Array.from(kwMap.entries()).sort((a, b) => b[1].imp - a[1].imp);

for (let [kw, stats] of sorted) {
  let action = "KEEP";
  let target = "";

  if (kw.match(/site:|jichangblog|clashwiki|\\*\\*机场简介|curl|http:|https:/i) || kw.length > 50) {
    action = "IGNORE";
    ignoreCount++;
  } else if (kw.match(/微风|无忧|跨界云|闪跃|firefly|萤火虫|暮光|灵猫|bitznet|飞猫云|星岛梦|唯兔云|广速云/)) {
    action = "BRAND PAGE";
    target = "/airports/[brand]";
    brandCount++;
  } else if (kw.match(/mac.*clash|clash.*mac|苹果电脑.*clash|苹果.*clash|clash.*苹果|imac.*clash|clash.*imac/)) {
    action = "NEW PAGE";
    target = "/clients/clash-mac/";
    newCount++;
  } else if (kw.match(/timeout|连不上|超时|打不开/)) {
    action = "EXPAND";
    target = "Clash Timeout Cluster";
    expandCount++;
  } else if (kw.match(/tun模式|全局模式/)) {
    action = "NEW PAGE";
    target = "/questions/is-tun-mode-global";
    newCount++;
  } else if (kw.match(/verge.*windows.*区别/)) {
    action = "NEW PAGE";
    target = "/questions/clash-verge-vs-clash-for-windows";
    newCount++;
  } else if (kw.match(/sing-box.*clash.*(对比|区别)/) || kw.match(/clash.*sing-box.*(对比|区别)/)) {
    action = "NEW PAGE";
    target = "/questions/sing-box-vs-clash";
    newCount++;
  } else if (kw.match(/一元机场|两块钱机场/)) {
    action = "NEW PAGE";
    target = "/questions/is-one-yuan-airport-good";
    newCount++;
  } else if (kw.match(/菲律宾/)) {
    action = "NEW PAGE";
    target = "/questions/philippines-airport-node";
    newCount++;
  } else if (kw.match(/配置|教程|导入/)) {
    action = "EXPAND";
    target = "Clash Config Cluster";
    expandCount++;
  }

  reportLines.push("| " + kw + " | " + stats.imp + " | " + stats.clk + " | " + stats.pos.toFixed(1) + " | " + stats.count + " | " + action + " | " + target + " |");
}

if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs');
}
fs.writeFileSync('docs/real-search-keyword-map.md', reportLines.join('\n'));

console.log("Total Keywords: " + kwMap.size);
console.log("IGNORE: " + ignoreCount);
console.log("BRAND: " + brandCount);
console.log("NEW: " + newCount);
console.log("EXPAND: " + expandCount);
