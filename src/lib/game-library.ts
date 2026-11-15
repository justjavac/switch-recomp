export const FAVORITES_KEY = "switchrecomp:favorites";
export const RECENT_KEY = "switchrecomp:recent";
export const LIBRARY_EVENT = "switchrecomp:library-change";

export type RecentEntry = {
  slug: string;
  viewedAt: number;
};

const RECENT_LIMIT = 8;

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return;
  }

  window.dispatchEvent(new Event(LIBRARY_EVENT));
}

export function readFavorites(): string[] {
  const value = readJson<unknown>(FAVORITES_KEY, []);
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

export function isFavorite(slug: string) {
  return readFavorites().includes(slug);
}

export function subscribeLibrary(onChange: () => void) {
  window.addEventListener(LIBRARY_EVENT, onChange);
  window.addEventListener("storage", onChange);

  return () => {
    window.removeEventListener(LIBRARY_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function toggleFavorite(slug: string) {
  const favorites = readFavorites();
  const next = favorites.includes(slug)
    ? favorites.filter((item) => item !== slug)
    : [slug, ...favorites];

  writeJson(FAVORITES_KEY, next);
  return next.includes(slug);
}

export function readRecent(): RecentEntry[] {
  const value = readJson<unknown>(RECENT_KEY, []);
  if (!Array.isArray(value)) return [];

  return value.filter((item): item is RecentEntry => {
    if (!item || typeof item !== "object") return false;
    const entry = item as Partial<RecentEntry>;
    return (
      typeof entry.slug === "string" && typeof entry.viewedAt === "number"
    );
  });
}

export function trackRecentView(slug: string) {
  const next = [
    { slug, viewedAt: Date.now() },
    ...readRecent().filter((entry) => entry.slug !== slug),
  ].slice(0, RECENT_LIMIT);

  writeJson(RECENT_KEY, next);
}

export function formatRelativeTime(timestamp: number) {
  const days = Math.floor((Date.now() - timestamp) / 86_400_000);

  if (days <= 0) return "今天";
  if (days === 1) return "昨天";
  if (days < 7) return `${days} 天前`;

  return new Date(timestamp).toLocaleDateString("zh-CN", {
    month: "numeric",
    day: "numeric",
  });
}
