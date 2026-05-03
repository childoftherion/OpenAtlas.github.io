import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    date: z.string().date(),
    image: z.string(),
    imageAlt: z.string(),
    readMinutes: z.number(),
  }),
});

export const collections = { journal };
