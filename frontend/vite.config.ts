
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    base: '/afc8e1d55/',
    build: {
      outDir: '.output/afc8e1d55',
      emptyOutDir: true
    },
    server: {
      host: true,
      strictPort: true,
      port: 5173
    }
  })
