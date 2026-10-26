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
      className="p-2.5 rounded-full bg-white/90 dark:bg-[#1a1917] text-[#1c1b18] dark:text-[#f3d987] hover:bg-[#f5f1e8] dark:hover:bg-[#24211d] border border-[#d4af37]/30 dark:border-[#d4af37]/25 transition-all shadow-sm flex items-center justify-center"
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Warm Ivory Sanctuary Mode" : "Switch to Espresso Charcoal Sanctuary Mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#d4af37] rotate-0 scale-100 transition-transform" />
      ) : (
        <Moon className="w-4 h-4 text-[#1b3b2b] -rotate-90 scale-100 transition-transform" />
      )}
    </button>
  );
}

export default ThemeToggle;
