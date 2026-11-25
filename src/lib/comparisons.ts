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
  "smo-rwwo": "1.0.0 专用，高分辨率与现代手柄",
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
  // 火焰纹章 Engage
  "fe-engage": "基础版本，Windows 原生移植",
  "engage-imalti0r": "DLSS + 4K + 简中 UI，功能最全",
  // 火焰纹章 Fortune's Weave
  "fefw-recomp": "Goldoire 分支，Windows 原生",
  "fefw-metrist": "394 Star，与 Goldoire 分支并行更新",
  "fefw-may22es": "社区分支，需自备转储",
  // 异度神剑 3
  "xc3-recomp": "主力版本，可玩主线与 4 个 DLC",
  "xc3-android": "Android 掌机移植，早期版本",
  // 密特罗德 究极 猎人
  "mph-recomp": "Windows 主力版本，290 Star",
  "hunters-android": "双屏 Android，AYN Thor 参考设备",
  // 斯普拉遁 3
  "inkypaint-recomp": "Windows 早期实验版，基于 ScarletNX",
  "inksplash3-recomp": "Linux 探索项目，验证阶段",
  // 马力欧派对 3
  "mp3-n64hub": "支持 PC 与网页运行，30 Star",
  "mp3-rainchus": "社区分支，Windows 构建",
  // 动物森友会：城市人
  "city-folk-recompiled": "主力版本，359 Star 近亲项目作者",
  "accf-recomp": "基于 DolRecomp 的早期版本",
  // 班卓熊大冒险
  "banjo-recomp": "主力版本，2145 Star，全平台",
  "banjo-jiggies": "大型 mod 版本《Jiggies of Time》",
  "banjo-nostalgia": "大型 mod 版本《Nostalgia 64》",
  // 马力欧卡丁车 64
  "mk64-recomp": "主力版本，支持分屏与联机",
  "mk64-reloaded": "高清材质增强，兼容 Recomp / Dolphin",
  // 完美黑暗
  "pd-xbla": "XBLA 重制版，Windows 原生",
  "pd-n64hub": "N64 原版，支持网页运行",
  "pd-remaster": "2010 Remaster 版，ReXGlue",
  // 黄金眼 007
  "ge-recomp": "主力版本，946 Star，支持宽屏高帧率",
  "ge-xbla": "XBLA 重制版，画面更好",
  "ge-mac-linux": "Mac / Linux 专用构建",
  "ge-bean": "XBLA 版另一实现，探索阶段",
  // 路易吉洋馆 2
  "lm2-recompiled": "Win / Linux 双平台，需欧版 ROM",
  "lm2-mansion2": "4K / 120 FPS 分支",
  // 塞尔达无双：封印战记
  "hwaoi-recomp": "Windows 实验版，需固定 60 FPS",
  "hwaoi-decomp": "Win / Linux 整合包，RecompLauncher 就绪",
  "hwaoi-android": "Android 原生移植，移动端尝鲜",
  // 宝可梦传说 Z-A
  "lza-recomp": "Windows 主力，同时覆盖《传说 阿尔宙斯》",
  "plza-recomp": "Linux 便携 AppImage，解压即用",
  // 朋友聚会：梦想生活
  "tomodachi-recomp": "Windows 主力，仅含工具与运行时",
  "tomodachi-ltd-recomp": "Linux Alpha，需自行构建",
  // 黄昏血族
  "duskbloods-afterglow": "Linux 优先，Windows 规划中",
  // 马力欧卡丁车 8 豪华版
  "racing-8-dx": "主力版本，FSR 3.1 与帧生成",
  "mk8-dougchansan": "独立原生运行时，蘑菇杯约 60 FPS",
  // 马力欧卡丁车 世界（kart-recomp）
  "mkw-kart-recomp": "Win / Linux，支持 1.0.0 与 1.8.0",
  // Conker's Bad Fur Day
  "conker-bfd-recomp": "Conker64Recomp 版，Windows",
  "conker-bfd-sciaschi": "独立实现，348 Star",
  // Conker: Live & Reloaded
  "conker-lr-recomp": "rashevskyv 分支，Win / Linux",
  "conker-lr-mabec": "带启动器，最高 240 FPS 与联机",
  // Jet Force Gemini
  "jfg-recomp": "VibinToast 版，Win / Linux",
  "jfg-tk22": "另一实现，强化鼠标键盘支持",
  // New 宝可梦随乐拍
  "new-snap-recomp": "早期重编译，Windows",
  "new-snap-maty": "社区分支，基于 AC / TotK Recomp",
  // 滑板 3
  "skate3-recomp": "主力版本，Win / Linux / macOS",
  "skate3-5c8": "增强分支，联机与 SteamVR",
  // 大金刚 64
  "dk64-recomp": "596 Star，RT64 渲染增强",
  // 恶魔城：月下夜想曲
  "sotn-symphony": "1.1k Star，PSX 原版",
  "sotn-nocturne": "XBLA 版，Win / Linux",
  // 失落的奥德赛
  "lost-odyssey-recomp": "实验阶段，Windows 原生",
  // 但丁地狱
  "dantes-inferno-recomp": "ReXGlue 重编译，Windows",
  // 神鬼寓言 II
  "fable2-recomp": "AI 辅助开发，尚未完整验证",
  // GTA：罪恶都市传奇
  "gtavcs-recomp": "Win / Linux 原生",
  // 金刚
  "king-kong-recomp": "Xbox 360 版移植",
  // 路易吉洋馆
  "luigis-mansion-recompiled": "Win / Linux / macOS，最高 320 帧插值",
  // 永恒黑暗
  "eternal-darkness-recomp": "仅支持欧版光盘，高清材质与高帧率",
  // 永恒的阿卡迪亚
  "skies-of-arcadia-recomp": "Win / Linux / macOS / Android，自研 GC 硬件层",
  // F-Zero GX
  "f-zero-gx-recomp": "源码构建，Win / macOS / Android，可选 VR",
  // 马力欧卡丁车：双重冲击
  "mario-kart-double-dash-recomp": "源码构建，Win / macOS / Android",
  // 卡比飞天赛车
  "kirby-air-ride-recomp": "Windows 版，内置联机服务器，City Trial 8 人",
  // 战神
  "god-of-war-recomp": "Windows 实验版，需自备 PS2 美版镜像",
  // 星球大战：帝国阴影
  "sote-recomp": "Windows 0.9.8 可玩，Linux 为实验构建",
  // 大乱斗 X
  "brawl-recomp": "Windows / Linux，支持 Wii 改版与 120 帧插值",
  // 新超马 Wii
  "nsmbw-recomp": "Win / Linux / Android，支持 4 人联机",
  // 战争机器
  "gears-of-war-recomp": "四部曲合集，Windows，支持 5K 与超宽屏",
  // 蜘蛛侠：时间边缘
  "spiderman-edge-of-time": "Win / Linux / macOS 全平台正式版",
  // 黑暗
  "the-darkness-recomp": "Win / Steam Deck，DX11 原生渲染",
  // 午夜俱乐部
  "midnight-club-la-recomp": "Windows 1.0.14 稳定版，另有 PS5 版",
  // 忍者龙剑传 II
  "ninja-gaiden-2-recomp": "Win / Linux，Vulkan 渲染与 8 倍缩放",
  // 极品飞车：最高通缉
  "nfs-most-wanted-recomp": "Win / Android，自研 Vulkan 渲染器",
  // 辛普森一家
  "simpsons-game-recomp": "Win / Linux / Android 预览，D3D12 与 Vulkan",
  // 使命召唤 3
  "cod3-recomp": "Windows 单人模式，实验性构建",
};
