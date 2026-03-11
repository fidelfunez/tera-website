import { MetadataRoute } from "next";
import { siteConfig } from "../config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1
    },
    {
      url: `${siteConfig.url}/privacidad`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3
    }
  ];
}
