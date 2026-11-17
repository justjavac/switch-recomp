export const adsenseClient = "ca-pub-5061364613986259";

/**
 * 在 AdSense 后台「广告 → 按广告单元」创建对应单元后，
 * 把 data-ad-slot 的值填到这里即可自动上线。
 * 留空时对应广告位不会渲染，页面布局保持完整。
 */
export const adSlots: Record<
  "gameSidebar" | "gameInArticle" | "homeInFeed",
  string
> = {
  /** 游戏详情页右侧固定侧栏（竖向） */
  gameSidebar: "",
  /** 游戏详情页项目列表中部（横向） */
  gameInArticle: "",
  /** 首页游戏网格中部（横向） */
  homeInFeed: "",
};
