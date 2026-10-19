import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { LOCATIONS_DATA } from "@/data/site-content";
import { ArrowRight, Globe2, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Locations We Serve | International Digital Engineering | ZNX Labs",
  description:
    "ZNX Labs delivers AI engineering, custom software, and automated workflows to businesses across the United States, United Kingdom, United Arab Emirates, Saudi Arabia, and India.",
  openGraph: {
    title: "Locations We Serve — ZNX Labs",
    description: "International digital engineering and AI solutions with dedicated timezone alignment.",
    url: "https://znxlabs.com/locations",
  },
};

export default function LocationsHubPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
              <Globe2 className="w-3.5 h-3.5 text-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                International Coverage
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.08]">
              Delivering digital engineering to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] to-[#d6acc1]">
                businesses globally.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
              We partner with companies internationally through structured remote engineering, transparent communication, and dedicated working-hour overlap across primary commercial hubs.
            </p>
          </div>
        </section>

        {/* Countries Grid */}
        <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS_DATA.map((loc, idx) => (
              <div
                key={loc.slug}
                className="group rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] hover:border-[rgba(246,240,235,0.22)] p-8 flex flex-col justify-between hover:bg-[#191316] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(246,240,235,0.06)] mb-6">
                    <span className="font-mono text-xs font-semibold text-[#71334B]">
                      {loc.region}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2]">
                      Serving Market
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#F6F0EB] tracking-tight group-hover:text-white transition-colors">
                    {loc.country}
                  </h2>

                  <p className="mt-3 text-xs text-[#B8ADB2] leading-relaxed">
                    {loc.description}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] text-[11px] text-[#F6F0EB] flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#71334B] shrink-0" />
                    <span>{loc.timezonesCovered}</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[rgba(246,240,235,0.06)] flex items-center justify-between">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F6F0EB] hover:text-[#d6acc1] transition-colors"
                  >
                    <span>View {loc.country} overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Remote Delivery Policy Notice */}
        <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] text-xs text-[#B8ADB2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              * We believe in total commercial transparency. We serve international markets through dedicated remote engineering squads rather than temporary shell offices.
            </p>
            <Link href="/how-we-work" className="text-[#F6F0EB] hover:text-[#d6acc1] underline font-medium shrink-0">
              Read Our Remote Delivery Model
            </Link>
          </div>
        </section>

        {/* Interactive Conversion CTA */}
        <FinalCTA
          title="Looking for a global"
          highlightedText="digital engineering partner?"
          subtitle="Connect with our technical team to discuss your project requirements, timezone alignment, and delivery milestones."
          defaultService="Custom Software & Global Engineering"
        />
      </main>

      <Footer />
    </div>
  );
}
