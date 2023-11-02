import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity';
import sitemap from '@astrojs/sitemap';
import 'dotenv/config';

import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://afenwick.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: 'production',
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
    sitemap(),
    robotsTxt(),
  ],
  output: 'static',
  adapter: vercelStatic(),
});
