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
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function HijamaSunnahPage() {
  const { openBooking } = useBooking();

  return (
    <div className="py-16 sm:py-24 bg-neutral-50 dark:bg-[#08080a] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/15 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-bold mb-3">
            <Flame className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Sacred Prophetic Sunnah & Modern Clinical Science</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            Clinical Hijama Therapy{" "}
            <span className="text-amber-600 dark:gold-glow-text">@ Sacred Sunnah Points</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 mt-4 leading-relaxed">
            Conducted by <strong className="text-neutral-900 dark:text-white">Dr. M. Shasath Begum, M.D(Acu.)</strong> in
            J.P. Nagar, Bangalore. Ensuring complete hygiene with 100% single-use disposable vacuum
            cups, gentle micro-incisions, and authentic meridian mapping.
          </p>
        </div>

        {/* Feature Grid with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 dark:border-amber-500/30 shadow-xl dark:shadow-2xl dark:shadow-amber-950/30 bg-white dark:bg-transparent">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/cupping-therapy.jpg"
                  alt="Clinical Hijama Cupping at Wellness Therapy Centre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl border border-white/[0.15] dark:border-white/[0.1] text-xs text-neutral-800 dark:text-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-white font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Medical-Grade Sterile Disposable Kits
                  </span>
                  <span className="text-amber-300 font-bold">Bangalore Clinic</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
              Why Hijama on Sunnah Points Produces Miraculous Results
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
              In traditional Unani and Prophetic medicine, the bodily fluids are prone to
              stagnation around major lymphatic and capillary confluences. Cellular waste,
              heavy metabolites, inflammatory cytokines, and aged unoxygenated erythrocytes accumulate
              beneath the dermal layers, creating chronic fatigue, headaches, and joint stiffness.
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
              By applying therapeutic negative vacuum pressure specifically over recognized
              Sunnah points, stagnant blood is drawn to the surface and cleanly removed via
              painless superficial micro-scratches, triggering an instantaneous surge of fresh
              oxygenated blood and vital Qi.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
                <div className="text-xs font-bold text-neutral-900 dark:text-white mb-0.5">Zero Scarring</div>
                <div className="text-[11px] text-neutral-500 dark:text-gray-400">Micro-scratches heal in 48-72 hrs</div>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06] shadow-sm dark:shadow-none">
                <div className="text-xs font-bold text-neutral-900 dark:text-white mb-0.5">Private Rooms</div>
                <div className="text-[11px] text-neutral-500 dark:text-gray-400">Dedicated female practitioner</div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Classical Sunnah Points Explained */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              The Primary <span className="text-amber-600 dark:gold-glow-text">Sunnah Points</span> Explained
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400 mt-2">
              Dr. M. Shasath Begum meticulously maps these anatomical landmarks for maximum
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
                className="p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-neutral-200 dark:border-white/[0.08] hover:border-amber-400/50 dark:hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <span className="text-xs font-extrabold text-amber-700 dark:text-amber-400 block tracking-widest uppercase mb-1">
                    {p.arabic}
                  </span>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-2">{p.title}</h4>
                  <div className="text-[11px] text-neutral-600 dark:text-gray-400 mb-3 bg-neutral-50 dark:bg-black/40 p-2 rounded-lg border border-neutral-200 dark:border-white/[0.04]">
                    <strong>Location:</strong> {p.location}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-gray-300 leading-relaxed">{p.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cupping Modalities Comparison Table */}
        <div className="mb-20 bg-white dark:bg-[#121218] border border-neutral-200 dark:border-white/[0.08] rounded-3xl p-4 sm:p-8 shadow-xl dark:shadow-none">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Cupping Modalities Available at Wellness Therapy Centre
          </h3>
          <div className="overflow-x-auto pb-2">
            <table className="w-full min-w-[540px] text-left text-xs text-neutral-700 dark:text-gray-300">
              <thead className="bg-neutral-100 dark:bg-[#171722] text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-white/[0.08]">
                <tr>
                  <th className="p-3.5 font-bold">Modality</th>
                  <th className="p-3.5 font-bold">Method</th>
                  <th className="p-3.5 font-bold">Primary Purpose</th>
                  <th className="p-3.5 font-bold">Ideal Patients</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/[0.06]">
                <tr>
                  <td className="p-3.5 font-bold text-amber-700 dark:text-amber-300">
                    Wet Hijama (Sunnah Cupping)
                  </td>
                  <td className="p-3.5">
                    Negative suction + microscopic scratches to draw out stagnant capillary blood
                  </td>
                  <td className="p-3.5">Deep bodily detox, blood purification & chronic headaches</td>
                  <td className="p-3.5">Adults seeking high-vitality detox & pain relief</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-emerald-700 dark:text-emerald-300">Dry Cupping</td>
                  <td className="p-3.5">
                    Vacuum suction without incisions; cups retained for 10-15 minutes
                  </td>
                  <td className="p-3.5">Myofascial release, tight muscles & spinal circulation</td>
                  <td className="p-3.5">Athletes, sensitive skin, or first-timers</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-rose-700 dark:text-rose-300">Fire Cupping (Glass)</td>
                  <td className="p-3.5">
                    Flame briefly heats glass cup interior to create soothing warm vacuum
                  </td>
                  <td className="p-3.5">
                    Expels internal 'Cold & Dampness', alleviates arthritis stiffness
                  </td>
                  <td className="p-3.5">Elderly patients & weather-sensitive joint pain</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-teal-700 dark:text-teal-300">Moving / Gliding Cupping</td>
                  <td className="p-3.5">
                    Herbal oils applied to back, cups smoothly moved along spinal erectors
                  </td>
                  <td className="p-3.5">Lymphatic drainage & full back muscle knotting</td>
                  <td className="p-3.5">Office workers with ergonomic postural strain</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-50 via-white to-amber-50/50 dark:from-amber-950/40 dark:via-[#151520] dark:to-black border border-amber-200 dark:border-amber-500/30 text-center space-y-5 shadow-xl dark:shadow-none">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
            Book Your Hijama (@ Sunnah Point) Session Today
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 max-w-xl mx-auto">
            Experience the revitalizing therapeutic power of authentic prophetic cupping with Dr.
            M. Shasath Begum at J.P. Nagar, Bangalore.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() =>
                openBooking("Hijama / Cupping Therapy (Wet/Dry/Fire)")
              }
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-amber-500 to-amber-600 text-white dark:bg-amber-400 dark:text-black shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book Hijama via WhatsApp (+91 9740495548)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
