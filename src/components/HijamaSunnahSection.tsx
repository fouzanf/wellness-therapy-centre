"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Flame,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Droplets,
  Heart,
  Award,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function HijamaSunnahSection() {
  const { openBooking } = useBooking();

  return (
    <section id="hijama" className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4af37]/8 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1b3b2b]/6 dark:bg-[#34d399]/6 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/35 dark:border-[#d4af37]/25 shadow-2xl shadow-[#1b3b2b]/10 dark:shadow-black/70 bg-white dark:bg-[#181715]">
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/cupping-therapy.jpg"
                  alt="Hijama Cupping Therapy at Wellness Therapy Centre Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#121110] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#fbf9f5]/90 dark:bg-[#181715]/90 backdrop-blur-md border border-[#d4af37]/45 px-3.5 py-1.5 rounded-2xl flex items-center gap-2 shadow-md">
                  <Flame className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold text-[#855f10] dark:text-[#f3d987]">
                    Prophetic Sunnah Points
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md border border-[#d4af37]/30 p-3 rounded-2xl">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-200 font-medium flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#34d399]" />
                      100% Sterile Single-Use Cups
                    </span>
                    <span className="text-[#f3d987] font-semibold">Bangalore Center</span>
                  </div>
                </div>
              </div>

              {/* Sunnah Lunar Calendar Callout */}
              <div className="p-5 bg-[#fdfcf9] dark:bg-[#161513] border-t border-[#d4af37]/20 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#855f10] dark:text-[#f3d987]">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>Recommended Sunnah Days: 17th, 19th & 21st Lunar Days</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  While Hijama for chronic pain relief can be performed any day of the week,
                  preventative detox sessions during classical lunar dates offer amplified cellular
                  detoxification and blood purification benefits.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Text / Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Ancient Sunnah & Modern Clinical Cupping Protocol</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight leading-tight">
              Clinical Hijama Cupping{" "}
              <span className="font-editorial-italic champagne-glow-text">@ Sacred Sunnah Points</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              At Wellness Therapy Centre in J.P. Nagar, Hijama is conducted under strict
              medical hygiene standards led by{" "}
              <strong className="text-[#1c1b18] dark:text-white">Dr. M. Shasath Begum, M.D(Acu.), PhD</strong>. We
              combine prophetic Sunnah anatomy with modern physiological vacuum science to
              drain toxic metabolic stagnations and stimulate deep immune vitality.
            </p>

            {/* 3 Core Points Explained */}
            <div className="space-y-3 pt-1">
              {[
                {
                  title: "Al-Kahil Point (Upper Thoracic / Neck Junction)",
                  desc: "The primary detox center. Directly drains lymphatic congestion, relieves upper back knotting, reduces blood viscosity, and dispels chronic lethargy.",
                  icon: Droplets,
                },
                {
                  title: "Al-Akhda'ain Points (Posterior Cervical Veins)",
                  desc: "Crucial for chronic migraines, cervical headaches, sinus pressures, and optical fatigue caused by excessive digital strain.",
                  icon: Sparkles,
                },
                {
                  title: "Lumbar & Organ Projection Sunnah Points",
                  desc: "Decompresses lower back sciatica pathways, invigorates kidney filtration Qi, and cleanses deep pelvic capillary pools.",
                  icon: Heart,
                },
              ].map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/20 hover:border-[#d4af37]/60 dark:hover:border-[#d4af37]/40 transition-all flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="p-2.5 rounded-xl bg-[#f5f1e8] dark:bg-white/[0.06] text-[#855f10] dark:text-[#f3d987] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <div>
                      <h4 className="font-editorial text-sm font-semibold text-[#1c1b18] dark:text-white mb-1">{pt.title}</h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hygiene & Modality Pills */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-white dark:bg-white/[0.04] border border-[#d4af37]/20 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#1b3b2b] dark:text-[#34d399] shrink-0" />
                <span>Wet, Dry, Flash & Fire Cupping Options</span>
              </div>
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-white dark:bg-white/[0.04] border border-[#d4af37]/20 shadow-sm">
                <Award className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Certified Female Doctor for Complete Privacy</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  openBooking("Hijama / Cupping Therapy (Wet/Dry/Fire)")
                }
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-xs bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] text-[#fbf9f5] border border-[#d4af37]/45 shadow-xl shadow-[#1b3b2b]/15 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#d4af37]" />
                <span>Schedule Hijama @ Sunnah Point</span>
                <ArrowRight className="w-4 h-4 text-[#d4af37]" />
              </button>

              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Direct sanctuary booking: <strong className="text-[#1c1b18] dark:text-white">+91 9740495548</strong>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
