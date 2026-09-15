const fs = require('fs');
let c = fs.readFileSync('src/pages/methodology.astro', 'utf8');

const newRanking = `<h2>四、排名规则说明</h2>
        <p>该排序属于本站编辑展示规则，不代表真实性能测试排名。</p>
        <ul>
          <li><strong>#1 微风网络固定</strong></li>
          <li><strong>#2 飞猫云固定</strong></li>
          <li><strong>#3～#7</strong>：firefly、无忧链接、灵猫、跨界云、闪跃。在候选池中根据 build seed 进行确定性轮换。</li>
          <li><strong>其余品牌</strong>：根据相同 build seed 排序。</li>
        </ul>

        <h2>五、推广链接关系说明（Affiliate Disclosure）</h2>`;

c = c.replace(/<h2>四、排名规则说明<\/h2>[\s\S]*?<h2>五、推广链接关系说明（Affiliate Disclosure）<\/h2>/, newRanking);
c = c.replace(/绝对不会增加你的任何购买成本或套餐价格，有时甚至能通过专属链接让你享受独家折扣。/g, '使用推广链接通常不会改变服务商页面显示的套餐价格，实际价格和优惠以服务商最终结算页面为准。');
c = c.replace(/绝对不会/g, '通常不会');

fs.writeFileSync('src/pages/methodology.astro', c);
console.log('Methodology updated');
