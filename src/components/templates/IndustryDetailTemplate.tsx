import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { IndustryItem, INDUSTRIES_DATA } from "@/data/site-content";
import { 
  ArrowRight, 
  BarChart3, 
  Building2, 
  CheckCircle2, 
  ChevronRight, 
  Cpu, 
  Database, 
  ExternalLink, 
  Layers, 
  Lock, 
  Network, 
  Server, 
  ShieldCheck, 
  Sparkles, 
  Workflow, 
  Zap 
} from "lucide-react";

interface IndustryDetailProps {
  industry: IndustryItem;
}

export function IndustryDetailTemplate({ industry }: IndustryDetailProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.name} Systems & AI Engineering`,
    provider: {
      "@type": "ProfessionalService",
      name: "ZNX Labs",
      url: "https://znxlabs.com",
    },
    description: industry.heroDescription,
  };

  // Other industries for cross-industry capability showcase
  const otherIndustries = INDUSTRIES_DATA.filter((i) => i.slug !== industry.slug);

  // 4 Core Architectural Pillars defining the full operational scope
  const corePillars = [
    {
      num: "01",
      icon: Workflow,
      title: "Agentic AI & Workflow Automation",
      subtitle: "Autonomous event loops with deterministic human oversight",
      description: `We build intelligent agents and multi-step automation pipelines for ${industry.name.toLowerCase()} that ingest multi-format operational data, extract structured information, reconcile discrepancies, and route tasks without human bottlenecks.`,
      deliverables: [
        "Multi-step asynchronous event orchestration",
        "Unstructured document & communication parsing",
        "Automated exception triage & notification routing",
        "Human-in-the-loop review & approval checkpoints",
      ],
    },
    {
      num: "02",
      icon: Layers,
      title: "Custom Core Software & Internal Platforms",
      subtitle: "Bespoke operational systems built around your exact business logic",
      description: `Off-the-shelf software rarely fits intricate sector requirements. We engineer tailored web applications, custom CRM/ERP portals, field operations gateways, and real-time command dashboards designed exclusively for your workflows.`,
      deliverables: [
        "High-performance Next.js & TypeScript architectures",
        "Role-based access control (RBAC) & audit trails",
        "Live operations & revenue KPI dashboards",
        "Responsive desktop, tablet, and mobile field access",
      ],
    },
    {
      num: "03",
      icon: Database,
      title: "Private Knowledge Systems & RAG",
      subtitle: "Sovereign AI assistants grounded strictly in your documents",
      description: `Turn complex technical documentation, regulatory manuals, contracts, and historical operational archives into an instantly queryable intelligence layer with direct page-level citations and zero third-party data leakage.`,
      deliverables: [
        "Enterprise document ingestion & chunking pipelines",
        "Vector search & hybrid BM25 retrieval engines",
        "Strict permissions & document-level access controls",
        "Sovereign VPC hosting with zero public model training",
      ],
    },
    {
      num: "04",
      icon: Network,
      title: "System Integration & Middleware Bridges",
      subtitle: "Bi-directional synchronization uniting your existing stack",
      description: `Modernize without discarding core infrastructure. We build reliable API bridges and webhook event routers connecting legacy SQL databases, enterprise ERPs (SAP, NetSuite, QuickBooks), payment processors, and cloud tools.`,
      deliverables: [
        "High-throughput REST & GraphQL integration APIs",
        "Two-way ledger, inventory & contact synchronization",
        "Legacy SQL database modernization & live replication",
        "Resilient retry queues with exponential backoff",
      ],
    },
  ];

  // 5-Stage Architecture Flow (21st.dev interactive/visual pipeline style)
  const pipelineStages = [
    {
      stage: "Stage 01",
      name: "Ingestion & Telemetry",
      type: "Multi-Source Intake",
      description: `Captures real-time incoming events, emails, scanned files, webhook payloads, and database updates across your ${industry.name.toLowerCase()} ecosystem.`,
      protocols: "Webhooks • REST APIs • S3/Blob Listeners • SFTP",
    },
    {
      stage: "Stage 02",
      name: "Validation & Guardrails",
      type: "Deterministic Verification",
      description: "Applies strict JSON-schema enforcement, compliance screening, input sanitization, and deterministic business rules before any downstream processing.",
      protocols: "Zod Schemas • Policy Engine • Encryption Gate",
    },
    {
      stage: "Stage 03",
      name: "Agentic Intelligence",
      type: "Applied LLM Reasoning",
      description: "Autonomous reasoning agents and vector search pipelines parse intent, match catalog SKUs, classify exceptions, and draft structured output.",
      protocols: "Semantic Embeddings • Hybrid Reranking • Function Calling",
    },
    {
      stage: "Stage 04",
      name: "Human Gatekeeper",
      type: "Operational Control",
      description: "Low-confidence items or critical commercial actions automatically route to an intuitive review portal for rapid one-click staff approval.",
      protocols: "Staff Portal • RBAC Queue • Audit Ledger",
    },
    {
      stage: "Stage 05",
      name: "Core System Mutation",
      type: "Downstream Execution",
      description: "Approved actions trigger simultaneous bi-directional writes across your ERP, financial ledgers, customer records, and notification pipelines.",
      protocols: "ERP Bridge • Database Commits • Event Dispatcher",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
        <Navbar />

        <main className="flex-1 pb-24 lg:pb-32">
          
          {/* =========================================================================
              1. HERO SECTION
              ========================================================================= */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
            <BrandHeroBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Breadcrumb nav */}
              <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                <span className="text-[#d6acc1] font-medium" aria-current="page">
                  {industry.name}
                </span>
              </nav>

              <div className="max-w-4xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(246,240,235,0.12)] bg-[rgba(246,240,235,0.03)] backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                  <span className="text-[11px] font-mono tracking-widest text-[#d6acc1] uppercase">
                    Full-Scope Digital & AI Engineering
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
                  {industry.name}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] via-neutral-100 to-[#d6acc1]">
                    Systems Engineering.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-[#d6acc1] font-medium leading-snug">
                  {industry.tagline}
                </p>

                <p className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed max-w-3xl">
                  {industry.heroDescription} We architect bespoke internal software, multi-agent automation loops, and sovereign AI systems tailored to the operational realties of {industry.name.toLowerCase()}—eliminating administrative drag and unlocking measurable business capacity.
                </p>

                {/* Quick Capability Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {[
                    "Agentic Workflow Loops",
                    "Custom ERP & Portals",
                    "Private RAG Knowledge Systems",
                    "Two-Way Legacy Bridges",
                    "100% Code & IP Ownership",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono text-[#F6F0EB] bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] active:bg-[#381a26] border border-[#71334B]/60 rounded-xl shadow-lg transition-all"
                  >
                    <span>Discuss Your Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#full-scope"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F6F0EB] hover:text-white bg-[rgba(246,240,235,0.04)] hover:bg-[rgba(246,240,235,0.08)] border border-[rgba(246,240,235,0.1)] rounded-xl transition-all"
                  >
                    <span>Explore Capabilities</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              2. FULL-SPECTRUM OPERATIONAL SCOPE (ESTABLISHING WIDE CAPABILITIES)
              ========================================================================= */}
          <section id="full-scope" className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[rgba(246,240,235,0.08)] gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d6acc1] mb-2 block">
                  End-to-End Capabilities
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  Comprehensive Engineering for {industry.name}
                </h2>
              </div>
              <p className="text-sm text-[#B8ADB2] max-w-md leading-relaxed">
                We are not a niche plugin or single-purpose automation tool. We engineer complete, durable software ecosystems that run your entire operational lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10 flex flex-col justify-between hover:border-[rgba(246,240,235,0.22)] transition-all space-y-6 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#492332]/40 border border-[#71334B]/50 flex items-center justify-center text-[#d6acc1] group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-sm text-[#71334B] font-bold">
                          Pillar {pillar.num}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono text-[#d6acc1] mb-4">
                        {pillar.subtitle}
                      </p>
                      <p className="text-sm text-[#B8ADB2] leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[rgba(246,240,235,0.06)] space-y-2.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2 font-semibold">
                        Core System Deliverables:
                      </span>
                      {pillar.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#F6F0EB]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#71334B] shrink-0 mt-0.5" />
                          <span className="leading-snug">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* =========================================================================
              3. HIGH-TECH OPERATIONAL ARCHITECTURE (21ST.DEV STYLE PIPELINE)
              ========================================================================= */}
          <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-b from-[#140D11] via-[#100A0D] to-[#0A0709] border border-[rgba(246,240,235,0.12)] p-8 sm:p-12">
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d6acc1] mb-2 block">
                  System Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  The Production Engineering Pipeline
                </h2>
                <p className="mt-3 text-sm text-[#B8ADB2] leading-relaxed">
                  How our software infrastructure ingests messy inputs, enforces strict deterministic business rules, executes intelligence, and mutates core enterprise systems in {industry.name.toLowerCase()}.
                </p>
              </div>

              {/* 5 Sequential Interactive Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {pipelineStages.map((stage, sIdx) => (
                  <div
                    key={sIdx}
                    className="rounded-2xl bg-[#090708] border border-[rgba(246,240,235,0.08)] p-5 flex flex-col justify-between hover:border-[#71334B] transition-colors relative group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono font-bold text-[#d6acc1]">
                          {stage.stage}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#71334B]" />
                      </div>

                      <h4 className="text-sm font-bold text-white mb-1">
                        {stage.name}
                      </h4>
                      <p className="text-[11px] font-mono text-neutral-400 mb-3">
                        {stage.type}
                      </p>
                      <p className="text-xs text-[#B8ADB2] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[rgba(246,240,235,0.06)]">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#71334B] block mb-1 font-semibold">
                        Protocols & Tools
                      </span>
                      <p className="text-[10px] font-mono text-neutral-400 truncate">
                        {stage.protocols}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              4. OPERATIONAL BOTTLENECKS VS ENGINEERED SOLUTIONS MATRIX
              ========================================================================= */}
          <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d6acc1] mb-2 block">
                Friction Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Sector Bottlenecks & Engineered Solutions
              </h2>
              <p className="mt-3 text-sm text-[#B8ADB2] leading-relaxed">
                Compare typical manual friction in {industry.name.toLowerCase()} against our production software capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Challenges Column */}
              <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10 space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                    Common Operational Friction
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB]">
                    Where {industry.name} Teams Lose Time & Margin
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {industry.challenges.map((ch, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/80 shrink-0" />
                        <h4 className="text-sm font-bold text-[#F6F0EB]">
                          {ch.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed pl-3.5">
                        {ch.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions Column */}
              <div className="rounded-3xl bg-[#191316] border border-[#71334B]/40 p-8 sm:p-10 space-y-6 shadow-xl">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold block mb-2">
                    ZNX Labs Solution Engine
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB]">
                    Engineered Capabilities We Implement
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {industry.solutionsProvided.map((sol, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0" />
                        <h4 className="text-sm font-bold text-[#F6F0EB]">
                          {sol.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed pl-6">
                        {sol.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. CROSS-INDUSTRY ENGINEERING AGILITY (ESTABLISHING WIDE SCOPE)
              ========================================================================= */}
          <section className="mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-8 sm:p-12 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(246,240,235,0.08)]">
                <div className="max-w-2xl">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d6acc1] mb-2 block">
                    Universal Engineering Agility
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Built for Scale Across All Industry Verticals
                  </h2>
                  <p className="mt-3 text-sm text-[#B8ADB2] leading-relaxed">
                    While operational data formats vary, high-performance systems share foundational engineering principles: deterministic verification, robust event queues, and frictionless human review. Explore our scope across other commercial sectors:
                  </p>
                </div>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#d6acc1] hover:underline shrink-0"
                >
                  <span>View All Industries</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Grid of other industries */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {otherIndustries.slice(0, 8).map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="p-5 rounded-2xl bg-[#090708] border border-[rgba(246,240,235,0.06)] hover:border-[#71334B]/60 hover:bg-[#181115] transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white group-hover:text-[#d6acc1] transition-colors">
                          {ind.name}
                        </span>
                        <ArrowRight className="w-3 h-3 text-neutral-500 group-hover:text-[#d6acc1] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-[11px] text-[#B8ADB2] line-clamp-2 leading-relaxed">
                        {ind.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
              6. ENTERPRISE GOVERNANCE & SECURITY GUARANTEES
              ========================================================================= */}
          <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.1)] p-8 sm:p-10 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold block mb-2">
                  Security & Commercial Standards
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Enterprise Safeguards for Critical Workflows
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Lock className="w-4 h-4 text-[#71334B]" />
                    <h4>100% Client IP & Code Ownership</h4>
                  </div>
                  <p className="text-xs text-[#B8ADB2] leading-relaxed">
                    You own the entire repository, documentation, data models, and deployed infrastructure from milestone one. Zero proprietary agency lock-in.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#71334B]" />
                    <h4>Sovereign Cloud & VPC Isolation</h4>
                  </div>
                  <p className="text-xs text-[#B8ADB2] leading-relaxed">
                    All AI models, databases, and pipelines deploy into your private cloud (AWS, Azure, Google Cloud, or local datacenter) with zero third-party data retention.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Server className="w-4 h-4 text-[#71334B]" />
                    <h4>Deterministic Auditability</h4>
                  </div>
                  <p className="text-xs text-[#B8ADB2] leading-relaxed">
                    Every autonomous action, validation check, and ERP write is immutably logged with comprehensive telemetry and instant manual override controls.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              7. FINAL INTERACTIVE CONVERSION CTA
              ========================================================================= */}
          <div className="mt-20">
            <FinalCTA
              title="Have an operational bottleneck in"
              highlightedText={`${industry.name.toLowerCase()}?`}
              subtitle="Connect directly with our engineering team to review your workflow, assess technical feasibility, and map out a custom software or automation roadmap."
              defaultService={`${industry.name} Automation`}
            />
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}
