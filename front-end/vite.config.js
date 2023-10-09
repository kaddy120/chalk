import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname,'..', 'node_modules/bootstrap'),
      '~icons': path.resolve(__dirname, 'src/assets/icons'),
    },
  },
  server: {
    port: 8080,
  },
});
