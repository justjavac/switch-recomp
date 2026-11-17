import { games, type Game } from "@/lib/games";
import { platforms, type PlatformId, type Project } from "@/lib/projects";

export type SeriesDefinition = {
  slug: string;
  name: string;
  description: string;
};

export type Series = SeriesDefinition & {
  games: Game[];
  projects: Project[];
  stars: number;
  platforms: PlatformId[];
  playableCount: number;
};

export const seriesDefinitions: SeriesDefinition[] = [
  {
    slug: "zelda",
    name: "塞尔达传说",
    description:
      "围绕海拉鲁与三角力量展开的冒险系列，涵盖 2D、3D 与重制作品。",
  },
  {
    slug: "pokemon",
    name: "宝可梦",
    description:
      "以捕捉、培育和对战为核心的怪物收集 RPG，覆盖正传与衍生作品。",
  },
  {
    slug: "mario",
    name: "超级马力欧",
    description:
      "任天堂招牌平台动作系列，从 2D 横版到 3D 箱庭探索。",
  },
  {
    slug: "metroid",
    name: "密特罗德",
    description:
      "银河城类型的源头之一，以探索、射击与能力解锁为核心。",
  },
  {
    slug: "xenoblade",
    name: "异度神剑",
    description:
      "Monolith Soft 打造的宏大 JRPG 系列，以世界观、战斗与音乐见长。",
  },
  {
    slug: "fire-emblem",
    name: "火焰纹章",
    description:
      "战棋 SRPG 系列，以角色养成、支援对话与永久死亡机制闻名。",
  },
  {
    slug: "bayonetta",
    name: "猎天使魔女",
    description:
      "白金工作室的高速动作系列，以魔女时间与华丽连段著称。",
  },
  {
    slug: "mario-kart",
    name: "马力欧卡丁车",
    description:
      "任天堂的卡丁车竞速系列，道具、漂移与多人在线是核心乐趣。",
  },
  {
    slug: "diablo",
    name: "暗黑破坏神",
    description:
      "暗黑奇幻 ARPG 系列，围绕刷装备、技能构筑与地牢探索。",
  },
  {
    slug: "smash-bros",
    name: "任天堂明星大乱斗",
    description:
      "任天堂角色跨界的平台格斗系列，兼顾派对与竞技。",
  },
  {
    slug: "astral-chain",
    name: "异界锁链",
    description:
      "白金工作室的科幻动作 RPG，以双角色协同与锁链战斗为特色。",
  },
  {
    slug: "monster-hunter",
    name: "怪物猎人",
    description:
      "以狩猎大型怪物、制作装备为核心的共斗动作系列。",
  },
  {
    slug: "luigis-mansion",
    name: "路易吉洋馆",
    description:
      "路易吉使用吸尘器捉鬼的冒险系列，偏解谜与探索。",
  },
  {
    slug: "donkey-kong",
    name: "咚奇刚",
    description:
      "大金刚 / 咚奇刚系列，以平台动作与破坏场景为特色。",
  },
  {
    slug: "dark-souls",
    name: "黑暗之魂",
    description:
      "FromSoftware 的高难度暗黑奇幻动作 RPG，以探索、Boss 战与叙事闻名。",
  },
  {
    slug: "doom",
    name: "毁灭战士",
    description:
      "id Software 的高速第一人称射击系列，强调移动、资源管理与处决。",
  },
  {
    slug: "star-fox",
    name: "星际火狐",
    description: "任天堂的 3D 空战射击系列，以轨道射击与小队作战为特色。",
  },
  {
    slug: "splatoon",
    name: "斯普拉遁",
    description: "以墨水涂地对战为核心的第三人称射击系列，风格张扬。",
  },
  {
    slug: "yokai-watch",
    name: "妖怪手表",
    description: "Level-5 的妖怪收集 RPG 系列，围绕现世与妖怪界的日常冒险。",
  },
  {
    slug: "cruisn",
    name: "Cruis'n",
    description: "起源于街机的竞速系列，以夸张赛道与爽快漂移著称。",
  },
  {
    slug: "torchlight",
    name: "火炬之光",
    description: "轻量化的暗黑风 ARPG 系列，强调刷装备与随机地牢。",
  },
  {
    slug: "kirby",
    name: "星之卡比",
    description: "任天堂的粉色卡比系列，以吞噬复制能力与轻松平台动作为特色。",
  },
  {
    slug: "hyrule-warriors",
    name: "塞尔达无双",
    description: "《塞尔达传说》与无双玩法结合的衍生系列，主打大规模割草战场。",
  },
  {
    slug: "mario-strikers",
    name: "马力欧足球",
    description: "马力欧世界观下的足球竞技系列，强调冲撞、道具与必杀射门。",
  },
  {
    slug: "dead-or-alive",
    name: "死或生",
    description: "以格斗与海岛度假衍生作并行的系列，角色与演出是主要看点。",
  },
  {
    slug: "shadow-fight",
    name: "暗影格斗",
    description: "以剪影美术与武器连招为特色的格斗游戏系列。",
  },
  {
    slug: "divinity",
    name: "神界",
    description: "Larian 的奇幻 CRPG 系列，以元素互动与高自由度著称。",
  },
  {
    slug: "pillars-of-eternity",
    name: "永恒之柱",
    description: "黑曜石的等距视角 CRPG 系列，世界观围绕灵魂与轮回展开。",
  },
  {
    slug: "manosaba",
    name: "魔法少女ノ魔女裁判",
    description: "哥特悬疑风格的魔法少女推理冒险系列。",
  },
];

export const seriesList: Series[] = seriesDefinitions
  .map((definition) => {
    const seriesGames = games
      .filter((game) => game.series === definition.name)
      .sort((a, b) => b.stars - a.stars);
    const seriesProjects = seriesGames.flatMap((game) => game.projects);
    const platformSet = new Set<PlatformId>();
    seriesGames.forEach((game) =>
      game.platforms.forEach((platform) => platformSet.add(platform)),
    );

    return {
      ...definition,
      games: seriesGames,
      projects: seriesProjects,
      stars: seriesGames.reduce((total, game) => total + game.stars, 0),
      platforms: platforms
        .map((platform) => platform.id)
        .filter((platform) => platformSet.has(platform)),
      playableCount: seriesProjects.filter(
        (project) => project.status === "playable",
      ).length,
    };
  })
  .filter((series) => series.games.length > 0)
  .sort((a, b) => b.games.length - a.games.length || b.stars - a.stars);

export function getSeries(slug: string) {
  return seriesList.find((series) => series.slug === slug);
}

export function getSeriesSlug(name: string) {
  return seriesDefinitions.find((series) => series.name === name)?.slug;
}
