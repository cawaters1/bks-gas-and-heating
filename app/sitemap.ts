import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bksgasandheating.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/boilers`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/services/heating`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/plumbing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/bathrooms`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/emergency`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
