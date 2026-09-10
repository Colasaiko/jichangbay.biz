import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';

const host = 'jichangbay.biz';
const key = 'd4f6084c763cc9357919b4793fb84c3d';
const keyLocation = `https://${host}/${key}.txt`;

async function submitIndexNow() {
  try {
    const sitemapPath = path.resolve('dist/sitemap-index.xml');
    if (!fs.existsSync(sitemapPath)) {
      console.error('Sitemap not found at dist/sitemap-index.xml. Run build first.');
      return;
    }
    
    // In Astro's generated sitemap, typically it's sitemap-0.xml. We should read the main sitemaps.
    // We can just grab all URLs from all XML files in dist that start with sitemap
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
    console.log(`Parsed ${urlList.length} URLs for IndexNow.`);

    if (urlList.length === 0) return;

    const data = JSON.stringify({
      host,
      key,
      keyLocation,
      urlList
    });

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: data
    });

    console.log(`IndexNow HTTP Status: ${response.status}`);
    if (!response.ok) {
      console.error('IndexNow Error:', await response.text());
    }
  } catch (err) {
    console.error('IndexNow Submission Failed:', err);
  }
}

submitIndexNow();
