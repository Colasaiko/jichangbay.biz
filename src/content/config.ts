import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('机场湾编辑部'),
    category: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
