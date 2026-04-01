import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // El repositorio se publica como proyecto en GitHub Pages.
  base: '/PPT3-2026/',
})
