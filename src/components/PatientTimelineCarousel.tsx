"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  CheckCircle2,
  Calendar,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Activity,
  ArrowRight,
} from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import { useBooking } from "@/context/BookingContext";

interface ProgressionStep {
  session: string;
  milestone: string;
  reliefPercentage: string;
}

interface CaseStudy {
  id: string;
  patientName: string;
  ageGender: string;
  location: string;
  conditionCategory: "all" | "sciatica" | "cervical" | "pcod" | "anxiety";
  conditionTitle: string;
  durationSuffered: string;
  story: string;
  timeline: ProgressionStep[];
  outcome: string;
  treatmentModality: string;
  rating: number;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    patientName: "Syed Mansoor Ahmed",
    ageGender: "48, Male",
    location: "J.P. Nagar 2nd Phase, Bangalore",
    conditionCategory: "sciatica",
    conditionTitle: "Severe L4-L5 Lumbar Disc Herniation & Sciatic Nerve Radiating Pain",
    durationSuffered: "8 Months of Agonizing Chronic Pain",
    story:
      "I was advised urgent spinal surgery after 8 months of excruciating shooting pain down my left leg. Even walking 50 meters felt impossible. Dr. Shasath Begum diagnosed severe Bladder/Gallbladder meridian stagnation. She administered precision acupuncture and targeted cupping on Huantiao and Weizhong points. By the 4th session, my leg numbness and shooting pain had decreased by 90%. Today, I am back to work without surgery or painkillers.",
    timeline: [
      { session: "Session 1", milestone: "Immediate reduction in acute lumbar muscle spasm", reliefPercentage: "35% Relief" },
      { session: "Session 3", milestone: "Radiating pain retracted from ankle back up to glute", reliefPercentage: "65% Relief" },
      { session: "Session 5", milestone: "Normal walking gait restored; numbness fully cleared", reliefPercentage: "92% Relief" },
      { session: "Follow-up", milestone: "Pain-free living with zero pharmaceutical analgesics", reliefPercentage: "100% Sustained" },
    ],
    outcome: "Full mobility restored without surgery; daily walks resumed comfortably.",
    treatmentModality: "Acupuncture + Wet Hijama Cupping @ Sunnah Point",
    rating: 5,
  },
  {
    id: "case-2",
    patientName: "Dr. Ananya Rao",
    ageGender: "32, Female",
    location: "Jayanagar 4th Block, Bangalore",
    conditionCategory: "pcod",
    conditionTitle: "PCOD / PCOS, Hormonal Acne & Severe Cycle Irregularity",
    durationSuffered: "18 Months of Missed & Delayed Periods",
    story:
      "As a practicing dental surgeon in Bangalore, stress and irregular working hours had disrupted my endocrine rhythm. My cycles were delayed by 60–75 days, and I was experiencing severe cystic acne. Dr. Begum took time to understand my pulse constitution and treated the Spleen, Ren Mai, and Kidney channels. Within two months of weekly sessions, my natural menstrual cycle normalized without synthetic hormone pills.",
    timeline: [
      { session: "Session 2", milestone: "Abdominal heaviness and water retention decreased", reliefPercentage: "Initial Detox" },
      { session: "Session 4", milestone: "Sleep quality deepened; facial cystic inflammation cleared", reliefPercentage: "Hormonal Reset" },
      { session: "Session 6", milestone: "Natural 29-day cycle resumed spontaneously", reliefPercentage: "Cycle Restored" },
      { session: "Session 8", milestone: "Confirmed regular ovulation across two consecutive cycles", reliefPercentage: "100% Regular" },
    ],
    outcome: "Spontaneous 28-day menstrual cycle restored; hormonal acne cleared.",
    treatmentModality: "Gentle Female Meridian Balancing & Acupressure",
    rating: 5,
  },
  {
    id: "case-3",
    patientName: "Girish K. Nambiar",
    ageGender: "41, Male",
    location: "BTM Layout 2nd Stage, Bangalore",
    conditionCategory: "cervical",
    conditionTitle: "Cervical Spondylosis, C5-C6 Stiff Neck & Arm Tingling",
    durationSuffered: "1 Year of Desk Work Pain",
    story:
      "Spending 12 hours a day coding created excruciating neck stiffness that radiated into my right shoulder and index finger. Physiotherapy provided only temporary ease. Dr. Begum performed deep meridian release along the Small Intestine and Gallbladder channels, coupled with dry cupping on Jianjing (GB-21). The constant vice-like pressure lifted after the second appointment.",
    timeline: [
      { session: "Session 1", milestone: "Shoulder rotation range improved from 40° to 75°", reliefPercentage: "40% Mobility" },
      { session: "Session 2", milestone: "Right arm finger tingling and numbness stopped", reliefPercentage: "70% Mobility" },
      { session: "Session 4", milestone: "Complete freedom of neck rotation; zero morning stiffness", reliefPercentage: "95% Mobility" },
      { session: "Maintenance", milestone: "Monthly ergonomic maintenance checkup", reliefPercentage: "100% Pain-Free" },
    ],
    outcome: "Full cervical rotation regained; no arm tingling or stiffness.",
    treatmentModality: "Cervical Acupuncture + Dry Myofascial Cupping",
    rating: 5,
  },
  {
    id: "case-4",
    patientName: "Ayesha Siddiqua",
    ageGender: "36, Female",
    location: "Banashankari, Bangalore",
    conditionCategory: "anxiety",
    conditionTitle: "Chronic Insomnia, Night Panic Attacks & Vagus Nerve Exhaustion",
    durationSuffered: "6 Months of Broken Sleep (<3 Hours/Night)",
    story:
      "I had reached a state of severe burnout where my heart would palpitate the moment I tried to sleep. Sleeping tablets left me groggy and depressed. The calming meridian therapy with Dr. Begum was extraordinary. When she placed the needles on Yintang and Shenmen, I felt my tense chest unravel within 10 minutes. I slept for 8 hours undisturbed that night.",
    timeline: [
      { session: "Session 1", milestone: "Deep theta-state calmness; 7.5 hours unbroken sleep", reliefPercentage: "First Deep Sleep" },
      { session: "Session 2", milestone: "Resting heart rate normalized; daytime panic vanished", reliefPercentage: "80% Anxiety Drop" },
      { session: "Session 4", milestone: "Consistent 7-8 hour sleep schedule without medication", reliefPercentage: "Natural Sleep Restored" },
      { session: "Maintenance", milestone: "Vibrant mental clarity and renewed emotional stamina", reliefPercentage: "Complete Wellness" },
    ],
    outcome: "Sleeping 8 hours naturally every night; zero panic attacks.",
    treatmentModality: "Somatic Vagus Nerve Stimulation & Acupressure",
    rating: 5,
  },
];

