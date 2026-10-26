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
    badgeColor: "bg-[#1b3b2b]/10 dark:bg-[#34d399]/15 text-[#1b3b2b] dark:text-[#34d399] border-[#1b3b2b]/25 dark:border-[#34d399]/30",
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
    badgeColor: "bg-[#d4af37]/15 dark:bg-[#d4af37]/15 text-[#855f10] dark:text-[#f3d987] border-[#d4af37]/40",
    description:
      "Authentic prophetic and medical cupping performed on sacred Sunnah Points. Utilizes negative vacuum pressure and sterile micro-scratches to extract sluggish, cellular-waste burdened capillary blood.",
    duration: "45 – 60 Mins",
    idealFor: ["Full Body Detox", "Lethargy & Fatigue", "High Blood Stagnation", "Back Pain"],
    keyBenefits: [
      "100% single-use disposable vacuum cups and surgical blades",
      "Personally administered by certified physician Dr. M. Shasath Begum",
      "Deep systemic tissue decompression and immune defense boost",
    ],
    icon: Flame,
  },
  {
    id: "Chronic & Acute Pain Management",
    title: "Chronic & Acute Pain Management",
    badge: "Targeted Relief",
    badgeColor: "bg-[#2d5a42]/10 dark:bg-[#2d5a42]/25 text-[#142e21] dark:text-[#6ee7b7] border-[#2d5a42]/25 dark:border-[#2d5a42]/40",
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
    badge: "Specialized Sanctuary",
    badgeColor: "bg-[#d4af37]/15 dark:bg-[#d4af37]/20 text-[#855f10] dark:text-[#f3d987] border-[#d4af37]/35",
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
    badge: "Mind & Vagus Nerve",
    badgeColor: "bg-[#1b3b2b]/10 dark:bg-[#34d399]/15 text-[#1b3b2b] dark:text-[#34d399] border-[#1b3b2b]/20 dark:border-[#34d399]/30",
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
    badge: "Gentle Touch",
    badgeColor: "bg-[#d4af37]/15 dark:bg-[#d4af37]/15 text-[#855f10] dark:text-[#f3d987] border-[#d4af37]/35",
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
    <section id="treatments" className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative transition-colors duration-300">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#1b3b2b]/6 dark:bg-[#34d399]/6 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#d4af37]/8 dark:bg-[#d4af37]/6 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Integrative Medical Sanctuary Protocols</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Our Core Clinical <span className="font-editorial-italic sage-glow-text">Therapy Treatments</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            Every session at Wellness Therapy Centre is personally overseen by{" "}
            <strong className="text-[#1c1b18] dark:text-white">Dr. M. Shasath Begum, M.D(Acu.)</strong>, adhering to
            strict clinical sterilization standards and classical meridian wisdom.
          </p>
        </div>

        {/* Treatments Grid with Upgraded Sanctuary Cards */}
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
                className="group relative bg-white dark:bg-[#181715] hover:bg-[#fdfcf9] dark:hover:bg-[#1f1d1a] border border-[#1b3b2b]/10 dark:border-[#d4af37]/20 hover:border-[#d4af37]/60 dark:hover:border-[#d4af37]/50 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60 hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-2xl bg-[#f5f1e8] dark:bg-white/[0.06] group-hover:bg-[#1b3b2b] group-hover:text-white dark:group-hover:bg-[#d4af37] dark:group-hover:text-[#121110] text-[#1b3b2b] dark:text-[#34d399] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border ${t.badgeColor}`}
                    >
                      {t.badge}
                    </span>
                  </div>

                  {/* Title & Duration */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#1c1b18] dark:text-white group-hover:text-[#1b3b2b] dark:group-hover:text-[#f3d987] transition-colors mb-2">
                    {t.title}
                  </h3>

                  <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      {t.duration}
                    </span>
                    <span>•</span>
                    <span className="text-[#1b3b2b] dark:text-[#34d399] font-medium">In-Clinic Session</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    {t.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      Key Clinical Advantages:
                    </div>
                    {t.keyBenefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#1b3b2b] dark:text-[#34d399] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-5 border-t border-[#d4af37]/20 dark:border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => openBooking(t.id)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] dark:hover:bg-[#284f3c] text-[#fbf9f5] border border-[#d4af37]/35 flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current text-[#d4af37]" />
                    <span>Reserve Session via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#f5f1e8] dark:bg-[#161513] border border-[#d4af37]/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-white/[0.06] text-[#1b3b2b] dark:text-[#34d399] shrink-0 hidden sm:block border border-[#d4af37]/20">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-editorial text-lg sm:text-xl font-semibold text-[#1c1b18] dark:text-white">
                Not sure which clinical protocol suits your condition?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                Speak directly with Dr. M. Shasath Begum for a personal diagnostic evaluation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openBooking("General Wellness Consultation")}
              className="px-6 py-3 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] text-[#fbf9f5] border border-[#d4af37]/40 shadow-lg shadow-[#1b3b2b]/15 transition active:scale-95"
            >
              Consult Doctor Now
            </button>
            <a
              href="tel:+919740495548"
              className="px-5 py-3 rounded-xl text-xs font-medium bg-white/90 hover:bg-[#f5f1e8] dark:bg-[#1a1917] dark:hover:bg-[#22201d] text-[#1c1b18] dark:text-[#fbf9f5] border border-[#d4af37]/35 transition shadow-sm"
            >
              Call +91 9740495548
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
