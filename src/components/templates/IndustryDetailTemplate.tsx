import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { IndustryItem } from "@/data/site-content";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, ShieldCheck } from "lucide-react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

interface IndustryDetailProps {
  industry: IndustryItem;
}

export function IndustryDetailTemplate({ industry }: IndustryDetailProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.name,
    provider: {
      "@type": "ProfessionalService",
      name: "ZNX Labs",
      url: "https://znxlabs.com",
    },
    description: industry.heroDescription,
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
                <Link href="/industries" className="hover:text-[#F6F0EB] transition-colors">
                  Industries
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <span className="text-[#F6F0EB] font-medium" aria-current="page">
                  {industry.name}
                </span>
              </nav>

              <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                  <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                    Industry Focus
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
                  {industry.name}
                </h1>

                <p className="text-lg sm:text-xl text-[#d6acc1] font-medium leading-snug">
                  {industry.tagline}
                </p>

                <p className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed max-w-3xl">
                  {industry.heroDescription}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] active:bg-[#381a26] border border-[#71334B]/60 rounded-xl shadow-lg transition-all"
                  >
                    <span>Discuss an Industry Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Industry Challenges vs Our Solutions */}
          <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Challenges */}
              <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10 space-y-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8ADB2] font-semibold block">
                  Common Bottlenecks
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#F6F0EB]">
                  Operational challenges in {industry.name.toLowerCase()}
                </h2>

                <div className="space-y-4 pt-2">
                  {industry.challenges.map((ch, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)]">
                      <h3 className="text-sm font-bold text-[#F6F0EB] mb-1">
                        {ch.title}
                      </h3>
                      <p className="text-xs text-[#B8ADB2] leading-relaxed">
                        {ch.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="rounded-3xl bg-[#191316] border border-[#71334B]/40 p-8 sm:p-10 space-y-6 shadow-xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold block">
                  ZNX Labs Engineering
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#F6F0EB]">
                  How our software and AI systems solve them
                </h2>

                <div className="space-y-4 pt-2">
                  {industry.solutionsProvided.map((sol, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)]">
                      <h3 className="text-sm font-bold text-[#F6F0EB] mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0" />
                        <span>{sol.title}</span>
                      </h3>
                      <p className="text-xs text-[#B8ADB2] leading-relaxed pl-6">
                        {sol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Section: Real Case Example */}
          <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-8 sm:p-12">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold block mb-2">
                Demonstrated Engineering Impact
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] mb-4">
                {industry.caseExample.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#F6F0EB] leading-relaxed mb-6 max-w-3xl">
                {industry.caseExample.description}
              </p>

              <div className="p-4 rounded-xl bg-[#492332]/25 border border-[#71334B]/50 inline-block">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6acc1] block font-semibold mb-1">
                  Measurable Result:
                </span>
                <span className="text-xs sm:text-sm text-[#F6F0EB] font-semibold">
                  {industry.caseExample.impact}
                </span>
              </div>
            </div>
          </section>

          {/* Section: FAQs */}
          <section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Industry Specifics
              </span>
              <h2 className="text-2xl font-bold text-[#F6F0EB] mt-2">
                Questions about {industry.name.toLowerCase()} implementations.
              </h2>
            </div>

            <FaqAccordion items={industry.faqs} />
          </section>

          {/* Interactive Conversion CTA */}
          <FinalCTA
            title="Have an operational bottleneck in"
            highlightedText={`${industry.name.toLowerCase()}?`}
            subtitle="Connect with our engineering team to review your workflow and explore practical software or automation options."
            defaultService={`${industry.name} Automation`}
          />

        </main>

        <Footer />
      </div>
    </>
  );
}
