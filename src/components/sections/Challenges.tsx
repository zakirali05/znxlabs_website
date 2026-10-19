import React from "react";
import { Clock, DollarSign, Layers, Unlink } from "lucide-react";

export function Challenges() {
  const problems = [
    {
      id: "01",
      icon: Clock,
      title: "Too Much Manual Work",
      description: "Your team spends hours doing repetitive tasks that could be automated.",
      detail: "Typing data from emails into spreadsheets, generating standard documents manually, and performing recurring administration drains your team's energy.",
    },
    {
      id: "02",
      icon: DollarSign,
      title: "Rising Operating Costs",
      description: "Manual processes and inefficient systems consume valuable time and resources.",
      detail: "As transaction volume grows, hiring more administrative staff becomes the only way to keep up, driving up payroll instead of expanding your profit margin.",
    },
    {
      id: "03",
      icon: Layers,
      title: "Missed Business Opportunities",
      description: "Slow responses and forgotten follow-ups can cost you potential customers.",
      detail: "When inbound quotes take days to assemble or leads slip through busy inboxes, prospective buyers move to competitors who reply in minutes.",
    },
    {
      id: "04",
      icon: Unlink,
      title: "Disconnected Software",
      description: "Your team uses multiple tools that do not work together properly.",
      detail: "Customer information, sales notes, inventory levels, and billing records live in separate silos, forcing staff to copy and paste data across applications.",
    },
  ];

  return (
    <section id="problems" className="relative py-24 lg:py-28 border-t border-white/5 bg-[#030305]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono tracking-widest text-[#d6acc1] uppercase">
              The Problems We Solve
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Every growing business faces operational friction.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            When everyday processes rely on manual effort and disconnected tools, small delays compound into lost revenue and higher overhead.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl p-6 lg:p-7 bg-[#0b0b0e] border border-white/10 hover:border-white/20 hover:bg-[#101015] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      {item.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-neutral-400 group-hover:text-white group-hover:bg-[#492332] flex items-center justify-center transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#d6acc1] font-medium leading-snug">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-neutral-500">
                  Solvable through software & automation
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
