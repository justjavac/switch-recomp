import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon, GitlabIcon } from "@/components/brand-icons";
import { Card, CardContent } from "@/components/ui/card";
import {
  formatStars,
  platforms,
  repoAddress,
  statuses,
  type Project,
} from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statuses[project.status];
  const GameIcon = project.icon;
  const HostIcon = project.host === "github" ? GithubIcon : GitlabIcon;

  return (
    <Link
      href={`/go/${project.id}`}
      aria-label={`${project.titleZh} — ${repoAddress(project)}，查看外部链接提示`}
      className="group animate-card-in block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
      style={{ animationDelay: `${Math.min(index, 12) * 24}ms` }}
    >
      <Card className="relative h-full gap-0 overflow-hidden rounded-2xl border border-border bg-card py-0 shadow-none transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-brand/40">
        <CardContent className="flex h-full flex-col gap-3.5 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-muted/40 text-foreground transition-colors group-hover:border-brand/30 group-hover:text-brand">
              <GameIcon className="size-[18px]" />
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="truncate text-[15px] leading-snug font-bold tracking-tight">
                {project.titleZh}
              </h3>
              <p className="mt-1 truncate text-[11px] text-muted-foreground">
                {project.game}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-muted/60 px-2 py-0.5 text-[10px] font-medium tabular-nums text-muted-foreground">
              <Star className="size-2.5 fill-amber-400 text-amber-400" />
              {formatStars(project.stars)}
            </span>
          </div>

          <p className="line-clamp-2 min-h-12 text-[13px] leading-6 text-muted-foreground">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <span className={`size-1.5 rounded-full ${status.dot}`} />
              {status.label}
            </span>
            {project.platforms.map((platformId) => {
              const platform = platforms.find((item) => item.id === platformId);
              if (!platform) return null;
              const PlatformIcon = platform.icon;
              return (
                <span
                  key={platformId}
                  title={platform.label}
                  className="inline-flex items-center gap-1 rounded border border-border/80 px-2 py-0.5 text-[11px] text-muted-foreground"
                >
                  <PlatformIcon className="size-2.5" />
                  {platform.short}
                </span>
              );
            })}
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-border/70 pt-3">
            <HostIcon className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
            <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
              {repoAddress(project)}
            </span>
            <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
