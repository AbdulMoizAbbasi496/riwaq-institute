import type { MetadataRoute } from "next";

import { courses } from "@/data/courses";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...courses.map(
      (course) =>
        ({
          url: `${siteConfig.url}/courses/${course.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.8,
        }) as const,
    ),
  ];
}