"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function WhyUs() {
  const comparisons = [
    {
      factor: "Development Speed",
      traditional: "Months of slide decks and discovery meetings before any working software is seen.",
      znxLabs: "Interactive working demo in 2 weeks; full production rollout in 4 to 8 weeks.",
    },
    {
      factor: "Who You Talk To",
      traditional: "Account managers and sales representatives who have never written code.",
      znxLabs: "Direct communication with the senior software engineers building your system.",
    },
    {
      factor: "Intellectual Property",
      traditional: "Hostage code, proprietary lock-in, or compounding monthly SaaS seat licenses.",
      znxLabs: "100% intellectual property ownership. You own the code, data, and designs forever.",
    },
    {
      factor: "Budget & Pricing",
      traditional: "Unpredictable hourly billing with surprise overages at every milestone.",
      znxLabs: "Transparent fixed milestones and guaranteed quotes agreed upon before work begins.",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#0c090a] border-b border-[rgba(246,240,235,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Why Choose ZNX Labs
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
              Engineered differently from typical software agencies.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              We eliminate the friction that makes most software projects painful. Here is why ambitious businesses partner with us.
            </p>
          </div>
        </MotionReveal>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {comparisons.map((c, idx) => (
            <MotionReveal key={c.factor} delay={0.1 * idx}>
              <SpotlightCard className="p-8 border border-[rgba(246,240,235,0.08)] bg-[#110D0F] h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#F6F0EB] tracking-tight pb-4 border-b border-[rgba(246,240,235,0.06)] mb-6 flex items-center justify-between">
                    <span>{c.factor}</span>
                    <span className="text-[10px] font-mono text-[#71334B] uppercase tracking-wider font-semibold">
                      Comparison
                    </span>
                  </h3>

                  {/* Traditional Way (Muted Neutral Gray - On-brand) */}
                  <div className="p-4 rounded-xl bg-[#090708] border border-[rgba(246,240,235,0.05)] mb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#B8ADB2] mb-1.5">
                      <Minus className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span className="font-mono text-[11px] uppercase tracking-wider">The Traditional Agency Approach</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed pl-5">
                      {c.traditional}
                    </p>
                  </div>

                  {/* ZNX Labs Way (Luminous Deep Vine & Burgundy - On-brand) */}
                  <div className="p-5 rounded-xl bg-[#191316] border border-[#71334B]/60 shadow-lg shadow-[#492332]/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#F6F0EB]">
                        <Check className="w-4 h-4 text-[#d6acc1] shrink-0" />
                        <span className="font-mono text-[11px] uppercase tracking-wider">The ZNX Labs Standard</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#d6acc1] bg-[#492332] px-2 py-0.5 rounded border border-[#71334B]/70">
                        Included
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#F6F0EB] leading-relaxed pl-6 font-medium">
                      {c.znxLabs}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </MotionReveal>
          ))}
        </div>

        {/* Quick CTA */}
        <MotionReveal delay={0.3}>
          <div className="mt-12 p-6 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-[#F6F0EB] font-medium">
              Want to see how we’d approach your specific software or automation project?
            </span>
            <MagneticButton href="/contact" variant="primary" className="shrink-0 text-xs py-2.5 px-4">
              <span>Book a Free Technical Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
