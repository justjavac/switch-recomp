export const siteConfig = {
  name: "SwitchRecomp",
  title: "SwitchRecomp · Switch 游戏原生移植库",
  description:
    "以游戏为单位收录 Nintendo Switch 静态重编译项目，覆盖 Windows、Linux、macOS、Android 与 iOS，聚合 GitHub 与 GitLab 上的社区移植成果。",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://recomp.denohub.com"
  ).replace(/\/+$/, ""),
  github: "https://github.com/justjavac",
  githubLabel: "github.com/justjavac",
  updatedAt: "2026-11-14",
  snapshotDate: "2026.11.14",
};
