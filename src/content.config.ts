import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const valuePillars = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/value-pillars' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    gradient: z.string(),
    order: z.number(),
  }),
});

const opportunityPaths = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/opportunity-paths' }),
  schema: z.object({
    path: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    tags: z.array(z.string()),
    tagStyle: z.enum(['pills', 'checklist']),
    order: z.number(),
  }),
});

const marketStats = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/market-stats' }),
  schema: z.object({
    label: z.string(),
    value: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const strategicValues = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/strategic-values' }),
  schema: z.object({
    value: z.string(),
    label: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const acquisitionSteps = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/acquisition-steps' }),
  schema: z.object({
    step: z.number(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'value-pillars': valuePillars,
  'opportunity-paths': opportunityPaths,
  'market-stats': marketStats,
  'strategic-values': strategicValues,
  'acquisition-steps': acquisitionSteps,
};
