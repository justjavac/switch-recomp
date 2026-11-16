import Link from "@/components/app-link";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import { GameArt } from "@/components/game-art";
import type { Game } from "@/lib/games";
import type { GameStats } from "@/lib/game-stats";
import { formatStars, platforms, statuses } from "@/lib/projects";
import { cn } from "@/lib/utils";

type GameCardProps = {
  game: Game;
  stats: GameStats;
  index: number;
};

export function GameCard({ game, stats, index }: GameCardProps) {
  const status = statuses[game.status];

  return (
    <Link
      href={`/games/${game.slug}`}
      prefetch={false}
      aria-label={`${game.titleZh}，${game.projects.length} 个项目`}
      className="group animate-card-in block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
      style={{ animationDelay: `${Math.min(index, 12) * 24}ms` }}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand/40 group-hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.9)]">
        <GameArt game={game} className="aspect-[16/9]" />

        <div className="flex flex-1 flex-col gap-2.5 p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate text-[15px] font-bold tracking-tight">
                {game.titleZh}
              </h3>
              <p className="mt-1 truncate text-[11px] text-muted-foreground">
                {game.titleEn}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-muted/60 px-2 py-0.5 text-[11px] font-medium tabular-nums">
              <Star className="size-3 fill-amber-400 text-amber-400" />
              {formatStars(game.stars)}
            </span>
          </div>

          <p className="line-clamp-2 min-h-10 text-[12.5px] leading-5 text-muted-foreground">
            {game.blurb}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 text-[10.5px] font-medium">
            {stats.playable > 0 ? (
              <span
                title="已标注为可玩的项目数"
                className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-600 dark:text-emerald-400"
              >
                {stats.playable} 个可玩
              </span>
            ) : null}
            {stats.reviewCount > 0 ? (
              <span
                title="AI 口碑平均分（满分 5 分）"
                className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 text-amber-600 dark:text-amber-400"
              >
                <Sparkles className="size-2.5" />
                AI {stats.reviewAverage.toFixed(1)}
              </span>
            ) : null}
            {stats.updatedDate ? (
              <span className="text-muted-foreground">
                {stats.updatedDate} 更新
              </span>
            ) : null}
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-border/70 pt-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <span className={cn("size-1.5 rounded-full", status.dot)} />
              {status.label}
            </span>
            <span aria-hidden className="h-3 w-px bg-border" />
            <span className="flex min-w-0 items-center gap-1.5 text-muted-foreground">
              {game.platforms.map((platformId) => {
                const platform = platforms.find((item) => item.id === platformId);
                if (!platform) return null;
                const PlatformIcon = platform.icon;
                return (
                  <span
                    key={platformId}
                    title={platform.label}
                    className="inline-flex"
                  >
                    <PlatformIcon className="size-3.5" />
                  </span>
                );
              })}
            </span>
            <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[11.5px] font-semibold text-foreground transition-colors group-hover:text-brand">
              {game.projects.length} 个项目
              <ArrowUpRight className="size-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
