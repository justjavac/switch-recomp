"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gamepad2,
  Info,
  Layers,
  LayoutGrid,
  MonitorSmartphone,
} from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "游戏库", icon: LayoutGrid },
  { href: "/series", label: "系列", icon: Layers },
  { href: "/platforms", label: "平台支持", icon: MonitorSmartphone },
  { href: "/about", label: "收录说明", icon: Info },
];

function NavLinks({
  pathname,
  className,
  compact = false,
}: {
  pathname: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <nav aria-label="主导航" className={cn("items-center gap-0.5", className)}>
      {navItems.map(({ href, label, icon: Icon }) => {
        const active =
          href === "/"
            ? pathname === "/" || pathname.startsWith("/games")
            : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full font-medium outline-none transition-all duration-150 focus-visible:ring-2 focus-visible:ring-brand/50",
              compact ? "px-3 py-1.5 text-[13.5px]" : "px-3.5 py-2 text-[15px]",
              active
                ? "bg-gradient-to-r from-brand to-brand-2 text-white shadow-[0_8px_22px_-12px_var(--brand)]"
                : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
            )}
          >
            <Icon className={cn("size-4", compact && "hidden")} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-white shadow-[0_8px_20px_-10px_var(--brand)]">
            <Gamepad2 className="size-[18px]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[16px] font-bold tracking-tight">
              {siteConfig.name}
            </span>
            <span className="mt-1 text-[10.5px] font-medium text-muted-foreground">
              Switch 游戏移植库
            </span>
          </span>
        </Link>

        <NavLinks pathname={pathname} className="hidden md:flex" />

        <div className="ml-auto flex items-center gap-2">
          <a
            href={siteConfig.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`在新窗口打开 ${siteConfig.repositoryLabel} 仓库`}
            className="hidden h-8 items-center gap-1.5 rounded-md border border-border bg-card px-2 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none lg:flex"
          >
            <GithubIcon className="size-3" />
            <span className="font-mono text-[10px]">{siteConfig.repositoryLabel}</span>
          </a>
          <a
            href={siteConfig.repository}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`在新窗口打开 ${siteConfig.repositoryLabel} 仓库`}
            className="grid size-8 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:outline-none lg:hidden"
          >
            <GithubIcon className="size-3.5" />
          </a>
          <ThemeToggle />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-2.5 sm:px-6 md:hidden">
        <NavLinks pathname={pathname} className="flex gap-1" compact />
      </div>
    </header>
  );
}
