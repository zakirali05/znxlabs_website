"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileSpreadsheet, 
  Layers, 
  Sliders, 
  Unlink, 
  Users, 
  AlertTriangle, 
  Zap, 
  TrendingUp,
  ShieldAlert
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { motion, AnimatePresence } from "framer-motion";

interface BottleneckItem {
  id: string;
  tabTitle: string;
  problemTitle: string;
  tag: string;
  icon: React.ElementType;
  legacy: {
    symptom: string;
    impact: string;
    dragLevel: string;
  };
  engineered: {
    solution: string;
    metricLabel: string;
    metricValue: string;
    efficiencyGain: string;
  };
  slug: string;
}

const BOTTLENECKS: BottleneckItem[] = [
  {
    id: "01",
    tabTitle: "Repetitive Data Entry",
    problemTitle: "Manual Document Ingestion & Re-Keying",
    tag: "Operational Overhead",
    icon: Clock,
    legacy: {
      symptom: "Staff copy-pasting line items from email PDFs, vendor invoices, and bid sheets into disconnected spreadsheets.",
      impact: "15–20 hours lost per team member weekly; human typographical errors in pricing formulas.",
      dragLevel: "Critical Friction",
    },
    engineered: {
      solution: "Event-driven extraction agents that parse unstructured attachments, mathematically validate figures, and update ERPs automatically.",
      metricLabel: "Turnaround Time",
      metricValue: "12 mins (down from 36h)",
      efficiencyGain: "-92% manual entry",
    },
    slug: "/ai-solutions/document-processing",
  },
  {
    id: "02",
    tabTitle: "Siloed Software",
    problemTitle: "Disconnected Tools & Database Lag",
    tag: "System Fragmentation",
    icon: Unlink,
    legacy: {
      symptom: "Field technicians, warehouse managers, and office billing teams operate in separate software with zero real-time sync.",
      impact: "Invoices delayed up to 10 days; stock inventory discrepancies and accidental double-bookings.",
      dragLevel: "High Friction",
    },
    engineered: {
      solution: "Robust two-way API middleware and webhook synchronization pipelines keeping records unified with zero data loss.",
      metricLabel: "Data Synchronization",
      metricValue: "Sub-second Real Time",
      efficiencyGain: "100% data integrity",
    },
    slug: "/software-development/api-integrations",
  },
  {
    id: "03",
    tabTitle: "Scattered Knowledge",
    problemTitle: "Tribal Knowledge & Buried Documentation",
    tag: "Information Retrieval",
    icon: FileSpreadsheet,
    legacy: {
      symptom: "Employees waste hours hunting through 10,000+ internal drive files, SOPs, and chat logs to find authoritative answers.",
      impact: "Slow customer onboarding, repeated mistakes by junior staff, and reliance on key individual memory.",
      dragLevel: "Compounding Drag",
    },
    engineered: {
      solution: "Grounded RAG assistants trained on internal archives providing instant answers with exact schematic citations.",
      metricLabel: "Query Resolution",
      metricValue: "Instant with Citations",
      efficiencyGain: "Saves 45 min/inquiry",
    },
    slug: "/ai-solutions/rag-knowledge-assistants",
  },
  {
    id: "04",
    tabTitle: "Off-The-Shelf SaaS Limits",
    problemTitle: "Generic Software That Doesn't Fit Your Workflow",
    tag: "Workflow Compromise",
    icon: Sliders,
    legacy: {
      symptom: "Forced to compromise operational processes to fit generic SaaS platforms while paying compounding seat license fees.",
      impact: "Bloated unused features, inability to automate proprietary business logic, zero IP ownership.",
      dragLevel: "Strategic Restriction",
    },
    engineered: {
      solution: "Bespoke custom software and web applications tailored precisely to your operational mechanics with full IP ownership.",
      metricLabel: "Intellectual Property",
      metricValue: "100% Owned by Client",
      efficiencyGain: "Zero recurring seat bloat",
    },
    slug: "/software-development/custom-software",
  },
];

