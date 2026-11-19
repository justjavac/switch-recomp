import {
  Axe,
  Banana,
  Blocks,
  Car,
  CircleDot,
  Crown,
  Crosshair,
  Ghost,
  Link2,
  Mountain,
  Sparkles,
  Sprout,
  Star,
  Sword,
  Swords,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import {
  platforms,
  projects,
  type CategoryId,
  type PlatformId,
  type Project,
  type StatusId,
} from "@/lib/projects";

export type GameConsole =
  | "Nintendo Switch"
  | "Nintendo Switch 2"
  | "Nintendo Switch / Nintendo Switch 2"
  | "Nintendo GameCube"
  | "Nintendo 64"
  | "Game Boy"
  | "iOS / Android"
  | "Windows / Mac";

export type Game = {
  slug: string;
  titleZh: string;
  titleEn: string;
  series: string;
  genre: string;
  year: number;
  console: GameConsole;
  category: CategoryId;
  icon: LucideIcon;
  cover: string;
  image: string;
  blurb: string;
  projects: Project[];
  platforms: PlatformId[];
  stars: number;
  status: StatusId;
  aliases: string[];
  addedAt?: string;
};

const genres: Record<CategoryId, string> = {
  zelda: "动作冒险",
  mario: "平台动作",
  pokemon: "角色扮演",
  action: "动作冒险",
  rpg: "角色扮演",
  fighting: "格斗",
  "donkey-kong": "平台动作",
  racing: "竞速",
  simulation: "生活模拟",
};

const statusRank: Record<StatusId, number> = {
  playable: 0,
  beta: 1,
  experimental: 2,
};

type GameDefinition = Omit<
  Game,
  | "projects"
  | "platforms"
  | "stars"
  | "status"
  | "genre"
  | "aliases"
  | "image"
  | "console"
> & {
  console?: GameConsole;
  projectIds: string[];
};

const recentlyAdded: Record<string, string> = {
  "star-fox": "2026-11-15",
  "splatoon-raiders": "2026-11-15",
  "new-pokemon-snap": "2026-11-15",
  "yokai-watch-4": "2026-11-15",
  "cruisn-blast": "2026-11-15",
  "torchlight-ii": "2026-11-15",
  "kirby-forgotten-land": "2026-11-16",
  "hyrule-warriors-de": "2026-11-16",
  "mario-strikers-battle-league": "2026-11-16",
  "dead-or-alive-xtreme-3": "2026-11-16",
  "shadow-fight-2": "2026-11-16",
  "divinity-original-sin-2": "2026-11-17",
  "pillars-of-eternity": "2026-11-17",
  "super-kirby-clash": "2026-11-17",
  "kirby-air-riders": "2026-11-17",
  "mahou-shoujo-no-majo-saiban": "2026-11-17",
};

const gameDefinitions: GameDefinition[] = [
  {
    slug: "links-awakening",
    titleZh: "塞尔达传说：织梦岛",
    titleEn: "The Legend of Zelda: Link's Awakening",
    series: "塞尔达传说",
    year: 2019,
    category: "zelda",
    icon: Sword,
    cover: "from-[#123524] via-[#0a1a12] to-[#050807]",
    blurb:
      "1993 年掌机经典的重制版：林克漂流到可湖之岛，收集八件乐器唤醒风鱼，轻松又带着一丝感伤。",
    projectIds: ["las-recomp", "zlaa-android"],
  },
  {
    slug: "breath-of-the-wild",
    titleZh: "塞尔达传说：旷野之息",
    titleEn: "The Legend of Zelda: Breath of the Wild",
    series: "塞尔达传说",
    year: 2017,
    category: "zelda",
    icon: Sword,
    cover: "from-[#17352a] via-[#0b1a14] to-[#050807]",
    blurb:
      "系列首次开放世界：灾厄百年后苏醒的林克自由攀爬、滑翔与解谜，用物理规则重新定义了冒险。",
    projectIds: ["savage-wind", "botw-android", "mac-native-games"],
  },
  {
    slug: "tears-of-the-kingdom",
    titleZh: "塞尔达传说：王国之泪",
    titleEn: "The Legend of Zelda: Tears of the Kingdom",
    series: "塞尔达传说",
    year: 2023,
    category: "zelda",
    icon: Sword,
    cover: "from-[#2a2410] via-[#15130a] to-[#070706]",
    blurb:
      "《旷野之息》续作，加入究极手组装、倒转乾坤与天空群岛，把自由解谜推到新的高度。",
    projectIds: ["totk-pc", "ultra-tears", "mac-native-games", "totk-weeping", "totk-droid", "totk-mobile", "totk-ios", "totk-linux", "totk-android"],
  },
  {
    slug: "super-mario-odyssey",
    titleZh: "超级马力欧：奥德赛",
    titleEn: "Super Mario Odyssey",
    series: "超级马力欧",
    year: 2017,
    category: "mario",
    icon: Star,
    cover: "from-[#3a1414] via-[#1c0a0a] to-[#080505]",
    blurb:
      "3D 马力欧的集大成之作：帽子伙伴凯皮让马力欧附身敌人与物体，环游各个国度营救碧姬公主。",
    projectIds: ["smo-recomp", "smo-pc-recomp", "powerful-moon"],
  },
  {
    slug: "super-mario-maker-2",
    titleZh: "超级马力欧创作家 2",
    titleEn: "Super Mario Maker 2",
    series: "超级马力欧",
    year: 2019,
    category: "mario",
    icon: Blocks,
    cover: "from-[#35142a] via-[#1a0a14] to-[#080506]",
    blurb:
      "关卡编辑器系列最新作，可自制并分享横版关卡，新增 3D 世界风格、斜坡与多人合作模式。",
    projectIds: ["smm2"],
  },
  {
    slug: "pokemon-lets-go",
    titleZh: "宝可梦 Let's Go",
    titleEn: "Pokémon: Let's Go, Pikachu! / Eevee!",
    series: "宝可梦",
    year: 2018,
    category: "pokemon",
    icon: CircleDot,
    cover: "from-[#3a300f] via-[#1c1707] to-[#080704]",
    blurb:
      "《宝可梦 黄》的重制版，以皮卡丘或伊布为搭档，采用投球捕捉与双人同乐，是系列面向新玩家的入口。",
    projectIds: ["letsgo", "letsgo-android"],
  },
  {
    slug: "pokemon-brilliant-diamond",
    titleZh: "宝可梦：晶灿钻石",
    titleEn: "Pokémon Brilliant Diamond",
    series: "宝可梦",
    year: 2021,
    category: "pokemon",
    icon: CircleDot,
    cover: "from-[#162b46] via-[#0b1522] to-[#05080b]",
    blurb:
      "第四世代《钻石／珍珠》的重制版，在神奥地区收集图鉴、挑战道馆，并新增地下大洞窟的挖掘玩法。",
    projectIds: ["udpr"],
  },
  {
    slug: "pokemon-sword-shield",
    titleZh: "宝可梦 剑 / 盾",
    titleEn: "Pokémon Sword / Shield",
    series: "宝可梦",
    year: 2019,
    category: "pokemon",
    icon: CircleDot,
    cover: "from-[#231b45] via-[#110d22] to-[#07060b]",
    blurb:
      "第八世代正统作，舞台为伽勒尔地区，引入极巨化与旷野地带，围绕道馆挑战展开冒险。",
    projectIds: ["swsh"],
  },
  {
    slug: "smash-ultimate",
    titleZh: "任天堂明星大乱斗 特别版",
    titleEn: "Super Smash Bros. Ultimate",
    series: "任天堂明星大乱斗",
    year: 2018,
    category: "fighting",
    icon: Swords,
    cover: "from-[#3b2010] via-[#1d1008] to-[#080604]",
    blurb:
      "任天堂明星大乱斗的集大成之作，系列历代斗士全员回归，收录上百张舞台与上千首游戏音乐。",
    projectIds: ["ssbu"],
  },
  {
    slug: "bayonetta-2",
    titleZh: "猎天使魔女 2",
    titleEn: "Bayonetta 2",
    series: "猎天使魔女",
    year: 2018,
    category: "action",
    icon: WandSparkles,
    cover: "from-[#2c1235] via-[#16081a] to-[#080509]",
    blurb:
      "白金工作室的华丽动作游戏，魔女贝优妮塔驾驭魔界恶魔与「魔女时间」，招式与演出极具张力。",
    projectIds: ["b2-recomp"],
  },
  {
    slug: "bayonetta-3",
    titleZh: "猎天使魔女 3",
    titleEn: "Bayonetta 3",
    series: "猎天使魔女",
    year: 2022,
    category: "action",
    icon: WandSparkles,
    cover: "from-[#3a1235] via-[#1d091a] to-[#080509]",
    blurb:
      "系列第三作，贝优妮塔穿梭多元宇宙对抗人造生物，新增操控召唤魔兽「恶魔奴隶」的玩法。",
    projectIds: ["witch-time", "bayo3-recomp"],
  },
  {
    slug: "metroid-dread",
    titleZh: "密特罗德：生存恐惧",
    titleEn: "Metroid Dread",
    series: "密特罗德",
    year: 2021,
    category: "action",
    icon: Crosshair,
    cover: "from-[#3a1a10] via-[#1d0d08] to-[#080604]",
    blurb:
      "2D 银河战士的回归之作：萨姆斯在 ZDR 星球被 E.M.M.I. 机器人追猎，紧张感与探索感兼具。",
    projectIds: ["metroid-dread"],
  },
  {
    slug: "metroid-prime-4",
    titleZh: "密特罗德 究极 4：穿越未知",
    titleEn: "Metroid Prime 4: Beyond",
    series: "密特罗德",
    year: 2025,
    console: "Nintendo Switch / Nintendo Switch 2",
    category: "action",
    icon: Crosshair,
    cover: "from-[#251226] via-[#120913] to-[#070508]",
    blurb:
      "第一人称银河战士全新作，萨姆斯·阿兰在维尤罗斯星球调查神秘事件，系列时隔多年的正统续作。",
    projectIds: ["mp4-recomp", "mp4-jaigner"],
  },
  {
    slug: "astral-chain",
    titleZh: "异界锁链",
    titleEn: "Astral Chain",
    series: "异界锁链",
    year: 2019,
    category: "action",
    icon: Link2,
    cover: "from-[#0f2f39] via-[#08171b] to-[#05080a]",
    blurb:
      "白金工作室出品：警察「神经元」双胞胎操控人形兵器「雷基恩」，在方舟都市与异界生物作战。",
    projectIds: ["astral-chain-pc", "ac-recomp"],
  },
  {
    slug: "xenoblade-chronicles-x",
    titleZh: "异度神剑 X：决定版",
    titleEn: "Xenoblade Chronicles X: Definitive Edition",
    series: "异度神剑",
    year: 2025,
    category: "rpg",
    icon: Mountain,
    cover: "from-[#1b2145] via-[#0d1022] to-[#06070b]",
    blurb:
      "在米拉星球驾驶机甲探索开放世界的 JRPG，人类幸存者在此建立新家园，规模与自由度在系列中数一数二。",
    projectIds: ["xcx-recomp"],
  },
  {
    slug: "monster-hunter-gu",
    titleZh: "怪物猎人 Generations Ultimate",
    titleEn: "Monster Hunter Generations Ultimate",
    series: "怪物猎人",
    year: 2018,
    category: "rpg",
    icon: Axe,
    cover: "from-[#33200f] via-[#191006] to-[#080604]",
    blurb:
      "《怪物猎人》系列在 Switch 上的集大成作品，收录大量怪物、狩猎风格与「猎喵」模式。",
    projectIds: ["mhgu"],
  },
  {
    slug: "fire-emblem-three-houses",
    titleZh: "火焰纹章：风花雪月",
    titleEn: "Fire Emblem: Three Houses",
    series: "火焰纹章",
    year: 2019,
    category: "rpg",
    icon: Crown,
    cover: "from-[#141c3d] via-[#0a0e1e] to-[#05060a]",
    blurb:
      "以修道院士官学校为舞台的策略 RPG，三条路线、角色养成与支援对话构成庞大叙事。",
    projectIds: ["fe3h"],
  },
  {
    slug: "fire-emblem-engage",
    titleZh: "火焰纹章：Engage",
    titleEn: "Fire Emblem Engage",
    series: "火焰纹章",
    year: 2023,
    category: "rpg",
    icon: Crown,
    cover: "from-[#391620] via-[#1c0b10] to-[#080506]",
    blurb:
      "火焰纹章系列新作，主角与历代英雄「纹章士」合体作战，强调兵种相克与戒指搭配。",
    projectIds: ["fe-engage"],
  },
  {
    slug: "super-mario-bros-wonder",
    titleZh: "超级马力欧兄弟 惊奇",
    titleEn: "Super Mario Bros. Wonder",
    series: "超级马力欧",
    year: 2023,
    category: "mario",
    icon: Sparkles,
    cover: "from-[#3b1a3b] via-[#1d0d1d] to-[#080509]",
    blurb:
      "2D 马力欧的全新作：借助「惊奇花」让关卡与角色发生古怪变化，并首次加入大象、泡泡等变身。",
    projectIds: ["wonder-recomp", "super-wonders"],
  },
  {
    slug: "mario-kart-8-deluxe",
    titleZh: "马力欧卡丁车 8 豪华版",
    titleEn: "Mario Kart 8 Deluxe",
    series: "马力欧卡丁车",
    year: 2017,
    category: "racing",
    icon: Car,
    cover: "from-[#12304a] via-[#0a1a28] to-[#05080b]",
    blurb:
      "集合系列赛道与角色的卡丁车竞速，支持本地四人、线上对战与 48 条追加赛道。",
    projectIds: ["racing-8-dx"],
  },
  {
    slug: "luigis-mansion-3",
    titleZh: "路易吉洋馆 3",
    titleEn: "Luigi's Mansion 3",
    series: "路易吉洋馆",
    year: 2019,
    category: "action",
    icon: Ghost,
    cover: "from-[#1c2b3a] via-[#0e161d] to-[#05080a]",
    blurb:
      "路易吉带着吸尘器「波基」在豪华酒店捉鬼，层层探索、解谜与 Boss 战充满喜剧感。",
    projectIds: ["lm3-recomp"],
  },
  {
    slug: "metroid-prime-remastered",
    titleZh: "密特罗德 究极 重制版",
    titleEn: "Metroid Prime Remastered",
    series: "密特罗德",
    year: 2023,
    category: "action",
    icon: Crosshair,
    cover: "from-[#2f1a10] via-[#180d08] to-[#080604]",
    blurb:
      "初代《密特罗德 究极》的全面重制，第一人称探索与扫描系统在 Switch 上焕然一新。",
    projectIds: ["mpr-recomp"],
  },
  {
    slug: "donkey-kong-bananza",
    titleZh: "咚奇刚 蕉力全开",
    titleEn: "Donkey Kong Bananza",
    series: "咚奇刚",
    year: 2025,
    console: "Nintendo Switch 2",
    category: "donkey-kong",
    icon: Banana,
    cover: "from-[#3a2410] via-[#1d1208] to-[#080604]",
    blurb:
      "Switch 2 的 3D 平台动作新作：咚奇刚与少女宝琳联手，用破坏与挖掘一路向下探索地底世界。",
    projectIds: ["dkb-recomp"],
  },
  {
    slug: "pokemon-scarlet",
    titleZh: "宝可梦 朱",
    titleEn: "Pokémon Scarlet",
    series: "宝可梦",
    year: 2022,
    category: "pokemon",
    icon: CircleDot,
    cover: "from-[#3a1010] via-[#1d0808] to-[#080505]",
    blurb:
      "第九世代正统作，开放世界的帕底亚地区，三条主线可自由选择顺序，支持四人联机。",
    projectIds: ["karpur"],
  },
  {
    slug: "xenoblade-chronicles-2",
    titleZh: "异度神剑 2",
    titleEn: "Xenoblade Chronicles 2",
    series: "异度神剑",
    year: 2017,
    category: "rpg",
    icon: Mountain,
    cover: "from-[#102c3a] via-[#08161d] to-[#05080a]",
    blurb:
      "云海之上的阿尔斯特，少年莱克斯与「天之圣杯」焰相遇，围绕乐园展开宏大的冒险。",
    projectIds: ["xc2-recomp", "xc2-akshar", "xc2-ns2", "xc2-circerio"],
  },
  {
    slug: "pokemon-pokopia",
    titleZh: "宝可梦 Pokopia",
    titleEn: "Pokémon Pokopia",
    series: "宝可梦",
    year: 2026,
    console: "Nintendo Switch 2",
    category: "simulation",
    icon: Sprout,
    cover: "from-[#1f3a20] via-[#101d10] to-[#050806]",
    blurb:
      "以百变怪为主角的慢生活模拟：在荒岛采集素材、建造家园，与宝可梦一起把空地变成小镇。",
    projectIds: ["recompia", "pokopia-android"],
  },
  {
    slug: "ocarina-of-time",
    titleZh: "塞尔达传说：时之笛",
    titleEn: "The Legend of Zelda: Ocarina of Time",
    series: "塞尔达传说",
    year: 2026,
    console: "Nintendo Switch 2",
    category: "zelda",
    icon: Sword,
    cover: "from-[#1b2a12] via-[#0d1509] to-[#050805]",
    blurb:
      "N64 经典在 Switch 2 上的全新重制：林克拔起大师之剑，穿梭过去与未来，阻止加侬多夫夺取三角力量。",
    projectIds: ["oot-recomp", "oot-echora", "oot-ios", "oot-greenkid", "oot-pc-recomp", "oot-hookshot", "oot-relink"],
  },
  {
    slug: "echoes-of-wisdom",
    titleZh: "塞尔达传说：智慧的再现",
    titleEn: "The Legend of Zelda: Echoes of Wisdom",
    series: "塞尔达传说",
    year: 2024,
    category: "zelda",
    icon: WandSparkles,
    cover: "from-[#2a1b3a] via-[#150d1d] to-[#070508]",
    blurb:
      "系列首次以塞尔达公主为主角：她借助「复制」能力造出物体与怪物，在没有林克的海拉鲁寻找真相。",
    projectIds: ["eow-recomp"],
  },
  {
    slug: "mario-kart-world",
    titleZh: "马力欧卡丁车 世界",
    titleEn: "Mario Kart World",
    series: "马力欧卡丁车",
    year: 2025,
    console: "Nintendo Switch 2",
    category: "racing",
    icon: Car,
    cover: "from-[#102f4a] via-[#081828] to-[#05080b]",
    blurb:
      "Switch 2 首发竞速大作：赛道与开放世界连成一体，支持 24 人同场竞速，并可驾车在赛道之间自由穿行。",
    projectIds: ["mkw-recomp", "mkw-thwomp", "mkw-kartnative"],
  },
  {
    slug: "xenoblade-chronicles-3",
    titleZh: "异度神剑 3",
    titleEn: "Xenoblade Chronicles 3",
    series: "异度神剑",
    year: 2022,
    category: "rpg",
    icon: Mountain,
    cover: "from-[#1b2a45] via-[#0d1522] to-[#05080b]",
    blurb:
      "两个敌对国家的六名少年少女并肩冒险，围绕「生命」与「送行」展开的宏大 JRPG。",
    projectIds: ["xc3-recomp"],
  },
  {
    slug: "diablo-ii-resurrected",
    titleZh: "暗黑破坏神 II：狱火重生",
    titleEn: "Diablo II: Resurrected",
    series: "暗黑破坏神",
    year: 2021,
    category: "rpg",
    icon: Swords,
    cover: "from-[#3a1410] via-[#1d0a08] to-[#080505]",
    blurb:
      "暴雪经典 ARPG 的高清重制版，包含《毁灭之王》资料片，在庇护之地刷装备、挑战地狱难度。",
    projectIds: ["d2r-mobile"],
  },
  {
    slug: "fire-emblem-fortunes-weave",
    titleZh: "火焰纹章：万缕千丝",
    titleEn: "Fire Emblem: Fortune's Weave",
    series: "火焰纹章",
    year: 2026,
    console: "Nintendo Switch 2",
    category: "rpg",
    icon: Crown,
    cover: "from-[#2a1d3a] via-[#150e1d] to-[#070508]",
    blurb:
      "火焰纹章系列在 Switch 2 上的新作：舞台是众神统治下的鞑古扎帝国，围绕斗技场与「愿望」展开新的战棋故事。",
    projectIds: ["fefw-recomp"],
  },
  {
    slug: "dark-souls-remastered",
    titleZh: "黑暗之魂：重制版",
    titleEn: "Dark Souls: Remastered",
    series: "黑暗之魂",
    year: 2018,
    category: "action",
    icon: Swords,
    cover: "from-[#1a1a1a] via-[#0d0d0d] to-[#050505]",
    blurb:
      "FromSoftware 高难度动作 RPG 的 Switch 重制版，在罗德兰探索、受苦并挑战传火之旅。",
    projectIds: ["dsr-native"],
  },
  {
    slug: "doom-2016",
    titleZh: "毁灭战士（2016）",
    titleEn: "DOOM (2016)",
    series: "毁灭战士",
    year: 2017,
    category: "action",
    icon: Crosshair,
    cover: "from-[#3a1a10] via-[#1d0d08] to-[#080604]",
    blurb:
      "id Software 重启的高速 FPS：在火星基地与地狱之间屠杀恶魔，强调节奏与近战处决。",
    projectIds: ["doom-mobile"],
  },
  {
    slug: "diablo-iii",
    titleZh: "暗黑破坏神 III",
    titleEn: "Diablo III",
    series: "暗黑破坏神",
    year: 2018,
    category: "rpg",
    icon: Swords,
    cover: "from-[#2a1010] via-[#150808] to-[#070505]",
    blurb:
      "暗黑系列第三作，Switch 版包含《夺魂之镰》与《死灵法师的崛起》，支持本地四人合作。",
    projectIds: ["diablo3-port"],
  },
  {
    slug: "star-fox",
    titleZh: "星际火狐",
    titleEn: "Star Fox",
    series: "星际火狐",
    year: 2026,
    console: "Nintendo Switch 2",
    category: "action",
    icon: Crosshair,
    cover: "from-[#122a4a] via-[#0a1526] to-[#05080b]",
    blurb:
      "Switch 2 上的《星际火狐》重制：福克斯·麦克劳德率领星际火狐小队，在 3D 空战与地面战中对抗安德罗斯军团。",
    projectIds: ["space-animals-recomp", "starfox-vulkan"],
  },
  {
    slug: "splatoon-raiders",
    titleZh: "斯普拉遁：Raiders",
    titleEn: "Splatoon Raiders",
    series: "斯普拉遁",
    year: 2026,
    console: "Nintendo Switch 2",
    category: "action",
    icon: Sparkles,
    cover: "from-[#123a3a] via-[#0a1f1f] to-[#050b0b]",
    blurb:
      "《斯普拉遁》系列的 Switch 2 衍生作，以单人探险为核心，在霓虹都市与荒野中用墨水武器对抗敌人。",
    projectIds: ["spr-recomp"],
  },
  {
    slug: "new-pokemon-snap",
    titleZh: "New 宝可梦随乐拍",
    titleEn: "New Pokémon Snap",
    series: "宝可梦",
    year: 2021,
    category: "pokemon",
    icon: CircleDot,
    cover: "from-[#143a22] via-[#0a1f12] to-[#050b07]",
    blurb:
      "在蓝蒂尔地区乘飞行器拍摄野生宝可梦的摄影冒险，生态表现与昼夜变化是系列亮点。",
    projectIds: ["new-snap-recomp"],
  },
  {
    slug: "yokai-watch-4",
    titleZh: "妖怪手表 4++",
    titleEn: "Yo-kai Watch 4++",
    series: "妖怪手表",
    year: 2019,
    category: "rpg",
    icon: Ghost,
    cover: "from-[#2a1b3a] via-[#150d1d] to-[#070508]",
    blurb:
      "以「妖怪手表」世界观展开的 3D RPG，少年少女穿梭现世与妖怪界，与妖怪并肩作战。",
    projectIds: ["yw4-recomp"],
  },
  {
    slug: "cruisn-blast",
    titleZh: "Cruis'n Blast",
    titleEn: "Cruis'n Blast",
    series: "Cruis'n",
    year: 2021,
    category: "racing",
    icon: Car,
    cover: "from-[#3a1a10] via-[#1d0d08] to-[#080604]",
    blurb:
      "街机风格的狂野竞速：在都市、丛林与恐龙世界之间漂移冲刺，包含多种夸张载具与本地分屏。",
    projectIds: ["cruisn-blast-recomp"],
  },
  {
    slug: "torchlight-ii",
    titleZh: "火炬之光 II",
    titleEn: "Torchlight II",
    series: "火炬之光",
    year: 2019,
    category: "rpg",
    icon: WandSparkles,
    cover: "from-[#3a2410] via-[#1d1208] to-[#080604]",
    blurb:
      "Runic Games 的暗黑风 ARPG，Switch 版包含宠物、联网合作与随机地牢，节奏轻快。",
    projectIds: ["torchlight2-port"],
  },
  {
    slug: "kirby-forgotten-land",
    titleZh: "星之卡比 探索发现",
    titleEn: "Kirby and the Forgotten Land",
    series: "星之卡比",
    year: 2022,
    category: "action",
    icon: Star,
    cover: "from-[#3a1a2a] via-[#1d0d15] to-[#080506]",
    blurb:
      "卡比的首次 3D 平台冒险：在被遗忘的废墟世界用「塞满嘴」变形，救出被掳走的瓦多迪。",
    projectIds: ["kirby-fl-recomp"],
  },
  {
    slug: "hyrule-warriors-de",
    titleZh: "塞尔达无双：海拉鲁全明星豪华版",
    titleEn: "Hyrule Warriors: Definitive Edition",
    series: "塞尔达无双",
    year: 2018,
    category: "action",
    icon: Swords,
    cover: "from-[#3a2410] via-[#1d1208] to-[#080604]",
    blurb:
      "《塞尔达无双》的 Switch 决定版，集结系列历代角色在无双战场横扫千军，收录全部 DLC。",
    projectIds: ["hwde-recomp"],
  },
  {
    slug: "mario-strikers-battle-league",
    titleZh: "马力欧足球 战斗联赛",
    titleEn: "Mario Strikers: Battle League",
    series: "马力欧足球",
    year: 2022,
    category: "fighting",
    icon: CircleDot,
    cover: "from-[#12223a] via-[#0a1220] to-[#05080b]",
    blurb:
      "马力欧足球系列新作：五人制激烈对抗，可用撞击、道具与「超绝必杀」抢断射门。",
    projectIds: ["strikers-recomp"],
  },
  {
    slug: "dead-or-alive-xtreme-3",
    titleZh: "死或生 沙滩排球 3：Scarlet",
    titleEn: "Dead or Alive Xtreme 3: Scarlet",
    series: "死或生",
    year: 2019,
    category: "simulation",
    icon: Sparkles,
    cover: "from-[#123a4a] via-[#0a1f28] to-[#05080b]",
    blurb:
      "在南方小岛与角色们度假的休闲作品，以小游戏、沙滩排球与换装为核心。",
    projectIds: ["doax3-recomp"],
  },
  {
    slug: "shadow-fight-2",
    titleZh: "暗影格斗 2",
    titleEn: "Shadow Fight 2",
    series: "暗影格斗",
    year: 2024,
    category: "fighting",
    icon: Swords,
    cover: "from-[#2a1208] via-[#150904] to-[#070403]",
    blurb:
      "以剪影风格著称的格斗游戏，玩家扮演武者挑战各路恶魔与 Boss，可用武器与魔法连招。",
    projectIds: ["sf2-recomp"],
  },
  {
    slug: "divinity-original-sin-2",
    titleZh: "神界：原罪 2 决定版",
    titleEn: "Divinity: Original Sin 2 - Definitive Edition",
    series: "神界",
    year: 2019,
    category: "rpg",
    icon: WandSparkles,
    cover: "from-[#2a1a10] via-[#150d08] to-[#070504]",
    blurb:
      "Larian 的回合制 CRPG 名作，支持元素互动、四人联机与自由剧情，Switch 版包含全部决定版内容。",
    projectIds: ["dos2-port"],
  },
  {
    slug: "pillars-of-eternity",
    titleZh: "永恒之柱 完全版",
    titleEn: "Pillars of Eternity: Complete Edition",
    series: "永恒之柱",
    year: 2019,
    category: "rpg",
    icon: Sword,
    cover: "from-[#101c2a] via-[#08101a] to-[#05080b]",
    blurb:
      "黑曜石经典的等距视角 CRPG，以深刻的文本、灵魂世界观与实时暂停战斗著称，Switch 版收录全部资料片。",
    projectIds: ["poe-port"],
  },
  {
    slug: "super-kirby-clash",
    titleZh: "超级卡比猎人队",
    titleEn: "Super Kirby Clash",
    series: "星之卡比",
    year: 2019,
    category: "action",
    icon: Star,
    cover: "from-[#3a1a2a] via-[#1d0d15] to-[#080506]",
    blurb:
      "四人协作的卡比共斗游戏：选择不同职业，合力讨伐巨大 Boss，刷装备与等级。",
    projectIds: ["kirby-clash-recomp"],
  },
  {
    slug: "kirby-air-riders",
    titleZh: "卡比空中骑手",
    titleEn: "Kirby Air Riders",
    series: "星之卡比",
    year: 2025,
    console: "Nintendo Switch 2",
    category: "racing",
    icon: Star,
    cover: "from-[#2a1a3a] via-[#150d1d] to-[#070508]",
    blurb:
      "《卡比飞天赛车》时隔多年的新作，在 Switch 2 上驾驶各种空中载具竞速，支持多人对战。",
    projectIds: ["kirby-air-riders-recomp"],
  },
  {
    slug: "mahou-shoujo-no-majo-saiban",
    titleZh: "魔法少女ノ魔女裁判",
    titleEn: "Mahou Shoujo no Majo Saiban",
    series: "魔法少女ノ魔女裁判",
    year: 2025,
    category: "rpg",
    icon: Sparkles,
    cover: "from-[#2a1235] via-[#15091a] to-[#070509]",
    blurb:
      "哥特风格的悬疑推理冒险：一群魔法少女被困于牢狱，通过辩论与审判找出隐藏的魔女。",
    projectIds: ["manosaba-ios"],
  },
  {
    slug: "sonic-riders",
    titleZh: "索尼克滑板竞速",
    titleEn: "Sonic Riders",
    series: "索尼克",
    year: 2006,
    console: "Nintendo GameCube",
    category: "racing",
    icon: Car,
    cover: "from-[#102a4a] via-[#08182a] to-[#05080b]",
    blurb:
      "以悬浮滑板代替卡丁车的索尼克竞速外传：利用气流与特技在赛道上提速，支持分屏对战。",
    projectIds: ["sonic-riders-recomp"],
  },
  {
    slug: "super-robot-wars-64",
    titleZh: "超级机器人大战 64",
    titleEn: "Super Robot Wars 64",
    series: "超级机器人大战",
    year: 1999,
    console: "Nintendo 64",
    category: "rpg",
    icon: Swords,
    cover: "from-[#2a2410] via-[#15120a] to-[#070706]",
    blurb:
      "N64 平台的系列作品，集结多部机器人动画机体，以回合制战棋推进跨作品剧情。",
    projectIds: ["srw64-recomp"],
  },
  {
    slug: "angry-birds",
    titleZh: "愤怒的小鸟",
    titleEn: "Angry Birds",
    series: "愤怒的小鸟",
    year: 2009,
    console: "iOS / Android",
    category: "action",
    icon: CircleDot,
    cover: "from-[#1a3a1a] via-[#0d1d0d] to-[#050806]",
    blurb:
      "拉动弹弓击倒绿猪的物理益智经典，衍生出季节、里约、太空与星球大战等多个版本。",
    projectIds: ["angry-birds-recomp"],
  },
  {
    slug: "binding-of-isaac",
    titleZh: "以撒的结合",
    titleEn: "The Binding of Isaac",
    series: "以撒的结合",
    year: 2011,
    console: "Windows / Mac",
    category: "action",
    icon: Ghost,
    cover: "from-[#2a1a10] via-[#150d08] to-[#070504]",
    blurb:
      "以眼泪为武器的 roguelike：每次进入地牢都是新布局，道具组合带来极高重玩价值。",
    projectIds: ["isaac-recomp"],
  },
  {
    slug: "kirby-dream-land",
    titleZh: "星之卡比",
    titleEn: "Kirby's Dream Land",
    series: "星之卡比",
    year: 1992,
    console: "Game Boy",
    category: "action",
    icon: Star,
    cover: "from-[#3a1a2a] via-[#1d0d15] to-[#080506]",
    blurb:
      "卡比系列初代：在梦之国普普普大陆夺回被偷走的食物与星星，短小轻快的关卡奠定了系列基础。",
    projectIds: ["kirby-dream-land-recomp"],
  },
];

export const games: Game[] = gameDefinitions
  .map(({ projectIds, ...definition }) => {
    const gameProjects = projectIds
      .map((id) => projects.find((project) => project.id === id))
      .filter((project): project is Project => Boolean(project));

    const platformSet = new Set<PlatformId>();
    for (const project of gameProjects) {
      for (const platform of project.platforms) {
        platformSet.add(platform);
      }
    }

    const status = gameProjects.reduce(
      (best, project) =>
        statusRank[project.status] < statusRank[best] ? project.status : best,
      "experimental" as StatusId,
    );

    return {
      ...definition,
      console: definition.console ?? "Nintendo Switch",
      image: `/covers/${definition.slug}.jpg`,
      genre: genres[definition.category],
      projects: gameProjects,
      platforms: platforms
        .map((platform) => platform.id)
        .filter((id) => platformSet.has(id)),
      stars: gameProjects.reduce((total, project) => total + project.stars, 0),
      status,
      addedAt: recentlyAdded[definition.slug],
      aliases: Array.from(
        new Set([
          ...gameProjects.flatMap((project) => project.aliases ?? []),
          definition.titleZh,
          definition.titleEn,
          definition.series,
        ]),
      ),
    };
  })
  .sort((a, b) => b.stars - a.stars);

export const newGames = games
  .filter((game) => game.addedAt)
  .sort((a, b) => (b.addedAt ?? "").localeCompare(a.addedAt ?? ""))
  .slice(0, 8);

export const featuredGame = games[0];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function coverClass(game: Game) {
  return `bg-gradient-to-br ${game.cover}`;
}
