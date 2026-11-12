import { games, type Game } from "@/lib/games";
import type { Project } from "@/lib/projects";
import { projectUpdates } from "@/lib/project-updates";
import { siteConfig } from "@/lib/site";

export type RecentUpdate = {
  game: Game;
  project: Project;
  updatedAt: string;
};

const latestByGame = new Map<string, RecentUpdate>();

for (const game of games) {
  for (const project of game.projects) {
    const updatedAt = projectUpdates[project.repo];
    if (!updatedAt) continue;

    const existing = latestByGame.get(game.slug);
    if (!existing || updatedAt > existing.updatedAt) {
      latestByGame.set(game.slug, { game, project, updatedAt });
    }
  }
}

export const recentUpdates = [...latestByGame.values()]
  .sort(
    (a, b) =>
      b.updatedAt.localeCompare(a.updatedAt) ||
      b.project.stars - a.project.stars,
  )
  .slice(0, 6);

export function getRecentUpdatesFor(
  items: Project[],
  limit = 4,
): RecentUpdate[] {
  return items
    .map((project) => {
      const updatedAt = projectUpdates[project.repo];
      if (!updatedAt) return null;

      const game = games.find((entry) =>
        entry.projects.some((entryProject) => entryProject.id === project.id),
      );
      if (!game) return null;

      return { game, project, updatedAt };
    })
    .filter((item): item is RecentUpdate => item !== null)
    .sort(
      (a, b) =>
        b.updatedAt.localeCompare(a.updatedAt) ||
        b.project.stars - a.project.stars,
    )
    .slice(0, limit);
}

export function formatUpdateDate(updatedAt: string) {
  const updated = Date.parse(`${updatedAt}T00:00:00Z`);
  const snapshot = Date.parse(`${siteConfig.updatedAt}T00:00:00Z`);

  if (!Number.isFinite(updated) || !Number.isFinite(snapshot)) {
    return updatedAt.slice(5).replace("-", "/");
  }

  const days = Math.round((snapshot - updated) / 86_400_000);

  if (days <= 0) return "今天";
  if (days === 1) return "昨天";
  if (days < 7) return `${days} 天前`;

  return updatedAt.slice(5).replace("-", "/");
}
