import { Gamepad2, Sparkles, Star, ThumbsUp } from "lucide-react";
import {
  summarizeReviews,
  type GameReview,
} from "@/lib/reviews";
import { cn } from "@/lib/utils";

const avatarTones = [
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
  "from-cyan-500 to-sky-600",
];

function toneFor(name: string) {
  const seed = Array.from(name).reduce(
    (total, char) => total + (char.codePointAt(0) ?? 0),
    0,
  );
  return avatarTones[seed % avatarTones.length];
}

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span
      role="img"
      aria-label={`${value} 分，满分 5 分`}
      className={cn("relative inline-flex shrink-0", className)}
    >
      <span aria-hidden className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-3.5 fill-border text-border"
          />
        ))}
      </span>
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 flex gap-0.5 overflow-hidden"
        style={{ width: `${(Math.min(value, 5) / 5) * 100}%` }}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-3.5 shrink-0 fill-amber-400 text-amber-400"
          />
        ))}
      </span>
    </span>
  );
}

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export function GameReviews({ reviews }: { reviews: GameReview[] }) {
  if (reviews.length === 0) return null;

  const summary = summarizeReviews(reviews);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="mt-10 scroll-mt-24 border-t border-border pt-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2
            id="reviews-heading"
            className="flex flex-wrap items-center gap-2.5 text-[22px] font-bold tracking-tight sm:text-[24px]"
          >
            玩家评论
            <span className="inline-flex items-center gap-1 rounded-full border border-brand/25 bg-brand/10 px-2.5 py-1 text-[10.5px] font-semibold text-brand">
              <Sparkles className="size-3" />
              AI 生成
            </span>
            <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-[11px] font-normal text-muted-foreground tabular-nums">
              {summary.count}
            </span>
          </h2>
          <p className="mt-2 max-w-xl text-[13px] leading-6 text-muted-foreground">
            模拟玩家视角整理的移植体验参考，帮你快速判断这款值不值得期待。
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
          <ThumbsUp className="size-3.5" />
          仅展示，不开放投稿
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[280px_1fr] lg:items-start">
        <aside className="rounded-2xl border border-border bg-card p-5 lg:sticky lg:top-24">
          <div className="flex items-end gap-3">
            <span className="text-[42px] leading-none font-bold tracking-tight tabular-nums">
              {summary.average.toFixed(1)}
            </span>
            <div className="pb-1">
              <Stars value={summary.average} />
              <p className="mt-1.5 text-[11px] text-muted-foreground">
                基于 {summary.count} 条 AI 评价
              </p>
            </div>
          </div>

          <dl className="mt-5 space-y-1.5">
            {summary.distribution.map((row) => (
              <div key={row.rating} className="flex items-center gap-2">
                <dt className="w-8 shrink-0 text-[11px] text-muted-foreground tabular-nums">
                  {row.rating} 星
                </dt>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
                <dd className="w-5 shrink-0 text-right text-[11px] text-muted-foreground tabular-nums">
                  {row.count}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-background/60 px-3 py-2">
            <span className="text-[11px] text-muted-foreground">推荐度</span>
            <span className="text-[13px] font-bold tabular-nums">
              {summary.recommendRate}%
            </span>
          </div>

          <p className="mt-4 flex gap-1.5 border-t border-border pt-3 text-[10.5px] leading-5 text-muted-foreground">
            <Sparkles className="mt-0.5 size-3 shrink-0 text-brand" />
            评论由 AI 基于公开资料模拟生成，仅用于展示游戏口碑，不代表真实玩家观点。
          </p>
        </aside>

        <div className="grid gap-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 transition-colors duration-200 hover:border-brand/30 sm:p-5"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br text-[13px] font-bold text-white",
                    toneFor(review.author),
                  )}
                >
                  {review.author.slice(0, 1)}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-[13px] font-semibold">
                      {review.author}
                    </p>
                    <span className="shrink-0 rounded border border-border px-1.5 py-px text-[10px] leading-4 text-muted-foreground">
                      {review.tag}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[10.5px] text-muted-foreground tabular-nums">
                    {formatDate(review.date)}
                  </p>
                </div>
                <Stars value={review.rating} />
              </div>

              <h3 className="mt-3.5 text-[13.5px] leading-6 font-bold">
                {review.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-6 text-muted-foreground">
                {review.content}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border/70 pt-3 text-[10.5px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Gamepad2 className="size-3" />
                  {review.platform}
                </span>
                <span aria-hidden className="h-2.5 w-px bg-border" />
                <span className="tabular-nums">{review.playtime}</span>
                <span className="ml-auto inline-flex items-center gap-1 tabular-nums">
                  <ThumbsUp className="size-3" />
                  {review.likes}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
