"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Flame,
  Activity,
  HeartPulse,
  Award,
} from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { openBooking } = useBooking();
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-[#fbf9f5] via-[#f7f3ea] to-[#fbf9f5] dark:from-[#121110] dark:via-[#161513] dark:to-[#121110] transition-colors duration-300">
      {/* 3D Interactive Meditative Qi Background Canvas */}
      <Hero3DCanvas />

      {/* Atmospheric Organic Breathing Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-[#1b3b2b]/8 dark:bg-[#34d399]/8 blur-[160px] pointer-events-none rounded-full animate-gentle-breathe" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#d4af37]/10 dark:bg-[#d4af37]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Hero Editorial Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Credential Pill: Warm Champagne Gold & Deep Sage */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1b1916] border border-[#d4af37]/40 dark:border-[#d4af37]/30 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
              </span>
              <span className="tracking-wide">{t.hero.badge}</span>
              <span className="text-[#d4af37]/60">|</span>
              <span className="text-[#855f10] dark:text-[#f3d987] flex items-center gap-1 font-bold">
                <Star className="w-3 h-3 fill-current text-[#d4af37]" />
                {t.hero.rating}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1c1b18] dark:text-[#fbf9f5] leading-[1.14] sm:leading-[1.12]">
              {t.hero.titleStart}
              <span className="font-editorial-italic sage-glow-text pl-2">{t.hero.titleHighlight}</span>
            </h1>

            {/* Sub-Headline with Medical Sanctuary Voice */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Specialties Badges with Warm Border Accents */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                {
                  name:
                    language === "kn"
                      ? "ಆಕ್ಯುಪಂಕ್ಚರ್ & ಆಕ್ಯುಪ್ರೆಶರ್"
                      : "Clinical Acupuncture & Acupressure",
                  icon: Activity,
                },
                {
                  name:
                    language === "kn"
                      ? "ಸುನ್ನತ್ ಪಾಯಿಂಟ್ ಹಿಜಾಮಾ"
                      : "Hijama (@ Sunnah Point)",
                  icon: Flame,
                },
                {
                  name:
                    language === "kn"
                      ? "ಸಯಾಟಿಕಾ & ದೀರ್ಘಕಾಲದ ನೋವು"
                      : "Sciatica & Chronic Pain Relief",
                  icon: HeartPulse,
                },
                {
                  name:
                    language === "kn"
                      ? "ಪಿಸಿಒಡಿ & ಮಹಿಳೆಯರ ಆರೋಗ್ಯ"
                      : "PCOD & Women's Care",
                  icon: Sparkles,
                },
              ].map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/20 text-xs font-medium text-[#2c2b28] dark:text-[#f3f0e8] shadow-sm hover:border-[#d4af37]/50 transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#1b3b2b] dark:text-[#34d399]" />
                    <span>{pill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Sanctuary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold tracking-wide bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] dark:hover:bg-[#284f3c] text-[#fbf9f5] border border-[#d4af37]/45 shadow-xl shadow-[#1b3b2b]/15 dark:shadow-black/60 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#d4af37]" />
                <span>{t.hero.ctaWhatsApp}</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </button>

              <a
                href="tel:+919740495548"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-medium bg-white/90 dark:bg-[#191816] hover:bg-[#f5f1e8] dark:hover:bg-[#22201d] text-[#1c1b18] dark:text-[#fbf9f5] border border-[#d4af37]/35 hover:border-[#d4af37]/70 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#1b3b2b] dark:text-[#34d399]" />
                <span>{t.hero.ctaCall}</span>
              </a>
            </div>

            {/* Editorial Trust Stats Highlights */}
            <div className="pt-5 border-t border-[#d4af37]/25 dark:border-white/[0.08] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5]">15+</div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{t.hero.statYears}</div>
              </div>
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1b3b2b] dark:text-[#34d399]">10,000+</div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{t.hero.statPatients}</div>
              </div>
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-semibold text-[#b48a28] dark:text-[#e2c974]">100%</div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{t.hero.statSterile}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Sanctuary Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 dark:border-[#d4af37]/25 shadow-2xl shadow-[#1b3b2b]/10 dark:shadow-black/75 bg-white dark:bg-[#181715]">
              {/* Image Frame with Warm Sanctuary Lighting */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/doctor-photos.jpg"
                  alt="Dr. M. Shasath Begum, M.D(Acu.), PhD senior consultation at Wellness Therapy Centre J.P. Nagar Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-[#121110] via-black/10 to-transparent" />

                {/* Floating Doctor Credential Badge */}
                <div className="absolute top-4 left-4 glass-panel px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 border border-[#d4af37]/35 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse-subtle shadow-sm" />
                  <div>
                    <div className="font-editorial text-xs font-semibold text-[#1c1b18] dark:text-white leading-tight">
                      Dr. M. Shasath Begum, PhD
                    </div>
                    <div className="text-[10px] text-[#1b3b2b] dark:text-[#34d399] font-semibold tracking-wide">
                      M.D(Acu.), PhD • Senior Physician
                    </div>
                  </div>
                </div>

                {/* Floating Sunnah Point Badge */}
                <div className="absolute top-4 right-4 bg-[#fbf9f5]/90 dark:bg-[#181715]/90 backdrop-blur-md border border-[#d4af37]/45 px-3 py-1.5 rounded-2xl text-right shadow-md">
                  <div className="text-[10px] font-semibold text-[#855f10] dark:text-[#f3d987] uppercase tracking-wider">
                    Sunnah Point
                  </div>
                  <div className="text-xs font-bold text-[#1c1b18] dark:text-white">Hijama Cupping</div>
                </div>
              </div>

              {/* Bottom Card Sanctuary Content */}
              <div className="p-5 space-y-3 bg-[#fdfcf9] dark:bg-[#151412] border-t border-[#d4af37]/20">
                <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1b3b2b] dark:text-[#34d399]" />
                    Gangadhar Nagar, J.P. Nagar Bangalore
                  </span>
                  <span className="flex items-center gap-1 text-[#1b3b2b] dark:text-[#34d399] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Sanctuary
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white dark:bg-white/[0.04] border border-[#d4af37]/20 dark:border-white/[0.06] flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Sanctuary Timings</div>
                    <div className="text-xs font-semibold text-[#1c1b18] dark:text-[#fbf9f5] flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      9:00 AM – 8:00 PM (All 7 Days)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openBooking("General Wellness Consultation")}
                    className="text-xs font-bold text-[#1b3b2b] dark:text-[#f3d987] hover:underline"
                  >
                    Quick Slot →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
