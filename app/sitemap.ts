import type { MetadataRoute } from "next"
import { readdirSync, statSync } from "node:fs"
import path from "node:path"
import { caseStudies } from "@/lib/case-studies"
import { SITE_URL } from "@/lib/site"

// Static routes are discovered from the app directory so new pages are picked up automatically.
// Dynamic segments ([slug]) are skipped here and expanded below from their data source.
function findRoutes(dir: string, base = ""): string[] {
  const routes: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry)
    if (!statSync(full).isDirectory()) continue
    if (entry.startsWith("[") || entry.startsWith("_") || entry.startsWith("(")) continue
    const route = `${base}/${entry}`
    if (readdirSync(full).includes("page.tsx")) routes.push(route)
    routes.push(...findRoutes(full, route))
  }
  return routes
}

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ["", ...findRoutes(path.join(process.cwd(), "app"))]
  const storyRoutes = caseStudies.map((s) => `/resources/success-stories/${s.slug}`)

  return [...staticRoutes, ...storyRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }))
}
