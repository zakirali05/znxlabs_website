"use client";

import React, { useRef } from "react";
import { Search, Layers, ShieldCheck, TrendingUp, LucideIcon } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";

interface PrincipleItem {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const principles: PrincipleItem[] = [
  {
    step: "01",
    title: "Understand The Problem",
    description: "We learn how your business works before deciding what to build.",
    icon: Search,
  },
  {
    step: "02",
    title: "Tailored Solutions",
    description: "AI and software designed around your workflows, requirements, and goals.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Ownership & Control",
    description: "Clear agreements around your code, intellectual property, and deliverables.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Built to Evolve",
    description: "Solutions designed with maintainability and future improvements in mind.",
    icon: TrendingUp,
  },
];

// Single card component with smoothly mapped scroll styles
function ApproachCard({
  item,
  progress,
}: {
  item: PrincipleItem;
  progress: MotionValue<number>;
}) {
  const Icon = item.icon;

  // Background color interpolation: neutral dark surface -> subtle burgundy-tinted surface
  const backgroundColor = useTransform(
    progress,
    [0, 1],
    ["rgba(17, 13, 15, 1)", "rgba(28, 17, 23, 1)"]
  );

  // Border color interpolation: subtle dark border -> brand burgundy highlight
  const borderColor = useTransform(
    progress,
    [0, 1],
    ["rgba(246, 240, 235, 0.08)", "rgba(113, 51, 75, 0.9)"]
  );

  // Subtle depth elevation when active
  const boxShadow = useTransform(
    progress,
    [0, 1],
    [
      "0 0 0 1px rgba(246, 240, 235, 0)",
      "0 12px 30px -8px rgba(73, 35, 50, 0.35)",
    ]
  );

  // Icon container styling
  const iconContainerBg = useTransform(
    progress,
    [0, 1],
    ["rgba(246, 240, 235, 0.03)", "rgba(73, 35, 50, 0.75)"]
  );

  const iconContainerBorder = useTransform(
    progress,
    [0, 1],
    ["rgba(246, 240, 235, 0.08)", "rgba(113, 51, 75, 0.85)"]
  );

  const iconColor = useTransform(progress, [0, 1], ["#8a7f85", "#F6F0EB"]);
  const stepColor = useTransform(progress, [0, 1], ["#6e6469", "#d6acc1"]);

  return (
    <motion.div
      style={{
        backgroundColor,
        borderColor,
        boxShadow,
      }}
      className="p-4 sm:p-5 lg:p-7 xl:p-8 rounded-xl sm:rounded-2xl border transition-colors duration-200 flex flex-col justify-between h-full relative"
    >
      <div>
        {/* Top Header of Card */}
        <div className="flex items-center justify-between mb-2.5 sm:mb-4 lg:mb-6">
          <motion.div
            style={{
              backgroundColor: iconContainerBg,
              borderColor: iconContainerBorder,
            }}
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl border flex items-center justify-center shrink-0 transition-colors"
          >
            <motion.div style={{ color: iconColor }}>
              <Icon className="w-4 h-4 lg:w-5 lg:h-5" aria-hidden="true" />
            </motion.div>
          </motion.div>

          <motion.span
            style={{ color: stepColor }}
            className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase"
          >
            Phase {item.step}
          </motion.span>
        </div>

        {/* Card Title */}
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#F6F0EB] tracking-tight mb-1 sm:mb-2 lg:mb-2.5">
          {item.title}
        </h3>

        {/* Card Description */}
        <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed font-normal">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// Horizontal bold connecting line for Desktop Grid
function HorizontalConnector({
  progress,
}: {
  progress: MotionValue<number>;
  index?: number;
}) {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 w-6 xl:w-8 h-3 z-20 pointer-events-none">
      {/* Background subtle guide track */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-[rgba(246,240,235,0.08)] rounded-full" />

      {/* Progressive bold connecting line bridging node to node */}
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left center",
        }}
        className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 rounded-full bg-gradient-to-r from-[#71334B] via-[#b04d73] to-[#d6acc1] shadow-[0_0_10px_rgba(214,172,193,0.45)]"
      />
    </div>
  );
}

// Vertical bold connecting line for Mobile / Tablet stack
function VerticalConnector({
  progress,
}: {
  progress: MotionValue<number>;
  index?: number;
}) {
  return (
    <div className="flex lg:hidden my-1.5 sm:my-2 w-full justify-center items-center pointer-events-none z-10">
      <div className="relative w-3 h-5 sm:h-6 flex justify-center">
        {/* Background subtle guide track */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-[rgba(246,240,235,0.08)] rounded-full" />

        {/* Progressive bold connecting line bridging node to node */}
        <motion.div
          style={{
            scaleY: progress,
            transformOrigin: "center top",
          }}
          className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-[#71334B] via-[#b04d73] to-[#d6acc1] shadow-[0_0_10px_rgba(214,172,193,0.45)]"
        />
      </div>
    </div>
  );
}

export function DataImpact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Bind scroll progress directly to this section's container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Four Card Activation Progresses (smoothly sequenced)
  // Step 1: Card 1 activates
  const card1Progress = useTransform(scrollYProgress, [0.08, 0.22], [0, 1]);
  // Step 2: Arrow 1 draws -> Card 2 activates
  const arrow1Progress = useTransform(scrollYProgress, [0.22, 0.38], [0, 1]);
  const card2Progress = useTransform(scrollYProgress, [0.34, 0.48], [0, 1]);
  // Step 3: Arrow 2 draws -> Card 3 activates
  const arrow2Progress = useTransform(scrollYProgress, [0.48, 0.64], [0, 1]);
  const card3Progress = useTransform(scrollYProgress, [0.60, 0.74], [0, 1]);
  // Step 4: Arrow 3 draws -> Card 4 activates
  const arrow3Progress = useTransform(scrollYProgress, [0.74, 0.90], [0, 1]);
  const card4Progress = useTransform(scrollYProgress, [0.86, 0.96], [0, 1]);

  const cardProgresses = [card1Progress, card2Progress, card3Progress, card4Progress];
  const arrowProgresses = [arrow1Progress, arrow2Progress, arrow3Progress];

  // Static Fallback for reduced motion preferences
  if (shouldReduceMotion) {
    return (
      <section id="approach" className="relative py-20 lg:py-28 bg-[#0c090a] border-b border-[rgba(246,240,235,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                THE ZNX APPROACH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-tight">
              Technology built around real business{" "}
              <span className="relative inline-block whitespace-nowrap align-baseline px-1 mx-0.5">
                <span className="font-lobster font-normal text-[1.12em] tracking-normal text-[#d6acc1] inline-block select-none not-italic drop-shadow-sm">
                  problems
                </span>
                <svg
                  viewBox="0 0 285 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-1 sm:-bottom-2 md:-bottom-2.5 left-0 w-full h-[12px] sm:h-[15px] md:h-[18px] text-[#d6acc1] pointer-events-none overflow-visible"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 5 14 C 70 8, 180 5, 280 7"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              .
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 sm:p-8 border border-[#71334B]/80 bg-[#1c1217] rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#492332]/70 border border-[#71334B] flex items-center justify-center text-[#F6F0EB]">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[11px] font-semibold tracking-widest uppercase text-[#d6acc1]">
                        Phase {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#F6F0EB] tracking-tight mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#B8ADB2] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="approach"
      ref={containerRef}
      className="relative h-[250vh] sm:h-[270vh] lg:h-[280vh] bg-[#0c090a]"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden border-b border-[rgba(246,240,235,0.08)] pt-14 sm:pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Section Header: Visually stable throughout the sequence */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                THE ZNX APPROACH
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-tight">
              Technology built around real business{" "}
              <span className="relative inline-block whitespace-nowrap align-baseline px-1 mx-0.5">
                <span className="font-lobster font-normal text-[1.12em] tracking-normal text-[#d6acc1] inline-block select-none not-italic drop-shadow-sm">
                  problems
                </span>
                <svg
                  viewBox="0 0 285 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-1 sm:-bottom-2 md:-bottom-2.5 left-0 w-full h-[12px] sm:h-[15px] md:h-[18px] text-[#d6acc1] pointer-events-none overflow-visible"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M 5 14 C 70 8, 180 5, 280 7"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </span>
              .
            </h2>
          </div>

          {/* Desktop Layout: 4 Cards in One Row with Horizontal SVG Connectors */}
          <div className="hidden lg:grid grid-cols-4 gap-6 xl:gap-8 items-stretch relative">
            {principles.map((item, idx) => (
              <div key={item.title} className="relative flex flex-col h-full">
                <ApproachCard
                  item={item}
                  progress={cardProgresses[idx]}
                />

                {/* Connecting arrow to next card */}
                {idx < 3 && (
                  <HorizontalConnector
                    progress={arrowProgresses[idx]}
                    index={idx}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Layout: Connected Sequential Stack with Downward SVG Connectors */}
          <div className="flex lg:hidden flex-col items-stretch w-full max-w-xl mx-auto">
            {principles.map((item, idx) => (
              <React.Fragment key={item.title}>
                <ApproachCard
                  item={item}
                  progress={cardProgresses[idx]}
                />

                {/* Vertical downward connector to next card */}
                {idx < 3 && (
                  <VerticalConnector
                    progress={arrowProgresses[idx]}
                    index={idx}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
