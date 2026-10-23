import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { ServiceItem } from "@/data/site-content";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  Layers, 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  Workflow 
} from "lucide-react";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

interface ServiceDetailProps {
  service: ServiceItem;
  categoryLabel: string;
  categoryHref: string;
}

export function ServiceDetailTemplate({ service, categoryLabel, categoryHref }: ServiceDetailProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "ProfessionalService",
      name: "ZNX Labs",
      url: "https://znxlabs.com",
    },
    description: service.heroDescription,
    offers: {
      "@type": "Offer",
      description: service.ordinaryLanguageExplanation,
    },
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
          
          {/* Section 1: Hero & Breadcrumb */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
            <BrandHeroBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#B8ADB2]">
                <Link href="/" className="hover:text-[#F6F0EB] transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <Link href={categoryHref} className="hover:text-[#F6F0EB] transition-colors">
                  {categoryLabel}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <span className="text-[#F6F0EB] font-medium" aria-current="page">
                  {service.title}
                </span>
              </nav>

              <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                  <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                    {categoryLabel}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
                  {service.title}
                </h1>

                <p className="text-lg sm:text-xl text-[#d6acc1] font-medium leading-snug">
                  {service.tagline}
                </p>

                <p className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed max-w-3xl">
                  {service.heroDescription}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] active:bg-[#381a26] border border-[#71334B]/60 rounded-xl shadow-lg transition-all"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#how-it-works"
                    className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F6F0EB] hover:text-white bg-[rgba(246,240,235,0.04)] hover:bg-[rgba(246,240,235,0.08)] border border-[rgba(246,240,235,0.1)] rounded-xl transition-all"
                  >
                    <span>See How It Works</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Business Problem & Ordinary Language Explanation */}
          <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Problem */}
              <div className="lg:col-span-6 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8ADB2] font-semibold block mb-2">
                    The Commercial Friction
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight mb-4">
                    The Problem We Address
                  </h2>
                  <p className="text-sm text-[#B8ADB2] leading-relaxed">
                    {service.businessProblem}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(246,240,235,0.06)] text-[11px] font-mono text-[#71334B]">
                  Solvable through targeted engineering
                </div>
              </div>

              {/* Solution in Plain English */}
              <div className="lg:col-span-6 rounded-3xl bg-[#191316] border border-[#71334B]/40 p-8 sm:p-10 flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold block mb-2">
                    In Plain English
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight mb-4">
                    What This Service Actually Does
                  </h2>
                  <p className="text-sm text-[#F6F0EB] leading-relaxed">
                    {service.ordinaryLanguageExplanation}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(246,240,235,0.06)] flex items-center gap-2 text-xs text-[#d6acc1] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0" />
                  <span>Focused on business productivity and cost reduction</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Relevant Use Cases */}
          <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Practical Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] tracking-tight mt-2">
                Everyday business use cases.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] hover:border-[rgba(246,240,235,0.2)] hover:bg-[#191316] transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-[#71334B] font-semibold block mb-3">
                      Case 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-[#F6F0EB] mb-2 leading-snug">
                      {uc.title}
                    </h3>
                    <p className="text-xs text-[#B8ADB2] leading-relaxed">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: How It Works Visual Flow */}
          <section id="how-it-works" className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-12">
              <div className="max-w-2xl mb-10">
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Technical Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] tracking-tight mt-2">
                  How the system works in practice.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.howItWorks.map((st) => (
                  <div key={st.step} className="p-5 rounded-2xl bg-[#090708] border border-[rgba(246,240,235,0.06)] space-y-2">
                    <span className="font-mono text-xs font-bold text-[#F6F0EB] bg-[#492332] px-2 py-0.5 rounded">
                      Step {st.step}
                    </span>
                    <h3 className="text-sm font-bold text-[#F6F0EB] pt-1">
                      {st.title}
                    </h3>
                    <p className="text-xs text-[#B8ADB2] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Integrations & Capabilities Pills */}
              <div className="mt-8 pt-8 border-t border-[rgba(246,240,235,0.08)]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8ADB2] block mb-3 font-semibold">
                  Key Technologies & Capabilities Supported:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.integrationsAndCapabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono text-[#F6F0EB] bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.1)]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Demonstration Project & Engagement Process */}
          <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Working Demonstration Box */}
              <div className="lg:col-span-7 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 text-[#B8ADB2] border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                    {service.projectExample.isDemo ? "Working Demonstration" : "Verified Case Study"}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight">
                  {service.projectExample.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F6F0EB] leading-relaxed bg-[rgba(246,240,235,0.02)] p-4 rounded-xl border border-[rgba(246,240,235,0.06)]">
                  {service.projectExample.description}
                </p>

                <div className="p-4 rounded-xl bg-[#492332]/25 border border-[#71334B]/50">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6acc1] block font-semibold mb-1">
                    Verified Outcome:
                  </span>
                  <p className="text-xs sm:text-sm text-[#F6F0EB] font-medium">
                    {service.projectExample.outcome}
                  </p>
                </div>
              </div>

              {/* Engagement Steps */}
              <div className="lg:col-span-5 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B8ADB2] font-semibold block">
                  Engagement Roadmap
                </span>
                <h3 className="text-lg font-bold text-[#F6F0EB]">
                  How We Implement This
                </h3>

                <ul className="space-y-3 pt-2">
                  {service.engagementProcess.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#B8ADB2]">
                      <span className="w-5 h-5 rounded-md bg-[#492332] text-[#F6F0EB] flex items-center justify-center font-mono text-[10px] shrink-0 font-bold">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          {/* Section 6: FAQs */}
          <section className="mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Questions & Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] mt-2">
                Frequently asked questions.
              </h2>
            </div>

            <FaqAccordion items={service.faqs} />
          </section>

          {/* Section 7: Final Conversion CTA */}
          <FinalCTA
            title="Ready to explore"
            highlightedText={`${service.title.toLowerCase()} for your business?`}
            subtitle="Tell us about your current operational challenge. Our senior team will evaluate feasibility and outline a clear implementation roadmap."
            defaultService={service.title}
          />

          {/* Related Services */}
          {service.relatedServices && service.relatedServices.length > 0 && (
            <section className="mt-8 max-w-5xl mx-auto px-4 text-center">
              <div className="rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] p-6 sm:p-8">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#B8ADB2] block mb-4 font-semibold">
                  Related Services:
                </span>
                <div className="flex flex-wrap justify-center gap-3">
                  {service.relatedServices.map((rel, i) => (
                    <Link
                      key={i}
                      href={rel.href}
                      className="px-4 py-2 rounded-xl text-xs font-medium text-[#F6F0EB] bg-[rgba(246,240,235,0.03)] hover:bg-[#191316] border border-[rgba(246,240,235,0.1)] transition-colors"
                    >
                      {rel.title} →
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

        </main>

        <Footer />
      </div>
    </>
  );
}
