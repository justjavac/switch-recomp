/**
 * 多项目游戏的横向对比说明，按项目 id 索引。
 * 仅在项目数 ≥ 5 的游戏详情页展示对比表。
 */
export const projectNotes: Record<string, string> = {
  // 塞尔达传说：时之笛
  "oot-hookshot": "功能最全，内置菜单、帧生成与升频，首选",
  "oot-recomp": "老牌版本，社区资料多，更新节奏放缓",
  "oot-relink": "较新，构建流程简单，适合尝鲜",
  "oot-greenkid": "Mac（Apple Silicon）专用构建工具",
  "oot-ios": "iPhone / iPad，需在 Mac 上构建",
  "oot-echora": "实验性，Windows / Linux 双平台",
  "oot-pc-recomp": "早期版本，覆盖 Windows / Linux",
  // 塞尔达传说：王国之泪
  "totk-pc": "最成熟，Vulkan 渲染，Windows / Linux",
  "ultra-tears": "Steam Deck 友好，支持 1.4.3",
  "totk-weeping": "Windows 原生，支持 DLSS 与高帧率",
  "totk-droid": "Android，触屏与宽屏支持",
  "totk-mobile": "Apple Silicon Mac / iPad / iPhone",
  "totk-android": "Android，按屏幕分辨率渲染",
  "totk-linux": "Linux / Steam Deck 专用",
  "totk-ios": "iPhone / iPad 实验版",
  "mac-native-games": "Mac 通用构建工具，覆盖多款游戏",
};
