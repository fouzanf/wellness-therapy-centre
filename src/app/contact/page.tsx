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
  Compass,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function ContactPage() {
  const { openBooking } = useBooking();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=No.+11,+1st+Main,+Gangadhar+Nagar,+J.P.+Nagar,+Bangalore+-+560078";

  return (
    <div className="py-16 sm:py-24 bg-[#fbf9f5] dark:bg-[#121110] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#1b3b2b]/5 dark:bg-[#34d399]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#d4af37]/6 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>Clinic Location & Appointment Desk</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Visit Us in <span className="font-editorial-italic sage-glow-text">J.P. Nagar, Bangalore</span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed font-light">
            Conveniently located in Gangadhar Nagar, J.P. Nagar. Easily accessible from Kanakapura
            Road, Bannerghatta Road, Jayanagar, and BTM Layout.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl dark:shadow-2xl">
              <div>
                <span className="text-xs font-bold text-[#1b3b2b] dark:text-[#f3d987] uppercase tracking-wider block mb-2">
                  Clinic Address:
                </span>
                <div className="flex items-start gap-3.5 text-[#1c1b18] dark:text-white">
                  <div className="p-2.5 rounded-xl bg-[#1b3b2b] text-[#fbf9f5] dark:bg-[#1f3f2f] dark:text-[#f3d987] shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-base font-semibold">
                      Wellness Therapy Centre
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed font-light">
                      No. 11, 1st Main, Gangadhar Nagar,
                      <br />
                      J.P. Nagar, Bangalore – 560078, Karnataka.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-[#855f10] dark:text-[#f3d987] uppercase tracking-wider block mb-2">
                  Consultation Timings:
                </span>
                <div className="flex items-start gap-3.5 text-[#1c1b18] dark:text-white">
                  <div className="p-2.5 rounded-xl bg-[#f5f1e8] dark:bg-white/[0.05] text-[#855f10] dark:text-[#f3d987] shrink-0 mt-0.5 border border-[#d4af37]/30">
                    <Clock className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-sm font-semibold">Mon – Sun (All 7 Days)</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-0.5 font-light">
                      9:00 AM – 8:00 PM (Prior appointment recommended)
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                  Direct Line & WhatsApp:
                </span>
                <div className="flex items-start gap-3.5 text-[#1c1b18] dark:text-white">
                  <div className="p-2.5 rounded-xl bg-[#1b3b2b] text-[#fbf9f5] dark:bg-[#1f3f2f] dark:text-[#f3d987] shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <a
                      href="tel:+919740495548"
                      className="font-bold text-sm sm:text-base hover:text-[#1b3b2b] dark:hover:text-[#34d399] transition"
                    >
                      +91 9740495548
                    </a>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Fast booking confirmations via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1b3b2b]/10 dark:border-white/[0.08] flex flex-col gap-2.5">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs font-semibold bg-[#f5f1e8] hover:bg-[#ede7da] text-[#1c1b18] dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-white border border-[#d4af37]/30 flex items-center justify-center gap-2 transition shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#d4af37]" />
                  <span>Open Directions on Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={() => openBooking()}
                  className="w-full py-3 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/40 shadow-md shadow-[#1b3b2b]/15 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-[#d4af37]" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Map, Outdoor Signboard & Transportation Advice */}
          <div className="lg:col-span-7 space-y-6">
            {/* Outdoor Entrance Signboard Landmark Photo */}
            <div className="bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-5 sm:p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1b3b2b] dark:text-[#f3d987] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  Look for This Sign Board Outside
                </span>
                <span className="text-[10px] text-[#1b3b2b] dark:text-[#f3d987] bg-[#f4efe4] dark:bg-[#1c1a17] px-2.5 py-1 rounded-full border border-[#d4af37]/30">
                  Gangadhar Nagar Main Road
                </span>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-sm">
                <Image
                  src="/images/clinic-board-outside.jpg"
                  alt="Wellness Therapy Centre Outdoor Sign Board in Kannada & English"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Prominent green and white board in Kannada &amp; English (&ldquo;ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್ / WELLNESS THERAPY CENTRE&rdquo;) at No. 11, 1st Main, Gangadhar Nagar.
              </p>
            </div>

            <div className="bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-editorial text-base sm:text-lg font-semibold text-[#1c1b18] dark:text-white mb-4">
                Directions & Accessibility
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="p-4 rounded-2xl bg-[#f8f5ee] dark:bg-[#141311] border border-[#d4af37]/20">
                  <strong className="text-[#1c1b18] dark:text-white block mb-1 font-semibold">By Namma Metro:</strong>
                  The nearest stations are Yalachenahalli Metro Station and Jaya Prakash Nagar Metro
                  Station on the Green Line. Auto-rickshaws and cabs are readily available to Gangadhar
                  Nagar (5–8 minutes ride).
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f5ee] dark:bg-[#141311] border border-[#d4af37]/20">
                  <strong className="text-[#1c1b18] dark:text-white block mb-1 font-semibold">By Car / Two-Wheeler:</strong>
                  Easy access from Kanakapura Main Road, 100 Feet Ring Road, and 24th Main Road J.P.
                  Nagar. Dedicated patient parking is available directly in front of the clinic.
                </div>

                <div className="p-4 rounded-2xl bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/30 text-neutral-800 dark:text-[#f3d987]">
                  <strong className="text-[#1c1b18] dark:text-white block mb-1 font-semibold">Doctor Availability:</strong>
                  Dr. M. Shasath Begum, M.D(Acu.), PhD personally examines every patient. Please arrive 10 minutes prior
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
