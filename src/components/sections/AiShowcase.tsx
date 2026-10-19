"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  Cpu, 
  FileCode, 
  Play, 
  RefreshCw, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Zap,
  Activity,
  Layers,
  SlidersHorizontal
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { motion, AnimatePresence } from "framer-motion";

interface SimulationScenario {
  id: string;
  name: string;
  category: string;
  latency: string;
  precision: string;
  payloadSummary: string;
  pipelineSteps: string[];
  outputData: {
    title: string;
    fields: { label: string; value: string; status: "ok" | "verified" | "flag" }[];
    humanGate: string;
    roi: string;
  };
  telemetry: {
    ingestMs: number;
    modelMs: number;
    guardrailMs: number;
    tokensPerSec: number;
  };
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: "rfq-extractor",
    name: "Commercial RFQ & Bid Ingestion",
    category: "Multimodal Document Intelligence",
    latency: "24ms",
    precision: "99.8%",
    payloadSummary: "8-page scanned PDF containing 42 custom alloy fastener specifications, delivery timelines, and destination ports.",
    pipelineSteps: [
      "Vector OCR & spatial layout extraction",
      "SKU cross-matching with internal ERP catalog",
      "Volume discount & raw material index calculation",
      "Deterministic human approval threshold validation",
    ],
    outputData: {
      title: "Extracted Proposal Draft #RFQ-8492",
      fields: [
        { label: "Detected Items", value: "42 of 42 SKUs mapped", status: "verified" },
        { label: "Margin Markups", value: "32.4% net margin enforced", status: "ok" },
        { label: "Discontinued SKUs", value: "2 flagged; 2 valid substitutes staged", status: "flag" },
        { label: "Total Quote Value", value: "$148,250.00 USD", status: "verified" },
      ],
      humanGate: "Quotes over $5,000 route to senior estimator for 1-click verification before client dispatch.",
      roi: "Turnaround compressed from 36 hours to 12 minutes. Proposal win rate up +34%.",
    },
    telemetry: {
      ingestMs: 5,
      modelMs: 14,
      guardrailMs: 5,
      tokensPerSec: 4200,
    },
  },
  {
    id: "invoice-sync",
    name: "Autonomous AP Ledger Reconciliation",
    category: "Financial Process Automation",
    latency: "19ms",
    precision: "100%",
    payloadSummary: "Multi-vendor supplier invoice with 18 line items, currency conversion, VAT calculations, and line-item freight charges.",
    pipelineSteps: [
      "Tax ID and vendor profile cryptographic lookup",
      "Mathematical cross-check: Line items sum == Grand total",
      "Purchase Order #PO-2049 matching in warehouse ledger",
      "General ledger automated journal entry staging",
    ],
    outputData: {
      title: "Reconciled AP Voucher #AP-9912",
      fields: [
        { label: "Vendor Verification", value: "Apex Industrial Corp (Verified Tax ID)", status: "verified" },
        { label: "Math Tolerance", value: "0.00 variance across 18 items", status: "ok" },
        { label: "PO Match State", value: "100% matched to Receiving Ticket #RC-402", status: "verified" },
        { label: "Staged Action", value: "Auto-staged in NetSuite / QuickBooks", status: "ok" },
      ],
      humanGate: "Variances exceeding $0.05 or bank detail changes trigger mandatory dual-custody review.",
      roi: "Eliminates 92% of manual keying. Zero duplicate invoice payments.",
    },
    telemetry: {
      ingestMs: 4,
      modelMs: 11,
      guardrailMs: 4,
      tokensPerSec: 4800,
    },
  },
  {
    id: "rag-assistant",
    name: "Sovereign Knowledge & SOP Retrieval",
    category: "Retrieval-Augmented Generation (RAG)",
    latency: "31ms",
    precision: "99.9%",
    payloadSummary: "Field engineer query: 'What is the maximum torque limit for valve assembly V-402 on high-pressure steam lines?'",
    pipelineSteps: [
      "1536-dimensional semantic query embedding",
      "Hybrid vector + BM25 keyword index retrieval across 22,000 pages",
      "Cross-encoder reranking of top 5 canonical schematics",
      "Strict citation-grounded synthesis with zero external hallucination",
    ],
    outputData: {
      title: "Verified Engineering Citation",
      fields: [
        { label: "Target Specification", value: "450 Nm ± 15 Nm with anti-seize lubricant", status: "verified" },
        { label: "Canonical Source", value: "Technical Field Manual Vol. 4, Pg. 142, Rev C", status: "verified" },
        { label: "Schematic Anchor", value: "Figure 12-B: High-Pressure Steam Flange", status: "ok" },
        { label: "Hallucination Risk", value: "0.0% (Enforced by strict context bounding)", status: "ok" },
      ],
      humanGate: "Refuses to speculate if parameter is absent in verified documentation; alerts chief engineer.",
      roi: "Reduces on-site diagnosis time by 45 minutes per dispatch call.",
    },
    telemetry: {
      ingestMs: 7,
      modelMs: 19,
      guardrailMs: 5,
      tokensPerSec: 3800,
    },
  },
];

