import { Clock } from "lucide-react";
import { ProjectUpdateRow } from "@/components/project-update-row";
import { siteConfig } from "@/lib/site";
import { recentUpdates } from "@/lib/updates";

export function RecentUpdates() {
  if (recentUpdates.length === 0) return null;

  return (
    <section
      aria-labelledby="recent-heading"
      className="mx-auto max-w-7xl px-4 pt-10 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2
            id="recent-heading"
            className="flex items-center gap-2.5 text-[24px] font-bold tracking-tight sm:text-[26px]"
          >
            <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-brand to-brand-2" />
            最近更新
          </h2>
          <p className="mt-1.5 max-w-xl text-[13px] leading-6 text-muted-foreground">
            按仓库最近推送时间排序，优先展示每款游戏最近活跃的项目。
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground">
          <Clock className="size-3.5 text-brand" />
          数据更新于 {siteConfig.snapshotDate}
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recentUpdates.map((update) => (
          <ProjectUpdateRow key={update.project.id} {...update} />
        ))}
      </div>
    </section>
  );
}
