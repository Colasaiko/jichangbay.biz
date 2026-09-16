import fs from 'fs';

const path = 'src/pages/guides/airport-beginner-guide/index.astro';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/做机场没有营业执照，商家卷钱跑路（直接关站失联）是常态/g, '大多数机场在海外运营，存在一定的不确定性，因不可抗力导致关停（跑路）的风险始终存在');
c = c.replace(/不过墙/g, '在设计上不直接经过公网国际出口');
c = c.replace(/晚高峰极其拥堵/g, '晚高峰容易出现拥堵');
c = c.replace(/掌握了 90% 的技巧/g, '掌握了大部分基础技巧');

fs.writeFileSync(path, c);
console.log('Fixed beginner guide');
