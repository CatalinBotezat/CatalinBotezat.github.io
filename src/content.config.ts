import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// To add an item, drop a new .md file into the matching folder in src/content/.
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string().optional(),
    date: z.coerce.date(),
    status: z.string().optional(), // e.g. "In preparation", "Poster"
    summary: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

const presentations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/presentations' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    event: z.string(),
    location: z.string().optional(),
    date: z.coerce.date(),
    kind: z.string(), // Talk, Poster, Roundtable
    slides: z.string().optional(), // path in /public
    thumb: z.string().optional(),
    youtube: z.string().optional(), // video id
    youtubeStart: z.number().optional(),
  }),
});

const competitions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/competitions' }),
  schema: z.object({
    title: z.string(),
    result: z.string().optional(),
    year: z.string(),
    order: z.number().default(0),
  }),
});

const impact = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/impact' }),
  schema: z.object({
    title: z.string(),
    place: z.string(),
    period: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { research, presentations, competitions, impact };
