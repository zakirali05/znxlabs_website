"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Inbox, 
  Layers, 
  Mail, 
  RefreshCw, 
  Send, 
  Sparkles, 
  Users, 
  Zap 
} from "lucide-react";

type Scenario = "enquiry" | "invoice" | "sync";

export function ProcessSimplicityVisual() {
  const [activeScenario, setActiveScenario] = useState<Scenario>("enquiry");

  const scenarios = {
    enquiry: {
      title: "Customer Enquiry & Follow-up",
      subtitle: "Never let a potential customer wait hours for a reply.",
      manualSteps: [
        "Inbound enquiry arrives in inbox",
        "Employee manually copies customer details",
        "Employee checks pricing and drafts quote",
        "Quote sent after 24–48 hours",
        "Follow-up is often forgotten",
      ],
      automatedSteps: [
        "Enquiry captured immediately from email or web",
        "Customer details & requirements organized automatically",
        "Draft quote prepared in minutes for review",
        "Quote sent promptly while buyer interest is high",
        "Automated follow-up reminders keep deal moving",
      ],
      badge: "Sales & Follow-Up",
      result: "Faster responses, organized enquiries, and zero forgotten follow-ups.",
    },
    invoice: {
      title: "Invoice & Document Processing",
      subtitle: "Eliminate hours of manual data entry every week.",
      manualSteps: [
        "Invoices arrive as PDFs and paper scans",
        "Staff type numbers line-by-line into software",
        "Manual checks for mismatched totals",
        "Approvals delayed across email chains",
        "High risk of typing errors",
      ],
      automatedSteps: [
        "Invoices ingested automatically from inbox or upload",
        "Software extracts vendor, totals, and line items",
        "Numbers verified against purchase orders",
        "Automated notifications sent for fast approval",
        "Data posted directly to accounting with audit trail",
      ],
      badge: "Document Automation",
      result: "Hours of repetitive typing saved, fewer mistakes, and faster approvals.",
    },
    sync: {
      title: "Connecting Disconnected Software",
      subtitle: "Make your tools work together without manual copying.",
      manualSteps: [
        "Sales team uses CRM, warehouse uses ERP",
        "Customer updates require manual re-typing",
        "Inventory levels frequently out of sync",
        "Weekly reports take hours to compile by hand",
        "Teams work with conflicting spreadsheets",
      ],
      automatedSteps: [
        "Custom bridge connects your CRM and ERP directly",
        "Customer updates sync across systems in real time",
        "Inventory and order status stay accurate everywhere",
        "Management sees live numbers in one central dashboard",
        "Eliminates duplicate entry and spreadsheet confusion",
      ],
      badge: "Connected Systems",
      result: "One single source of truth, less double work, and clear visibility.",
    },
  };

  const current = scenarios[activeScenario];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0a0a0d] p-6 lg:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Subtle brand glow behind visual */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#492332]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#7e0e3c]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header & Scenario Selector */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#71334B]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              Interactive Workflow Example
            </span>
          </div>
          <h2 className="text-lg lg:text-xl font-bold text-white mt-1">
            {current.title}
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5">
            {current.subtitle}
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex flex-wrap items-center bg-white/5 p-1 rounded-xl border border-white/10 self-start md:self-auto gap-1">
          <button
            type="button"
            onClick={() => setActiveScenario("enquiry")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeScenario === "enquiry"
                ? "bg-[#492332] text-white shadow-sm font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Sales Enquiry
          </button>
          <button
            type="button"
            onClick={() => setActiveScenario("invoice")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeScenario === "invoice"
                ? "bg-[#492332] text-white shadow-sm font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Invoice Processing
          </button>
          <button
            type="button"
            onClick={() => setActiveScenario("sync")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeScenario === "sync"
                ? "bg-[#492332] text-white shadow-sm font-semibold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Connected Software
          </button>
        </div>
      </div>

      {/* Side-by-Side Comparison: Manual Way vs. The ZNX Way */}
      <div className="relative z-10 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left: The Manual Way */}
        <div className="rounded-xl bg-white/[0.02] border border-white/10 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                The Manual Process
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/40 text-red-300 border border-red-500/20">
                Slow & Repetitive
              </span>
            </div>

            <ul className="space-y-3">
              {current.manualSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                  <span className="w-4 h-4 rounded-full bg-white/5 text-neutral-500 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-neutral-500">
            Result: Hours spent on routine work, delayed answers, and missed details.
          </div>
        </div>

        {/* Right: The Automated Way */}
        <div className="rounded-xl bg-gradient-to-b from-[#180f14] to-[#0f090d] border border-[#7e0e3c]/50 p-5 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#d6acc1] flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#d6acc1]" />
                With ZNX Labs Software
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#492332] text-white border border-[#7e0e3c]/50">
                Fast & Automated
              </span>
            </div>

            <ul className="space-y-3">
              {current.automatedSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#71334B] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#d6acc1] font-medium flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#d6acc1] shrink-0" />
            <span>{current.result}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Action link */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
        <span className="text-neutral-400 text-center sm:text-left">
          Have a similar repetitive process in your business? We can automate it.
        </span>
        <a
          href="/contact"
          className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#d6acc1] transition-colors"
        >
          <span>Ask how we would automate this for you</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
