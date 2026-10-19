import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Layers, Lock, ShieldCheck, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About ZNX Labs — Building What's Next",
  description:
    "Learn about ZNX Labs, an AI-first digital engineering company building custom software, AI solutions, and intelligent business workflows for growing enterprises globally.",
  openGraph: {
    title: "About ZNX Labs — Building What's Next",
    description: "An AI-first digital engineering company built for technical competence and business clarity.",
    url: "https://znxlabs.com/about",
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "Outcomes Over Hype",
      desc: "We explain technical capabilities through business outcomes. We don't sell AI for the sake of novelty; we implement systems that solve concrete operational bottlenecks.",
      icon: CheckCircle2,
    },
    {
      title: "Precision Engineering",
      desc: "Clean architecture, strict type safety, verified schemas, and modular design. We build durable digital products that companies can rely on for years.",
      icon: Cpu,
    },
    {
      title: "Complete Client IP Ownership",
      desc: "When you build software with ZNX Labs, you own 100% of the code, intellectual property, and infrastructure. Zero vendor lock-in.",
      icon: Lock,
    },
    {
      title: "Commercial Confidentiality",
      desc: "We treat your business processes, proprietary data, and customer lists under strict enterprise non-disclosure standards.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#B8ADB2]">
            <Link href="/" className="hover:text-[#F6F0EB] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-[#F6F0EB] font-medium" aria-current="page">
              About ZNX Labs
            </span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Company & Philosophy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.08]">
              Building What&apos;s Next for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] to-[#d6acc1]">
                modern enterprises.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#B8ADB2] font-normal leading-relaxed">
              ZNX Labs builds AI solutions, custom software, and intelligent business workflows that help companies reduce repetitive work, improve productivity, connect their systems, and develop better digital products.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-sm text-[#B8ADB2] leading-relaxed">
              <h2 className="text-2xl font-bold text-[#F6F0EB] tracking-tight">
                An engineering partner, not a generic agency.
              </h2>
              <p>
                The digital landscape is flooded with superficial AI concepts, cookie-cutter SaaS templates, and inexperienced agencies capitalizing on technology hype.
              </p>
              <p>
                ZNX Labs was founded on the belief that software should be serious, dependable, and directly accountable to business performance. We work with business founders, operations leaders, managing directors, and CTOs who need software and AI that actually delivers in production.
              </p>
              <p>
                Whether you need to eliminate 40 hours of manual data entry per week, modernize an older operational system, or embed senior AI engineers into your development sprints, we build solutions designed around your exact commercial reality.
              </p>
            </div>

            {/* Brand Positioning Box */}
            <div className="lg:col-span-5 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 space-y-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#71334B] font-bold block">
                Brand Positioning
              </span>
              <h3 className="text-xl font-bold text-[#F6F0EB]">
                What Defines ZNX Labs
              </h3>

              <ul className="space-y-3 text-xs text-[#B8ADB2]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71334B] mt-1.5 shrink-0" />
                  <span><strong>Technical Competence:</strong> Senior engineering talent fluent in modern distributed architectures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71334B] mt-1.5 shrink-0" />
                  <span><strong>Business Understanding:</strong> We evaluate solutions by ROI, time saved, and throughput.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71334B] mt-1.5 shrink-0" />
                  <span><strong>International Ambition:</strong> Supporting businesses across North America, Europe, the Middle East, and Asia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71334B] mt-1.5 shrink-0" />
                  <span><strong>Engineering Calm:</strong> No buzzwords, no rushed code, no broken promises.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] mt-2">
              The standards we uphold on every engagement.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(246,240,235,0.04)] border border-[rgba(246,240,235,0.08)] flex items-center justify-center text-[#F6F0EB]">
                    <Icon className="w-5 h-5 text-[#71334B]" />
                  </div>
                  <h3 className="text-base font-bold text-[#F6F0EB] pt-1">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#B8ADB2] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Conversion CTA */}
        <FinalCTA
          title="Ready to collaborate with a"
          highlightedText="serious engineering team?"
          subtitle="Tell us about what you want to build or what is slowing your team down. We will help you evaluate feasibility and map out a practical next step."
          defaultService="Custom Software & Digital Engineering"
        />
      </main>

      <Footer />
    </div>
  );
}
