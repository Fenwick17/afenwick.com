import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
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
  ],
});
