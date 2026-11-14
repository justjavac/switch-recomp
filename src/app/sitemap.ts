import type { MetadataRoute } from "next";
import { games } from "@/lib/games";
import { platforms } from "@/lib/projects";
import { seriesList } from "@/lib/series";
import { siteConfig } from "@/lib/site";

const lastModified = new Date(siteConfig.updatedAt);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/series`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/platforms`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const gameEntries: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${siteConfig.url}/games/${game.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
    images: [`${siteConfig.url}${game.image}`],
  }));

  const seriesEntries: MetadataRoute.Sitemap = seriesList.map((series) => ({
    url: `${siteConfig.url}/series/${series.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const platformEntries: MetadataRoute.Sitemap = platforms.map((platform) => ({
    url: `${siteConfig.url}/platforms/${platform.id}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...gameEntries,
    ...seriesEntries,
    ...platformEntries,
  ];
}
