"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageSquare,
  Award,
  Maximize2,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface ClinicRoom {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  sterilityStandard: string;
  bookingService: string;
}

const CLINIC_ROOMS: ClinicRoom[] = [
  {
    id: "room-1",
    name: "Dr. Begum's Private Consultation Desk",
    category: "Consultation & Pulse Evaluation",
    image: "/images/doctor-photos.jpg",
    description:
      "A peaceful, confidential consultation chamber where Dr. M. Shasath Begum conducts in-depth pulse diagnostics, tongue inspection, and meridian constitutional evaluations in total privacy.",
    features: [
      "100% Private, 1-on-1 Female Doctor Setting",
      "Traditional TCM Meridian & Anatomical Mapping",
      "Comprehensive Lifestyle & Nutritional Prescriptions",
    ],
    sterilityStandard: "Confidential Medical Sanctuary",
    bookingService: "General Wellness Consultation",
  },
  {
    id: "room-2",
    name: "Sanctuary Consultation & Treatment Interior",
    category: "Tranquil Clinical Sanctuary",
    image: "/images/clinic-sanctuary-interior.jpg",
    description:
      "A serene and spotless clinical interior featuring consultation desk, therapy beds, and live natural greenery designed to induce instant calming of nervous tension.",
    features: [
      "Spotless Clinical Cleanliness & Zen Ambience",
      "Ergonomic Memory-Foam Therapy Beds",
      "Private Partitioned Consultation Environment",
    ],
    sterilityStandard: "Tranquil Clinical Sanctuary",
    bookingService: "Acupuncture & Acupressure Session",
  },
  {
    id: "room-3",
    name: "Therapy & Acupressure Procedure Room",
    category: "Precision Needle Decompression",
    image: "/images/clinic-treatment-room.jpg",
    description:
      "Dedicated treatment suite equipped for acupuncture and acupressure therapy. Features sanitized therapy beds with sterile single-use disposable protective sheets.",
    features: [
      "Ultra-fine Sterile Japanese Single-Use Needles",
      "Single-Use Hygienic Protective Bed Linens",
      "Targeted Infrared Meridian Warming Therapy",
    ],
    sterilityStandard: "Single-Use Sterility Protocol",
    bookingService: "Acupuncture & Acupressure Session",
  },
  {
    id: "room-4",
    name: "Hijama Sterile Procedure Suite (@ Sunnah Point)",
    category: "Clinical Prophetic Cupping",
    image: "/images/cupping-therapy.jpg",
    description:
      "A hospital-grade sanitized procedure room equipped for certified wet, dry, flash, and fire cupping. Every single vacuum cup and surgical micro-lancet is unboxed fresh before each patient.",
    features: [
      "100% Single-Use Medical Vacuum Cups & Lancets",
      "Authentic Sunnah Point Anatomy (Al-Kahil & Al-Akhda'ain)",
      "Strict Biohazard Waste Disposal Compliance",
    ],
    sterilityStandard: "Hospital-Grade Surgical Sterility",
    bookingService: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
  },
  {
    id: "room-5",
    name: "Official Credentials & Accreditations Wall",
    category: "Board Qualifications & Degrees",
    image: "/images/doctor-certificates.jpg",
    description:
      "Dr. M. Shasath Begum's framed board of qualifications, including M.D. in Acupuncture, Medicina Alternativa, Sujok, and Panchakarma certifications validating her 15+ years of clinical authority.",
    features: [
      "M.D. in Clinical Acupuncture (Medicina Alternativa)",
      "Certified Sujok Acupressure Association Master",
      "Certified Panchakarma Detoxification Technician",
    ],
    sterilityStandard: "Officially Certified Practitioner",
    bookingService: "General Wellness Consultation",
  },
  {
    id: "room-6",
    name: "Clinic Street Entrance & Bilingual Signboard",
    category: "J.P. Nagar Landmark Signage",
    image: "/images/clinic-board-outside.jpg",
    description:
      "Our outdoor green and white signage in Kannada & English ('ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್ / WELLNESS THERAPY CENTRE'), making it easy to identify the clinic building when arriving at Gangadhar Nagar, J.P. Nagar Bangalore.",
    features: [
      "Prominent Bilingual Kannada & English Sign Board",
      "No. 11, 1st Main, Gangadhar Nagar Street Entrance",
      "Convenient Patient Drop-Off & Vehicle Parking",
    ],
    sterilityStandard: "Easily Accessible Clinic Entrance",
    bookingService: "General Wellness Consultation",
  },
];

export default function ClinicTourWheel() {
  const { openBooking } = useBooking();
  const [activeIdx, setActiveIdx] = useState(0);

  const current = CLINIC_ROOMS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CLINIC_ROOMS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CLINIC_ROOMS.length) % CLINIC_ROOMS.length);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0d] relative overflow-hidden transition-colors duration-300">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Interactive 3D Virtual Clinic Tour</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Step Inside Our{" "}
            <span className="text-emerald-600 dark:emerald-glow-text">Bangalore Healing Sanctuary</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mt-4 leading-relaxed">
            Tour the sterile, luxurious clinical suites of Wellness Therapy Centre in J.P. Nagar,
            custom-crafted for serene relaxation and painless holistic healing.
          </p>
        </div>

        {/* Room Navigation Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CLINIC_ROOMS.map((room, idx) => (
            <button
              key={room.id}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeIdx === idx
                  ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-black shadow-lg shadow-emerald-500/25"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-[#14141c] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#1a1a24] border border-neutral-200 dark:border-white/[0.06]"
              }`}
            >
              {room.category}
            </button>
          ))}
        </div>

        {/* Main Interactive Room Showcase Card */}
        <div className="relative bg-neutral-50/80 dark:bg-[#111118] border border-neutral-200 dark:border-emerald-500/30 rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Photo View */}
            <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[460px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 dark:from-[#111118] via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-50 dark:lg:to-[#111118]" />

                  {/* Room Index Indicator */}
                  <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-xl text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>
                      Space {activeIdx + 1} of {CLINIC_ROOMS.length}
                    </span>
                  </div>

                  {/* Sterility Pill */}
                  <div className="absolute bottom-4 left-4 bg-emerald-900/90 dark:bg-emerald-950/80 backdrop-blur-md border border-emerald-400/40 dark:border-emerald-500/40 px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-200 dark:text-emerald-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{current.sterilityStandard}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Information & Booking Panel */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {current.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1 leading-snug">
                      {current.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-gray-400 block">
                      Suite Features & Amenities:
                    </span>
                    {current.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-gray-300"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons & Carousel Arrows */}
              <div className="pt-6 border-t border-neutral-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => openBooking(current.bookingService)}
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Book This Room&apos;s Treatment</span>
                </button>

                {/* Arrow Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous clinic room"
                    className="p-2.5 rounded-xl bg-neutral-200/70 hover:bg-neutral-200 text-neutral-800 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-white transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next clinic room"
                    className="p-2.5 rounded-xl bg-neutral-200/70 hover:bg-neutral-200 text-neutral-800 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:text-white transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
