"use client";

import React, { useState, useEffect } from "react";
import { Clock, Phone, MessageSquare, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBooking } from "@/context/BookingContext";

export default function DoctorStatusTicker() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const [currentTimeStr, setCurrentTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTimeStr(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#142e21] dark:bg-[#121110] border-b border-[#d4af37]/25 relative z-40 overflow-hidden w-full">
      {/* Background shimmer line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/15 dark:via-[#d4af37]/10 to-transparent -translate-x-full animate-[shimmer_5s_infinite] pointer-events-none" />

      {/* Main Container Alignment constraint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic content: Structured vertical stack on mobile (flex-col text-center), flexible wrapped row on desktop (md:flex-row) */}
        <div className="w-full text-xs text-[#fbf9f5] dark:text-neutral-300 flex flex-col items-center text-center py-2 px-4 gap-1 md:flex-row md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-1 md:py-2 md:px-0">
          {/* Line 1: Doctor Status Pulse */}
          <div className="flex items-center justify-center gap-2 shrink-0">
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4af37] shadow-sm" />
            </span>

            <span className="text-[#fbf9f5] font-semibold tracking-wide">
              {t.ticker.online}
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#1b3b2b] text-[#f3d987] border border-[#d4af37]/35 dark:bg-[#1a1916] dark:text-[#f3d987] dark:border-[#d4af37]/25 shrink-0">
              Live Verified
            </span>
          </div>

          {/* Separator */}
          <span className="text-[#d4af37]/30 shrink-0 hidden md:inline">•</span>

          {/* Line 2: Consulting Hours */}
          <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs text-[#f5f1e8]/85 dark:text-neutral-400 shrink-0">
            <span className="flex items-center gap-1.5 text-white dark:text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{t.ticker.hours}</span>
            </span>

            <span className="hidden lg:flex items-center gap-1.5 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Gangadhar Nagar, J.P. Nagar Bangalore</span>
            </span>

            {currentTimeStr && (
              <span className="hidden xl:inline text-[#f5f1e8]/70 dark:text-neutral-500 font-mono shrink-0">
                Local Time: {currentTimeStr}
              </span>
            )}
          </div>

          {/* Separator */}
          <span className="text-[#d4af37]/30 shrink-0 hidden md:inline">•</span>

          {/* Line 3: Actions & Confirmation */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openBooking("General Wellness Consultation")}
              className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#f3d987] hover:text-white dark:hover:text-[#f3d987] transition-colors shrink-0 whitespace-nowrap"
            >
              <MessageSquare className="w-3 h-3 fill-current text-[#d4af37]" />
              <span>{t.ticker.cta}</span>
            </button>
            <span className="text-[#d4af37]/40 shrink-0">|</span>
            <a
              href="tel:+919740495548"
              className="flex items-center gap-1 text-[11px] sm:text-xs font-medium text-white dark:text-neutral-300 hover:text-[#f3d987] transition-colors shrink-0 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>+91 9740495548</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
