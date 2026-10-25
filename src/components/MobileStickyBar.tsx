"use client";

import React from "react";
import { MessageSquare, Phone, MapPin, Clock } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

interface MobileStickyBarProps {
  onOpenBooking?: () => void;
  isBookingOpen?: boolean;
}

export function MobileStickyBar({ onOpenBooking, isBookingOpen: propIsBookingOpen }: MobileStickyBarProps = {}) {
  const { isBookingOpen: contextIsBookingOpen, openBooking } = useBooking();

  // Hide sticky bar automatically when booking modal is open
  const isModalActive = propIsBookingOpen ?? contextIsBookingOpen;
  if (isModalActive) return null;

  const handleBooking = onOpenBooking ?? (() => openBooking());

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 dark:bg-[#0c0c12]/95 backdrop-blur-xl border-t border-neutral-200 dark:border-emerald-500/25 px-3 py-2.5 shadow-2xl shadow-neutral-500/20 dark:shadow-black transition-colors duration-300">
      {/* Mini status indicator */}
      <div className="flex items-center justify-between text-[10px] text-neutral-500 dark:text-gray-400 mb-1.5 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-emerald-700 dark:text-emerald-400 font-medium">Doctor In-Clinic: J.P. Nagar</span>
        </div>
        <div className="flex items-center gap-1 text-neutral-500 dark:text-gray-400">
          <Clock className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
          <span>Till 8:00 PM</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Call Now Button */}
        <a
          href="tel:+919740495548"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-[#1a1a24] text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/[0.1] active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Call Now</span>
        </a>

        {/* Book via WhatsApp Button */}
        <button
          type="button"
          onClick={handleBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-500 dark:to-teal-400 text-white dark:text-black shadow-lg shadow-emerald-500/30 active:scale-95 transition"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>Book via WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default MobileStickyBar;
