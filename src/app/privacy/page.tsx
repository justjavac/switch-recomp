import type { Metadata } from "next";
import Link from "@/components/app-link";

export const metadata: Metadata = {
  title: "隐私政策",
  description:
    "SwitchRecomp 的数据收集、Cookie、第三方链接与广告说明。",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "我们收集什么",
    body: [
      "本站不要求注册，也不收集姓名、邮箱等个人身份信息。",
      "本站通过 Google AdSense 展示广告。部署平台可能记录基础访问日志，例如 IP、请求路径与访问时间，用于安全防护和可用性排查，不用于识别个人身份。",
    ],
  },
  {
    title: "Cookie 与本地存储",
    body: [
      "站点使用浏览器本地存储保存浅色 / 深色主题偏好，以及你主动收藏和最近浏览的游戏，这些信息不会上传到服务器。",
      "Google AdSense 及其合作伙伴可能使用 Cookie 或类似技术，根据你访问本站和其他网站的情况投放、限制和衡量广告。你可以通过 Google 广告设置（adssettings.google.com）关闭个性化广告，或通过 aboutads.info 管理参与第三方广告联盟的 Cookie；关闭后你仍会看到广告，但相关性会降低。",
    ],
  },
  {
    title: "第三方链接",
    body: [
      "游戏详情页会跳转到 GitHub、GitLab 等第三方站点，这些站点有自己的隐私政策。",
      "游戏封面取自任天堂官方商店页面，版权归原权利人所有，仅用于识别与介绍。",
    ],
  },
  {
    title: "广告与联盟链接",
    body: [
      "本站通过 Google AdSense 展示广告，发布商 ID 为 ca-pub-5061364613986259。广告由 Google 及其合作伙伴提供，本站不直接控制具体广告内容，也不会因你点击广告而获得你的个人信息。",
      "广告收入用于覆盖域名、构建与维护成本。如果未来增加赞助或联盟链接，会在页面中明确标注，并同步更新本政策。",
    ],
  },
  {
    title: "联系我们",
    body: [
      "对收录内容、版权或隐私有疑问，可以通过 GitHub 联系站点维护者。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
        隐私政策
      </span>
      <h1 className="mt-3.5 text-[2rem] font-bold tracking-[-0.01em] sm:text-[2.5rem]">
        你的数据如何被使用
      </h1>
      <p className="mt-3 text-[14px] leading-7 text-muted-foreground">
        最后更新：2026.11.16
      </p>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[17px] font-semibold tracking-tight">
              {section.title}
            </h2>
            <div className="mt-2 space-y-2">
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[13.5px] leading-7 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card/40 p-4 text-[13px] leading-7 text-muted-foreground">
        联系方式：
        <Link
          href="/go/github"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          GitHub @justjavac
        </Link>
      </div>
    </div>
  );
}
