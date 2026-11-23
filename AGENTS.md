<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 封面图规范

- 游戏封面禁止使用 AI 生成图片。
- 封面请直接使用任天堂 eShop / 官方商店的真实封面，或其它可信来源（官方宣传图、维基百科词条封面等）。
- 来源不明确的图片不要使用；找不到可用封面时先向用户确认，不要自行生成占位图。
- 封面统一保存为 `public/covers/<slug>.jpg`，并压缩到合适体积。
