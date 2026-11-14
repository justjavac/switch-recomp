import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

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
      "为了解页面访问量与项目点击情况，本站可能使用 Vercel Analytics 统计聚合的访问数据，例如页面路径、来源、设备类型与站内点击事件。这些数据不包含姓名、邮箱等个人身份信息，也不用于识别个人。",
    ],
  },
  {
    title: "Cookie 与本地存储",
    body: [
      "站点使用浏览器本地存储保存浅色 / 深色主题偏好，该信息不会上传到服务器。",
      "当前版本不投放广告，也不使用广告追踪 Cookie。",
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
      "如果未来通过广告、赞助或联盟链接维持站点运营，会在页面中明确标注，并同步更新本政策。",
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
        最后更新：{siteConfig.snapshotDate}
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
