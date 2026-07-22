"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons/ThemeIcons";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(next: Theme) {
  document.documentElement.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* ignore */
  }
}

interface ThemeToggleProps {
  className?: string;
  variant?: "default" | "subtle";
}

export default function ThemeToggle({
  className,
  variant = "default",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const switchTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  const toggle = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "inline-flex shrink-0 items-center justify-center transition-colors",
        variant === "subtle"
          ? "h-9 w-9 rounded-full bg-transparent text-body hover:bg-surface-soft hover:text-ink"
          : "h-9 w-9 rounded-full bg-transparent text-ink hover:bg-surface-soft",
        className,
      )}
    >
      {mounted ? (
        isDark ? (
          <SunIcon className="size-4" />
        ) : (
          <MoonIcon className="size-4" />
        )
      ) : (
        <span className="size-4" aria-hidden />
      )}
    </button>
  );
}
