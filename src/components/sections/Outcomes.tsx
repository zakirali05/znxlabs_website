import React from "react";
import Link from "next/link";
import { ArrowRight, Bot, Code2, Cpu, FileSpreadsheet, Workflow, Zap } from "lucide-react";

export function Outcomes() {
  const categories = [
    {
      title: "Custom Software",
      tagline: "Software built around the way your business works.",
      practicalResult:
        "When off-the-shelf software doesn't fit your business processes, we build custom portals, internal management dashboards, and operational tools that match exactly how your team operates.",
      examples: [
        "Internal team tools & operational platforms",
        "Executive management & KPI dashboards",
        "Customer & supplier self-serve portals",
        "Direct bridges connecting your existing tools",
      ],
      icon: Code2,
      href: "/services#custom-software",
    },
    {
      title: "AI Solutions",
      tagline: "Put AI to work on real business problems.",
      practicalResult:
        "We build practical AI systems that read and extract information from documents, answer questions from internal knowledge bases, and assist employees with everyday administrative tasks.",
      examples: [
        "Invoice and specification data extraction",
        "Internal search across contracts & company documents",
        "Intelligent customer enquiry assistants",
        "Automated preliminary draft generation",
      ],
      icon: Bot,
      href: "/services#ai-solutions",
    },
    {
      title: "Business Automation",
      tagline: "Let software handle repetitive work.",
      practicalResult:
        "We connect your applications and automate routine steps so employees spend less time on manual entry, data copying, and following up on status updates.",
      examples: [
        "Automatic enquiry capture & sales follow-up cadences",
        "Seamless data transfer between CRM, ERP, and accounting",
        "Automated approval workflows and team alerts",
        "Scheduled report generation and notifications",
      ],
      icon: Workflow,
      href: "/services#business-automation",
    },
  ];

  return (
    <section id="how-we-help" className="relative py-24 lg:py-28 bg-black border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#492332]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono tracking-widest text-[#d6acc1] uppercase">
            How We Help
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3 leading-[1.15]">
            Three practical ways we improve your business operations.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            We don&apos;t sell generic tools or write code for its own sake. We identify where your operations get slowed down and build the software or automation to solve it.
          </p>
        </div>

        {/* 3 Core Service Categories */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="group relative rounded-2xl bg-[#09090c] border border-white/10 p-7 lg:p-8 flex flex-col justify-between hover:border-white/20 hover:bg-[#0e0e13] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-6">
                    <span className="font-mono text-xs font-semibold text-[#d6acc1] bg-[#492332]/40 px-2.5 py-1 rounded-md border border-[#7e0e3c]/40">
                      Category 0{index + 1}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-neutral-300 group-hover:text-white group-hover:bg-[#492332] flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#d6acc1] font-medium">
                    {cat.tagline}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {cat.practicalResult}
                  </p>

                  {/* Examples */}
                  <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      Common Solutions Built:
                    </span>
                    {cat.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7e0e3c] mt-1.5 shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5">
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#d6acc1] transition-colors"
                  >
                    <span>Learn more about {cat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
