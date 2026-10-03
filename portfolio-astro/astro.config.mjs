import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (AmrulFY.github.io) => base '/'.
export default defineConfig({
  site: 'https://amrulfy.github.io',
  integrations: [sitemap()],
});
