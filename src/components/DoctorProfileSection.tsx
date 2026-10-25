"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function DoctorProfileSection() {
  const { openBooking } = useBooking();

  return (
    <section id="about" className="py-24 bg-neutral-50/60 dark:bg-[#0a0a0d] relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 shadow-xl dark:shadow-2xl dark:shadow-emerald-950/40 bg-white dark:bg-[#121218]">
              {/* Photo of Dr. Begum at her clinic desk */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/doctor-photos.jpg"
                  alt="Dr. M. Shasath Begum, M.D(Acu.) - Senior Holistic Physician at Wellness Therapy Centre"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#0e0e14] via-transparent to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-2xl border border-white/[0.15] dark:border-white/[0.1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-900 dark:text-white">15+ Years Clinical Practice</div>
                      <div className="text-[11px] text-neutral-600 dark:text-gray-400">J.P. Nagar, Bangalore</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400">10,000+</div>
                    <div className="text-[10px] text-neutral-600 dark:text-gray-400">Patients Healed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Philosophy Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Senior Holistic Physician</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Dr. M. Shasath Begum,{" "}
                <span className="text-emerald-600 dark:emerald-glow-text">M.D(Acu.)</span>
              </h2>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mt-1">
                Founder & Chief Holistic Consultant • Wellness Therapy Centre Bangalore
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-300 leading-relaxed font-normal">
              With over 15 years of dedicated clinical practice, Dr. M. Shasath Begum is one
              of Bangalore’s foremost authorities in clinical acupuncture, precision acupressure,
              and authentic Hijama (@ Sunnah Point). Her healing philosophy integrates classical
              meridian diagnosis with deep physiological empathy to cure the root origin of chronic
              ailments without reliance on recurring synthetic drugs.
            </p>

            {/* Core Credentials & Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                {
                  title: "M.D. in Clinical Acupuncture",
                  desc: "Advanced post-graduate clinical mastery in meridian channel stimulation.",
                },
                {
                  title: "Certified Hijama Specialist",
                  desc: "Mastery of prophetic Sunnah points & sterile vacuum extraction.",
                },
                {
                  title: "Women's Hormonal Care Expert",
                  desc: "Dedicated clinical protocols for PCOD, thyroid imbalances & menstrual health.",
                },
                {
                  title: "Chronic Pain Interventions",
                  desc: "Proven clinical success in resolving severe Sciatica & Cervical Spondylosis.",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-white dark:bg-[#13131c] border border-neutral-200 dark:border-white/[0.06] space-y-1 shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{c.title}</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-gray-400 leading-relaxed pl-6">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Doctor quote */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border-l-4 border-emerald-600 dark:border-emerald-400 text-xs sm:text-sm text-neutral-700 dark:text-gray-300 italic leading-relaxed">
              &ldquo;The human body holds an extraordinary capacity to self-repair once meridian
              blockages are cleared and circulation is restored. True healing begins when we
              listen to the body rather than silencing its distress signals with temporary pills.&rdquo;
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => openBooking("General Wellness Consultation")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white dark:text-black shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Book 1-on-1 Consultation</span>
              </button>

              <a
                href="tel:+919740495548"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-white border border-neutral-300 dark:border-white/[0.1] flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Call Clinic Desk (+91 9740495548)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3. PROFESSIONAL CREDENTIALS & CERTIFICATIONS BOARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121218] border border-neutral-200 dark:border-emerald-500/20 shadow-xl dark:shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Certificates Photo Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 shadow-md group">
                <Image
                  src="/images/doctor-certificates.jpg"
                  alt="Official Degrees and Certifications Board of Dr. M. Shasath Begum, M.D(Acu.)"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 glass-panel p-2.5 rounded-xl border border-white/[0.1] text-center">
                  <span className="text-[11px] font-bold text-emerald-300 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Authentic Framed Clinic Certificates Board
                  </span>
                </div>
              </div>
            </div>

            {/* Right Information & Accreditation Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-500/20">
                <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Verified Qualifications & Licensures</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
                Official Clinical Accreditations of <span className="text-emerald-600 dark:emerald-glow-text">Dr. M. Shasath Begum</span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 leading-relaxed">
                Displaying Dr. Begum&apos;s verified postgraduate degrees and clinical certifications, officially recognized in complementary and alternative medicine:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.06]">
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">M.D. in Clinical Acupuncture</div>
                  <div className="text-[11px] text-neutral-600 dark:text-gray-400 mt-0.5">Medicina Alternativa & Open International University</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.06]">
                  <div className="text-xs font-bold text-amber-700 dark:text-amber-300">Certified Sujok Acupressure Master</div>
                  <div className="text-[11px] text-neutral-600 dark:text-gray-400 mt-0.5">International Sujok Association Standards</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.06]">
                  <div className="text-xs font-bold text-teal-700 dark:text-teal-300">Panchakarma Certified Technician</div>
                  <div className="text-[11px] text-neutral-600 dark:text-gray-400 mt-0.5">Classical Detoxification & Rejuvenation Therapy</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.06]">
                  <div className="text-xs font-bold text-rose-700 dark:text-rose-300">Certified Hijama Cupping Practitioner</div>
                  <div className="text-[11px] text-neutral-600 dark:text-gray-400 mt-0.5">Authentic Sunnah Point & Surgical Sterility Protocols</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
