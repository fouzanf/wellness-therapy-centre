"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Activity,
  Flame,
  Award,
  Compass,
  MapPin,
  Stethoscope,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface ClinicRoom {
  id: string;
  name: string;
  category: string;
  tabLabel: string;
  image: string;
  fallbackImage: string;
  description: string;
  features: string[];
  sterilityStandard: string;
  bookingService: string;
}

const CLINIC_ROOMS: ClinicRoom[] = [
  {
    id: "consultation-pulse",
    name: "Consultation & Pulse Evaluation",
    category: "Diagnostic Suite",
    tabLabel: "1. Consultation & Pulse",
    image: "/images/doctor-photos.jpg",
    fallbackImage: "/images/dr-shasath-begum.jpg",
    description:
      "Private, sound-insulated consultation desk where Dr. M. Shasath Begum conducts comprehensive pulse assessments, meridian palpation, and detailed medical history evaluations.",
    features: [
      "Confidential 1-on-1 private doctor consultation",
      "Traditional meridian diagnostic point evaluation",
      "Customized holistic herbal & lifestyle roadmap",
    ],
    sterilityStandard: "Sanitized clinical suite between every patient",
    bookingService: "General Wellness Consultation",
  },
  {
    id: "clinical-sanctuary",
    name: "Tranquil Clinical Sanctuary",
    category: "Sanctuary Interior",
    tabLabel: "2. Clinical Sanctuary",
    image: "/images/clinic-sanctuary-interior.jpg",
    fallbackImage: "/images/clinic-sanctuary.jpg",
    description:
      "Designed specifically for deep nervous system sedation. Calming ambient lighting, therapeutic warmth, and ergonomic padded medical plinths provide zero-gravity relaxation.",
    features: [
      "Tranquil organic aesthetic designed for stress decompression",
      "Subtle 432Hz healing soundscape resonance",
      "Ergonomic memory-foam clinical therapy plinths",
    ],
    sterilityStandard: "HEPA air filtration & constant UV surface purification",
    bookingService: "Stress, Depression & Anxiety Relief",
  },
  {
    id: "needle-decompression",
    name: "Precision Needle Decompression",
    category: "Acupuncture Suite",
    tabLabel: "3. Needle Decompression",
    image: "/images/clinic-treatment-room.jpg",
    fallbackImage: "/images/clinic-1.jpg",
    description:
      "Dedicated clinical acupuncture suite equipped for precision bio-electric stimulation, trigger point release, and sciatica nerve decompression under sterile conditions.",
    features: [
      "Sterile single-use sealed Japanese micro-needles",
      "Far-infrared soothing therapeutic heat lamps",
      "Private partition curtains ensuring complete patient dignity",
    ],
    sterilityStandard: "100% single-use disposable needle protocol & clinical autoclave",
    bookingService: "Acupuncture & Acupressure Session",
  },
  {
    id: "prophetic-cupping",
    name: "Clinical Prophetic Cupping",
    category: "Hijama @ Sunnah Point",
    tabLabel: "4. Prophetic Cupping",
    image: "/images/cupping-therapy.jpg",
    fallbackImage: "/images/clinic-sanctuary.jpg",
    description:
      "A clinical-grade procedure suite adhering to hospital sterilization protocols for wet, dry, and fire cupping therapy. Complete privacy guaranteed for female patients.",
    features: [
      "100% single-use disposable vacuum cups and surgical lancets",
      "Classical Sunnah Point anatomical mapping (Al-Kahil & Al-Akhda'ain)",
      "Experienced female physician & attendants for complete privacy",
    ],
    sterilityStandard: "Hospital-grade sterile vacuum protocol & biomedical waste management",
    bookingService: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
  },
  {
    id: "board-qualifications",
    name: "Board Qualifications & Degrees",
    category: "Clinical Licensures",
    tabLabel: "5. Board Qualifications",
    image: "/images/doctor-certificates.jpg",
    fallbackImage: "/images/Doctor certificates.jpg",
    description:
      "Displaying Dr. M. Shasath Begum's official M.D. in Acupuncture, Medicina Alternativa, and Sujok clinical certifications recognized across 15+ years of verified medical practice.",
    features: [
      "M.D. in Clinical Acupuncture & Acupressure licensures",
      "Certified Hijama Cupping practitioner accreditations",
      "15+ years of documented healing records across South Bangalore",
    ],
    sterilityStandard: "Certified medical protocols & practitioner registration",
    bookingService: "General Wellness Consultation",
  },
  {
    id: "landmark-signage",
    name: "J.P. Nagar Landmark Signage",
    category: "Clinic Entrance & Street Sign",
    tabLabel: "6. Landmark Signage",
    image: "/images/clinic-board-outside.jpg",
    fallbackImage: "/images/Clinic board outside.jpg",
    description:
      "Outdoor landmark entrance on Gangadhar Nagar 1st Main Road, J.P. Nagar. Easily recognizable green & white bilingual signage in Kannada and English welcoming patients.",
    features: [
      "Conveniently located on Gangadhar Nagar Main Road",
      "Dedicated patient parking directly in front of the clinic",
      "Easily accessible from Kanakapura Road & Outer Ring Road",
    ],
    sterilityStandard: "Spotless clinic entrance & step-free patient accessibility",
    bookingService: "General Wellness Consultation",
  },
];

