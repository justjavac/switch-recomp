"use client";

import {
  Fragment,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "@/components/app-link";
import {
  ArrowUpRight,
  Flame,
  Gamepad2,
  MonitorSmartphone,
  RotateCcw,
  Search,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { AdSlot } from "@/components/ad-slot";
import { GameArt } from "@/components/game-art";
import { GameCard } from "@/components/game-card";
import { LibraryShelf } from "@/components/library-shelf";
import { NewGamesRail } from "@/components/new-games-rail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { adSlots } from "@/lib/ads";
import { featuredGame, games, newGames } from "@/lib/games";
import type { GameStats } from "@/lib/game-stats";
import {
  formatStars,
  platforms,
  projects,
  statuses,
  type PlatformFilterId,
} from "@/lib/projects";
import { cn } from "@/lib/utils";

type SortId = "stars" | "updated" | "reviews";

const sortOptions: { id: SortId; label: string }[] = [
  { id: "stars", label: "热度" },
  { id: "updated", label: "最近更新" },
  { id: "reviews", label: "AI 评分" },
];

const platformCoverage = platforms.map((platform) => ({
  ...platform,
  count: games.filter((game) => game.platforms.includes(platform.id)).length,
}));

const indexedGames = games.map((game) => ({
  game,
  haystack: [
    game.titleZh,
    game.titleEn,
    game.series,
    game.genre,
    String(game.year),
    ...game.aliases,
    ...game.projects.flatMap((project) => [
      project.titleZh,
      project.repo,
      project.description,
    ]),
  ]
    .join(" ")
    .toLowerCase(),
}));

export function Directory({ stats }: { stats: Record<string, GameStats> }) {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState<PlatformFilterId>("all");
  const [playableOnly, setPlayableOnly] = useState(false);
  const [sort, setSort] = useState<SortId>("stars");
  const deferredQuery = useDeferredValue(query);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement;

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key === "Escape" && target === searchRef.current) {
        setQuery("");
        searchRef.current?.blur();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const results = useMemo(() => {
    const terms = deferredQuery
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    const filtered = indexedGames
      .filter(({ game, haystack }) => {
        if (platform !== "all" && !game.platforms.includes(platform)) {
          return false;
        }
        if (playableOnly && !(stats[game.slug]?.playable > 0)) {
          return false;
        }
        return terms.every((term) => haystack.includes(term));
      })
      .map(({ game }) => game);

    return filtered.sort((a, b) => {
      const statsA = stats[a.slug];
      const statsB = stats[b.slug];

      if (sort === "updated") {
        return (
          (statsB?.updatedAt ?? "").localeCompare(statsA?.updatedAt ?? "") ||
          b.stars - a.stars
        );
      }

      if (sort === "reviews") {
        return (
          (statsB?.reviewAverage ?? 0) - (statsA?.reviewAverage ?? 0) ||
          b.stars - a.stars
        );
      }

      return b.stars - a.stars;
    });
  }, [deferredQuery, platform, playableOnly, sort, stats]);

  const filtersActive =
    query.trim() !== "" || platform !== "all" || playableOnly;
  const featuredStatus = statuses[featuredGame.status];
  const sortLabel =
    sortOptions.find((option) => option.id === sort)?.label ?? "热度";
  const playableGameCount = games.filter(
    (game) => (stats[game.slug]?.playable ?? 0) > 0,
  ).length;

  function resetFilters() {
    setQuery("");
    setPlatform("all");
    setPlayableOnly(false);
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="flex items-center gap-2.5 text-[26px] leading-tight font-bold tracking-tight sm:text-[30px]">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white">
                <Gamepad2 className="size-5" />
              </span>
              Switch 游戏移植库
            </h1>
            <p className="mt-2 max-w-2xl text-[14px] leading-6 text-foreground/90">
              找到能让 Switch 游戏在 PC、Mac、Linux 与手机上原生运行的开源项目。
            </p>
            <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
              <span className="font-semibold text-foreground tabular-nums">
                {games.length}
              </span>{" "}
              款游戏 ·{" "}
              <span className="font-semibold text-foreground tabular-nums">
                {projects.length}
              </span>{" "}
              个静态重编译项目 ·{" "}
              <span className="font-semibold text-foreground tabular-nums">
                {platforms.length}
              </span>{" "}
              种目标平台
            </p>
          </div>

          <div className="relative w-full shrink-0 lg:max-w-md">
            <div className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground">
              <Search className="size-4" />
            </div>
            <Input
              ref={searchRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="搜索游戏"
              placeholder="搜索游戏、系列或仓库名…"
              className="h-11 rounded-xl border-border bg-card pr-14 pl-11 text-sm shadow-none transition-shadow focus-visible:border-brand/50 focus-visible:ring-2 focus-visible:ring-brand/20"
            />
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  searchRef.current?.focus();
                }}
                aria-label="清除搜索"
                className="absolute top-1/2 right-3 grid size-7 -translate-y-1/2 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            ) : (
              <kbd className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                /
              </kbd>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-border/70 pt-3 text-[11.5px] leading-5 text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-emerald-500" />
            仅索引公开仓库
          </span>
          <span aria-hidden className="h-3 w-px bg-border" />
          <span>不提供 ROM / 密钥</span>
          <span aria-hidden className="h-3 w-px bg-border" />
          <span>需自备正版游戏</span>
          <Link
            href="/about#disclaimer"
            prefetch={false}
            className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-brand sm:ml-auto"
          >
            了解收录原则
            <ArrowUpRight className="size-3" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6">
        <Link
          href={`/games/${featuredGame.slug}`}
          prefetch={false}
          className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-brand/40 hover:shadow-[0_28px_60px_-38px_rgba(0,0,0,0.9)] lg:grid-cols-[1.3fr_1fr]"
        >
          <GameArt
            game={featuredGame}
            preload
            className="aspect-[16/9] lg:aspect-auto lg:min-h-[260px]"
            sizes="(max-width: 1024px) 100vw, 720px"
          />
          <div className="flex flex-col justify-between gap-5 p-5 sm:p-7">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2 px-3 py-1 text-[11px] font-semibold text-white">
                <Flame className="size-3.5" />
                热度推荐
              </span>
              <h2 className="mt-3.5 text-[22px] leading-tight font-bold tracking-tight sm:text-[26px]">
                {featuredGame.titleZh}
              </h2>
              <p className="mt-1.5 truncate text-[10.5px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                {featuredGame.titleEn}
              </p>
              <p className="mt-3 text-[14px] leading-7 text-foreground/90">
                {featuredGame.blurb}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[featuredGame.series, featuredGame.genre, `${featuredGame.year}`].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-[11.5px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className={cn("size-1.5 rounded-full", featuredStatus.dot)} />
                  {featuredStatus.label}
                </span>
                <span className="inline-flex items-center gap-1 font-medium tabular-nums">
                  <Star className="size-3 fill-amber-400 text-amber-400" />
                  {formatStars(featuredGame.stars)}
                </span>
                <span>{featuredGame.projects.length} 个项目</span>
              </div>
              <span className="inline-flex h-9 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand to-brand-2 px-4 text-[12.5px] font-semibold text-white shadow-[0_10px_26px_-14px_var(--brand)] transition-transform duration-200 group-hover:translate-x-0.5">
                查看游戏
                <ArrowUpRight className="size-3.5" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      <NewGamesRail games={newGames} />

      <LibraryShelf games={games} />

      <section
        id="games"
        aria-labelledby="games-heading"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-8 pb-10 sm:px-6"
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="games-heading"
              className="flex items-center gap-2.5 text-[24px] font-bold tracking-tight sm:text-[26px]"
            >
              <span className="h-5 w-1.5 rounded-full bg-gradient-to-b from-brand to-brand-2" />
              全部游戏
            </h2>
            <p className="mt-1.5 max-w-xl text-[13px] leading-6 text-muted-foreground">
              按目标平台筛选，进入游戏页查看对应的全部移植项目。
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11.5px] text-muted-foreground">
            <Flame className="size-3.5 text-orange-400" />
            按{sortLabel}排序
          </span>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground sm:mr-1">
            <MonitorSmartphone className="size-3.5" />
            平台
          </span>
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="按目标平台筛选"
          >
            <button
              type="button"
              onClick={() => setPlatform("all")}
              aria-pressed={platform === "all"}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-[12.5px] font-medium transition-all duration-150",
                platform === "all"
                  ? "border-transparent bg-gradient-to-r from-brand to-brand-2 text-white shadow-[0_10px_24px_-14px_var(--brand)]"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
              )}
            >
              全部平台
              <span
                className={cn(
                  "text-[10.5px] tabular-nums",
                  platform === "all" ? "text-white/75" : "text-muted-foreground",
                )}
              >
                {games.length}
              </span>
            </button>

            {platformCoverage.map(({ id, label, icon: PlatformIcon, count }) => {
              const active = platform === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setPlatform(id)}
                  aria-pressed={active}
                  className={cn(
                    "inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-[12.5px] font-medium transition-all duration-150",
                    active
                      ? "border-transparent bg-gradient-to-r from-brand to-brand-2 text-white shadow-[0_10px_24px_-14px_var(--brand)]"
                      : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
                  )}
                >
                  <PlatformIcon className="size-3.5" />
                  {label}
                  <span
                    className={cn(
                      "text-[10.5px] tabular-nums",
                      active ? "text-white/75" : "text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 lg:flex-row lg:items-center lg:justify-between">
          <p
            aria-live="polite"
            className="text-[13px] leading-6 text-muted-foreground"
          >
            共{" "}
            <span className="font-semibold text-foreground tabular-nums">
              {results.length}
            </span>{" "}
            款游戏
            {query.trim() && (
              <>
                {" "}
                · 关键词「
                <span className="text-foreground">{query.trim()}</span>」
              </>
            )}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <div
              role="group"
              aria-label="排序方式"
              className="inline-flex items-center gap-0.5 rounded-full border border-border bg-card p-0.5"
            >
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSort(option.id)}
                  aria-pressed={sort === option.id}
                  className={cn(
                    "h-7 rounded-full px-2.5 text-[11.5px] font-medium transition-colors",
                    sort === option.id
                      ? "bg-foreground/90 text-background"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPlayableOnly((value) => !value)}
              aria-pressed={playableOnly}
              className={cn(
                "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-[11.5px] font-medium transition-colors",
                playableOnly
                  ? "border-transparent bg-gradient-to-r from-brand to-brand-2 text-white"
                  : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
              )}
            >
              <Gamepad2 className="size-3" />
              只看可玩
              <span
                className={cn(
                  "tabular-nums",
                  playableOnly ? "text-white/75" : "text-muted-foreground",
                )}
              >
                {playableGameCount}
              </span>
            </button>
            {filtersActive && (
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="h-8 w-fit gap-1.5 rounded-full px-2.5 text-[12px] text-muted-foreground"
              >
                <RotateCcw className="size-3.5" />
                清除筛选
              </Button>
            )}
          </div>
        </div>

        {results.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((game, index) => (
              <Fragment key={game.slug}>
                <GameCard
                  game={game}
                  stats={stats[game.slug]}
                  index={index}
                />
                {index === 5 && adSlots.homeInFeed ? (
                  <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
                    <AdSlot
                      slot={adSlots.homeInFeed}
                      format="horizontal"
                      minHeight={250}
                    />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl border border-dashed border-border bg-card/30 px-6 py-20 text-center">
            <div className="mx-auto grid size-11 place-items-center rounded-xl border border-border bg-muted/50">
              <Search className="size-4 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-base font-semibold">没有找到匹配的游戏</h3>
            <p className="mx-auto mt-2 max-w-sm text-[13px] leading-7 text-muted-foreground">
              试试更短的关键词，或清除平台筛选后再搜索。
            </p>
            <Button
              onClick={resetFilters}
              variant="outline"
              size="sm"
              className="mt-5 gap-1.5 rounded-full"
            >
              <RotateCcw className="size-3.5" />
              重置筛选
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
