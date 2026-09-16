import fs from 'fs';
import path from 'path';

const fileContent = `---
import Layout from '../../layouts/Layout.astro';
import StructuredData from '../../components/StructuredData.astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return posts.map((post, index) => ({
    params: { slug: post.slug },
    props: { 
      post, 
      allPosts: posts,
      prevPost: index < posts.length - 1 ? posts[index + 1] : null,
      nextPost: index > 0 ? posts[index - 1] : null
    },
  }));
}

const { post, allPosts, prevPost, nextPost } = Astro.props;
const { Content, headings } = await post.render();

// Words calculation for Reading Time
const wordCount = post.body.replace(/<[^>]*>?/gm, '').length;
const readingTime = Math.max(1, Math.ceil(wordCount / 450));

// Related Posts logic
const getRelatedPosts = () => {
  const others = allPosts.filter(p => p.slug !== post.slug);
  const sameCat = others.filter(p => p.data.category === post.data.category);
  const rest = others.filter(p => p.data.category !== post.data.category);
  
  const related = [...sameCat, ...rest].slice(0, 4);
  return related;
};
const relatedPosts = getRelatedPosts();

const schemaData = {
  headline: post.data.title,
  description: post.data.description,
  datePublished: post.data.pubDate.toISOString(),
  dateModified: (post.data.updatedDate || post.data.pubDate).toISOString(),
  author: { "@type": "Organization", "name": post.data.author },
  publisher: { "@type": "Organization", "name": "机场湾", "logo": { "@type": "ImageObject", "url": "https://jichangbay.biz/favicon.svg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": \`https://jichangbay.biz/blog/\${post.slug}\` },
  image: "https://jichangbay.biz/og-image.png"
};
---
<Layout 
  title={\`\${post.data.title} - 机场湾深度解析\`} 
  description={post.data.description}
  article={true}
>
  <StructuredData type="Article" data={schemaData} />
  <StructuredData type="BreadcrumbList" data={{
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://jichangbay.biz/" },
      { "@type": "ListItem", "position": 2, "name": "文章指南", "item": "https://jichangbay.biz/blog" },
      { "@type": "ListItem", "position": 3, "name": post.data.title, "item": \`https://jichangbay.biz/blog/\${post.slug}\` }
    ]
  }} />
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
    <div class="lg:w-3/4">
      <nav class="text-sm mb-8 text-gray-500 font-medium">
        <a href="/" class="hover:text-cyan-blue">首页</a> <span class="mx-2">/</span> 
        <a href="/blog" class="hover:text-cyan-blue">博客</a> <span class="mx-2">/</span> 
        <span class="text-gray-800 dark:text-gray-200">{post.data.title}</span>
      </nav>
      
      <header class="mb-10 pb-8 border-b border-gray-200 dark:border-gray-800">
        <span class="px-3 py-1 bg-cyan-blue/10 text-cyan-blue rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">{post.data.category}</span>
        <h1 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.data.title}</h1>
        <div class="flex flex-wrap items-center text-sm text-gray-500 gap-4">
          <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg> 发布：{post.data.pubDate.toLocaleDateString('zh-CN')}</span>
          {post.data.updatedDate && (
            <span class="flex items-center text-coral"><svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg> 更新：{post.data.updatedDate.toLocaleDateString('zh-CN')}</span>
          )}
          <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> 预计阅读 {readingTime} 分钟</span>
          <span class="flex items-center"><svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> {post.data.author}</span>
        </div>
      </header>

      {/* Mobile TOC */}
      {headings.length > 0 && (
        <details class="lg:hidden mb-8 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
          <summary class="font-bold cursor-pointer outline-none">展开文章目录</summary>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {headings.filter(h => h.depth === 2 || h.depth === 3).map(h => (
              <li class={\`\${h.depth === 3 ? 'ml-4' : ''}\`}>
                <a href={\`#\${h.slug}\`} class="hover:text-cyan-blue transition">{h.text}</a>
              </li>
            ))}
          </ul>
        </details>
      )}

      <article class="prose dark:prose-invert prose-lg max-w-none prose-a:text-cyan-blue hover:prose-a:text-blue-600 prose-headings:text-midnight dark:prose-headings:text-white prose-img:rounded-xl">
        <Content />
      </article>
      
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl">
          {prevPost ? (
            <a href={\`/blog/\${prevPost.slug}\`} class="group flex flex-col w-1/2 pr-4 border-r border-gray-200 dark:border-gray-700">
              <span class="text-xs text-gray-500 mb-1">&larr; 上一篇</span>
              <span class="font-bold text-sm group-hover:text-cyan-blue transition line-clamp-1">{prevPost.data.title}</span>
            </a>
          ) : <div class="w-1/2 pr-4 border-r border-gray-200 dark:border-gray-700 text-sm text-gray-500">已经是第一篇了</div>}
          
          {nextPost ? (
            <a href={\`/blog/\${nextPost.slug}\`} class="group flex flex-col w-1/2 pl-4 text-right">
              <span class="text-xs text-gray-500 mb-1">下一篇 &rarr;</span>
              <span class="font-bold text-sm group-hover:text-cyan-blue transition line-clamp-1">{nextPost.data.title}</span>
            </a>
          ) : <div class="w-1/2 pl-4 text-right text-sm text-gray-500">已经是最新一篇了</div>}
        </div>
      </div>
    </div>
    
    <aside class="lg:w-1/4 hidden lg:block">
      <div class="sticky top-24">
        {/* Desktop Sticky TOC */}
        {headings.length > 0 && (
          <div class="bg-white dark:bg-midnight p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
            <h3 class="font-bold mb-4 uppercase text-sm tracking-wider text-gray-500">文章目录</h3>
            <ul class="space-y-3 text-sm">
              {headings.filter(h => h.depth === 2 || h.depth === 3).map(h => (
                <li class={\`\${h.depth === 3 ? 'ml-4 text-gray-500' : 'font-medium text-gray-800 dark:text-gray-200'}\`}>
                  <a href={\`#\${h.slug}\`} class="hover:text-cyan-blue transition block truncate">{h.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div class="bg-white dark:bg-midnight p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm mb-8">
          <h3 class="font-bold mb-4 uppercase text-sm tracking-wider text-gray-500">本站相关阅读</h3>
          <ul class="space-y-4">
            {relatedPosts.map(p => (
              <li>
                <a href={\`/blog/\${p.slug}\`} class="text-sm font-medium hover:text-cyan-blue transition line-clamp-2 leading-snug">{p.data.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div class="bg-gradient-to-br from-cyan-blue/10 to-transparent p-6 rounded-xl border border-cyan-blue/20">
          <h3 class="font-bold mb-2 text-cyan-blue">快速获取优质节点</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">不知道选哪个？直接查看 2026 年最新排名前列的稳定套餐。</p>
          <a href="/recommend/2026-airport" class="block w-full text-center px-4 py-2 bg-cyan-blue text-white rounded font-bold hover:bg-blue-600 transition shadow">查看推荐榜单</a>
        </div>
      </div>
    </aside>
  </div>
  
  <script is:inline>
    // Smooth scrolling for TOC links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  </script>
</Layout>
`;
fs.writeFileSync('src/pages/blog/[slug].astro', fileContent);
console.log("Refactored blog slug astro file.");
