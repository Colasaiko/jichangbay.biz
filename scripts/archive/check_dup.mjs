import fs from 'fs';
import path from 'path';

const contentDir = 'src/data/questions_content';
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

let contents = {};

for (const file of files) {
  let text = fs.readFileSync(path.join(contentDir, file), 'utf8');
  // Remove headers
  text = text.replace(/#+ .*/g, '');
  // Remove bold/italic formatting
  text = text.replace(/[*_~`]/g, '');
  // Remove links
  text = text.replace(/\\[(.*?)\\]\\(.*?\\)/g, '$1');
  // Remove whitespace
  text = text.replace(/\\s+/g, '');
  
  contents[file] = text;
}

let hasDuplicates = false;
for (let i = 0; i < files.length; i++) {
  for (let j = i + 1; j < files.length; j++) {
    const fileA = files[i];
    const fileB = files[j];
    const textA = contents[fileA];
    const textB = contents[fileB];
    
    // Check if more than 30 consecutive characters match
    // Let's do a simple substring check. If one string contains a large chunk of another, it's a fail.
    // Or just check if the entire stripped text is highly similar.
    // Let's check for any 100-character common substring.
    let commonThreshold = 100;
    for (let k = 0; k < textA.length - commonThreshold; k++) {
      const chunk = textA.substring(k, k + commonThreshold);
      if (textB.includes(chunk)) {
        console.error(`🚨 DUPLICATE CONTENT FOUND between ${fileA} and ${fileB}`);
        console.error(`Snippet: ${chunk}`);
        hasDuplicates = true;
        break;
      }
    }
  }
}

if (!hasDuplicates) {
  console.log("✅ Zero high-repetition pairs found!");
} else {
  process.exit(1);
}
