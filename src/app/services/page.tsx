import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Code2, 
  Database, 
  FileSpreadsheet, 
  FileText, 
  LayoutDashboard, 
  Layers, 
  Network, 
  Search, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  Users, 
  Workflow, 
  Zap 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Custom Software, AI & Automation | ZNX Labs",
  description:
    "Explore our core services: Custom Software, AI Solutions, and Business Automation. We build practical software to help growing B2B businesses save time and scale.",
  alternates: {
    canonical: "https://znxlabs.com/services",
  },
  openGraph: {
    title: "Services — ZNX Labs",
    description: "Software and AI solutions designed around real business needs.",
    url: "https://znxlabs.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pb-24 lg:pb-32">
        {/* Header Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
          <BrandHeroBackground />
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(246,240,235,0.12)] bg-[rgba(246,240,235,0.03)] backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
                Our Core Services
              </span>
            </div>

            <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
              Software and AI solutions designed around{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] via-neutral-100 to-[#d6acc1]">
                real business needs.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              We don&apos;t build technology for the sake of it. We design practical software, automated workflows, and AI tools that solve real operational bottlenecks.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] rounded-xl border border-[#7e0e3c]/50 shadow-lg shadow-[#492332]/30 transition-all"
              >
                <span>Discuss a Custom Solution</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3 Detailed Service Sections */}
        <div className="mt-20 space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SERVICE A: CUSTOM SOFTWARE */}
          <section id="custom-software" className="relative rounded-3xl bg-[#08080b] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#492332]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#d6acc1] bg-[#492332]/40 px-2.5 py-1 rounded border border-[#7e0e3c]/40">
                    Service A
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Tailored Systems
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Software built around the way your business works.
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Off-the-shelf software often forces you to change your processes to fit its limitations. When existing commercial tools don&apos;t meet your requirements, we build custom business software specifically designed for your workflows.
                </p>

                {/* Business Benefit Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d6acc1] font-semibold block mb-1">
                    Direct Business Benefit
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200">
                    Less time working around unsuitable tools, fewer spreadsheet workarounds, and software that directly supports your team&apos;s daily operations.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact?type=Custom+Software"
                    className="btn-shine inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] px-5 py-2.5 rounded-lg border border-[#7e0e3c]/50 transition-colors"
                  >
                    <span>Discuss a Custom Software Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Practical Examples & Visual Diagram */}
              <div className="lg:col-span-6 space-y-6">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-6 space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#d6acc1]" />
                    <span>Practical Examples of What We Build:</span>
                  </h3>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Internal Business Applications</strong>
                        Custom tools for scheduling, order processing, and operations management.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Management & KPI Dashboards</strong>
                        Live operational dashboards displaying sales, capacity, and orders in real time.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Customer & Supplier Portals</strong>
                        Secure web portals where clients place orders, upload documents, and track jobs.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Business-Specific Platforms</strong>
                        Specialized software for unique manufacturing, distribution, or consulting operations.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Native & Cross-Platform Mobile Apps</strong>
                        High-performance iOS and Android applications for field staff, customer accounts, and mobile orders.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Integrations Between Existing Systems</strong>
                        Connecting older legacy software with modern web applications without data loss.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICE B: AI SOLUTIONS */}
          <section id="ai-solutions" className="relative rounded-3xl bg-[#08080b] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#492332]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#d6acc1] bg-[#492332]/40 px-2.5 py-1 rounded border border-[#7e0e3c]/40">
                    Service B
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Practical Intelligence
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Put AI to work on real business problems.
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Instead of vague &quot;AI transformations,&quot; we build practical, targeted AI systems that perform useful tasks: extracting data from PDFs, answering questions from company records, and helping employees complete routine knowledge work faster.
                </p>

                {/* Business Benefit Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d6acc1] font-semibold block mb-1">
                    Direct Business Benefit
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200">
                    Staff spend less time reading through mountains of files or typing information by hand, freeing them to focus on high-touch customer service and core business priorities.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact?type=AI+Solutions"
                    className="btn-shine inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] px-5 py-2.5 rounded-lg border border-[#7e0e3c]/50 transition-colors"
                  >
                    <span>Discuss an AI Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Practical Examples */}
              <div className="lg:col-span-6 space-y-6">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-6 space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-2">
                    <Bot className="w-4 h-4 text-[#d6acc1]" />
                    <span>Practical Examples of What We Build:</span>
                  </h3>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Document & Invoice Data Extraction</strong>
                        Automatically extracts vendor details, totals, and line items from PDFs and scans.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Internal Knowledge Assistants</strong>
                        Assistants that search your employee handbook, technical manuals, and SOPs for answers.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Customer Support Assistants</strong>
                        Handles initial customer questions 24/7 and escalates complex requests to staff.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Search Across Company Files</strong>
                        Enables employees to search contracts, proposals, and project specs in seconds.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Repetitive Drafting Assistants</strong>
                        Drafts standard proposals, summaries, and correspondence for human review.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICE C: BUSINESS AUTOMATION */}
          <section id="business-automation" className="relative rounded-3xl bg-[#08080b] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#492332]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#d6acc1] bg-[#492332]/40 px-2.5 py-1 rounded border border-[#7e0e3c]/40">
                    Service C
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Automated Workflows
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Let software handle repetitive work.
                </h2>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Every business has routine steps that consume hours of staff time: moving files, copying details between apps, reminding clients for signatures, or compiling weekly numbers. We build automated connections so software completes these tasks consistently.
                </p>

                {/* Business Benefit Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#d6acc1] font-semibold block mb-1">
                    Direct Business Benefit
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200">
                    Faster response times, fewer manual errors, and more consistent operations that run reliably even as order volume grows.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact?type=Business+Automation"
                    className="btn-shine inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] px-5 py-2.5 rounded-lg border border-[#7e0e3c]/50 transition-colors"
                  >
                    <span>Discuss Workflow Automation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Practical Examples */}
              <div className="lg:col-span-6 space-y-6">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-6 space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-[#d6acc1]" />
                    <span>Practical Examples of What We Build:</span>
                  </h3>

                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Enquiry Capture & Sales Follow-Up</strong>
                        New website leads are automatically organized, assigned, and followed up promptly.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Data Transfer Between Applications</strong>
                        Syncs customer records, deals, and payments between CRM, ERP, and accounting tools.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Automatic Report Generation</strong>
                        Compiles weekly management figures from multiple sources without manual copy-pasting.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Notifications & Approval Triggers</strong>
                        Alerts managers on Slack, Teams, or SMS only when decisions or sign-offs are needed.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Routine Document Processing</strong>
                        Routes incoming files to the right folders and updates team project statuses automatically.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Interactive Conversion CTA */}
        <FinalCTA
          title="Not sure which solution is"
          highlightedText="right for your business?"
          subtitle="Tell us about the bottleneck you are trying to solve. We will review your workflow and recommend whether custom software, automation, or an AI tool is the most practical choice."
          defaultService="Custom Software & Web Application"
        />
      </main>

      <Footer />
    </div>
  );
}
