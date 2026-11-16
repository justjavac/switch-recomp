"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { coverClass, type Game } from "@/lib/games";
import { LIBRARY_EVENT, readFavorites } from "@/lib/game-library";
import { cn } from "@/lib/utils";

type ShelfItem = {
  game: Game;
  label: string;
};

function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => {
      setFavorites(readFavorites());
    };

    sync();
    window.addEventListener(LIBRARY_EVENT, sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener(LIBRARY_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return favorites;
}

function ShelfChip({ game, label }: ShelfItem) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group flex w-44 shrink-0 items-center gap-2 rounded-xl border border-border bg-background/60 p-1.5 outline-none transition-colors hover:border-brand/40 focus-visible:ring-2 focus-visible:ring-brand/50"
    >
      <span className="relative aspect-[16/10] w-14 shrink-0 overflow-hidden rounded-lg">
        <span className={cn(coverClass(game), "absolute inset-0")} />
        <Image
          src={game.image}
          alt=""
          fill
          sizes="56px"
          className="object-cover"
        />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-[11.5px] font-semibold transition-colors group-hover:text-brand">
          {game.titleZh}
        </span>
        <span className="mt-0.5 block truncate text-[10px] text-muted-foreground">
          {label}
        </span>
      </span>
    </Link>
  );
}

export function LibraryShelf({ games }: { games: Game[] }) {
  const favorites = useFavorites();
  const gameBySlug = new Map(games.map((game) => [game.slug, game]));

  const favoriteItems = favorites
    .map((slug) => gameBySlug.get(slug))
    .filter((game): game is Game => Boolean(game));

  if (favoriteItems.length === 0) return null;

  return (
    <section
      aria-label="我的游戏"
      className="mx-auto max-w-7xl px-4 pt-8 sm:px-6"
    >
      <div className="rounded-2xl border border-border bg-card/60 p-4 sm:p-5">
        <div>
          <div className="flex items-center gap-2 text-[12px] font-semibold">
            <Heart className="size-3.5 fill-rose-500 text-rose-500" />
            我的收藏
            <span className="text-[11px] font-normal text-muted-foreground tabular-nums">
              {favoriteItems.length}
            </span>
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {favoriteItems.map((game) => (
              <ShelfChip
                key={game.slug}
                game={game}
                label={`${game.projects.length} 个项目`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
