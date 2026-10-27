"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, HeartPulse, Activity, Flame } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  condition: string;
  quote: string;
  reliefMetric: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Syed Mansoor Ahmed",
    location: "J.P. Nagar 2nd Phase, Bangalore",
    treatment: "Chronic Pain & Acupressure",
    condition: "Severe L4-L5 Sciatica & Disc Bulge",
    quote:
      "I was advised spinal surgery by an orthopedic surgeon after 8 months of agony. A family friend recommended Dr. Shasath Begum, PhD. Within just 4 sessions of acupuncture and targeted cupping, my shooting leg pain reduced by 90%. I am now back to my daily morning walks without painkillers!",
    reliefMetric: "90% Pain Relief in 4 Sessions",
    rating: 5,
  },
  {
    name: "Dr. Ananya Rao",
    location: "Jayanagar, Bangalore",
    treatment: "Women's Health & PCOD Protocol",
    condition: "PCOD & Chronic Fatigue",
    quote:
      "As a practicing dentist, my stress levels were high and my menstrual cycles were irregular for over a year and a half. Dr. Shasath Begum, PhD’s holistic acupuncture sessions not only restored my natural cycle within two months, but also cleared my recurring brain fog and skin breakouts.",
    reliefMetric: "Natural Cycle Restored in 60 Days",
    rating: 5,
  },
  {
    name: "Mohammed Farhan",
    location: "BTM Layout 2nd Stage, Bangalore",
    treatment: "Hijama @ Sunnah Point",
    condition: "Chronic Migraines & Cervical Tightness",
    quote:
      "I had Hijama done on the Sunnah points (Al-Kahil and neck points). The clinic hygiene is top-notch — all sterile sealed single-use cups opened in front of me. The procedure was completely gentle. My constant throbbing headaches disappeared that very evening. Truly blessed healing hands.",
    reliefMetric: "100% Sterile & Immediate Relief",
    rating: 5,
  },
  {
    name: "Lakshmi Narayanan",
    location: "Banashankari, Bangalore",
    treatment: "Acupuncture & Acupressure",
    condition: "Bilateral Knee Osteoarthritis",
    quote:
      "Climbing stairs in my home had become impossible due to severe knee arthritis. Dr. Begum’s precision meridian needles relieved the swelling and joint stiffness dramatically. I can now climb stairs comfortably without knee braces.",
    reliefMetric: "Regained Independent Mobility",
    rating: 5,
  },
  {
    name: "Ayesha Siddiqua",
    location: "Koramangala, Bangalore",
    treatment: "Stress & Insomnia Relief",
    condition: "Chronic Anxiety & Severe Sleep Insomnia",
    quote:
      "I hadn't had more than 3 hours of unbroken sleep in months due to work burnout. The calming therapy session with Dr. Begum felt like my nervous system had been gently reset. I slept deeply for 8 hours straight that night. Cannot recommend her enough!",
    reliefMetric: "Natural Deep Sleep Restored",
    rating: 5,
  },
  {
    name: "Girish K.",
    location: "HSR Layout, Bangalore",
    treatment: "Chronic Pain Management",
    condition: "Frozen Shoulder & Trapezius Spasm",
    quote:
      "I could not raise my right arm above shoulder level for 5 months. After 3 sessions of combined acupuncture and dry cupping, my range of motion is nearly 100% restored. Professional, clean, and extremely knowledgeable doctor.",
    reliefMetric: "Full Range-of-Motion Restored",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative overflow-hidden transition-colors duration-300">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/6 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
            <span>Verified Patient Outcomes</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Real Recovery Stories From{" "}
            <span className="font-editorial-italic sage-glow-text">Bangalore Patients</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed font-light">
            Read how individuals across South Bangalore reclaimed their active, pain-free lives
            through natural acupuncture and authentic Hijama cupping.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white dark:bg-[#181715] hover:border-[#d4af37]/60 border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-xl"
            >
              <div>
                {/* Header: Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#d4af37] text-[#d4af37]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4af37]/30" />
                </div>

                {/* Condition Pill */}
                <div className="mb-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] text-[#1b3b2b] dark:text-[#f3d987] border border-[#d4af37]/30">
                    {t.condition}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6 font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Info: Relief metric & Patient */}
              <div className="pt-4 border-t border-[#1b3b2b]/10 dark:border-white/[0.06] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#855f10] dark:text-[#f3d987]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{t.reliefMetric}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div>
                    <div className="font-editorial font-semibold text-[#1c1b18] dark:text-white">{t.name}</div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">{t.location}</div>
                  </div>
                  <span className="text-[10px] text-[#1b3b2b] dark:text-[#34d399] font-medium">
                    {t.treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
