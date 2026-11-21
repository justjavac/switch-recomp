"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * 固定在视口右侧的侧栏容器。
 * 当页脚进入视口附近时淡出，避免遮挡页脚内容。
 */
export function FixedSidebar({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px 80px 0px" },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={cn(
        "fixed top-24 right-[max(1.5rem,calc((100vw_-_80rem)/2_+_1.5rem))] max-h-[calc(100dvh-7rem)] w-[320px] space-y-4 overflow-y-auto transition-opacity duration-300 [scrollbar-width:none]",
        hidden && "pointer-events-none opacity-0",
      )}
    >
      {children}
    </div>
  );
}
