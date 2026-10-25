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
    <footer className="bg-slate-100 dark:bg-[#060608] border-t border-neutral-200 dark:border-white/[0.08] text-neutral-600 dark:text-gray-400 text-xs relative z-10 pb-24 lg:pb-8 transition-colors duration-300">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Clinic Brand & Doctor */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-white dark:bg-[#0a0a0e] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-neutral-900 dark:text-white">
                WELLNESS THERAPY CENTRE
              </span>
            </Link>

            <p className="text-xs text-neutral-600 dark:text-gray-400 leading-relaxed">
              Led by <strong className="text-neutral-900 dark:text-white">Dr. M. Shasath Begum, M.D(Acu.)</strong>.
              Dedicated to compassionate, chemical-free healing through clinical Acupuncture,
              Acupressure, Cupping, and authentic Hijama (@ Sunnah Point) in J.P. Nagar, Bangalore.
            </p>

            <div className="pt-2 flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Certified Clinical Practice • 100% Sterile Protocol</span>
            </div>
          </div>

          {/* Col 2: Treatments Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Therapy Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => openBooking("Acupuncture & Acupressure Session")}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-left"
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
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>Hijama (@ Sunnah Point)</span>
                  <span className="text-[10px] bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded font-medium">
                    Popular
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() =>
                    openBooking("Chronic & Acute Pain Management")
                  }
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-left"
                >
                  Sciatica & Disc Bulge Care
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openBooking("Women's Health & PCOD Care")}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-left"
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
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-left"
                >
                  Stress, Insomnia & Anxiety Reset
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => openBooking("General Wellness Consultation")}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-left"
                >
                  General Holistic Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Clinic Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  All Treatments
                </Link>
              </li>
              <li>
                <Link href="/hijama-sunnah-point" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Hijama @ Sunnah
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  About Dr. Begum
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Location & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Address & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-700 dark:text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  No. 11, 1st Main, Gangadhar Nagar,
                  <br />
                  J.P. Nagar, Bangalore – 560078.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <a
                  href="tel:+919740495548"
                  className="text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition"
                >
                  +91 9740495548
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>9:00 AM – 8:00 PM (Mon – Sun)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => openBooking()}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-black flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Book Slot on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 dark:text-gray-500 text-center md:text-left">
          <p>
            © 2026 Wellness Therapy Centre. Led by Dr. M. Shasath Begum,
            M.D(Acu.). All Rights Reserved.
          </p>

          <p className="max-w-xl text-[10px] text-neutral-500 dark:text-gray-600">
            Disclaimer: Holistic therapies (Acupressure, Acupuncture, Hijama) support natural
            physiological balance and vital meridian flow. Information provided is for educational
            purposes and clinic appointment scheduling.
          </p>
        </div>
      </div>
    </footer>
  );
}
