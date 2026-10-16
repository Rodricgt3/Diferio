import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Diferio';
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0] ?? 'Rodricgt3';
const base = process.env.GITHUB_PAGES === 'true' ? `/${repository}` : '/';

export default defineConfig({
  site: process.env.SITE_URL ?? `https://${owner}.github.io`,
  base,
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
