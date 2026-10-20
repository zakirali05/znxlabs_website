"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Landmark,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  Building2,
  Laptop,
  Factory,
  ShieldCheck,
  Scale
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function IndustriesSection() {
  const sectors = [
    {
      slug: "finance",
      title: "Finance & FinTech",
      build: "Payments & Compliance Engines",
      desc: "We help fintech founders and finance teams design and build payment flows, automated ledger reconciliation, and regulatory compliance workflows.",
      href: "/industries/finance",
      icon: Landmark,
      tag: "SOC2 & PCI-DSS",
    },
    {
      slug: "education",
      title: "Education & EdTech",
      build: "eLearning Platforms & Grading",
      desc: "We help schools, academies, and edtech founders design and build interactive eLearning portals, cohort classrooms, and automated grading pipelines.",
      href: "/industries/education",
      icon: GraduationCap,
      tag: "LTI & SCORM",
    },
    {
      slug: "ecommerce",
      title: "E-Commerce & Retail",
      build: "Omnichannel Sync & AI Support",
      desc: "We help retailers and D2C brands build catalog pricing, automated inventory sync, and intelligent 24/7 customer care agents.",
      href: "/industries/ecommerce",
      icon: ShoppingCart,
      tag: "Shopify & ERP Sync",
    },
    {
      slug: "healthcare",
      title: "Healthcare & HealthTech",
      build: "Patient Portals & EHR Integration",
      desc: "We help clinics, healthtech founders, and wellness providers build HIPAA-compliant portals for appointments, patient records, and telehealth.",
      href: "/industries/healthcare",
      icon: HeartPulse,
      tag: "HIPAA & FHIR",
    },
    {
      slug: "real-estate",
      title: "Real Estate & PropTech",
      build: "Lease Extraction & Tenant Portals",
      desc: "We help brokerages and property managers design real estate portals, automated lease review engines, and 24/7 maintenance triage systems.",
      href: "/industries/real-estate",
      icon: Building2,
      tag: "Yardi & AppFolio",
    },
    {
      slug: "tech-saas",
      title: "Tech & SaaS",
      build: "Cloud Backends & AI Acceleration",
      desc: "We help growing tech companies and SaaS startups ship critical features on time with autonomous senior engineering squads and production AI agents.",
      href: "/industries/tech-saas",
      icon: Laptop,
      tag: "Enterprise Scale",
    },
    {
      slug: "manufacturing",
      title: "Manufacturing & Industrial",
      build: "RFQ Automation & Shop-Floor Tracking",
      desc: "We help factories and industrial operators automate incoming bid quotes, shop-floor WIP tracking, and warehouse dispatch documentation.",
      href: "/industries/manufacturing",
      icon: Factory,
      tag: "NetSuite & ERP Bridge",
    },
    {
      slug: "government",
      title: "Government Sector",
      build: "Citizen Portals & Permit Intake",
      desc: "We help municipal agencies and public contractors replace paper permitting with accessible digital citizen portals and automated routing.",
      href: "/industries/government",
      icon: ShieldCheck,
      tag: "WCAG 2.1 & FedRAMP",
    },
    {
      slug: "legal",
      title: "Legal Sector",
      build: "Contract Intelligence & Intake",
      desc: "We help law firms and corporate legal departments build private AI contract redlining, client intake portals, and precedent search engines.",
      href: "/industries/legal",
      icon: Scale,
      tag: "Zero-Retention AI",
    },
  ];

  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-[#090708] border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
      {/* Background Lighting & Gradient Effect (Brand Burgundy, Deep Vine & Ambient Beams) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Radial dark gradient base with smooth edge mask */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: "radial-gradient(120% 100% at 50% 0%, #191316 0%, #090708 100%)",
            WebkitMaskImage: "radial-gradient(130% 100% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0) 100%)",
            maskImage: "radial-gradient(130% 100% at 50% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Skewed fading brand color streaks / ray beams */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: "linear-gradient(rgba(140, 60, 92, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(-35deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.9) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
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

        {/* Subtle dot matrix overlay with vertical fade mask */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(246, 240, 235, 0.3) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            WebkitMaskImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)",
            maskImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 70%, transparent 100%)",
          }}
        />

        {/* Multi-point Brand Radial Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 
              "radial-gradient(ellipse at 50% 0%, rgba(113, 51, 75, 0.3) 0%, rgba(73, 35, 50, 0.1) 45%, transparent 75%), " +
              "radial-gradient(circle at 85% 75%, rgba(140, 60, 92, 0.16) 0%, transparent 55%), " +
              "radial-gradient(circle at 15% 45%, rgba(113, 51, 75, 0.14) 0%, transparent 50%)",
          }}
        />
      </div>

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
                Software built for your specific industry&apos;s{" "}
                <span className="relative inline-block whitespace-nowrap align-baseline px-1 mx-0.5">
                  <span className="font-lobster font-normal text-[1.12em] tracking-normal text-[#d6acc1] inline-block select-none not-italic drop-shadow-sm">
                    usecase
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
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    />
                  </svg>
                </span>
                .
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                Every industry has unique operational challenges. We build custom software, mobile apps, and cloud automation tailored to the way your sector actually operates.
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

        {/* Minimal, Equal 3x3 Grid for All 9 Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;

            return (
              <MotionReveal key={sec.slug} delay={0.05 * (idx + 1)}>
                <Link href={sec.href} className="group block h-full">
                  <SpotlightCard 
                    className="p-7 sm:p-8 h-full flex flex-col justify-between border border-[rgba(246,240,235,0.08)] bg-[#110D0F] hover:border-[#71334B]/70 hover:bg-[#150F13] transition-all duration-300 rounded-3xl"
                    spotlightColor="rgba(113, 51, 75, 0.3)"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-5 border-b border-[rgba(246,240,235,0.06)] mb-5">
                        <div className="w-11 h-11 rounded-2xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.08)] flex items-center justify-center text-[#d6acc1] group-hover:bg-[#492332] group-hover:text-[#F6F0EB] group-hover:scale-105 transition-all duration-300 shadow-sm">
                          <Icon className="w-5 h-5 text-[#d6acc1] group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-mono text-xs font-semibold text-[#B8ADB2]/60 tracking-wider uppercase">
                          Sector 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#F6F0EB] tracking-tight group-hover:text-white transition-colors">
                        {sec.title}
                      </h3>

                      <p className="mt-1.5 text-xs font-semibold text-[#d6acc1]">
                        {sec.build}
                      </p>

                      <p className="mt-3.5 text-xs sm:text-[13px] text-[#B8ADB2] font-normal leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-[rgba(246,240,235,0.06)] flex items-center justify-between">
                      {/* <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2]/70">
                        {sec.tag}
                      </span> */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F0EB] group-hover:text-[#d6acc1] transition-colors">
                        <span>View solutions</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              </MotionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
