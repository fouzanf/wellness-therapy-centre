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
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function ClinicLocationSection() {
  const { openBooking } = useBooking();

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=No.+11,+1st+Main,+Gangadhar+Nagar,+J.P.+Nagar,+Bangalore+-+560078";

  return (
    <section id="location" className="py-24 bg-neutral-50/60 dark:bg-[#08080b] relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Visit Us in South Bangalore</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Clinic Location & <span className="text-emerald-600 dark:emerald-glow-text">Visiting Hours</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mt-4 leading-relaxed">
            Conveniently situated in Gangadhar Nagar, J.P. Nagar Bangalore. Offering peaceful,
            private treatment suites equipped with medical-grade sterilization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white dark:bg-[#121218] border border-neutral-200 dark:border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl dark:shadow-emerald-950/20">
            <div className="space-y-6">
              {/* Address Box */}
              <div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-2">
                  Official Clinic Address:
                </span>
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#171722] border border-neutral-200 dark:border-white/[0.08] flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                      Wellness Therapy Centre
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 mt-1 leading-relaxed">
                      No. 11, 1st Main, Gangadhar Nagar,
                      <br />
                      J.P. Nagar, Bangalore – 560078, Karnataka, India.
                    </p>
                    <div className="mt-2 text-[11px] text-neutral-500 dark:text-gray-400">
                      Landmark: Gangadhar Nagar Main Road, easily accessible from Kanakapura Road & Outer Ring Road.
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Timings */}
              <div>
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block mb-2">
                  Doctor Consultation Timings:
                </span>
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#171722] border border-neutral-200 dark:border-white/[0.08] space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-neutral-700 dark:text-gray-300 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      Monday – Sunday (All 7 Days)
                    </span>
                    <span className="font-bold text-neutral-900 dark:text-white">9:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Prior appointment recommended to ensure zero waiting time.
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <span className="text-xs font-bold text-neutral-500 dark:text-gray-400 uppercase tracking-wider block mb-2">
                  Direct Line & WhatsApp:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+919740495548"
                    className="p-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] border border-neutral-200 dark:border-white/[0.08] flex items-center gap-2.5 text-xs text-neutral-900 dark:text-white transition shadow-sm dark:shadow-none"
                  >
                    <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="text-[10px] text-neutral-500 dark:text-gray-400">Call Now</div>
                      <div className="font-bold">+91 9740495548</div>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => openBooking()}
                    className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-500/15 dark:hover:bg-emerald-500/25 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300 transition text-left shadow-sm dark:shadow-none"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="text-[10px] text-emerald-700 dark:text-emerald-400">WhatsApp Desk</div>
                      <div className="font-bold">Book Slot</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-xs font-bold bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/[0.1] flex items-center justify-center gap-2 transition shadow-sm dark:shadow-none"
              >
                <Navigation className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Map Frame & Amenities */}
          <div className="lg:col-span-7 bg-white dark:bg-[#121218] border border-neutral-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl dark:shadow-none">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Street Landmark & Outdoor Signage
                </h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 font-medium">
                  J.P. Nagar Entrance
                </span>
              </div>

              {/* Outdoor Clinic Signboard Image (Kannada & English) */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-emerald-500/30 mb-4 shadow-md group">
                <Image
                  src="/images/clinic-board-outside.jpg"
                  alt="Wellness Therapy Centre Outdoor Entrance Signboard in Kannada and English at J.P. Nagar Bangalore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <div className="absolute bottom-3 left-3 right-3 glass-panel p-3 rounded-xl border border-white/[0.15] dark:border-white/[0.1] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Look for this Green & White Board upon arrival</span>
                    </div>
                    <div className="text-[11px] text-emerald-300 mt-0.5">
                      ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್ • No. 11, 1st Main, Gangadhar Nagar
                    </div>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[11px] transition shrink-0"
                  >
                    Open GPS →
                  </a>
                </div>
              </div>

              {/* High-Tech Stylized Map Frame */}
              <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/[0.1] bg-slate-100 dark:bg-[#0c0c12] flex items-center justify-center">
                {/* Visual Map Grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Central Pin */}
                <div className="relative z-10 text-center px-4 py-3 glass-panel rounded-xl max-w-sm mx-4 border border-emerald-400/30 shadow-2xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-white dark:text-black flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/50">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-neutral-900 dark:text-white text-xs">
                      Wellness Therapy Centre (Dr. M. Shasath Begum)
                    </h4>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Start Live GPS Navigation on Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinic Amenities Checklist */}
            <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-neutral-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Dedicated Patient Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>100% Sterile Private Suites</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Same-Day WhatsApp Bookings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
