"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent server/client mismatch during initial hydration
  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 animate-pulse"
        aria-hidden="true"
      />
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-full bg-neutral-100 dark:bg-[#16161e] text-neutral-800 dark:text-amber-300 hover:bg-neutral-200 dark:hover:bg-[#20202c] border border-neutral-200 dark:border-white/10 transition-all shadow-sm flex items-center justify-center"
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Clinical Light Mode" : "Switch to Obsidian Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 rotate-0 scale-100 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-emerald-600 -rotate-90 scale-100 transition-transform" />
      )}
    </button>
  );
}

export default ThemeToggle;
