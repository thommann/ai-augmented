import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Base path für GitHub Pages (https://<user>.github.io/ai-augmented/).
// Bei eigener Domain (ai-augmented.ch) VITE_BASE=/ und
// VITE_SITE_URL=https://ai-augmented.ch setzen.
const siteUrl = (
  process.env.VITE_SITE_URL ?? 'https://thommann.github.io/ai-augmented'
).replace(/\/+$/, '')

// In index.html (%VITE_SITE_URL%) und im Client-Code
// (import.meta.env.VITE_SITE_URL) verfügbar machen.
process.env.VITE_SITE_URL = siteUrl

// robots.txt und sitemap.xml beim Build erzeugen, damit die URLs immer zur
// konfigurierten Site-URL passen. Impressum/Datenschutz sind noindex und
// stehen deshalb nicht in der Sitemap.
function seoFiles() {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })

      const lastmod = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source:
          '<?xml version="1.0" encoding="UTF-8"?>\n' +
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
          `  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>\n` +
          '</urlset>\n',
      })
    },
  }
}

export default defineConfig({
  base: process.env.VITE_BASE ?? '/ai-augmented/',
  plugins: [vue(), seoFiles()],
})
