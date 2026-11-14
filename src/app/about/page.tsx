import type { Metadata } from "next";
import { ArrowUpRight, Info } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { platforms, statuses } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "收录说明",
  description:
    "SwitchRecomp 的收录范围、项目状态定义、平台说明、免责声明与参与方式。",
  alternates: {
    canonical: "/about",
  },
};

const sections = [
  {
    id: "scope",
    index: "01",
    title: "收录范围",
    body: [
      "本站以游戏为单位，收录 Nintendo Switch 游戏的静态重编译（static recompilation）与原生移植项目。项目来源为 GitHub 与 GitLab 的公开仓库，仓库名不必以 recomp 结尾。",
      "同一款游戏可能有多个社区项目，分别面向不同平台或采用不同的实现路线。本站将它们聚合到一个游戏页面，方便比较 Star 数、状态与平台支持。",
    ],
  },
  {
    id: "data",
    index: "02",
    title: "数据与更新",
    body: [
      `Star 数、项目状态与平台信息来自仓库公开资料，当前为 ${siteConfig.snapshotDate} 的快照。Star 数会随时间变化，请以仓库页面为准。`,
      "游戏按全部项目的 Star 总数排序；游戏页内的项目按各自 Star 数排序。平台统计基于项目声明，不代表当前构建一定可用。",
      "游戏封面取自任天堂官方商店页面的宣传图，版权归原权利人所有，仅用于识别与介绍。",
    ],
  },
  {
    id: "disclaimer",
    index: "03",
    title: "免责声明",
    body: [
      "所有项目均为社区粉丝作品，与任天堂、GitHub 或 GitLab 无关。本站仅做索引，不托管任何项目代码或游戏文件。",
      "仓库通常不包含游戏本体。使用前需要自行合法购买游戏并完成转储；请遵守当地法律与游戏许可协议。",
    ],
  },
  {
    id: "contribute",
    index: "04",
    title: "参与贡献",
    body: [
      "发现遗漏的游戏或新的移植项目，欢迎在 GitHub 提交 Issue，说明游戏名称、仓库地址、支持平台与当前状态。",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8 pb-20 sm:px-6 sm:pt-12">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
        <Info className="size-3.5" />
        关于本站
      </span>
      <h1 className="mt-3.5 text-[2rem] font-bold tracking-[-0.01em] sm:text-[2.5rem]">
        收录说明
      </h1>
      <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.9] text-muted-foreground">
        {siteConfig.name} 是一个中文的 Switch 游戏原生移植导航站。这里说明我们收录什么、如何标注状态，以及使用这些项目时需要注意的事项。
      </p>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-t border-border pt-7"
          >
            <div className="flex items-baseline gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-brand to-brand-2 text-[10px] font-semibold text-white tabular-nums">
                {section.index}
              </span>
              <h2 className="text-[20px] font-bold tracking-tight">
                {section.title}
              </h2>
            </div>
            <div className="mt-3 space-y-3 pl-9">
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[14px] leading-7 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-10 border-t border-border pt-7">
        <div className="flex items-baseline gap-3">
          <span className="grid size-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-brand to-brand-2 text-[10px] font-semibold text-white tabular-nums">
            05
          </span>
          <h2 className="text-[20px] font-bold tracking-tight">状态与平台</h2>
        </div>
        <div className="mt-4 grid gap-4 pl-9 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="text-[12px] font-semibold text-muted-foreground">
              项目状态
            </h3>
            <ul className="mt-3 space-y-2.5">
              {(Object.keys(statuses) as Array<keyof typeof statuses>).map(
                (key) => (
                  <li
                    key={key}
                    className="flex items-center gap-2 text-[12px] text-muted-foreground"
                  >
                    <span
                      className={cn("size-1.5 rounded-full", statuses[key].dot)}
                    />
                    {statuses[key].label}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="text-[12px] font-semibold text-muted-foreground">
              目标平台
            </h3>
            <ul className="mt-3 grid gap-2.5">
              {platforms.map((platform) => {
                const PlatformIcon = platform.icon;
                return (
                  <li
                    key={platform.id}
                    className="flex items-center gap-2 text-[12px] text-muted-foreground"
                  >
                    <PlatformIcon className="size-3.5" />
                    {platform.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <GithubIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
          <div>
            <h2 className="text-[16px] font-bold">提交或更正收录</h2>
            <p className="mt-2 text-[13px] leading-7 text-muted-foreground">
              发现新项目、仓库迁移、Star 数过期，或希望更正 / 移除收录，请在 GitHub
              上联系维护者。项目数据来自 GitHub 与 GitLab 的公开 API，Star 数为
              {siteConfig.snapshotDate} 快照。
            </p>
            <a
              href={siteConfig.repository}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`在新窗口打开 ${siteConfig.repositoryLabel} 仓库`}
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-foreground transition-colors hover:text-brand"
            >
              {siteConfig.repositoryLabel}
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>
      </section>

      <p className="mt-8 flex items-center gap-2 text-[11px] text-muted-foreground">
        <GithubIcon className="size-3.5" />
        {siteConfig.name} · 非官方粉丝项目 · {siteConfig.snapshotDate} 快照
      </p>
    </div>
  );
}
