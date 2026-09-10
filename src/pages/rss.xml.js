import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: '机场湾 · jichangbay.biz',
    description: '最新网络工具、机场与梯子深度评测及使用指南。',
    site: context.site || 'https://jichangbay.biz',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>zh-cn</language>`,
  });
}
