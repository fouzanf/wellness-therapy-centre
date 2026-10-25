"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, MessageSquare } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function ToastNotification() {
  const { toast, hideToast } = useBooking();

  if (!toast || !toast.show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-50 max-w-sm w-full bg-white/95 dark:bg-[#111118]/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl p-4 shadow-2xl shadow-neutral-900/10 dark:shadow-black/80 flex items-start gap-3.5 transition-colors duration-200"
      >
        <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>

        <div className="flex-1 pr-2">
          <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-0.5">{toast.title}</h4>
          <p className="text-xs text-neutral-600 dark:text-gray-300 leading-relaxed">{toast.message}</p>
          <div className="mt-2.5 flex items-center gap-2">
            <a
              href="https://wa.me/919740495548"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline"
            >
              <MessageSquare className="w-3 h-3" />
              Chat on WhatsApp (+91 9740495548)
            </a>
          </div>
        </div>

        <button
          onClick={hideToast}
          aria-label="Dismiss notification"
          className="p-1 text-neutral-400 hover:text-neutral-900 dark:text-gray-400 dark:hover:text-white rounded-lg transition"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
