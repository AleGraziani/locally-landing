// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/tiendas": "/tiendas/index.html",
    "/tiendas/": "/tiendas/index.html",
  },
})
