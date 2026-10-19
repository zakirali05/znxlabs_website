"use client";

import React from "react";
import Link from "next/link";
import { Bot, Code2, Cpu, Workflow, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionReveal";

export function TrustCapabilityStrip() {
  const capabilities = [
    {
      title: "AI Solutions",
      desc: "Deterministic extraction, agent loops & private RAG assistants.",
      href: "/ai-solutions",
      icon: Bot,
      tag: "Deterministic Models",
    },
    {
      title: "Business Automation",
      desc: "Robust event-driven pipelines eliminating manual data handoffs.",
      href: "/ai-solutions/ai-workflow-automation",
      icon: Workflow,
      tag: "Event Middleware",
    },
    {
      title: "Custom Software",
      desc: "Bespoke web applications & portals with 100% intellectual property ownership.",
      href: "/software-development/custom-software",
      icon: Code2,
      tag: "Client-Owned IP",
    },
    {
      title: "AI Engineering Talent",
      desc: "Senior applied AI & full-stack software engineers ready to embed in sprints.",
      href: "/hire-engineers",
      icon: Cpu,
      tag: "4h+ Timezone Overlap",
    },
  ];

  return (
    <section className="relative py-10 bg-[#110D0F] border-y border-[rgba(246,240,235,0.08)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.08}>
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <MotionStaggerItem key={cap.title}>
                <Link
                  href={cap.href}
                  className="group block p-5 rounded-2xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.06)] hover:border-[#71334B]/60 hover:bg-[#191316] transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[rgba(246,240,235,0.04)] border border-[rgba(246,240,235,0.08)] flex items-center justify-center text-[#F6F0EB] group-hover:bg-[#492332] group-hover:text-white transition-all">
                        <Icon className="w-4 h-4 text-[#71334B] group-hover:text-white" />
                      </div>
                      <span className="text-[10px] font-mono text-[#d6acc1]">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#F6F0EB] tracking-tight group-hover:text-white flex items-center justify-between">
                      <span>{cap.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B8ADB2] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>

                    <p className="mt-1.5 text-xs text-[#B8ADB2] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </Link>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>
      </div>
    </section>
  );
}
