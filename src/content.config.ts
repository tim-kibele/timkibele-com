import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.object({ de: z.string(), en: z.string() });

// Gleiche Struktur für jede Projektseite, je Sprache.
const detail = z.object({
  summary: z.string(),
  motivation: z.string(),
  learnings: z.array(z.object({ title: z.string(), text: z.string() })),
  stack: z.array(z.string()),
  note: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: text,
    description: text,
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    year: z.number(),
    // Kleine Animation am rechten Rand der Projektseite, Namen siehe src/components/animations/index.ts
    animation: z.enum(['neural-net', 'workflow', 'scan']).optional(),
    detail: z.object({ de: detail, en: detail }).optional(),
    featured: z.boolean().default(false),
  }),
});

// Interessen: eine Datei pro Unterseite, auf der Übersicht alphabetisch nach Titel sortiert.
// `text` (optional, je Sprache) ersetzt den Platzhalter.
const interests = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/interests' }),
  schema: z.object({
    title: text,
    text: text.optional(),
  }),
});

export const collections = { projects, interests };
