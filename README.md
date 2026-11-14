# SwitchRecomp

收集 Nintendo Switch 游戏原生重编译与移植项目的导航站。

线上地址：<https://recomp.denohub.com>

Switch 上大量游戏通过静态重编译（recompilation）被移植到 PC、Android 与 iOS。这些项目通常分散在 GitHub、GitLab 的不同仓库中。本项目以「游戏」而不是「仓库」为单位整理它们，方便玩家快速判断某款游戏是否有可用移植、支持哪些平台、哪个项目最活跃。

## 功能

- 以游戏为单位聚合多个社区项目，展示状态、平台、Star 与最近更新
- 首页本地搜索，按平台筛选
- 平台聚合页：Windows、Linux、macOS、Android、iOS / iPadOS
- 系列聚合页：塞尔达传说、宝可梦、超级马力欧、密特罗德等
- 游戏详情页：推荐结论、项目列表、常见问题与相关游戏
- 最近更新：按仓库最近推送时间排序
- 站外链接提示页，避免直接跳出站点
- 深浅色主题与响应式布局
- SEO：canonical、Open Graph、JSON-LD、sitemap 与 robots

当前收录 35 款游戏、50 个社区项目（数据快照 2026.11.14）。

## 技术栈

- Next.js 16（App Router、Cache Components、Partial Prefetching）
- React 19
- Tailwind CSS v4
- shadcn 风格组件与 Radix UI
- next-themes

## 本地开发

要求 Node.js 22+。

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。

常用命令：

```bash
npm run lint
npm run build
npm start
npm run sync:stars
```

## 站点域名

正式环境默认使用 `https://recomp.denohub.com`。如需覆盖：

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

该变量会影响 canonical、Open Graph、sitemap 与 robots 的输出。

## 部署

站点部署在腾讯云 EdgeOne，正式域名为 `https://recomp.denohub.com`。

- 构建命令：`npm run build`
- 启动命令：`npm start`
- 若使用 EdgeOne 的 Next.js 项目托管，按控制台提示关联仓库并配置构建命令即可

## 数据同步

`npm run sync:stars` 会读取 `src/lib/projects.ts` 中的仓库列表：

- GitHub：通过 `gh api` 获取 Star 数与最近推送时间，需要先登录 GitHub CLI
- GitLab：通过公开 API 获取 Star 数与最近活跃时间
- 自动更新 `src/lib/projects.ts` 与 `src/lib/project-updates.ts`

## 目录结构

```text
src/
├── app/                 页面路由
│   ├── games/[slug]/    游戏详情
│   ├── series/          系列聚合
│   ├── platforms/       平台聚合
│   ├── go/[id]/         站外链接提示
│   └── ...
├── components/          UI 组件
└── lib/
    ├── projects.ts      项目数据
    ├── games.ts         游戏数据
    ├── series.ts        系列聚合
    └── updates.ts       最近更新
public/covers/           官方游戏封面（1200×675）
scripts/sync-stars.mjs   Star 与更新时间同步脚本
```

## 收录新项目

1. 在 `src/lib/projects.ts` 添加项目，填写仓库、平台、状态、Star 与别名。
2. 在 `src/lib/games.ts` 关联到对应游戏；新游戏需要补充简介、系列与封面。
3. 封面放到 `public/covers/{slug}.jpg`，建议 1200×675。
4. 运行 `npm run lint` 与 `npm run build`，然后提交 Pull Request。

## 免责声明

本站是非官方粉丝项目，与 Nintendo 及相关游戏发行商无关联。

- 不提供游戏本体、ROM、密钥、固件或安装包
- 所有项目信息来自公开仓库，状态与可用性以仓库 README 和发布页为准
- 游戏名称、封面与商标归各自权利方所有
- 使用移植项目前请合法购买并自行转储游戏

## 链接

- 站点：<https://recomp.denohub.com>
- 仓库：<https://github.com/justjavac/switch-recomp>
