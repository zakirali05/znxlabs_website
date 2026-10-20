"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, HeartHandshake, Code2, Users } from "lucide-react";
import { motion } from "framer-motion";
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
              An engineering partner that cares about your{" "}
              <span className="relative inline-block whitespace-nowrap align-baseline px-1 mx-0.5">
                <span className="font-lobster font-normal text-[1.12em] tracking-normal text-[#d6acc1] inline-block select-none not-italic drop-shadow-sm">
                  growth
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

            <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              We started ZNX Labs to give growing businesses a dependable technology partner.
              <br />No bloated slide decks, no buzzword promises, and no junior handoffs.
            </p>
          </div>
        </MotionReveal>

        {/* 2-Column: Text Story & Commitments (Left) + Full-Height Image Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Direct narrative & Commitments */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <MotionReveal delay={0.1} className="h-full flex flex-col justify-center">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] space-y-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight">
                    We build tools that save time and make money.
                  </h3>
                  
                  <p className="mt-4 text-sm text-[#B8ADB2] leading-relaxed">
                    Too many software projects fail because agencies focus on billable hours instead of business outcomes. We take the opposite approach: we look at where your business is losing hours or revenue, and we engineer the cleanest solution to fix it.
                  </p>

                  <p className="mt-3 text-sm text-[#B8ADB2] leading-relaxed">
                    When you work with ZNX Labs, you work directly with experienced software architects and engineers who understand commercial reality.
                  </p>

                  {/* 3 Core Commitments list */}
                  <div className="mt-6 pt-6 space-y-4 border-t border-[rgba(246,240,235,0.06)]">
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
                        <div key={idx} className="flex items-start gap-3.5 text-xs text-[#B8ADB2]">
                          <div className="w-8 h-8 rounded-lg bg-[#492332] text-[#F6F0EB] flex items-center justify-center shrink-0 border border-[#71334B]/60 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <strong className="text-[#F6F0EB] block font-semibold text-sm">{item.title}</strong>
                            <span className="text-[#B8ADB2] text-xs leading-relaxed">{item.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 border-t border-[rgba(246,240,235,0.06)] flex items-center gap-4">
                  <MagneticButton href="/about" variant="primary" className="text-xs py-2.5 px-5">
                    <span>Our Story & Philosophy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </MagneticButton>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Full-Height Immersive Image Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <MotionReveal delay={0.2} className="w-full h-full flex items-center">
              <div className="relative w-full h-[420px] sm:h-[500px] lg:h-full min-h-[460px] lg:min-h-[580px] rounded-3xl overflow-hidden flex items-center justify-center group shadow-2xl shadow-[#492332]/20">
                <Image
                  src="/mockups/about.png"
                  alt="ZNX Labs Digital Engineering Studio"
                  fill
                  className="object-cover object-center scale-100 lg:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />

                {/* Soft ambient gradient overlay to seamlessly merge into the section */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090708]/80 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#090708] via-[#090708]/30 to-transparent pointer-events-none hidden lg:block" />
              </div>
            </MotionReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
