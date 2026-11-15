import { games } from "@/lib/games";
import { platforms, statuses } from "@/lib/projects";
import { projectUpdates } from "@/lib/project-updates";
import { siteConfig } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

async function buildFeed() {
  "use cache";
  const items = games
    .flatMap((game) =>
      game.projects.flatMap((project) => {
        const updatedAt = projectUpdates[project.repo];
        if (!updatedAt) return [];
        return [{ game, project, updatedAt }];
      }),
    )
    .sort(
      (a, b) =>
        b.updatedAt.localeCompare(a.updatedAt) ||
        b.project.stars - a.project.stars,
    )
    .slice(0, 50);

  const feedUrl = `${siteConfig.url}/feed.xml`;

  const entries = items
    .map(({ game, project, updatedAt }) => {
      const link = `${siteConfig.url}/games/${game.slug}`;
      const platformLabels = project.platforms
        .map((id) => platforms.find((platform) => platform.id === id)?.label)
        .filter(Boolean)
        .join(" / ");

      return [
        "    <item>",
        `      <title>${escapeXml(`${game.titleZh}：${project.titleZh}`)}</title>`,
        `      <link>${escapeXml(link)}</link>`,
        `      <guid isPermaLink="false">${escapeXml(`${link}#${project.id}`)}</guid>`,
        `      <pubDate>${new Date(`${updatedAt}T00:00:00+08:00`).toUTCString()}</pubDate>`,
        `      <description>${escapeXml(
          `${project.description} 状态：${statuses[project.status].label}；平台：${platformLabels}`,
        )}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteConfig.name} · 项目更新`)}</title>
    <link>${escapeXml(siteConfig.url)}</link>
    <description>${escapeXml("Switch 游戏静态重编译项目与仓库最近更新")}</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date(`${siteConfig.updatedAt}T00:00:00+08:00`).toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;

  return xml;
}

export async function GET() {
  const xml = await buildFeed();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
