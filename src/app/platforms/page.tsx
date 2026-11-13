import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, MonitorSmartphone } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { games } from "@/lib/games";
import { platforms, projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "平台支持",
  description:
    "查看每个目标平台可用游戏与移植项目数量，并进入 Windows、Linux、macOS、Android 与 iOS / iPadOS 的平台聚合页。",
  alternates: {
    canonical: "/platforms",
  },
};

export default function PlatformsPage() {
  const playableCount = projects.filter(
    (project) => project.status === "playable",
  ).length;

  const faqs = [
    {
      q: "平台覆盖率是怎么计算的？",
      a: `按游戏维度统计：至少有一个项目声明支持该平台的游戏数，除以本站收录的 ${games.length} 款游戏。同一个游戏支持多个平台时，会分别计入各平台。`,
    },
    {
      q: "同一个游戏可以同时支持多个平台吗？",
      a: "可以。不同项目可能覆盖不同的平台组合。游戏页会列出该游戏的全部可用平台，平台页则列出该平台下的游戏与项目，两边都可以互相跳转。",
    },
    {
      q: "iOS / iPadOS 移植项目怎么安装？",
      a: "通常需要 Xcode 自签或侧载，具体步骤以仓库 README 为准。本站只索引开源仓库，不提供游戏本体、签名文件或安装包。",
    },
  ];

  const listLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "平台支持",
    description:
      "按目标平台浏览 Switch 游戏原生移植项目，覆盖 Windows、Linux、macOS、Android 与 iOS / iPadOS。",
    url: `${siteConfig.url}/platforms`,
    inLanguage: "zh-CN",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: platforms.length,
      itemListElement: platforms.map((platform, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: platform.label,
        url: `${siteConfig.url}/platforms/${platform.id}`,
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
    <div className="mx-auto max-w-5xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12">
      <JsonLd data={[listLd, faqLd]} />
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
        <MonitorSmartphone className="size-3.5" />
        平台支持
      </span>
      <h1 className="mt-3.5 text-[2rem] font-bold tracking-[-0.01em] sm:text-[2.5rem]">
        在哪个平台玩？
      </h1>
      <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.9] text-muted-foreground">
        同一个游戏可能同时拥有多个移植项目，覆盖不同平台。下面的统计按项目声明整理，进入游戏页可以查看每个项目的具体支持情况。
      </p>

      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
        <span>
          <strong className="font-semibold text-foreground tabular-nums">
            {platforms.length}
          </strong>{" "}
          个平台
        </span>
        <span>
          <strong className="font-semibold text-foreground tabular-nums">
            {games.length}
          </strong>{" "}
          款游戏
        </span>
        <span>
          <strong className="font-semibold text-foreground tabular-nums">
            {projects.length}
          </strong>{" "}
          个项目
        </span>
        <span>
          <strong className="font-semibold text-foreground tabular-nums">
            {playableCount}
          </strong>{" "}
          个可玩项目
        </span>
      </div>

      <div className="mt-9 grid gap-4">
        {platforms.map((platform) => {
          const PlatformIcon = platform.icon;
          const platformProjects = projects.filter((project) =>
            project.platforms.includes(platform.id),
          );
          const platformGames = games.filter((game) =>
            game.platforms.includes(platform.id),
          );
          const coverage = Math.round(
            (platformGames.length / games.length) * 100,
          );

          return (
            <section
              key={platform.id}
              className="rounded-2xl border border-border bg-card p-5 transition-colors duration-200 hover:border-brand/30 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-[0_10px_24px_-14px_var(--brand)]">
                  <PlatformIcon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-[19px] font-bold tracking-tight">
                    <Link
                      href={`/platforms/${platform.id}`}
                      className="transition-colors hover:text-brand"
                    >
                      {platform.label}
                    </Link>
                  </h2>
                  <p className="mt-1 text-[12px] text-muted-foreground">
                    {platformGames.length} 款游戏 · {platformProjects.length} 个项目
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-baseline gap-1 rounded-full border border-border bg-muted/40 px-3 py-1 text-[12px] text-muted-foreground tabular-nums">
                    <span className="font-semibold text-foreground">
                      {coverage}%
                    </span>
                    覆盖率
                  </span>
                  <Link
                    href={`/platforms/${platform.id}`}
                    className="inline-flex h-8 items-center gap-1 rounded-full border border-border bg-background px-3 text-[11.5px] font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    查看
                    <ArrowUpRight className="size-3" />
                  </Link>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {platformGames.map((game) => (
                  <Link
                    key={game.slug}
                    href={`/games/${game.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/30 px-3 py-1 text-[11.5px] text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
                  >
                    {game.titleZh}
                    <ArrowUpRight className="size-2.5" />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4">
        <p className="text-[12.5px] leading-6 text-muted-foreground">
          想按作品系列浏览？
        </p>
        <Link
          href="/series"
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-foreground transition-colors hover:text-brand"
        >
          查看游戏系列
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div className="mt-4 rounded-2xl border border-dashed border-border bg-card/30 px-5 py-4 text-[12.5px] leading-6 text-muted-foreground">
        平台支持来自项目自述或发布说明，可能与最新构建存在差异；实际运行版本请以仓库发布为准。
      </div>

      <section
        aria-labelledby="platforms-faq-heading"
        className="mt-10 border-t border-border pt-8"
      >
        <h2
          id="platforms-faq-heading"
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
