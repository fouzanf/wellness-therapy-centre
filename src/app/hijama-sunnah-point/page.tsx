"use client";

import React from "react";
import Image from "next/image";
import {
  Flame,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Droplets,
  Heart,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Award,
  Clock,
  MapPin,
  Compass,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function HijamaSunnahPage() {
  const { openBooking } = useBooking();

  return (
    <div className="py-16 sm:py-24 bg-[#fbf9f5] dark:bg-[#121110] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#d4af37]/8 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1b3b2b]/6 dark:bg-[#34d399]/6 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Flame className="w-4 h-4 text-[#d4af37]" />
            <span>Sacred Prophetic Sunnah & Modern Clinical Science</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight leading-tight">
            Clinical Hijama Therapy{" "}
            <span className="font-editorial-italic champagne-glow-text">@ Sacred Sunnah Points</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed font-light">
            Conducted by <strong className="text-[#1c1b18] dark:text-white font-semibold">Dr. M. Shasath Begum, M.D(Acu.), PhD</strong> in
            J.P. Nagar, Bangalore. Ensuring complete hygiene with 100% single-use disposable vacuum
            cups, gentle micro-incisions, and authentic meridian mapping.
          </p>
        </div>

        {/* Feature Grid with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/35 shadow-xl dark:shadow-2xl bg-white dark:bg-[#181715]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/cupping-therapy.jpg"
                  alt="Clinical Hijama Cupping at Wellness Therapy Centre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-2xl border border-white/[0.15] dark:border-white/[0.1] text-xs text-neutral-800 dark:text-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                    Medical-Grade Sterile Disposable Kits
                  </span>
                  <span className="text-[#f3d987] font-semibold">Bangalore Clinic</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1c1b18] dark:text-white">
              Why Hijama on Sunnah Points Produces Exceptional Results
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              In traditional Unani and Prophetic medicine, the bodily fluids are prone to
              stagnation around major lymphatic and capillary confluences. Cellular waste,
              heavy metabolites, inflammatory cytokines, and aged unoxygenated erythrocytes accumulate
              beneath the dermal layers, creating chronic fatigue, headaches, and joint stiffness.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              By applying therapeutic negative vacuum pressure specifically over recognized
              Sunnah points, stagnant blood is drawn to the surface and cleanly removed via
              painless superficial micro-scratches, triggering an instantaneous surge of fresh
              oxygenated blood and vital Qi.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 shadow-sm">
                <div className="text-xs font-bold text-[#1c1b18] dark:text-white mb-0.5">Zero Scarring</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Micro-scratches heal in 48-72 hrs</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 shadow-sm">
                <div className="text-xs font-bold text-[#1c1b18] dark:text-white mb-0.5">Private Rooms</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Dedicated female practitioner</div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Classical Sunnah Points Explained */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1c1b18] dark:text-white">
              The Primary <span className="font-editorial-italic champagne-glow-text">Sunnah Points</span> Explained
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 font-light">
              Dr. M. Shasath Begum, PhD meticulously maps these anatomical landmarks for maximum
              therapeutic efficacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                arabic: "Al-Kahil",
                title: "Upper Thoracic Center",
                location: "Between the shoulder blades (7th Cervical / 1st Thoracic)",
                benefit:
                  "The 'Master Detox Point' of the human body. Relieves upper back stiffness, cleanses lymphatic ducts, and reduces whole-body fatigue.",
              },
              {
                arabic: "Al-Akhda'ain",
                title: "Bilateral Neck Veins",
                location: "Both sides of the posterior neck below the skull base",
                benefit:
                  "Crucial for chronic migraines, tension headaches, vertigo, eye strain, and ear tinnitus caused by congested cervical circulation.",
              },
              {
                arabic: "Al-Hammah / Yafookh",
                title: "Cranial Vertex Point",
                location: "Crown of the head / Governor Vessel channel",
                benefit:
                  "Neurological reset for heavy mental fog, chronic stress, depressive fatigue, and sinus drainage.",
              },
              {
                arabic: "Al-Qatan & Al-Warik",
                title: "Lumbar & Hip Joints",
                location: "Lower back lumbar region and lateral hip gluteal points",
                benefit:
                  "Targeted decompression for severe Sciatica, lower back disc bulging, numbness down legs, and kidney stagnation.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-sm dark:shadow-md"
              >
                <div>
                  <span className="text-xs font-semibold text-[#855f10] dark:text-[#f3d987] block tracking-widest uppercase mb-1">
                    {p.arabic}
                  </span>
                  <h4 className="font-editorial text-base font-semibold text-[#1c1b18] dark:text-white mb-2">{p.title}</h4>
                  <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mb-3 bg-[#f8f5ee] dark:bg-[#141311] p-2 rounded-xl border border-[#d4af37]/20">
                    <strong className="text-[#1c1b18] dark:text-white">Location:</strong> {p.location}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">{p.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cupping Modalities Comparison Table */}
        <div className="mb-20 bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#1c1b18] dark:text-white mb-4">
            Cupping Modalities Available at Wellness Therapy Centre
          </h3>
          <div className="overflow-x-auto pb-2">
            <table className="w-full min-w-[540px] text-left text-xs text-neutral-700 dark:text-neutral-300">
              <thead className="bg-[#f8f5ee] dark:bg-[#141311] text-[#1c1b18] dark:text-white border-b border-[#d4af37]/20">
                <tr>
                  <th className="p-3.5 font-semibold">Modality</th>
                  <th className="p-3.5 font-semibold">Method</th>
                  <th className="p-3.5 font-semibold">Primary Purpose</th>
                  <th className="p-3.5 font-semibold">Ideal Patients</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1b3b2b]/5 dark:divide-white/[0.06]">
                <tr>
                  <td className="p-3.5 font-semibold text-[#855f10] dark:text-[#f3d987]">
                    Wet Hijama (Sunnah Cupping)
                  </td>
                  <td className="p-3.5 font-light">
                    Negative suction + microscopic scratches to draw out stagnant capillary blood
                  </td>
                  <td className="p-3.5 font-light">Deep bodily detox, blood purification & chronic headaches</td>
                  <td className="p-3.5 font-light">Adults seeking high-vitality detox & pain relief</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#1b3b2b] dark:text-[#34d399]">Dry Cupping</td>
                  <td className="p-3.5 font-light">
                    Vacuum suction without incisions; cups retained for 10-15 minutes
                  </td>
                  <td className="p-3.5 font-light">Myofascial release, tight muscles & spinal circulation</td>
                  <td className="p-3.5 font-light">Athletes, sensitive skin, or first-timers</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#855f10] dark:text-[#f3d987]">Fire Cupping (Glass)</td>
                  <td className="p-3.5 font-light">
                    Flame briefly heats glass cup interior to create soothing warm vacuum
                  </td>
                  <td className="p-3.5 font-light">
                    Expels internal 'Cold & Dampness', alleviates arthritis stiffness
                  </td>
                  <td className="p-3.5 font-light">Elderly patients & weather-sensitive joint pain</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-[#1b3b2b] dark:text-[#34d399]">Moving / Gliding Cupping</td>
                  <td className="p-3.5 font-light">
                    Herbal oils applied to back, cups smoothly moved along spinal erectors
                  </td>
                  <td className="p-3.5 font-light">Lymphatic drainage & full back muscle knotting</td>
                  <td className="p-3.5 font-light">Office workers with ergonomic postural strain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#181715] border border-[#d4af37]/35 text-center space-y-5 shadow-xl">
          <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1c1b18] dark:text-white">
            Book Your Hijama (@ Sunnah Point) Session Today
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto font-light">
            Experience the revitalizing therapeutic power of authentic prophetic cupping with Dr.
            M. Shasath Begum, PhD at J.P. Nagar, Bangalore.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() =>
                openBooking("Hijama / Cupping Therapy (Wet/Dry/Fire)")
              }
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-xs bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/40 shadow-lg shadow-[#1b3b2b]/15 flex items-center justify-center gap-2 transition active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
