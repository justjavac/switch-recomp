/**
 * 多项目游戏的横向对比说明，按项目 id 索引。
 * 项目数 ≥ 2 的游戏详情页会展示对比表。
 */
export const projectNotes: Record<string, string> = {
  // 塞尔达传说：织梦岛
  "las-recomp": "主力版本，支持 8K 与超宽屏，Win / Linux / Mac",
  "zlaa-android": "Android 专用，适合移动端",
  // 塞尔达传说：旷野之息
  "savage-wind": "主力版本，Windows / Linux，AI 辅助开发",
  "botw-android": "Android 原生，触屏可玩",
  "mac-native-games": "Mac 通用构建工具，覆盖多款游戏",
  // 塞尔达传说：王国之泪
  "totk-pc": "最成熟，Vulkan 渲染，Windows / Linux",
  "ultra-tears": "Steam Deck 友好，支持 1.4.3",
  "totk-weeping": "Windows 原生，支持 DLSS 与高帧率",
  "totk-droid": "Android，触屏与宽屏支持",
  "totk-mobile": "Apple Silicon Mac / iPad / iPhone",
  "totk-android": "Android，按屏幕分辨率渲染",
  "totk-linux": "Linux / Steam Deck 专用",
  "totk-ios": "iPhone / iPad 实验版",
  // 塞尔达传说：时之笛
  "oot-hookshot": "功能最全，内置菜单、帧生成与升频，首选",
  "oot-recomp": "老牌版本，社区资料多，更新节奏放缓",
  "oot-relink": "较新，构建流程简单，适合尝鲜",
  "oot-greenkid": "Mac（Apple Silicon）专用构建工具",
  "oot-ios": "iPhone / iPad，需在 Mac 上构建",
  "oot-echora": "实验性，Windows / Linux 双平台",
  "oot-pc-recomp": "早期版本，覆盖 Windows / Linux",
  // 超级马力欧：奥德赛
  "smo-recomp": "早期源码版本，暂无公开发布",
  "smo-pc-recomp": "高帧率、4 倍分辨率与 DLSS / FSR / XeSS",
  "powerful-moon": "Power Moon 分支，带安装器与 120 帧修复",
  // 超级马力欧兄弟 惊奇
  "wonder-recomp": "Windows / macOS / Android，MoltenVK 转译",
  "super-wonders": "基于 DKB / TotK 重编译，带 F1 菜单",
  // 马力欧卡丁车 世界
  "mkw-recomp": "主力版本，Windows / Linux",
  "mkw-thwomp": "基于 mkw-recomp 的整合版",
  "mkw-kartnative": "Apple Silicon Mac，可完成整场大奖赛",
  // 宝可梦 Let's Go
  "letsgo": "Windows 原生，基于 LAS Recomp",
  "letsgo-android": "Android 层，世界与战斗可用，文字待完善",
  // 猎天使魔女 3
  "witch-time": "老牌版本，60 FPS / 4K / 超宽屏",
  "bayo3-recomp": "PC / Steam Deck / Android，Vulkan 后端",
  // 密特罗德 究极 4
  "mp4-recomp": "Linux 专用实验构建",
  "mp4-jaigner": "Windows，可玩至开场，面向 Switch 1 最终版",
  // 异界锁链
  "astral-chain-pc": "Windows 安装脚本，已测试至第一章",
  "ac-recomp": "macOS 实验版，第一章 30 FPS",
  // 异度神剑 2
  "xc2-recomp": "研究项目，附移植笔记与工具",
  "xc2-akshar": "主力版本，可玩到新游戏开场",
  "xc2-ns2": "Switch 2 版，Windows + Vulkan",
  // 星际火狐
  "space-animals-recomp": "Switch 2 版，Windows 原生",
  "starfox-vulkan": "Vulkan 后端 PC 版",
};
