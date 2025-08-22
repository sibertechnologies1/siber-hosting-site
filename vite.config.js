import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base URL is correct
  build: {
    outDir: 'dist' // Vercel needs this to serve the correct files
  }
})
