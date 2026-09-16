import fs from 'fs';
import path from 'path';

// 1. Read the original txt file
const txtContent = fs.readFileSync('C:/Users/USER/Desktop/BLOG/机场品牌清单.txt', 'utf8');

// 2. Parse brands
const brandBlocks = txtContent.split(/---+/).filter(b => b.trim().length > 0);

const slugMap = {
  "微风网络": "weifeng",
  "firefly": "firefly",
  "跨界云": "kuajieyun",
  "闪跃": "shanyue",
  "无忧链接": "wuyou",
  "灵猫": "lingmao",
  "BitzNet": "bitznet",
  "飞猫云": "feimaoyun",
  "sogo云": "sogo",
  "暮光加速": "muguang",
  "星岛梦": "xingdaomeng",
  "唯兔云": "weituyun",
  "光速云": "guangsuyun",
  "U1S1": "u1s1",
  "极连云": "jilianyun",
  "光年梯": "guangnianti",
  "一翻云": "yifanyun",
  "二猫云": "ermaoyun",
  "边缘节点": "bianyuan",
  "可信云": "kexinyun",
  "速界机场": "sujie",
  "快狸": "kuaili",
  "飞V": "flyv",
  "梯子云": "tiziyun",
  "WaveNet": "wavenet",
  "灵动云": "lingdongyun",
  "隐形人": "yinxingren",
  "NanoCloud": "nanocloud",
  "Phantom": "phantom"
};

const airports = [];

for (let block of brandBlocks) {
  if (!block.trim()) continue;
  
  // Extract Name and Aff URL
  // "微风网络：aff链接： https://edp01.breezenetaff.com/#/?code=bSnymFll"
  const firstLineMatch = block.match(/^([^\n：:]+)[：:].*?(https?:\/\/[^\s]+)/i);
  if (!firstLineMatch) continue;
  
  let name = firstLineMatch[1].trim();
  let affiliateUrl = firstLineMatch[2].trim();
  
  if (name === "sogo") name = "sogo云"; // Sometimes named sogo
  
  const slug = slugMap[name];
  if (!slug) continue; // Skip unknown ones just in case
  
  // Extract Coupon
  const couponMatch = block.match(/优惠码：([^\n]+)/);
  const coupon = couponMatch ? couponMatch[1].trim() : null;
  
  // Extract Mac Download
  const macMatch = block.match(/mac\s*download\s*:\s*(https?:\/\/[^\s]+)/i);
  const macDownload = macMatch ? macMatch[1].trim() : null;
  
  // Extract Features
  const features = [];
  const featureRegex = /✔([^\n]+)/g;
  let fm;
  while ((fm = featureRegex.exec(block)) !== null) {
    features.push(fm[1].trim());
  }

  // Parse Plans
  // Look for lines containing numbers/GB/TB and parse them.
  // 名称 流量 月付 季付 年付
  // 清风 (Breeze)         100 GB            ¥11.00              -                  ¥137.00
  // 猎户座   100G  1.00  3.00   6.00  12.00
  // 信风 · 不限时         270 GB              （一次性  ¥200.00）
  const plans = [];
  
  const lines = block.split('\n');
  let parsingPlans = false;
  
  for (let line of lines) {
    line = line.trim();
    if (line.includes('名称') && line.includes('流量')) {
      parsingPlans = true;
      continue;
    }
    if (parsingPlans) {
      if (line === '' || line.startsWith('优惠码') || line.startsWith('✔') || line.startsWith('mac') || line.startsWith('aff链接')) {
        parsingPlans = false;
        continue;
      }
      
      // Parse a plan line
      // Ex: "信风 · 不限时 270 GB （一次性 ¥200.00）"
      // Ex: "清风 (Breeze) 100 GB ¥11.00 - ¥137.00"
      // Ex: "基础 100G 10 30 - 100" (some might not have ¥)
      
      // Regex to split by spaces, but keep plan name together
      // Wait, plan name might have spaces: "清风 (Breeze)"
      // Let's use a regex to capture: Name, Traffic, and the rest.
      const planMatch = line.match(/^(.+?)\s+(\d+(?:\.\d+)?\s*(?:GB|G|TB|T))\s+(.*)$/i);
      if (planMatch) {
        const planName = planMatch[1].trim();
        const traffic = planMatch[2].trim();
        const priceStr = planMatch[3].trim();
        
        let monthly = null;
        let quarterly = null;
        let semiannual = null;
        let annual = null;
        let oneTime = null;
        
        if (priceStr.includes('一次性') || priceStr.includes('不限时')) {
           const numMatch = priceStr.match(/[\d.]+/);
           if (numMatch) oneTime = parseFloat(numMatch[0]);
        } else {
           // split by spaces for recurring prices
           const parts = priceStr.split(/\s+/).map(p => p.trim());
           const getPrice = (idx) => {
             if (idx < parts.length && parts[idx] !== '-' && parts[idx] !== '—') {
                const numStr = parts[idx].replace(/¥/g, '');
                const num = parseFloat(numStr);
                return isNaN(num) ? null : num;
             }
             return null;
           };
           
           // We have to guess mapping based on standard: Month, Quarter, Half, Year
           // If 3 columns: Month, Quarter, Year
           // If 4 columns: Month, Quarter, Half, Year
           // Let's look at the header. Actually we don't have the header columns cleanly parsed.
           // Usually: Month, Quarter, Half-Year, Year
           // But the file shows:
           // 月付               季付                   年付
           // Or: 月付 季付 半年 年付
           // Let's just try to map them if we have 3 or 4.
           // Since we can't reliably parse columns without header, let's write a robust heuristic or just read all columns in order if they exist.
           // Actually, it's safer to read the header from the block if possible.
           // Let's search the block for the header line to know the columns.
        }
      }
    }
  }
}
