import fs from 'fs';
import path from 'path';

const recDir = 'src/pages/recommend';
fs.readdirSync(recDir).forEach(f => {
  let p = path.join(recDir, f);
  let c = fs.readFileSync(p, 'utf8');
  let m = c.match(/<h1[^>]*>(.*?)<\/h1>/);
  let title = m ? m[1] : '';
  c = c.replace(/topic\.title/g, '"' + title + '"');
  c = c.replace(/topic\.slug/g, '"' + f.replace('.astro', '') + '"');
  fs.writeFileSync(p, c);
});
console.log("Fixed recommend schema.");
