"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: "Acupuncture",
    question: "Does acupuncture hurt? What does it feel like?",
    answer:
      "Acupuncture at Wellness Therapy Centre does NOT feel like a conventional hospital injection. We use ultra-fine, flexible, hair-thin sterile Japanese-grade micro-needles. Most patients feel virtually zero pain upon insertion, followed by a deeply soothing sensation of warmth, gentle heaviness, or pleasant tingling known as 'De Qi' (the activation of meridian vital energy). Many patients even fall asleep comfortably during treatment.",
  },
  {
    category: "Hijama @ Sunnah Point",
    question: "What is Hijama @ Sunnah Point and is it hygienic?",
    answer:
      "Hijama (@ Sunnah Point) is the prophetic practice of therapeutic wet cupping targeted on classical detoxification junctions, primarily Al-Kahil (between the shoulder blades) and Al-Akhda'ain (sides of the neck). At our Bangalore clinic, hygiene is strictly non-negotiable: 100% of our vacuum suction cups and surgical lancets are brand new, sealed, single-use disposables opened right in front of the patient and discarded immediately after.",
  },
  {
    category: "Recovery & Sessions",
    question: "How many sessions are typically required for chronic pain like Sciatica?",
    answer:
      "Acute muscular stiffness and tension headaches often experience significant relief within 1 to 2 sessions. For chronic conditions such as lumbar disc bulge, sciatica, cervical spondylosis, or arthritis, a tailored course of 4 to 6 sessions spaced over a few weeks is generally recommended to decompress nerve pathways and ensure permanent structural recovery.",
  },
  {
    category: "Women's Health",
    question: "Do you have dedicated privacy and specialized treatments for women?",
    answer:
      "Absolutely. Wellness Therapy Centre is led by Dr. M. Shasath Begum, M.D(Acu.), PhD, providing female patients with complete privacy, comfort, and dignified holistic care. We specialize in non-invasive management of PCOD/PCOS, menstrual irregularities, hormonal acne, pelvic heaviness, and fertility optimization through gentle meridian balancing.",
  },
  {
    category: "Preparation",
    question: "How should I prepare before my therapy appointment?",
    answer:
      "We recommend having a light meal or snack approximately 1.5 to 2 hours before your appointment (avoid coming completely on an empty stomach or immediately after a heavy feast). Wear loose, comfortable clothing that allows easy access to your elbows, knees, or neck. Drink plenty of water before and after your session to assist cellular detox.",
  },
  {
    category: "Booking",
    question: "Do I need a prior appointment or do you accept walk-ins?",
    answer:
      "While walk-ins are welcomed subject to availability, we strongly encourage booking your appointment slot in advance via our WhatsApp booking engine or by calling +91 9740495548. This guarantees zero waiting time and allows Dr. Shasath Begum, PhD to prepare a dedicated treatment room for your arrival.",
  },
];

export default function FaqSection() {
  const { openBooking } = useBooking();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Patient Guidance & Clarity</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Frequently Asked <span className="font-editorial-italic sage-glow-text">Questions</span>
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 font-light">
            Everything you need to know about our clinical acupuncture protocols, authentic Hijama sessions, and
            sanctuary visits.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/20 hover:border-[#d4af37]/45 transition-all overflow-hidden shadow-sm dark:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4"
                >
                  <span className="font-editorial font-medium text-sm sm:text-base text-[#1c1b18] dark:text-[#fbf9f5]">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-[#f5f1e8] dark:bg-[#201e1b] text-[#1b3b2b] dark:text-[#f3d987] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-[#1b3b2b] text-[#fbf9f5] dark:bg-[#1b3b2b]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-[#1b3b2b]/5 dark:border-white/[0.05]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Card */}
        <div className="mt-12 text-center p-7 rounded-3xl bg-[#f8f5ee] dark:bg-[#181715] border border-[#d4af37]/25 shadow-sm dark:shadow-xl">
          <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mb-4 font-light">
            Have a specific clinical or personal inquiry regarding your condition?
          </p>
          <button
            type="button"
            onClick={() => openBooking("General Wellness Consultation")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/40 shadow-lg shadow-[#1b3b2b]/15 transition active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </section>
  );
}
