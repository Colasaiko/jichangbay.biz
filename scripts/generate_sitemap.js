import fs from 'fs';
import path from 'path';

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const distDir = path.resolve('dist');
const htmlFiles = getHtmlFiles(distDir);
const baseUrl = 'https://jichangbay.biz';

let urls = '';
for (const file of htmlFiles) {
  let relativePath = file.replace(distDir, '').replace(/\\/g, '/');
  if (relativePath.endsWith('/index.html')) {
    relativePath = relativePath.replace('/index.html', '/');
  } else if (relativePath.endsWith('.html')) {
    relativePath = relativePath.replace('.html', '');
  }
  if (relativePath === '/404') continue;
  
  urls += `
  <url>
    <loc>` + baseUrl + relativePath + `</loc>
    <lastmod>` + new Date().toISOString() + `</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` + urls + `
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), sitemap);
console.log('Sitemap generated.');
