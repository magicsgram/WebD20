import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const pagesBase = process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/';

export default defineConfig({
  base: pagesBase,
  plugins: [wasm()],
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
});
