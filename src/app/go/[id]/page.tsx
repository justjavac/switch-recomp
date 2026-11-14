import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ShieldAlert, Star } from "lucide-react";
import { GithubIcon, GitlabIcon } from "@/components/brand-icons";
import { games } from "@/lib/games";
import {
  formatStars,
  platforms,
  projects,
  repoAddress,
  repoUrl,
  statuses,
} from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type GoPageProps = {
  params: Promise<{ id: string }>;
};

const GITHUB_TARGET_ID = "github";

export function generateStaticParams() {
  return [
    ...projects.map((project) => ({ id: project.id })),
    { id: GITHUB_TARGET_ID },
  ];
}

export async function generateMetadata({
  params,
}: GoPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  return {
    title: project ? `前往 ${repoAddress(project)}` : "即将离开本站",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function GoPage({ params }: GoPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  const isGithubProfile = id === GITHUB_TARGET_ID;

  if (!project && !isGithubProfile) {
    notFound();
  }

  const game = project
    ? games.find((item) =>
        item.projects.some((entry) => entry.id === project.id),
      )
    : undefined;
  const target = project ? repoUrl(project) : siteConfig.github;
  const host = project
    ? project.host === "github"
      ? "github.com"
      : "gitlab.com"
    : "github.com";
  const HostIcon = project?.host === "gitlab" ? GitlabIcon : GithubIcon;
  const title = project?.titleZh ?? "GitHub @justjavac";
  const address = project ? repoAddress(project) : siteConfig.githubLabel;
  const status = project ? statuses[project.status] : null;
  const platformLabels = project
    ? project.platforms
        .map((platformId) => platforms.find((item) => item.id === platformId)?.label)
        .filter(Boolean)
        .join(" / ")
    : null;
  const gameHref = game ? `/games/${game.slug}` : "/";
  const otherProjects =
    game && project
      ? game.projects
          .filter((entry) => entry.id !== project.id)
          .sort((a, b) => b.stars - a.stars)
          .slice(0, 2)
      : [];

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="h-1 w-full bg-gradient-to-r from-brand to-brand-2" />
        <div className="p-6 sm:p-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
            <ShieldAlert className="size-3.5" />
            外部链接提示
          </span>

          <h1 className="mt-4 text-[26px] leading-tight font-bold tracking-tight sm:text-[30px]">
            即将离开 SwitchRecomp
          </h1>
          <p className="mt-2.5 text-[13.5px] leading-7 text-muted-foreground">
            你即将前往{" "}
            <span className="font-semibold text-foreground">{host}</span>{" "}
            上的外部页面。目标页面的内容、安全性与可用性由该站点及项目作者负责。
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-background/50 p-4">
            <div className="flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground">
                <HostIcon className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[14px] font-semibold">{title}</p>
                <p className="mt-0.5 truncate font-mono text-[11px] text-muted-foreground">
                  {address}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-muted-foreground">
                  {game ? <span>{game.titleZh}</span> : null}
                  {status ? (
                    <span className="inline-flex items-center gap-1">
                      <span className={cn("size-1.5 rounded-full", status.dot)} />
                      {status.label}
                    </span>
                  ) : null}
                  {platformLabels ? <span>{platformLabels}</span> : null}
                  {project ? (
                    <span className="inline-flex items-center gap-0.5 tabular-nums">
                      <Star className="size-3 fill-amber-400 text-amber-400" />
                      {formatStars(project.stars)}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-5 space-y-1.5 text-[12px] leading-6 text-muted-foreground">
            <li>· 本站只索引项目，不托管游戏文件、密钥或预编译游戏。</li>
            <li>· 请确认目标链接可信，并使用自己合法持有的游戏。</li>
            <li>· 外部页面可能包含构建指南、Issue 与发布包，请自行判断风险。</li>
          </ul>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={target}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-brand-2 px-4 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_-12px_var(--brand)] outline-none transition-transform duration-150 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              继续访问 {host}
              <ArrowUpRight className="size-4" />
            </a>

            <Link
              href={gameHref}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-[13px] font-semibold text-foreground outline-none transition-colors hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              <ArrowLeft className="size-4" />
              {game ? "返回游戏页" : "返回首页"}
            </Link>
          </div>
        </div>
      </div>

      {game ? (
        <section className="mt-5 rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-[13px] font-semibold">离开前，再看看</h2>
            <Link
              href={gameHref}
              className="shrink-0 text-[11px] font-medium text-brand hover:underline"
            >
              全部 {game.projects.length} 个项目
            </Link>
          </div>

          {otherProjects.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {otherProjects.map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between gap-3 text-[12px]"
                >
                  <span className="min-w-0 truncate text-foreground">
                    {entry.titleZh}
                  </span>
                  <span className="shrink-0 font-mono text-[10.5px] text-muted-foreground">
                    {formatStars(entry.stars)} ★
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-[12px] text-muted-foreground">
              这款游戏目前只有一个项目，可以回到游戏页查看完整信息。
            </p>
          )}

          <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 text-[11.5px]">
            <Link
              href={gameHref}
              className="font-medium text-foreground transition-colors hover:text-brand"
            >
              查看游戏详情
            </Link>
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              浏览全部游戏
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  );
}
