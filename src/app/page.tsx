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
    <div className="relative overflow-hidden bg-[#fbf9f5] dark:bg-[#121110] transition-colors duration-300">
      {/* 1. Hero Section with 3D Canvas */}
      <HeroSection />

      {/* 2. Interactive Trust & Credential Banner */}
      <section className="border-y border-[#d4af37]/20 bg-[#f5f1e8]/75 dark:bg-[#161513] py-8 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <div className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1b3b2b] dark:text-[#34d399]">
                15+ Years
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                {language === "kn"
                  ? "ಬೆಂಗಳೂರಿನಲ್ಲಿ ವೈದ್ಯಕೀಯ ಸೇವೆ"
                  : "Clinical Mastery in Bangalore"}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-1"
            >
              <div className="font-editorial text-2xl sm:text-3xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5]">
                10,000+
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                {language === "kn"
                  ? "ಗುಣಮುಖರಾದ ರೋಗಿಗಳು"
                  : "Patients Relieved of Pain"}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1"
            >
              <div className="font-editorial text-2xl sm:text-3xl font-semibold text-[#b48a28] dark:text-[#e2c974]">
                100% Sterile
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                {language === "kn"
                  ? "ಏಕ-ಬಳಕೆಯ ಸುರಕ್ಷಿತ ಕಪ್‌ಗಳು"
                  : "Single-Use Disposable Protocol"}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-1"
            >
              <div className="font-editorial text-2xl sm:text-3xl font-semibold text-[#2d5a42] dark:text-[#34d399]">
                98%
              </div>
              <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                {language === "kn"
                  ? "ಧನಾತ್ಮಕ ಫಲಿತಾಂಶ ದರ"
                  : "Patient Recovery Satisfaction"}
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

      {/* 11. Multi-Million Dollar Final Sanctuary CTA Banner */}
      <section className="py-24 bg-gradient-to-b from-[#f5f1e8] via-[#fbf9f5] to-[#f5f1e8] dark:from-[#161513] dark:via-[#141311] dark:to-[#121110] border-t border-[#d4af37]/25 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 aurora-gradient pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1f1d1a] border border-[#d4af37]/40 dark:border-[#d4af37]/30 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {language === "kn"
                ? "ಇಂದೇ ನೈಸರ್ಗಿಕ ಚಿಕಿತ್ಸೆ ಪ್ರಾರಂಭಿಸಿ"
                : "Begin Your Path to Natural Pain Relief & Vitality"}
            </span>
          </motion.div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight leading-tight">
            {language === "kn" ? (
              <>
                ಡಾ. ಎಂ. ಶಾಸತ್ ಬೇಗಂ ಅವರೊಂದಿಗೆ{" "}
                <span className="font-editorial-italic sage-glow-text">ನೈಸರ್ಗಿಕ ಆರೋಗ್ಯವನ್ನು ಮರಳಿ ಪಡೆಯಿರಿ</span>
              </>
            ) : (
              <>
                Ready to Experience Natural Relief with{" "}
                <span className="font-editorial-italic sage-glow-text">Dr. M. Shasath Begum?</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {language === "kn"
              ? "ಜೆ.ಪಿ. ನಗರದಲ್ಲಿರುವ ನಮ್ಮ ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಸಮಾಲೋಚನೆ ಕಾಯ್ದಿರಿಸಿ. ವಾಟ್ಸಾಪ್ ಮೂಲಕ ತ್ವರಿತ ದೃಢೀಕರಣ ಪಡೆಯಿರಿ."
              : "Reserve your confidential consultation at Wellness Therapy Centre in J.P. Nagar, Bangalore. Fast appointment confirmation sent directly via WhatsApp."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openBooking("General Wellness Consultation")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] dark:hover:bg-[#284f3c] text-[#fbf9f5] border border-[#d4af37]/45 shadow-xl shadow-[#1b3b2b]/15 dark:shadow-black/60 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4 fill-current text-[#d4af37]" />
              <span>
                {language === "kn"
                  ? "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"
                  : "Book Consultation on WhatsApp"}
              </span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>

            <a
              href="tel:+919740495548"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-medium bg-white/90 dark:bg-[#191816] hover:bg-[#f5f1e8] dark:hover:bg-[#22201d] text-[#1c1b18] dark:text-[#fbf9f5] border border-[#d4af37]/35 hover:border-[#d4af37]/70 flex items-center justify-center gap-2 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#1b3b2b] dark:text-[#34d399]" />
              <span>{language === "kn" ? "ಕರೆ ಮಾಡಿ: +91 9740495548" : "Call Sanctuary Desk (+91 9740495548)"}</span>
            </a>
          </div>

          <p className="text-xs text-neutral-500 dark:text-neutral-400 pt-2">
            No. 11, 1st Main, Gangadhar Nagar, J.P. Nagar, Bangalore – 560078 • Open All 7 Days (9:00 AM – 8:00 PM)
          </p>
        </div>
      </section>
    </div>
  );
}
