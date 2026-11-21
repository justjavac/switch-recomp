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
  "breath-of-the-wild": {
    prerequisites: [
      "自备正版《旷野之息》游戏文件",
      "64 位 Windows 10 / 11 或主流 Linux；Android 分支需要中高端骁龙设备",
      "支持 Vulkan 的显卡与最新驱动",
      "16 GB 内存，建议 SSD",
    ],
    tips: [
      {
        title: "桌面优先 Savage Wind",
        body: "Windows / Linux 支持最完整，mod 与画质选项也最多；macOS / iOS 用 mac-native-games。",
      },
      {
        title: "先跑通原版再装 mod",
        body: "重编译版本对模拟器时代的 mod 兼容性有限，先确认基础运行稳定再逐项添加。",
      },
      {
        title: "画质与帧率分开调",
        body: "先锁定稳定帧率，再提升分辨率与阴影；同时调整容易掩盖性能瓶颈。",
      },
    ],
  },
  "diablo-ii-resurrected": {
    prerequisites: [
      "自备正版《暗黑破坏神 II：狱火重生》游戏数据",
      "iOS 需要侧载工具，macOS 需要自行签名，Android 可直接安装",
      "较新的设备（A12 / 骁龙 855 以上）",
      "预留足够存储空间存放游戏数据",
    ],
    tips: [
      {
        title: "移动端建议配手柄",
        body: "触屏操作可用，但长时间刷图还是手柄更舒服，部分分支已做手柄映射。",
      },
      {
        title: "画质先降后升",
        body: "怪多场景容易掉帧，先关闭高阴影与粒子特效，再逐步恢复。",
      },
      {
        title: "存档自行备份",
        body: "侧载版本升级可能覆盖数据目录，重要存档建议定期导出备份。",
      },
    ],
  },
  "links-awakening": {
    prerequisites: [
      "自备正版《织梦岛》游戏文件",
      "Windows / Linux / macOS；Android 为独立分支",
      "支持 OpenGL 3.3 的显卡",
      "手柄或键盘均可，推荐手柄",
    ],
    tips: [
      {
        title: "桌面版最稳",
        body: "las-recomp 覆盖三大桌面平台，更新也更及时；Android 分支仍在实验阶段。",
      },
      {
        title: "宽屏与高帧率可调",
        body: "设置里可开启宽屏与更高帧率，但部分过场仍按原版比例渲染。",
      },
      {
        title: "画面滤镜按需开",
        body: "重制版本身就是景深效果较强的风格，叠加滤镜后注意可读性。",
      },
    ],
  },
  "donkey-kong-bananza": {
    prerequisites: [
      "自备正版《咚奇刚 蕉力全开》游戏文件",
      "Windows 10 / 11 64 位",
      "支持 Vulkan 的独立显卡",
      "安装最新 Visual C++ 运行库",
    ],
    tips: [
      {
        title: "实验阶段，优先看 Releases",
        body: "项目迭代很快，尽量使用最新构建，旧版本可能存在已修复的崩溃问题。",
      },
      {
        title: "高分辨率吃性能",
        body: "4K 需要较强显卡，中端卡建议 1080p 或 2K 起步。",
      },
      {
        title: "崩溃先回退版本",
        body: "遇到启动崩溃时，先回退到上一个可用构建，再向项目反馈。",
      },
    ],
  },
  "mario-kart-world": {
    prerequisites: [
      "自备正版《马力欧卡丁车 世界》游戏文件",
      "Windows / Linux；macOS 使用 kartnative 分支",
      "支持 Vulkan 的显卡",
      "多人分屏需要额外手柄",
    ],
    tips: [
      {
        title: "mkw-recomp 是主力",
        body: "平台覆盖与更新频率最好；THWOMP 等分支更偏实验特性，适合尝鲜。",
      },
      {
        title: "macOS 功能较少",
        body: "kartnative 已能完整跑完大奖赛，但画面选项与 mod 支持不如桌面版。",
      },
      {
        title: "联机不保证",
        body: "本地分屏稳定，线上功能取决于项目实现，不建议作为主要玩法。",
      },
    ],
  },
  "mario-kart-64": {
    prerequisites: [
      "自备 N64 版《马力欧卡丁车 64》ROM",
      "Windows / Linux / macOS",
      "支持 OpenGL 的显卡",
      "建议使用手柄",
    ],
    tips: [
      {
        title: "按需求选分支",
        body: "mk64-recomp 功能全、支持分屏联机；MK64-Reloaded 侧重高清材质与原味渲染。",
      },
      {
        title: "解锁帧率注意物理",
        body: "高帧率下漂移与碰撞手感可能变化，竞技向玩法建议保持 60 FPS。",
      },
      {
        title: "网络联机需额外配置",
        body: "分屏最稳，跨网络联机需要项目自带方案，版本需保持一致。",
      },
    ],
  },
  "pokemon-pokopia": {
    prerequisites: [
      "自备正版《宝可梦 Pokopia》游戏文件",
      "Windows 10 / 11；Android 为实验分支",
      "支持 Vulkan 的显卡",
      "8 GB 以上内存",
    ],
    tips: [
      {
        title: "桌面版优先",
        body: "Recompia 是主要分支，更新与兼容性最好；Android 分支功能尚不完整。",
      },
      {
        title: "分辨率按设备调整",
        body: "移动端建议降低内部分辨率以保持稳定帧率，桌面端再开高画质。",
      },
      {
        title: "存档勤备份",
        body: "实验分支升级可能影响存档结构，跨版本前先备份存档目录。",
      },
    ],
  },
  "fire-emblem-fortunes-weave": {
    prerequisites: [
      "自备正版游戏文件",
      "Windows 10 / 11 64 位",
      "最新 Visual C++ 运行库",
      "支持 Vulkan 或 OpenGL 4.5 的显卡",
    ],
    tips: [
      {
        title: "选活跃度高的分支",
        body: "fefw-recomp 的 Star 与提交都更多，遇到问题更容易找到修复版本。",
      },
      {
        title: "战棋对帧率不敏感",
        body: "可以优先提升分辨率与文字清晰度，帧率保持 60 即可。",
      },
      {
        title: "存档路径独立",
        body: "存档与模拟器版本不通用，切换分支前先导出备份。",
      },
    ],
  },
  "bayonetta-2": {
    prerequisites: [
      "自备正版《猎天使魔女 2》游戏文件",
      "Windows / Linux",
      "支持 Vulkan 的显卡",
      "手柄强烈推荐",
    ],
    tips: [
      {
        title: "60 FPS 是动作判定基准",
        body: "魔女时间等机制与原版帧率相关，掉帧会直接影响手感，优先保证帧率。",
      },
      {
        title: "过场掉帧属常见现象",
        body: "即时演算过场对性能要求更高，短暂掉帧不影响战斗。",
      },
      {
        title: "手柄键位先校准",
        body: "连段对按键时序敏感，建议先在训练模式确认键位与摇杆死区。",
      },
    ],
  },
  "monster-hunter-gu": {
    prerequisites: [
      "自备正版《怪物猎人 Generations Ultimate》游戏文件",
      "Windows / Linux；Android 分支需高性能设备",
      "支持 Vulkan 的显卡",
      "必须使用手柄",
    ],
    tips: [
      {
        title: "Android 版要求较高",
        body: "需要手柄配合，且对设备性能要求高，中端机建议先用桌面版。",
      },
      {
        title: "存档不通用",
        body: "3DS / Switch 原版存档无法直接迁移，需要从新档开始。",
      },
      {
        title: "联机需额外方案",
        body: "本地联机最稳，跨网络联机依赖项目自带实现，版本必须一致。",
      },
    ],
  },
  "bayonetta-3": {
    prerequisites: [
      "自备正版《猎天使魔女 3》游戏文件",
      "Windows / Linux；Android 分支为实验性质",
      "支持 Vulkan 的显卡，建议 8 GB 以上显存",
      "手柄推荐",
    ],
    tips: [
      {
        title: "Witch-Time 更成熟",
        body: "功能与稳定性更好；bayo3-recomp 的优势是覆盖 Android，但成熟度较低。",
      },
      {
        title: "显存决定分辨率",
        body: "召唤魔兽时显存占用高，爆显存会出现明显卡顿，按显存选择内部分辨率。",
      },
      {
        title: "高帧率注意判定",
        body: "与二代类似，帧率波动会影响闪避判定，优先锁定 60 FPS。",
      },
    ],
  },
  "metroid-dread": {
    prerequisites: [
      "自备正版《密特罗德：生存恐惧》游戏文件",
      "Windows / Linux",
      "支持 Vulkan 的显卡",
      "手柄推荐",
    ],
    tips: [
      {
        title: "60 FPS 基准",
        body: "E.M.M.I. 追逐段对输入延迟敏感，优先保证稳定帧率而不是分辨率。",
      },
      {
        title: "宽屏 mod 兼容有限",
        body: "部分过场与 UI 按 16:9 布局，使用宽屏补丁前先确认版本兼容。",
      },
      {
        title: "区域帧率波动",
        body: "不同区域的粒子与光照负载差异较大，卡顿时可先降低阴影质量。",
      },
    ],
  },
  "xenoblade-chronicles-2": {
    prerequisites: [
      "自备正版《异度神剑 2》游戏文件",
      "Windows 10 / 11 64 位",
      "支持 Vulkan 的显卡与最新驱动",
      "16 GB 内存，建议安装在 SSD",
    ],
    tips: [
      {
        title: "xc2-akshar 最活跃",
        body: "提交与 Star 最多，兼容性最好；ns2 分支针对 Switch 2 版素材。",
      },
      {
        title: "掌机 / 主机模式影响分辨率",
        body: "设置里切换模式会改变内部分辨率与特效，按设备性能选择。",
      },
      {
        title: "长流程注意显存",
        body: "大地图与战斗特效叠加时显存压力大，长时间游玩建议监控温度与占用。",
      },
    ],
  },
  "metroid-prime-hunters": {
    prerequisites: [
      "自备 NDS 版《密特罗德 究极 猎人》ROM",
      "Windows 分支；Android 分支为实验性质",
      "支持 OpenGL 的显卡",
      "需要鼠标或触控映射双屏操作",
    ],
    tips: [
      {
        title: "桌面版最稳",
        body: "mstan 的实现完成度最高；Android 分支适合尝鲜，双屏布局在设置里调整。",
      },
      {
        title: "双屏布局可切换",
        body: "上下屏可并排或切换，建议先在手柄设置里确认触控映射。",
      },
      {
        title: "鼠标瞄准提升明显",
        body: "DS 原版触控瞄准映射到鼠标后手感更接近现代射击游戏。",
      },
    ],
  },
  "pokemon-lets-go": {
    prerequisites: [
      "自备正版《宝可梦 Let's Go》游戏文件",
      "Windows 10 / 11；Android 为实验分支",
      "支持 Vulkan 的显卡",
      "8 GB 以上内存",
    ],
    tips: [
      {
        title: "桌面版优先",
        body: "Windows 分支更成熟；Android 分支功能与稳定性仍在完善。",
      },
      {
        title: "体感投球可映射",
        body: "原版体感捕捉在桌面端映射为鼠标或摇杆操作，可在设置里调整灵敏度。",
      },
      {
        title: "双人同乐需双设备输入",
        body: "本地双人需要额外手柄，键位在设置中单独配置。",
      },
    ],
  },
};

export function getGameGuide(slug: string): GameGuide | undefined {
  return gameGuides[slug];
}
