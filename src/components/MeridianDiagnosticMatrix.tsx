"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Flame,
  HeartPulse,
  Brain,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { useLanguage } from "@/context/LanguageContext";

interface MeridianCondition {
  id: string;
  nameEn: string;
  nameKn: string;
  zone: string;
  meridianName: string;
  meridianChannel: string;
  keyPoints: { code: string; name: string; action: string }[];
  rootCause: string;
  recommendedService: string;
  modalityBadge: string;
  recoveryVelocity: string;
  reliefRate: string;
  svgPath: string; // SVG path coordinate string for animated energy channel
  svgPoints: { cx: number; cy: number; label: string }[];
}

const CONDITIONS_MATRIX: MeridianCondition[] = [
  {
    id: "sciatica",
    nameEn: "Sciatica & Lumbar Disc Herniation",
    nameKn: "ಸಯಾಟಿಕಾ ಮತ್ತು ತೀವ್ರ ಬೆನ್ನು ನೋವು",
    zone: "Lumbar & Lower Extremities",
    meridianName: "Foot Taiyang Bladder & Shaoyang Gallbladder",
    meridianChannel: "Bladder Channel (BL) & Gallbladder Channel (GB)",
    keyPoints: [
      { code: "BL-23 (Shenshu)", name: "Kidney Shu", action: "Nourishes lumbar spine and deep disc vitality" },
      { code: "GB-30 (Huantiao)", name: "Jumping Circle", action: "Releases sciatic nerve entrapment at piriformis" },
      { code: "BL-40 (Weizhong)", name: "Middle of the Crease", action: "Commands all disorders of the lower back and knees" },
      { code: "BL-60 (Kunlun)", name: "Kunlun Mountain", action: "Clears radiating nerve shooting pain along the calf" },
    ],
    rootCause:
      "Stagnation of Qi and Blood along the Bladder meridian, leading to mechanical and biochemical compression of the L4-L5/S1 nerve roots.",
    recommendedService: "Chronic & Acute Pain Management",
    modalityBadge: "Acupuncture + Wet Hijama Cupping @ Sunnah Point",
    recoveryVelocity: "Noticeable decompression in 1–3 sessions; 94% permanent pain reduction in 5 sessions.",
    reliefRate: "94% Clinical Relief",
    svgPath: "M 100 40 L 100 120 L 110 200 L 120 280 L 125 360",
    svgPoints: [
      { cx: 100, cy: 120, label: "BL-23" },
      { cx: 110, cy: 200, label: "GB-30" },
      { cx: 120, cy: 280, label: "BL-40" },
      { cx: 125, cy: 360, label: "BL-60" },
    ],
  },
  {
    id: "cervical",
    nameEn: "Cervical Spondylosis & Neck Strain",
    nameKn: "ಕುತ್ತಿಗೆ ಬಿಗಿತ ಮತ್ತು ಸರ್ವಿಕಲ್ ಸ್ಪಾಂಡಿಲೋಸಿಸ್",
    zone: "Cervical & Upper Trapezius",
    meridianName: "Hand Taiyang Small Intestine & Foot Shaoyang Gallbladder",
    meridianChannel: "Small Intestine (SI) & Gallbladder (GB) Channels",
    keyPoints: [
      { code: "GB-20 (Fengchi)", name: "Wind Pool", action: "Subdues occipital headaches, dizziness and neck spasms" },
      { code: "GB-21 (Jianjing)", name: "Shoulder Well", action: "Deeply unknots stubborn trapezius and shoulder blade tension" },
      { code: "SI-3 (Houxi)", name: "Back Stream", action: "Master acupoint for the entire cervical and spinal column" },
      { code: "LI-4 (Hegu)", name: "Joining Valley", action: "Commands all head, neck and facial nerve channels" },
    ],
    rootCause:
      "Wind-Cold-Dampness pathogen trapped in the cervical musculature compounded by postural tech-neck stress restricting vertebral blood flow.",
    recommendedService: "Acupuncture & Acupressure Session",
    modalityBadge: "Precision Meridian Needle Decompression + Dry Cupping",
    recoveryVelocity: "Range of motion improves by 50% in Session 1; complete resolution in 3–4 sessions.",
    reliefRate: "92% Mobility Restoration",
    svgPath: "M 100 30 Q 120 70 100 120 L 140 160 L 80 220",
    svgPoints: [
      { cx: 100, cy: 40, label: "GB-20" },
      { cx: 120, cy: 90, label: "GB-21" },
      { cx: 135, cy: 170, label: "SI-3" },
      { cx: 85, cy: 230, label: "LI-4" },
    ],
  },
  {
    id: "migraine",
    nameEn: "Chronic Migraines & Tension Headaches",
    nameKn: "ಮೈಗ್ರೇನ್ ಮತ್ತು ದೀರ್ಘಕಾಲದ ತಲೆನೋವು",
    zone: "Cranial & Temporoparietal Channels",
    meridianName: "Foot Shaoyang Gallbladder & Foot Jueyin Liver",
    meridianChannel: "Liver (LR) & Gallbladder (GB) Meridians",
    keyPoints: [
      { code: "Taiyang (M-HN-9)", name: "Supreme Yang", action: "Rapidly aborts severe temporal throbbing migraine attacks" },
      { code: "GV-20 (Baihui)", name: "Hundred Convergences", action: "Lifts mental clarity and drains excess cranial heat" },
      { code: "LR-3 (Taichong)", name: "Great Surge", action: "Pacifies liver fire rising and releases vascular spasm" },
      { code: "Al-Kahil Point", name: "Sunnah Point 1", action: "Flushes stagnant, cellular-waste burdened capillary blood" },
    ],
    rootCause:
      "Hyperactive Liver Yang rising to the temples with micro-vascular constriction triggered by stress, dietary nitrates, and cervical tension.",
    recommendedService: "Hijama / Cupping Therapy (Wet/Dry/Fire)",
    modalityBadge: "Authentic Sunnah Point Wet Hijama + Cranial Acupressure",
    recoveryVelocity: "Acute attack aborts within 30 minutes; frequency drops by 85% after 2 sessions.",
    reliefRate: "95% Attack Reduction",
    svgPath: "M 100 20 L 100 70 L 80 140 L 70 240 L 60 350",
    svgPoints: [
      { cx: 100, cy: 25, label: "GV-20" },
      { cx: 115, cy: 55, label: "Taiyang" },
      { cx: 90, cy: 110, label: "Al-Kahil" },
      { cx: 65, cy: 345, label: "LR-3" },
    ],
  },
  {
    id: "pcod",
    nameEn: "PCOD / PCOS & Hormonal Imbalance",
    nameKn: "ಪಿಸಿಒಡಿ / ಪಿಸಿಒಎಸ್ ಮತ್ತು ಹಾರ್ಮೋನ್ ಸಮಸ್ಯೆಗಳು",
    zone: "Abdominal & Endocrine Pelvic Grid",
    meridianName: "Conception Vessel (Ren Mai) & Foot Taiyin Spleen",
    meridianChannel: "Ren Mai (CV), Spleen (SP) & Kidney (KI)",
    keyPoints: [
      { code: "CV-4 (Guanyuan)", name: "Gate of Origin", action: "Tonifies primal hormonal essence and reproductive warmth" },
      { code: "SP-6 (Sanyinjiao)", name: "Three Yin Intersection", action: "Crucial regulator of Spleen, Liver, and Kidney female meridians" },
      { code: "CV-6 (Qihai)", name: "Sea of Qi", action: "Energizes lower abdominal metabolism and clears ovarian cyst fluid" },
      { code: "KI-3 (Taixi)", name: "Great Stream", action: "Strengthens endocrine vitality and balances progesterone/estrogen" },
    ],
    rootCause:
      "Spleen Qi deficiency accompanied by damp-phlegm accumulation in the pelvic cavity, disrupting the hypothalamic-pituitary-ovarian axis.",
    recommendedService: "Women's Health & PCOD Care",
    modalityBadge: "Gentle Female Meridian Harmonization (100% Non-Hormonal)",
    recoveryVelocity: "Cramping and bloating subside in 2 sessions; natural ovulatory cycle restored in 6–8 weeks.",
    reliefRate: "90% Cycle Regularity",
    svgPath: "M 100 130 L 100 180 L 100 240 L 85 330",
    svgPoints: [
      { cx: 100, cy: 145, label: "CV-6" },
      { cx: 100, cy: 200, label: "CV-4" },
      { cx: 85, cy: 330, label: "SP-6" },
      { cx: 92, cy: 370, label: "KI-3" },
    ],
  },
  {
    id: "insomnia",
    nameEn: "Insomnia, Anxiety & Nervous Fatigue",
    nameKn: "ನಿದ್ರಾಹೀನತೆ, ಆತಂಕ ಮತ್ತು ಮಾನಸಿಕ ಆಯಾಸ",
    zone: "Cranial, Shen & Vagus Nerve Matrix",
    meridianName: "Governor Vessel (Du Mai) & Hand Shaoyin Heart",
    meridianChannel: "Heart (HT), Pericardium (PC) & Du Mai (GV)",
    keyPoints: [
      { code: "Yintang (M-HN-3)", name: "Third Eye", action: "Instantly shifts brainwaves into delta/theta deep relaxation" },
      { code: "HT-7 (Shenmen)", name: "Spirit Gate", action: "Calms heart palpitations, emotional flutter, and night panic" },
      { code: "PC-6 (Neiguan)", name: "Inner Gate", action: "Opens the chest, regulates autonomic heart rate variability" },
      { code: "Anmian (Extra)", name: "Peaceful Sleep", action: "Induces natural circadian sleep initiation without sedation" },
    ],
    rootCause:
      "Hyperactivity of the sympathetic nervous system due to sustained cortisol surges, causing Shen (mind) agitation and sleep fragmentation.",
    recommendedService: "Stress, Depression & Anxiety Relief",
    modalityBadge: "Parasympathetic Vagal Activation & Somatic Calming",
    recoveryVelocity: "Deep 7–8 hour restorative sleep experienced on Night 1; nervous reset in 3 sessions.",
    reliefRate: "96% Sleep Quality Boost",
    svgPath: "M 100 35 L 100 80 Q 75 140 60 210 L 50 280",
    svgPoints: [
      { cx: 100, cy: 40, label: "Yintang" },
      { cx: 120, cy: 75, label: "Anmian" },
      { cx: 60, cy: 215, label: "PC-6" },
      { cx: 50, cy: 285, label: "HT-7" },
    ],
  },
  {
    id: "knee",
    nameEn: "Knee Osteoarthritis & Joint Stiffness",
    nameKn: "ಮೊಣಕಾಲು ಕೀಲು ನೋವು ಮತ್ತು ಸಂಧಿವಾತ",
    zone: "Patellar & Synovial Joint Matrix",
    meridianName: "Foot Yangming Stomach & Foot Taiyin Spleen",
    meridianChannel: "Stomach (ST), Spleen (SP) & Gallbladder (GB)",
    keyPoints: [
      { code: "ST-35 (Dubi)", name: "Calf's Nose", action: "Stimulates synovial fluid regeneration inside the patella" },
      { code: "Xiyan (MN-LE-16)", name: "Eyes of the Knee", action: "Clears joint swelling and inflammatory effusion" },
      { code: "ST-36 (Zusanli)", name: "Leg Three Miles", action: "Master systemic point for boosting cellular tissue regeneration" },
      { code: "SP-9 (Yinlingquan)", name: "Yin Mound Spring", action: "Drains chronic synovial fluid retention and joint edema" },
    ],
    rootCause:
      "Cartilage wear and micro-vascular stagnation around the patellar retinaculum, causing bone-on-bone friction and crepitus.",
    recommendedService: "Chronic & Acute Pain Management",
    modalityBadge: "Local Joint Needle Stimulation + Medicinal Herbal Infrared",
    recoveryVelocity: "Pain reduction when climbing stairs in 2 sessions; 85% stiffness relief in 5 sessions.",
    reliefRate: "91% Joint Mobility",
    svgPath: "M 100 240 L 90 290 L 110 320 L 95 380",
    svgPoints: [
      { cx: 90, cy: 285, label: "ST-35" },
      { cx: 110, cy: 285, label: "Xiyan" },
      { cx: 95, cy: 330, label: "ST-36" },
      { cx: 80, cy: 320, label: "SP-9" },
    ],
  },
];

