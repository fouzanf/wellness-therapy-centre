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
  Sparkles,
  Compass,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function ClinicLocationSection() {
  const { openBooking } = useBooking();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=No.+11,+1st+Main,+Gangadhar+Nagar,+J.P.+Nagar,+Bangalore+-+560078";

  return (
    <section id="location" className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative overflow-hidden transition-colors duration-300">
      {/* Warm Sanctuary ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#1b3b2b]/5 dark:bg-[#34d399]/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#d4af37]/6 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>South Bangalore Medical Sanctuary</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Clinic Location & <span className="font-editorial-italic sage-glow-text">Visiting Hours</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed font-light">
            Conveniently situated in Gangadhar Nagar, J.P. Nagar Bangalore. Offering tranquil,
            private treatment suites equipped with medical-grade sterilization and dedicated patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg dark:shadow-2xl">
            <div className="space-y-6">
              {/* Address Box */}
              <div>
                <span className="text-xs font-bold text-[#1b3b2b] dark:text-[#f3d987] uppercase tracking-wider block mb-2">
                  Official Clinic Address:
                </span>
                <div className="p-4 rounded-2xl bg-[#f8f5ee] dark:bg-[#141311] border border-[#d4af37]/20 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#1b3b2b] text-[#fbf9f5] dark:bg-[#1f3f2f] dark:text-[#f3d987] shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-base font-semibold text-[#1c1b18] dark:text-white">
                      Wellness Therapy Centre
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">
                      No. 11, 1st Main, Gangadhar Nagar,
                      <br />
                      J.P. Nagar, Bangalore – 560078, Karnataka, India.
                    </p>
                    <div className="mt-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                      Landmark: Gangadhar Nagar Main Road, easily accessible from Kanakapura Road & Outer Ring Road.
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Timings */}
              <div>
                <span className="text-xs font-bold text-[#855f10] dark:text-[#f3d987] uppercase tracking-wider block mb-2">
                  Doctor Consultation Timings:
                </span>
                <div className="p-4 rounded-2xl bg-[#f8f5ee] dark:bg-[#141311] border border-[#d4af37]/20 space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#d4af37]" />
                      Monday – Sunday (All 7 Days)
                    </span>
                    <span className="font-bold text-[#1c1b18] dark:text-white">9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#1b3b2b] dark:text-[#34d399] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    Prior appointment recommended to ensure private room readiness.
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                  Direct Line & WhatsApp Appointments:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+919740495548"
                    className="p-3.5 rounded-xl bg-[#f5f1e8] hover:bg-[#ece6d9] dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-[#d4af37]/20 flex items-center gap-2.5 text-xs text-[#1c1b18] dark:text-white transition shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <div>
                      <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Call Directly</div>
                      <div className="font-bold">+91 9740495548</div>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => openBooking()}
                    className="p-3.5 rounded-xl bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/40 flex items-center gap-2.5 text-xs transition text-left shadow-sm active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 text-[#d4af37]" />
                    <div>
                      <div className="text-[10px] text-[#f3d987]">Appointment Desk</div>
                      <div className="font-bold">Book Slot</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <div className="pt-6 mt-6 border-t border-[#1b3b2b]/10 dark:border-white/[0.08] flex flex-col sm:flex-row items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-xs font-semibold bg-[#f5f1e8] hover:bg-[#ede7da] dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-[#1c1b18] dark:text-white border border-[#d4af37]/30 flex items-center justify-center gap-2 transition shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span>Get GPS Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Map Frame & Amenities */}
          <div className="lg:col-span-7 bg-white dark:bg-[#181715] border border-[#1b3b2b]/10 dark:border-[#d4af37]/25 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg dark:shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-editorial text-base sm:text-lg font-semibold text-[#1c1b18] dark:text-white flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#d4af37]" />
                  Street Landmark & Outdoor Signage
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] text-[#1b3b2b] dark:text-[#f3d987] border border-[#d4af37]/30 font-medium">
                  J.P. Nagar Entrance
                </span>
              </div>

              {/* Outdoor Clinic Signboard Image (Kannada & English) */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#d4af37]/30 mb-4 shadow-md group">
                <Image
                  src="/images/clinic-board-outside.jpg"
                  alt="Wellness Therapy Centre Outdoor Entrance Signboard in Kannada and English at J.P. Nagar Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                <div className="absolute bottom-3 left-3 right-3 glass-panel p-3.5 rounded-xl border border-white/[0.15] dark:border-white/[0.1] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>Look for this Green & White Board upon arrival</span>
                    </div>
                    <div className="text-[11px] text-[#f3d987] mt-0.5">
                      ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್ • No. 11, 1st Main, Gangadhar Nagar
                    </div>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1b3b2b] hover:bg-[#234b37] text-[#fbf9f5] border border-[#d4af37]/40 font-semibold text-[11px] transition shrink-0"
                  >
                    <span>Open GPS</span>
                    <span className="text-[#d4af37]">→</span>
                  </a>
                </div>
              </div>

              {/* Refined Cartographic Map Frame */}
              <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden border border-[#d4af37]/25 bg-[#f6f2e9] dark:bg-[#121110] flex items-center justify-center">
                {/* Subtle cartographic grid */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />

                {/* Central Pin */}
                <div className="relative z-10 text-center px-4 py-3 bg-white/95 dark:bg-[#181715]/95 rounded-2xl max-w-sm mx-4 border border-[#d4af37]/35 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1b3b2b] text-[#fbf9f5] flex items-center justify-center shrink-0 shadow-md border border-[#d4af37]/50">
                    <MapPin className="w-4 h-4 text-[#d4af37]" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-editorial font-semibold text-[#1c1b18] dark:text-white text-xs">
                      Wellness Therapy Centre (Dr. M. Shasath Begum, M.D(Acu.), PhD)
                    </h4>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-[#1b3b2b] dark:text-[#f3d987] hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <span>Start GPS Navigation on Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Amenities Checklist */}
            <div className="pt-6 mt-6 border-t border-[#1b3b2b]/10 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-700 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Dedicated Patient Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1b3b2b] dark:text-[#34d399] shrink-0" />
                <span>100% Sterile Private Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Direct Appointment Bookings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
