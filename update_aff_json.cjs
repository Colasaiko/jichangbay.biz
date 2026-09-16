const fs = require('fs');

const data = `
飞猫云：https://flycat1.flycatvipaff.cc/#/?code=UUcH5yh9
星岛梦 StarDream：https://kfccbb.xingdaomeng.com/#/?code=1qBePxW1
光速云 LightSpeed：https://mdlky.gsyaff.com/#/?code=GKfXFvJh
唯兔云（V2云）：https://fast.v2yunvipaff.com/#/?code=bGS5G7xn
U1S1（有一说一）：https://pkdj7.vipaff.cc/#/?code=T1UVuVDP
极连云：https://kdjhao.jlyvipaff.com/#/?code=nrPTQT2i
全球云：https://sswdh.gcvipaff.com/#/?code=iZl9XAe2
光年梯：https://ggmq.gntaff.com/#/?code=k0rrn5UQ
Sogo云：https://wzjc.sogoyunaff.cc/#/?code=JvxcPy2A
宇宙云 YuZhou：https://wzjc.yuzoucloud.cc/#/?code=204ZUc9t
二猫云 2mao：https://waaa.2maoyunaff.cc/#/?code=c842udvC
一翻云 1fly：https://wzjc.1flyunaff.cc/#/?code=e61goYLt
边缘节点 EdgeNova：https://work.edgenovaaff.cc/#/?code=etUBOp4S
可信云：https://work.kosingaff.com/#/?code=PY3isazT
速界 SuJie：https://work.speedworldaff.cc/#/?code=q1enwrOd
快狸 KuaiLi：https://work.kuailicloud.cc/#/?code=9RhZkrkV
微风网络 Breezenet：https://edp01.breezenetaff.com/#/?code=bSnymFll
无忧：https://wep01.worryfreeaff.com/#/?code=ydtFVWqU
灵猫：https://vip02.civetaff.com/#/?code=2Ai6V6Ub
闪跃 FlashLeap：https://vip02.flashleapaff.com/#/?code=hCwClNUi
飞为（Firefly）：https://vip02.fireflyaff.com/#/?code=mcYQUZxG
跨界：https://vip02.kuajieaff.com/#/?code=HRzqSLrR
暮光网络：https://varnexa.twilightaff.com/#/?code=1eGqV85O
飞V：https://varnexa.flyvaff.com/#/?code=6ae5FH9i
梯子云 LadderCloud：https://varnexa.ladderaff.com/#/?code=3vf6NG2u
浪网 WaveNet：https://varnexa.wavenetaff.com/#/?code=pcFhy7Lb
灵动云：https://varnexa.lingdongaff.com/#/?code=TIMwZeIR
隐形人：https://varnexa.invisibleaff.com/#/?code=8jyAXfu3
`.trim().split('\n').filter(Boolean);

const mappings = data.map(line => {
  const [name, url] = line.split('：');
  return { fullName: name, url: url.trim() };
});

let content = fs.readFileSync('src/data/airports.ts', 'utf8');

// The file looks like: export const airports = [ ... ];
// We can extract the array part, evaluate it, update, and stringify
const prefix = 'export const airports = ';
const jsonStr = content.replace(prefix, '').replace(/;$/, '');

let airports;
try {
  airports = JSON.parse(jsonStr);
} catch (e) {
  // If it's not strict JSON, we might need a more resilient approach
  console.error("Not valid JSON", e.message);
  process.exit(1);
}

let updateCount = 0;

mappings.forEach(({ fullName, url }) => {
  let matched = false;
  
  for (let airport of airports) {
    if (fullName.includes(airport.name) || airport.name.includes(fullName.split(' ')[0]) || airport.name === 'Firefly' && fullName.includes('飞为') || airport.name === 'FlyV' && fullName.includes('飞V')) {
      airport.affiliateUrl = url;
      console.log('Updated:', airport.name);
      matched = true;
      updateCount++;
      break;
    }
  }
  
  if (!matched) {
    console.log('NOT FOUND for:', fullName);
  }
});

const newContent = prefix + JSON.stringify(airports, null, 2) + ';\n';
fs.writeFileSync('src/data/airports.ts', newContent);
console.log('Total updated:', updateCount);
