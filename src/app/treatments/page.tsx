"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Flame,
  HeartPulse,
  Sparkles,
  Brain,
  Baby,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Filter,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface DetailedTreatment {
  id: string;
  category: "all" | "acupuncture" | "hijama" | "pain" | "women" | "mind";
  title: string;
  tagline: string;
  badge: string;
  icon: React.ElementType;
  duration: string;
  indications: string[];
  protocolSteps: string[];
  physiologicalImpact: string;
}

const TREATMENTS_LIST: DetailedTreatment[] = [
  {
    id: "Acupuncture & Acupressure Session",
    category: "acupuncture",
    title: "Clinical Acupuncture & Acupressure",
    tagline: "Meridian channel harmonization and precision bio-electrical stimulation",
    badge: "Core Specialty",
    icon: Activity,
    duration: "45 – 60 Mins",
    indications: [
      "Sciatica & Radiating Nerve Pain",
      "Cervical Spondylosis & Stiff Neck",
      "Peripheral Neuropathy & Numbness",
      "Tension Headaches & Sinus Blockage",
    ],
    protocolSteps: [
      "1. Comprehensive pulse and tongue meridian diagnosis by Dr. Begum",
      "2. Sterilization of specific anatomical acupoints along 12 primary meridians",
      "3. Painless insertion of ultra-fine Japanese-grade single-use needles",
      "4. 20–30 minutes of therapeutic retention inducing deep De-Qi endorphin release",
    ],
    physiologicalImpact:
      "Stimulates local nerve fibers to release natural analgesics (endorphins, enkephalins) and boosts regional microcirculation up to 300%.",
  },
  {
    id: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    category: "hijama",
    title: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    tagline: "Ancient Sunnah Point blood purification and myofascial decompression",
    badge: "Sunnah Point Certified",
    icon: Flame,
    duration: "45 – 60 Mins",
    indications: [
      "Heavy Body Lethargy & Chronic Fatigue",
      "High Blood Viscosity & Stagnation",
      "Upper Back Muscle Knotting & Myofascial Pain",
      "Preventative Detox on 17th, 19th, 21st Lunar Days",
    ],
    protocolSteps: [
      "1. Application of sterile disposable negative-pressure vacuum cups",
      "2. Gentle localized skin hyperemia for 5–7 minutes",
      "3. Superficial microscopic epidermis scratches with surgical lancet",
      "4. Extraction of thickened stagnant capillary blood followed by antiseptic dressing",
    ],
    physiologicalImpact:
      "Clears extravasated stagnant blood, toxic inflammatory cytokines, and cellular debris from capillary beds while stimulating immune phagocytosis.",
  },
  {
    id: "Chronic & Acute Pain Management",
    category: "pain",
    title: "Chronic & Acute Pain Rehabilitation",
    tagline: "Targeted natural relief for stubborn musculoskeletal disorders",
    badge: "Fast Recovery",
    icon: HeartPulse,
    duration: "60 Mins",
    indications: [
      "Lumbar Disc Herniation & Slip Disc",
      "Sciatic Nerve Entrapment",
      "Frozen Shoulder & Rotator Cuff Tendonitis",
      "Knee Osteoarthritis & Synovial Stiffness",
    ],
    protocolSteps: [
      "1. Physical assessment of joint range-of-motion and spinal nerve roots",
      "2. Multi-point meridian acupuncture targeting local trigger points",
      "3. Complementary dry cupping to mobilize stiff fascia",
      "4. Postural and natural movement rehabilitation guidance",
    ],
    physiologicalImpact:
      "Relieves mechanical compression on pinched nerve pathways, calms chronic inflammatory cascades, and restores healthy neuromuscular firing.",
  },
  {
    id: "Women's Health & PCOD Care",
    category: "women",
    title: "Women's Health & PCOD Meridian Protocol",
    tagline: "Gentle natural hormonal regulation and reproductive vitality",
    badge: "Doctor Led • 100% Private",
    icon: Sparkles,
    duration: "50 Mins",
    indications: [
      "PCOD / PCOS & Irregular Menstrual Cycles",
      "Severe Dysmenorrhea (Menstrual Cramping)",
      "Hormonal Acne & Sudden Weight Fluctuations",
      "Pre-conception Fertility Optimization",
    ],
    protocolSteps: [
      "1. Private, confidential female-to-female consultation with Dr. Shasath Begum",
      "2. Identification of Kidney, Spleen & Liver Qi imbalances",
      "3. Non-invasive needle stimulation on abdominal and lower extremity points (SP6, CV4, KI3)",
      "4. Lifestyle and holistic natural nutrition coaching",
    ],
    physiologicalImpact:
      "Balances hypothalamic-pituitary-ovarian (HPO) axis signaling, reduces cortisol levels, and encourages regular natural ovulation without synthetic hormones.",
  },
  {
    id: "Stress, Depression & Anxiety Relief",
    category: "mind",
    title: "Stress, Insomnia & Anxiety Reset",
    tagline: "Vagus nerve activation and somatic nervous system soothing",
    badge: "Mental Wellness",
    icon: Brain,
    duration: "50 Mins",
    indications: [
      "Chronic Work Burnout & Mental Fatigue",
      "Sleep-Onset & Maintenance Insomnia",
      "Generalized Anxiety & Chest Tightness",
      "Brain Fog & Emotional Agitation",
    ],
    protocolSteps: [
      "1. Soothing darkened room setting with therapeutic sound resonance",
      "2. Stimulation of Yin Tang (Third Eye point) and Shen Men (Spirit Gate)",
      "3. Acupressure along cranial meridian channels",
      "4. Guided breath-work and parasympathetic nervous activation",
    ],
    physiologicalImpact:
      "Shifts the autonomic nervous system from hyper-aroused 'fight-or-flight' to restorative 'rest-and-digest', lowering heart rate variability tension.",
  },
  {
    id: "Pediatric Acupressure & Natural Healing",
    category: "all",
    title: "Pediatric Acupressure & Gentle Healing",
    tagline: "Needleless gentle therapeutic touch for infants and children",
    badge: "Child-Safe",
    icon: Baby,
    duration: "30 – 40 Mins",
    indications: [
      "Recurrent Childhood Coughs, Colds & Wheezing",
      "Infantile Colic, Constipation & Indigestion",
      "Hyperactive Restlessness & Bedwetting",
      "Weak Appetite and Low Immune Resilience",
    ],
    protocolSteps: [
      "1. Calming interaction to ensure child feels completely safe and comfortable",
      "2. Gentle finger-tip meridian stroke techniques (Xiao Er Tuina)",
      "3. Light magnetized pellet stimulation without punctures",
      "4. Parent coaching on home massage techniques",
    ],
    physiologicalImpact:
      "Nourishes immature pediatric digestive and immune systems gently without pharmaceuticals or distress.",
  },
];

