// src/pages/tiendas.ts
import fs from "node:fs/promises"
import path from "node:path"

export async function GET() {
  // Resuelve la ruta absoluta al index.html de la SPA copiada en /public/tiendas
  const filePath = path.resolve(process.cwd(), "public/tiendas/index.html")
  const html = await fs.readFile(filePath, "utf-8")

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  })
}
