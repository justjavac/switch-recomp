export type GameReview = {
  id: string;
  author: string;
  rating: number;
  tag: string;
  title: string;
  content: string;
  platform: string;
  playtime: string;
  date: string;
  likes: number;
};

type ReviewSeed = Omit<GameReview, "id">;

const reviewSeeds: Record<string, ReviewSeed[]> = {
  "links-awakening": [
    {
      author: "海拉鲁的风",
      rating: 5,
      tag: "系列老玩家",
      title: "把 Game Boy 的梦做成了玩具箱",
      content:
        "第一次看到织梦岛变成这种黏土玩具质感就笑出来了。走到哪都想戳一下草丛，风鱼的旋律一响还是会起鸡皮疙瘩。",
      platform: "Switch 掌机模式",
      playtime: "22 小时",
      date: "2026-10-18",
      likes: 128,
    },
    {
      author: "掌机阿哲",
      rating: 4,
      tag: "首次入坑",
      title: "短小但很完整",
      content:
        "地图不大，内容密度却很高，两天就通关了。后期沼泽掉帧有点明显，希望重编译版能稳住帧数。",
      platform: "Switch 底座模式",
      playtime: "14 小时",
      date: "2026-09-02",
      likes: 64,
    },
    {
      author: "像素猎人",
      rating: 4.5,
      tag: "收集党",
      title: "八件乐器，八段回忆",
      content:
        "地下城设计放在今天依然利落，嵌板与传送点也改得很现代。偷东西被抓的彩蛋还是那么好笑。",
      platform: "PC · Windows",
      playtime: "18 小时",
      date: "2026-08-21",
      likes: 41,
    },
    {
      author: "慢慢玩",
      rating: 4,
      tag: "休闲玩家",
      title: "适合睡前玩一小时的塞尔达",
      content:
        "没有复杂的数值焦虑，解谜难度刚好。唯一的问题是视角偶尔会挡住敌人，重编译项目要是能加宽屏就完美了。",
      platform: "Android",
      playtime: "9 小时",
      date: "2026-07-30",
      likes: 22,
    },
  ],
  "breath-of-the-wild": [
    {
      author: "旷野的风",
      rating: 5,
      tag: "通关党",
      title: "六年过去，还是想再爬一次双子山",
      content:
        "真正让我上瘾的是「看见那座山就想过去」的自由。天气、物理和滑翔伞把探索变成一种本能反应。",
      platform: "Switch 底座模式",
      playtime: "180 小时",
      date: "2026-10-26",
      likes: 236,
    },
    {
      author: "林克不救公主",
      rating: 4,
      tag: "性能党",
      title: "好游戏，但别再用掌机模式跑了",
      content:
        "掌机下动态分辨率糊得厉害，草地还会掉帧。重编译版本能原生跑 60 帧以后，整个海拉鲁都顺眼了。",
      platform: "PC · Windows",
      playtime: "96 小时",
      date: "2026-09-14",
      likes: 154,
    },
    {
      author: "塞尔达学者",
      rating: 4.5,
      tag: "剧情党",
      title: "沉默叙事的天花板",
      content:
        "没有几句台词，却把灾厄之后的荒凉感全塞进了废墟和回忆里。四位英杰的支线我到现在都记得。",
      platform: "Switch 掌机模式",
      playtime: "120 小时",
      date: "2026-08-08",
      likes: 88,
    },
    {
      author: "新手村村民",
      rating: 3.5,
      tag: "首次入坑",
      title: "自由得有点不知所措",
      content:
        "前五个小时完全不知道该干嘛，武器还动不动就碎。熬过适应期才体会到好，但确实挑人。",
      platform: "Steam Deck",
      playtime: "40 小时",
      date: "2026-06-19",
      likes: 67,
    },
  ],
  "tears-of-the-kingdom": [
    {
      author: "究极手大师",
      rating: 5,
      tag: "建造党",
      title: "究极手治好了我的创意焦虑",
      content:
        "从拼一辆三轮车到造出自动炮台，这个系统几乎能回应你所有的怪点子。地底和天空把地图又拉大了一倍。",
      platform: "Switch 2",
      playtime: "230 小时",
      date: "2026-10-11",
      likes: 310,
    },
    {
      author: "海拉鲁工程师",
      rating: 4.5,
      tag: "系列老玩家",
      title: "比旷野之息更疯了",
      content:
        "天空岛的演出很震撼，地底探索压抑得刚刚好。缺点是神庙解谜有时候太依赖余料建造，容易套路化。",
      platform: "Switch 底座模式",
      playtime: "140 小时",
      date: "2026-09-06",
      likes: 176,
    },
    {
      author: "摸鱼玩家K",
      rating: 3.5,
      tag: "性能党",
      title: "内容翻倍，帧数没翻倍",
      content:
        "玩法是真的多，但 Switch 2 掌机下某些场景依然会掉到 40 帧上下。期待重编译版把这些区域跑稳。",
      platform: "PC · Windows",
      playtime: "75 小时",
      date: "2026-08-17",
      likes: 92,
    },
    {
      author: "香蕉爱好者",
      rating: 4,
      tag: "休闲玩家",
      title: "想住进哈特诺村",
      content:
        "这次终于能把怪物素材做成武器，捡垃圾有了意义。支线依然温柔，做一晚上饭也不觉得浪费。",
      platform: "Switch 掌机模式",
      playtime: "60 小时",
      date: "2026-07-04",
      likes: 45,
    },
  ],
  "super-mario-odyssey": [
    {
      author: "帽子先生",
      rating: 5,
      tag: "通关党",
      title: "马力欧的手感就是标准答案",
      content:
        "附身系统让每个国度都有新玩具，都市国那场庆典到现在还是我心中的系列最佳演出。",
      platform: "Switch 底座模式",
      playtime: "70 小时",
      date: "2026-10-02",
      likes: 198,
    },
    {
      author: "月亮收集者",
      rating: 4.5,
      tag: "白金党",
      title: "月亮多到捡不完",
      content:
        "999 个月亮听着夸张，实际每个小关卡都有惊喜。跳绳和排球那种阴间月亮我就不奉陪了。",
      platform: "Switch 掌机模式",
      playtime: "85 小时",
      date: "2026-08-28",
      likes: 84,
    },
    {
      author: "3D 平台迷",
      rating: 4,
      tag: "首次入坑",
      title: "入门友好，上限很高",
      content:
        "一周目很轻松，二周目才发现移动技巧有多深。重编译版如果能稳定 60 帧，速通会很爽。",
      platform: "PC · Windows",
      playtime: "35 小时",
      date: "2026-07-16",
      likes: 51,
    },
    {
      author: "碧姬的粉丝",
      rating: 3.5,
      tag: "剧情党",
      title: "玩法满分，剧情像过场动画",
      content:
        "每个国度都很好玩，但故事几乎没有存在感。对我来说不算问题，和朋友一起玩反而更有意思。",
      platform: "Switch 掌机模式",
      playtime: "28 小时",
      date: "2026-05-29",
      likes: 19,
    },
  ],
  "super-mario-maker-2": [
    {
      author: "关卡设计师",
      rating: 5,
      tag: "联机玩家",
      title: "最接近「自己做游戏」的快乐",
      content:
        "从一堵墙开始拼出整条关卡，再上传看别人被坑，这是我买 Switch 最值的一笔钱。",
      platform: "Switch 掌机模式",
      playtime: "190 小时",
      date: "2026-09-21",
      likes: 143,
    },
    {
      author: "坑人专业户",
      rating: 4,
      tag: "系列老玩家",
      title: "3D 世界是最大惊喜",
      content:
        "猫服和滚轮让 3D 关卡有完全不同的思路，不过 UI 复杂得劝退了几个朋友。",
      platform: "Switch 底座模式",
      playtime: "80 小时",
      date: "2026-08-12",
      likes: 58,
    },
    {
      author: "手残也想玩",
      rating: 3.5,
      tag: "休闲玩家",
      title: "看别人玩比自己玩快乐",
      content:
        "故事模式的关卡很扎实，但要我造关卡实在太费脑。希望重编译版能支持本地分享关卡。",
      platform: "PC · Windows",
      playtime: "24 小时",
      date: "2026-06-30",
      likes: 27,
    },
    {
      author: "水管工老王",
      rating: 4.5,
      tag: "建造党",
      title: "上限取决于想象力",
      content:
        "多人模式乱成一锅粥但特别欢乐。唯一可惜的是线上服务一停，收藏的关卡就全没了。",
      platform: "Switch 掌机模式",
      playtime: "110 小时",
      date: "2026-05-11",
      likes: 73,
    },
  ],
  "pokemon-lets-go": [
    {
      author: "关都少年",
      rating: 5,
      tag: "怀旧党",
      title: "常磐市的风还是那个味",
      content:
        "跟着皮卡丘一路走到石英高原，图鉴和道馆都端上来了。双人抓宝可梦对带娃特别友好。",
      platform: "Switch 掌机模式",
      playtime: "45 小时",
      date: "2026-10-07",
      likes: 132,
    },
    {
      author: "球球训练家",
      rating: 3.5,
      tag: "首次入坑",
      title: "简化得有点过",
      content:
        "没有野外对战，抓宠靠体感挥手，玩久了手腕会酸。作为入门作不错，但老玩家可能不满足。",
      platform: "Switch 底座模式",
      playtime: "30 小时",
      date: "2026-08-25",
      likes: 76,
    },
    {
      author: "手机上抓宠",
      rating: 4,
      tag: "模拟器测试",
      title: "重编译版让通勤也能抓宠",
      content:
        "手机端触屏投球意外顺手，帧数也稳定。要是能把体感改成滑动就更好了。",
      platform: "Android",
      playtime: "18 小时",
      date: "2026-07-19",
      likes: 39,
    },
    {
      author: "皮卡丘本丘",
      rating: 4.5,
      tag: "收集党",
      title: "闪光狩猎的快乐",
      content:
        "搭档宝可梦会跟着走、会摆表情，细节比预期用心。刷闪光的概率也很友好。",
      platform: "Switch 掌机模式",
      playtime: "70 小时",
      date: "2026-06-08",
      likes: 64,
    },
  ],
  "pokemon-brilliant-diamond": [
    {
      author: "神奥旅行者",
      rating: 4,
      tag: "怀旧党",
      title: "原汁原味，几乎没加料",
      content:
        "地下大洞窟和跟随系统是仅有的升级，其余基本都是 1:1。想重温第四世代的话够用了。",
      platform: "Switch 掌机模式",
      playtime: "55 小时",
      date: "2026-09-18",
      likes: 95,
    },
    {
      author: "晶灿钻石工",
      rating: 3.5,
      tag: "系列老玩家",
      title: "二头身建模见仁见智",
      content:
        "战斗和地下挖掘还是一样的味道，但道馆战难度被削平了，精英四也没以前有压迫感。",
      platform: "Switch 底座模式",
      playtime: "42 小时",
      date: "2026-08-03",
      likes: 61,
    },
    {
      author: "挖矿狂人",
      rating: 4.5,
      tag: "收集党",
      title: "地下洞窟能待一整天",
      content:
        "挖石头、摆秘密基地、和朋友联机，这部分比主线还好玩。重编译版加载快得感人。",
      platform: "PC · Windows",
      playtime: "78 小时",
      date: "2026-06-26",
      likes: 44,
    },
    {
      author: "图鉴补完计划",
      rating: 4,
      tag: "通关党",
      title: "适合补票的稳定选择",
      content:
        "没有大改动也没有大翻车，一周目体验顺畅。想要现代感的话可能得等下一作。",
      platform: "Switch 掌机模式",
      playtime: "26 小时",
      date: "2026-05-15",
      likes: 17,
    },
  ],
  "pokemon-sword-shield": [
    {
      author: "伽勒尔冠军",
      rating: 4.5,
      tag: "通关党",
      title: "极巨化是这代最爽的演出",
      content:
        "道馆战变成体育场演唱会，音乐一响起就起鸡皮疙瘩。旷野地带的宝可梦追人也很有新鲜感。",
      platform: "Switch 底座模式",
      playtime: "90 小时",
      date: "2026-10-14",
      likes: 187,
    },
    {
      author: "旷野上班族",
      rating: 3.5,
      tag: "系列老玩家",
      title: "流程短，DLC 补回来一半",
      content:
        "本体剧情像没写完，劲敌和反派都差点意思。铠之孤岛和冠之雪原才算把内容补完整。",
      platform: "Switch 掌机模式",
      playtime: "65 小时",
      date: "2026-08-30",
      likes: 104,
    },
    {
      author: "极巨化炮台",
      rating: 4,
      tag: "联机玩家",
      title: "和朋友打团战最开心",
      content:
        "极巨团体战把社交做起来了，刷超极巨的过程很有成就感。断线问题有点烦。",
      platform: "PC · Windows",
      playtime: "120 小时",
      date: "2026-07-12",
      likes: 52,
    },
    {
      author: "毛辫羊饲养员",
      rating: 4.5,
      tag: "休闲玩家",
      title: "伽勒尔的美术太讨喜",
      content:
        "城镇和服装都比前作精致，骑着自行车在旷野溜达就很治愈。难度偏低，适合放松。",
      platform: "Switch 掌机模式",
      playtime: "38 小时",
      date: "2026-06-02",
      likes: 33,
    },
  ],
  "smash-ultimate": [
    {
      author: "全员参战",
      rating: 5,
      tag: "联机玩家",
      title: "一份能玩整个世代的游戏",
      content:
        "灯火之星够我打一整个月，和朋友同屏更是永远不会腻。全员回归这件事本身就是奇迹。",
      platform: "Switch 底座模式",
      playtime: "420 小时",
      date: "2026-10-20",
      likes: 356,
    },
    {
      author: "手柄杀手",
      rating: 4.5,
      tag: "竞技玩家",
      title: "竞技和派对都照顾到了",
      content:
        "去掉 For Glory 有点遗憾，但自定义规则足够灵活。线上延迟依然是老问题。",
      platform: "Switch 掌机模式",
      playtime: "260 小时",
      date: "2026-09-11",
      likes: 143,
    },
    {
      author: "大乱斗咸鱼",
      rating: 4,
      tag: "休闲玩家",
      title: "手残也能玩得很开心",
      content:
        "开道具、开舞台，乱按也能笑出声。想认真练的话，入门门槛确实高。",
      platform: "Switch 掌机模式",
      playtime: "55 小时",
      date: "2026-07-23",
      likes: 48,
    },
    {
      author: "命魂收藏家",
      rating: 4.5,
      tag: "收集党",
      title: "命魂系统被低估了",
      content:
        "把不同系列的角色做成命魂关卡，彩蛋密度惊人。重编译版如果能稳定本地联机就完美了。",
      platform: "PC · Windows",
      playtime: "95 小时",
      date: "2026-05-27",
      likes: 36,
    },
  ],
  "bayonetta-2": [
    {
      author: "魔女时间",
      rating: 5,
      tag: "动作玩家",
      title: "白金最均衡的一部",
      content:
        "战斗节奏比初代更顺，魔女时间和恶魔召唤衔接得像跳舞。全程 60 帧的体验太重要了。",
      platform: "Switch 底座模式",
      playtime: "60 小时",
      date: "2026-09-29",
      likes: 121,
    },
    {
      author: "贝姐的鞋",
      rating: 4.5,
      tag: "系列老玩家",
      title: "演出疯得刚刚好",
      content:
        "从飞机打到地狱，场面一路升级。剧情不复杂，但角色魅力撑住了整部游戏。",
      platform: "Switch 掌机模式",
      playtime: "35 小时",
      date: "2026-08-16",
      likes: 67,
    },
    {
      author: "手残猎天使",
      rating: 4,
      tag: "首次入坑",
      title: "看着难，其实有轮椅",
      content:
        "难度下限比想象中友好，自动连招能让新手也打出华丽效果。掌机下小字体有点费眼。",
      platform: "Switch 掌机模式",
      playtime: "22 小时",
      date: "2026-06-23",
      likes: 29,
    },
    {
      author: "白金信徒",
      rating: 4.5,
      tag: "白金党",
      title: "重编译版值得再通一遍",
      content:
        "PC 上高帧率之后，闪避判定和连段都更清晰了。希望后续能加入更高难度挑战。",
      platform: "PC · Windows",
      playtime: "48 小时",
      date: "2026-05-08",
      likes: 40,
    },
  ],
  "bayonetta-3": [
    {
      author: "多元宇宙魔女",
      rating: 4.5,
      tag: "系列老玩家",
      title: "恶魔奴隶把战斗打开了",
      content:
        "同时操控魔兽和贝姐，操作量爆炸但爽感也翻倍。就是镜头偶尔忙不过来。",
      platform: "Switch 掌机模式",
      playtime: "55 小时",
      date: "2026-10-05",
      likes: 146,
    },
    {
      author: "薇欧拉问题儿童",
      rating: 3.5,
      tag: "动作玩家",
      title: "贝姐很强，薇欧拉很折磨",
      content:
        "主线战斗依旧华丽，偏偏要塞几段薇欧拉关卡，格挡手感完全另一套。剧情收尾也有点仓促。",
      platform: "Switch 底座模式",
      playtime: "32 小时",
      date: "2026-08-27",
      likes: 103,
    },
    {
      author: "召唤兽饲养员",
      rating: 4,
      tag: "收集党",
      title: "恶魔图鉴比剧情好看",
      content:
        "每只魔兽的招式都不同，收集和养成很有动力。Switch 后期场景掉帧比较明显。",
      platform: "PC · Windows",
      playtime: "46 小时",
      date: "2026-07-09",
      likes: 57,
    },
    {
      author: "舞台监督",
      rating: 4.5,
      tag: "剧情党",
      title: "乱七八糟但很好看",
      content:
        "多重宇宙的设定让每章都能换风格，最后的大乱斗很过瘾。别带脑子，带眼睛就行。",
      platform: "Switch 掌机模式",
      playtime: "28 小时",
      date: "2026-06-14",
      likes: 34,
    },
  ],
  "metroid-dread": [
    {
      author: "E.M.M.I. 阴影",
      rating: 5,
      tag: "动作玩家",
      title: "又一次被追到心跳加速",
      content:
        "E.M.M.I. 区域每次进入都要屏住呼吸，逃出生天的瞬间太爽了。60 帧让手感无可挑剔。",
      platform: "Switch 掌机模式",
      playtime: "28 小时",
      date: "2026-10-17",
      likes: 214,
    },
    {
      author: "银河城老饕",
      rating: 4.5,
      tag: "系列老玩家",
      title: "2D 密特罗德的漂亮回归",
      content:
        "地图设计紧凑，能力解锁顺序很讲究。Boss 战难度不低，但学会套路后非常爽。",
      platform: "Switch 底座模式",
      playtime: "24 小时",
      date: "2026-09-03",
      likes: 97,
    },
    {
      author: "手残猎人",
      rating: 3.5,
      tag: "首次入坑",
      title: "被机器人劝退三次",
      content:
        "普通难度已经很不友好，E.M.M.I. 的即死判定压力太大。好在检查点很近，愿意练就能过。",
      platform: "Switch 掌机模式",
      playtime: "16 小时",
      date: "2026-07-28",
      likes: 71,
    },
    {
      author: "速通练习生",
      rating: 4.5,
      tag: "速通玩家",
      title: "重编译版是练习利器",
      content:
        "高帧率和快速读盘让反复试路线变得很舒服。希望哪天能看到 120 帧支持。",
      platform: "PC · Windows",
      playtime: "52 小时",
      date: "2026-05-21",
      likes: 45,
    },
  ],
  "metroid-prime-4": [
    {
      author: "维尤罗斯调查员",
      rating: 4.5,
      tag: "系列老玩家",
      title: "第一人称密特罗德终于回来了",
      content:
        "扫描、变形球、导弹一样不少，新加入的超能力让探索多了层解法。Switch 2 的画面很干净。",
      platform: "Switch 2",
      playtime: "32 小时",
      date: "2026-10-24",
      likes: 173,
    },
    {
      author: "银河战士新粉",
      rating: 4,
      tag: "首次入坑",
      title: "老派但不过时",
      content:
        "没有手把手导航，靠自己记地图，久违的探索感。前期节奏偏慢，坚持到第二个区域就上头了。",
      platform: "Switch 2",
      playtime: "21 小时",
      date: "2026-09-08",
      likes: 88,
    },
    {
      author: "性能观测站",
      rating: 3.5,
      tag: "性能党",
      title: "整体稳，但别吹过头",
      content:
        "大部分场景 60 帧，开阔区域还是会有波动。重编译项目如果能解锁帧率，值得再通一遍。",
      platform: "PC · Windows",
      playtime: "18 小时",
      date: "2026-08-01",
      likes: 63,
    },
    {
      author: "萨姆斯头盔",
      rating: 4.5,
      tag: "剧情党",
      title: "孤独感还是那个味",
      content:
        "一个人降落在陌生星球，只有扫描日志陪你说话。结尾的伏笔让我开始期待续作。",
      platform: "Switch 掌机模式",
      playtime: "26 小时",
      date: "2026-06-11",
      likes: 39,
    },
  ],
  "astral-chain": [
    {
      author: "雷基恩指挥官",
      rating: 5,
      tag: "动作玩家",
      title: "双操系统越练越上瘾",
      content:
        "一边打一边指挥雷基恩，熟练后像在跳双人舞。锁链束缚敌人的手感特别独特。",
      platform: "Switch 底座模式",
      playtime: "40 小时",
      date: "2026-09-25",
      likes: 112,
    },
    {
      author: "方舟巡警",
      rating: 4,
      tag: "首次入坑",
      title: "美术和音乐值回票价",
      content:
        "赛博都市的霓虹配色太抓眼了，战斗也很白金。调查和潜行段落稍显拖沓。",
      platform: "Switch 掌机模式",
      playtime: "25 小时",
      date: "2026-08-06",
      likes: 58,
    },
    {
      author: "双胞胎的另一半",
      rating: 3.5,
      tag: "剧情党",
      title: "剧情像赶着下班",
      content:
        "设定很酷，收尾却有点仓促，反派动机也没讲透。好在动作部分足够撑住。",
      platform: "PC · Windows",
      playtime: "19 小时",
      date: "2026-06-27",
      likes: 47,
    },
    {
      author: "魔兽训练师",
      rating: 4.5,
      tag: "收集党",
      title: "养雷基恩比养宝可梦认真",
      content:
        "不同雷基恩的定位差异明显，换着打法通关很有乐趣。希望重编译版能支持高刷。",
      platform: "PC · Windows",
      playtime: "33 小时",
      date: "2026-05-04",
      likes: 31,
    },
  ],
  "xenoblade-chronicles-x": [
    {
      author: "米拉驾驶员",
      rating: 5,
      tag: "系列老玩家",
      title: "终于能开着重型机兵乱飞",
      content:
        "机甲变形飞行的瞬间，所有等待都值了。地图大得离谱，但每个角落都有理由让你走过去。",
      platform: "Switch 2",
      playtime: "160 小时",
      date: "2026-10-13",
      likes: 201,
    },
    {
      author: "开放世界考古",
      rating: 4,
      tag: "首次入坑",
      title: "系统复杂，教程稀薄",
      content:
        "前十个小时一直在查攻略，堆叠系统和职业转换太绕。熬过去之后是真的很自由。",
      platform: "Switch 掌机模式",
      playtime: "68 小时",
      date: "2026-08-22",
      likes: 119,
    },
    {
      author: "决定版回归",
      rating: 4.5,
      tag: "怀旧党",
      title: "新增剧情把坑填了一半",
      content:
        "画面和 UI 都现代化了，跑图体验提升明显。新章节的演出不错，但结尾依然留了一堆谜。",
      platform: "Switch 底座模式",
      playtime: "105 小时",
      date: "2026-07-07",
      likes: 76,
    },
    {
      author: "机甲收藏家",
      rating: 4.5,
      tag: "收集党",
      title: "刷素材也能刷上瘾",
      content:
        "每台机兵的外形和武装都能定制，为了凑一套涂装能刷一晚上。掌机模式字体偏小。",
      platform: "Switch 掌机模式",
      playtime: "88 小时",
      date: "2026-05-19",
      likes: 42,
    },
  ],
  "monster-hunter-gu": [
    {
      author: "老猎人",
      rating: 5,
      tag: "系列老玩家",
      title: "旧世代怪猎的百科全书",
      content:
        "怪物数量多到夸张，狩猎风格和猎喵让每把武器都有新玩法。没有翔虫，但依然很好玩。",
      platform: "Switch 掌机模式",
      playtime: "520 小时",
      date: "2026-10-09",
      likes: 267,
    },
    {
      author: "太刀侠",
      rating: 4.5,
      tag: "动作玩家",
      title: "勇气太刀天下第一",
      content:
        "GP 成功那一下的反馈，新世代都做不出来。画面是老了一点，但狩猎节奏无可替代。",
      platform: "Switch 底座模式",
      playtime: "310 小时",
      date: "2026-09-01",
      likes: 158,
    },
    {
      author: "新手猎人",
      rating: 3.5,
      tag: "首次入坑",
      title: "劝退点太多了",
      content:
        "没有导虫、没有自动追踪，采集和导航全靠记。撑过新手期之后才明白为什么大家这么上头。",
      platform: "Switch 掌机模式",
      playtime: "45 小时",
      date: "2026-07-15",
      likes: 92,
    },
    {
      author: "猎喵本喵",
      rating: 4.5,
      tag: "休闲玩家",
      title: "当猫比当猎人快乐",
      content:
        "猎喵模式让手残也能参与，采集和辅助很有意思。重编译版联机稳定性比预期好。",
      platform: "PC · Windows",
      playtime: "60 小时",
      date: "2026-05-31",
      likes: 37,
    },
  ],
  "fire-emblem-three-houses": [
    {
      author: "青狮子学级",
      rating: 5,
      tag: "剧情党",
      title: "学院养成和战棋的结合太妙",
      content:
        "白天上课、晚上带学生上战场，角色一个个立体起来。五年后的重逢每次都能把人看哭。",
      platform: "Switch 掌机模式",
      playtime: "140 小时",
      date: "2026-10-16",
      likes: 289,
    },
    {
      author: "金鹿毕业生",
      rating: 4.5,
      tag: "系列老玩家",
      title: "路线差异撑起四周目",
      content:
        "四条线各有立场，没有绝对的对错。只是重复的学院流程走到第四周目确实有点累。",
      platform: "Switch 底座模式",
      playtime: "220 小时",
      date: "2026-09-09",
      likes: 163,
    },
    {
      author: "帝国皇女派",
      rating: 3.5,
      tag: "战棋玩家",
      title: "养成占比有点过高",
      content:
        "我喜欢战棋，但这作一半时间在吃饭喝茶。难度也偏低，超难模式才有点压力。",
      platform: "Switch 掌机模式",
      playtime: "95 小时",
      date: "2026-07-21",
      likes: 118,
    },
    {
      author: "修道院厨师",
      rating: 4.5,
      tag: "休闲玩家",
      title: "挖角才是主线",
      content:
        "为了把学生全招过来，我研究每个角色的喜好研究了半天。重编译版读盘快，刷支援很舒服。",
      platform: "PC · Windows",
      playtime: "130 小时",
      date: "2026-06-05",
      likes: 54,
    },
  ],
  "fire-emblem-engage": [
    {
      author: "纹章士召唤师",
      rating: 4.5,
      tag: "战棋玩家",
      title: "战斗是系列近几年最好玩的",
      content:
        "纹章士合体让每场战斗都有新组合，兵种相克也回来了。剧情就……跳过吧。",
      platform: "Switch 掌机模式",
      playtime: "70 小时",
      date: "2026-10-01",
      likes: 176,
    },
    {
      author: "龙妈粉",
      rating: 3.5,
      tag: "剧情党",
      title: "玩法在线，剧本掉线",
      content:
        "角色设计很亮眼，但对话像儿童向动画，反派也没什么记忆点。战棋部分值得夸。",
      platform: "Switch 底座模式",
      playtime: "55 小时",
      date: "2026-08-19",
      likes: 132,
    },
    {
      author: "戒指收藏家",
      rating: 4,
      tag: "收集党",
      title: "配装能玩出花",
      content:
        "十二枚戒指的不同结合效果，让重复关卡也有新鲜感。后期难度曲线有点陡。",
      platform: "Switch 掌机模式",
      playtime: "88 小时",
      date: "2026-07-02",
      likes: 61,
    },
    {
      author: "重编译测试员",
      rating: 4,
      tag: "模拟器测试",
      title: "模拟器跑起来比原机稳",
      content:
        "高分辨率下模型和特效舒服很多，过场动画也清晰了。希望后续能解锁 60 帧。",
      platform: "PC · Windows",
      playtime: "36 小时",
      date: "2026-05-13",
      likes: 44,
    },
  ],
  "super-mario-bros-wonder": [
    {
      author: "惊奇花受害者",
      rating: 5,
      tag: "系列老玩家",
      title: "每一关都在等你踩惊喜",
      content:
        "从水管变形到角色变象，完全猜不到下一秒会发生什么。多人模式的笑点密度也很高。",
      platform: "Switch 掌机模式",
      playtime: "35 小时",
      date: "2026-10-22",
      likes: 245,
    },
    {
      author: "徽章收集党",
      rating: 4.5,
      tag: "收集党",
      title: "2D 马力欧的又一次进化",
      content:
        "徽章系统让不同水平的人都能找到舒适区，隐藏关卡也有挑战。画面像绘本一样好看。",
      platform: "Switch 底座模式",
      playtime: "48 小时",
      date: "2026-09-12",
      likes: 107,
    },
    {
      author: "四人同乐",
      rating: 4,
      tag: "联机玩家",
      title: "人越多越混乱",
      content:
        "四人同屏时角色会互相挡住，但那种混乱本身就是乐趣。线上匹配偶尔掉线。",
      platform: "Switch 掌机模式",
      playtime: "22 小时",
      date: "2026-07-25",
      likes: 63,
    },
    {
      author: "平台跳跃新手",
      rating: 4.5,
      tag: "首次入坑",
      title: "对新手非常友好",
      content:
        "耀西和偷天兔让手残也能通关，还可以借给别人玩。重编译版如果能稳定 60 帧就更好了。",
      platform: "PC · Windows",
      playtime: "16 小时",
      date: "2026-06-16",
      likes: 28,
    },
  ],
  "mario-kart-8-deluxe": [
    {
      author: "蓝龟壳受害者",
      rating: 5,
      tag: "联机玩家",
      title: "一个能玩十年的赛车游戏",
      content:
        "48 条追加赛道补齐了最后一块拼图，和朋友同屏永远不腻。被蓝龟壳抢第一也是乐趣。",
      platform: "Switch 底座模式",
      playtime: "380 小时",
      date: "2026-10-19",
      likes: 312,
    },
    {
      author: "200cc 车神",
      rating: 4.5,
      tag: "竞技玩家",
      title: "手感天花板",
      content:
        "漂移和加速的节奏太成熟了，200cc 才是完全体。线上掉线还是偶尔会毁心情。",
      platform: "Switch 掌机模式",
      playtime: "240 小时",
      date: "2026-09-05",
      likes: 154,
    },
    {
      author: "单人玩家",
      rating: 4,
      tag: "休闲玩家",
      title: "一个人玩也很充实",
      content:
        "计时赛和幽灵车足够消磨时间，但真正的乐趣还是和朋友一起。",
      platform: "Switch 掌机模式",
      playtime: "65 小时",
      date: "2026-07-18",
      likes: 49,
    },
    {
      author: "重编译试车员",
      rating: 4.5,
      tag: "模拟器测试",
      title: "高帧率下的彩虹之路",
      content:
        "PC 上跑 4K 后赛道细节全部浮现出来。要是能支持自定义赛道就无敌了。",
      platform: "PC · Windows",
      playtime: "90 小时",
      date: "2026-05-24",
      likes: 72,
    },
  ],
  "luigis-mansion-3": [
    {
      author: "吸尘器大师",
      rating: 5,
      tag: "休闲玩家",
      title: "路易吉的胆小鬼演技值满分",
      content:
        "每个楼层都有不同主题，吸鬼和砸家具的手感解压。双人模式带孩子玩特别合适。",
      platform: "Switch 底座模式",
      playtime: "28 小时",
      date: "2026-09-30",
      likes: 138,
    },
    {
      author: "酒店住客",
      rating: 4,
      tag: "首次入坑",
      title: "流程不长，但几乎没有冷场",
      content:
        "解谜和战斗比例刚刚好，Boss 战设计很有创意。后期几层略显重复。",
      platform: "Switch 掌机模式",
      playtime: "18 小时",
      date: "2026-08-11",
      likes: 72,
    },
    {
      author: "宝石猎人",
      rating: 4.5,
      tag: "收集党",
      title: "每个角落都想吸一遍",
      content:
        "为了找齐宝石和害羞幽灵，把酒店翻了底朝天。重编译版加载快，反复探索很舒服。",
      platform: "PC · Windows",
      playtime: "24 小时",
      date: "2026-06-22",
      likes: 43,
    },
    {
      author: "波基的粉丝",
      rating: 4,
      tag: "剧情党",
      title: "可爱又有点诡异",
      content:
        "美术和配乐都很皮克斯，剧情简单但演出认真。希望续作能再长一点。",
      platform: "Switch 掌机模式",
      playtime: "14 小时",
      date: "2026-05-06",
      likes: 26,
    },
  ],
  "metroid-prime-remastered": [
    {
      author: "扫描仪",
      rating: 5,
      tag: "系列老玩家",
      title: "教科书级的重制",
      content:
        "阴影、材质、光影全部重做，扫描日志的配音也重录了。双摇杆操作上手就回不去。",
      platform: "Switch 底座模式",
      playtime: "36 小时",
      date: "2026-10-10",
      likes: 198,
    },
    {
      author: "新晋猎人",
      rating: 4.5,
      tag: "首次入坑",
      title: "老游戏，新体验",
      content:
        "没有现代 FPS 的自动回血和指引，但探索的密度让人停不下来。掌机模式也很清晰。",
      platform: "Switch 掌机模式",
      playtime: "22 小时",
      date: "2026-08-24",
      likes: 86,
    },
    {
      author: "速通玩家",
      rating: 4.5,
      tag: "速通玩家",
      title: "60 帧让路线练习更精准",
      content:
        "重编译版读盘快、帧数稳，练速通很舒服。希望后续能加入随机模式。",
      platform: "PC · Windows",
      playtime: "40 小时",
      date: "2026-07-10",
      likes: 51,
    },
    {
      author: "太空海盗",
      rating: 4,
      tag: "休闲玩家",
      title: "孤独又迷人的星球",
      content:
        "一个人探索的孤独感保留得很好，音乐一响就回到当年。就是有些回头路太远。",
      platform: "Switch 掌机模式",
      playtime: "19 小时",
      date: "2026-05-26",
      likes: 33,
    },
  ],
  "donkey-kong-bananza": [
    {
      author: "蕉力全开",
      rating: 5,
      tag: "动作玩家",
      title: "砸穿地心就是最大的快乐",
      content:
        "整个地图几乎都能破坏，越挖越上瘾，咚奇刚的动画也夸张得好笑。Switch 2 的物理表现很惊艳。",
      platform: "Switch 2",
      playtime: "45 小时",
      date: "2026-10-23",
      likes: 287,
    },
    {
      author: "宝琳的歌迷",
      rating: 4.5,
      tag: "剧情党",
      title: "没想到咚奇刚也有温情时刻",
      content:
        "宝琳和咚奇刚的互动很可爱，结尾的演出有点意外。收集要素多，但不算折磨。",
      platform: "Switch 2",
      playtime: "30 小时",
      date: "2026-09-13",
      likes: 142,
    },
    {
      author: "平台跳跃老手",
      rating: 4,
      tag: "系列老玩家",
      title: "破坏很爽，视角有点飘",
      content:
        "镜头在狭窄洞穴里偶尔会卡住，跳跃精度不如马力欧。整体还是很新鲜的体验。",
      platform: "Switch 2",
      playtime: "26 小时",
      date: "2026-08-04",
      likes: 97,
    },
    {
      author: "挖矿工人",
      rating: 4.5,
      tag: "收集党",
      title: "地下全是惊喜",
      content:
        "每层都有隐藏区域和香蕉，奖励密度很高。重编译版如果能稳住 60 帧，值得二刷。",
      platform: "PC · Windows",
      playtime: "38 小时",
      date: "2026-06-18",
      likes: 55,
    },
  ],
  "pokemon-scarlet": [
    {
      author: "帕底亚训练家",
      rating: 4.5,
      tag: "通关党",
      title: "故事是近几年最好的宝可梦",
      content:
        "三条主线最后汇合的那段剧情真的打动我了，角色也终于有了人味。",
      platform: "Switch 掌机模式",
      playtime: "95 小时",
      date: "2026-10-12",
      likes: 241,
    },
    {
      author: "帧数观察员",
      rating: 3,
      tag: "性能党",
      title: "好玩和难受同时存在",
      content:
        "开放世界想法很好，但掉帧、贴图加载和卡顿一路伴随。重编译版至少把这些救回来了。",
      platform: "PC · Windows",
      playtime: "60 小时",
      date: "2026-09-04",
      likes: 187,
    },
    {
      author: "太晶团战",
      rating: 4,
      tag: "联机玩家",
      title: "和朋友一起刷太晶很上头",
      content:
        "团战和太晶化让联机有了长期目标，就是 UI 和连接体验拖后腿。",
      platform: "Switch 底座模式",
      playtime: "130 小时",
      date: "2026-07-20",
      likes: 74,
    },
    {
      author: "摩托神兽",
      rating: 4.5,
      tag: "休闲玩家",
      title: "骑着神兽到处跑就很爽",
      content:
        "地图上宝可梦的分布很自然，随便走走都有收获。DLC 的蓝之圆盘也很耐玩。",
      platform: "Switch 掌机模式",
      playtime: "110 小时",
      date: "2026-06-01",
      likes: 62,
    },
  ],
  "xenoblade-chronicles-2": [
    {
      author: "乐园追寻者",
      rating: 5,
      tag: "剧情党",
      title: "云海之上的浪漫",
      content:
        "莱克斯和焰的故事又中二又真诚，配上一路升级的世界观，整个假期都沉浸在里面。",
      platform: "Switch 掌机模式",
      playtime: "210 小时",
      date: "2026-10-08",
      likes: 263,
    },
    {
      author: "抽卡受害者",
      rating: 3.5,
      tag: "系列老玩家",
      title: "核心掉率劝退",
      content:
        "异刃绑定抽卡，想要的角色可能刷几十小时。战斗系统其实很深，但前期教学太糟。",
      platform: "Switch 掌机模式",
      playtime: "140 小时",
      date: "2026-08-29",
      likes: 179,
    },
    {
      author: "焰的厨子",
      rating: 4.5,
      tag: "休闲玩家",
      title: "演出是系列天花板",
      content:
        "过场动画的镜头和配乐太强了，打斗场面比很多动画还燃。掌机分辨率糊是唯一遗憾。",
      platform: "Switch 底座模式",
      playtime: "175 小时",
      date: "2026-07-06",
      likes: 121,
    },
    {
      author: "重编译观光团",
      rating: 4.5,
      tag: "模拟器测试",
      title: "高分辨率下终于看清了",
      content:
        "模拟器把动态分辨率拉满之后，巨神兽的细节才真正展露出来。希望重编译版能稳定 60 帧。",
      platform: "PC · Windows",
      playtime: "160 小时",
      date: "2026-05-18",
      likes: 88,
    },
  ],
  "pokemon-pokopia": [
    {
      author: "慢生活观察员",
      rating: 4.5,
      tag: "休闲玩家",
      title: "百变怪社畜的治愈日常",
      content:
        "变成百变怪和宝可梦一起盖房子，节奏慢得很安心。Switch 2 的画面也很舒服。",
      platform: "Switch 2",
      playtime: "50 小时",
      date: "2026-10-27",
      likes: 108,
    },
    {
      author: "岛屿规划师",
      rating: 4,
      tag: "建造党",
      title: "建造自由度比想象中高",
      content:
        "地面、家具和地形都能改，后期能把岛改成小镇。素材采集略显重复。",
      platform: "Switch 2",
      playtime: "35 小时",
      date: "2026-09-16",
      likes: 57,
    },
    {
      author: "宝可梦收集党",
      rating: 4.5,
      tag: "收集党",
      title: "宝可梦生态做得更细了",
      content:
        "不同宝可梦有自己的作息和喜好，观察它们比完成任务还有意思。",
      platform: "Switch 2",
      playtime: "42 小时",
      date: "2026-08-10",
      likes: 46,
    },
    {
      author: "提前试玩",
      rating: 4,
      tag: "首次入坑",
      title: "适合每天玩一小会",
      content:
        "没有战斗和数值压力，就是慢慢把荒岛变热闹。想要刺激的话可能不适合。",
      platform: "Switch 2",
      playtime: "20 小时",
      date: "2026-07-01",
      likes: 24,
    },
  ],
  "ocarina-of-time": [
    {
      author: "时之勇者",
      rating: 5,
      tag: "系列老玩家",
      title: "在 Switch 2 上重回海拉鲁",
      content:
        "画面重做后依然保留了原版的分寸感，时之笛的旋律一响直接破防。水下神殿也没那么折磨了。",
      platform: "Switch 2",
      playtime: "40 小时",
      date: "2026-11-02",
      likes: 312,
    },
    {
      author: "新玩家入坑",
      rating: 4.5,
      tag: "首次入坑",
      title: "三十年后依然好玩",
      content:
        "没有自动存档和任务箭头，需要自己记路，但每个谜题的解法都很有成就感。",
      platform: "Switch 2",
      playtime: "26 小时",
      date: "2026-10-06",
      likes: 149,
    },
    {
      author: "时间旅行者",
      rating: 4.5,
      tag: "剧情党",
      title: "七个年头的孤独",
      content:
        "从少年到成人再回到过去，时间线的设计现在看依然巧妙。重制版的镜头有电影感。",
      platform: "Switch 2",
      playtime: "32 小时",
      date: "2026-09-20",
      likes: 93,
    },
    {
      author: "重编译测试员",
      rating: 4,
      tag: "性能党",
      title: "原生版还有提升空间",
      content:
        "整体 60 帧很稳，个别过渡场景会掉帧。重编译项目如果能解锁高刷，老玩家还会再买一次单。",
      platform: "PC · Windows",
      playtime: "28 小时",
      date: "2026-08-13",
      likes: 61,
    },
  ],
  "echoes-of-wisdom": [
    {
      author: "公主殿下",
      rating: 5,
      tag: "剧情党",
      title: "塞尔达终于当主角了",
      content:
        "复制物品和怪物的系统比想象中有深度，解谜方式很自由。托力也很可爱。",
      platform: "Switch 掌机模式",
      playtime: "28 小时",
      date: "2026-10-04",
      likes: 221,
    },
    {
      author: "复制粘贴大师",
      rating: 4.5,
      tag: "系列老玩家",
      title: "织梦岛之后最好的 2D 塞尔达",
      content:
        "美术风格延续了织梦岛的玩具感，召唤物战斗有点乱但很有趣。后期掉帧影响体验。",
      platform: "Switch 底座模式",
      playtime: "24 小时",
      date: "2026-08-31",
      likes: 118,
    },
    {
      author: "潜行苦手",
      rating: 3.5,
      tag: "首次入坑",
      title: "没有剑的塞尔达需要适应",
      content:
        "前期只能逃跑和召唤，节奏比传统塞尔达慢。习惯之后才觉得这个设计很聪明。",
      platform: "Switch 掌机模式",
      playtime: "18 小时",
      date: "2026-07-13",
      likes: 84,
    },
    {
      author: "召唤流玩家",
      rating: 4.5,
      tag: "动作玩家",
      title: "用怪物打败怪物",
      content:
        "召唤物的组合空间很大，能玩出很多邪道解法。重编译版帧数稳定后体验更好。",
      platform: "PC · Windows",
      playtime: "20 小时",
      date: "2026-05-30",
      likes: 39,
    },
  ],
  "mario-kart-world": [
    {
      author: "开放世界车手",
      rating: 4.5,
      tag: "联机玩家",
      title: "卡丁车变成了公路旅行",
      content:
        "24 人同场真的很热闹，赛道之间可以自由开过去这一点很惊喜。画面比想象中好。",
      platform: "Switch 2",
      playtime: "75 小时",
      date: "2026-10-15",
      likes: 264,
    },
    {
      author: "蓝龟壳幸存者",
      rating: 4,
      tag: "系列老玩家",
      title: "玩法新鲜，赛道偏少",
      content:
        "大奖赛模式很好玩，但赛道数量比 8 豪华版少，刷久了会重复。",
      platform: "Switch 2",
      playtime: "60 小时",
      date: "2026-09-07",
      likes: 137,
    },
    {
      author: "价格敏感型玩家",
      rating: 3.5,
      tag: "休闲玩家",
      title: "内容有趣，定价劝退",
      content:
        "首发价格偏高，单人内容也没有想象中多。等更新和折扣会更合适。",
      platform: "Switch 2",
      playtime: "30 小时",
      date: "2026-07-26",
      likes: 96,
    },
    {
      author: "重编译试车员",
      rating: 4.5,
      tag: "模拟器测试",
      title: "高帧率下的开放世界赛道",
      content:
        "PC 端跑起来之后远景和车流都清晰了，24 人乱斗的场面很壮观。",
      platform: "PC · Windows",
      playtime: "48 小时",
      date: "2026-06-09",
      likes: 58,
    },
  ],
  "xenoblade-chronicles-3": [
    {
      author: "送行者",
      rating: 5,
      tag: "剧情党",
      title: "关于生命与告别的长诗",
      content:
        "六人小队的关系发展很自然，送行的笛声每次响起都让人安静下来。结局后劲太大。",
      platform: "Switch 掌机模式",
      playtime: "170 小时",
      date: "2026-10-21",
      likes: 298,
    },
    {
      author: "职业收集家",
      rating: 4.5,
      tag: "系列老玩家",
      title: "系统最友好的一代",
      content:
        "自动战斗和导航把门槛降下来了，职业组合依然很深。支线多到做不完。",
      platform: "Switch 底座模式",
      playtime: "230 小时",
      date: "2026-09-15",
      likes: 142,
    },
    {
      author: "剧情节奏批评家",
      rating: 3.5,
      tag: "剧情党",
      title: "第五章之后才真正开始",
      content:
        "前四章铺垫太长，反派塑造也有点单薄。坚持到中期才体会到这部的好。",
      platform: "Switch 掌机模式",
      playtime: "85 小时",
      date: "2026-07-29",
      likes: 113,
    },
    {
      author: "连锁攻击大师",
      rating: 4.5,
      tag: "动作玩家",
      title: "连锁攻击的演出太爽",
      content:
        "打满一轮连锁能看一分钟的连段演出，伤害数字也很解压。重编译版可以更清晰。",
      platform: "PC · Windows",
      playtime: "120 小时",
      date: "2026-06-12",
      likes: 67,
    },
  ],
  "diablo-ii-resurrected": [
    {
      author: "野蛮人",
      rating: 5,
      tag: "怀旧党",
      title: "刷装备的快乐十年不变",
      content:
        "高清化的庇护之地依然阴森，符文之语的收集循环还是那么上头。Switch 版躺着刷也很舒服。",
      platform: "Switch 掌机模式",
      playtime: "300 小时",
      date: "2026-10-25",
      likes: 231,
    },
    {
      author: "冰法开荒",
      rating: 4.5,
      tag: "系列老玩家",
      title: "情怀和便利性都给了",
      content:
        "共享仓库和自动拾取金币这些改动很贴心。画面重做后，第三幕的雨林终于看得清了。",
      platform: "PC · Windows",
      playtime: "180 小时",
      date: "2026-09-10",
      likes: 126,
    },
    {
      author: "天梯玩家",
      rating: 4,
      tag: "联机玩家",
      title: "赛季一到就想回归",
      content:
        "每个赛季开新号重新开荒，依然是熟悉的味道。交易和组队体验一般。",
      platform: "PC · Windows",
      playtime: "240 小时",
      date: "2026-08-05",
      likes: 73,
    },
    {
      author: "离线单机党",
      rating: 4.5,
      tag: "休闲玩家",
      title: "通勤路上的刷子游戏",
      content:
        "掌机模式刷牛场很顺手，离线角色也不受网络影响。字体在大屏幕上偏小。",
      platform: "Switch 掌机模式",
      playtime: "95 小时",
      date: "2026-06-25",
      likes: 48,
    },
  ],
  "fire-emblem-fortunes-weave": [
    {
      author: "斗技场王者",
      rating: 4.5,
      tag: "战棋玩家",
      title: "战棋部分全面进化",
      content:
        "斗技场地图的立体结构很有意思，新职业和武器相克也调得很细。剧情演出比 Engage 稳。",
      platform: "Switch 2",
      playtime: "75 小时",
      date: "2026-10-29",
      likes: 164,
    },
    {
      author: "鞑古扎史官",
      rating: 4,
      tag: "剧情党",
      title: "世界观很吸引人，收尾略赶",
      content:
        "众神统治下的鞑古扎帝国设定很新鲜，角色也讨喜。后半段几条线收得有点急。",
      platform: "Switch 2",
      playtime: "58 小时",
      date: "2026-09-23",
      likes: 92,
    },
    {
      author: "新玩家",
      rating: 4,
      tag: "首次入坑",
      title: "上手友好，深度够",
      content:
        "教学关卡循序渐进，自动战斗也能救急。想认真玩的话，高难度完全另一款游戏。",
      platform: "Switch 2",
      playtime: "40 小时",
      date: "2026-08-18",
      likes: 57,
    },
    {
      author: "重编译测试员",
      rating: 4.5,
      tag: "模拟器测试",
      title: "重编译版值得期待",
      content:
        "原生版读盘已经很快，帧数也稳。PC 端如果能上 120 帧，战棋演出会更顺滑。",
      platform: "PC · Windows",
      playtime: "65 小时",
      date: "2026-07-11",
      likes: 61,
    },
  ],
  "dark-souls-remastered": [
    {
      author: "不死人",
      rating: 5,
      tag: "系列老玩家",
      title: "罗德兰永远的家",
      content:
        "在掌机上重新走一遍传火之路，篝火亮起的瞬间还是会松一口气。DLC 也完整收录了。",
      platform: "Switch 掌机模式",
      playtime: "120 小时",
      date: "2026-10-03",
      likes: 219,
    },
    {
      author: "病村幸存者",
      rating: 3.5,
      tag: "性能党",
      title: "Switch 版只能算能玩",
      content:
        "病村和伊扎里斯的帧数依然感人，30 帧也限制了翻滚手感。重编译版才是完整体验。",
      platform: "PC · Windows",
      playtime: "90 小时",
      date: "2026-08-26",
      likes: 153,
    },
    {
      author: "太阳骑士",
      rating: 4.5,
      tag: "联机玩家",
      title: "召唤好友一起受苦",
      content:
        "联机和留言系统健在，看到地上其他玩家的提示还是会会心一笑。PVP 延迟有点高。",
      platform: "Switch 底座模式",
      playtime: "80 小时",
      date: "2026-07-05",
      likes: 76,
    },
    {
      author: "魂系萌新",
      rating: 4,
      tag: "首次入坑",
      title: "被劝退三次后真香",
      content:
        "没有地图、没有任务指引，但每个捷径开启的瞬间都记很久。难度确实硬核。",
      platform: "Switch 掌机模式",
      playtime: "55 小时",
      date: "2026-05-22",
      likes: 94,
    },
  ],
  "doom-2016": [
    {
      author: "恶魔屠夫",
      rating: 5,
      tag: "动作玩家",
      title: "速度与暴力美学",
      content:
        "边跑边处决的节奏一旦上手就停不下来，重金属一响直接肾上腺素拉满。",
      platform: "Switch 掌机模式",
      playtime: "30 小时",
      date: "2026-09-27",
      likes: 176,
    },
    {
      author: "掌机恶魔",
      rating: 4,
      tag: "性能党",
      title: "能躺着打恶魔已经是奇迹",
      content:
        "Switch 版 30 帧加上降低的特效，画面糊但玩法完整。重编译版 60 帧才是正确打开方式。",
      platform: "PC · Windows",
      playtime: "26 小时",
      date: "2026-08-15",
      likes: 118,
    },
    {
      author: "体感射击",
      rating: 4.5,
      tag: "首次入坑",
      title: "体感瞄准意外好用",
      content:
        "掌机模式的体感瞄准很舒服，爆头反馈极佳。后期竞技场难度有点陡。",
      platform: "Switch 掌机模式",
      playtime: "18 小时",
      date: "2026-06-28",
      likes: 63,
    },
    {
      author: "速通练习生",
      rating: 4.5,
      tag: "速通玩家",
      title: "节奏快到没时间喝口水",
      content:
        "关卡设计鼓励一路推进，练熟路线后非常流畅。重编译版的读盘优势很明显。",
      platform: "PC · Windows",
      playtime: "34 小时",
      date: "2026-05-09",
      likes: 41,
    },
  ],
  "diablo-iii": [
    {
      author: "奈非天",
      rating: 4.5,
      tag: "系列老玩家",
      title: "掌机上最合适的刷子游戏",
      content:
        "本地四人同屏、体感翻滚、随身携带的庇护之地，Switch 版把刷刷刷的场景扩展到了任何地方。",
      platform: "Switch 掌机模式",
      playtime: "260 小时",
      date: "2026-10-06",
      likes: 188,
    },
    {
      author: "赛季旅人",
      rating: 4,
      tag: "联机玩家",
      title: "每个赛季都能回来玩两周",
      content:
        "赛季旅程让人有目标，组队刷大秘境也很顺。画面相比 PC 版还是差一点。",
      platform: "Switch 底座模式",
      playtime: "150 小时",
      date: "2026-08-20",
      likes: 97,
    },
    {
      author: "死灵法师",
      rating: 4.5,
      tag: "角色玩家",
      title: "召唤流太解压了",
      content:
        "一堆骷髅和傀儡在前面打，自己躲在后面放诅咒，下班玩特别放松。",
      platform: "PC · Windows",
      playtime: "110 小时",
      date: "2026-07-08",
      likes: 66,
    },
    {
      author: "剧情党",
      rating: 3.5,
      tag: "剧情党",
      title: "剧情只是刷装备的借口",
      content:
        "故事和反派都比较工具人，通关一遍就够了。好在玩法循环足够扎实。",
      platform: "Switch 掌机模式",
      playtime: "35 小时",
      date: "2026-05-17",
      likes: 38,
    },
  ],
};

