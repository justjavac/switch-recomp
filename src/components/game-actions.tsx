"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Check, Heart, Share2 } from "lucide-react";
import {
  isFavorite,
  subscribeLibrary,
  toggleFavorite,
  trackRecentView,
} from "@/lib/game-library";
import { cn } from "@/lib/utils";

type ShareButtonProps = {
  title: string;
  url: string;
};

export function ShareButton({ title, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // 剪贴板不可用时保持静默，用户仍可手动复制地址栏。
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground outline-none transition-colors hover:border-brand/40 hover:text-foreground focus-visible:ring-2 focus-visible:ring-brand/50"
    >
      {copied ? (
        <Check className="size-3 text-emerald-500" />
      ) : (
        <Share2 className="size-3" />
      )}
      {copied ? "链接已复制" : "分享"}
    </button>
  );
}

export function FavoriteButton({ slug }: { slug: string }) {
  const saved = useSyncExternalStore(
    subscribeLibrary,
    () => isFavorite(slug),
    () => false,
  );

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-pressed={saved}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-brand/50",
        saved
          ? "border-rose-400/40 bg-rose-500/10 text-rose-500"
          : "border-border bg-background/60 text-muted-foreground hover:border-brand/40 hover:text-foreground",
      )}
    >
      <Heart className={cn("size-3", saved && "fill-rose-500")} />
      {saved ? "已收藏" : "收藏"}
    </button>
  );
}

export function RecordRecentView({ slug }: { slug: string }) {
  useEffect(() => {
    trackRecentView(slug);
  }, [slug]);

  return null;
}
