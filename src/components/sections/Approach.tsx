"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  Layers, 
  RefreshCw, 
  ShieldCheck 
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { motion, AnimatePresence } from "framer-motion";

interface Milestone {
  step: string;
  name: string;
  focus: string;
  tagline: string;
  description: string;
  concreteDeliverables: string[];
  icon: React.ElementType;
}

const MILESTONES: Milestone[] = [
  {
    step: "01",
    name: "Discovery & Strategy",
    focus: "Discovery & Alignment",
    tagline: "Understand your operational bottleneck and determine the best solution.",
    description: "We learn how your team currently works, identify where manual hours drain payroll, and verify whether a simple custom script or a smart automation tool provides the highest return on investment.",
    concreteDeliverables: [
      "Operational Bottleneck Assessment",
      "Cost-Benefit & ROI Analysis",
      "Practical Technical Recommendation",
    ],
    icon: Compass,
  },
  {
    step: "02",
    name: "Fixed Scope & Plan",
    focus: "Architecture & Scope",
    tagline: "Lock in fixed milestones, delivery schedules, and clear pricing.",
    description: "We define the software blueprint, what tools will connect, and agree on a transparent fixed-price milestone contract with zero surprise overages.",
    concreteDeliverables: [
      "Fixed Milestone Roadmap & Budget",
      "Software Design Blueprint",
      "Clear Architectural Specifications",
    ],
    icon: Layers,
  },
  {
    step: "03",
    name: "Build & Test",
    focus: "Iterative Build & Staging",
    tagline: "Build your software in private sandboxes without disrupting live operations.",
    description: "We build your software iteratively, conducting continuous tests with your real business data in an isolated staging environment so your ongoing operations are completely safe.",
    concreteDeliverables: [
      "Working Interactive Previews",
      "Iterative Progress Demos",
      "Thorough Quality & Edge Case Testing",
    ],
    icon: Cpu,
  },
  {
    step: "04",
    name: "Launch & Support",
    focus: "Deployment & Handover",
    tagline: "Smooth deployment, staff training, and 100% intellectual property transfer.",
    description: "We launch your new software with zero operational downtime, train your key team members, and transfer full ownership of the code, databases, and assets directly to you.",
    concreteDeliverables: [
      "Zero-Downtime Live Rollout",
      "100% Code & IP Ownership Handover",
      "Team Onboarding & Ongoing SLA Support",
    ],
    icon: RefreshCw,
  },
];

export function Approach() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeMilestone = MILESTONES[activeStepIndex];

  return (
    <section id="how-we-work" className="relative py-24 lg:py-32 bg-[#0c090a] border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/3 w-[550px] h-[350px] bg-[#492332]/15 blur-[170px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Our Process
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
                Four simple steps from problem to working{" "}
                <span className="relative inline-block whitespace-nowrap align-baseline px-1 mx-0.5">
                  <span className="font-lobster font-normal text-[1.12em] tracking-normal text-[#d6acc1] inline-block select-none not-italic drop-shadow-sm">
                    software
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
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </svg>
                </span>
                .
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                No endless discovery meetings or surprise bills. We keep the process predictable, transparent, and focused on commercial value from day one.
              </p>
            </div>

            <div className="shrink-0">
              <MagneticButton href="/how-we-work" variant="secondary" className="text-xs py-2.5 px-4">
                <span>View Full Process Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </MotionReveal>

        {/* Interactive Milestone Horizon Scrubber */}
        <MotionReveal delay={0.1}>
          <div className="relative mb-10">
            {/* Horizontal timeline bar */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[rgba(246,240,235,0.08)] -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {MILESTONES.map((m, idx) => {
                const isSelected = activeStepIndex === idx;
                const Icon = m.icon;

                return (
                  <button
                    key={m.step}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#191316] border-[#71334B] shadow-xl shadow-[#492332]/30 scale-[1.02]"
                        : "bg-[#110D0F] border-[rgba(246,240,235,0.08)] hover:border-[rgba(246,240,235,0.2)] hover:bg-[#140F11]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-[rgba(246,240,235,0.06)] mb-3">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                            isSelected
                              ? "bg-[#492332] text-[#F6F0EB] border border-[#71334B]"
                              : "bg-[rgba(246,240,235,0.04)] text-[#B8ADB2]"
                          }`}
                        >
                          Step {m.step}
                        </span>
                        <span className="text-[10px] font-mono text-[#d6acc1]">
                          {m.focus}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-[#F6F0EB] tracking-tight">
                        {m.name}
                      </h3>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[11px] font-mono">
                      <span className={isSelected ? "text-[#F6F0EB]" : "text-neutral-500"}>
                        {isSelected ? "Active Step" : "View Step"}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? "text-[#71334B]" : "text-neutral-600"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </MotionReveal>

        {/* Dynamic Detail Card for the Selected Phase with Framer Motion */}
        <MotionReveal delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.step}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightCard 
                className="p-8 sm:p-12 border border-[#71334B] bg-[#492332] shadow-2xl shadow-[#492332]/35"
                spotlightColor="rgba(214, 172, 193, 0.25)"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Summary */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#F6F0EB] bg-black/25 px-3 py-1 rounded-full border border-white/15">
                        Step {activeMilestone.step} • {activeMilestone.focus}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] tracking-tight">
                      {activeMilestone.tagline}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#F6F0EB]/85 leading-relaxed">
                      {activeMilestone.description}
                    </p>
                  </div>

                  {/* Right Column: Concrete Deliverables */}
                  <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-black/25 border border-white/10 shadow-xl space-y-4 backdrop-blur-sm">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6acc1] font-bold block">
                      Concrete Deliverables You Receive
                    </span>

                    <ul className="space-y-3 text-xs text-[#F6F0EB]">
                      {activeMilestone.concreteDeliverables.map((del, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                          <span className="font-medium text-[#F6F0EB]">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          </AnimatePresence>
        </MotionReveal>

        {/* Zero Disruption Guarantee */}
        <MotionReveal delay={0.3}>
          <div className="mt-10 p-5 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#F6F0EB]">
              <ShieldCheck className="w-5 h-5 text-[#71334B] shrink-0" />
              <span>
                <strong>Zero Disruption Guarantee:</strong> We build in safe staging environments so your current business operations never experience downtime.
              </span>
            </div>

            <MagneticButton href="/contact" variant="primary" className="shrink-0 text-xs py-2 px-4">
              <span>Start With a Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
