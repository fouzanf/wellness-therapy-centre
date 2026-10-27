"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "kn";

export interface Translations {
  clinicName: string;
  doctorName: string;
  doctorTitle: string;
  locationTag: string;
  nav: {
    home: string;
    treatments: string;
    hijama: string;
    about: string;
    location: string;
    callDoctor: string;
    bookAppointment: string;
  };
  ticker: {
    online: string;
    hours: string;
    cta: string;
  };
  hero: {
    badge: string;
    rating: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaWhatsApp: string;
    ctaCall: string;
    statYears: string;
    statPatients: string;
    statSterile: string;
  };
  booking: {
    modalTitle: string;
    step1: string;
    step2: string;
    step3: string;
    submit: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    clinicName: "WELLNESS THERAPY CENTRE",
    doctorName: "Dr. M. Shasath Begum, M.D(Acu.), PhD",
    doctorTitle: "Holistic Physician & Acupuncturist",
    locationTag: "J.P. Nagar, Bangalore",
    nav: {
      home: "Home",
      treatments: "Treatments",
      hijama: "Hijama @ Sunnah",
      about: "About Doctor",
      location: "Location",
      callDoctor: "Call Doctor",
      bookAppointment: "Book Appointment",
    },
    ticker: {
      online: "Dr. M. Shasath Begum, PhD is In-Clinic Today",
      hours: "Consulting 9:00 AM – 8:00 PM (All 7 Days)",
      cta: "Instant WhatsApp Confirmation",
    },
    hero: {
      badge: "Holistic Meridian Sanctuary • J.P. Nagar, Bangalore",
      rating: "5.0 Verified Patient Rating",
      titleStart: "Restore Vitality & Relieve Chronic Pain With ",
      titleHighlight: "Natural Meridian Therapy",
      subtitle:
        "Led by esteemed practitioner Dr. M. Shasath Begum, M.D(Acu.), PhD. Combining clinical Acupuncture, Acupressure, Cupping, and Hijama (@ Sunnah Point) for lasting healing without recurring pills.",
      ctaWhatsApp: "Book Appointment",
      ctaCall: "Call +91 9740495548",
      statYears: "Years Clinical Care",
      statPatients: "Healing Sessions",
      statSterile: "Sterile Disposable Cups",
    },
    booking: {
      modalTitle: "Book with Dr. M. Shasath Begum, PhD",
      step1: "Select Therapy Service",
      step2: "Date & Preferred Time",
      step3: "Patient Details & WhatsApp Dispatch",
      submit: "Book Appointment",
    },
  },
  kn: {
    clinicName: "ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್",
    doctorName: "ಡಾ. ಎಂ. ಶಾಸತ್ ಬೇಗಂ, M.D(Acu.), PhD",
    doctorTitle: "ಹೋಲಿಸ್ಟಿಕ್ ವೈದ್ಯೆ ಮತ್ತು ಆಕ್ಯುಪಂಕ್ಚರ್ ತಜ್ಞೆ",
    locationTag: "ಜೆ.ಪಿ. ನಗರ, ಬೆಂಗಳೂರು",
    nav: {
      home: "ಮುಖಪುಟ",
      treatments: "ಚಿಕಿತ್ಸೆಗಳು",
      hijama: "ಸುನ್ನತ್ ಹಿಜಾಮಾ",
      about: "ವೈದ್ಯರ ಪರಿಚಯ",
      location: "ಕ್ಲಿನಿಕ್ ವಿಳಾಸ",
      callDoctor: "ಕರೆ ಮಾಡಿ",
      bookAppointment: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
    },
    ticker: {
      online: "ಡಾ. ಶಾಸತ್ ಬೇಗಂ, PhD ಇಂದು ಕ್ಲಿನಿಕ್‌ನಲ್ಲಿದ್ದಾರೆ",
      hours: "ಸಮಾಲೋಚನೆ: ಬೆಳಿಗ್ಗೆ 9:00 - ರಾತ್ರಿ 8:00 (ವಾರದ ಎಲ್ಲಾ ದಿನಗಳು)",
      cta: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ತ್ವರಿತ ದೃಢೀಕರಣ",
    },
    hero: {
      badge: "ನೈಸರ್ಗಿಕ ಮೆರಿಡಿಯನ್ ಆರೋಗ್ಯ ಕೇಂದ್ರ • ಜೆ.ಪಿ. ನಗರ, ಬೆಂಗಳೂರು",
      rating: "5.0 ರೋಗಿಗಳ ತೃಪ್ತಿ ರೇಟಿಂಗ್",
      titleStart: "ಔಷಧಿಗಳಿಲ್ಲದೆ ದೀರ್ಘಕಾಲದ ನೋವಿನಿಂದ ಮುಕ್ತಿ ಪಡೆಯಿರಿ: ",
      titleHighlight: "ನೈಸರ್ಗಿಕ ಮೆರಿಡಿಯನ್ ಚಿಕಿತ್ಸೆ",
      subtitle:
        "ಪ್ರಸಿದ್ಧ ವೈದ್ಯೆ ಡಾ. ಎಂ. ಶಾಸತ್ ಬೇಗಂ, M.D(Acu.), PhD ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ. ಆಕ್ಯುಪಂಕ್ಚರ್, ಆಕ್ಯುಪ್ರೆಶರ್, ಕಪ್ಪಿಂಗ್ ಮತ್ತು ಪವಿತ್ರ ಸುನ್ನತ್ ಪಾಯಿಂಟ್ ಹಿಜಾಮಾ ಮೂಲಕ ಶಾಶ್ವತ ಪರಿಹಾರ.",
      ctaWhatsApp: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ",
      ctaCall: "ಕರೆ ಮಾಡಿ: +91 9740495548",
      statYears: "ವರ್ಷಗಳ ಅನುಭವ",
      statPatients: "ಯಶಸ್ವಿ ಚಿಕಿತ್ಸೆಗಳು",
      statSterile: "ಏಕ-ಬಳಕೆಯ ಸುರಕ್ಷಿತ ಕಪ್‌ಗಳು",
    },
    booking: {
      modalTitle: "ಡಾ. ಶಾಸತ್ ಬೇಗಂ, PhD ಅವರೊಂದಿಗೆ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
      step1: "ಚಿಕಿತ್ಸೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      step2: "ದಿನಾಂಕ ಮತ್ತು ಸಮಯ",
      step3: "ರೋಗಿಯ ಮಾಹಿತಿ & ವಾಟ್ಸಾಪ್ ಕಳುಹಿಸಿ",
      submit: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "kn" : "en"));
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
