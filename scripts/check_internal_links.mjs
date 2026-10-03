import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

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

const htmlFiles = getHtmlFiles(distDir);
const internalLinks = new Set();
const linkSourceMap = {};

const regex = /href="(\/[^"]+)"/g;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    let url = match[1];
    if (url.includes('#')) url = url.split('#')[0];
    if (url === '/') continue;
    internalLinks.add(url);
    if (!linkSourceMap[url]) linkSourceMap[url] = [];
    linkSourceMap[url].push(file);
  }
}

// read redirects
let redirects = {};
if (fs.existsSync(path.resolve('public/_redirects'))) {
  const lines = fs.readFileSync(path.resolve('public/_redirects'), 'utf8').split('\n');
  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 2) {
      redirects[parts[0]] = parts[1];
    }
  }
}

let deadLinks = 0;
for (const link of internalLinks) {
  if (link.startsWith('/go/')) continue; // skip go links, handled by dynamic routes
  
  // check if file exists
  let checkPath = link;
  if (checkPath.endsWith('/')) {
    checkPath += 'index.html';
  } else if (!checkPath.endsWith('.html')) {
    checkPath += '/index.html';
  }
  
  const fullPath = path.join(distDir, checkPath);
  if (!fs.existsSync(fullPath)) {
    // Check if it's a redirected link
    if (redirects[link]) {
      // Valid 301
      continue;
    }
    
    // Check if it exists with another common extension (e.g., .xml, .js) - wait we already check exact
    if (!fs.existsSync(path.join(distDir, link))) {
      console.error(`Dead link found: ${link}`);
      console.error(`Referenced in: ${linkSourceMap[link].slice(0, 3).join(', ')}`);
      deadLinks++;
    }
  }
}

if (deadLinks > 0) {
  console.error(`Found ${deadLinks} dead internal links!`);
  process.exit(1);
} else {
  console.log("No dead internal links found.");
}
