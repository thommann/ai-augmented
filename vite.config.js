import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Base path für GitHub Pages (https://<user>.github.io/ai-augmented/).
// Bei eigener Domain (ai-augmented.ch) VITE_BASE=/ setzen.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/ai-augmented/',
  plugins: [vue()],
})
