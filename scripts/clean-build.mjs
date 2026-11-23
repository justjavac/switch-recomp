import { readdir, rm } from "node:fs/promises";
import { join } from "node:path";

async function removeMaps(dir) {
  let removed = 0;
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return removed;
  }
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      removed += await removeMaps(fullPath);
    } else if (entry.name.endsWith(".map")) {
      await rm(fullPath, { force: true });
      removed += 1;
    }
  }
  return removed;
}

const removed = await removeMaps(".next/server");
console.log(`已清理 ${removed} 个服务端 source map 文件`);
