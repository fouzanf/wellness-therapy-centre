"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Flame,
  Activity,
  HeartPulse,
  Brain,
  Stethoscope,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useBooking } from "@/context/BookingContext";

interface ServiceOption {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge?: string;
}

const SERVICES: ServiceOption[] = [
  {
    id: "Acupuncture & Acupressure Session",
    title: "Acupuncture & Acupressure Session",
    subtitle: "Meridian energy balancing & localized needle point stimulation",
    icon: Activity,
    badge: "Signature",
  },
  {
    id: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    title: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    subtitle: "Authentic Sunnah Point detox & vacuum blood circulation therapy",
    icon: Flame,
    badge: "Sunnah Point",
  },
  {
    id: "Chronic & Acute Pain Management",
    title: "Chronic & Acute Pain Management",
    subtitle: "Targeted relief for Sciatica, Cervical Spondylosis, Arthritis & Migraines",
    icon: HeartPulse,
    badge: "High Relief",
  },
  {
    id: "Women's Health & PCOD Care",
    title: "Women's Health & PCOD Care",
    subtitle: "Gentle natural hormonal regulation, PCOD/PCOS & menstrual health",
    icon: Sparkles,
    badge: "Specialized",
  },
  {
    id: "Stress, Depression & Anxiety Relief",
    title: "Stress, Depression & Anxiety Relief",
    subtitle: "Calming nervous system reboot, insomnia relief & deep mind clarity",
    icon: Brain,
    badge: "Holistic",
  },
  {
    id: "General Wellness Consultation",
    title: "General Wellness Consultation",
    subtitle: "Comprehensive health diagnosis & personalized holistic treatment plan",
    icon: Stethoscope,
    badge: "1-on-1 Doctor",
  },
];

const TIME_SLOTS = [
  "Morning (9 AM - 12 PM)",
  "Afternoon (12 PM - 4 PM)",
  "Evening (4 PM - 8 PM)",
];

