import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(), // override automatically generated description if it exists.
        category: z.string().optional(),
        tags: z.array(z.string()).optional(),
        pinned: z.boolean().optional(),
    }),
});

const about = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        update: z.date(),
    }),
});

export const collections = {
    blog,
    about,
};
