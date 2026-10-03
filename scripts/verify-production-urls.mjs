import fs from 'fs';

const urlFile = 'docs/bing-submit-urls.txt';
if (!fs.existsSync(urlFile)) {
  console.error(`${urlFile} not found!`);
  process.exit(1);
}

const urls = fs.readFileSync(urlFile, 'utf8').split('\n').map(l => l.trim()).filter(l => l);

if (urls.length === 0) {
  console.error("No URLs to verify.");
  process.exit(1);
}

let stats = {
  200: 0,
  301: 0,
  404: 0,
  403: 0,
  other: 0,
  noindexFound: 0
};

let failed = false;

async function verifyUrls() {
  console.log(`Verifying ${urls.length} URLs in production...`);
  
  // Verify in batches of 10 to avoid socket hang ups
  const batchSize = 10;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    
    await Promise.all(batch.map(async (url) => {
      try {
        const res = await fetch(url, { redirect: 'manual' });
        
        if (res.status === 200) {
          stats[200]++;
          const text = await res.text();
          if (text.includes('<meta name="robots" content="noindex')) {
            console.error(`[FAIL] ${url} contains noindex tag!`);
            stats.noindexFound++;
            failed = true;
          }
        } else if (res.status === 301 || res.status === 302) {
          stats[301]++;
          console.error(`[FAIL] ${url} returned ${res.status} redirect!`);
          failed = true;
        } else if (res.status === 404) {
          stats[404]++;
          console.error(`[FAIL] ${url} returned 404!`);
          failed = true;
        } else if (res.status === 403) {
          stats[403]++;
          console.error(`[FAIL] ${url} returned 403!`);
          failed = true;
        } else {
          stats.other++;
          console.error(`[FAIL] ${url} returned ${res.status}!`);
          failed = true;
        }
      } catch (err) {
        stats.other++;
        console.error(`[FAIL] Request failed for ${url}: ${err.message}`);
        failed = true;
      }
    }));
  }
  
  console.log("\n--- Verification Summary ---");
  console.log(`200 OK: ${stats[200]}`);
  console.log(`301/302 Redirects: ${stats[301]}`);
  console.log(`404 Not Found: ${stats[404]}`);
  console.log(`403 Forbidden: ${stats[403]}`);
  console.log(`Other Errors: ${stats.other}`);
  console.log(`Noindex Found in 200: ${stats.noindexFound}`);
  
  if (failed) {
    console.error("\nVerification FAILED! Do not submit these URLs.");
    process.exit(1);
  } else {
    console.log("\nVerification PASSED! All URLs are ready for submission.");
  }
}

verifyUrls();
