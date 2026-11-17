import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "@/components/app-link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronDown, Flame, Star } from "lucide-react";
import { AdSlot } from "@/components/ad-slot";
import { GameArt } from "@/components/game-art";
import { GameCard } from "@/components/game-card";
import {
  FavoriteButton,
  RecordRecentView,
  ShareButton,
} from "@/components/game-actions";
import { GameReviews } from "@/components/game-reviews";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { gameStats } from "@/lib/game-stats";
import { games, getGame } from "@/lib/games";
import { adSlots } from "@/lib/ads";
import { formatStars, platforms, projects, repoUrl, statuses } from "@/lib/projects";
import { getGameReviews, summarizeReviews } from "@/lib/reviews";
import { getSeriesSlug } from "@/lib/series";
import { siteConfig } from "@/lib/site";
import { formatUpdateDate, getRecentUpdatesFor } from "@/lib/updates";
import { cn } from "@/lib/utils";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    return { title: "游戏未找到" };
  }

  const platformLabels = game.platforms
    .map((id) => platforms.find((platform) => platform.id === id)?.label)
    .filter(Boolean)
    .join("、");

  return {
    title: game.titleZh,
    description: `${game.titleZh}（${game.titleEn}）：${game.blurb} 收录 ${game.projects.length} 个社区重编译项目，覆盖 ${platformLabels}。`,
    keywords: [
      game.titleZh,
      game.titleEn,
      game.series,
      game.genre,
      "Switch 重编译",
      "Switch 移植",
      "PC 移植",
      ...game.platforms.map(
        (id) =>
          platforms.find((platform) => platform.id === id)?.label ?? id,
      ),
    ],
    alternates: {
      canonical: `/games/${game.slug}`,
    },
    openGraph: {
      title: `${game.titleZh} · ${siteConfig.name}`,
      description: `${game.blurb} 收录 ${game.projects.length} 个社区重编译项目。`,
      url: `/games/${game.slug}`,
      type: "website",
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.titleZh} · ${siteConfig.name}`,
      description: `${game.blurb} 收录 ${game.projects.length} 个社区重编译项目。`,
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    notFound();
  }

  const status = statuses[game.status];
  const seriesSlug = getSeriesSlug(game.series);
  const reviews = getGameReviews(game.slug);
  const reviewSummary = summarizeReviews(reviews);
  const sortedProjects = [...game.projects].sort((a, b) => b.stars - a.stars);
  const statusOrder = { playable: 0, beta: 1, experimental: 2 } as const;
  const recommended = [...game.projects].sort(
    (a, b) =>
      statusOrder[a.status] - statusOrder[b.status] || b.stars - a.stars,
  )[0];
  const playableCount = game.projects.filter(
    (project) => project.status === "playable",
  ).length;
  const betaCount = game.projects.filter(
    (project) => project.status === "beta",
  ).length;
  const experimentalCount = game.projects.length - playableCount - betaCount;
  const statusSummary = [
    playableCount ? `${playableCount} 个可玩` : null,
    betaCount ? `${betaCount} 个测试版` : null,
    experimentalCount ? `${experimentalCount} 个实验性` : null,
  ]
    .filter(Boolean)
    .join("、");
  const platformLabels = game.platforms
    .map((id) => platforms.find((platform) => platform.id === id)?.label)
    .filter(Boolean)
    .join("、");
  const platformShortLabels = game.platforms
    .map((id) => platforms.find((platform) => platform.id === id)?.short)
    .filter(Boolean)
    .join(" / ");
  const recommendedPlatforms = recommended.platforms
    .map((id) => platforms.find((platform) => platform.id === id)?.label)
    .filter(Boolean)
    .join(" / ");
  const recommendedStatus = statuses[recommended.status].label;
  const summaryHeadline =
    playableCount > 0
      ? `《${game.titleZh}》已有 ${playableCount} 个可玩项目，覆盖 ${platformLabels}。`
      : `《${game.titleZh}》目前有 ${game.projects.length} 个社区项目，尚未标注为完全可玩。`;
  const summaryBody = `推荐先看「${recommended.titleZh}」：${formatStars(recommended.stars)} Star，状态为${recommendedStatus}，支持 ${recommendedPlatforms}。项目不含游戏本体，需要自备正版游戏转储。`;

  const faqs = [
    {
      q: `${game.titleZh}现在有可用的原生移植吗？`,
      a: `有。本站目前收录 ${game.projects.length} 个社区项目，覆盖 ${platformLabels}；其中 ${statusSummary || "暂未标注项目状态"}。`,
    },
    {
      q: `玩${game.titleZh}的移植项目需要购买正版游戏吗？`,
      a: "需要。本站只索引 GitHub / GitLab 仓库，不提供游戏本体、ROM、密钥或固件。请自行合法购买游戏并完成转储，并遵守当地法律与游戏许可协议。",
    },
    {
      q: `${game.titleZh}应该先试哪个项目？`,
      a: `优先推荐「${recommended.titleZh}」：${formatStars(recommended.stars)} Star，状态为${recommendedStatus}，支持 ${recommendedPlatforms}。如果设备或版本不匹配，可以在上方的项目列表中按平台和状态选择。`,
    },
    {
      q: `${game.titleZh}的移植项目支持哪些平台？`,
      a: `当前项目覆盖 ${platformLabels}。不同项目的支持范围不同，具体以仓库 README 为准；也可以在平台支持页查看完整分布。`,
    },
    {
      q: "项目状态是怎么划分的？",
      a: "本站把项目标注为可玩、测试版或实验性：可玩表示主要流程可运行；测试版可能存在菜单、性能或兼容性问题；实验性表示仍在早期阶段。状态来自项目公开说明，不代表当前构建一定可用。",
    },
  ];

  const relatedGames = games
    .filter((item) => item.slug !== game.slug)
    .map((item) => {
      const sharedPlatforms = item.platforms.filter((platform) =>
        game.platforms.includes(platform),
      ).length;
      return {
        game: item,
        score:
          (item.series === game.series ? 4 : 0) +
          (item.category === game.category ? 2 : 0) +
          Math.min(sharedPlatforms, 2),
      };
    })
    .sort((a, b) => b.score - a.score || b.game.stars - a.game.stars)
    .slice(0, 8)
    .map((item) => item.game);

  const hotProjects = [...projects]
    .filter((project) => !game.projects.some((item) => item.id === project.id))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5);

  const projectActivity = getRecentUpdatesFor(game.projects, 8);

  const videoGameLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.titleZh,
    alternateName: game.titleEn,
    url: `${siteConfig.url}/games/${game.slug}`,
    image: `${siteConfig.url}${game.image}`,
    description: game.blurb,
    genre: game.genre,
    gamePlatform: game.console,
    datePublished: String(game.year),
    inLanguage: "zh-CN",
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
      ...(seriesSlug
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: `${game.series}系列`,
              item: `${siteConfig.url}/series/${seriesSlug}`,
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: seriesSlug ? 3 : 2,
        name: game.titleZh,
        item: `${siteConfig.url}/games/${game.slug}`,
      },
    ],
  };

  const projectsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${game.titleZh} 的移植项目`,
    numberOfItems: sortedProjects.length,
    itemListElement: sortedProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${project.titleZh}（${project.repo}）`,
      url: repoUrl(project),
    })),
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
    <div className="mx-auto max-w-6xl px-4 pt-6 pb-32 sm:px-6 lg:pb-20">
      <RecordRecentView slug={game.slug} />
      <JsonLd data={[videoGameLd, breadcrumbLd, projectsLd, faqLd]} />
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start lg:gap-8">
      <div className="min-w-0">
      <nav aria-label="面包屑" className="text-[12px] leading-6 text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">
          游戏库
        </Link>
        <span className="mx-2 text-border">/</span>
        {seriesSlug ? (
          <Link
            href={`/series/${seriesSlug}`}
            className="transition-colors hover:text-foreground"
          >
            {game.series}
          </Link>
        ) : (
          <span>{game.series}</span>
        )}
        <span className="mx-2 text-border">/</span>
        <span className="text-foreground">{game.titleZh}</span>
      </nav>

      <nav
        aria-label="页内导航"
        className="mt-3 flex flex-wrap items-center gap-1.5"
      >
        {[
          { href: "#conclusion", label: "快速结论" },
          { href: "#projects", label: "可用项目" },
          ...(projectActivity.length > 0
            ? [{ href: "#activity", label: "项目动态" }]
            : []),
          ...(reviews.length > 0 ? [{ href: "#reviews", label: "AI 口碑" }] : []),
          { href: "#faq", label: "常见问题" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-[11.5px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <section className="mt-5 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="grid lg:grid-cols-[1.15fr_1fr]">
          <div className="relative border-b border-border lg:border-r lg:border-b-0">
            <GameArt
              game={game}
              preload
              className="aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto"
              sizes="(max-width: 1024px) 100vw, 620px"
            />
          </div>

          <div className="flex flex-col p-5 sm:p-6">
            <div>
              <h1 className="text-[26px] leading-tight font-bold tracking-tight sm:text-3xl">
                {game.titleZh}
              </h1>
              <p className="mt-1.5 truncate text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                {game.titleEn}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <span className={cn("size-1.5 rounded-full", status.dot)} />
                  {status.label}
                </span>
                <span aria-hidden className="h-3 w-px bg-border" />
                <span>{game.year}</span>
                {game.console !== "Nintendo Switch" ? (
                  <span>{game.console}</span>
                ) : null}
                {seriesSlug ? (
                  <Link
                    href={`/series/${seriesSlug}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {game.series}
                  </Link>
                ) : (
                  <span>{game.series}</span>
                )}
                <span>{game.genre}</span>
                <span className="inline-flex items-center gap-1 font-medium tabular-nums">
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                  {formatStars(game.stars)}
                </span>
              </div>

              <p className="mt-3 text-[13.5px] leading-7 text-muted-foreground">
                {game.blurb}
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {reviews.length > 0 ? (
                  <a
                    href="#reviews"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground outline-none transition-colors hover:border-brand/40 hover:text-foreground focus-visible:ring-2 focus-visible:ring-brand/50"
                  >
                    <Star className="size-3 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-foreground tabular-nums">
                      {reviewSummary.average.toFixed(1)}
                    </span>
                    / 5
                    <span aria-hidden className="h-2.5 w-px bg-border" />
                    {reviewSummary.count} 条 AI 口碑
                  </a>
                ) : null}
                <ShareButton
                  title={`${game.titleZh} · ${siteConfig.name}`}
                  url={`${siteConfig.url}/games/${game.slug}`}
                />
                <FavoriteButton slug={game.slug} />
              </div>

              <div className="mt-4 hidden flex-wrap gap-2 lg:flex">
                <Link
                  href={`/go/${recommended.id}`}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand to-brand-2 px-4 text-[12.5px] font-semibold text-white shadow-[0_8px_20px_-12px_var(--brand)] outline-none transition-transform duration-150 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  查看推荐项目
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <a
                  href="#projects"
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-background px-4 text-[12.5px] font-semibold text-foreground outline-none transition-colors hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-brand/50"
                >
                  全部 {game.projects.length} 个项目
                </a>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-border bg-background/40 p-4">
              <h2 className="text-[12px] font-semibold text-muted-foreground">
                平台支持
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {game.platforms.map((platformId) => {
                  const platform = platforms.find(
                    (item) => item.id === platformId,
                  );
                  if (!platform) return null;
                  const PlatformIcon = platform.icon;
                  return (
                    <li key={platformId}>
                      <Link
                        href={`/platforms/${platform.id}`}
                        className="inline-flex items-center gap-2 rounded-md text-[12px] text-foreground outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand/50"
                      >
                        <PlatformIcon className="size-3.5 text-muted-foreground" />
                        {platform.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-auto border-t border-border pt-3">
              <p className="text-[11px] leading-5 text-muted-foreground">
                {game.projects.length} 个社区项目 · 数据快照{" "}
                {siteConfig.snapshotDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="conclusion"
        aria-labelledby="conclusion-heading"
        className="mt-5 scroll-mt-24 overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/[0.06] via-card to-card p-5 sm:p-6"
      >
        <div className="grid gap-5 lg:grid-cols-[1.45fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
              快速结论
            </span>
            <h2
              id="conclusion-heading"
              className="mt-3 text-[19px] leading-8 font-bold tracking-tight sm:text-[21px]"
            >
              {summaryHeadline}
            </h2>
            <p className="mt-2 text-[13px] leading-7 text-muted-foreground">
              {summaryBody}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={`/go/${recommended.id}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand to-brand-2 px-3.5 py-2 text-[12px] font-semibold text-white shadow-[0_8px_20px_-12px_var(--brand)] outline-none transition-transform duration-150 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand/50"
              >
                查看推荐项目
                <ArrowUpRight className="size-3.5" />
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3.5 py-2 text-[12px] font-semibold text-foreground outline-none transition-colors hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-brand/50"
              >
                查看全部 {game.projects.length} 个项目
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-border bg-background/50 p-3">
              <dt className="text-[10.5px] font-medium text-muted-foreground">
                覆盖平台
              </dt>
              <dd className="mt-1 text-[15px] font-bold tabular-nums">
                {game.platforms.length} 个
              </dd>
              <dd className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
                {platformShortLabels}
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-background/50 p-3">
              <dt className="text-[10.5px] font-medium text-muted-foreground">
                可玩项目
              </dt>
              <dd className="mt-1 text-[15px] font-bold tabular-nums">
                {playableCount} / {game.projects.length}
              </dd>
              <dd className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
                {statusSummary || "暂无状态数据"}
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-background/50 p-3">
              <dt className="text-[10.5px] font-medium text-muted-foreground">
                社区热度
              </dt>
              <dd className="mt-1 text-[15px] font-bold tabular-nums">
                {formatStars(game.stars)} Star
              </dd>
              <dd className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
                全部项目合计
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-background/50 p-3">
              <dt className="text-[10.5px] font-medium text-muted-foreground">
                数据快照
              </dt>
              <dd className="mt-1 text-[15px] font-bold tabular-nums">
                {siteConfig.snapshotDate}
              </dd>
              <dd className="mt-0.5 truncate text-[10.5px] text-muted-foreground">
                公开 API 汇总
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="mt-10">
        <div className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="projects-heading"
              className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight sm:text-[24px]"
            >
              可用移植项目
              <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground tabular-nums">
                {game.projects.length}
              </span>
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-6 text-muted-foreground">
              每个项目都是独立的社区移植。点击卡片会先显示外部链接提示，再前往对应的 GitHub 或 GitLab 仓库。
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground">
            <Star className="size-3.5 text-amber-400" />
            按 Star 排序
          </span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sortedProjects.map((project, index) => (
            <Fragment key={project.id}>
              <ProjectCard project={project} index={index} />
              {index === 1 && adSlots.gameInArticle ? (
                <div className="sm:col-span-2">
                  <AdSlot
                    slot={adSlots.gameInArticle}
                    format="horizontal"
                    minHeight={250}
                  />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      {projectActivity.length > 0 ? (
        <section
          id="activity"
          aria-labelledby="activity-heading"
          className="mt-10 scroll-mt-24 border-t border-border pt-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="activity-heading"
                className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight sm:text-[24px]"
              >
                项目动态
                <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground tabular-nums">
                  {projectActivity.length}
                </span>
              </h2>
              <p className="mt-2 max-w-xl text-[13px] leading-6 text-muted-foreground">
                按仓库最近推送时间汇总，点击可前往对应项目。
              </p>
            </div>
            <span className="text-[11.5px] text-muted-foreground">
              数据快照 {siteConfig.snapshotDate}
            </span>
          </div>

          <ol className="mt-5 border-l border-border pl-5">
            {projectActivity.map(({ project, updatedAt }) => {
              const projectStatus = statuses[project.status];

              return (
                <li key={project.id} className="relative pb-5 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute top-1.5 -left-6 size-2 rounded-full border-2 border-background bg-brand"
                  />
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <Link
                      href={`/go/${project.id}`}
                      className="text-[13px] font-semibold transition-colors hover:text-brand"
                    >
                      {project.titleZh}
                    </Link>
                    <span className="inline-flex items-center gap-1 text-[10.5px] text-muted-foreground">
                      <span
                        className={cn("size-1.5 rounded-full", projectStatus.dot)}
                      />
                      {projectStatus.label}
                    </span>
                    <span className="ml-auto shrink-0 text-[10.5px] text-muted-foreground tabular-nums">
                      {formatUpdateDate(updatedAt)}
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-[11.5px] leading-5 text-muted-foreground">
                    {project.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>
      ) : null}

      <GameReviews reviews={reviews} summary={reviewSummary} />

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="mt-10 scroll-mt-24 border-t border-border pt-8"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="faq-heading"
              className="text-[22px] font-bold tracking-tight sm:text-[24px]"
            >
              常见问题
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
              基于站内项目数据自动生成，最后更新 {siteConfig.snapshotDate}。
            </p>
          </div>
          <Link
            href="/about#status"
            className="text-[11.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            查看状态定义
          </Link>
        </div>

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

      {relatedGames.length > 0 ? (
        <section
          aria-labelledby="related-heading"
          className="mt-10 border-t border-border pt-8"
        >
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2
                id="related-heading"
                className="text-[22px] font-bold tracking-tight sm:text-[24px]"
              >
                相关游戏
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
                同系列、同类型或同平台的热门移植项目，继续逛逛。
              </p>
            </div>
            <Link
              href={seriesSlug ? `/series/${seriesSlug}` : "/"}
              className="text-[11.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {seriesSlug ? `查看${game.series}系列` : "全部游戏"}
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedGames.map((related, index) => (
              <GameCard
                key={related.slug}
                game={related}
                stats={gameStats[related.slug]}
                index={index}
              />
            ))}
          </div>
        </section>
      ) : null}

      </div>

      <aside className="mt-10 hidden lg:mt-0 lg:block">
        <div className="sticky top-24 space-y-4">
          <AdSlot
            slot={adSlots.gameSidebar}
            format="vertical"
            minHeight={600}
          />
          <div className="rounded-xl border border-border bg-card p-4">
            <h2 className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
              <Flame className="size-3.5 text-brand" />
              全站热门项目
            </h2>
            <ol className="mt-3 space-y-3">
              {hotProjects.map((project, index) => (
                <li key={project.id} className="flex gap-2.5">
                  <span className="mt-0.5 w-4 shrink-0 text-[11px] font-semibold text-muted-foreground tabular-nums">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <Link
                      href={`/go/${project.id}`}
                      className="block truncate text-[12.5px] font-medium transition-colors hover:text-brand"
                    >
                      {project.titleZh}
                    </Link>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      {formatStars(project.stars)} Star
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </aside>
      </div>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        返回游戏库
      </Link>

      <div
        aria-label="项目快捷操作"
        data-mobile-cta
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-2">
          <Link
            href={`/go/${recommended.id}`}
            className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-brand to-brand-2 px-4 text-[13px] font-semibold text-white shadow-[0_10px_24px_-12px_var(--brand)] outline-none transition-transform duration-150 active:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand/50"
          >
            查看推荐项目
            <ArrowUpRight className="size-3.5" />
          </Link>
          <a
            href="#projects"
            className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 text-[13px] font-semibold text-foreground outline-none transition-colors hover:border-foreground/30 focus-visible:ring-2 focus-visible:ring-brand/50"
          >
            全部 {game.projects.length} 个项目
          </a>
        </div>
      </div>
    </div>
  );
}