export default function TreatmentsPage() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? TREATMENTS_LIST
      : TREATMENTS_LIST.filter((t) => t.category === activeCategory);

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-[#0a0a0c] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-3">
            <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Comprehensive Clinical Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Holistic Treatments at{" "}
            <span className="text-emerald-600 dark:emerald-glow-text">Wellness Therapy Centre</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mt-4 leading-relaxed">
            Discover our spectrum of natural therapies administered personally by{" "}
            <strong className="text-neutral-900 dark:text-white">Dr. M. Shasath Begum, M.D(Acu.)</strong> in J.P.
            Nagar, Bangalore. Select any category to view treatment protocols.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Treatments" },
            { id: "acupuncture", label: "Acupuncture & Acupressure" },
            { id: "hijama", label: "Hijama (@ Sunnah Point)" },
            { id: "pain", label: "Chronic Pain Relief" },
            { id: "women", label: "Women's & PCOD Care" },
            { id: "mind", label: "Stress & Insomnia" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-black shadow-lg shadow-emerald-500/25"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-[#14141c] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#1a1a24] border border-neutral-200 dark:border-white/[0.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-50/80 dark:bg-[#121218] border border-neutral-200/90 dark:border-white/[0.08] hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-md dark:shadow-xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{item.title}</h2>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-neutral-200/60 dark:bg-white/[0.06] text-neutral-700 dark:text-gray-300 border border-neutral-300 dark:border-white/[0.08] shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 mb-6 italic">
                    {item.tagline}
                  </p>

                  {/* Indications */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-neutral-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Primary Conditions Addressed:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.indications.map((ind, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step-by-Step Clinical Protocol */}
                  <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-black/40 border border-neutral-200/80 dark:border-white/[0.05] space-y-2 shadow-sm dark:shadow-none">
                    <div className="text-xs font-bold text-neutral-800 dark:text-gray-300 uppercase tracking-wider mb-1">
                      Session Procedure & Protocol:
                    </div>
                    {item.protocolSteps.map((step, idx) => (
                      <div key={idx} className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
                        {step}
                      </div>
                    ))}
                  </div>

                  {/* Physiological mechanism */}
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-xs text-neutral-800 dark:text-emerald-300/90 leading-relaxed mb-6">
                    <strong className="text-neutral-900 dark:text-white block mb-0.5">Physiological Benefit:</strong>
                    {item.physiologicalImpact}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-gray-400">
                    Consultation with Dr. Shasath Begum
                  </span>
                  <button
                    type="button"
                    onClick={() => openBooking(item.id)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-black shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Book on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
