import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import DoctorStatusTicker from "@/components/DoctorStatusTicker";
import Navbar from "@/components/Navbar";
import WhatsAppBookingModal from "@/components/WhatsAppBookingModal";
import ToastNotification from "@/components/ToastNotification";
import MobileStickyBar from "@/components/MobileStickyBar";
import AmbientSoundPlayer from "@/components/AmbientSoundPlayer";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wellness Therapy Centre | Dr. M. Shasath Begum, M.D(Acu.), PhD Bangalore",
  description:
    "Multi-million dollar medical wellness sanctuary in J.P. Nagar, Bangalore led by Dr. M. Shasath Begum, M.D(Acu.), PhD. Clinical Acupressure, Acupuncture, Cupping, and Hijama (@ Sunnah Point) for lasting chronic pain relief, PCOD care, and total vitality.",
  keywords: [
    "Acupuncture Bangalore",
    "Hijama Bangalore",
    "Sunnah Point Hijama",
    "Dr. M. Shasath Begum",
    "Dr. M. Shasath Begum, PhD",
    "Wellness Therapy Centre J.P. Nagar",
    "Cupping Therapy Bangalore",
    "Sciatica Pain Relief Bangalore",
    "Acupressure Bangalore",
    "PCOD Acupuncture Bangalore",
  ],
  authors: [{ name: "Dr. M. Shasath Begum, M.D(Acu.), PhD" }],
  openGraph: {
    title: "Wellness Therapy Centre | Dr. M. Shasath Begum, M.D(Acu.), PhD",
    description:
      "Premier holistic healing sanctuary in J.P. Nagar, Bangalore. Clinical Acupuncture, Acupressure, Cupping, and authentic Hijama (@ Sunnah Point).",
    url: "https://wellnesstherapycentre.com",
    siteName: "Wellness Therapy Centre",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Advanced Local SEO JSON-LD Structured Data
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://wellnesstherapycentre.com/#clinic",
        name: "Wellness Therapy Centre",
        alternateName: "ವೆಲ್ನೆಸ್ ಥೆರಪಿ ಸೆಂಟರ್",
        url: "https://wellnesstherapycentre.com",
        telephone: "+919740495548",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card",
        image: "https://wellnesstherapycentre.com/images/clinic-sanctuary.jpg",
        medicalSpecialty: [
          "Acupuncture",
          "Acupressure",
          "Traditional Chinese Medicine",
          "Hijama Cupping Therapy",
          "Holistic Health",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "No. 11, 1st Main, Gangadhar Nagar",
          addressLocality: "J.P. Nagar, Bangalore",
          addressRegion: "Karnataka",
          postalCode: "560078",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.9063,
          longitude: 77.5857,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "09:00",
            closes: "20:00",
          },
        ],
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=No.+11,+1st+Main,+Gangadhar+Nagar,+J.P.+Nagar,+Bangalore+-+560078",
      },
      {
        "@type": "Physician",
        "@id": "https://wellnesstherapycentre.com/#physician",
        name: "Dr. M. Shasath Begum, PhD",
        honorificPrefix: "Dr.",
        honorificSuffix: "M.D(Acu.), PhD",
        jobTitle: "Senior Holistic Physician & Acupuncturist",
        worksFor: {
          "@id": "https://wellnesstherapycentre.com/#clinic",
        },
        description:
          "Senior Acupuncturist, Acupressure Master, and Certified Hijama Specialist with over 15 years clinical practice in Bangalore.",
        telephone: "+919740495548",
        gender: "Female",
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} min-h-screen bg-[#fbf9f5] text-[#1c1b18] dark:bg-[#121110] dark:text-[#f6f4ef] flex flex-col antialiased selection:bg-[#d4af37]/25 selection:text-[#121110] dark:selection:bg-[#34d399]/25 dark:selection:text-white transition-colors duration-300 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <LanguageProvider>
              <BookingProvider>
                <DoctorStatusTicker />
                <Navbar />
                <main className="flex-1 overflow-x-hidden">{children}</main>
                <Footer />
                <WhatsAppBookingModal />
                <ToastNotification />
                <AmbientSoundPlayer />
                <MobileStickyBar />
              </BookingProvider>
            </LanguageProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
