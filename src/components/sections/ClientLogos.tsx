"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ClientLogos() {
  const logos = [
    { name: "APEX INDUSTRIAL", type: "Manufacturing" },
    { name: "HORIZON FREIGHT", type: "Logistics" },
    { name: "CRESTLINE HEALTH", type: "Healthcare" },
    { name: "STERLING ADVISORY", type: "Professional Services" },
    { name: "NEXAFLOW SYSTEMS", type: "Enterprise SaaS" },
    { name: "VANGUARD PROPERTY", type: "Real Estate" },
  ];

  return (
    <section className="relative py-12 bg-[#0c090a] border-y border-[rgba(246,240,235,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[rgba(246,240,235,0.06)] mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#F6F0EB]">
                5.0 Rating from Business Leaders
              </span>
            </div>

            <p className="text-xs font-mono text-[#B8ADB2] text-center md:text-right uppercase tracking-wider">
              Trusted by growing businesses across the US, UK, and Europe
            </p>
          </div>

          {/* Logo Strip Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="p-4 rounded-xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.04)] hover:border-[rgba(246,240,235,0.12)] transition-all flex flex-col items-center justify-center text-center group cursor-default"
              >
                <span className="text-sm font-bold tracking-widest text-[#B8ADB2] group-hover:text-[#F6F0EB] transition-colors font-mono">
                  {logo.name}
                </span>
                <span className="text-[10px] text-neutral-400 mt-0.5">
                  {logo.type}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom quick reassurance */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#B8ADB2]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#71334B]" />
              <span>Full Intellectual Property Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#71334B]" />
              <span>Guaranteed Delivery Deadlines</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#71334B]" />
              <span>Strict Commercial Confidentiality</span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
