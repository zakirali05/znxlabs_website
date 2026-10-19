"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  Lock, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  Activity,
  ChevronRight,
  Database,
  Cpu
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  id: string;
  name: string;
  category: "automation" | "software" | "portal";
  categoryLabel: string;
  badge: string;
  headlineMetric: string;
  metricSubtitle: string;
  problemSummary: string;
  engineeredSolution: string;
  stack: string[];
  deliverables: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "rfq-pipeline",
    name: "Commercial RFQ & Bid Ingestion Engine",
    category: "automation",
    categoryLabel: "Revenue & Sales Automation",
    badge: "Production Engine",
    headlineMetric: "12m vs 36h",
    metricSubtitle: "Turnaround time compressed; +34% quote conversion",
    problemSummary: "Wholesale distributors receive multi-page bid spreadsheets daily. Manual catalog matching took 24–48 hours, causing high buyer drop-off.",
    engineeredSolution: "An automated pipeline that parses unstructured bid sheets, checks SKU pricing against ERP inventory, applies volume markups, and stages ready-to-approve proposals.",
    stack: ["Next.js 16", "LangGraph", "FastAPI", "PostgreSQL", "Tailscale VPC"],
    deliverables: [
      "Parses complex XLS/PDF bid sheets",
      "Auto-applies margin tiers & substitutes",
      "1-click estimator approval queue",
      "Direct bidirectional CRM synchronization",
    ],
  },
  {
    id: "field-bridge",
    name: "Connected Field Operations & Invoicing Bridge",
    category: "software",
    categoryLabel: "Connected Business Software",
    badge: "Enterprise System",
    headlineMetric: "Same-Day Billing",
    metricSubtitle: "Eliminated 10-day invoice delays with zero data re-keying",
    problemSummary: "Field technicians logged jobs on paper/mobile notes while billing teams used a separate desktop ERP, creating 10-day invoicing delays and inventory mismatch.",
    engineeredSolution: "A centralized web portal and real-time event bridge synchronizing field job completions directly into inventory and general ledger records.",
    stack: ["TypeScript", "React", "Node.js", "Docker", "REST & Webhooks"],
    deliverables: [
      "Mobile job sign-off with offline support",
      "Instant inventory count reconciliation",
      "Same-day draft invoice staging",
      "Automated variance & anomaly alerts",
    ],
  },
  {
    id: "onboarding-hub",
    name: "Client Onboarding & Document Verification Hub",
    category: "portal",
    categoryLabel: "Process Automation & Security",
    badge: "Verified Client Portal",
    headlineMetric: "-70% Admin Time",
    metricSubtitle: "Automated document checklist with real-time audit trail",
    problemSummary: "Corporate clients submit dozens of compliance documents. Staff spent hours weekly chasing missing files and answering status calls.",
    engineeredSolution: "A branded client portal where customers upload required documents with immediate completeness feedback and automated reminder triggers.",
    stack: ["Next.js", "Tailwind CSS", "AWS S3 Sovereign", "AES-256", "SendGrid"],
    deliverables: [
      "Self-service onboarding progress checklist",
      "Automated document validation checks",
      "Scheduled polite follow-up triggers",
      "Bank-grade encrypted storage vault",
    ],
  },
];

export function SelectedWork() {
  const [filter, setFilter] = useState<"all" | "automation" | "software" | "portal">("all");
  const [activeProjectId, setActiveProjectId] = useState<string>("rfq-pipeline");

  const filteredProjects = filter === "all" 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <section id="work" className="relative py-28 lg:py-36 bg-[#090708] border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[400px] bg-[#492332]/15 blur-[160px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[rgba(246,240,235,0.08)]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Production Systems
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
                Software engineered for quantifiable business ROI.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                Explore real systems and verified engineering architectures built by ZNX Labs. Each platform starts with a commercial bottleneck and concludes with an automated, high-margin operating asset.
              </p>
            </div>

            <div className="shrink-0">
              <MagneticButton href="/work" variant="secondary" className="text-xs py-2.5 px-4">
                <span>View Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>
            </div>
          </div>
        </MotionReveal>

        {/* Category Filters */}
        <MotionReveal delay={0.1}>
          <div className="flex items-center gap-2 pt-8 pb-8 overflow-x-auto no-scrollbar">
            {[
              { id: "all", label: "All Systems" },
              { id: "automation", label: "Workflow Automation" },
              { id: "software", label: "Connected Software" },
              { id: "portal", label: "Client Portals" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat.id
                    ? "bg-[#492332] text-[#F6F0EB] border border-[#71334B]"
                    : "bg-[#110D0F] text-[#B8ADB2] border border-[rgba(246,240,235,0.06)] hover:text-[#F6F0EB]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </MotionReveal>

        {/* Featured Showcase: High-Impact Bento Composition */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <MotionReveal key={project.id} delay={0.15 * index}>
                <SpotlightCard className="p-8 sm:p-10 border border-[rgba(246,240,235,0.1)] bg-[#110D0F] hover:border-[#71334B]/60 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Project Overview & Core Metrics */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono text-[#d6acc1] font-semibold">
                          {project.categoryLabel}
                        </span>
                        <span className="text-neutral-700">•</span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#F6F0EB] bg-[#492332] border border-[#71334B]/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d6acc1]" />
                          {project.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#F6F0EB] tracking-tight">
                        {project.name}
                      </h3>

                      {/* Quantified Metric Callout */}
                      <div className="p-4 rounded-2xl bg-[#191316] border border-[#71334B]/40 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] block">
                            Key Commercial Improvement
                          </span>
                          <span className="text-xl sm:text-2xl font-bold font-mono text-[#F6F0EB]">
                            {project.headlineMetric}
                          </span>
                        </div>
                        <span className="text-xs text-[#B8ADB2] max-w-xs text-right">
                          {project.metricSubtitle}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed">
                        {project.engineeredSolution}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono text-[#B8ADB2] mr-1">Stack:</span>
                        {project.stack.map((st) => (
                          <span
                            key={st}
                            className="px-2.5 py-1 rounded-lg bg-[#090708] border border-[rgba(246,240,235,0.08)] text-[10px] font-mono text-[#F6F0EB]"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Engineered Deliverables & Action */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 bg-[#090708] p-6 rounded-2xl border border-[rgba(246,240,235,0.06)]">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#71334B] font-bold block mb-4">
                          Architectural Capabilities
                        </span>

                        <ul className="space-y-3 text-xs text-[#F6F0EB]">
                          {project.deliverables.map((d, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0 mt-0.5" />
                              <span className="leading-snug">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-[rgba(246,240,235,0.08)] flex items-center justify-between gap-4">
                        <Link
                          href="/work"
                          className="text-xs font-semibold text-[#B8ADB2] hover:text-[#F6F0EB] transition-colors"
                        >
                          System Walkthrough →
                        </Link>

                        <MagneticButton href="/contact" variant="primary" className="text-xs py-2 px-3.5">
                          <span>Request Similar System</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </MagneticButton>
                      </div>
                    </div>

                  </div>
                </SpotlightCard>
              </MotionReveal>
            );
          })}
        </div>

        {/* Commercial Confidentiality Reassurance Strip */}
        <MotionReveal delay={0.3}>
          <div className="mt-12 p-5 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8ADB2]">
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-[#71334B] shrink-0" />
              <span>
                We respect NDA and client privacy agreements. Showcased architectures represent authentic production systems with sanitized proprietary data.
              </span>
            </div>
            <Link href="/work" className="text-[#F6F0EB] hover:text-[#d6acc1] underline font-medium shrink-0">
              Read Verification Methodology
            </Link>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
