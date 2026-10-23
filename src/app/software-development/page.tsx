import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SOFTWARE_DEV_DATA } from "@/data/site-content";
import { ArrowRight, Code2 } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";

export const metadata: Metadata = {
  title: "Custom Software & Mobile App Development | ZNX Labs",
  description:
    "Purpose-built software designed around your operations. Custom web applications, native iOS & Android mobile apps, SaaS products, MVP development, and CRM/ERP systems.",
  alternates: {
    canonical: "https://znxlabs.com/software-development",
  },
  openGraph: {
    title: "Software Development — ZNX Labs",
    description: "Purpose-built web and mobile software designed around your operations, your customers, and the way your business works.",
    url: "https://znxlabs.com/software-development",
  },
};

export default function SoftwareDevHubPage() {
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
                <Code2 className="w-3.5 h-3.5 text-[#71334B]" />
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Software Development Pillar
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.08]">
                Software designed around the way{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] to-[#d6acc1]">
                  your business works.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
                When commercial off-the-shelf tools don&apos;t fit your business processes, we engineer custom web applications, native iOS &amp; Android mobile apps, SaaS products, operational portals, and CRM/ERP systems built to your exact specifications.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOFTWARE_DEV_DATA.map((srv, idx) => (
              <div
                key={srv.slug}
                className="group rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] hover:border-[rgba(246,240,235,0.22)] p-8 flex flex-col justify-between hover:bg-[#191316] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(246,240,235,0.06)] mb-6">
                    <span className="font-mono text-xs font-semibold text-[#71334B]">
                      Service 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2]">
                      Software Engineering
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#F6F0EB] tracking-tight group-hover:text-white transition-colors">
                    {srv.title}
                  </h2>

                  <p className="mt-2 text-xs font-medium text-[#d6acc1]">
                    {srv.tagline}
                  </p>

                  <p className="mt-4 text-xs text-[#B8ADB2] leading-relaxed">
                    {srv.ordinaryLanguageExplanation}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[rgba(246,240,235,0.06)] flex items-center justify-between">
                  <Link
                    href={`/software-development/${srv.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors"
                  >
                    <span>View {srv.title.split(" ")[0]} details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA with embedded form */}
        <FinalCTA
          title="Need custom software & mobile apps engineered for"
          highlightedText="your business?"
          defaultService="Custom Software & Mobile App"
        />
      </main>

      <Footer />
    </div>
  );
}
