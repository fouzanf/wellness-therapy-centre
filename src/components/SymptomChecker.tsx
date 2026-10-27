"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Flame,
  HeartPulse,
  Brain,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ChevronRight,
  Compass,
  MessageSquare,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface SymptomData {
  id: string;
  name: string;
  tag: string;
  meridianNote: string;
  recommendedService: string;
  serviceCategory: string;
  benefits: string[];
  expectedSessions: string;
  reliefRate: string;
  icon: React.ElementType;
}

const SYMPTOMS: SymptomData[] = [
  {
    id: "sciatica",
    name: "Sciatica & Lower Back Pain",
    tag: "Most Common",
    meridianNote: "Bladder & Gallbladder meridian stagnation compressing the sciatic nerve pathway.",
    recommendedService: "Chronic & Acute Pain Management",
    serviceCategory: "Acupuncture + Dry/Wet Cupping",
    benefits: [
      "Decompresses pinched lumbar nerve roots",
      "Increases spinal microcirculation and reduces disc inflammation",
      "Noticeable mobility release from session 1",
    ],
    expectedSessions: "3 to 6 targeted sessions",
    reliefRate: "94% Patient Relief",
    icon: HeartPulse,
  },
  {
    id: "hijama",
    name: "Body Detox & Blood Stagnation",
    tag: "Sunnah Point Specialized",
    meridianNote: "Accumulation of metabolic toxic waste, sluggish lymph flow, and congested capillary beds.",
    recommendedService: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    serviceCategory: "Authentic Sunnah Point Wet Cupping",
    benefits: [
      "Clears stagnant unoxygenated blood and cellular debris",
      "Targeted application on classical Al-Kahil & Sunnah points",
      "100% painless micro-incisions with certified sterile disposables",
    ],
    expectedSessions: "1 session per month (ideal on 17th, 19th, 21st lunar days)",
    reliefRate: "98% Vitality Boost",
    icon: Flame,
  },
  {
    id: "cervical",
    name: "Cervical Spondylosis & Neck Pain",
    tag: "High Ergonomic Stress",
    meridianNote: "Trapezius muscle spasm, cervical vertebrae tension, and restricted vertebral blood flow.",
    recommendedService: "Acupuncture & Acupressure Session",
    serviceCategory: "Fine Needle Stimulation & Acupressure",
    benefits: [
      "Relieves stiff upper neck & radiating shoulder tightness",
      "Removes tension triggers causing arm tingling or finger numbness",
      "Restores natural range of neck rotation",
    ],
    expectedSessions: "2 to 4 sessions",
    reliefRate: "91% Mobility Restoration",
    icon: Activity,
  },
  {
    id: "pcod",
    name: "PCOD / PCOS & Hormonal Health",
    tag: "Women's Wellness",
    meridianNote: "Kidney and Spleen meridian depletion with Liver Qi stagnation affecting ovarian cycles.",
    recommendedService: "Women's Health & PCOD Care",
    serviceCategory: "Gentle Meridian Balancing & Acupressure",
    benefits: [
      "Regulates natural ovulatory rhythms and menstrual frequency",
      "Assists in lowering cortisol-driven metabolic resistance",
      "Zero side effects or synthetic hormonal interference",
    ],
    expectedSessions: "6 to 8 weekly sessions",
    reliefRate: "89% Cycle Normalization",
    icon: Sparkles,
  },
  {
    id: "migraine",
    name: "Migraines & Chronic Headaches",
    tag: "Neurological Tension",
    meridianNote: "Gallbladder & Liver Fire meridian upward flair with tense cervical fascia restriction.",
    recommendedService: "Acupuncture & Acupressure Session",
    serviceCategory: "Cranial Acupoint Decompression",
    benefits: [
      "Calms hyper-excitable cerebral vascular tension",
      "Promotes sustained nitric oxide vasodilation",
      "Reduces recurrence frequency and pain intensity",
    ],
    expectedSessions: "3 to 5 sessions",
    reliefRate: "92% Headache Relief",
    icon: Brain,
  },
];

export default function SymptomChecker() {
  const { openBooking } = useBooking();
  const [selectedId, setSelectedId] = useState<string>("sciatica");

  const current = SYMPTOMS.find((s) => s.id === selectedId) || SYMPTOMS[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative overflow-hidden transition-colors duration-300">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d4af37]/6 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Interactive Health & Symptom Diagnostic</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Where Does It Hurt? Find Your{" "}
            <span className="font-editorial-italic sage-glow-text">Targeted Healing Protocol</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 font-light">
            Select your primary health concern below to explore Dr. M. Shasath Begum, PhD&apos;s
            clinical meridian protocol and expected recovery timeline.
          </p>
        </div>

        {/* Diagnostic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Selectable Symptom Cards */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 px-1 mb-2">
              Select Your Condition:
            </div>
            {SYMPTOMS.map((item) => {
              const Icon = item.icon;
              const isActive = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  type="button"
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-white dark:bg-[#181715] border-[#d4af37] shadow-md ring-1 ring-[#d4af37]/30"
                      : "bg-[#f8f5ee] dark:bg-[#151412] border-[#1b3b2b]/10 dark:border-white/[0.06] hover:bg-white dark:hover:bg-[#1a1917] text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isActive
                          ? "bg-[#1b3b2b] text-[#fbf9f5] shadow-sm"
                          : "bg-white dark:bg-white/[0.05] text-[#1b3b2b] dark:text-[#f3d987]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-editorial font-semibold text-sm text-[#1c1b18] dark:text-white">
                        {item.name}
                      </div>
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400">{item.tag}</span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#d4af37] translate-x-1" : "text-neutral-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Protocol Presentation Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#1b3b2b] text-[#fbf9f5] dark:bg-[#1f3f2f] dark:text-[#f3d987] shadow-sm">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-editorial text-xl font-semibold text-[#1c1b18] dark:text-white">
                        {current.name}
                      </h3>
                      <span className="text-xs text-[#855f10] dark:text-[#f3d987] font-medium">
                        {current.serviceCategory}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] text-[#1b3b2b] dark:text-[#f3d987] border border-[#d4af37]/35">
                    {current.reliefRate}
                  </span>
                </div>

                <div className="mb-4 p-3.5 rounded-2xl bg-[#f8f5ee] dark:bg-[#141311] border border-[#d4af37]/20 text-xs text-neutral-700 dark:text-neutral-300">
                  <strong className="text-[#1c1b18] dark:text-white block mb-0.5 font-semibold">Meridian Diagnosis:</strong>
                  {current.meridianNote}
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block">
                    Expected Therapeutic Benefits:
                  </span>
                  {current.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#1b3b2b]/10 dark:border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Recommended: {current.expectedSessions}
                  </span>
                  <button
                    type="button"
                    onClick={() => openBooking(current.recommendedService)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/40 shadow-md shadow-[#1b3b2b]/15 flex items-center gap-2 transition active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
