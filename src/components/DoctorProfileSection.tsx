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
    <section id="about" className="py-24 bg-[#f5f1e8]/60 dark:bg-[#121110] relative overflow-hidden transition-colors duration-300">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#1b3b2b]/6 dark:bg-[#34d399]/6 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#d4af37]/8 blur-[130px] pointer-events-none rounded-full" />

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
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/35 dark:border-[#d4af37]/25 shadow-2xl shadow-[#1b3b2b]/10 dark:shadow-black/75 bg-white dark:bg-[#181715]">
              {/* Photo of Dr. Begum at her clinic desk */}
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/doctor-photos.jpg"
                  alt="Dr. M. Shasath Begum, M.D(Acu.), PhD - Senior Holistic Physician at Wellness Therapy Centre Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#121110] via-black/20 to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-2xl border border-[#d4af37]/30 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#f5f1e8] dark:bg-white/[0.08] text-[#1b3b2b] dark:text-[#f3d987]">
                      <Award className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <div className="font-editorial text-xs font-semibold text-[#1c1b18] dark:text-white">15+ Years Clinical Practice</div>
                      <div className="text-[11px] text-neutral-600 dark:text-neutral-400">J.P. Nagar, Bangalore</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-editorial text-sm font-bold text-[#1b3b2b] dark:text-[#34d399]">10,000+</div>
                    <div className="text-[10px] text-neutral-600 dark:text-neutral-400">Patients Healed</div>
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#d4af37]" />
              <span>Senior Holistic Physician & Medical Director</span>
            </div>

            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight leading-tight">
                Dr. M. Shasath Begum,{" "}
                <span className="font-editorial-italic sage-glow-text">M.D(Acu.), PhD</span>
              </h2>
              <p className="text-sm font-semibold text-[#855f10] dark:text-[#f3d987] mt-1 tracking-wide">
                Founder & Chief Holistic Consultant • Wellness Therapy Centre Bangalore
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              With over 15 years of dedicated clinical practice, Dr. M. Shasath Begum, PhD is one
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
                  className="p-4 rounded-2xl bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/20 space-y-1 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1c1b18] dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#1b3b2b] dark:text-[#34d399] shrink-0" />
                    <span>{c.title}</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed pl-6">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Doctor quote */}
            <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#181715] border-l-4 border-[#d4af37] text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 italic leading-relaxed shadow-sm">
              &ldquo;The human body holds an extraordinary capacity to self-repair once meridian
              blockages are cleared and circulation is restored. True healing begins when we
              listen to the body rather than silencing its distress signals with temporary pills.&rdquo;
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => openBooking("General Wellness Consultation")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-xs bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] text-[#fbf9f5] border border-[#d4af37]/45 shadow-lg shadow-[#1b3b2b]/15 flex items-center justify-center gap-2 transition active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#d4af37]" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+919740495548"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-xs bg-white/90 hover:bg-[#f5f1e8] text-[#1c1b18] dark:bg-[#1a1917] dark:hover:bg-[#22201d] dark:text-[#fbf9f5] border border-[#d4af37]/35 flex items-center justify-center gap-2 transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#1b3b2b] dark:text-[#34d399]" />
                <span>Call Sanctuary Desk (+91 9740495548)</span>
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
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181715] border border-[#d4af37]/25 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Certificates Photo Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-md group">
                <Image
                  src="/images/doctor-certificates.jpg"
                  alt="Official Degrees and Certifications Board of Dr. M. Shasath Begum, M.D(Acu.), PhD"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 glass-panel p-2.5 rounded-xl border border-[#d4af37]/35 text-center">
                  <span className="text-[11px] font-bold text-[#1b3b2b] dark:text-[#f3d987] flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    Authentic Framed Clinic Certificates Board
                  </span>
                </div>
              </div>
            </div>

            {/* Right Information & Accreditation Breakdown */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4efe4] dark:bg-[#1f1d1a] text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold border border-[#d4af37]/30">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Verified Qualifications & Licensures</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-semibold text-[#1c1b18] dark:text-white tracking-tight">
                Official Clinical Accreditations of <span className="font-editorial-italic sage-glow-text">Dr. M. Shasath Begum, PhD</span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Displaying Dr. Begum&apos;s verified postgraduate degrees and clinical certifications, officially recognized in complementary and alternative medicine:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#fbf9f5] dark:bg-[#141311] border border-[#d4af37]/20">
                  <div className="text-xs font-bold text-[#1b3b2b] dark:text-[#34d399]">M.D. in Clinical Acupuncture</div>
                  <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">Medicina Alternativa & Open International University</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#fbf9f5] dark:bg-[#141311] border border-[#d4af37]/20">
                  <div className="text-xs font-bold text-[#855f10] dark:text-[#f3d987]">Certified Sujok Acupressure Master</div>
                  <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">International Sujok Association Standards</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#fbf9f5] dark:bg-[#141311] border border-[#d4af37]/20">
                  <div className="text-xs font-bold text-[#2d5a42] dark:text-[#6ee7b7]">Panchakarma Certified Practitioner</div>
                  <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">Classical Detoxification & Rejuvenation Therapy</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#fbf9f5] dark:bg-[#141311] border border-[#d4af37]/20">
                  <div className="text-xs font-bold text-[#855f10] dark:text-[#f3d987]">Certified Hijama Cupping Specialist</div>
                  <div className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5">Authentic Sunnah Point & Surgical Sterility Protocols</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
