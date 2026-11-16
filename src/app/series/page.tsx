import type { Metadata } from "next";
import Link from "@/components/app-link";
import { ArrowUpRight, ChevronDown, Layers } from "lucide-react";
import { GameArt } from "@/components/game-art";
import { JsonLd } from "@/components/json-ld";
import { formatStars, platforms } from "@/lib/projects";
import { seriesList } from "@/lib/series";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "游戏系列",
  description:
    "按系列浏览 Switch 游戏的原生移植项目：塞尔达传说、宝可梦、超级马力欧、密特罗德、异度神剑、火焰纹章等。",
  alternates: {
    canonical: "/series",
  },
};

export default function SeriesIndexPage() {
  const totalGames = seriesList.reduce(
    (total, series) => total + series.games.length,
    0,
  );
  const totalProjects = seriesList.reduce(
    (total, series) => total + series.projects.length,
    0,
  );
  const totalPlayable = seriesList.reduce(
    (total, series) => total + series.playableCount,
    0,
  );

  const faqs = [
    {
      q: "系列聚合页和游戏库有什么区别？",
      a: "游戏库以单款游戏为单位展示移植项目；系列页把同一系列的多款游戏与项目聚合在一起，适合按作品线连续浏览。",
    },
    {
      q: "为什么有些系列只收录了一款游戏？",
      a: `本站只收录目前存在公开移植项目的游戏，系列范围会随收录增加而扩展。目前共 ${seriesList.length} 个系列、${totalGames} 款游戏。`,
    },
    {
      q: "系列页的项目状态是怎么判断的？",
      a: "站内把项目标注为可玩、测试版或实验性，依据是项目公开说明。状态不代表当前构建一定可用，安装前请查看仓库 README。",
    },
  ];

  const listLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "游戏系列",
    description:
      "按系列浏览 Switch 游戏的原生移植项目，聚合同系列的多个游戏与社区仓库。",
    url: `${siteConfig.url}/series`,
    inLanguage: "zh-CN",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: seriesList.length,
      itemListElement: seriesList.map((series, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: series.name,
        url: `${siteConfig.url}/series/${series.slug}`,
      })),
    },
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
      <JsonLd data={[listLd, faqLd]} />

      <nav
        aria-label="面包屑"
        className="text-[12px] leading-6 text-muted-foreground"
      >
        <Link href="/" className="transition-colors hover:text-foreground">
          游戏库
        </Link>
        <span className="mx-2 text-border">/</span>
        <span className="text-foreground">游戏系列</span>
      </nav>

      <div className="mt-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
          <Layers className="size-3.5" />
          游戏系列
        </span>
        <h1 className="mt-3.5 text-[2rem] font-bold tracking-[-0.01em] sm:text-[2.5rem]">
          按系列浏览
        </h1>
        <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.9] text-muted-foreground">
          同一系列的游戏往往共享世界观、玩法与受众。这里按系列聚合收录的游戏和移植项目，方便你从一个系列继续往下逛。
        </p>

        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
          <span>
            <strong className="font-semibold text-foreground tabular-nums">
              {seriesList.length}
            </strong>{" "}
            个系列
          </span>
          <span>
            <strong className="font-semibold text-foreground tabular-nums">
              {totalGames}
            </strong>{" "}
            款游戏
          </span>
          <span>
            <strong className="font-semibold text-foreground tabular-nums">
              {totalProjects}
            </strong>{" "}
            个项目
          </span>
          <span>
            <strong className="font-semibold text-foreground tabular-nums">
              {totalPlayable}
            </strong>{" "}
            个可玩项目
          </span>
        </div>
      </div>

      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {seriesList.map((series) => {
          const topGame = series.games[0];

          return (
            <Link
              key={series.slug}
              href={`/series/${series.slug}`}
              aria-label={`${series.name}系列，${series.games.length} 款游戏`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card outline-none transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.9)] focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              <GameArt
                game={topGame}
                className="aspect-[16/9]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              />

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h2 className="text-[18px] font-bold tracking-tight">
                      {series.name}
                    </h2>
                    <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-muted-foreground">
                      {series.description}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-border/70 pt-3 text-[11px] text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {series.games.length} 款游戏
                  </span>
                  <span>{series.projects.length} 个项目</span>
                  <span>{formatStars(series.stars)} Star</span>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                  {series.platforms.map((platformId) => {
                    const platform = platforms.find(
                      (item) => item.id === platformId,
                    );
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
                  <span className="ml-auto text-[10.5px]">
                    {series.playableCount} 个可玩
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4">
        <p className="text-[12.5px] leading-6 text-muted-foreground">
          想按目标平台浏览？
        </p>
        <Link
          href="/platforms"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-foreground transition-colors hover:text-brand"
        >
          查看平台支持
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <section
        aria-labelledby="series-index-faq-heading"
        className="mt-10 border-t border-border pt-8"
      >
        <h2
          id="series-index-faq-heading"
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
    </div>
  );
}
