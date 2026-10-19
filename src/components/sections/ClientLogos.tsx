"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ClientLogos() {
  const logos = [
    {
      name: "Qura Naturals",
      src: "/clients/client_1_trans.png",
      type: "Natural Wellness",
    },
    {
      name: "ZedTech",
      src: "/clients/client_2_trans.png",
      type: "Water Solutions",
    },
    {
      name: "ZedSystems",
      src: "/clients/client_3_trans.png",
      type: "Enterprise Cloud",
    },
    {
      name: "SmartByte Labs",
      src: "/clients/client_4_trans.png",
      type: "Software & AI",
    },
    {
      name: "Naqsh Design",
      src: "/clients/client_5_trans.png",
      type: "Architecture & Interior",
    },
    {
      name: "Lucrative",
      src: "/clients/client_6_trans.png",
      type: "Interior & Lifestyle",
    },
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
                Loved by our clients
              </span>
            </div>

            <p className="text-xs font-mono text-[#B8ADB2] text-center md:text-right uppercase tracking-wider">
              Trusted by our growing business partners
            </p>
          </div>

          {/* Logo Strip Grid - 2 Rows of 3 for Prominent Logo Presence */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 items-center max-w-5xl mx-auto">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="h-28 sm:h-32 px-6 py-4 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] hover:border-[#71334B]/80 hover:bg-[#151013] hover:shadow-xl hover:shadow-[#492332]/25 transition-all duration-300 flex items-center justify-center text-center group cursor-pointer relative"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-16 sm:max-h-20 w-auto max-w-[82%] object-contain transition-transform duration-300 group-hover:scale-108"
                />
              </div>
            ))}
          </div>

          {/* Bottom friendly partnership invitation */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#B8ADB2]">
            <div className="flex items-center gap-2 italic">
              <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0" />
              <span className="text-[#F6F0EB]/95 font-medium">Let&apos;s grow your business too</span>
            </div>
            <div className="flex items-center gap-2 italic">
              <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0" />
              <span className="text-[#F6F0EB]/95 font-medium">Become our long-term partner</span>
            </div>
            <div className="flex items-center gap-2 italic">
              <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0" />
              <span className="text-[#F6F0EB]/95 font-medium">Join us on the journey to scale</span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
