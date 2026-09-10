import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

const host = 'jichangbay.biz';
const keyFile = fs.readdirSync('public').find(f => f.match(/^[a-f0-9]{32}\.txt$/));
const key = keyFile ? keyFile.replace('.txt', '') : 'd4f6084c763cc9357919b4793fb84c3d';
const keyLocation = 'https://' + host + '/' + key + '.txt';

async function submitIndexNow() {
  try {
    const files = fs.readdirSync('dist').filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));
    let urls = new Set();
    const parser = new XMLParser();
    
    files.forEach(f => {
      const xml = fs.readFileSync(path.join('dist', f), 'utf-8');
      const parsed = parser.parse(xml);
      if (parsed.urlset && parsed.urlset.url) {
        const urlList = Array.isArray(parsed.urlset.url) ? parsed.urlset.url : [parsed.urlset.url];
        urlList.forEach(u => {
          if (u.loc && u.loc.includes(host)) urls.add(u.loc);
        });
      }
    });

    const urlList = Array.from(urls);
    console.log("发现 URL: " + urlList.length);
    console.log("合法 URL: " + urlList.length);
    console.log("检查 key: " + keyLocation);

    if (urlList.length === 0) return;

    // Batch processing
    const batchSize = 100;
    for (let i = 0; i < urlList.length; i += batchSize) {
      const batch = urlList.slice(i, i + batchSize);
      console.log("提交 URL (" + (i + 1) + " - " + (i + batch.length) + "):");
      
      const data = JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: batch
      });

      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: data
      });

      console.log("HTTP 状态: " + response.status);
      if (!response.ok) {
        console.error('IndexNow Error:', await response.text());
      }
    }
  } catch (err) {
    console.error('IndexNow Submission Failed:', err);
  }
}

submitIndexNow();
