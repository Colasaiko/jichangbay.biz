import fs from 'fs';

let p = 'src/pages/questions/index.astro';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(/data-text="\\$\\{q\\.question\\.toLowerCase\\(\\)\\} \\$\\{q\\.shortAnswer\\.toLowerCase\\(\\)\\} \\$\\{q\\.category\\.toLowerCase\\(\\)\\}"/g, 'data-text={`${q.question.toLowerCase()} ${q.shortAnswer.toLowerCase()} ${q.category.toLowerCase()} ${(q.searchAliases || []).join(\' \').toLowerCase()}`}');
c = c.replace(/data-text=\`\$\\{q\\.question\\.toLowerCase\\(\\)\\} \\$\\{q\\.shortAnswer\\.toLowerCase\\(\\)\\} \\$\\{q\\.category\\.toLowerCase\\(\\)}\`/g, 'data-text={`${q.question.toLowerCase()} ${q.shortAnswer.toLowerCase()} ${q.category.toLowerCase()} ${(q.searchAliases || []).join(\' \').toLowerCase()}`}');

fs.writeFileSync(p, c);
console.log("Updated data-text in questions index");
