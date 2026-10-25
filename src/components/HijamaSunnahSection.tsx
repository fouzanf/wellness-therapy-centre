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
    <section id="hijama" className="py-24 bg-neutral-50 dark:bg-[#08080a] relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

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
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 dark:border-amber-500/30 shadow-xl shadow-amber-950/10 dark:shadow-2xl dark:shadow-amber-950/20 bg-white dark:bg-[#121218]">
              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/cupping-therapy.jpg"
                  alt="Hijama Cupping Therapy at Wellness Therapy Centre Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#0e0e14] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-amber-500/80 dark:bg-amber-500/20 backdrop-blur-md border border-amber-400/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                  <Flame className="w-4 h-4 text-white dark:text-amber-400" />
                  <span className="text-xs font-bold text-white dark:text-amber-300">
                    Prophetic Sunnah Points
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md border border-white/[0.08] p-3 rounded-2xl">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-200 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      100% Sterile Single-Use Cups
                    </span>
                    <span className="text-amber-300 font-bold">Bangalore Center</span>
                  </div>
                </div>
              </div>

              {/* Sunnah Lunar Calendar Callout */}
              <div className="p-5 bg-amber-50/80 dark:bg-[#0f0f16] border-t border-amber-200/60 dark:border-white/[0.06] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Recommended Sunnah Days: 17th, 19th & 21st Lunar Days</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                  While Hijama for medical pain relief can be performed any day of the week,
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-bold">
              <Flame className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Ancient Sunnah & Modern Clinical Cupping</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
              Clinical Hijama Cupping{" "}
              <span className="text-amber-600 dark:gold-glow-text">@ Sacred Sunnah Points</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed font-normal">
              At Wellness Therapy Centre in J.P. Nagar, Hijama is conducted under strict
              medical hygiene standards led by{" "}
              <strong className="text-neutral-900 dark:text-white">Dr. M. Shasath Begum, M.D(Acu.)</strong>. We
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
                    className="p-4 rounded-2xl bg-white dark:bg-[#13131c] border border-neutral-200 dark:border-white/[0.06] hover:border-amber-400/50 dark:hover:border-amber-400/30 transition-all flex items-start gap-3.5 shadow-sm dark:shadow-none"
                  >
                    <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">{pt.title}</h4>
                      <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hygiene & Modality Pills */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-700 dark:text-gray-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Wet, Dry, Flash & Fire Cupping Options</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
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
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white dark:text-black shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Schedule Hijama @ Sunnah Point</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-neutral-500 dark:text-gray-400">
                Direct booking: <strong className="text-neutral-900 dark:text-white">+91 9740495548</strong>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
