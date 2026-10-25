"use client";

import React, { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(16, 185, 129, 0.25)",
  intensity = 15,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-intensity, intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`relative rounded-3xl transition-shadow duration-300 ${
          isHovered
            ? "border-emerald-500/50 shadow-xl shadow-emerald-500/10 dark:shadow-2xl dark:shadow-emerald-950/40"
            : "border-neutral-200 dark:border-white/[0.08]"
        } ${className}`}
      >
        {/* Dynamic Glare Overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${x.get() * 100}% ${
                y.get() * 100
              }%, ${glowColor} 0%, transparent 70%)`,
            }}
          />
        )}
        <div style={{ transform: "translateZ(20px)" }} className="relative z-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
