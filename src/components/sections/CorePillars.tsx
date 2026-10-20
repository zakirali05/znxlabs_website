"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Code2, Users, CheckCircle2, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function CorePillars() {
  const services = [
    {
      id: "01",
      title: "AI Solutions & Automation",
      headline: "Automate repetitive tasks and manual paperwork.",
      description: "We build smart tools that read incoming invoices, extract numbers from complex documents, and update your existing software automatically with full human review.",
      benefits: [
        "Automated document and invoice intake",
        "Fast proposal and quote generation",
        "Instant answers from your company files",
        "Connects directly with your current tools",
      ],
      href: "/ai-solutions",
      icon: Bot,
      tag: "Increase Productivity",
    },
    {
      id: "02",
      title: "Custom Software",
      headline: "Software built around how your company actually works.",
      description: "Off-the-shelf software is often bloated, rigid, and expensive. We build clean, reliable web apps, native iOS & Android mobile apps, and portals tailored to your exact business operations.",
      benefits: [
        "100% intellectual property owned by you",
        "iOS & Android mobile apps for field staff & customers",
        "Custom client onboarding and service portals",
        "Zero recurring monthly user license fees",
      ],
      href: "/software-development",
      icon: Code2,
      tag: "Custom Builds",
    },
    {
      id: "03",
      title: "Dedicated Developers",
      headline: "Senior engineers ready to join your projects.",
      description: "Skip the 6-month hiring search. Add vetted, senior software and AI engineers who integrate directly with your team and ship production features fast.Say Goodbye to Hiring Headaches.",
      benefits: [
        "Senior full-stack and AI engineers",
        "Flexible sprint or ongoing contracts",
        "Seamless daily standups & communication",
        "No long-term recruiting liabilities",
      ],
      href: "/hire-engineers",
      icon: Users,
      tag: "Hire an AI Engineer",
    },
  ];

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#090708] border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
      {/* Background Lighting Effect (Brand Burgundy & Deep Vine) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Radial dark gradient base with mask */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: "radial-gradient(100% 100% at 0% 0%, #191316 0%, #090708 100%)",
            WebkitMaskImage: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
            maskImage: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Skewed fading brand color streaks */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(140, 60, 92, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.47) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.47) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(140, 60, 92, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
        </div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-5 bg-repeat"
          style={{
            backgroundImage: 'url("https://cdn.21st.dev/assets/mirror/f5/f55dfc553c100e6da0ad95258a042b4100f0ff4bb03a5313d1f541984275e262.png")',
            backgroundSize: "149.76px",
          }}
        />

        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(246, 240, 235, 0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Subtle radial brand glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(113, 51, 75, 0.25) 0%, rgba(73, 35, 50, 0.08) 50%, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Our Services
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
                Three clear services to grow your business.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                Whether you need to eliminate manual bottlenecks, build a new web application, or scale your engineering team, we deliver dependable results.
              </p>
            </div>

            <div className="shrink-0">
              <MagneticButton href="/contact" variant="secondary" className="text-xs py-2.5 px-4">
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </MotionReveal>

        {/* 3 Clear Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;

            return (
              <MotionReveal key={svc.id} delay={0.1 * idx}>
                <SpotlightCard className="p-8 sm:p-10 h-full flex flex-col justify-between border border-[rgba(246,240,235,0.08)] bg-[#110D0F]">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-[rgba(246,240,235,0.08)] mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#492332] text-[#F6F0EB] flex items-center justify-center border border-[#71334B]/60">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[rgba(246,240,235,0.04)] text-[#d6acc1] border border-[rgba(246,240,235,0.08)]">
                        {svc.tag}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-[#71334B] uppercase tracking-wider block mb-1">
                      Service {svc.id}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight">
                      {svc.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#B8ADB2] leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Bullet Points */}
                    {/* <div className="mt-6 pt-6 border-t border-[rgba(246,240,235,0.06)] space-y-2.5">
                      {svc.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#F6F0EB]">
                          <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div> */}
                  </div>

                  <div className="pt-8 mt-8 border-t border-[rgba(246,240,235,0.06)]">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors"
                    >
                      <span>Learn More About {svc.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </SpotlightCard>
              </MotionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
