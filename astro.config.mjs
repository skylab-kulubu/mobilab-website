import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: 'server',
  integrations: [react(), keystatic()]
});