export default function PatientTimelineCarousel() {
  const { openBooking } = useBooking();
  const [filter, setFilter] = useState<string>("all");

  const filteredCases =
    filter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.conditionCategory === filter);

  return (
    <section className="py-24 bg-white dark:bg-[#08080b] relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Documented Clinical Recovery Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Verified Patient <span className="text-emerald-600 dark:emerald-glow-text">Recovery Timelines</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-gray-400 mt-4 leading-relaxed">
            Examine step-by-step clinical progression milestones from real Bangalore residents
            treated by Dr. M. Shasath Begum at Wellness Therapy Centre.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Recovery Stories" },
            { id: "sciatica", label: "Sciatica & Disc Bulge" },
            { id: "cervical", label: "Cervical & Neck Pain" },
            { id: "pcod", label: "PCOD & Women's Health" },
            { id: "anxiety", label: "Insomnia & Anxiety" },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === btn.id
                  ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-black shadow-lg shadow-emerald-500/25"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-[#121218] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#1a1a24] border border-neutral-200 dark:border-white/[0.06]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((item) => (
            <TiltCard
              key={item.id}
              className="bg-neutral-50/80 dark:bg-[#111118] border border-neutral-200/90 dark:border-white/[0.08] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-md dark:shadow-none"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-base text-neutral-900 dark:text-white">
                        {item.patientName}
                      </span>
                      <span className="text-xs text-neutral-500">• {item.ageGender}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Condition & Duration Pill */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    {item.conditionTitle}
                  </div>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400/90 font-medium">
                    Duration: {item.durationSuffered}
                  </span>
                </div>

                {/* Patient Quote Story */}
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-gray-300 italic leading-relaxed mb-6 bg-white dark:bg-black/40 p-4 rounded-2xl border border-neutral-200/80 dark:border-white/[0.04] shadow-sm dark:shadow-none">
                  &ldquo;{item.story}&rdquo;
                </p>

                {/* Step-by-Step Session Progression Timeline */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-gray-400 flex items-center justify-between">
                    <span>Clinical Progression Timeline:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                      Documented Milestones
                    </span>
                  </div>

                  <div className="relative pl-6 space-y-3 border-l-2 border-emerald-500/30">
                    {item.timeline.map((step, idx) => (
                      <div key={idx} className="relative">
                        {/* Milestone dot */}
                        <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-neutral-50 dark:border-[#111118]" />
                        <div className="flex items-baseline justify-between text-xs">
                          <span className="font-bold text-neutral-900 dark:text-white">{step.session}</span>
                          <span className="font-semibold text-emerald-700 dark:text-emerald-300 text-[11px] bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                            {step.reliefPercentage}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-600 dark:text-gray-400 mt-0.5 leading-snug">
                          {step.milestone}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Outcome Box */}
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-500/20 text-xs text-neutral-800 dark:text-emerald-300 flex items-center gap-2 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>
                    <strong className="text-emerald-950 dark:text-white">Outcome: </strong>
                    {item.outcome}
                  </span>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] text-neutral-600 dark:text-gray-400">
                  Modality: <strong className="text-neutral-900 dark:text-white">{item.treatmentModality}</strong>
                </span>

                <button
                  type="button"
                  onClick={() => openBooking("General Wellness Consultation")}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-black flex items-center gap-1.5 transition active:scale-95 shadow-sm"
                >
                  <span>Consult on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
