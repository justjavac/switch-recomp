"use client";

import { useEffect, useRef } from "react";
import { adsenseClient } from "@/lib/ads";

type AdFormat = "auto" | "horizontal" | "rectangle" | "vertical";

type AdSlotProps = {
  slot?: string;
  format?: AdFormat;
  minHeight?: number;
  className?: string;
};

export function AdSlot({
  slot,
  format = "auto",
  minHeight,
  className,
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) {
      return;
    }
    pushed.current = true;
    try {
      const target = window as unknown as { adsbygoogle?: unknown[] };
      target.adsbygoogle = target.adsbygoogle || [];
      target.adsbygoogle.push({});
    } catch {
      // AdSense 脚本未就绪时忽略，脚本加载后会处理队列
    }
  }, [slot]);

  useEffect(() => {
    const container = containerRef.current;
    const ins = container?.querySelector<HTMLElement>("ins.adsbygoogle");
    if (!container || !ins) {
      return;
    }

    const collapse = () => {
      container.style.display = "none";
    };

    const sync = () => {
      const status = ins.getAttribute("data-ad-status");
      if (status === "unfilled") {
        collapse();
      } else if (status === "filled") {
        container.style.display = "";
        container.style.minHeight = "";
      }
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(ins, {
      attributes: true,
      attributeFilter: ["data-ad-status"],
    });
    // 广告被拦截或长时间未填充时折叠，避免留下大块空白
    const timer = window.setTimeout(() => {
      if (!ins.getAttribute("data-ad-status")) {
        collapse();
      }
    }, 5000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [slot]);

  if (!slot) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      aria-label="广告"
      className={className}
      style={minHeight ? { minHeight } : undefined}
    >
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
