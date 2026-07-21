import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://faiz-alfarisi.vercel.app";
  const projects = getAllProjects().map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/work`, lastModified: new Date(), priority: 0.9 },
    ...projects,
    { url: `${base}/journal`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/journey`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.5 },
  ];
}
