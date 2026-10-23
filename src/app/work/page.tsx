import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  ExternalLink, 
  FileSpreadsheet, 
  FileText, 
  Layers, 
  Lock, 
  ShieldCheck, 
  Sparkles, 
  Workflow, 
  Zap 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — Engineering Demonstrations & Solutions | ZNX Labs",
  description:
    "Explore working software demonstrations, prototypes, and automated systems engineered by ZNX Labs to solve real business operational challenges.",
  alternates: {
    canonical: "https://znxlabs.com/work",
  },
  openGraph: {
    title: "Our Work — ZNX Labs",
    description: "Practical engineering demonstrations solving real business operational bottlenecks.",
    url: "https://znxlabs.com/work",
  },
};

export default function WorkPage() {
  const projects = [
    {
      id: "quote-engine",
      title: "Inbound RFQ & Quotation Intake Engine",
      solutionType: "Revenue & Sales Workflow Automation",
      statusLabel: "Working System Demonstration",
      statusBadge: "Operational Prototype",
      problem:
        "Wholesale distributors and service companies receive large volumes of RFQ bid documents, spreadsheets, and scanned PDFs daily. Estimating teams spend 24 to 48 hours manually cross-referencing catalogs, calculating margin markups, and assembling quotes, leading to slow turnaround times and lost deals.",
      whatWasBuilt:
        "An automated intake system that parses multi-format incoming customer quote files, extracts line items, verifies pricing against internal product catalogs, and prepares structured draft proposals ready for one-click staff review.",
      howItHelps:
        "Reduces quote preparation time from days to minutes, keeps potential customers engaged while buying interest is high, and eliminates missed enquiries.",
      features: [
        "Parses messy multi-page customer bid sheets (PDF & Excel)",
        "Automated SKU pricing and margin verification",
        "Staff review queue before final dispatch to customer",
        "Immediate sync with CRM deal pipeline",
      ],
      techNote: "Next.js, Python Document Extraction, Catalog Indexing, Webhook Pipeline",
    },
    {
      id: "operations-bridge",
      title: "Field Operations Gateway & Central Invoicing Bridge",
      solutionType: "Connected Business Software",
      statusLabel: "Enterprise Software Demonstration",
      statusBadge: "Software Demonstration",
      problem:
        "Field service technicians, warehouse inventory managers, and billing teams were working across disconnected tools (desktop accounting software, paper work orders, and spreadsheet schedules). Invoicing was delayed by up to 10 days, and inventory counts were frequently inaccurate.",
      whatWasBuilt:
        "A centralized web portal and two-way bridge connecting mobile technician job completions directly to the company's central inventory and billing records.",
      howItHelps:
        "Eliminates duplicate paper-to-computer data entry, ensures parts inventory updates in real time, and allows invoices to be sent the same day service work finishes.",
      features: [
        "Mobile technician portal for parts tracking and customer sign-offs",
        "Bi-directional synchronization with central database",
        "Same-day draft invoice staging for accounting approval",
        "Discrepancy alerts for warehouse inventory tracking",
      ],
      techNote: "TypeScript, Node.js Event Bus, Mobile PWA, Database Connectors",
    },
    {
      id: "onboarding-hub",
      title: "Client Onboarding & Document Verification Hub",
      solutionType: "Intelligent Workflow Automation",
      statusLabel: "Interactive Prototype & System",
      statusBadge: "Interactive Prototype",
      problem:
        "A professional services firm required clients to submit multiple compliance and corporate documents. Staff spent hours every week chasing missing files, answering status calls, and manually checking forms.",
      whatWasBuilt:
        "A secure client portal where new customers upload their required files, receive immediate guidance if something is incomplete, and track their onboarding progress in real time.",
      howItHelps:
        "Saves staff dozens of hours previously spent chasing documents, gives clients a transparent experience, and keeps a clear audit trail of completed requirements.",
      features: [
        "Self-serve client upload checklist with immediate format verification",
        "Automated polite reminders sent for missing documents",
        "Staff command center showing progress across all active client files",
        "Secure encrypted storage and audit logging",
      ],
      techNote: "Next.js App Router, Document Verification Webhooks, Encrypted Storage",
    },
    {
      id: "kpi-command-center",
      title: "Real-Time Operations & Revenue Dashboard",
      solutionType: "Custom Business Software",
      statusLabel: "Internal Dashboard Demonstration",
      statusBadge: "Dashboard Demonstration",
      problem:
        "Management had to wait until the end of the week for employees to manually compile sales figures, inventory movements, and pending shipments from three separate software tools.",
      whatWasBuilt:
        "A custom, unified management dashboard that aggregates live transactional feeds into a single, clean overview with automated daily summary alerts.",
      howItHelps:
        "Gives leadership clear visibility into operational performance at all times, without taking hours of staff time to compile spreadsheets.",
      features: [
        "Unified view of orders, shipments, and pending customer requests",
        "Automated daily operational summary emailed to leadership",
        "Role-based access permissions for management and staff",
        "Eliminates manual weekly spreadsheet compilation",
      ],
      techNote: "Next.js, Tailwind CSS, Live Data Feed Aggregator, PostgreSQL",
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pb-24 lg:pb-32">
        {/* Header */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
          <BrandHeroBackground />
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(246,240,235,0.12)] bg-[rgba(246,240,235,0.03)] backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
                Demonstrations & Systems
              </span>
            </div>

            <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
              Practical software demonstrations solving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] via-neutral-100 to-[#d6acc1]">
                real operational friction.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              We build working systems tailored to real business workflows. Explore demonstrations of our custom software, automation pipelines, and data tools.
            </p>
          </div>
        </section>

        {/* Portfolio Cards */}
        <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-8 sm:p-12 transition-all hover:border-[rgba(246,240,235,0.22)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Metadata & Problem/Solution */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-[#d6acc1]">
                        {project.solutionType}
                      </span>
                      <span className="text-neutral-600">•</span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 text-neutral-300 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                        {project.statusBadge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h2>
                  </div>

                  {/* Problem */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      The Business Problem
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      {project.problem}
                    </p>
                  </div>

                  {/* What Was Built */}
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#d6acc1] font-semibold mb-2">
                      What Was Built
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed bg-[#492332]/20 p-4 rounded-xl border border-[#7e0e3c]/30 font-medium">
                      {project.whatWasBuilt}
                    </p>
                  </div>
                </div>

                {/* Right: How It Helps & Key Features */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="rounded-2xl bg-black/60 border border-white/10 p-6 space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#d6acc1] font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#71334B]" />
                      <span>How It Helps The Business</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {project.howItHelps}
                    </p>

                    <div className="pt-4 border-t border-white/5 space-y-2.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                        Core System Features:
                      </span>
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7e0e3c] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 font-mono text-[11px]">
                      Architecture: {project.techNote}
                    </span>
                    <Link
                      href={`/contact?project=${encodeURIComponent(project.title)}`}
                      className="text-white hover:text-[#d6acc1] font-semibold flex items-center gap-1.5 shrink-0 ml-2"
                    >
                      <span>Discuss Similar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Confidentiality Notice */}
        <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-[#d6acc1] shrink-0" />
              <span>
                <strong>Confidentiality Policy:</strong> ZNX Labs preserves strict commercial privacy for all client codebases, internal data, and customer identities.
              </span>
            </div>
            <Link href="/contact" className="text-white hover:text-[#d6acc1] underline font-medium shrink-0">
              Request a Custom Architecture Review
            </Link>
          </div>
        </section>

        {/* Interactive Conversion CTA */}
        <FinalCTA
          title="Have a similar"
          highlightedText="operational bottleneck?"
          subtitle="Tell us what is slowing down your team. We will evaluate how software or AI automation can streamline the process and save your team dozens of weekly hours."
          defaultService="Custom Software & AI Automation"
        />
      </main>

      <Footer />
    </div>
  );
}
