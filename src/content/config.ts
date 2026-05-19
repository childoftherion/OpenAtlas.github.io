import { defineCollection, z } from 'astro:content';

const journalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    date: z.date(), // Astro's content collections often convert dates to Date objects
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    image_width: z.number().optional(),
    image_height: z.number().optional(),
    readMinutes: z.number().optional(),
    // Add other fields from your frontmatter as needed
  }),
});

export const collections = {
  journal: journalCollection,
};
