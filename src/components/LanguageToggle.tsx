"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Toggle language between English and Kannada"
      className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f4efe4] hover:bg-[#ede5d6] dark:bg-white/[0.05] dark:hover:bg-white/[0.09] border border-[#d4af37]/35 hover:border-[#d4af37]/60 transition-all text-xs font-semibold shadow-sm"
    >
      <Globe className="w-3.5 h-3.5 text-[#d4af37] group-hover:rotate-45 transition-transform duration-300" />
      <div className="flex items-center text-[11px] font-bold tracking-wider">
        <span
          className={`transition-colors ${
            language === "en"
              ? "text-[#1b3b2b] dark:text-[#f3d987] font-extrabold"
              : "text-neutral-500 dark:text-neutral-400"
          }`}
        >
          EN
        </span>
        <span className="text-neutral-400 dark:text-neutral-600 mx-1">|</span>
        <span
          className={`transition-colors ${
            language === "kn"
              ? "text-[#1b3b2b] dark:text-[#f3d987] font-extrabold"
              : "text-neutral-500 dark:text-neutral-400"
          }`}
        >
          ಕನ್ನಡ
        </span>
      </div>
    </button>
  );
}
