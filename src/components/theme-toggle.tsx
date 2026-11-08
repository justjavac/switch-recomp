"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="切换深色或浅色主题"
      title="点击切换深色 / 浅色模式"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="size-8 rounded-md border-border bg-card text-muted-foreground hover:border-foreground/30 hover:bg-card hover:text-foreground"
    >
      <Sun className="hidden size-3.5 dark:block" />
      <Moon className="size-3.5 dark:hidden" />
    </Button>
  );
}
