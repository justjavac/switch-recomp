import type { Metadata } from "next";
import Link from "@/components/app-link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
  Clock,
  Layers,
  Star,
} from "lucide-react";
import { GameCard } from "@/components/game-card";
import { JsonLd } from "@/components/json-ld";
import { ProjectUpdateRow } from "@/components/project-update-row";
import { gameStats } from "@/lib/game-stats";
import { games } from "@/lib/games";
import {
  formatStars,
  platforms,
  projects,
  statuses,
} from "@/lib/projects";
import { seriesList } from "@/lib/series";
import { siteConfig } from "@/lib/site";
import { getRecentUpdatesFor } from "@/lib/updates";

type PlatformPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return platforms.map((platform) => ({ id: platform.id }));
}

export async function generateMetadata({
  params,
}: PlatformPageProps): Promise<Metadata> {
  const { id } = await params;
  const platform = platforms.find((item) => item.id === id);

  if (!platform) return {};

  const platformGames = games.filter((game) =>
    game.platforms.includes(platform.id),
  );
  const platformProjects = projects.filter((project) =>
    project.platforms.includes(platform.id),
  );
  const playableCount = platformProjects.filter(
    (project) => project.status === "playable",
  ).length;
  const description = `收录 ${platformGames.length} 款支持 ${platform.label} 的 Switch 游戏和 ${platformProjects.length} 个原生移植项目，其中 ${playableCount} 个标注为可玩。`;
  const topGame = platformGames[0] ?? games[0];

  return {
    title: `${platform.label} 移植游戏`,
    description,
    alternates: {
      canonical: `/platforms/${platform.id}`,
    },
    openGraph: {
      title: `${platform.label} 移植游戏 · ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/platforms/${platform.id}`,
      locale: "zh_CN",
      images: [
        {
          url: topGame.image,
          width: 1200,
          height: 675,
          alt: `${topGame.titleZh} 游戏封面`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${platform.label} 移植游戏 · ${siteConfig.name}`,
      description,
      images: [topGame.image],
    },
  };
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { id } = await params;
  const platform = platforms.find((item) => item.id === id);

  if (!platform) {
    notFound();
  }

  const PlatformIcon = platform.icon;
  const platformGames = games
    .filter((game) => game.platforms.includes(platform.id))
    .sort((a, b) => b.stars - a.stars);
  const platformProjects = projects
    .filter((project) => project.platforms.includes(platform.id))
    .sort((a, b) => b.stars - a.stars);
  const playableCount = platformProjects.filter(
    (project) => project.status === "playable",
  ).length;
  const stars = platformGames.reduce((total, game) => total + game.stars, 0);
  const gameTitles = platformGames.map((game) => game.titleZh);
  const gameTitleSummary = `${gameTitles.slice(0, 6).join("、")}${
    gameTitles.length > 6 ? ` 等 ${gameTitles.length} 款` : ""
  }`;
  const topProject = platformProjects[0];
  const topProjectGame = topProject
    ? games.find((game) =>
        game.projects.some((project) => project.id === topProject.id),
      )
    : undefined;
  const topProjectStatus = topProject ? statuses[topProject.status] : null;
  const platformSeries = seriesList
    .map((series) => ({
      series,
      count: series.games.filter((game) =>
        game.platforms.includes(platform.id),
      ).length,
    }))
    .filter((item) => item.count > 0)
    .sort(
      (a, b) =>
        b.count - a.count || b.series.stars - a.series.stars,
    )
    .slice(0, 8);
  const platformUpdates = getRecentUpdatesFor(platformProjects, 4);

  const faqs = [
    {
      q: `${platform.label}能玩哪些 Switch 游戏？`,
      a: `本站目前收录 ${platformGames.length} 款：${gameTitleSummary}。`,
    },
    {
      q: `${platform.label}移植项目需要准备什么？`,
      a: "需要自备合法购买并转储的游戏文件，并按项目 README 准备运行时依赖。本站不提供游戏本体、ROM、密钥或固件。",
    },
    {
      q: `${platform.label}上哪个项目最活跃？`,
      a: topProject
        ? `按 Star 数看是《${topProject.titleZh}》${
            topProjectGame ? `（${topProjectGame.titleZh}）` : ""
          }：${formatStars(topProject.stars)} Star，状态为${topProjectStatus?.label ?? "未知"}。`
        : `目前还没有收录支持 ${platform.label} 的项目。`,
    },
  ];

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${platform.label} 移植游戏`,
    description: `支持 ${platform.label} 的 Switch 游戏原生移植项目合集。`,
    url: `${siteConfig.url}/platforms/${platform.id}`,
    inLanguage: "zh-CN",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: platformGames.length,
      itemListElement: platformGames.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.titleZh,
        url: `${siteConfig.url}/games/${game.slug}`,
      })),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "游戏库",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "平台支持",
        item: `${siteConfig.url}/platforms`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: platform.label,
        item: `${siteConfig.url}/platforms/${platform.id}`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 pb-20 sm:px-6">
      <JsonLd data={[collectionLd, breadcrumbLd, faqLd]} />

      <nav
        aria-label="面包屑"
        className="text-[12px] leading-6 text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          游戏库
        </Link>
        <span className="mx-2 text-border">/</span>
        <Link
          href="/platforms"
          className="transition-colors hover:text-foreground"
        >
          平台支持
        </Link>
        <span className="mx-2 text-border">/</span>
        <span className="text-foreground">{platform.label}</span>
      </nav>

      <section className="mt-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
          <PlatformIcon className="size-3.5" />
          平台聚合
        </span>
        <h1 className="mt-3.5 text-[2rem] font-bold tracking-[-0.01em] sm:text-[2.5rem]">
          {platform.label} 上的 Switch 移植
        </h1>
        <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.9] text-muted-foreground">
          这里汇总所有声明支持 {platform.label} 的游戏与项目。平台信息来自项目自述或发布说明，实际可用版本请以仓库 README 和发布页为准。
        </p>
      </section>

      <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            支持游戏
          </dt>
          <dd className="mt-1 text-[20px] font-bold tabular-nums">
            {platformGames.length}
          </dd>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            移植项目
          </dt>
          <dd className="mt-1 text-[20px] font-bold tabular-nums">
            {platformProjects.length}
          </dd>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            可玩项目
          </dt>
          <dd className="mt-1 text-[20px] font-bold tabular-nums">
            {playableCount}
          </dd>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            社区热度
          </dt>
          <dd className="mt-1 flex items-center gap-1 text-[20px] font-bold tabular-nums">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {formatStars(stars)}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-[11.5px] font-medium text-muted-foreground">
          切换平台
        </span>
        {platforms.map((item) => {
          const ItemIcon = item.icon;
          const active = item.id === platform.id;
          return (
            <Link
              key={item.id}
              href={`/platforms/${item.id}`}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "inline-flex items-center gap-1.5 rounded-full border border-transparent bg-gradient-to-r from-brand to-brand-2 px-3 py-1.5 text-[11.5px] font-semibold text-white"
                  : "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
              }
            >
              <ItemIcon className="size-3.5" />
              {item.label}
            </Link>
          );
        })}
      </div>

      {platformSeries.length > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-[11.5px] font-medium text-muted-foreground">
            相关系列
          </span>
          {platformSeries.map(({ series, count }) => (
            <Link
              key={series.slug}
              href={`/series/${series.slug}`}
              title={`${count} 款游戏支持 ${platform.label}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              <Layers className="size-3.5" />
              {series.name}
              <span className="text-[10.5px] tabular-nums">{count}</span>
            </Link>
          ))}
        </div>
      ) : null}

      <section
        aria-labelledby="platform-games-heading"
        className="mt-9 scroll-mt-24"
        id="games"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="platform-games-heading"
              className="flex items-center gap-2.5 text-[24px] font-bold tracking-tight sm:text-[26px]"
            >
              <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-brand to-brand-2" />
              支持 {platform.label} 的游戏
            </h2>
            <p className="mt-1.5 text-[13px] leading-6 text-muted-foreground">
              按社区热度排序，进入游戏页查看具体项目。
            </p>
          </div>
          <Link
            href="/platforms"
            className="text-[11.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            全部平台
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformGames.map((game, index) => (
            <GameCard
              key={game.slug}
              game={game}
              stats={gameStats[game.slug]}
              index={index}
            />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="platform-projects-heading"
        className="mt-10 border-t border-border pt-8"
      >
        <h2
          id="platform-projects-heading"
          className="text-[22px] font-bold tracking-tight sm:text-[24px]"
        >
          热门项目
        </h2>
        <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
          按 Star 数排序，点击项目会先进入外链提示页。
        </p>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {platformProjects.slice(0, 6).map((project) => {
            const game = games.find((item) =>
              item.projects.some((entry) => entry.id === project.id),
            );
            const projectStatus = statuses[project.status];

            return (
              <Link
                key={project.id}
                href={`/go/${project.id}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-brand/40"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted/60 text-muted-foreground">
                  <PlatformIcon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-semibold">
                    {project.titleZh}
                  </p>
                  <p className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
                    {game?.titleZh} · {projectStatus.label}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-[10.5px] text-muted-foreground tabular-nums">
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                  {formatStars(project.stars)}
                </span>
                <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
              </Link>
            );
          })}
        </div>
      </section>

      {platformUpdates.length > 0 ? (
        <section
          aria-labelledby="platform-updates-heading"
          className="mt-10 border-t border-border pt-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="platform-updates-heading"
                className="text-[22px] font-bold tracking-tight sm:text-[24px]"
              >
                最近更新
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
                支持 {platform.label} 且最近有推送的项目。
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground">
              <Clock className="size-3.5 text-brand" />
              数据更新于 {siteConfig.snapshotDate}
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {platformUpdates.map((update) => (
              <ProjectUpdateRow key={update.project.id} {...update} />
            ))}
          </div>
        </section>
      ) : null}

      <section
        aria-labelledby="platform-faq-heading"
        className="mt-10 border-t border-border pt-8"
      >
        <h2
          id="platform-faq-heading"
          className="text-[22px] font-bold tracking-tight sm:text-[24px]"
        >
          常见问题
        </h2>
        <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
          基于站内数据自动生成，最后更新 {siteConfig.snapshotDate}。
        </p>

        <div className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              open={index === 0}
              className="group px-4 sm:px-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg py-4 text-[13.5px] font-semibold outline-none focus-visible:ring-2 focus-visible:ring-brand/50 [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-[13px] leading-7 text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/platforms"
          className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          返回全部平台
        </Link>
        <Link
          href="/"
          className="text-[12px] text-muted-foreground transition-colors hover:text-foreground"
        >
          浏览全部游戏
        </Link>
      </div>
    </div>
  );
}