export default function WhatsAppBookingModal() {
  const { isBookingOpen, closeBooking, initialService, showToast } = useBooking();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userPhone, setUserPhone] = useState<string>("");
  const [userNotes, setUserNotes] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initial service if passed from CTA
  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    } else if (!selectedService) {
      setSelectedService(SERVICES[0].id);
    }
  }, [initialService]);

  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
    if (!selectedDate) {
      setSelectedDate(today);
    }
    if (!selectedTime) {
      setSelectedTime(TIME_SLOTS[0]);
    }
  }, []);

  // Lock background body scroll when booking modal is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBookingOpen]);

  // Reset steps on close
  const handleClose = () => {
    setCurrentStep(1);
    setErrors({});
    closeBooking();
  };

  const validateStep1 = () => {
    if (!selectedService) {
      setErrors({ service: "Please select a therapy service" });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStep2 = () => {
    const errs: { [key: string]: string } = {};
    if (!selectedDate) errs.date = "Please select a preferred date";
    if (!selectedTime) errs.time = "Please choose a preferred time slot";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: { [key: string]: string } = {};
    if (!userName.trim() || userName.trim().length < 2) {
      errs.name = "Please enter your full name (at least 2 characters)";
    }
    // Indian phone format check (10 digits, optional +91 or 0 prefix)
    const cleanedPhone = userPhone.replace(/[\s-]/g, "");
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) setCurrentStep(1);
    if (currentStep === 3) setCurrentStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);

    // Format human-readable date
    const dateObj = new Date(selectedDate);
    const formattedDate = !isNaN(dateObj.getTime())
      ? dateObj.toLocaleDateString("en-IN", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : selectedDate;

    // Structured Message Template exactly as required
    const messageTemplate = `Hi Wellness Therapy Centre! 🖐️
I would like to book an appointment with Dr. M. Shasath Begum.

📋 Details:
- Name: ${userName.trim()}
- Service: ${selectedService}
- Preferred Date: ${formattedDate}
- Preferred Time: ${selectedTime}
- Phone: ${userPhone.trim()}${userNotes.trim() ? `\n- Notes/Symptoms: ${userNotes.trim()}` : ""}

Please confirm my appointment slot. Thanks!`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const targetWhatsAppUrl = `https://wa.me/919740495548?text=${encodedMessage}`;

    // Confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#fbbf24", "#34d399", "#d97706"],
      });
    } catch {
      // ignore in SSR
    }

    // Open WhatsApp link in new tab
    window.open(targetWhatsAppUrl, "_blank");

    // Close modal & display toast
    setTimeout(() => {
      setIsSubmitting(false);
      handleClose();
      showToast(
        "WhatsApp Redirect Initiated!",
        "Dr. M. Shasath Begum's clinic desk will confirm your appointment slot shortly on WhatsApp."
      );
    }, 400);
  };

  if (!isBookingOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-none"
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-[95%] sm:w-full max-w-lg lg:max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0f0f14] border border-neutral-200 dark:border-emerald-500/20 rounded-2xl sm:rounded-3xl shadow-2xl shadow-neutral-900/10 dark:shadow-emerald-950/40 overflow-hidden overscroll-contain z-10 my-auto transition-colors duration-300"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="relative px-4 sm:px-6 py-4 sm:py-5 border-b border-neutral-200 dark:border-white/[0.08] bg-gradient-to-r from-emerald-50 via-neutral-100 to-white dark:from-emerald-950/40 dark:via-[#13131b] dark:to-black">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
                    Direct Clinic Booking
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                  Book with Dr. M. Shasath Begum
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-400">
                  M.D(Acu.) • J.P. Nagar, Bangalore • WhatsApp Instant Confirmation
                </p>
              </div>

              <button
                onClick={handleClose}
                aria-label="Close booking modal"
                className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/60 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.08] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress */}
            <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/[0.06] text-xs font-medium">
              <div
                className={`flex items-center gap-2 ${
                  currentStep >= 1 ? "text-emerald-400" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep >= 1
                      ? "bg-emerald-500 text-black font-semibold"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  1
                </div>
                <span className="hidden sm:inline">Select Service</span>
              </div>

              <div
                className={`h-0.5 flex-1 mx-3 ${
                  currentStep >= 2 ? "bg-emerald-500/60" : "bg-white/10"
                }`}
              />

              <div
                className={`flex items-center gap-2 ${
                  currentStep >= 2 ? "text-emerald-400" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep >= 2
                      ? "bg-emerald-500 text-black font-semibold"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  2
                </div>
                <span className="hidden sm:inline">Date & Time</span>
              </div>

              <div
                className={`h-0.5 flex-1 mx-3 ${
                  currentStep >= 3 ? "bg-emerald-500/60" : "bg-white/10"
                }`}
              />

              <div
                className={`flex items-center gap-2 ${
                  currentStep >= 3 ? "text-emerald-400" : "text-gray-500"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep >= 3
                      ? "bg-emerald-500 text-black font-semibold"
                      : "bg-white/10 text-gray-400"
                  }`}
                >
                  3
                </div>
                <span className="hidden sm:inline">Your Details</span>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div 
            className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 pb-32 sm:pb-8 max-h-[62vh] sm:max-h-[68vh] space-y-4"
            onWheel={(e) => {
              // Stop wheel events from bleeding to background
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              // Stop touch drag events from bleeding to background
              e.stopPropagation();
            }}
          >
            {/* STEP 1: SERVICE SELECTION */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-200">
                    Step 1: Choose Your Therapy or Consultation
                  </h3>
                  <span className="text-xs text-emerald-400 font-medium">
                    6 Specialized Treatments
                  </span>
                </div>

                {errors.service && (
                  <p className="text-xs text-rose-400">{errors.service}</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const Icon = s.icon;
                    const isSelected = selectedService === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setSelectedService(s.id);
                          setErrors({});
                        }}
                        className={`text-left p-3.5 rounded-xl border transition-all duration-200 relative flex flex-col justify-between ${
                          isSelected
                            ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 dark:border-emerald-400 shadow-md shadow-emerald-500/10 dark:shadow-emerald-900/30 ring-1 ring-emerald-500 dark:ring-emerald-400/50"
                            : "bg-neutral-50 dark:bg-[#14141c] border-neutral-200 dark:border-white/[0.08] hover:border-emerald-500/30 hover:bg-neutral-100 dark:hover:bg-[#181822]"
                        }`}
                      >
                        <div className="flex items-start justify-between w-full mb-2">
                          <div
                            className={`p-2 rounded-lg ${
                              isSelected
                                ? "bg-emerald-500 text-white dark:bg-emerald-400 dark:text-black"
                                : "bg-neutral-200/70 dark:bg-white/[0.06] text-emerald-600 dark:text-emerald-400"
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          {s.badge && (
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                isSelected
                                  ? "bg-emerald-100 dark:bg-emerald-400/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-400/30"
                                  : "bg-neutral-200/60 dark:bg-white/[0.06] text-neutral-600 dark:text-gray-400"
                              }`}
                            >
                              {s.badge}
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-sm text-neutral-900 dark:text-white">
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            )}
                            <span>{s.title}</span>
                          </div>
                          <p className="text-xs text-neutral-500 dark:text-gray-400 mt-1 line-clamp-2">
                            {s.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME SELECTION */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-gray-200 mb-1">
                    Step 2: Select Date & Preferred Slot
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-gray-400">
                    Clinic open Mon – Sun (9:00 AM – 8:00 PM) at J.P. Nagar, Bangalore
                  </p>
                </div>

                {/* Date Picker */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-gray-300">
                    <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    Appointment Date:
                  </label>
                  <input
                    type="date"
                    min={minDate || undefined}
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      if (errors.date) setErrors({ ...errors, date: "" });
                    }}
                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-[#14141c] border border-neutral-300 dark:border-white/[0.1] rounded-xl text-neutral-900 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition"
                  />
                  {errors.date && (
                    <p className="text-xs text-rose-500 dark:text-rose-400">{errors.date}</p>
                  )}
                </div>

                {/* Time Slot Buttons */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-semibold text-neutral-700 dark:text-gray-300">
                    <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                    Preferred Time Window:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setSelectedTime(slot);
                            if (errors.time) setErrors({ ...errors, time: "" });
                          }}
                          className={`px-3 py-3 rounded-xl border text-left text-xs font-medium transition-all ${
                            isSelected
                              ? "bg-amber-50 dark:bg-amber-400/15 border-amber-500 dark:border-amber-400 text-amber-800 dark:text-amber-300 shadow-md ring-1 ring-amber-400/40"
                              : "bg-neutral-50 dark:bg-[#14141c] border-neutral-200 dark:border-white/[0.08] text-neutral-700 dark:text-gray-300 hover:border-amber-400/40 hover:bg-neutral-100 dark:hover:bg-[#181822]"
                          }`}
                        >
                          <div className="font-semibold text-neutral-900 dark:text-white mb-0.5">
                            {slot.split(" ")[0]}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-gray-400">
                            {slot.substring(slot.indexOf("("))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.time && (
                    <p className="text-xs text-rose-500 dark:text-rose-400">{errors.time}</p>
                  )}
                </div>

                {/* Summary Pill */}
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-500/20 text-xs text-neutral-700 dark:text-gray-300 flex items-center justify-between">
                  <div>
                    <span className="text-neutral-500 dark:text-gray-400 block text-[11px]">Chosen Service:</span>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                      {selectedService}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs text-emerald-600 dark:text-emerald-300 underline hover:text-emerald-800 dark:hover:text-emerald-200"
                  >
                    Change
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CUSTOMER DETAILS */}
            {currentStep === 3 && (
              <motion.form
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onSubmit={handleFinalSubmit}
                className="space-y-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-gray-200 mb-1">
                    Step 3: Patient Information & WhatsApp Dispatch
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-gray-400">
                    We will populate your WhatsApp message directly to Dr. Shasath Begum.
                  </p>
                </div>

                {/* Patient Name */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-gray-300">
                    <User className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma / Fatima Syed"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full px-4 py-3 sm:py-2.5 bg-neutral-50 dark:bg-[#14141c] border rounded-xl text-neutral-900 dark:text-white text-base sm:text-sm focus:outline-none transition ${
                      errors.name
                        ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                        : "border-neutral-300 dark:border-white/[0.1] focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 dark:text-rose-400">{errors.name}</p>
                  )}
                </div>

                {/* Patient Phone Number */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-gray-300">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    WhatsApp Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-500 dark:text-gray-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={userPhone}
                      onChange={(e) => {
                        setUserPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      className={`w-full pl-12 pr-4 py-3 sm:py-2.5 bg-neutral-50 dark:bg-[#14141c] border rounded-xl text-neutral-900 dark:text-white text-base sm:text-sm focus:outline-none transition ${
                        errors.phone
                          ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                          : "border-neutral-300 dark:border-white/[0.1] focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-500 dark:text-rose-400">{errors.phone}</p>
                  )}
                  <p className="text-[11px] text-neutral-500 dark:text-gray-500">
                    Used to confirm your appointment and send clinic directions.
                  </p>
                </div>

                {/* Optional Symptoms / Notes */}
                <div className="space-y-1.5">
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-gray-300">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    Specific Pain Area or Symptoms (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Lower back pain for 6 months, neck stiffness, migraine attacks..."
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                    className="w-full px-4 py-2.5 sm:py-2 bg-neutral-50 dark:bg-[#14141c] border border-neutral-300 dark:border-white/[0.1] rounded-xl text-neutral-900 dark:text-white text-base sm:text-xs focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-1 focus:ring-emerald-500 dark:focus:ring-emerald-400 transition resize-none"
                  />
                </div>

                {/* Preview Box */}
                <div className="p-3 bg-neutral-100 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.06] rounded-xl text-[11px] text-neutral-600 dark:text-gray-400 space-y-1">
                  <div className="text-neutral-800 dark:text-gray-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Instant WhatsApp Dispatch Summary:
                  </div>
                  <div>• Service: <span className="text-neutral-900 dark:text-white">{selectedService}</span></div>
                  <div>• Slot: <span className="text-neutral-900 dark:text-white">{selectedDate} ({selectedTime})</span></div>
                  <div>• Practitioner: <span className="text-emerald-700 dark:text-emerald-300">Dr. M. Shasath Begum, M.D(Acu.)</span></div>
                </div>
              </motion.form>
            )}
          </div>

          {/* Footer Controls */}
          <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-neutral-50/98 dark:bg-[#0a0a0e]/98 backdrop-blur-md border-t border-neutral-200 dark:border-white/[0.08] flex items-center justify-between shrink-0 z-10">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06] transition"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div className="text-[11px] text-neutral-500 dark:text-gray-500">
                Confidential & Secure
              </div>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/25 transition-all transform active:scale-95"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black shadow-xl shadow-emerald-500/30 transition-all transform active:scale-95 disabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                {isSubmitting ? "Connecting..." : "Book via WhatsApp"}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
