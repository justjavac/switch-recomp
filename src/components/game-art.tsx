import Image from "next/image";
import { coverClass, type Game } from "@/lib/games";
import { platforms } from "@/lib/projects";
import { cn } from "@/lib/utils";

type GameArtProps = {
  game: Game;
  className?: string;
  preload?: boolean;
  sizes?: string;
};

export function GameArt({
  game,
  className,
  preload = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 300px",
}: GameArtProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className={cn(coverClass(game), "absolute inset-0")} />
      <Image
        src={game.image}
        alt={`${game.titleZh} 官方封面`}
        fill
        preload={preload}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15"
      />

      <div className="absolute inset-x-3.5 top-3 flex items-center justify-between gap-2 sm:inset-x-4">
        <span className="rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
          {game.series} · {game.year}
        </span>
        <div className="flex items-center gap-2 rounded-full bg-black/55 px-2.5 py-1.5 backdrop-blur-sm">
          {game.platforms.map((platformId) => {
            const platform = platforms.find((item) => item.id === platformId);
            if (!platform) return null;
            const PlatformIcon = platform.icon;
            return (
              <span key={platformId} title={platform.label} className="inline-flex">
                <PlatformIcon className="size-3 text-white/75" />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
