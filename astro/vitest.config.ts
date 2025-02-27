import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    globals: true,
    coverage: {
      all: true,
      exclude: ['node_modules./**', 'vitest.config.ts', 'astro.config.mjs'],
      provider: 'istanbul',
    },
  },
});
