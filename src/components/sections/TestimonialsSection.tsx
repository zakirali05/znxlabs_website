"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ZNX Labs built an automated quote system that cut our turnaround from 36 hours to 15 minutes. It paid for itself within the first 30 days and helped us win deals before our competitors even responded.",
      author: "Marcus Vance",
      role: "VP of Operations",
      company: "Apex Wholesale & Industrial",
      result: "+34% Quote Win Rate",
    },
    {
      quote: "Before ZNX Labs, our technicians logged jobs on paper and billing took 10 days. The portal they engineered connects our field staff directly to accounting. Invoices now go out the same afternoon.",
      author: "Sarah Jenkins",
      role: "Managing Director",
      company: "Horizon Field Services",
      result: "Same-Day Invoicing",
    },
    {
      quote: "Finding senior software and AI engineers locally was taking us months. ZNX Labs embedded two senior developers into our team within 48 hours. They shipped our new product features two months ahead of schedule.",
      author: "David Liang",
      role: "Co-Founder & CTO",
      company: "NexaFlow Technology",
      result: "Shipped 2 Months Early",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#090708] border-b border-[rgba(246,240,235,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <MotionReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Client Feedback
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
              What business leaders say about working with ZNX Labs.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              We measure our success by the measurable time saved and revenue generated for our clients.
            </p>
          </div>
        </MotionReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <MotionReveal key={t.author} delay={0.1 * idx}>
              <SpotlightCard className="p-8 sm:p-10 border border-[rgba(246,240,235,0.08)] bg-[#110D0F] h-full flex flex-col justify-between">
                <div>
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#71334B]/50" />
                  </div>

                  <p className="text-sm sm:text-base text-[#F6F0EB] leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>

                  <div className="p-3 rounded-xl bg-[#191316] border border-[#71334B]/50 text-xs font-semibold text-[#F6F0EB] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0" />
                    <span>Result: {t.result}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="pt-6 mt-6 border-t border-[rgba(246,240,235,0.06)]">
                  <div className="font-bold text-sm text-[#F6F0EB]">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#B8ADB2]">
                    {t.role}, <span className="text-[#d6acc1]">{t.company}</span>
                  </div>
                </div>
              </SpotlightCard>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
