import { MetadataRoute } from "next";
import { 
  AI_SOLUTIONS_DATA, 
  SOFTWARE_DEV_DATA, 
  HIRE_ENGINEERS_DATA, 
  INDUSTRIES_DATA, 
  LOCATIONS_DATA 
} from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://znxlabs.com";
  const now = new Date("2026-10-18T00:00:00.000Z");

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/ai-solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/software-development`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/hire-engineers`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/how-we-work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const aiRoutes: MetadataRoute.Sitemap = AI_SOLUTIONS_DATA.map((srv) => ({
    url: `${baseUrl}/ai-solutions/${srv.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const softwareRoutes: MetadataRoute.Sitemap = SOFTWARE_DEV_DATA.map((srv) => ({
    url: `${baseUrl}/software-development/${srv.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const talentRoutes: MetadataRoute.Sitemap = HIRE_ENGINEERS_DATA.map((role) => ({
    url: `${baseUrl}/hire-engineers/${role.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRIES_DATA.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS_DATA.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...coreRoutes,
    ...aiRoutes,
    ...softwareRoutes,
    ...talentRoutes,
    ...industryRoutes,
    ...locationRoutes,
  ];
}
