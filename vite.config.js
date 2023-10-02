import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = typeof __dirname !== 'undefined' ? __dirname
  : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true,
  }
})

