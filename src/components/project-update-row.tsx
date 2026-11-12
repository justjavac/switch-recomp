import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GameArt } from "@/components/game-art";
import { statuses } from "@/lib/projects";
import { formatUpdateDate, type RecentUpdate } from "@/lib/updates";
import { cn } from "@/lib/utils";

export function ProjectUpdateRow({ game, project, updatedAt }: RecentUpdate) {
  const status = statuses[project.status];

  return (
    <article className="group flex min-w-0 gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-brand/40">
      <Link
        href={`/games/${game.slug}`}
        aria-label={`查看 ${game.titleZh}`}
        className="w-28 shrink-0 overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
      >
        <GameArt game={game} className="aspect-[16/9]" sizes="112px" />
      </Link>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[10.5px] font-medium text-muted-foreground">
          {game.titleZh}
        </p>
        <Link
          href={`/go/${project.id}`}
          className="mt-0.5 block line-clamp-2 text-[13px] leading-5 font-semibold outline-none transition-colors hover:text-brand focus-visible:text-brand"
        >
          {project.titleZh}
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10.5px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className={cn("size-1.5 rounded-full", status.dot)} />
            {status.label}
          </span>
          <span aria-hidden>·</span>
          <span>{formatUpdateDate(updatedAt)}</span>
          <ArrowUpRight className="ml-auto size-3 text-muted-foreground transition-colors group-hover:text-brand" />
        </div>
      </div>
    </article>
  );
}
