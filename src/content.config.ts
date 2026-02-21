import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const general = defineCollection({
    loader: glob({ pattern: 'general.json', base: 'src/content' }),
    schema: z.any(),
});

const education = defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/education' }),
    schema: z.any(),
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/projects' }),
    schema: z.any(),
});

const competitions = defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/competitions' }),
    schema: z.any(),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/blog' }),
    schema: z.any(),
});

const team = defineCollection({
    loader: glob({ pattern: '**/*.json', base: 'src/content/team' }),
    schema: z.any(),
});

export const collections = {
    general,
    education,
    projects,
    competitions,
    blog,
    team,
};
