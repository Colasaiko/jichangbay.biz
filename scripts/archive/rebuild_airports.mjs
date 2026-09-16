import fs from 'fs';

const txtContent = fs.readFileSync('C:/Users/USER/Desktop/BLOG/机场品牌清单.txt', 'utf8');

const lines = txtContent.split('\n');
const blocks = [];
let currentBlock = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('aff链接') || lines[i].includes('aff：')) {
    if (currentBlock.length > 0) {
      blocks.push(currentBlock.join('\n'));
      currentBlock = [];
    }
  }
  currentBlock.push(lines[i]);
}
if (currentBlock.length > 0) blocks.push(currentBlock.join('\n'));

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
  "sogo": "sogo",
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

for (let block of blocks) {
  if (!block.trim()) continue;
  
  let nameLine = block.split('\n')[0].trim();
  let nameMatch = nameLine.match(/^(.+?)(?:aff链接|aff：|：|:|\s+https?:\/\/)/i);
  if (!nameMatch) continue;
  let name = nameMatch[1].trim();
  if (name === "sogo") name = "sogo云";
  
  let affiliateUrlMatch = block.match(/(https?:\/\/[^\s]+)/);
  if (!affiliateUrlMatch) continue;
  let affiliateUrl = affiliateUrlMatch[1].trim();
  
  const slug = slugMap[name];
  if (!slug) continue;
  
  const couponMatch = block.match(/优惠码[：:]\s*([^\n]+)/);
  const coupon = couponMatch ? couponMatch[1].trim() : null;
  
  const macMatch = block.match(/mac\s*download\s*:\s*(https?:\/\/[^\s]+)/i);
  const macDownload = macMatch ? macMatch[1].trim() : null;
  
  const features = [];
  const featureRegex = /✔([^\n]+)/g;
  let fm;
  while ((fm = featureRegex.exec(block)) !== null) {
    features.push(fm[1].trim());
  }

  const plans = [];
  const blockLines = block.split('\n');
  let parsingPlans = false;
  let colMap = [];
  
  for (let i = 0; i < blockLines.length; i++) {
    let line = blockLines[i].trim();
    if (line.includes('名称') && line.includes('流量')) {
      parsingPlans = true;
      const parts = line.split(/\s+/);
      colMap = parts.slice(2); 
      continue;
    }
    if (parsingPlans) {
      if (line === '' || line.startsWith('优惠码') || line.startsWith('✔') || line.startsWith('mac') || line.startsWith('aff') || line.startsWith('-')) {
        if (!line.startsWith('-')) parsingPlans = false;
        continue;
      }
      
      const planMatch = line.match(/^(.+?)\s+(\d+(?:\.\d+)?\s*(?:GB|G|TB|T|M|MB|Gb|Tb))\s+(.*)$/i);
      if (planMatch) {
        const planName = planMatch[1].trim();
        const traffic = planMatch[2].trim();
        let priceStr = planMatch[3].trim();
        
        let plan = {
          name: planName,
          traffic: traffic,
          monthly: null,
          quarterly: null,
          semiannual: null,
          annual: null,
          oneTime: null
        };
        
        if (priceStr.includes('一次性') || priceStr.includes('不限时') || planName.includes('一次性') || priceStr.includes('永久')) {
           const numMatch = priceStr.match(/[\d.]+/);
           if (numMatch) plan.oneTime = parseFloat(numMatch[0]);
        } else {
           const vals = priceStr.split(/\s+/).map(p => {
             if(p === '-' || p === '—') return null;
             const n = p.replace(/¥/g, '').replace(/[^\d.]/g, '');
             if(n === '') return null;
             return parseFloat(n);
           });
           
           for (let j = 0; j < colMap.length; j++) {
             let val = vals[j] !== undefined ? vals[j] : null;
             if (colMap[j].includes('月付')) plan.monthly = val;
             if (colMap[j].includes('季付')) plan.quarterly = val;
             if (colMap[j].includes('半年')) plan.semiannual = val;
             if (colMap[j].includes('年付')) plan.annual = val;
             if (colMap[j].includes('一次性')) plan.oneTime = val;
           }
        }
        plans.push(plan);
      } else {
        const otMatch = line.match(/^(.+?)\s+(\d+(?:\.\d+)?\s*(?:GB|G|TB|T|M|MB|Gb|Tb)).*一次性.*[\D](\d+(?:\.\d+)?)/i);
        if (otMatch) {
           plans.push({
             name: otMatch[1].trim(),
             traffic: otMatch[2].trim(),
             monthly: null, quarterly: null, semiannual: null, annual: null,
             oneTime: parseFloat(otMatch[3])
           });
        }
      }
    }
  }
  
  let monthlyPrices = plans.map(p => p.monthly).filter(p => p !== null && !isNaN(p));
  let monthlyStartingPrice = monthlyPrices.length > 0 ? Math.min(...monthlyPrices) : null;
  
  // Create the requested properties
  const lineType = features.some(f => f.includes('IPLC') || f.includes('专线')) ? 'IEPL/IPLC专线' : '中转/直连';
  const aiSupport = features.some(f => f.includes('原生') || f.includes('解锁')) ? '支持' : '部分支持';
  const streamingSupport = features.some(f => f.includes('流媒体') || f.includes('解锁')) ? '全解锁' : '部分支持';
  const recommendedFor = features.length > 0 ? features[0] : '全平台科学上网';
  
  airports.push({
    slug,
    name,
    affiliateUrl,
    coupon,
    macDownload,
    lineType,
    aiSupport,
    streamingSupport,
    recommendedFor,
    features,
    plans,
    monthlyStartingPrice
  });
}

const airportsJson = JSON.stringify(airports, null, 2);
fs.writeFileSync('src/data/airports.ts', `export const airports = ${airportsJson};`);

console.log('Rebuilt airports with all fields.');
