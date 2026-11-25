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
  {
    slug: "tomodachi",
    name: "朋友聚会",
    description:
      "任天堂的生活观察沙盒系列，以 Mii 居民的日常、社交与梦想为核心。",
  },
  {
    slug: "duskbloods",
    name: "黄昏血族",
    description:
      "FromSoftware 在 Switch 2 上的多人在线动作系列，围绕血族与「初血」的争夺展开。",
  },
  {
    slug: "eternal-darkness",
    name: "永恒黑暗",
    description:
      "以克苏鲁式恐怖与理智机制为核心的 GameCube 独占系列。",
  },
  {
    slug: "skies-of-arcadia",
    name: "永恒的阿卡迪亚",
    description:
      "世嘉的空贼题材 RPG 系列，以飞空船、空战与「发现」系统为特色。",
  },
  {
    slug: "f-zero",
    name: "F-Zero",
    description:
      "任天堂的高速未来竞速系列，以极速、能量管理和高难度赛道著称。",
  },
  {
    slug: "god-of-war",
    name: "战神",
    description:
      "以希腊与北欧神话为背景的动作系列，以链刃连招、QTE 与宏大 Boss 战闻名。",
  },
  {
    slug: "star-wars",
    name: "星球大战",
    description:
      "横跨电影与游戏的科幻系列，涵盖太空战、飞梭与光剑对决。",
  },
  {
    slug: "gears-of-war",
    name: "战争机器",
    description:
      "以掩体射击与兽族战争为核心的第三人称动作系列，以电锯枪与粗犷美术著称。",
  },
  {
    slug: "the-darkness",
    name: "黑暗",
    description:
      "改编自漫画的黑暗奇幻系列，围绕黑帮复仇与「黑暗之力」的触手能力展开。",
  },
  {
    slug: "midnight-club",
    name: "午夜俱乐部",
    description:
      "Rockstar 的开放世界街头竞速系列，以夜间都市巡游与即兴约战为特色。",
  },
  {
    slug: "ninja-gaiden",
    name: "忍者龙剑传",
    description:
      "以高速斩杀与高难度著称的动作系列，主角隼龙与龙剑是系列标志。",
  },
  {
    slug: "nfs",
    name: "极品飞车",
    description:
      "EA 的长寿竞速系列，覆盖街头改装、警匪追逐与赛道竞速等多种玩法。",
  },
  {
    slug: "simpsons",
    name: "辛普森一家",
    description:
      "改编自同名动画的喜剧冒险系列，以恶搞与家庭成员的超能力为看点。",
  },
  {
    slug: "call-of-duty",
    name: "使命召唤",
    description:
      "以电影化战役与多人对战为核心的第一人称射击系列，横跨二战到现代战争。",
  },
  {
    slug: "sonic",
    name: "索尼克",
    description:
      "世嘉的高速动作系列，以蓝色刺猬索尼克的速度感与环状关卡设计闻名。",
  },
  {
    slug: "silent-hill",
    name: "寂静岭",
    description:
      "心理恐怖系列，以迷雾小镇、象征性怪物与压抑叙事著称。",
  },
  {
    slug: "ridge-racer",
    name: "山脊赛车",
    description:
      "南梦宫的街机竞速系列，以漂移过弯与电子乐配乐为标志。",
  },
  {
    slug: "dragon-age",
    name: "龙腾世纪",
    description:
      "Bioware 的黑暗奇幻 RPG 系列，强调队友关系、抉择与战术战斗。",
  },
  {
    slug: "resident-evil",
    name: "生化危机",
    description:
      "卡普空的生存恐怖系列，从固定视角到越肩射击不断演变。",
  },
  {
    slug: "halo",
    name: "光环",
    description:
      "微软的科幻第一人称射击系列，围绕士官长、星盟与光环环带展开。",
  },
  {
    slug: "forza",
    name: "极限竞速",
    description:
      "微软的竞速系列，分为拟真赛道向的 Motorsport 与开放世界向的 Horizon。",
  },
  {
    slug: "killzone",
    name: "杀戮地带",
    description:
      "Guerrilla 的科幻射击系列，以赫尔加斯特与 ISA 的战争为主线，美术冷峻。",
  },
  {
    slug: "dragon-quest",
    name: "勇者斗恶龙",
    description:
      "日本的国民级 RPG 系列，以鸟山明人设、回合制战斗与王道冒险故事著称。",
  },
  {
    slug: "god-hand",
    name: "神之手",
    description:
      "PS2 时代的硬核动作邪典，以高难度连段与恶搞演出闻名。",
  },
  {
    slug: "tekken",
    name: "铁拳",
    description:
      "南梦宫的 3D 格斗系列，围绕三岛家族的血缘恩怨展开。",
  },
  {
    slug: "rayman",
    name: "雷曼",
    description:
      "育碧的无肢英雄平台动作系列，以拳击、直升机头发与奇幻美术为特色。",
  },
  {
    slug: "crackdown",
    name: "除暴战警",
    description:
      "Xbox 的开放世界动作系列，以超级警察与球体强化成长为核心。",
  },
  {
    slug: "dead-rising",
    name: "丧尸围城",
    description:
      "卡普空的丧尸生存动作系列，以合成武器、时间压力与荒诞演出著称。",
  },
  {
    slug: "battlefield",
    name: "战地",
    description:
      "EA 的大规模战场射击系列，以载具、可破坏场景与多人协同为特色。",
  },
  {
    slug: "wario",
    name: "瓦力欧",
    description:
      "任天堂的反英雄系列，以瓦力欧的贪财、蛮力与恶搞风格为标志。",
  },
  {
    slug: "army-of-two",
    name: "雇佣兵",
    description:
      "EA 的双人合作射击系列，以雇佣兵搭档与武器改装为特色。",
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
