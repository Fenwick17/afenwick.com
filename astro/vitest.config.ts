import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    threads: false,
  },
});
