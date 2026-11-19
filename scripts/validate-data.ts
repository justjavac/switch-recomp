import { existsSync } from "node:fs";
import path from "node:path";
import { projectNotes } from "@/lib/comparisons";
import { games } from "@/lib/games";
import { projects } from "@/lib/projects";

const errors: string[] = [];
const projectById = new Map(projects.map((p) => [p.id, p]));

if (projectById.size !== projects.length) {
  const seen = new Set<string>();
  for (const p of projects) {
    if (seen.has(p.id)) errors.push(`重复项目 id: ${p.id}`);
    seen.add(p.id);
  }
}

const repoKeys = new Set<string>();
for (const p of projects) {
  const key = `${p.host}:${p.repo.toLowerCase()}`;
  if (repoKeys.has(key)) errors.push(`重复仓库: ${key}（项目 ${p.id}）`);
  repoKeys.add(key);
  if (!Number.isInteger(p.stars) || p.stars < 0) {
    errors.push(`stars 非法: ${p.id}`);
  }
}

const slugs = new Set<string>();
const referenced = new Set<string>();
for (const g of games) {
  if (slugs.has(g.slug)) errors.push(`重复游戏 slug: ${g.slug}`);
  slugs.add(g.slug);
  if (g.projects.length === 0) errors.push(`游戏未绑定有效项目: ${g.slug}`);
  for (const project of g.projects) {
    referenced.add(project.id);
  }
  const cover = path.join("public/covers", `${g.slug}.jpg`);
  if (!existsSync(cover)) errors.push(`缺少封面: ${cover}`);
}

for (const p of projects) {
  if (!referenced.has(p.id)) errors.push(`项目未被任何游戏引用: ${p.id}`);
}

for (const id of Object.keys(projectNotes)) {
  if (!projectById.has(id)) errors.push(`comparisons 含无效项目 id: ${id}`);
}

if (errors.length > 0) {
  console.error(`数据校验失败（${errors.length} 项）：`);
  for (const e of errors) console.error(` - ${e}`);
  process.exit(1);
}

console.log(
  `数据校验通过：${games.length} 款游戏、${projects.length} 个项目、${Object.keys(projectNotes).length} 条对比说明`,
);
