"use client";

import React from "react";
import { TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function DataImpact() {
  const stats = [
    {
      value: "15,000+",
      label: "Hours Saved Annually",
      subtext: "Eliminated from repetitive data entry, manual paperwork, and reconciliation.",
      icon: Clock,
    },
    {
      value: "85%",
      label: "Faster Turnaround",
      subtext: "Average reduction in quote preparation and document intake times.",
      icon: Zap,
    },
    {
      value: "100%",
      label: "Client Code Ownership",
      subtext: "Every line of software and database asset belongs completely to you.",
      icon: ShieldCheck,
    },
    {
      value: "4–8 Wks",
      label: "Production Delivery",
      subtext: "Typical timeline from initial discovery call to live deployment.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="impact" className="relative py-20 lg:py-28 bg-[#0c090a] border-b border-[rgba(246,240,235,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Proven Performance
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F6F0EB] leading-tight">
              Measurable numbers that drive real ROI.
            </h2>
          </div>
        </MotionReveal>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <MotionReveal key={s.label} delay={0.1 * idx}>
                <SpotlightCard className="p-8 border border-[rgba(246,240,235,0.08)] bg-[#110D0F] text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[rgba(246,240,235,0.04)] border border-[rgba(246,240,235,0.08)] flex items-center justify-center text-[#71334B] mx-auto mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F6F0EB] font-mono mb-2">
                      {s.value}
                    </div>

                    <div className="text-sm font-bold text-[#d6acc1] mb-2">
                      {s.label}
                    </div>

                    <p className="text-xs text-[#B8ADB2] leading-relaxed">
                      {s.subtext}
                    </p>
                  </div>
                </SpotlightCard>
              </MotionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
