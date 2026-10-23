import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { INDUSTRIES_DATA } from "@/data/site-content";
import { ArrowRight, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Software & AI Solutions | ZNX Labs",
  description:
    "Tailored digital engineering and AI solutions for manufacturing, e-commerce, professional services, real estate, and SaaS companies.",
  alternates: {
    canonical: "https://znxlabs.com/industries",
  },
  openGraph: {
    title: "Industries We Support — ZNX Labs",
    description: "Specialized software and AI engineering solutions tailored to complex sector workflows.",
    url: "https://znxlabs.com/industries",
  },
};

export default function IndustriesHubPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pb-24 lg:pb-32">
        {/* Header */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
          <BrandHeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
                <Building2 className="w-3.5 h-3.5 text-[#71334B]" />
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Industries Pillar
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.08]">
                Targeted digital engineering for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] to-[#d6acc1]">
                  complex sectors.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
                We apply proven software architectures and AI automation to industries where manual paperwork, disparate software systems, and recurring administrative delays impact commercial margins.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.filter((ind) =>
              [
                "finance",
                "education",
                "ecommerce",
                "healthcare",
                "real-estate",
                "tech-saas",
                "manufacturing",
                "government",
                "legal",
              ].includes(ind.slug)
            ).map((ind, idx) => (
              <div
                key={ind.slug}
                className="group rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] hover:border-[rgba(246,240,235,0.22)] p-8 flex flex-col justify-between hover:bg-[#191316] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(246,240,235,0.06)] mb-6">
                    <span className="font-mono text-xs font-semibold text-[#71334B]">
                      Sector 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2]">
                      Industry Focus
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#F6F0EB] tracking-tight group-hover:text-white transition-colors">
                    {ind.name}
                  </h2>

                  <p className="mt-2 text-xs font-medium text-[#d6acc1]">
                    {ind.tagline}
                  </p>

                  <p className="mt-4 text-xs text-[#B8ADB2] leading-relaxed">
                    {ind.heroDescription}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[rgba(246,240,235,0.06)] flex items-center justify-between">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors"
                  >
                    <span>View {ind.name.split(" ")[0]} solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Conversion CTA */}
        <FinalCTA
          title="Have an operational bottleneck in"
          highlightedText="your industry?"
          subtitle="We engineer custom software and automated workflows tailored to your sector's proprietary standards."
          defaultService="Industry Automation System"
        />
      </main>

      <Footer />
    </div>
  );
}
