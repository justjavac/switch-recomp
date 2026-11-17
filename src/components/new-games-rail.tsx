import { ArrowRight, Sparkles } from "lucide-react";
import Link from "@/components/app-link";
import { GameArt } from "@/components/game-art";
import { gameStats } from "@/lib/game-stats";
import type { Game } from "@/lib/games";

export function NewGamesRail({ games }: { games: Game[] }) {
  if (games.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="new-games-heading"
      className="mx-auto max-w-7xl px-4 pt-10 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2
            id="new-games-heading"
            className="flex items-center gap-2 text-[17px] font-bold tracking-tight"
          >
            <Sparkles className="size-4 text-brand" />
            最近收录
          </h2>
          <p className="mt-1 text-[12.5px] text-muted-foreground">
            刚加入游戏库的 {games.length} 款作品，以及它们的移植项目。
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-1 text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          收录标准
          <ArrowRight className="size-3" />
        </Link>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {games.map((game) => {
          const stats = gameStats[game.slug];
          return (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="group w-[210px] shrink-0 overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-brand/40"
            >
              <GameArt game={game} sizes="210px" className="aspect-[16/9]" />
              <div className="p-3">
                <p className="truncate text-[13px] font-semibold transition-colors group-hover:text-brand">
                  {game.titleZh}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {game.projects.length} 个项目
                  {stats && stats.playable > 0
                    ? ` · ${stats.playable} 个可玩`
                    : ""}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
