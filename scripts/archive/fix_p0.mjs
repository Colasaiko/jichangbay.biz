import fs from 'fs';

let c = fs.readFileSync('src/data/questions.ts', 'utf8');
let jsonStart = c.indexOf('[');
let jsonEnd = c.lastIndexOf(']');
let jsonStr = c.substring(jsonStart, jsonEnd + 1);
let qList = JSON.parse(jsonStr);

qList.forEach(q => {
  let s = q.question.toLowerCase();

  // Category fixes
  if (['机场晚高峰卡顿正常吗？', '机场晚高峰卡怎么办？', '机场速度慢是什么原因？', '机场连不上是什么原因？', '机场节点全红怎么办？', '机场测速怎么看才准确？'].includes(q.question)) {
    q.category = '故障排查';
  }

  // P0 precise answers fixes
  if (q.slug === 'cannot-open-chatgpt-with-airport' || q.question === '为什么连了机场还是打不开 ChatGPT？') {
    q.shortAnswer = "如果其他网站正常但 ChatGPT 无法访问，应先检查当前地区是否在 OpenAI 官方支持范围，并排除 VPN/代理、Cookie、DNS、临时安全限制或服务状态等因素。";
  }
  if (q.slug === 'chatgpt-unsupported-country-error' || q.question === 'ChatGPT 为什么提示 unsupported country？') {
    q.shortAnswer = "该提示通常表示当前网络出口被识别为 OpenAI 尚未支持的地区。应先核对官方支持地区，并在符合支持条件的正常网络环境下重试。";
  }
  if (q.slug === 'netflix-proxy-detected' || q.question === 'Netflix 显示代理错误怎么办？') {
    q.shortAnswer = "Netflix 可能限制部分 VPN/代理连接，表现可能包括代理提示、播放失败或内容库变化；具体情况会随 IP、地区和网络环境变化。";
  }
  if (q.slug === 'can-airport-watch-netflix' || q.question === '机场能看 Netflix 吗？') {
    q.shortAnswer = "是否能正常观看取决于具体网络出口和 Netflix 的检测结果，同一服务不同节点也可能表现不同。";
  }
});

fs.writeFileSync('src/data/questions.ts', "export const questions = " + JSON.stringify(qList, null, 2) + ";\n");
console.log("Fixed P0 answers and categories.");
