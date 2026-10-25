"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ToastState {
  show: boolean;
  title: string;
  message: string;
}

interface BookingContextType {
  isBookingOpen: boolean;
  initialService: string | undefined;
  openBooking: (serviceName?: string) => void;
  closeBooking: () => void;
  toast: ToastState | null;
  showToast: (title: string, message: string) => void;
  hideToast: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [initialService, setInitialService] = useState<string | undefined>(undefined);
  const [toast, setToast] = useState<ToastState | null>(null);

  const openBooking = (serviceName?: string) => {
    if (serviceName) {
      setInitialService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => {
      setToast(null);
    }, 6000);
  };

  const hideToast = () => {
    setToast(null);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        initialService,
        openBooking,
        closeBooking,
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
