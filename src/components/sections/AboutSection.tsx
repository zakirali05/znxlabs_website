"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Code2, Users, Terminal, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#090708] border-b border-[rgba(246,240,235,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                About ZNX Labs
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
              An engineering partner that cares about your bottom line.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              We started ZNX Labs to give growing businesses a dependable technology partner. No bloated slide decks, no buzzword promises, and no junior handoffs.
            </p>
          </div>
        </MotionReveal>

        {/* 2-Column: Text Story & Commitments (Left) + Graphical Image Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct narrative & Commitments */}
          <div className="lg:col-span-6 space-y-6">
            <MotionReveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight">
                  We build tools that save time and make money.
                </h3>
                
                <p className="text-sm text-[#B8ADB2] leading-relaxed">
                  Too many software projects fail because agencies focus on billable hours instead of business outcomes. We take the opposite approach: we look at where your business is losing hours or revenue, and we engineer the cleanest solution to fix it.
                </p>

                <p className="text-sm text-[#B8ADB2] leading-relaxed">
                  When you work with ZNX Labs, you work directly with experienced software architects and engineers who understand commercial reality.
                </p>

                {/* 3 Core Commitments list */}
                <div className="pt-2 space-y-3.5 border-t border-[rgba(246,240,235,0.06)]">
                  {[
                    {
                      icon: Code2,
                      title: "You Own 100% Of Your Code",
                      desc: "Every line of code, database schema, and design belongs entirely to you.",
                    },
                    {
                      icon: Users,
                      title: "Direct Access To Senior Builders",
                      desc: "Collaborate directly with senior engineers who actually build your system.",
                    },
                    {
                      icon: HeartHandshake,
                      title: "Fixed Timelines & Honest Scopes",
                      desc: "Guaranteed milestone pricing and weekly demos with zero unexpected fees.",
                    },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#B8ADB2]">
                        <div className="w-7 h-7 rounded-lg bg-[#492332] text-[#F6F0EB] flex items-center justify-center shrink-0 border border-[#71334B]/60 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <strong className="text-[#F6F0EB] block font-semibold">{item.title}</strong>
                          <span className="text-[#B8ADB2] text-[11px] leading-relaxed">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <MagneticButton href="/about" variant="primary" className="text-xs py-2.5 px-4">
                    <span>Our Story & Philosophy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </MagneticButton>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Graphical Image Thing (Digital Engineering Studio Preview) */}
          <div className="lg:col-span-6">
            <MotionReveal delay={0.2}>
              <div className="relative rounded-3xl bg-[#110D0F] border border-[#71334B]/50 p-3 sm:p-4 shadow-2xl shadow-[#492332]/25 overflow-hidden group">
                
                {/* Mockup Window Chrome Header */}
                <div className="flex items-center justify-between px-3 py-2.5 mb-2 bg-[#090708] rounded-xl border border-[rgba(246,240,235,0.06)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#71334B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#492332]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[rgba(246,240,235,0.2)]" />
                    <span className="ml-2 font-mono text-[10px] sm:text-xs text-[#B8ADB2] flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[#d6acc1]" />
                      znxlabs-engineering-studio.env
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono bg-[#492332]/70 text-[#d6acc1] border border-[#71334B]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d6acc1] animate-pulse" />
                      Live Lab
                    </span>
                  </div>
                </div>

                {/* Graphical Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#090708] border border-[rgba(246,240,235,0.06)]">
                  <Image
                    src="/mockups/about-studio.jpg"
                    alt="ZNX Labs Digital Engineering Studio"
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    priority={false}
                  />

                  {/* Gradient overlays for polish */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090708] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Floating Telemetry Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium text-[#F6F0EB] bg-[#110D0F]/90 backdrop-blur-md border border-[rgba(246,240,235,0.15)] shadow-lg">
                      Sprint Cycle: 2 Weeks
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium text-[#F6F0EB] bg-[#492332]/90 backdrop-blur-md border border-[#71334B]/80 shadow-lg">
                      100% Client Code Ownership
                    </span>
                    <span className="text-[9px] font-mono text-[#B8ADB2] bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm">
                      Replaceable Graphic Asset
                    </span>
                  </div>
                </div>

                {/* Subtitle Caption */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] text-[#B8ADB2]">
                  <span>Dedicated agile engineering environment with direct developer access.</span>
                  <Link
                    href="/how-we-work"
                    className="text-[#d6acc1] hover:underline font-mono text-[10px] shrink-0 ml-2"
                  >
                    View Process →
                  </Link>
                </div>

              </div>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
