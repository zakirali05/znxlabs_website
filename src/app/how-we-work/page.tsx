import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Cpu, 
  FileCheck, 
  Layers, 
  Lock, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles, 
  Users 
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work — Our Engineering Process | ZNX Labs",
  description:
    "Learn how ZNX Labs moves projects from an idea to a working software or AI solution through our 4-stage process: Understand, Plan, Build, Launch and Improve.",
  openGraph: {
    title: "How We Work — ZNX Labs",
    description: "A disciplined, transparent process from business problem to working solution.",
    url: "https://znxlabs.com/how-we-work",
  },
};

export default function HowWeWorkPage() {
  const stages = [
    {
      number: "01",
      name: "Understand",
      tagline: "We learn how your business works and identify the problem worth solving.",
      details: [
        "We discuss your daily operations and where employees spend repetitive hours.",
        "We map out your current workflow, applications in use, and manual handoffs.",
        "We confirm the specific commercial bottleneck that is costing you time or revenue.",
        "We evaluate whether software, automation, or AI is the most effective solution.",
      ],
      deliverable: "Problem Definition & Feasibility Assessment",
      icon: Compass,
    },
    {
      number: "02",
      name: "Plan",
      tagline: "We define the solution, expected benefits, scope, and implementation approach.",
      details: [
        "We specify exactly what the software or automated workflow will do.",
        "We determine how it will connect with your existing tools (CRM, ERP, email, etc.).",
        "We agree on clear milestones, deliverables, and expectations.",
        "We outline how success will be measured in terms of time saved or faster throughput.",
      ],
      deliverable: "Project Scope & Architecture Plan",
      icon: Layers,
    },
    {
      number: "03",
      name: "Build",
      tagline: "We develop the software or AI workflow, integrate the required systems, and test it.",
      details: [
        "We build the application, database, and automation pipelines to exact requirements.",
        "We connect your tools securely using verified APIs and data safeguards.",
        "We test edge cases with realistic business data to ensure accuracy.",
        "We provide regular progress demonstrations so you can provide feedback as we build.",
      ],
      deliverable: "Tested Software Build & Live Demonstration",
      icon: Cpu,
    },
    {
      number: "04",
      name: "Launch and Improve",
      tagline: "We deploy the solution, support adoption, and improve it based on actual usage.",
      details: [
        "We guide your team through how to use the new system comfortably.",
        "We deploy without interrupting your daily business operations.",
        "We monitor early usage, fix any teething issues, and verify accuracy.",
        "We refine and extend features as your business volume and needs grow.",
      ],
      deliverable: "Live Deployment, Staff Guidance & Ongoing Support",
      icon: RefreshCw,
    },
  ];

  const commitments = [
    {
      title: "No Technical Jargon",
      desc: "We speak plainly about your business, processes, and deliverables. You will always know what is being built and why.",
      icon: Users,
    },
    {
      title: "Zero Business Disruption",
      desc: "We build and test in a secure isolated environment. Your live systems remain completely untouched until you approve the rollout.",
      icon: ShieldCheck,
    },
    {
      title: "Commercial Confidentiality",
      desc: "We treat your business data, customer lists, and proprietary workflows under strict non-disclosure standards.",
      icon: Lock,
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(246,240,235,0.12)] bg-[rgba(246,240,235,0.03)] backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
              Our Process
            </span>
          </div>

          <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
            How we turn business challenges into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] via-neutral-100 to-[#d6acc1]">
              working solutions.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
            Building software shouldn&apos;t be confusing or disruptive. We use a transparent, four-stage process that ensures you stay in control from the first conversation to launch.
          </p>
        </section>

        {/* 4 Stages Detailed Section */}
        <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="relative rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-8 sm:p-12 transition-all hover:border-[rgba(246,240,235,0.22)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-[#492332] text-white flex items-center justify-center text-sm font-mono font-bold border border-[#7e0e3c]/50">
                        {stage.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#d6acc1]">
                        Stage {stage.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {stage.name}
                    </h2>

                    <p className="text-sm sm:text-base text-neutral-300 font-medium leading-relaxed">
                      {stage.tagline}
                    </p>

                    <div className="pt-2">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                          Key Deliverable At This Stage:
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0" />
                          {stage.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Exact Activities */}
                  <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                      What Happens During This Stage:
                    </h3>

                    <ul className="space-y-3.5">
                      {stage.details.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7e0e3c] mt-2 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Working Principles */}
        <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono tracking-widest text-[#d6acc1] uppercase">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              How we protect your time and operations.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="p-7 rounded-2xl bg-[#09090c] border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#492332]/50 text-white flex items-center justify-center border border-[#7e0e3c]/40">
                    <Icon className="w-5 h-5 text-[#d6acc1]" />
                  </div>
                  <h3 className="text-base font-bold text-white">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Conversion CTA */}
        <FinalCTA
          title="Ready to explore what we could"
          highlightedText="build for your business?"
          subtitle="Every project begins with a simple, no-obligation evaluation of how your business operates and where custom software or AI could help."
          defaultService="Custom Software & Web Application"
        />
      </main>

      <Footer />
    </div>
  );
}
