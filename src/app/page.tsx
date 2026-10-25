"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MeridianDiagnosticMatrix from "@/components/MeridianDiagnosticMatrix";
import TreatmentsSection from "@/components/TreatmentsSection";
import HijamaSunnahSection from "@/components/HijamaSunnahSection";
import ClinicTourWheel from "@/components/ClinicTourWheel";
import DoctorProfileSection from "@/components/DoctorProfileSection";
import PatientTimelineCarousel from "@/components/PatientTimelineCarousel";
import ClinicLocationSection from "@/components/ClinicLocationSection";
import FaqSection from "@/components/FaqSection";
import { MessageSquare, Phone, Sparkles, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { openBooking } = useBooking();
  const { language } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-white dark:bg-[#0a0a0c] transition-colors duration-300">
      {/* 1. Hero Section with 3D Canvas */}
      <HeroSection />

      {/* 2. Interactive Trust & Credential Banner */}
      <section className="border-y border-neutral-200 dark:border-white/[0.08] bg-neutral-100/80 dark:bg-[#0c0c11] py-8 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                15+ Years
              </div>
              <div className="text-xs text-neutral-500 dark:text-gray-400 font-medium">
                {language === "kn"
                  ? "ಬೆಂಗಳೂರಿನಲ್ಲಿ ವೈದ್ಯಕೀಯ ಸೇವೆ"
                  : "Clinical Mastery in Bangalore"}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                10,000+
              </div>
              <div className="text-xs text-neutral-500 dark:text-gray-400 font-medium">
                {language === "kn"
                  ? "ಗುಣಮುಖರಾದ ರೋಗಿಗಳು"
                  : "Patients Relieved of Pain"}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400">
                100% Sterile
              </div>
              <div className="text-xs text-neutral-500 dark:text-gray-400 font-medium">
                {language === "kn"
                  ? "ಏಕ-ಬಳಕೆಯ ಸುರಕ್ಷಿತ ಕಪ್‌ಗಳು"
                  : "Single-Use Disposable Cups"}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400">
                98%
              </div>
              <div className="text-xs text-neutral-500 dark:text-gray-400 font-medium">
                {language === "kn"
                  ? "ಧನಾತ್ಮಕ ಫಲಿತಾಂಶ ದರ"
                  : "Patient Satisfaction Rate"}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC AI SYMPTOM & MERIDIAN DIAGNOSTIC MATRIX */}
      <MeridianDiagnosticMatrix />

      {/* 4. Core Clinical Therapy Treatments Section with Staggered Parallax */}
      <TreatmentsSection />

      {/* 5. Authentic Hijama @ Sunnah Point Feature */}
      <HijamaSunnahSection />

      {/* 6. INTERACTIVE 3D VIRTUAL CLINIC TOUR / "WORKS-WHEEL" */}
      <ClinicTourWheel />

      {/* 7. Senior Doctor Profile & Philosophy */}
      <DoctorProfileSection />

      {/* 8. REAL-TIME VERIFIED PATIENT RECOVERY TIMELINE & REVIEWS */}
      <PatientTimelineCarousel />

      {/* 9. Clinic Location, Map & Timings */}
      <ClinicLocationSection />

      {/* 10. FAQ Accordion */}
      <FaqSection />

      {/* 11. Multi-Million Dollar Final CTA Banner */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 via-emerald-50/50 to-white dark:from-[#0a0a0e] dark:via-[#0d1612] dark:to-[#0a0a0c] border-t border-emerald-500/20 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 aurora-gradient pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
            <span>
              {language === "kn"
                ? "ಇಂದೇ ನೈಸರ್ಗಿಕ ಚಿಕಿತ್ಸೆ ಪ್ರಾರಂಭಿಸಿ"
                : "Start Your Journey to Pain-Free Living Today"}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
            {language === "kn" ? (
              <>
                ಡಾ. ಎಂ. ಶಾಸತ್ ಬೇಗಂ ಅವರೊಂದಿಗೆ{" "}
                <span className="emerald-glow-text">ನೈಸರ್ಗಿಕ ಆರೋಗ್ಯವನ್ನು ಮರಳಿ ಪಡೆಯಿರಿ</span>
              </>
            ) : (
              <>
                Ready to Experience Natural Relief with{" "}
                <span className="emerald-glow-text">Dr. M. Shasath Begum?</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {language === "kn"
              ? "ಜೆ.ಪಿ. ನಗರದಲ್ಲಿರುವ ನಮ್ಮ ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಸಮಾಲೋಚನೆ ಕಾಯ್ದಿರಿಸಿ. ವಾಟ್ಸಾಪ್ ಮೂಲಕ ತ್ವರಿತ ದೃಢೀಕರಣ ಪಡೆಯಿರಿ."
              : "Reserve your confidential consultation at Wellness Therapy Centre in J.P. Nagar, Bangalore. Fast appointment confirmation sent directly via WhatsApp."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openBooking("General Wellness Consultation")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-black shadow-2xl shadow-emerald-500/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>
                {language === "kn"
                  ? "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"
                  : "Book Appointment on WhatsApp"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919740495548"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-semibold bg-white dark:bg-[#14141c] hover:bg-neutral-100 dark:hover:bg-[#1b1b26] text-neutral-800 dark:text-white border border-neutral-300 dark:border-white/[0.1] hover:border-emerald-500/40 flex items-center justify-center gap-2 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{language === "kn" ? "ಕರೆ ಮಾಡಿ: +91 9740495548" : "Call Clinic (+91 9740495548)"}</span>
            </a>
          </div>

          <p className="text-xs text-neutral-500 dark:text-gray-500 pt-2">
            No. 11, 1st Main, Gangadhar Nagar, J.P. Nagar, Bangalore – 560078 • Open All 7 Days (9:00 AM – 8:00 PM)
          </p>
        </div>
      </section>
    </div>
  );
}