export const gameReviews: Record<string, GameReview[]> = Object.fromEntries(
  Object.entries(reviewSeeds).map(([slug, reviews]) => [
    slug,
    reviews.map((review, index) => ({
      ...review,
      id: `${slug}-${index + 1}`,
    })),
  ]),
);

export type ReviewSummary = {
  average: number;
  count: number;
  recommendRate: number;
  distribution: {
    rating: number;
    count: number;
    percent: number;
  }[];
};

export function getGameReviews(slug: string) {
  return gameReviews[slug] ?? [];
}

export function summarizeReviews(reviews: GameReview[]): ReviewSummary {
  const count = reviews.length;
  const average = count
    ? Math.round(
        (reviews.reduce((total, review) => total + review.rating, 0) / count) *
          10,
      ) / 10
    : 0;
  const recommended = reviews.filter((review) => review.rating >= 4).length;

  return {
    average,
    count,
    recommendRate: count ? Math.round((recommended / count) * 100) : 0,
    distribution: [5, 4, 3, 2, 1].map((rating) => {
      const bucket = reviews.filter(
        (review) => Math.round(review.rating) === rating,
      ).length;
      return {
        rating,
        count: bucket,
        percent: count ? Math.round((bucket / count) * 100) : 0,
      };
    }),
  };
}
