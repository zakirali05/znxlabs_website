"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Database, 
  FileSpreadsheet, 
  GitBranch, 
  Layers, 
  Mail, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles, 
  Zap 
} from "lucide-react";

type TopologyMode = "revenue" | "workflow" | "bridge";

export function SystemTopologyVisual() {
  const [activeMode, setActiveMode] = useState<TopologyMode>("revenue");

  const modeContent = {
    revenue: {
      title: "Revenue & RFQ Ingestion Pipeline",
      description: "Continuous inbound triage, automated line-item quoting, and real-time CRM updates.",
      sources: [
        { name: "Inbound RFQs (PDF/XLS)", icon: FileSpreadsheet, tag: "Multi-Format" },
        { name: "Executive Inbox", icon: Mail, tag: "Direct Channel" },
        { name: "Web Enquiries", icon: Zap, tag: "Instant Hook" },
      ],
      coreEngine: {
        title: "ZNX Intelligent Triage Core",
        steps: [
          "Document OCR & Spec Parser",
          "Catalog Pricing & Margin Guardrails",
          "Deterministic Proposal Drafting",
        ],
        badge: "Zero-Loss Pipeline",
      },
      targets: [
        { name: "ERP & Inventory Sync", icon: Database, metric: "Bi-directional" },
        { name: "Operator Review Queue", icon: ShieldCheck, metric: "Human-in-Loop" },
        { name: "Instant Client Quote", icon: ArrowRight, metric: "< 8m turnaround" },
      ],
      stats: { latency: "140ms", accuracy: "99.8%", status: "Active Processing" },
    },
    workflow: {
      title: "Autonomous Operational Workflows",
      description: "Eliminating manual data transcription, document classification, and recurring administration.",
      sources: [
        { name: "Vendor Invoices & Bills", icon: FileSpreadsheet, tag: "Unstructured" },
        { name: "Compliance Records", icon: ShieldCheck, tag: "Verification" },
        { name: "Daily Operations Logs", icon: Layers, tag: "Automated Feed" },
      ],
      coreEngine: {
        title: "ZNX Orchestration Layer",
        steps: [
          "Schema Normalization & Anomaly Filter",
          "Automated Rule & Threshold Matching",
          "Autonomous Reconciliation",
        ],
        badge: "Fault-Tolerant Queue",
      },
      targets: [
        { name: "Central Data Warehouse", icon: Database, metric: "Zero Data Silos" },
        { name: "Audit & Compliance Ledger", icon: CheckCircle2, metric: "100% Traceable" },
        { name: "Automated Approvals", icon: ArrowRight, metric: "Instant Action" },
      ],
      stats: { latency: "210ms", accuracy: "100%", status: "Continuous Sync" },
    },
    bridge: {
      title: "Custom Software & Enterprise Bridge",
      description: "Connecting disconnected legacy software, modern SaaS, and custom internal command centers.",
      sources: [
        { name: "Legacy Desktop ERP", icon: Database, tag: "Legacy Sync" },
        { name: "Field Technician PWA", icon: Cpu, tag: "Mobile Sync" },
        { name: "Client Self-Serve Portal", icon: Layers, tag: "Custom UI" },
      ],
      coreEngine: {
        title: "ZNX Integration Gateway",
        steps: [
          "Event-Driven Webhook Broker",
          "Resilient Idempotent Queues",
          "Unified GraphQL / REST Layer",
        ],
        badge: "High-Availability API",
      },
      targets: [
        { name: "Executive Real-Time KPIs", icon: Sparkles, metric: "Live Telemetry" },
        { name: "Dispatch & Routing Engine", icon: RefreshCw, metric: "Autonomous" },
        { name: "Automated Invoicing Hub", icon: ArrowRight, metric: "Instant Post" },
      ],
      stats: { latency: "42ms", accuracy: "99.99%", status: "Live Microservices" },
    },
  };

  const current = modeContent[activeMode];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0a0a0d] p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Subtle brand glow behind visual */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#492332]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7e0e3c]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header bar with Mode Toggles */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#71334B] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Interactive System Topology
            </span>
          </div>
          <h2 className="text-lg lg:text-xl font-medium text-white mt-1">
            {current.title}
          </h2>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setActiveMode("revenue")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeMode === "revenue"
                ? "bg-[#492332] text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Revenue Flow
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("workflow")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeMode === "workflow"
                ? "bg-[#492332] text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Workflow Automation
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("bridge")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeMode === "bridge"
                ? "bg-[#492332] text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Connected Software
          </button>
        </div>
      </div>

      {/* Architecture Flow Canvas */}
      <div className="relative z-10 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Column 1: Sources */}
        <div className="flex flex-col justify-between space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 flex items-center justify-between">
            <span>01 / Ingestion Channels</span>
            <span className="text-[10px] text-neutral-600">INPUTS</span>
          </div>

          <div className="space-y-2.5">
            {current.sources.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-neutral-300 group-hover:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-neutral-200">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5">
                    {item.tag}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-neutral-500 pt-1">
            Continuous ingestion from native files, webhooks, and communication APIs.
          </p>
        </div>

        {/* Column 2: Central Processing Core */}
        <div className="relative rounded-xl bg-gradient-to-b from-[#181822] to-[#101017] p-5 border border-[#492332]/50 shadow-lg flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#d6acc1]" />
              <span className="text-xs font-semibold text-white tracking-wide">
                {current.coreEngine.title}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#492332]/60 text-pink-200 border border-[#7e0e3c]/40">
              {current.coreEngine.badge}
            </span>
          </div>

          {/* Core Pipeline Steps */}
          <div className="my-4 space-y-2.5">
            {current.coreEngine.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs text-neutral-300 bg-black/40 px-3 py-2 rounded-lg border border-white/5"
              >
                <div className="w-4 h-4 rounded-full bg-[#492332] text-white flex items-center justify-center text-[9px] font-mono font-bold shrink-0">
                  {idx + 1}
                </div>
                <span className="truncate">{step}</span>
              </div>
            ))}
          </div>

          {/* Telemetry pill */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-neutral-500" />
              Latency
            </span>
            <span className="text-white font-medium">{current.stats.latency}</span>
          </div>
        </div>

        {/* Column 3: Output & System Synchronization */}
        <div className="flex flex-col justify-between space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 flex items-center justify-between">
            <span>03 / Connected Endpoints</span>
            <span className="text-[10px] text-neutral-600">ACTION</span>
          </div>

          <div className="space-y-2.5">
            {current.targets.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#492332]/30 text-[#d6acc1] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-neutral-200">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#d6acc1] font-medium">
                    {item.metric}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] text-neutral-500 pt-1">
            Directly updates existing CRM, ERP, and operational teams in real time.
          </p>
        </div>
      </div>

      {/* Footer System Telemetry Status Bar */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-neutral-500">Pipeline State:</span>
            <span className="text-white font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              {current.stats.status}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-neutral-500">Accuracy & Integrity:</span>
            <span className="text-white font-medium">{current.stats.accuracy}</span>
          </div>
        </div>

        <div className="text-[11px] text-neutral-500">
          Engineered by ZNX Labs • Enterprise Architecture
        </div>
      </div>
    </div>
  );
}
