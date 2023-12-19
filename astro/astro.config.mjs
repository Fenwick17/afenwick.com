import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from 'astro-sanity';
import sitemap from '@astrojs/sitemap';
import 'dotenv/config';

import robotsTxt from 'astro-robots-txt';
import vercelStatic from '@astrojs/vercel/static';

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
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