export default function MeridianDiagnosticMatrix() {
  const { openBooking } = useBooking();
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState<string>("sciatica");

  const current =
    CONDITIONS_MATRIX.find((c) => c.id === activeId) || CONDITIONS_MATRIX[0];

  return (
    <section className="py-24 bg-[#fbf9f5] dark:bg-[#121110] relative overflow-hidden transition-colors">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1b3b2b]/6 dark:bg-[#34d399]/6 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4efe4] dark:bg-[#1c1a17] border border-[#d4af37]/35 dark:border-[#d4af37]/25 text-[#1b3b2b] dark:text-[#f3d987] text-xs font-semibold mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Interactive Meridian & Anatomy Matrix</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#1c1b18] dark:text-[#fbf9f5] tracking-tight">
            Explore Your Body&apos;s{" "}
            <span className="font-editorial-italic sage-glow-text">Healing Meridian Pathways</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {language === "kn"
              ? "ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ಡಾ. ಶಾಸತ್ ಬೇಗಂ, PhD ಅವರ ನಿಖರವಾದ ಆಕ್ಯುಪಾಯಿಂಟ್ ಚಿಕಿತ್ಸಾ ವಿಧಾನವನ್ನು ವೀಕ್ಷಿಸಿ."
              : "Select your health condition below to visualize the exact TCM energy channels, acupoint coordinates, and clinical recovery protocol targeted by Dr. M. Shasath Begum, PhD."}
          </p>
        </div>

        {/* Condition Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {CONDITIONS_MATRIX.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`p-3 sm:p-4 rounded-2xl border text-left transition-all ${
                  isActive
                    ? "bg-[#f4efe4] dark:bg-[#201d19] border-[#d4af37] shadow-md ring-1 ring-[#d4af37]/60"
                    : "bg-white dark:bg-[#181715] border-[#1b3b2b]/10 dark:border-white/[0.06] hover:bg-[#fcfbf9] dark:hover:bg-[#1f1d1a] hover:border-[#d4af37]/40 text-neutral-600 dark:text-neutral-400 shadow-sm"
                }`}
              >
                <div
                  className={`text-xs font-semibold leading-tight transition-colors ${
                    isActive ? "text-[#1b3b2b] dark:text-[#f3d987]" : "text-[#1c1b18] dark:text-neutral-200"
                  }`}
                >
                  {language === "kn" ? item.nameKn : item.nameEn}
                </div>
                <div className="text-[10px] text-neutral-500 dark:text-gray-500 mt-1 truncate">
                  {item.zone}
                </div>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Presentation Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Column: Interactive Animated Meridian Channel Map (SVG Canvas) */}
            <div className="lg:col-span-5 bg-white dark:bg-[#12121a] border border-neutral-200 dark:border-emerald-500/30 rounded-3xl p-4 sm:p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                      Bio-Electric Channel Map
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mt-0.5">
                      {current.meridianName}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-300 dark:border-emerald-500/30">
                    {current.reliefRate}
                  </span>
                </div>

                {/* Meridian Visual Graphic */}
                <div className="relative aspect-[3/4] w-full max-w-xs mx-auto rounded-2xl bg-[#09090d] border border-neutral-300 dark:border-white/[0.08] p-4 flex items-center justify-center overflow-hidden shadow-inner">
                  {/* Meridian Background Grid */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(#10b981 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Anatomical Silhouette Overlay */}
                  <div className="absolute inset-x-0 bottom-4 top-4 border border-dashed border-emerald-500/20 rounded-full mx-auto w-36 pointer-events-none opacity-40" />

                  {/* SVG Meridian Pathway */}
                  <svg
                    viewBox="0 0 200 400"
                    className="w-full h-full relative z-10"
                  >
                    {/* Glowing Meridian Flow Line */}
                    <path
                      d={current.svgPath}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3.5"
                      strokeDasharray="6 4"
                      className="animate-[dash_20s_linear_infinite]"
                    />

                    {/* Acupoint Nodes */}
                    {current.svgPoints.map((pt, idx) => (
                      <g key={idx}>
                        {/* Outer Glow Halo */}
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r="12"
                          fill="rgba(16, 185, 129, 0.15)"
                          className="animate-ping"
                        />
                        {/* Center Acupoint Pin */}
                        <circle
                          cx={pt.cx}
                          cy={pt.cy}
                          r="5.5"
                          fill="#fbbf24"
                          stroke="#ffffff"
                          strokeWidth="2"
                        />
                        {/* Label Badge */}
                        <rect
                          x={pt.cx + 9}
                          y={pt.cy - 10}
                          width="58"
                          height="18"
                          rx="4"
                          fill="rgba(18, 18, 24, 0.9)"
                          stroke="rgba(16, 185, 129, 0.5)"
                          strokeWidth="1"
                        />
                        <text
                          x={pt.cx + 14}
                          y={pt.cy + 3}
                          fill="#f3f4f6"
                          fontSize="9.5"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          {pt.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-white/[0.06] text-center text-[11px] text-neutral-500 dark:text-gray-400">
                Pulsing nodes indicate target needle and vacuum suction trigger points.
              </div>
            </div>

            {/* Right Column: Clinical Protocol & Prescription */}
            <div className="lg:col-span-7 bg-white dark:bg-[#121218] border border-neutral-200 dark:border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl dark:shadow-2xl">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Clinical Diagnosis & Root Mechanism:
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1">
                    {language === "kn" ? current.nameKn : current.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-gray-300 mt-2 leading-relaxed">
                    {current.rootCause}
                  </p>
                </div>

                {/* Acupoints Grid */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-gray-400 block mb-2.5">
                    Targeted Acupoints & Anatomical Function:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.keyPoints.map((pt, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/[0.06] space-y-0.5"
                      >
                        <div className="text-xs font-bold text-amber-700 dark:text-amber-300">
                          {pt.code} — {pt.name}
                        </div>
                        <div className="text-[11px] text-neutral-600 dark:text-gray-300 leading-snug">
                          {pt.action}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modality & Recovery Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20">
                    <span className="text-[11px] text-emerald-800 dark:text-emerald-400 font-semibold block mb-1">
                      Recommended Clinical Modality:
                    </span>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white leading-relaxed">
                      {current.modalityBadge}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.06]">
                    <span className="text-[11px] text-neutral-500 dark:text-gray-400 font-semibold block mb-1">
                      Recovery Horizon:
                    </span>
                    <div className="text-xs font-bold text-emerald-700 dark:text-emerald-300 leading-relaxed">
                      {current.recoveryVelocity}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-6 mt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
                  Treated personally by <strong className="text-[#1c1b18] dark:text-white">Dr. M. Shasath Begum, M.D(Acu.), PhD</strong>
                </div>

                <button
                  type="button"
                  onClick={() => openBooking(current.recommendedService)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold bg-[#1b3b2b] hover:bg-[#142e21] dark:bg-[#1f3f2f] text-[#fbf9f5] border border-[#d4af37]/45 shadow-xl shadow-[#1b3b2b]/15 flex items-center justify-center gap-2 transition active:scale-95"
                >
                  <Activity className="w-4 h-4 text-[#d4af37]" />
                  <span>Reserve This Specialized Protocol</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37]" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
