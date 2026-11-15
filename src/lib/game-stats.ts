import { games } from "@/lib/games";
import { projectUpdates } from "@/lib/project-updates";
import { gameReviews, summarizeReviews } from "@/lib/reviews";

export type GameStats = {
  playable: number;
  reviewAverage: number;
  reviewCount: number;
  updatedAt: string | null;
  updatedDate: string | null;
};

export const gameStats: Record<string, GameStats> = Object.fromEntries(
  games.map((game) => {
    const summary = summarizeReviews(gameReviews[game.slug] ?? []);
    const updatedAt =
      game.projects
        .map((project) => projectUpdates[project.repo])
        .filter((value): value is string => Boolean(value))
        .sort()
        .at(-1) ?? null;

    return [
      game.slug,
      {
        playable: game.projects.filter((project) => project.status === "playable")
          .length,
        reviewAverage: summary.average,
        reviewCount: summary.count,
        updatedAt,
        updatedDate: updatedAt ? updatedAt.slice(5).replace("-", "/") : null,
      },
    ];
  }),
);
