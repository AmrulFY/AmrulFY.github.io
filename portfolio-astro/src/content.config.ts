import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    repo: z.string().url(),
    demo: z.string().url().optional(),
    metric: z.string().optional(), // mis. "F1 0.94" – isi setelah diverifikasi
    order: z.number().default(99),
  }),
});

export const collections = { projects };
