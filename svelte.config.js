import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [
    vitePreprocess(),
    preprocess({
      scss: {},
    }),
  ],
};

export default config;