export function AiShowcase() {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeTab, setActiveTab] = useState<"output" | "telemetry" | "architecture">("output");
  const [logStep, setLogStep] = useState(4);

  const scenario = SCENARIOS[activeScenarioIndex];

  const handleExecute = () => {
    setIsExecuting(true);
    setLogStep(0);

    const interval = setInterval(() => {
      setLogStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          setIsExecuting(false);
          return 4;
        }
        return prev + 1;
      });
    }, 350);
  };

  return (
    <section id="ai-showcase" className="relative py-28 lg:py-36 bg-[#090708] border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#492332]/20 blur-[170px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with high-tech badge */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                  Live Engine Console
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.12]">
                Deterministic AI built for production operations.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                Test how enterprise workflows execute in real time. Every system is engineered with strict mathematical verification, private data protection, and enforceable human approval gates.
              </p>
            </div>

            {/* Live Status indicator */}
            <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#110D0F] border border-[rgba(246,240,235,0.1)] text-[11px] font-mono text-[#F6F0EB]">
              <span className="w-2 h-2 rounded-full bg-[#71334B] animate-pulse" />
              <span>RUNTIME: ONLINE (VPC ISOLATED)</span>
            </div>
          </div>
        </MotionReveal>

        {/* Interactive Scenario Selector Tabs */}
        <MotionReveal delay={0.1}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
            {SCENARIOS.map((sc, idx) => {
              const isSelected = activeScenarioIndex === idx;
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => {
                    setActiveScenarioIndex(idx);
                    setLogStep(4);
                    setIsExecuting(false);
                  }}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer flex items-center gap-3 border ${
                    isSelected
                      ? "bg-[#492332] text-[#F6F0EB] border-[#71334B] shadow-lg shadow-[#492332]/30"
                      : "bg-[#110D0F] text-[#B8ADB2] border-[rgba(246,240,235,0.08)] hover:text-[#F6F0EB] hover:bg-[#191316]"
                  }`}
                >
                  <span className="font-mono text-[11px] opacity-70">0{idx + 1}</span>
                  <span>{sc.name}</span>
                </button>
              );
            })}
          </div>
        </MotionReveal>

        {/* Interactive AI Workbench Studio */}
        <MotionReveal delay={0.2}>
          <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] shadow-2xl overflow-hidden">
            
            {/* Studio Top Telemetry Bar */}
            <div className="px-6 py-4 bg-[#090708] border-b border-[rgba(246,240,235,0.08)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#71334B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                </div>
                <span className="text-xs font-mono font-bold text-[#F6F0EB] pl-2 border-l border-[rgba(246,240,235,0.08)]">
                  {scenario.category}
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] font-mono text-[#B8ADB2]">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#d6acc1]" />
                  <span>Latency: <strong className="text-[#F6F0EB]">{scenario.latency}</strong></span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#71334B]" />
                  <span>Precision: <strong className="text-[#F6F0EB]">{scenario.precision}</strong></span>
                </div>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Input Payload & Pipeline Execution */}
              <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[rgba(246,240,235,0.08)] bg-[#0c090a] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2]">
                      Incoming Stream Payload
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(246,240,235,0.04)] text-[#F6F0EB] border border-[rgba(246,240,235,0.08)]">
                      SHA256 Encrypted
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] text-xs text-[#B8ADB2] font-mono leading-relaxed mb-6">
                    {scenario.payloadSummary}
                  </div>

                  {/* Execution Stages List with Animated Pulse */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] block">
                      Execution Pipeline
                    </span>

                    {scenario.pipelineSteps.map((step, idx) => {
                      const isComplete = logStep > idx;
                      const isCurrent = logStep === idx && isExecuting;

                      return (
                        <div
                          key={idx}
                          className={`p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                            isComplete
                              ? "bg-[#191316] border-[#71334B]/40 text-[#F6F0EB]"
                              : isCurrent
                              ? "bg-[#492332]/20 border-[#71334B] text-[#F6F0EB] animate-pulse"
                              : "bg-[#090708] border-[rgba(246,240,235,0.05)] text-neutral-500"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {isComplete ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#71334B] shrink-0" />
                            ) : isCurrent ? (
                              <RefreshCw className="w-3.5 h-3.5 text-[#d6acc1] animate-spin shrink-0" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full border border-neutral-700 shrink-0 inline-block" />
                            )}
                            <span className="truncate">{step}</span>
                          </div>

                          <span className="text-[10px] text-neutral-400 shrink-0 font-sans">
                            {isComplete ? "OK" : isCurrent ? "Processing" : "Queued"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Live Trigger Action */}
                <div className="pt-4 border-t border-[rgba(246,240,235,0.06)]">
                  <MagneticButton
                    onClick={handleExecute}
                    className="w-full justify-center"
                    variant="primary"
                  >
                    <Play className={`w-3.5 h-3.5 ${isExecuting ? "animate-spin" : ""}`} />
                    <span>{isExecuting ? "Simulating Execution..." : "Re-Run Live Simulation"}</span>
                  </MagneticButton>
                </div>
              </div>

              {/* Right Column: Dynamic Terminal / Output View */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#110D0F]">
                <div>
                  {/* View Mode Toggle Tabs */}
                  <div className="flex items-center justify-between pb-4 border-b border-[rgba(246,240,235,0.08)] mb-6">
                    <div className="flex items-center gap-2 bg-[#090708] p-1 rounded-xl border border-[rgba(246,240,235,0.08)]">
                      <button
                        type="button"
                        onClick={() => setActiveTab("output")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === "output"
                            ? "bg-[#492332] text-[#F6F0EB]"
                            : "text-[#B8ADB2] hover:text-[#F6F0EB]"
                        }`}
                      >
                        Structured Output
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("telemetry")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === "telemetry"
                            ? "bg-[#492332] text-[#F6F0EB]"
                            : "text-[#B8ADB2] hover:text-[#F6F0EB]"
                        }`}
                      >
                        Telemetry Metrics
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("architecture")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          activeTab === "architecture"
                            ? "bg-[#492332] text-[#F6F0EB]"
                            : "text-[#B8ADB2] hover:text-[#F6F0EB]"
                        }`}
                      >
                        Commercial Impact
                      </button>
                    </div>

                    <span className="hidden sm:inline text-[11px] font-mono text-[#d6acc1]">
                      * Interactive Output State
                    </span>
                  </div>

                  {/* Tab Contents with Framer Motion AnimatePresence */}
                  <AnimatePresence mode="wait">
                    {activeTab === "output" && (
                      <motion.div
                        key="output"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-[#F6F0EB] tracking-tight">
                            {scenario.outputData.title}
                          </h4>
                          <span className="text-[10px] font-mono text-[#F6F0EB] bg-[#492332] px-2 py-0.5 rounded border border-[#71334B]">
                            Validated Result
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {scenario.outputData.fields.map((field, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl bg-[#090708] border border-[rgba(246,240,235,0.06)]"
                            >
                              <span className="text-[10px] font-mono uppercase text-[#B8ADB2] block mb-1">
                                {field.label}
                              </span>
                              <div className="text-xs font-semibold text-[#F6F0EB] flex items-center justify-between">
                                <span>{field.value}</span>
                                {field.status === "verified" && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#71334B] shrink-0 ml-1" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Human In The Loop Gate Banner */}
                        <div className="p-4 rounded-xl bg-[#191316] border border-[#71334B]/50 flex items-start gap-3 mt-4">
                          <ShieldCheck className="w-4 h-4 text-[#71334B] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6acc1] font-bold block mb-1">
                              Guaranteed Human Gate & Audit Trail
                            </span>
                            <p className="text-xs text-[#F6F0EB] leading-relaxed">
                              {scenario.outputData.humanGate}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "telemetry" && (
                      <motion.div
                        key="telemetry"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <h4 className="text-sm font-bold text-[#F6F0EB]">
                          Real-Time Engine Telemetry
                        </h4>

                        <div className="space-y-3 font-mono text-xs">
                          <div>
                            <div className="flex justify-between text-[#B8ADB2] mb-1">
                              <span>Payload Ingestion & OCR</span>
                              <span>{scenario.telemetry.ingestMs}ms</span>
                            </div>
                            <div className="h-1.5 w-full bg-[#090708] rounded-full overflow-hidden">
                              <div className="h-full bg-[#71334B] rounded-full" style={{ width: "20%" }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[#B8ADB2] mb-1">
                              <span>Model Inference & Vector Math</span>
                              <span>{scenario.telemetry.modelMs}ms</span>
                            </div>
                            <div className="h-1.5 w-full bg-[#090708] rounded-full overflow-hidden">
                              <div className="h-full bg-[#492332] rounded-full" style={{ width: "65%" }} />
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-[#B8ADB2] mb-1">
                              <span>Deterministic Guardrail Check</span>
                              <span>{scenario.telemetry.guardrailMs}ms</span>
                            </div>
                            <div className="h-1.5 w-full bg-[#090708] rounded-full overflow-hidden">
                              <div className="h-full bg-[#71334B] rounded-full" style={{ width: "15%" }} />
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[#090708] border border-[rgba(246,240,235,0.08)] flex items-center justify-between text-xs font-mono text-[#F6F0EB] mt-4">
                          <span>Token Stream Throughput:</span>
                          <strong className="text-[#F6F0EB]">{scenario.telemetry.tokensPerSec} tokens/sec</strong>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "architecture" && (
                      <motion.div
                        key="architecture"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        <h4 className="text-sm font-bold text-[#F6F0EB]">
                          Quantified Commercial Outcome
                        </h4>

                        <div className="p-5 rounded-2xl bg-[#191316] border border-[#71334B]/40 space-y-3">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6acc1] font-bold block">
                            Direct Operational ROI
                          </span>
                          <p className="text-sm text-[#F6F0EB] font-medium leading-relaxed">
                            {scenario.outputData.roi}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3.5 rounded-xl bg-[#090708] border border-[rgba(246,240,235,0.06)]">
                            <span className="text-[10px] font-mono text-[#B8ADB2] block mb-1">Deployment Location</span>
                            <span className="font-semibold text-[#F6F0EB]">Client Sovereign VPC</span>
                          </div>
                          <div className="p-3.5 rounded-xl bg-[#090708] border border-[rgba(246,240,235,0.06)]">
                            <span className="text-[10px] font-mono text-[#B8ADB2] block mb-1">Code Ownership</span>
                            <span className="font-semibold text-[#F6F0EB]">100% Client IP</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom CTA within Console */}
                <div className="pt-6 mt-6 border-t border-[rgba(246,240,235,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#B8ADB2]">
                    Need a custom pipeline designed around your exact ERP or document schema?
                  </span>
                  <MagneticButton href="/contact" variant="primary" className="shrink-0 text-xs py-2.5 px-4">
                    <span>Discuss Your Pipeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </MagneticButton>
                </div>

              </div>

            </div>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
}
