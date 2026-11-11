"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "@vercel/analytics";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName?: string;
  eventData?: Record<string, string>;
  children: ReactNode;
};

export function TrackedLink({
  eventName,
  eventData,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (eventName) {
          track(eventName, eventData);
        }
      }}
    >
      {children}
    </a>
  );
}
