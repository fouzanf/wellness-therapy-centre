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
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#fbf9f5]/95 dark:bg-[#121110]/95 backdrop-blur-xl border-t border-[#d4af37]/25 px-3 py-2.5 shadow-2xl shadow-black/10 dark:shadow-black transition-colors duration-300">
      {/* Mini status indicator */}
      <div className="flex items-center justify-between text-[10px] text-neutral-600 dark:text-neutral-400 mb-1.5 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping" />
          <span className="text-[#1b3b2b] dark:text-[#f3d987] font-semibold">Doctor In-Clinic: J.P. Nagar</span>
        </div>
        <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
          <Clock className="w-2.5 h-2.5 text-[#d4af37]" />
          <span>Till 8:00 PM (All 7 Days)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Call Now Button */}
        <a
          href="tel:+919740495548"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-white/90 hover:bg-[#f5f1e8] dark:bg-[#1c1b18] text-[#1c1b18] dark:text-[#fbf9f5] border border-[#d4af37]/30 dark:border-white/[0.1] active:scale-95 transition"
        >
          <Phone className="w-3.5 h-3.5 text-[#1b3b2b] dark:text-[#34d399]" />
          <span>Call Now</span>
        </a>

        {/* Book via WhatsApp Button */}
        <button
          type="button"
          onClick={handleBooking}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] text-[#fbf9f5] border border-[#d4af37]/45 shadow-lg shadow-[#1b3b2b]/20 active:scale-95 transition"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current text-[#d4af37]" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
}

export default MobileStickyBar;
