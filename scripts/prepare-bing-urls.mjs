import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

if (!fs.existsSync('dist/sitemap-0.xml')) {
  console.error("sitemap-0.xml not found! Run npm run build first.");
  process.exit(1);
}

const parser = new XMLParser();
const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf-8');
const parsed = parser.parse(xml);

let validUrls = [];
let goCount = 0;
let noindexCount = 0; // The generator already excludes these, but we keep stats

if (parsed.urlset && parsed.urlset.url) {
  const urlList = Array.isArray(parsed.urlset.url) ? parsed.urlset.url : [parsed.urlset.url];
  urlList.forEach(u => {
    if (u.loc && u.loc.startsWith('https://jichangbay.biz/')) {
      const urlPath = u.loc.replace('https://jichangbay.biz', '');
      
      // Filter out /go/
      if (urlPath.startsWith('/go/')) {
        goCount++;
        return;
      }
      
      // Ensure file exists to avoid 404
      let localPath = urlPath.replace(/^\/+/, '');
      let distPath = '';
      if (localPath === '') {
        distPath = path.join('dist', 'index.html');
      } else if (localPath.endsWith('.xml') || localPath.endsWith('.txt')) {
        distPath = path.join('dist', localPath);
      } else {
        if (!localPath.endsWith('/')) localPath += '/';
        distPath = path.join('dist', localPath, 'index.html');
      }
      
      if (!fs.existsSync(distPath)) {
        // file doesn't exist, meaning 404 or redirect
        return;
      }
      
      // Ensure not noindex
      const html = fs.readFileSync(distPath, 'utf8');
      if (html.includes('<meta name="robots" content="noindex')) {
        noindexCount++;
        return;
      }
      
      validUrls.push(u.loc);
    }
  });
}

const outDir = 'docs';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}
fs.writeFileSync(path.join(outDir, 'bing-submit-urls.txt'), validUrls.join('\n'));

console.log(`Generated docs/bing-submit-urls.txt`);
console.log(`Total URLs in sitemap: ${parsed.urlset?.url?.length || 0}`);
console.log(`Excluded /go/ URLs: ${goCount}`);
console.log(`Excluded noindex URLs: ${noindexCount}`);
console.log(`Valid URLs ready for submission: ${validUrls.length}`);
