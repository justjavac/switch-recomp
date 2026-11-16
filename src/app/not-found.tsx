import type { Metadata } from "next";
import Link from "@/components/app-link";
import { ArrowLeft, Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "页面未找到",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-white">
        <Gamepad2 className="size-7" />
      </span>
      <p className="mt-6 font-mono text-[12px] tracking-[0.2em] text-brand">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight">
        这个页面没有存档
      </h1>
      <p className="mt-3 max-w-md text-[14px] leading-7 text-muted-foreground">
        链接可能已经失效，或者这款游戏尚未收录。回到游戏库继续浏览吧。
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <ArrowLeft className="size-4" />
        返回游戏库
      </Link>
    </div>
  );
}
