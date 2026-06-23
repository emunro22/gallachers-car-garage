import type { MetadataRoute } from "next";

const BASE_URL = "https://gallacherscargarage.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainPages = [
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const seoPages = [
    "car-repair-near-me",
    "mot-blantyre",
    "car-mechanic-south-lanarkshire",
    "brake-repair-blantyre",
    "car-servicing-blantyre",
    "diagnostics-blantyre",
    "clutch-repair-blantyre",
    "timing-belt-replacement-blantyre",
    "van-repair-south-lanarkshire",
    "tyres-batteries-blantyre",
    "suspension-repair-blantyre",
    "exhaust-repair-blantyre",
    "engine-repair-blantyre",
    "garage-near-me-blantyre",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const servicePages = [
    "car-van-repairs",
    "mot-testing",
    "servicing",
    "brakes",
    "diagnostics",
    "suspension",
    "clutches",
    "timing-belts",
    "engine-work",
    "exhausts",
    "tyres-batteries",
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...mainPages, ...servicePages, ...seoPages];
}
