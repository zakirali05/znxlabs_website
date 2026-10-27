import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { LocationItem } from "@/data/site-content";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, Globe2, ShieldCheck } from "lucide-react";

interface LocationDetailProps {
  location: LocationItem;
}

export function LocationDetailTemplate({ location }: LocationDetailProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `ZNX Labs — Serving Businesses in ${location.country}`,
    provider: {
      "@type": "ProfessionalService",
      name: "ZNX Labs",
      url: "https://znxlabs.com",
    },
    areaServed: location.country,
    description: location.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
        <Navbar />

        <main className="flex-1 pb-24 lg:pb-32">
          
          {/* Hero & Breadcrumb */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
            <BrandHeroBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#B8ADB2]">
                <Link href="/" className="hover:text-[#F6F0EB] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <Link href="/locations" className="hover:text-[#F6F0EB] transition-colors">
                  Locations
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <span className="text-[#F6F0EB] font-medium" aria-current="page">
                  {location.country}
                </span>
              </nav>

              <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
                  <Globe2 className="w-3.5 h-3.5 text-[#71334B]" />
                  <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                    Serving Businesses in {location.country}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
                  {location.headline}
                </h1>

                <p className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed max-w-3xl">
                  {location.description}
                </p>

                {/* Timezone & Collaboration Banner */}
                <div className="p-5 rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] block mb-1">
                      Collaboration Model:
                    </span>
                    <p className="text-xs text-[#F6F0EB] leading-relaxed">
                      {location.collaborationModel}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] block mb-1">
                      Timezones & Overlap:
                    </span>
                    <p className="text-xs text-[#F6F0EB] leading-relaxed flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#71334B] shrink-0" />
                      <span>{location.timezonesCovered}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] active:bg-[#381a26] border border-[#71334B]/60 rounded-xl shadow-lg transition-all"
                  >
                    <span>Discuss a Project in {location.country}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Priority Offerings */}
          <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] mt-2">
                Priority services for companies in {location.country}.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {location.keyServices.map((ks, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] hover:border-[rgba(246,240,235,0.2)] hover:bg-[#191316] transition-all space-y-3"
                >
                  <span className="font-mono text-xs text-[#71334B] font-semibold">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#F6F0EB]">
                    {ks.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed">
                    {ks.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Market Focus */}
          <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8ADB2] font-semibold block mb-2">
                Industry Alignment
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] mb-4">
                Key commercial sectors we support in {location.country}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {location.marketFocus.map((mf, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#F6F0EB]">{mf}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>



          {/* Interactive Conversion CTA */}
          <FinalCTA
            title="Have a business challenge in"
            highlightedText={`${location.country}?`}
            subtitle="Connect with our team to explore a practical software or AI solution with dedicated timezone alignment."
            defaultService="International Digital Engineering"
          />

        </main>

        <Footer />
      </div>
    </>
  );
}
