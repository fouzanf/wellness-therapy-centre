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
    meridianNote: "Liver Fire rising upwards and vascular constriction along the temporoparietal head channels.",
    recommendedService: "Chronic & Acute Pain Management",
    serviceCategory: "Targeted Cranial Acupressure & Cupping",
    benefits: [
      "Rapid abortive relief for acute throbbing headache episodes",
      "Significantly reduces monthly migraine attack frequency",
      "Reduces sensory light and sound sensitivity",
    ],
    expectedSessions: "3 to 5 sessions",
    reliefRate: "93% Frequency Drop",
    icon: Brain,
  },
  {
    id: "stress",
    name: "Insomnia, Anxiety & Mental Fatigue",
    tag: "Nervous System Reset",
    meridianNote: "Hyperactive sympathetic nervous system and Shen (mind) imbalance disrupting delta sleep.",
    recommendedService: "Stress, Depression & Anxiety Relief",
    serviceCategory: "Vagus Nerve & Calming Meridian Therapy",
    benefits: [
      "Triggers deep parasympathetic state within 15 minutes",
      "Promotes deep restorative REM sleep without sedatives",
      "Alleviates nervous chest tightness and chronic anxiety palpitations",
    ],
    expectedSessions: "3 to 5 calming sessions",
    reliefRate: "96% Sleep Quality Improvement",
    icon: Sparkles,
  },
];

export default function SymptomChecker() {
  const { openBooking } = useBooking();
  const [selectedId, setSelectedId] = useState<string>("sciatica");

  const current = SYMPTOMS.find((s) => s.id === selectedId) || SYMPTOMS[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 bg-[#0a0a0e] relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Health & Symptom Diagnostic</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Where Does It Hurt? Find Your{" "}
            <span className="emerald-glow-text">Targeted Healing Protocol</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-3">
            Select your primary health concern below to explore Dr. M. Shasath Begum&apos;s
            clinical meridian protocol and expected recovery timeline.
          </p>
        </div>

        {/* Diagnostic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Selectable Symptom Cards */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-1 mb-2">
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
                      ? "bg-gradient-to-r from-emerald-950/70 to-[#161622] border-emerald-400/80 shadow-lg shadow-emerald-950/50 ring-1 ring-emerald-400/30"
                      : "bg-[#121218] border-white/[0.06] hover:bg-[#181822] hover:border-emerald-500/30 text-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl ${
                        isActive
                          ? "bg-emerald-400 text-black shadow-md"
                          : "bg-white/[0.05] text-emerald-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">
                        {item.name}
                      </div>
                      <span className="text-[11px] text-gray-400">{item.tag}</span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-emerald-400 translate-x-1" : "text-gray-500"
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
                className="bg-[#12121a] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/30 relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[90px] pointer-events-none rounded-full" />

                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                        Clinical Protocol
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {current.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                      {current.reliefRate}
                    </span>
                  </div>
                </div>

                {/* Meridian diagnosis explanation */}
                <div className="py-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Meridian & Anatomical Diagnosis:
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {current.meridianNote}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                      Key Therapeutic Actions:
                    </div>
                    <div className="space-y-2">
                      {current.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Treatment plan meta */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <div className="text-[11px] text-gray-400 flex items-center gap-1.5 mb-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        Treatment Horizon:
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        {current.expectedSessions}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <div className="text-[11px] text-gray-400 flex items-center gap-1.5 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Recommended Modality:
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-emerald-300">
                        {current.serviceCategory}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA inside card */}
                <div className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400 text-center sm:text-left">
                    Direct consultation with <strong className="text-white">Dr. M. Shasath Begum</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => openBooking(current.recommendedService)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                  >
                    <span>Book {current.name} on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
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
