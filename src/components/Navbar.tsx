"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const { openBooking } = useBooking();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fbf9f5]/92 dark:bg-[#121110]/95 backdrop-blur-xl border-b border-[#d4af37]/25 dark:border-white/[0.08] shadow-md dark:shadow-2xl shadow-black/5 dark:shadow-black/70 py-3"
          : "bg-[#fbf9f5]/85 dark:bg-[#121110]/90 backdrop-blur-md border-b border-[#d4af37]/15 dark:border-white/[0.04] py-3 md:py-4"
      }`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. LOGO / BRANDING AREA (Left) */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1b3b2b] to-[#2d5a42] p-0.5 shadow-md shadow-[#1b3b2b]/15 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full bg-[#fbf9f5] dark:bg-[#161513] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] group-hover:rotate-12 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-editorial font-semibold text-sm sm:text-base lg:text-lg tracking-tight text-[#1c1b18] dark:text-[#fbf9f5] group-hover:text-[#1b3b2b] dark:group-hover:text-[#f3d987] transition-colors whitespace-nowrap">
                {t.clinicName}
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] lg:text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5 whitespace-nowrap">
              <span>{t.doctorName}</span>
              <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
              <span className="text-[#1b3b2b] dark:text-[#34d399] font-medium">{t.locationTag}</span>
            </p>
          </div>
        </Link>

        {/* 2. NAVIGATION LINKS (Center - Balanced Spacing) */}
        <nav className="hidden xl:flex items-center space-x-4 lg:space-x-6 text-sm font-medium text-neutral-700 dark:text-neutral-300 whitespace-nowrap px-2">
          <Link
            href="/"
            className="hover:text-[#1b3b2b] dark:hover:text-[#f3d987] transition-colors tracking-wide py-1 text-sm font-semibold"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/treatments"
            className="hover:text-[#1b3b2b] dark:hover:text-[#f3d987] transition-colors tracking-wide py-1 text-sm font-semibold"
          >
            {t.nav.treatments}
          </Link>
          <Link
            href="/hijama-sunnah-point"
            className="hover:text-[#855f10] dark:hover:text-[#f3d987] transition-colors tracking-wide py-1 flex items-center gap-1.5 text-sm font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
            {t.nav.hijama}
          </Link>
          <Link
            href="/about"
            className="hover:text-[#1b3b2b] dark:hover:text-[#f3d987] transition-colors tracking-wide py-1 text-sm font-semibold"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#1b3b2b] dark:hover:text-[#f3d987] transition-colors tracking-wide py-1 text-sm font-semibold"
          >
            {t.nav.location}
          </Link>
        </nav>

        {/* 3. ACTION BUTTONS, THEME & LANGUAGE TOGGLE (Far Right) */}
        <div className="hidden xl:flex items-center gap-2 lg:gap-2.5 shrink-0">
          {/* Multilingual Toggle [ EN | ಕನ್ನಡ ] */}
          <LanguageToggle />

          {/* Dark / Light Mode Toggle */}
          <ThemeToggle />

          <a
            href="tel:+919740495548"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs lg:text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-white/80 hover:bg-[#f5f1e8] dark:bg-[#1a1916] dark:hover:bg-[#22201d] hover:text-[#1c1b18] dark:hover:text-white border border-[#d4af37]/30 hover:border-[#d4af37]/70 transition whitespace-nowrap shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#1b3b2b] dark:text-[#34d399]" />
            <span>{t.nav.callDoctor}</span>
          </a>

          <button
            type="button"
            onClick={() => openBooking()}
            className="relative group overflow-hidden px-4 lg:px-4.5 py-2 rounded-xl text-xs lg:text-sm font-semibold text-[#fbf9f5] bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] dark:hover:bg-[#284f3c] border border-[#d4af37]/45 shadow-md shadow-[#1b3b2b]/15 transition-all transform active:scale-95 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 fill-current text-[#d4af37]" />
              {t.nav.bookAppointment}
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile / Tablet Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden">
          <div className="hidden sm:flex items-center gap-1.5">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-neutral-700 dark:text-neutral-300 hover:text-[#1c1b18] dark:hover:text-white hover:bg-[#eae5d8] dark:hover:bg-white/[0.08] rounded-xl transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Slide-Down Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 sm:px-6 md:px-8 pt-4 pb-6 bg-[#fbf9f5]/98 dark:bg-[#161513]/98 backdrop-blur-2xl border-b border-[#d4af37]/25 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Mobile Display & Language Preferences Bar */}
          <div className="flex sm:hidden items-center justify-between p-3 rounded-2xl bg-neutral-100/90 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.08]">
            <span className="text-xs font-semibold text-neutral-600 dark:text-gray-300">Preferences:</span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
          <nav className="flex flex-col space-y-1 text-sm font-medium text-neutral-800 dark:text-gray-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/[0.06] hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/[0.06] hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition"
            >
              {t.nav.treatments}
            </Link>
            <Link
              href="/hijama-sunnah-point"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/[0.06] text-amber-600 dark:text-amber-300 font-semibold flex items-center justify-between transition"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                {t.nav.hijama}
              </span>
              <span className="text-[10px] bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded font-bold">
                Specialized
              </span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/[0.06] hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/[0.06] hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition"
            >
              {t.nav.location}
            </Link>
          </nav>

          <div className="pt-3 border-t border-neutral-200 dark:border-white/[0.08] flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full py-3 rounded-xl font-bold text-sm bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] text-[#fbf9f5] border border-[#d4af37]/45 flex items-center justify-center gap-2 shadow-lg shadow-[#1b3b2b]/15 transition active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#d4af37]" />
              {t.nav.bookAppointment}
            </button>
            <a
              href="tel:+919740495548"
              className="w-full py-3 rounded-xl font-semibold text-sm bg-neutral-100 dark:bg-white/[0.08] text-neutral-800 dark:text-white flex items-center justify-center gap-2 border border-neutral-300 dark:border-white/[0.1] hover:bg-neutral-200 dark:hover:bg-white/[0.12] transition"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {t.nav.callDoctor} (+91 9740495548)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
