import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const htmlEntry = (file) => fileURLToPath(new URL(file, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: htmlEntry('index.html'),
        careers: htmlEntry('careers/index.html'),
        finance: htmlEntry('case-studies-finance/index.html'),
        sales: htmlEntry('case-studies-sales/index.html'),
        operations: htmlEntry('case-studies-operations/index.html'),
      },
    },
  },
})
