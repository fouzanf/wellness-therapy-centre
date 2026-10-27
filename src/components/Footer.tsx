"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Heart,
  ChevronRight,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function Footer() {
  const { openBooking } = useBooking();

  return (
    <footer className="bg-[#f5f1e8] dark:bg-[#0e0d0c] border-t border-[#d4af37]/25 text-neutral-600 dark:text-neutral-400 text-xs relative z-10 pb-24 lg:pb-8 transition-colors duration-300">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Clinic Brand & Doctor */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#1b3b2b] dark:bg-[#1f3f2f] border border-[#d4af37]/40 flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
              </div>
              <span className="font-editorial text-base font-semibold tracking-wider text-[#1c1b18] dark:text-[#fbf9f5]">
                WELLNESS THERAPY CENTRE
              </span>
            </Link>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Led by <strong className="text-[#1c1b18] dark:text-white font-semibold">Dr. M. Shasath Begum, M.D(Acu.), PhD</strong>.
              Dedicated to compassionate, chemical-free healing through clinical Acupuncture,
              Acupressure, Cupping, and authentic Hijama (@ Sunnah Point) in J.P. Nagar, Bangalore.
            </p>

            <div className="pt-2 flex items-center gap-2 text-[#1b3b2b] dark:text-[#34d399] text-[11px] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Certified Clinical Practice • 100% Sterile Medical Suites</span>
            </div>
          </div>

          {/* Col 2: Treatments Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-editorial text-xs font-semibold uppercase tracking-wider text-[#1c1b18] dark:text-[#f3d987]">
              Sanctuary Modalities
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => openBooking("Acupuncture & Acupressure Session")}
                  className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors text-left"
                >
                  Acupuncture & Acupressure
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openBooking("Hijama / Cupping Therapy (Wet/Dry/Fire)")
                  }
                  className="hover:text-[#855f10] dark:hover:text-[#f3d987] transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Hijama (@ Sunnah Point)</span>
                  <span className="text-[10px] bg-[#fdf8eb] dark:bg-[#2a2415] text-[#855f10] dark:text-[#f3d987] border border-[#d4af37]/35 px-1.5 py-0.5 rounded font-medium">
                    Prophetic Care
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openBooking("Chronic & Acute Pain Management")
                  }
                  className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors text-left"
                >
                  Sciatica & Disc Bulge Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openBooking("Women's Health & PCOD Care")}
                  className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors text-left"
                >
                  Women’s Wellness & PCOD Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openBooking("Stress, Depression & Anxiety Relief")
                  }
                  className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors text-left"
                >
                  Stress, Insomnia & Anxiety Reset
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openBooking("General Wellness Consultation")}
                  className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors text-left"
                >
                  General Holistic Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-editorial text-xs font-semibold uppercase tracking-wider text-[#1c1b18] dark:text-[#f3d987]">
              Sanctuary Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors">
                  Sanctuary Home
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors">
                  Treatment Directory
                </Link>
              </li>
              <li>
                <Link href="/hijama-sunnah-point" className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors">
                  Hijama @ Sunnah
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors">
                  Dr. Begum, M.D(Acu.), PhD
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition-colors">
                  Location & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Address & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-editorial text-xs font-semibold uppercase tracking-wider text-[#1c1b18] dark:text-[#f3d987]">
              Sanctuary Desk
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  No. 11, 1st Main, Gangadhar Nagar,
                  <br />
                  J.P. Nagar, Bangalore – 560078.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href="tel:+919740495548"
                  className="text-[#1c1b18] dark:text-white hover:text-[#1b3b2b] dark:hover:text-[#34d399] font-semibold transition"
                >
                  +91 9740495548
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>9:00 AM – 8:00 PM (Mon – Sun)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/40 flex items-center justify-center gap-2 shadow-md shadow-[#1b3b2b]/15 transition active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#1b3b2b]/10 dark:border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 dark:text-neutral-500 text-center md:text-left">
          <p>
            © 2026 Wellness Therapy Centre. Led by Dr. M. Shasath Begum,
            M.D(Acu.), PhD. All Rights Reserved.
          </p>

          <p className="max-w-xl text-[10px] text-neutral-500 dark:text-neutral-500">
            Disclaimer: Holistic therapies (Acupuncture, Acupressure, Hijama) support natural
            physiological balance and vital meridian flow. Information provided is for educational
            purposes and clinic appointment scheduling.
          </p>
        </div>
      </div>
    </footer>
  );
}
