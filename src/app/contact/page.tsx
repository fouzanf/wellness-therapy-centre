"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  Car,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function ContactPage() {
  const { openBooking } = useBooking();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=No.+11,+1st+Main,+Gangadhar+Nagar,+J.P.+Nagar,+Bangalore+-+560078";

  return (
    <div className="py-16 sm:py-24 bg-white dark:bg-[#08080a] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-3">
            <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Clinic Location & Appointment Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Visit Us in <span className="text-emerald-600 dark:emerald-glow-text">J.P. Nagar, Bangalore</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mt-4 leading-relaxed">
            Conveniently located in Gangadhar Nagar, J.P. Nagar. Easily accessible from Kanakapura
            Road, Bannerghatta Road, Jayanagar, and BTM Layout.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#121218] border border-neutral-200 dark:border-emerald-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl dark:shadow-2xl">
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                  Clinic Address:
                </span>
                <div className="flex items-start gap-3.5 text-neutral-900 dark:text-white">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base">
                      Wellness Therapy Centre
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 mt-1 leading-relaxed">
                      No. 11, 1st Main, Gangadhar Nagar,
                      <br />
                      J.P. Nagar, Bangalore – 560078, Karnataka.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block mb-2">
                  Consultation Timings:
                </span>
                <div className="flex items-start gap-3.5 text-neutral-900 dark:text-white">
                  <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Mon – Sun (All 7 Days)</h4>
                    <p className="text-xs text-neutral-600 dark:text-gray-300 mt-0.5">
                      9:00 AM – 8:00 PM (Prior appointment recommended)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-neutral-500 dark:text-gray-400 uppercase tracking-wider block mb-2">
                  Direct Line & WhatsApp:
                </span>
                <div className="flex items-start gap-3.5 text-neutral-900 dark:text-white">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href="tel:+919740495548"
                      className="font-bold text-sm sm:text-base hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                    >
                      +91 9740495548
                    </a>
                    <p className="text-xs text-neutral-500 dark:text-gray-400 mt-0.5">
                      Fast booking confirmations via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.08] flex flex-col gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] dark:text-white border border-neutral-300 dark:border-white/[0.1] flex items-center justify-center gap-2 transition shadow-sm dark:shadow-none"
                >
                  <Navigation className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Open Directions on Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-black shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Slot via WhatsApp Engine</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Map, Outdoor Signboard & Transportation Advice */}
          <div className="lg:col-span-7 space-y-6">
            {/* Outdoor Entrance Signboard Landmark Photo */}
            <div className="bg-white dark:bg-[#121218] border border-neutral-200 dark:border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl dark:shadow-none space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  Look for This Sign Board Outside
                </span>
                <span className="text-[10px] text-neutral-600 dark:text-gray-400 bg-neutral-100 dark:bg-white/[0.06] px-2.5 py-1 rounded-full border border-neutral-200 dark:border-white/[0.08]">
                  Gangadhar Nagar Main Road
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/[0.08] shadow-sm">
                <Image
                  src="/images/clinic-board-outside.jpg"
                  alt="Wellness Therapy Centre Outdoor Sign Board in Kannada & English"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-neutral-600 dark:text-gray-400">
                Prominent green and white board in Kannada &amp; English (&ldquo;ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್ / WELLNESS THERAPY CENTRE&rdquo;) at No. 11, 1st Main, Gangadhar Nagar.
              </p>
            </div>

            <div className="bg-white dark:bg-[#121218] border border-neutral-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-none">
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mb-4">
                Directions & Accessibility
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-gray-300">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.05]">
                  <strong className="text-neutral-900 dark:text-white block mb-1">By Namma Metro:</strong>
                  The nearest stations are Yalachenahalli Metro Station and Jaya Prakash Nagar Metro
                  Station on the Green Line. Auto-rickshaws and cabs are readily available to Gangadhar
                  Nagar (5–8 minutes ride).
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.05]">
                  <strong className="text-neutral-900 dark:text-white block mb-1">By Car / Two-Wheeler:</strong>
                  Easy access from Kanakapura Main Road, 100 Feet Ring Road, and 24th Main Road J.P.
                  Nagar. Dedicated patient parking is available directly in front of the clinic.
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-500/20 text-neutral-800 dark:text-emerald-300">
                  <strong className="text-neutral-900 dark:text-white block mb-1">Doctor Availability:</strong>
                  Dr. M. Shasath Begum personally examines every patient. Please arrive 10 minutes prior
                  to your confirmed WhatsApp slot.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
