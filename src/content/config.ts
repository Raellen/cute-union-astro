import { defineCollection, z } from "astro:content";

// 文章分類

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

const updatesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});


const galleryCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { posts: postsCollection , updates: updatesCollection, gallery:galleryCollection };
