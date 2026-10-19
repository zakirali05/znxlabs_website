"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function OurProducts() {
  const products = [
    {
      id: "quote-generator",
      tag: "Sales Automation",
      title: "Automated Quote & RFQ Generator",
      tagline: "Turn customer bid requests into ready-to-send quotes in minutes.",
      imageSrc: "/mockups/quote-generator.jpg",
      description: "Reads incoming customer spreadsheets and emails, checks your inventory catalog, calculates margin markups, and drafts complete proposals for staff approval.",
      resultBadge: "Turnaround: 15 mins (down from 36 hours)",
      features: [
        "Parses multi-page Excel and PDF bid sheets",
        "Calculates volume pricing rules automatically",
        "1-click staff review before sending to buyer",
        "Syncs directly with your CRM pipeline",
      ],
      linkText: "Ask about a quotation system",
    },
    {
      id: "operations-portal",
      tag: "Connected Software",
      title: "Field Operations & Invoicing Portal",
      tagline: "Connect technicians, inventory, and billing in one live system.",
      imageSrc: "/mockups/operations-portal.jpg",
      description: "A centralized web portal and mobile app that updates parts inventory and general ledger records the second a service job is finished on site.",
      resultBadge: "Result: Same-day customer invoicing",
      features: [
        "Mobile-friendly job sign-offs with offline support",
        "Real-time warehouse inventory reconciliation",
        "Auto-stages draft invoices for accounting sign-off",
        "Eliminates duplicate paper data entry completely",
      ],
      linkText: "Ask about an operations portal",
    },
    {
      id: "onboarding-hub",
      tag: "Client Portals",
      title: "Client Onboarding & Document Hub",
      tagline: "Stop chasing clients for missing files and forms.",
      imageSrc: "/mockups/client-onboarding.jpg",
      description: "A secure, branded portal where new clients upload compliance files, receive immediate feedback if anything is missing, and track their onboarding progress.",
      resultBadge: "Result: 70% reduction in admin time",
      features: [
        "Clear client checklist with automatic upload verification",
        "Polite scheduled reminders for missing items",
        "Single dashboard showing all active client accounts",
        "Bank-grade encrypted file storage",
      ],
      linkText: "Ask about a client portal",
    },
  ];

  return (
    <section id="products" className="relative py-24 lg:py-32 bg-[#0c090a] border-b border-[rgba(246,240,235,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Our Products & Systems
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
                Proven solutions solving real operational problems.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                Here are examples of software systems we’ve engineered for growing companies. Every system is built to eliminate manual friction and generate measurable business ROI.
              </p>
            </div>

            <div className="shrink-0">
              <MagneticButton href="/work" variant="secondary" className="text-xs py-2.5 px-4">
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </MotionReveal>

        {/* 3 Products Grid with Graphical Mockups + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((prod, idx) => (
            <MotionReveal key={prod.id} delay={0.1 * idx}>
              <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between border border-[rgba(246,240,235,0.08)] bg-[#110D0F] group/card">
                <div>
                  {/* Tag Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[rgba(246,240,235,0.06)] mb-5">
                    <span className="text-[11px] font-mono font-semibold text-[#d6acc1]">
                      {prod.tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#B8ADB2] bg-white/5 px-2 py-0.5 rounded">
                      Production System
                    </span>
                  </div>

                  {/* Graphical Mockup Image Showcase */}
                  <div className="relative mb-5 rounded-2xl overflow-hidden aspect-[16/10] bg-[#090708] border border-[rgba(246,240,235,0.08)] group/img">
                    <Image
                      src={prod.imageSrc}
                      alt={prod.title}
                      fill
                      className="object-cover object-top group-hover/card:scale-[1.04] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#110D0F] via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#110D0F]/85 backdrop-blur-md border border-white/10 text-[9px] font-mono text-[#d6acc1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                      <span>Interface Preview</span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5">
                      <span className="text-[9px] font-mono text-neutral-400 bg-black/80 px-2 py-0.5 rounded backdrop-blur-sm">
                        Replaceable Dummy Asset
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#F6F0EB] tracking-tight group-hover/card:text-[#d6acc1] transition-colors">
                    {prod.title}
                  </h3>

                  <p className="mt-1.5 text-xs font-semibold text-[#F6F0EB]">
                    {prod.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#B8ADB2] leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Result Badge in Brand Colors */}
                  <div className="mt-5 p-3 rounded-xl bg-[#191316] border border-[#71334B]/60 text-xs font-semibold text-[#F6F0EB] flex items-center justify-between">
                    <span>{prod.resultBadge}</span>
                    <span className="text-[10px] font-mono text-[#d6acc1] bg-[#492332] px-2 py-0.5 rounded">Verified</span>
                  </div>

                  {/* Feature Bullets in Brand Colors */}
                  <div className="mt-5 pt-4 border-t border-[rgba(246,240,235,0.06)] space-y-2">
                    {prod.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#B8ADB2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#71334B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(246,240,235,0.06)]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors"
                  >
                    <span>{prod.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
