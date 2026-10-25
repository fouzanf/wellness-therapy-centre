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
      className="group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.09] border border-neutral-300 dark:border-white/[0.08] hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all text-xs font-semibold shadow-sm"
    >
      <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:rotate-45 transition-transform duration-300" />
      <div className="flex items-center text-[11px] font-bold tracking-wider">
        <span
          className={`transition-colors ${
            language === "en"
              ? "text-emerald-700 dark:text-emerald-400 font-extrabold"
              : "text-neutral-500 dark:text-gray-400"
          }`}
        >
          EN
        </span>
        <span className="text-neutral-400 dark:text-gray-600 mx-1">|</span>
        <span
          className={`transition-colors ${
            language === "kn"
              ? "text-emerald-700 dark:text-emerald-400 font-extrabold"
              : "text-neutral-500 dark:text-gray-400"
          }`}
        >
          ಕನ್ನಡ
        </span>
      </div>
    </button>
  );
}
