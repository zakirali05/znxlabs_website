"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function ClientLogos() {
  const logos = [
    {
      name: "Qura Naturals",
      src: "/clients/client_1.png",
      type: "Natural Wellness",
      imgClass: "h-14 sm:h-20 w-auto scale-[1.7] object-contain",
    },
    {
      name: "ZedFlow",
      src: "/clients/client_2.png",
      type: "Water Solutions",
      imgClass: "h-14 sm:h-20 w-auto scale-[0.65] object-contain",
    },
     {
      name: "SmartByte Labs",
      src: "/clients/client_4.png",
      type: "Software & AI",
      imgClass: "h-8 sm:h-12 w-auto max-w-[88%] object-contain",
    },
    {
      name: "Lucrative",
      src: "/clients/client_6.png",
      type: "Interior & Lifestyle",
      imgClass: "h-10 sm:h-14 w-auto max-w-[85%] object-contain",
    },
    {
      name: "ZedSystems",
      src: "/clients/client_3.png",
      type: "Enterprise Cloud",
      imgClass: "h-8 sm:h-12 w-auto max-w-[85%] object-contain",
    },
   
    {
      name: "Naqsh Design",
      src: "/clients/client_5.png",
      type: "Architecture & Interior",
      imgClass: "h-14 sm:h-20 w-auto scale-[1.3] object-contain",
    },
       {
      name: "Hilo",
      src: "/clients/client_8.png",
      type: "Water Solutions",
      imgClass: "h-14 sm:h-20 w-auto scale-[0.65] object-contain",
    },
    {
      name: "ZedPlus",
      src: "/clients/client_7.png",
      type: "Water Solutions",
      imgClass: "h-14 sm:h-20 w-auto scale-[0.65] object-contain",
    },
 
    {
      name: "Zostera",
      src: "/clients/client_9.png",
      type: "Water Solutions",
      imgClass: "h-14 sm:h-20 w-auto scale-160 object-contain",
    },
  ];

  const row1 = logos.slice(0, 4);
  const row2 = logos.slice(4, 7);
  const row3 = logos.slice(7, 9);

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

          {/* 3 Rows Upside Down Rectangle Layout: 4 top, 3 middle, 2 bottom */}
          <div className="space-y-3 sm:space-y-6 max-w-6xl mx-auto">
            {/* Row 1: 4 clients */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
              {row1.map((logo) => (
                <div
                  key={logo.name}
                  className="h-22 sm:h-28 px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] hover:border-[#71334B]/80 hover:bg-[#151013] hover:shadow-xl hover:shadow-[#492332]/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center text-center group cursor-pointer relative overflow-hidden"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`${logo.imgClass} transition-opacity duration-300 opacity-90 group-hover:opacity-100 grayscale-100 group-hover:grayscale-0`}
                  />
                </div>
              ))}
            </div>

            {/* Row 2: 3 clients (centered, matching card width) */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full sm:max-w-[75%]">
                {row2.map((logo) => (
                  <div
                    key={logo.name}
                    className="h-22 sm:h-28 px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] hover:border-[#71334B]/80 hover:bg-[#151013] hover:shadow-xl hover:shadow-[#492332]/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center text-center group cursor-pointer relative overflow-hidden"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`${logo.imgClass} transition-opacity duration-300 opacity-90 group-hover:opacity-100 grayscale-100 group-hover:grayscale-0`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: 2 clients (centered, matching card width) */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 w-full sm:max-w-[50%]">
                {row3.map((logo) => (
                  <div
                    key={logo.name}
                    className="h-22 sm:h-28 px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] hover:border-[#71334B]/80 hover:bg-[#151013] hover:shadow-xl hover:shadow-[#492332]/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center text-center group cursor-pointer relative overflow-hidden"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`${logo.imgClass} transition-opacity duration-300 opacity-90 group-hover:opacity-100 grayscale-100 group-hover:grayscale-0`}
                    />
                  </div>
                ))}
              </div>
            </div>
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
