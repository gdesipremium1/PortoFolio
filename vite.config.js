import { defineConfig } from 'vite'

export default defineConfig({
  base: '/PortoFolio/',   // important pour GitHub Pages
  build: {
    outDir: 'docs'
  },
  define: {
    __ASSETS_PATH__: JSON.stringify(
      process.env.NODE_ENV === "production" ? "docs/assets" : "src/assets"
    )
  }
})
