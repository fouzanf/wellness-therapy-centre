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
} from "lucide-react";
import Hero3DCanvas from "./Hero3DCanvas";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { openBooking } = useBooking();
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-[#0a0a0c] dark:via-[#0c0c11] dark:to-[#0a0a0c] transition-colors duration-300">
      {/* 3D Interactive Three.js Background Canvas */}
      <Hero3DCanvas />

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Credential Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-sm dark:shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
              </span>
              <span>{t.hero.badge}</span>
              <span className="text-neutral-400 dark:text-gray-500">|</span>
              <span className="text-amber-600 dark:text-amber-400 flex items-center gap-1 font-bold">
                <Star className="w-3 h-3 fill-current" />
                {t.hero.rating}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] sm:leading-[1.12]">
              {t.hero.titleStart}
              <span className="emerald-glow-text">{t.hero.titleHighlight}</span>
            </h1>

            {/* Sub-Headline & Doctor Profile */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* Specialties Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                {
                  name:
                    language === "kn"
                      ? "ಆಕ್ಯುಪಂಕ್ಚರ್ & ಆಕ್ಯುಪ್ರೆಶರ್"
                      : "Acupuncture & Acupressure",
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
                      : "Sciatica & Chronic Pain",
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
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-white/[0.05] border border-neutral-200 dark:border-white/[0.08] text-xs font-medium text-neutral-700 dark:text-gray-300 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{pill.name}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-black shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.hero.ctaWhatsApp}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+919740495548"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-[#15151e] hover:bg-neutral-100 dark:hover:bg-[#1e1e2b] text-neutral-800 dark:text-white border border-neutral-300 dark:border-white/[0.1] hover:border-emerald-500/40 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.ctaCall}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.08] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white">15+</div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-gray-400">{t.hero.statYears}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">10,000+</div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-gray-400">{t.hero.statPatients}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-600 dark:text-amber-400">100%</div>
                <div className="text-[11px] sm:text-xs text-neutral-500 dark:text-gray-400">{t.hero.statSterile}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Sanctuary Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 shadow-2xl shadow-emerald-950/10 dark:shadow-emerald-950/50 bg-white dark:bg-[#121218]">
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/doctor-photos.jpg"
                  alt="Dr. M. Shasath Begum, M.D(Acu.) consulting at Wellness Therapy Centre J.P. Nagar Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#0d0d12] via-transparent to-black/20" />

                {/* Floating Doctor Credential Badge */}
                <div className="absolute top-4 left-4 glass-panel px-3.5 py-2 rounded-xl flex items-center gap-2.5 border border-emerald-500/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">
                      Dr. M. Shasath Begum
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      M.D(Acu.) • In-Clinic Today
                    </div>
                  </div>
                </div>

                {/* Floating Sunnah Point Badge */}
                <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-md border border-amber-400/40 px-3 py-1.5 rounded-xl text-right">
                  <div className="text-[10px] font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                    Sunnah Point
                  </div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">Hijama Cupping</div>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 space-y-3 bg-neutral-50 dark:bg-[#0d0d12]">
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Gangadhar Nagar, J.P. Nagar Bangalore
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Clinic
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-gray-400">Consultation Timings</div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                      9:00 AM – 8:00 PM (All 7 Days)
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openBooking("General Wellness Consultation")}
                    className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
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