export function BusinessProblems() {
  const [activeId, setActiveId] = useState("01");
  const activeItem = BOTTLENECKS.find((b) => b.id === activeId) || BOTTLENECKS[0];

  return (
    <section id="problems" className="relative py-28 lg:py-36 bg-[#090708] border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
      {/* Background ambient subtle glow */}
      <div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#492332]/15 blur-[160px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="max-w-3xl mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Operational Resolution
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
              Where manual work slows business growth.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              When daily operations rely on fragmented software and manual data entry, small delays compound into lost revenue. Here is how we eliminate those friction points.
            </p>
          </div>
        </MotionReveal>

        {/* Unique Kinetic Split Transformation Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Friction Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <MotionReveal delay={0.1}>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] block mb-2">
                Select Common Bottleneck:
              </span>

              {BOTTLENECKS.map((item) => {
                const Icon = item.icon;
                const isSelected = activeId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                      isSelected
                        ? "bg-[#191316] border-[#71334B] shadow-lg shadow-[#492332]/25"
                        : "bg-[#110D0F] border-[rgba(246,240,235,0.08)] hover:border-[rgba(246,240,235,0.2)] hover:bg-[#140F11]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-[#492332] text-[#F6F0EB] border border-[#71334B]"
                            : "bg-[rgba(246,240,235,0.04)] text-[#B8ADB2] group-hover:text-[#F6F0EB]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[#71334B] font-bold">
                            {item.id}
                          </span>
                          <span className="text-xs font-mono text-[#B8ADB2]">
                            {item.tag}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-[#F6F0EB] tracking-tight mt-0.5">
                          {item.tabTitle}
                        </h3>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-all ${
                        isSelected
                          ? "text-[#F6F0EB] translate-x-1"
                          : "text-neutral-600 group-hover:text-[#B8ADB2]"
                      }`}
                    />
                  </button>
                );
              })}
            </MotionReveal>
          </div>

          {/* Right Column: Before vs After Transformation Card with Framer Motion */}
          <div className="lg:col-span-7">
            <MotionReveal delay={0.2}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SpotlightCard className="p-8 sm:p-10 border border-[rgba(246,240,235,0.12)] bg-[#110D0F] shadow-2xl">
                    
                    {/* Header */}
                    <div className="pb-6 border-b border-[rgba(246,240,235,0.08)] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#71334B] font-bold">
                          Friction Analysis & Engineered Solution
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight mt-1">
                          {activeItem.problemTitle}
                        </h3>
                      </div>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-[rgba(246,240,235,0.04)] text-[#B8ADB2] border border-[rgba(246,240,235,0.08)] shrink-0">
                        <AlertTriangle className="w-3 h-3 text-[#71334B]" />
                        <span>{activeItem.legacy.dragLevel}</span>
                      </span>
                    </div>

                    {/* The Friction State (Legacy Bottleneck) */}
                    <div className="space-y-3 mb-6 p-5 rounded-2xl bg-[#090708] border border-[rgba(246,240,235,0.06)]">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B8ADB2]">
                        <span className="w-2 h-2 rounded-full bg-neutral-600" />
                        <span>The Operational Friction:</span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed">
                        {activeItem.legacy.symptom}
                      </p>

                      <div className="pt-2 text-xs text-neutral-400 font-mono">
                        Impact: {activeItem.legacy.impact}
                      </div>
                    </div>

                    {/* The ZNX Engineered State */}
                    <div className="space-y-4 p-6 rounded-2xl bg-[#191316] border border-[#71334B]/60 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F6F0EB]">
                          <span className="w-2 h-2 rounded-full bg-[#71334B] animate-pulse" />
                          <span>The ZNX Engineered Engine:</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#F6F0EB] font-bold bg-[#492332] px-2.5 py-0.5 rounded border border-[#71334B]/70">
                          {activeItem.engineered.efficiencyGain}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#F6F0EB] leading-relaxed font-medium">
                        {activeItem.engineered.solution}
                      </p>

                      {/* Measurable Metric Bar */}
                      <div className="pt-3 border-t border-[rgba(246,240,235,0.08)] flex items-center justify-between text-xs">
                        <span className="text-[#B8ADB2] font-mono">{activeItem.engineered.metricLabel}:</span>
                        <strong className="text-[#F6F0EB] font-mono text-sm">{activeItem.engineered.metricValue}</strong>
                      </div>
                    </div>

                    {/* Card Action Footer */}
                    <div className="mt-8 pt-6 border-t border-[rgba(246,240,235,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <Link
                        href={activeItem.slug}
                        className="text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors flex items-center gap-1.5"
                      >
                        <span>Inspect Architecture Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <MagneticButton href="/contact" variant="primary" className="text-xs py-2.5 px-4 w-full sm:w-auto">
                        <span>Eliminate This Bottleneck</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </MagneticButton>
                    </div>

                  </SpotlightCard>
                </motion.div>
              </AnimatePresence>
            </MotionReveal>
          </div>

        </div>

        {/* Pragmatic Engineering Banner */}
        <MotionReveal delay={0.3}>
          <div className="mt-14 p-6 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#71334B] shrink-0" />
              <p className="text-xs sm:text-sm text-[#B8ADB2]">
                <strong className="text-[#F6F0EB]">Clean Code vs AI Models:</strong> We assess whether a robust custom script, an API connector, or an AI agent is the most dependable, cost-effective solution for your business.
              </p>
            </div>
            <MagneticButton href="/contact" variant="secondary" className="shrink-0 text-xs py-2.5 px-4">
              <span>Request Technical Audit</span>
            </MagneticButton>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