export default function ClinicTourWheel() {
  const { openBooking } = useBooking();
  const [activeIdx, setActiveIdx] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const current = CLINIC_ROOMS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CLINIC_ROOMS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CLINIC_ROOMS.length) % CLINIC_ROOMS.length);
  };

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative overflow-hidden transition-colors duration-300">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1b3b2b]/6 dark:bg-[#34d399]/6 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#d4af37]/6 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Interactive Virtual Sanctuary Tour • 6 Clinical Suites</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Step Inside Our{" "}
            <span className="font-editorial-italic sage-glow-text">Bangalore Healing Sanctuary</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed font-light">
            Tour the sterile, luxurious clinical suites of Wellness Therapy Centre in J.P. Nagar,
            custom-crafted for serene relaxation, diagnostic precision, and painless holistic healing.
          </p>
        </div>

        {/* 6 Room Navigation Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {CLINIC_ROOMS.map((room, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={room.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1b3b2b] text-[#fbf9f5] dark:bg-[#1f3f2f] border border-[#d4af37]/50 shadow-lg shadow-[#1b3b2b]/15 ring-1 ring-[#d4af37]/40"
                    : "bg-white/90 hover:bg-[#f5f1e8] text-neutral-700 dark:bg-[#181715] dark:text-neutral-300 dark:hover:text-white dark:hover:bg-[#201e1b] border border-[#1b3b2b]/10 dark:border-white/[0.06]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-[#d4af37]" : "bg-neutral-400 dark:bg-neutral-600"
                  }`}
                />
                <span>{room.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Room Showcase Card */}
        <div className="relative bg-white dark:bg-[#181715] border border-[#d4af37]/35 dark:border-[#d4af37]/25 rounded-3xl overflow-hidden shadow-2xl shadow-[#1b3b2b]/10 dark:shadow-black/75">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Photo View with Guaranteed Height & Fallback */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[460px] lg:min-h-[520px] w-full overflow-hidden bg-[#f4efe4] dark:bg-[#121110]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={failedImages[current.id] ? current.fallbackImage : current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority={activeIdx === 0}
                    onError={() => handleImageError(current.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#181715] via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-white dark:lg:to-[#181715]" />

                  {/* Room Index Indicator */}
                  <div className="absolute top-4 left-4 glass-panel px-3.5 py-2 rounded-2xl text-xs font-semibold text-[#1c1b18] dark:text-white flex items-center gap-2 border border-[#d4af37]/35 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping" />
                    <span>
                      Sanctuary Space {activeIdx + 1} of {CLINIC_ROOMS.length}
                    </span>
                  </div>

                  {/* Sterility Pill */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#1b3b2b]/95 dark:bg-[#121110]/95 backdrop-blur-md border border-[#d4af37]/45 px-3.5 py-2 rounded-2xl text-xs font-semibold text-[#fbf9f5] flex items-center gap-2 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="truncate">{current.sterilityStandard}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Information & Booking Panel */}
            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6 bg-[#fcfbf9] dark:bg-[#161513]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/30 text-[10px] font-bold uppercase tracking-wider text-[#855f10] dark:text-[#f3d987] mb-2">
                      <span>{current.category}</span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1c1b18] dark:text-white leading-snug">
                      {current.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                    {current.description}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                      Suite Features & Amenities:
                    </span>
                    {current.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons & Carousel Arrows */}
              <div className="pt-6 border-t border-[#d4af37]/20 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => openBooking(current.bookingService)}
                  className="flex-1 py-3.5 px-4 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/45 shadow-lg shadow-[#1b3b2b]/15 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Reserve Treatment in This Suite</span>
                </button>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous clinic space"
                    className="p-2.5 rounded-xl bg-white hover:bg-[#f5f1e8] text-neutral-800 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-white border border-[#d4af37]/25 transition"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#d4af37]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next clinic space"
                    className="p-2.5 rounded-xl bg-white hover:bg-[#f5f1e8] text-neutral-800 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-white border border-[#d4af37]/25 transition"
                  >
                    <ChevronRight className="w-4 h-4 text-[#d4af37]" />
                  </button>
                </div>
              </div>

              {/* 6 Thumbnail Dots */}
              <div className="flex items-center justify-center gap-2 pt-2">
                {CLINIC_ROOMS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Jump to tour item ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      activeIdx === idx
                        ? "w-8 bg-[#1b3b2b] dark:bg-[#34d399]"
                        : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-[#d4af37]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
