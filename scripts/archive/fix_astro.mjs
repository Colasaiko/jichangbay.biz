import fs from 'fs';

let content = fs.readFileSync('src/pages/questions/[slug].astro', 'utf8');

// fix marked parse
content = content.replace(/marked\.parse\(mdContent\);/g, 'marked.parse(mdContent) as string;');

// fix StructuredData
content = content.replace(/<StructuredData data=\{schemaData\} \/>/g, '<StructuredData type="Article" data={schemaData} />');

// fix node imports by adding @ts-ignore if we don't want to install @types/node, but wait, Astro check will still fail if it cannot resolve fs/path. We can install @types/node.
fs.writeFileSync('src/pages/questions/[slug].astro', content);

console.log("Fixed Astro TS errors");
