"use client";

import React from "react";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-[#0a0a0d] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-3">
            <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Practitioner Profile & Clinical Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Meet <span className="text-emerald-600 dark:emerald-glow-text">Dr. M. Shasath Begum</span>, M.D(Acu.)
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mt-4 leading-relaxed">
            Senior Acupuncturist, Acupressure Master, and Certified Hijama Specialist serving South
            Bangalore with integrity, medical precision, and natural holistic remedies for over 15
            years.
          </p>
        </div>

        {/* Doctor Main Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 shadow-xl dark:shadow-2xl dark:shadow-emerald-950/40 bg-white dark:bg-[#121218]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/doctor-photos.jpg"
                  alt="Dr. M. Shasath Begum, M.D(Acu.) consulting at Wellness Therapy Centre J.P. Nagar Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3.5 rounded-xl border border-white/[0.15] dark:border-white/[0.08] text-xs">
                  <div className="font-bold text-neutral-900 dark:text-white">Dr. M. Shasath Begum, M.D(Acu.)</div>
                  <div className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">
                    Chief Physician • Wellness Therapy Centre Bangalore
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-500/20">
              <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>15+ Years Clinical Practice In Bangalore</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white leading-tight">
              A Passion For Restoring Health At The Source, Not Just Masking Symptoms
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
              Dr. M. Shasath Begum graduated with an M.D. in Acupuncture, mastering the intricate
              energy meridian grids, pulse diagnostic techniques, and bio-electric pathways of the
              human body. Over her fifteen years of dedicated service in Bangalore, she has healed
              patients suffering from severe chronic debilitating conditions who had exhausted
              conventional pharmaceutical options.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
              Her clinic in J.P. Nagar, <strong className="text-neutral-900 dark:text-white">Wellness Therapy Centre</strong>,
              is widely recognized for its high medical standards, compassionate patient empathy,
              and private comfortable setting. Women from all across Bangalore consult with her for
              gentle PCOD regulation, fertility meridian optimization, and natural pain relief.
            </p>

            {/* Quick credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#13131c] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-2.5 shadow-sm dark:shadow-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs text-neutral-800 dark:text-white font-medium">
                  M.D. in Clinical Acupuncture
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#13131c] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-2.5 shadow-sm dark:shadow-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs text-neutral-800 dark:text-white font-medium">
                  Hijama (@ Sunnah Point) Specialist
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#13131c] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-2.5 shadow-sm dark:shadow-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs text-neutral-800 dark:text-white font-medium">
                  Acupressure & Reflexology Authority
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#13131c] border border-neutral-200 dark:border-white/[0.06] flex items-center gap-2.5 shadow-sm dark:shadow-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs text-neutral-800 dark:text-white font-medium">
                  Certified Safe Clinical Hygiene
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Sanctuary Feature */}
        <div className="mb-20 bg-neutral-50/80 dark:bg-[#121218] border border-neutral-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-lg dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
                <span>Modern Tranquil Sanctuary</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                Healing in an Environment of Pure Serenity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
                We believe that healing begins the moment you step through our doors. Designed with
                soothing dark luxury aesthetics, ambient emerald lighting, ergonomic therapy beds,
                and spotless clinical cleanliness, Wellness Therapy Centre offers a tranquil retreat
                away from the noise of Bangalore.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="px-6 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-black shadow-lg shadow-emerald-500/25 transition active:scale-95"
                >
                  Book Your Clinic Visit
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 shadow-md">
                <Image
                  src="/images/clinic-sanctuary-interior.jpg"
                  alt="Wellness Therapy Centre Consultation and Sanctuary Interior in J.P. Nagar Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Official Degrees & Certifications Section */}
        <div className="mb-20 bg-neutral-50/80 dark:bg-[#121218] border border-neutral-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-lg dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 shadow-md">
                <Image
                  src="/images/doctor-certificates.jpg"
                  alt="Framed Board of Doctor Degrees, Medicina Alternativa, and Sujok Certifications"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
                <span>Verified Qualifications</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                Official Clinical Accreditations & Licensures
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
                Every therapy session at Wellness Therapy Centre is backed by Dr. M. Shasath Begum&apos;s
                rigorous medical degrees in Complementary Medicine, Sujok Acupressure, and clinical
                Panchakarma techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Outdoor Entrance & Signboard Landmark */}
        <div className="mb-12 bg-neutral-50/80 dark:bg-[#121218] border border-neutral-200 dark:border-emerald-500/20 rounded-3xl p-6 sm:p-10 shadow-lg dark:shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
                <span>J.P. Nagar Landmark Signage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                Find Our Clinic in J.P. Nagar Bangalore
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
                When arriving at Gangadhar Nagar, look for our prominent outdoor green and white bilingual
                board with Kannada and English text: <strong className="text-neutral-900 dark:text-white">&ldquo;ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್ / WELLNESS THERAPY CENTRE&rdquo;</strong>.
              </p>
              <p className="text-xs text-neutral-500 dark:text-gray-400">
                No. 11, 1st Main, Gangadhar Nagar, J.P. Nagar, Bangalore – 560078. Open all 7 days from 9:00 AM to 8:00 PM.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 shadow-md">
                <Image
                  src="/images/clinic-board-outside.jpg"
                  alt="Wellness Therapy Centre Outdoor Sign Board in Kannada & English"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
