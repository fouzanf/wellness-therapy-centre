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
    <div className="bg-[#064e3b] dark:bg-gradient-to-r dark:from-[#071a12] dark:via-[#0d1616] dark:to-[#071a12] border-b border-emerald-700/60 dark:border-emerald-500/25 py-2 px-4 sm:px-6 lg:px-8 text-xs text-emerald-50 dark:text-gray-300 relative z-40 overflow-hidden">
      {/* Background shimmer line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/20 dark:via-emerald-500/10 to-transparent -translate-x-full animate-[shimmer_4s_infinite]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left Status Pulse */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 dark:bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 dark:bg-emerald-500 shadow-md shadow-emerald-400" />
          </span>

          <div className="flex items-center gap-2">
            <span className="text-white font-bold tracking-tight">
              {t.ticker.online}
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200 border border-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30">
              Live Verified
            </span>
          </div>
        </div>

        {/* Center / Hours */}
        <div className="flex items-center gap-4 text-[11px] text-emerald-100/90 dark:text-gray-400">
          <span className="flex items-center gap-1.5 text-white dark:text-gray-300">
            <Clock className="w-3.5 h-3.5 text-amber-300 dark:text-amber-400 shrink-0" />
            <span>{t.ticker.hours}</span>
          </span>

          <span className="hidden lg:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-300 dark:text-emerald-400 shrink-0" />
            <span>Gangadhar Nagar, J.P. Nagar Bangalore</span>
          </span>

          {currentTimeStr && (
            <span className="hidden xl:inline text-emerald-200/80 dark:text-gray-500 font-mono">
              Local Time: {currentTimeStr}
            </span>
          )}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openBooking("General Wellness Consultation")}
            className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 dark:text-emerald-400 hover:text-white dark:hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3 h-3 fill-current" />
            <span>{t.ticker.cta}</span>
          </button>
          <span className="text-emerald-700 dark:text-gray-600">|</span>
          <a
            href="tel:+919740495548"
            className="flex items-center gap-1 text-[11px] font-semibold text-white dark:text-gray-300 hover:text-amber-300 dark:hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-300 dark:text-emerald-400" />
            <span>+91 9740495548</span>
          </a>
        </div>
      </div>
    </div>
  );
}
