"use client";

import { useEffect, useRef } from "react";
import { adsenseClient } from "@/lib/ads";
import { cn } from "@/lib/utils";

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

  if (!slot) {
    return null;
  }

  return (
    <div
      aria-label="广告"
      className={cn("overflow-hidden", className)}
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
