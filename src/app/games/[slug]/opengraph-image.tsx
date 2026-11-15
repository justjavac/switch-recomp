import { ImageResponse } from "next/og";
import { getGame } from "@/lib/games";
import { formatStars, platforms } from "@/lib/projects";
import { getGameReviews, summarizeReviews } from "@/lib/reviews";

export const alt = "SwitchRecomp 游戏移植项目概览";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type ImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpengraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const game = getGame(slug);

  const title = game?.titleEn ?? "SwitchRecomp";
  const projectCount = game?.projects.length ?? 0;
  const playableCount =
    game?.projects.filter((project) => project.status === "playable").length ??
    0;
  const reviewSummary = summarizeReviews(getGameReviews(slug));
  const platformLabels =
    game?.platforms
      .map((id) => platforms.find((platform) => platform.id === id)?.short)
      .filter(Boolean)
      .join(" · ") ?? "";

  const stats = [
    `${projectCount} projects`,
    ...(playableCount > 0 ? [`${playableCount} playable`] : []),
    ...(reviewSummary.count > 0
      ? [`${reviewSummary.average.toFixed(1)} / 5 AI score`]
      : []),
    ...(game ? [`${formatStars(game.stars)} stars`] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #04060b 0%, #0a1020 55%, #1a0f2e 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: "linear-gradient(135deg, #0070f3, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              S
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              SwitchRecomp
            </div>
          </div>
          <div style={{ fontSize: 20, color: "#93a0b8" }}>
            {game ? `${game.console} · ${game.year}` : "Native recompilation index"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#8b9bb4",
            }}
          >
            Native port index
          </div>
          <div
            style={{
              fontSize: title.length > 38 ? 48 : title.length > 26 ? 58 : 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {stats.map((stat) => (
              <div
                key={stat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.06)",
                  fontSize: 22,
                  color: "#dbe3f0",
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#93a0b8",
          }}
        >
          <div>{platformLabels}</div>
          <div>recomp.denohub.com</div>
        </div>
      </div>
    ),
    size,
  );
}
