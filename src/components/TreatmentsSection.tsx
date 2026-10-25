"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Activity,
  Flame,
  HeartPulse,
  Sparkles,
  Brain,
  Baby,
  Clock,
  ShieldCheck,
  Check,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface TreatmentCard {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  duration: string;
  idealFor: string[];
  keyBenefits: string[];
  icon: React.ElementType;
}

const TREATMENTS_DATA: TreatmentCard[] = [
  {
    id: "Acupuncture & Acupressure Session",
    title: "Acupuncture & Acupressure Session",
    badge: "Clinical Core",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description:
      "Ultra-fine micro-needles and targeted finger pressure along traditional meridians to remove energy blockages, induce deep endorphin release, and stimulate cellular regeneration.",
    duration: "45 – 60 Mins",
    idealFor: ["Joint Stiffening", "Neuropathy", "Headaches", "Muscle Spasms"],
    keyBenefits: [
      "Painless insertion with ultra-thin sterile Japanese-grade needles",
      "Restores systemic Qi and blood circulation",
      "Noticeable reduction in systemic bodily tension",
    ],
    icon: Activity,
  },
  {
    id: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    title: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    badge: "Sunnah Point Certified",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "Authentic prophetic and medical cupping performed on sacred Sunnah Points. Utilizes negative vacuum pressure and sterile micro-scratches to extract sluggish, cellular-waste burdened capillary blood.",
    duration: "45 – 60 Mins",
    idealFor: ["Full Body Detox", "Lethargy & Fatigue", "High Blood Stagnation", "Back Pain"],
    keyBenefits: [
      "100% single-use disposable vacuum cups and surgical blades",
      "Performed by certified female practitioner Dr. M. Shasath Begum",
      "Deep systemic tissue decompression and immune defense boost",
    ],
    icon: Flame,
  },
  {
    id: "Chronic & Acute Pain Management",
    title: "Chronic & Acute Pain Management",
    badge: "Fast Relief",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    description:
      "A comprehensive natural protocol tailored for longstanding back pain, sciatica, frozen shoulder, lumbar disc bulge, osteoarthritis, and chronic tendon stiffness.",
    duration: "60 Mins",
    idealFor: ["Sciatica", "Cervical Spondylosis", "Knee Arthritis", "Slip Disc Care"],
    keyBenefits: [
      "Targets the root nerve pathway rather than masking symptoms",
      "Prevents heavy dependence on oral analgesics and steroids",
      "Measurable range-of-motion enhancement after single session",
    ],
    icon: HeartPulse,
  },
  {
    id: "Women's Health & PCOD Care",
    title: "Women's Health & PCOD Care",
    badge: "Specialized",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    description:
      "Private, compassionate holistic care dedicated to women suffering from irregular menstrual cycles, PCOD/PCOS symptoms, hormonal acne, pelvic heaviness, and fertility optimization.",
    duration: "50 Mins",
    idealFor: ["PCOD / PCOS", "Menstrual Pain", "Hormonal Imbalance", "Fertility Support"],
    keyBenefits: [
      "Natural ovarian and endocrine gland stimulation via acupoints",
      "100% safe, non-invasive, and non-hormonal treatment",
      "Private, comfortable consulting environment for women",
    ],
    icon: Sparkles,
  },
  {
    id: "Stress, Depression & Anxiety Relief",
    title: "Stress, Depression & Anxiety Relief",
    badge: "Mental Wellness",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    description:
      "A soothing nervous system recalibration protocol that down-regulates cortisol, activates the vagus nerve, settles emotional distress, and cures stubborn chronic insomnia.",
    duration: "50 Mins",
    idealFor: ["Chronic Anxiety", "Burnout", "Insomnia", "Panic & Mental Agitation"],
    keyBenefits: [
      "Induces deep theta-wave mental relaxation during session",
      "Re-establishes circadian sleep-wake homeostasis naturally",
      "Clears brain fog and chronic tension around temples and jaw",
    ],
    icon: Brain,
  },
  {
    id: "Pediatric Acupressure & Gentle Healing",
    title: "Pediatric Acupressure & Natural Care",
    badge: "Gentle & Safe",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "Ultra-gentle needleless acupressure and therapeutic touch designed for infants and children experiencing frequent colds, digestive distress, hyperactive restlessness, and immunity weakness.",
    duration: "30 – 40 Mins",
    idealFor: ["Childhood Immunity", "Digestive Colic", "Restless Sleep", "Sinus Congestion"],
    keyBenefits: [
      "Zero needles — utilizes gentle tapping and light magnet pressure",
      "Friendly, calming environment that children feel safe in",
      "Strengthens natural digestive fire and respiratory defenses",
    ],
    icon: Baby,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TreatmentsSection() {
  const { openBooking } = useBooking();

  return (
    <section id="treatments" className="py-24 bg-white dark:bg-[#0a0a0c] relative transition-colors duration-300">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Integrative Holistic Medicine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Our Core Clinical <span className="text-emerald-600 dark:emerald-glow-text">Therapy Treatments</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mt-4 leading-relaxed">
            Every session at Wellness Therapy Centre is personally overseen by{" "}
            <strong className="text-neutral-900 dark:text-white">Dr. M. Shasath Begum, M.D(Acu.)</strong>, adhering to
            strict clinical sterilization standards and classical meridian wisdom.
          </p>
        </div>

        {/* Treatments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TREATMENTS_DATA.map((t) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.id}
                variants={cardVariants}
                className="group relative bg-neutral-50/80 hover:bg-white dark:bg-[#111117] dark:hover:bg-[#161622] border border-neutral-200/90 dark:border-white/[0.08] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-emerald-950/30 hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-emerald-100/60 dark:bg-white/[0.05] group-hover:bg-emerald-500 group-hover:text-white dark:group-hover:text-black text-emerald-700 dark:text-emerald-400 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${t.badgeColor}`}
                    >
                      {t.badge}
                    </span>
                  </div>

                  {/* Title & Duration */}
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors mb-2">
                    {t.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      {t.duration}
                    </span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400/90 font-medium">In-Clinic Session</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed mb-5">
                    {t.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-semibold text-neutral-500 dark:text-gray-400 uppercase tracking-wider">
                      Key Clinical Advantages:
                    </div>
                    {t.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-gray-300">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-neutral-200/80 dark:border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => openBooking(t.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-neutral-100 hover:bg-emerald-600 hover:text-white dark:bg-white/[0.06] dark:hover:bg-emerald-500 dark:hover:text-black text-neutral-900 dark:text-white border border-neutral-200 hover:border-emerald-600 dark:border-white/[0.1] dark:group-hover:border-emerald-400 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50/40 dark:from-emerald-950/40 dark:via-[#13131c] dark:to-black border border-emerald-200 dark:border-emerald-500/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg dark:shadow-none">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0 hidden sm:block">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                Not sure which therapy fits your pain condition?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 mt-0.5">
                Speak directly with Dr. M. Shasath Begum for a personal diagnostic evaluation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openBooking("General Wellness Consultation")}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white dark:text-black shadow-lg shadow-emerald-600/20 transition active:scale-95"
            >
              Consult Doctor Now
            </button>
            <a
              href="tel:+919740495548"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.12] text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/[0.1] transition shadow-sm"
            >
              Call +91 9740495548
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
