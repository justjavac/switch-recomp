import Link from "next/link";
import { Gamepad2, Rss } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-[12px] text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-md bg-gradient-to-br from-brand to-brand-2 text-white">
            <Gamepad2 className="size-3.5" />
          </span>
          <span className="font-semibold text-foreground">{siteConfig.name}</span>
          <span className="hidden sm:inline">· 非官方粉丝项目</span>
        </div>

        <nav
          aria-label="站点导航"
          className="flex items-center gap-5 text-[12.5px] font-medium"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            游戏库
          </Link>
          <Link href="/series" className="transition-colors hover:text-foreground">
            系列
          </Link>
          <Link
            href="/platforms"
            className="transition-colors hover:text-foreground"
          >
            平台支持
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            收录说明
          </Link>
          <a
            href="/feed.xml"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            <Rss className="size-3" />
            订阅更新
          </a>
          <Link
            href="/privacy"
            className="transition-colors hover:text-foreground"
          >
            隐私
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`在新窗口打开 ${siteConfig.repositoryLabel} 仓库`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-3.5" />
            <span className="font-mono text-[11px]">{siteConfig.repositoryLabel}</span>
          </a>
          <span className="text-[11px]">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
