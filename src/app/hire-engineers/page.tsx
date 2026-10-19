import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HIRE_ENGINEERS_DATA } from "@/data/site-content";
import { ArrowRight, CheckCircle2, Cpu, Users } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Hire AI & Software Engineers | Senior Technical Talent | ZNX Labs",
  description:
    "Augment your product team with senior AI engineers, AI agent developers, LLM/RAG engineers, full-stack developers, and dedicated engineering squads.",
  openGraph: {
    title: "Hire Engineers — ZNX Labs",
    description: "Bring experienced AI and software engineering capabilities into your product development process.",
    url: "https://znxlabs.com/hire-engineers",
  },
};

export default function HireEngineersHubPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
              <Users className="w-3.5 h-3.5 text-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Engineering Talent Pillar
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.08]">
              Experienced AI and software engineers ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] to-[#d6acc1]">
                accelerate your builds.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
              Skip the multi-month recruiting cycle. We provide senior, vetted AI engineers, agent developers, RAG retrieval specialists, and full-stack squads who embed directly into your sprint cycles.
            </p>
          </div>
        </section>

        {/* Roles Grid */}
        <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HIRE_ENGINEERS_DATA.map((role, idx) => (
              <div
                key={role.slug}
                className="group rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] hover:border-[rgba(246,240,235,0.22)] p-8 flex flex-col justify-between hover:bg-[#191316] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(246,240,235,0.06)] mb-6">
                    <span className="font-mono text-xs font-semibold text-[#71334B]">
                      Role 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2]">
                      Senior Talent
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#F6F0EB] tracking-tight group-hover:text-white transition-colors">
                    {role.title}
                  </h2>

                  <p className="mt-2 text-xs font-medium text-[#d6acc1]">
                    {role.tagline}
                  </p>

                  <p className="mt-4 text-xs text-[#B8ADB2] leading-relaxed">
                    {role.ordinaryLanguageExplanation}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[rgba(246,240,235,0.06)] flex items-center justify-between">
                  <Link
                    href={`/hire-engineers/${role.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors"
                  >
                    <span>View {role.title.split(" ")[1]} profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guarantee Banner */}
        <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#B8ADB2]">
            <div>
              <span className="font-mono uppercase text-[#71334B] text-[10px] block font-bold mb-1">
                Fast Onboarding
              </span>
              <p className="text-[#F6F0EB] font-medium">
                Engineers integrate into your GitHub, Slack, and daily standups within 5 business days.
              </p>
            </div>
            <div>
              <span className="font-mono uppercase text-[#71334B] text-[10px] block font-bold mb-1">
                Timezone Concurrent
              </span>
              <p className="text-[#F6F0EB] font-medium">
                Dedicated daily overlap with US, UK, UAE, and Asian operating hours.
              </p>
            </div>
            <div>
              <span className="font-mono uppercase text-[#71334B] text-[10px] block font-bold mb-1">
                Flexible Agreements
              </span>
              <p className="text-[#F6F0EB] font-medium">
                Transparent monthly contracts with no restrictive long-term lock-in or hidden recruiting fees.
              </p>
            </div>
          </div>
        </section>

        {/* CTA with embedded form */}
        <FinalCTA
          title="Need experienced engineering talent on"
          highlightedText="your project?"
          defaultService="Dedicated Developers"
        />
      </main>

      <Footer />
    </div>
  );
}
