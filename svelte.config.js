import adapter from '@sveltejs/adapter-auto';
import { defineConfig } from 'vite';
import preprocess from 'svelte-preprocess';

// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// for more information about preprocessors
const config = defineConfig({
  preprocess: preprocess({
    typescript: {}, // Puedes agregar configuraciones de TypeScript aquí si es necesario
  }),
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
  },
});

export default config;


// I've changed this file