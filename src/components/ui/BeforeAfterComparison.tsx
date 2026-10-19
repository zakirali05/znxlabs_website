"use client";

import React from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Clock, Sparkles, Minus } from "lucide-react";

export function BeforeAfterComparison() {
  const beforeSteps = [
    { title: "Enquiry Arrives in Inbox", note: "Sits unread while team is busy with other tasks." },
    { title: "Manual Data Entry", note: "Employee re-types name, email, and requirements into software." },
    { title: "Delayed Quotation", note: "Takes 24 to 48 hours to cross-reference prices and calculate totals." },
    { title: "Manual Follow-Up Memory", note: "Sales rep must remember to check in weeks later, often forgotten." },
    { title: "Disconnected Spreadsheet Update", note: "Status typed manually into a team spreadsheet that quickly goes out of date." },
  ];

  const afterSteps = [
    { title: "Enquiry Captured Instantly", note: "Details captured automatically from email or web enquiry form." },
    { title: "Information Organized Automatically", note: "Customer record and requirements created in your system immediately." },
    { title: "Fast Quotation Preparation", note: "Standard pricing and itemized drafts generated in minutes for quick review." },
    { title: "Automated Follow-Up Reminders", note: "Helpful reminders and follow-ups run on schedule without manual memory." },
    { title: "Everything in One Place", note: "The whole team sees live status, quotes, and communication in one clear view." },
  ];

  return (
    <div className="w-full">
      {/* Illustrative Notice Pill */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d6acc1]">
            Side-by-Side Comparison
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-neutral-400">
          <AlertCircle className="w-3.5 h-3.5 text-neutral-500" />
          <span>Typical enquiry workflow transformation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* BEFORE CARD (Muted Neutral Gray) */}
        <div className="rounded-2xl bg-[#090708] border border-[rgba(246,240,235,0.08)] p-7 lg:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[rgba(246,240,235,0.06)] mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#B8ADB2] font-semibold block mb-1">
                  Manual Approach
                </span>
                <h3 className="text-xl font-bold text-[#F6F0EB]">Slow & Disconnected</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[rgba(246,240,235,0.04)] border border-[rgba(246,240,235,0.08)] text-[#B8ADB2] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3.5">
              {beforeSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.04)]">
                  <Minus className="w-4 h-4 text-neutral-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#B8ADB2]">{step.title}</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[rgba(246,240,235,0.06)] text-xs text-[#B8ADB2]">
            <strong className="text-[#F6F0EB]">The Bottleneck:</strong> Valued staff spend hours copying data, deals slip through the cracks, and response times drag.
          </div>
        </div>

        {/* AFTER CARD (Rich Deep Vine & Burgundy) */}
        <div className="rounded-2xl bg-[#191316] border border-[#71334B]/60 p-7 lg:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#492332]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between pb-5 border-b border-[rgba(246,240,235,0.08)] mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#d6acc1] font-semibold block mb-1">
                  With ZNX Labs Software
                </span>
                <h3 className="text-xl font-bold text-[#F6F0EB]">Fast & Automated</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#492332] border border-[#71334B]/70 text-[#F6F0EB] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3.5">
              {afterSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#090708]/70 border border-[#71334B]/30">
                  <CheckCircle2 className="w-4 h-4 text-[#71334B] mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#F6F0EB]">{step.title}</h4>
                    <p className="text-[11px] text-[#B8ADB2] mt-0.5 leading-relaxed">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 pt-4 border-t border-[rgba(246,240,235,0.08)] text-xs text-[#B8ADB2]">
            <strong className="text-[#F6F0EB]">The Practical Result:</strong> Enquiries handled promptly, customer information is organized, and sales follow-ups happen consistently.
          </div>
        </div>
      </div>
    </div>
  );
}
