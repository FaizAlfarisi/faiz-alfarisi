import type { MetadataRoute } from "next";
import { getAllProjects, getPublishedWritings } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://faizalfarisi.vercel.app";
  const projects = getAllProjects().map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const articles = getPublishedWritings().map((writing) => ({
    url: `${base}/journal/${writing.slug}`,
    lastModified: writing.publishedAt
      ? new Date(writing.publishedAt)
      : new Date(),
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/work`, lastModified: new Date(), priority: 0.9 },
    ...projects,
    { url: `${base}/journal`, lastModified: new Date(), priority: 0.6 },
    ...articles,
    { url: `${base}/journey`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.5 },
  ];
}
