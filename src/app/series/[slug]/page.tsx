import type { Metadata } from "next";
import Link from "@/components/app-link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronDown, Layers, Star } from "lucide-react";
import { GameArt } from "@/components/game-art";
import { GameCard } from "@/components/game-card";
import { JsonLd } from "@/components/json-ld";
import { gameStats } from "@/lib/game-stats";
import { formatStars, platforms, statuses } from "@/lib/projects";
import { getSeries, seriesList } from "@/lib/series";
import { siteConfig } from "@/lib/site";

type SeriesPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export async function generateMetadata({
  params,
}: SeriesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeries(slug);

  if (!series) return {};

  const topGame = series.games[0];
  const platformLabels = series.platforms
    .map((id) => platforms.find((platform) => platform.id === id)?.label)
    .filter(Boolean)
    .join("、");
  const description = `收录 ${series.games.length} 款${series.name}系列游戏、${series.projects.length} 个 Switch 原生移植项目，覆盖 ${platformLabels}。`;

  return {
    title: `${series.name}系列`,
    description,
    alternates: {
      canonical: `/series/${series.slug}`,
    },
    openGraph: {
      title: `${series.name}系列 · ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/series/${series.slug}`,
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
      title: `${series.name}系列 · ${siteConfig.name}`,
      description,
      images: [topGame.image],
    },
  };
}

export default async function SeriesPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = getSeries(slug);

  if (!series) {
    notFound();
  }

  const topGame = series.games[0];
  const platformLabels = series.platforms
    .map((id) => platforms.find((platform) => platform.id === id)?.label)
    .filter(Boolean)
    .join("、");
  const gameTitles = series.games.map((game) => game.titleZh).join("、");
  const topProjects = [...series.projects]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 6);
  const relatedSeries = seriesList
    .filter((item) => item.slug !== series.slug)
    .map((item) => ({
      series: item,
      sharedPlatforms: item.platforms.filter((platformId) =>
        series.platforms.includes(platformId),
      ).length,
    }))
    .sort(
      (a, b) =>
        b.sharedPlatforms - a.sharedPlatforms ||
        b.series.stars - a.series.stars,
    )
    .slice(0, 3);

  const faqs = [
    {
      q: `${series.name}系列有哪些游戏有移植？`,
      a: `本站收录 ${series.games.length} 款：${gameTitles}，共 ${series.projects.length} 个项目。`,
    },
    {
      q: `${series.name}系列支持哪些平台？`,
      a: `当前项目覆盖 ${platformLabels}。不同项目支持范围不同，具体以仓库 README 为准。`,
    },
    {
      q: `从哪款${series.name}游戏开始？`,
      a: `可以优先看《${topGame.titleZh}》：${topGame.projects.length} 个项目，${formatStars(topGame.stars)} Star。`,
    },
  ];

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${series.name}系列`,
    description: series.description,
    url: `${siteConfig.url}/series/${series.slug}`,
    inLanguage: "zh-CN",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: series.games.length,
      itemListElement: series.games.map((game, index) => ({
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
        name: "游戏系列",
        item: `${siteConfig.url}/series`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: series.name,
        item: `${siteConfig.url}/series/${series.slug}`,
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
          href="/series"
          className="transition-colors hover:text-foreground"
        >
          游戏系列
        </Link>
        <span className="mx-2 text-border">/</span>
        <span className="text-foreground">{series.name}</span>
      </nav>

      <section className="mt-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
          <Layers className="size-3.5" />
          游戏系列
        </span>
        <h1 className="mt-3.5 text-[2rem] font-bold tracking-[-0.01em] sm:text-[2.5rem]">
          {series.name} 系列
        </h1>
        <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.9] text-muted-foreground">
          {series.description} 本站收录了 {series.games.length} 款该系列游戏、
          {series.projects.length} 个社区原生移植项目。
        </p>
      </section>

      <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            系列游戏
          </dt>
          <dd className="mt-1 text-[20px] font-bold tabular-nums">
            {series.games.length}
          </dd>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            移植项目
          </dt>
          <dd className="mt-1 text-[20px] font-bold tabular-nums">
            {series.projects.length}
          </dd>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            可玩项目
          </dt>
          <dd className="mt-1 text-[20px] font-bold tabular-nums">
            {series.playableCount}
          </dd>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <dt className="text-[10.5px] font-medium text-muted-foreground">
            社区热度
          </dt>
          <dd className="mt-1 flex items-center gap-1 text-[20px] font-bold tabular-nums">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            {formatStars(series.stars)}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-[11.5px] font-medium text-muted-foreground">
          系列平台
        </span>
        {series.platforms.map((platformId) => {
          const platform = platforms.find((item) => item.id === platformId);
          if (!platform) return null;
          const PlatformIcon = platform.icon;
          const count = series.games.filter((game) =>
            game.platforms.includes(platformId),
          ).length;

          return (
            <Link
              key={platformId}
              href={`/platforms/${platformId}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              <PlatformIcon className="size-3.5" />
              {platform.label}
              <span className="text-[10.5px] tabular-nums">{count}</span>
            </Link>
          );
        })}
      </div>

      <section
        aria-labelledby="series-games-heading"
        className="mt-9 scroll-mt-24"
        id="games"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="series-games-heading"
              className="flex items-center gap-2.5 text-[24px] font-bold tracking-tight sm:text-[26px]"
            >
              <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-brand to-brand-2" />
              系列游戏
            </h2>
            <p className="mt-1.5 text-[13px] leading-6 text-muted-foreground">
              按社区热度排序，进入游戏页查看完整项目列表。
            </p>
          </div>
          <Link
            href="/series"
            className="text-[11.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            全部系列
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {series.games.map((game, index) => (
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
        aria-labelledby="series-projects-heading"
        className="mt-10 border-t border-border pt-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="series-projects-heading"
              className="text-[22px] font-bold tracking-tight sm:text-[24px]"
            >
              系列热门项目
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
              按 Star 数排序，点击项目会先进入外链提示页。
            </p>
          </div>
          <span className="text-[11.5px] text-muted-foreground">
            共 {series.projects.length} 个项目
          </span>
        </div>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {topProjects.map((project) => {
            const game = series.games.find((item) =>
              item.projects.some((entry) => entry.id === project.id),
            );
            const projectStatus = statuses[project.status];

            return (
              <Link
                key={project.id}
                href={`/go/${project.id}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 transition-colors hover:border-brand/40"
              >
                {game ? (
                  <GameArt
                    game={game}
                    className="aspect-[16/9] w-20 shrink-0 overflow-hidden rounded-lg"
                    sizes="80px"
                  />
                ) : null}
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

      <section
        aria-labelledby="series-faq-heading"
        className="mt-10 border-t border-border pt-8"
      >
        <h2
          id="series-faq-heading"
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

      <section
        aria-labelledby="related-series-heading"
        className="mt-10 border-t border-border pt-8"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="related-series-heading"
              className="text-[22px] font-bold tracking-tight sm:text-[24px]"
            >
              继续浏览其他系列
            </h2>
            <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
              优先推荐平台覆盖相近、社区热度较高的系列。
            </p>
          </div>
          <Link
            href="/series"
            className="text-[11.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            全部系列
          </Link>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {relatedSeries.map(({ series: item }) => (
            <Link
              key={item.slug}
              href={`/series/${item.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card outline-none transition-colors hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              <GameArt
                game={item.games[0]}
                className="aspect-[16/9]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="p-4">
                <h3 className="text-[15px] font-bold tracking-tight">
                  {item.name}
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {item.games.length} 款游戏 · {item.projects.length} 个项目
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/series"
          className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          返回全部系列
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
