"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type InPageNavItem = { href: string; label: string };

export function InPageNav({ items }: { items: InPageNavItem[] }) {
  const [active, setActive] = useState(items[0]?.href ?? "");
  const hrefs = items.map((item) => item.href).join(",");

  useEffect(() => {
    const sections = hrefs
      .split(",")
      .filter(Boolean)
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [hrefs]);

  return (
    <nav
      aria-label="页内导航"
      className="sticky top-[104px] z-30 -mx-4 mt-3 bg-background/90 px-4 py-2 backdrop-blur-md sm:-mx-6 sm:px-6 md:top-16"
    >
      <div className="flex flex-wrap items-center gap-1.5">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={active === item.href ? "true" : undefined}
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-1 text-[11.5px] transition-colors",
              active === item.href
                ? "border-brand/40 bg-brand/10 font-semibold text-brand"
                : "border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
