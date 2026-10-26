"use client";

import React, { useState, useEffect } from "react";
import { Clock, ShieldCheck, Phone, MessageSquare, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBooking } from "@/context/BookingContext";

export default function DoctorStatusTicker() {
  const { t, language } = useLanguage();
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
    <div className="bg-[#142e21] dark:bg-[#121110] border-b border-[#d4af37]/25 py-2 px-4 sm:px-6 lg:px-8 text-xs text-[#fbf9f5] dark:text-neutral-300 relative z-40 overflow-hidden">
      {/* Background shimmer line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/15 dark:via-[#d4af37]/10 to-transparent -translate-x-full animate-[shimmer_5s_infinite]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left Status Pulse */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d4af37] shadow-sm" />
          </span>

          <div className="flex items-center gap-2">
            <span className="text-[#fbf9f5] font-semibold tracking-wide">
              {t.ticker.online}
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#1b3b2b] text-[#f3d987] border border-[#d4af37]/35 dark:bg-[#1a1916] dark:text-[#f3d987] dark:border-[#d4af37]/25">
              Live Verified
            </span>
          </div>
        </div>

        {/* Center / Hours */}
        <div className="flex items-center gap-4 text-[11px] text-[#f5f1e8]/85 dark:text-neutral-400">
          <span className="flex items-center gap-1.5 text-white dark:text-neutral-300">
            <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span>{t.ticker.hours}</span>
          </span>

          <span className="hidden lg:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span>Gangadhar Nagar, J.P. Nagar Bangalore</span>
          </span>

          {currentTimeStr && (
            <span className="hidden xl:inline text-[#f5f1e8]/70 dark:text-neutral-500 font-mono">
              Local Time: {currentTimeStr}
            </span>
          )}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openBooking("General Wellness Consultation")}
            className="flex items-center gap-1.5 text-[11px] font-semibold text-[#f3d987] hover:text-white dark:hover:text-[#f3d987] transition-colors"
          >
            <MessageSquare className="w-3 h-3 fill-current text-[#d4af37]" />
            <span>{t.ticker.cta}</span>
          </button>
          <span className="text-[#d4af37]/40">|</span>
          <a
            href="tel:+919740495548"
            className="flex items-center gap-1 text-[11px] font-medium text-white dark:text-neutral-300 hover:text-[#f3d987] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>+91 9740495548</span>
          </a>
        </div>
      </div>
    </div>
  );
}
