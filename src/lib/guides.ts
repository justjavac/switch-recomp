export type GameGuide = {
  prerequisites: string[];
  tips: { title: string; body: string }[];
};

/**
 * 高热度游戏的上手须知。
 * 只描述通用前提与配置方向，不涉及游戏文件的获取方式。
 */
export const gameGuides: Record<string, GameGuide> = {
  "tears-of-the-kingdom": {
    prerequisites: [
      "自备正版《王国之泪》游戏文件（需自行从卡带或数字版提取）",
      "64 位 Windows 10 / 11 或主流 Linux 发行版",
      "支持 Vulkan 的显卡（NVIDIA GTX 1000 系以上 / AMD RX 5000 系以上）",
      "16 GB 内存，建议安装在 SSD 上",
      "最新显卡驱动；从源码构建还需 CMake 与 Visual Studio 生成工具",
    ],
    tips: [
      {
        title: "优先选 totk-pc",
        body: "Vulkan 渲染，兼容性与性能最均衡；macOS / iOS 用户看 totk-mobile，Linux / Steam Deck 看 totk-recomp。",
      },
      {
        title: "先原生分辨率跑稳",
        body: "先用 1080p 原生确认帧率稳定，再逐级开启 DLSS / FSR 升频，避免一开始就叠加多项特效。",
      },
      {
        title: "注意高帧率影响",
        body: "超过 60 FPS 时部分物理与动画可能异常，遇到问题先把帧率限制回 60。",
      },
    ],
  },
  "ocarina-of-time": {
    prerequisites: [
      "自备 N64 版《时之笛》ROM（美版 / 欧版 / 日版 1.0）",
      "Windows / Linux / macOS，部分分支支持 Switch 或 Android",
      "支持 OpenGL 3.3 或 Vulkan 的显卡",
      "建议使用支持摇杆的手柄",
    ],
    tips: [
      {
        title: "Hookshot 系功能最全",
        body: "内置 60 FPS、宽屏、帧生成与材质包支持；ProjectReLink 等分支更接近原版体验。",
      },
      {
        title: "ROM 校验会拦截修改版",
        body: "启动时会校验 ROM 版本，打过补丁或改过 ROM 的文件可能无法通过。",
      },
      {
        title: "材质包按需加载",
        body: "高清材质包体积较大，建议确认基础运行稳定后再启用。",
      },
    ],
  },
  "banjo-kazooie": {
    prerequisites: [
      "自备 N64 版《班卓熊大冒险》ROM",
      "Windows / Linux / macOS",
      "支持 OpenGL 的显卡",
      "大型 mod 需要额外下载对应的 mod 包",
    ],
    tips: [
      {
        title: "原版 BanjoRecomp 最稳",
        body: "维护最活跃、平台覆盖最全；Jiggies of Time 等大型 mod 建议先在原版跑通再安装。",
      },
      {
        title: "首次运行较慢",
        body: "首启动需要生成纹理解码缓存，之后启动会明显加快。",
      },
      {
        title: "画面设置",
        body: "支持 16:9 与 60 FPS；老显卡遇到卡顿可先关闭各向异性过滤。",
      },
    ],
  },
  "goldeneye-007": {
    prerequisites: [
      "自备 N64 ROM 或 Xbox 360 版资源（取决于所选分支）",
      "Windows / Linux / macOS",
      "支持 OpenGL / Vulkan 的显卡",
      "多人分屏需要额外手柄",
    ],
    tips: [
      {
        title: "按画质选分支",
        body: "XBLA 分支支持 16:9 与更高分辨率；N64 分支更接近原版手感与贴图。",
      },
      {
        title: "鼠标瞄准可开启",
        body: "多数分支在设置中提供鼠标瞄准与现代化控制方案。",
      },
      {
        title: "分屏帧率",
        body: "四人分屏对显卡压力较大，可降低内部分辨率保持流畅。",
      },
    ],
  },
  "super-mario-odyssey": {
    prerequisites: [
      "自备正版《超级马力欧：奥德赛》游戏文件",
      "Windows / Linux 64 位系统",
      "支持 Vulkan 或 DX12 的显卡，建议 8 GB 以上显存",
      "16 GB 内存",
    ],
    tips: [
      {
        title: "分辨率按显存选",
        body: "4 倍内部分辨率对显存要求高，8 GB 显存建议先用 2 倍，再逐步提高。",
      },
      {
        title: "升频技术可叠加",
        body: "支持 DLSS / FSR / XeSS，按显卡品牌选择对应方案，能明显降低高分辨率压力。",
      },
      {
        title: "高帧率留意动作判定",
        body: "部分跳跃判定与原版帧率相关，遇到异常先切回 60 FPS 对比。",
      },
    ],
  },
};

export function getGameGuide(slug: string): GameGuide | undefined {
  return gameGuides[slug];
}
