"use client";

import React, { useState } from "react";
import { ArrowRight, Check, X, AlertTriangle, Zap, Users, Lock, Clock, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

type ComparisonMode = "with" | "without";

export function WhyUs() {
  const [mode, setMode] = useState<ComparisonMode>("with");

  const comparisons = [
    {
      id: "speed",
      factor: "Development Speed",
      icon: Clock,
      without: {
        headline: "Months of Slide Decks & Specs",
        description: "Endless scoping meetings, slide decks, and wireframes before a single line of working software is ever deployed to staging.",
        loss: "4 to 6 months of dead runway burned. Meanwhile, competitors launch first and your internal team stays stuck with manual workarounds.",
        lobsterQuote: "Months of meetings before a single screen runs...",
        tag: "Lost Runway & Dead Weeks",
      },
      with: {
        headline: "Working Demo in 2 Weeks",
        description: "An interactive, functional software prototype delivered in 14 days, followed by full production rollout in 4 to 8 weeks.",
        gain: "Immediate real-world operational validation. You test live systems with your staff right away and turn engineering into active revenue.",
        lobsterQuote: "Live interactive software in 14 days",
        tag: "Rapid Production Rollout",
      },
    },
    {
      id: "communication",
      factor: "Who You Talk To",
      icon: Users,
      without: {
        headline: "Non-Technical Middlemen",
        description: "You're routed through layers of account managers, sales representatives, and coordinators who have never written production code.",
        loss: "Your critical domain logic gets distorted in translation. Every change takes days of back-and-forth and features get built incorrectly.",
        lobsterQuote: "Trapped playing telephone with middle managers...",
        tag: "Communication Friction",
      },
      with: {
        headline: "Direct Senior Engineer Access",
        description: "Direct daily and weekly communication with the senior software and AI engineers who are actually architecting and writing your software.",
        gain: "Zero translation loss. Architectural decisions happen in minutes, questions are answered by builders, and iterations ship immediately.",
        lobsterQuote: "Direct engineering access, zero fluff",
        tag: "Direct Builder Collaboration",
      },
    },
    {
      id: "ownership",
      factor: "Intellectual Property & Code",
      icon: Lock,
      without: {
        headline: "Hostage Code & SaaS Lock-in",
        description: "Proprietary vendor platforms, hostage codebases, closed ecosystems, or compounding monthly SaaS seat fees that punish growth.",
        loss: "You never truly own what you paid for. If you ever want to leave, you face catastrophic switching costs or must rewrite everything from zero.",
        lobsterQuote: "Renting your own software on endless subscriptions...",
        tag: "Vendor Lock-in & Rent Trap",
      },
      with: {
        headline: "100% Client Code Ownership",
        description: "Complete, unconditional ownership of all repositories, database schemas, trained models, and production assets from day one.",
        gain: "A permanent, appreciating enterprise asset on your balance sheet. Zero recurring monthly user license fees and total independence forever.",
        lobsterQuote: "100% yours. Every line, forever.",
        tag: "Complete Digital Autonomy",
      },
    },
    {
      id: "pricing",
      factor: "Budget & Financial Clarity",
      icon: TrendingUp,
      without: {
        headline: "Unpredictable Hourly Billing",
        description: "Vague time-and-materials estimates, surprise milestone overages, and endless 'out-of-scope' change orders tacked onto every invoice.",
        loss: "Uncapped financial risk. Projects regularly balloon 50% to 100% past original budgets with zero accountability or timeline guarantees.",
        lobsterQuote: "Surprise invoices and runaway billable hours...",
        tag: "Uncapped Budget Bleed",
      },
      with: {
        headline: "Guaranteed Milestone Pricing",
        description: "Transparent, fixed milestones and guaranteed quotes agreed upon before a single line of code is written.",
        gain: "Absolute cost certainty. You know exactly what will be built, when it will be delivered, and precisely what it will cost. Zero surprises.",
        lobsterQuote: "Guaranteed milestones, zero surprise costs",
        tag: "Predictable Fixed Investment",
      },
    },
  ];

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-[#0c090a] border-b border-[rgba(246,240,235,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionReveal>
          <div className="max-w-3xl mb-12">
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
              We eliminate the friction that makes most software projects painful. Toggle between perspectives to see the difference firsthand.
            </p>
          </div>
        </MotionReveal>

        {/* Odoo-style Interactive Radio Toggle: Without Us / With Us */}
        <MotionReveal delay={0.1}>
          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="font-lobster text-lg sm:text-xl text-[#d6acc1] tracking-wide">
                {mode === "with" ? "Our Standard" : "The Painful Agency Reality"}
              </span>
              <span className="text-[11px] text-[#B8ADB2] font-mono">
                — toggle below
              </span>
            </div>

            <div 
              role="radiogroup" 
              aria-label="Comparison mode"
              className="inline-flex items-center p-1.5 rounded-full bg-[#110D0F] border border-[rgba(246,240,235,0.12)] shadow-2xl relative"
            >
              {/* Without Us Radio Button */}
              <button
                type="button"
                role="radio"
                aria-checked={mode === "without"}
                onClick={() => setMode("without")}
                className={`relative px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  mode === "without"
                    ? "bg-[#2A1013] text-[#FF8A8A] border border-[#852C32] shadow-lg shadow-red-950/50"
                    : "text-[#B8ADB2] hover:text-[#F6F0EB]"
                }`}
              >
                <span className={`w-2 h-2 rounded-full transition-all ${
                  mode === "without" ? "bg-red-400 shadow-[0_0_8px_#f87171]" : "bg-neutral-600"
                }`} />
                <span>Without Us</span>
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded transition-all hidden sm:inline-block ${
                  mode === "without" ? "bg-red-950 text-red-300 border border-red-800/60" : "bg-neutral-800 text-neutral-400"
                }`}>
                  The Losses
                </span>
              </button>

              {/* With Us Radio Button */}
              <button
                type="button"
                role="radio"
                aria-checked={mode === "with"}
                onClick={() => setMode("with")}
                className={`relative px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  mode === "with"
                    ? "bg-[#492332] text-[#F6F0EB] border border-[#71334B] shadow-lg shadow-[#492332]/50"
                    : "text-[#B8ADB2] hover:text-[#F6F0EB]"
                }`}
              >
                <span className={`w-2 h-2 rounded-full transition-all ${
                  mode === "with" ? "bg-[#d6acc1] shadow-[0_0_8px_#d6acc1]" : "bg-neutral-600"
                }`} />
                <span>With ZNX Labs</span>
                <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded transition-all hidden sm:inline-block ${
                  mode === "with" ? "bg-[#71334B] text-[#F6F0EB] border border-[#d6acc1]/30" : "bg-neutral-800 text-neutral-400"
                }`}>
                  How We Solve It
                </span>
              </button>
            </div>
          </div>
        </MotionReveal>

        {/* Comparison Grid with Dynamic Content & AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {comparisons.map((c, idx) => {
            const Icon = c.icon;
            const current = mode === "with" ? c.with : c.without;
            const isWith = mode === "with";

            return (
              <MotionReveal key={c.id} delay={0.08 * idx}>
                <SpotlightCard className={`p-7 sm:p-9 border transition-all duration-300 bg-[#110D0F] h-full flex flex-col justify-between rounded-2xl ${
                  isWith
                    ? "border-[rgba(246,240,235,0.08)] hover:border-[#71334B]/70"
                    : "border-[rgba(246,240,235,0.08)] hover:border-red-900/60"
                }`}>
                  <div>
                    {/* Top Header of Card */}
                    <div className="flex items-center justify-between pb-4 border-b border-[rgba(246,240,235,0.06)] mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isWith
                            ? "bg-[#492332] text-[#F6F0EB] border border-[#71334B]/60"
                            : "bg-[#260e11] text-red-400 border border-red-900/40"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#F6F0EB] tracking-tight">
                          {c.factor}
                        </h3>
                      </div>

                      {/* Lobster cursive note */}
                      <span className={`font-lobster text-sm sm:text-base transition-colors duration-300 hidden sm:inline-block ${
                        isWith ? "text-[#d6acc1]" : "text-red-400/80"
                      }`}>
                        {current.lobsterQuote}
                      </span>
                    </div>

                    {/* Animated Content Transition */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={mode}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        {/* Status Tag */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                            isWith
                              ? "bg-[#492332]/50 text-[#d6acc1] border-[#71334B]/60"
                              : "bg-[#2A1013] text-red-300 border-red-900/50"
                          }`}>
                            {isWith ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#d6acc1]" />
                                Our Standard
                              </>
                            ) : (
                              <>
                                <X className="w-3.5 h-3.5 text-red-400" />
                                The Traditional Agency Flaw
                              </>
                            )}
                          </span>

                          <span className="text-[10px] font-mono text-[#B8ADB2] uppercase tracking-wider">
                            {current.tag}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h4 className="text-lg sm:text-xl font-bold text-[#F6F0EB] tracking-tight mb-2.5">
                          {current.headline}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed mb-5">
                          {current.description}
                        </p>

                        {/* Impact Callout Box: What You Lose vs How We Solve It */}
                        <div className={`p-4 rounded-xl border transition-all duration-300 ${
                          isWith
                            ? "bg-[#191316] border-[#71334B]/60 shadow-lg shadow-[#492332]/20"
                            : "bg-[#1C0B0E] border-red-900/50 shadow-lg shadow-red-950/20"
                        }`}>
                          <div className="flex items-center gap-2 mb-1.5">
                            {isWith ? (
                              <>
                                <Zap className="w-3.5 h-3.5 text-[#d6acc1] shrink-0" />
                                <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#d6acc1]">
                                  How We Solve It:
                                </span>
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-red-400">
                                  What You Suffer:
                                </span>
                              </>
                            )}
                          </div>

                          <p className={`text-xs sm:text-sm leading-relaxed ${
                            isWith ? "text-[#F6F0EB] font-medium" : "text-red-200/90 font-normal"
                          }`}>
                            {isWith ? c.with.gain : c.without.loss}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </SpotlightCard>
              </MotionReveal>
            );
          })}
        </div>

        {/* Dynamic Interactive Callout Banner */}
        <MotionReveal delay={0.25}>
          <div className={`mt-12 p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-5 ${
            mode === "with"
              ? "bg-[rgba(246,240,235,0.02)] border-[rgba(246,240,235,0.08)]"
              : "bg-[#1F0C0F] border-red-900/40"
          }`}>
            <div className="text-center sm:text-left">
              <span className="font-lobster text-base text-[#d6acc1] block mb-1">
                {mode === "with" ? "Ready to build without the bloat?" : "Tired of the agency runaround?"}
              </span>
              <p className="text-xs sm:text-sm text-[#F6F0EB] font-medium">
                {mode === "with"
                  ? "Want to see how we’d architect and deliver your specific software or automation project?"
                  : "Switch to 'With ZNX Labs' above or speak with our senior engineers to see the direct path forward."}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {mode === "without" ? (
                <button
                  type="button"
                  onClick={() => setMode("with")}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold bg-[#492332] text-[#F6F0EB] border border-[#71334B] hover:bg-[#71334B] transition-all cursor-pointer shadow-lg shadow-[#492332]/40"
                >
                  Switch to &apos;With ZNX Labs&apos;
                </button>
              ) : null}

              <MagneticButton href="/contact" variant="primary" className="text-xs py-2.5 px-5">
                <span>Book a Free Technical Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
