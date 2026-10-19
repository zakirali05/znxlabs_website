import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Bot, 
  FileText, 
  LayoutDashboard, 
  Network, 
  Sliders, 
  Workflow 
} from "lucide-react";

export function Capabilities() {
  const solutions = [
    {
      title: "AI Assistants for Business Tasks",
      description:
        "Custom assistants trained on your internal policies, product catalogs, and documents to help staff retrieve accurate answers in seconds without digging through folders.",
      icon: Bot,
      category: "AI Solutions",
    },
    {
      title: "Automated Sales & Follow-Up Workflows",
      description:
        "Pipelines that capture inbound enquiries from your website or email, log them into your CRM, and send scheduled reminders so no sales lead goes cold.",
      icon: Workflow,
      category: "Business Automation",
    },
    {
      title: "Invoice & Document Processing Systems",
      description:
        "Software that automatically reads invoices, customer purchase orders, and PDF specs, extracts line items and amounts, and syncs them to your accounting software.",
      icon: FileText,
      category: "AI & Automation",
    },
    {
      title: "Custom Dashboards & Internal Tools",
      description:
        "Unified operational command centers where leadership and staff view live orders, pending tasks, project statuses, and key business metrics in real time.",
      icon: LayoutDashboard,
      category: "Custom Software",
    },
    {
      title: "Connected Business Applications",
      description:
        "Integrations that bridge your legacy database, accounting software, and modern SaaS tools so data updates everywhere at once with zero manual copy-pasting.",
      icon: Network,
      category: "Software Integration",
    },
    {
      title: "Custom Software for Unique Processes",
      description:
        "Bespoke applications designed from scratch for unique manufacturing, distribution, or service workflows that standard commercial software cannot handle.",
      icon: Sliders,
      category: "Custom Software",
    },
  ];

  return (
    <section id="what-we-build" className="relative py-24 lg:py-28 bg-[#040407] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono tracking-widest text-[#d6acc1] uppercase">
            What We Can Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3 leading-[1.15]">
            Practical software designed for everyday business operations.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            Here are some of the practical solutions we build to eliminate bottlenecks, reduce human error, and help teams handle more volume.
          </p>
        </div>

        {/* 6 Solutions Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-[#0a0a0e] border border-white/10 hover:border-white/20 p-7 lg:p-8 flex flex-col justify-between hover:bg-[#101016] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6acc1] bg-[#492332]/40 px-2 py-0.5 rounded border border-[#7e0e3c]/30">
                      {item.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 text-neutral-400 group-hover:text-white group-hover:bg-[#492332] flex items-center justify-center transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors"
                  >
                    <span>Discuss this solution</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d6acc1]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore all services banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-white">Have a unique business workflow in mind?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">We engineer custom software specifically to match your proprietary operational procedures.</p>
          </div>
          <Link
            href="/services"
            className="btn-shine shrink-0 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] border border-[#7e0e3c]/50 transition-all"
          >
            Explore Detailed Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
