import fs from 'fs';

let tsContent = fs.readFileSync('src/data/questions.ts', 'utf8');
let jsonStart = tsContent.indexOf('[');
let jsonEnd = tsContent.lastIndexOf(']');
let jsonStr = tsContent.substring(jsonStart, jsonEnd + 1);
let qList = JSON.parse(jsonStr);

qList.forEach(q => {
    let s = q.question.toLowerCase();
    if (s.includes('怎么导入') || s.includes('怎么配置') || s.includes('支持吗') || s.includes('怎么更新') || s.includes('是否支持')) {
      q.category = '客户端';
    }
    if (s.includes('超时') || s.includes('连接失败') || s.includes('打不开') || s.includes('更新失败') || s.includes('url invalid')) {
      q.category = '故障排查';
    }
});

fs.writeFileSync('src/data/questions.ts', "export const questions = " + JSON.stringify(qList, null, 2) + ";\n");
