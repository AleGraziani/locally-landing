// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/tiendas/[...path]": {
      status: 301,
      destination: "/tiendas/index.html",
    },
  },
})
