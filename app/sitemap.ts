import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vetfusion.ai",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
