"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import type { GameReview, ReviewSummary } from "@/lib/reviews";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE = 3;

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span
      role="img"
      aria-label={`${value} 分，满分 5 分`}
      className={cn(
        "relative inline-block shrink-0 text-[12px] leading-none tracking-[0.08em] whitespace-nowrap",
        className,
      )}
    >
      <span aria-hidden className="text-border">
        ★★★★★
      </span>
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 overflow-hidden text-amber-400"
        style={{ width: `${(Math.min(value, 5) / 5) * 100}%` }}
      >
        ★★★★★
      </span>
    </span>
  );
}

type GameReviewsProps = {
  reviews: GameReview[];
  summary: ReviewSummary;
};

export function GameReviews({ reviews, summary }: GameReviewsProps) {
  const [expanded, setExpanded] = useState(false);

  if (reviews.length === 0) return null;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="mt-8 scroll-mt-24 border-t border-border pt-7"
    >
      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <h2
          id="reviews-heading"
          className="text-[22px] font-bold tracking-tight sm:text-[24px]"
        >
          AI 口碑
        </h2>
        <span className="inline-flex items-center gap-1 rounded-full border border-brand/25 bg-brand/10 px-2 py-0.5 text-[10.5px] font-semibold text-brand">
          <Sparkles className="size-3" />
          AI 生成
        </span>
        <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] text-muted-foreground tabular-nums">
          {summary.count} 条
        </span>
        <span className="ml-auto text-[11px] text-muted-foreground">
          更新于 {siteConfig.snapshotDate}
        </span>
      </div>
      <p className="mt-2 text-[12.5px] leading-6 text-muted-foreground">
        基于公开资料模拟，仅用于快速了解风评，不代表真实玩家评价。
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-border bg-card px-4 py-3">
        <span className="flex items-baseline gap-1">
          <span className="text-[26px] leading-none font-bold tracking-tight tabular-nums">
            {summary.average.toFixed(1)}
          </span>
          <span className="text-[11px] text-muted-foreground">/ 5</span>
        </span>
        <Stars value={summary.average} />
        <span className="text-[12px] text-muted-foreground">
          推荐度{" "}
          <span className="font-semibold text-foreground tabular-nums">
            {summary.recommendRate}%
          </span>
        </span>
        <span className="text-[12px] text-muted-foreground">
          共 {summary.count} 条评价
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review, index) => (
          <article
            key={review.id}
            className={cn(
              "flex h-full flex-col rounded-xl border border-border bg-card p-4",
              index >= INITIAL_VISIBLE && !expanded && "hidden",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <Stars value={review.rating} />
              <span className="truncate text-[10.5px] text-muted-foreground">
                {review.platform}
              </span>
            </div>
            <h3 className="mt-2 text-[13px] leading-5 font-semibold">
              {review.title}
            </h3>
            <p className="mt-1.5 line-clamp-4 text-[12px] leading-5 text-muted-foreground">
              {review.content}
            </p>
            <p className="mt-auto pt-2.5 text-[10.5px] text-muted-foreground tabular-nums">
              {review.playtime}
            </p>
          </article>
        ))}
      </div>

      {reviews.length > INITIAL_VISIBLE ? (
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-[12px] font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
          >
            {expanded ? "收起评价" : `展开全部 ${reviews.length} 条评价`}
            <ChevronDown
              className={cn(
                "size-3.5 transition-transform duration-200",
                expanded && "rotate-180",
              )}
            />
          </button>
        </div>
      ) : null}
    </section>
  );
}
