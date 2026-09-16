import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

const host = 'jichangbay.biz';
const keyFile = fs.readdirSync('public').find(f => f.match(/^[a-f0-9]{32}\\.txt$/));
const key = keyFile ? keyFile.replace('.txt', '') : 'd4f6084c763cc9357919b4793fb84c3d';
const keyLocation = 'https://' + host + '/' + key + '.txt';

const args = process.argv.slice(2);
const fileArgIdx = args.indexOf('--file');
const fileArg = fileArgIdx !== -1 ? args[fileArgIdx + 1] : null;

async function submitIndexNow() {
  try {
    let urls = new Set();
    
    if (fileArg) {
      if (fs.existsSync(fileArg)) {
        const lines = fs.readFileSync(fileArg, 'utf8').split('\n').map(l => l.trim()).filter(l => l);
        lines.forEach(u => urls.add(u));
      } else {
        console.error('File not found:', fileArg);
        return;
      }
    } else {
      const files = fs.readdirSync('dist').filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));
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
    }

    let urlList = Array.from(urls).filter(u => u.startsWith('https://jichangbay.biz/'));
    
    // Verify files exist if using fileArg
    if (fileArg) {
      
      const validUrls = [];
      for (const u of urlList) {
        let p = u.replace('https://jichangbay.biz', '');
        p = p.replace(/^\/+/, '');
        let distPath;
        if (p === '') {
           distPath = path.join('dist', 'index.html');
        } else if (p.endsWith('.xml') || p.endsWith('.txt')) {
           distPath = path.join('dist', p);
        } else {
           distPath = path.join('dist', p, 'index.html');
        }
        
        if (!fs.existsSync(distPath)) {
          console.error('[ERROR] HTML file does not exist for URL:', u, 'at', distPath);
        } else {
          validUrls.push(u);
        }
      }

      urlList = validUrls;
    }

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
