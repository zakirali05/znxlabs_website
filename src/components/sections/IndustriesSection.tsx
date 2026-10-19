"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Building, 
  Building2, 
  Factory, 
  Laptop, 
  ShoppingCart, 
  CheckCircle2 
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function IndustriesSection() {
  const sectors = [
    {
      title: "E-Commerce & Retail",
      desc: "Connect warehouse stock with online stores, sync order fulfillment, and automate routine support tickets.",
      href: "/industries/ecommerce",
      icon: ShoppingCart,
      stat: "Automates 60%+ of routine inquiries",
    },
    {
      title: "Professional Services & Legal",
      desc: "Branded client onboarding portals, fast document search, and automated engagement letter generation.",
      href: "/industries/professional-services",
      icon: Building,
      stat: "Client onboarding cut from 12 days to 48 hours",
    },
    {
      title: "Real Estate & Property",
      desc: "Maintenance request triage, tenant portals, and automated document organization for commercial leases.",
      href: "/industries/real-estate",
      icon: Building2,
      stat: "60+ hours saved on lease reviews monthly",
    },
    {
      title: "Technology & SaaS",
      desc: "Senior software engineering capacity to help growing tech companies ship critical roadmap features on time.",
      href: "/industries/saas-and-technology",
      icon: Laptop,
      stat: "Accelerates sprint delivery velocity by 3x",
    },
  ];

  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-[#090708] border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#492332]/15 blur-[160px] pointer-events-none rounded-full" 
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
                  Industries We Serve
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
                Software built for your specific industry.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                Every industry has unique operational challenges. We build custom software and automation tailored to the way your sector actually operates.
              </p>
            </div>

            <div className="shrink-0">
              <MagneticButton href="/industries" variant="secondary" className="text-xs py-2.5 px-4">
                <span>Explore All Industries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </MotionReveal>

        {/* Asymmetric Bento Architecture for Sectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Large Bento Tile: Manufacturing & Logistics (7-col) */}
          <div className="lg:col-span-7">
            <MotionReveal delay={0.1}>
              <SpotlightCard className="p-8 sm:p-12 h-full flex flex-col justify-between border border-[rgba(246,240,235,0.1)] bg-[#110D0F]" spotlightColor="rgba(113, 51, 75, 0.35)">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[rgba(246,240,235,0.08)] mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#492332] flex items-center justify-center border border-[#71334B]/60 text-[#F6F0EB]">
                        <Factory className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#F6F0EB]">Featured Sector</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono text-[#F6F0EB] bg-[#492332] border border-[#71334B]/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d6acc1]" />
                      High Impact
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] tracking-tight">
                    Manufacturing & Supply Chain
                  </h3>

                  <p className="mt-4 text-sm text-[#B8ADB2] leading-relaxed">
                    Automating incoming quote requests, shop-floor work-in-progress tracking, and warehouse dispatch paperwork so products ship faster.
                  </p>

                  {/* Operational Metric Callout */}
                  <div className="mt-8 p-5 rounded-2xl bg-[#191316] border border-[#71334B]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] block mb-1">
                        Turnaround Acceleration
                      </span>
                      <strong className="text-xl sm:text-2xl font-bold font-mono text-[#F6F0EB]">
                        48 Hours ➔ 15 Minutes
                      </strong>
                    </div>
                    <span className="text-xs text-[#B8ADB2] max-w-[200px]">
                      Instant bid pricing against real inventory catalog.
                    </span>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-[rgba(246,240,235,0.06)] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#B8ADB2]">NetSuite • QuickBooks • Custom ERP</span>
                  <Link
                    href="/industries/manufacturing"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors"
                  >
                    <span>View Manufacturing Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            </MotionReveal>
          </div>

          {/* Right Column: 4 Specialized Sector Tiles (5-col grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {sectors.map((sec, idx) => {
              const Icon = sec.icon;

              return (
                <MotionReveal key={sec.title} delay={0.15 * (idx + 1)}>
                  <Link href={sec.href} className="block group">
                    <SpotlightCard className="p-6 border border-[rgba(246,240,235,0.08)] bg-[#110D0F] hover:border-[#71334B]/70 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[rgba(246,240,235,0.04)] border border-[rgba(246,240,235,0.08)] flex items-center justify-center text-[#F6F0EB] group-hover:bg-[#492332] transition-colors">
                            <Icon className="w-4 h-4 text-[#71334B] group-hover:text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-[#F6F0EB] group-hover:text-white transition-colors">
                            {sec.title}
                          </h4>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#B8ADB2] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>

                      <p className="text-xs text-[#B8ADB2] leading-relaxed mb-3">
                        {sec.desc}
                      </p>

                      <div className="pt-2 border-t border-[rgba(246,240,235,0.05)] text-[10px] font-mono text-[#d6acc1] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#71334B]" />
                        <span>{sec.stat}</span>
                      </div>
                    </SpotlightCard>
                  </Link>
                </MotionReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
