"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
  className?: string;
}

export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
  className = "",
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== undefined && defaultOpenIndex >= 0 ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-[#140F12] border-[#71334B]/60 shadow-lg shadow-[#492332]/10"
                : "bg-[#110D0F] border-[rgba(246,240,235,0.08)] hover:border-[rgba(246,240,235,0.18)]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              className="no-shine w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#492332] text-[#F6F0EB]"
                      : "bg-white/[0.04] text-[#B8ADB2]"
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#F6F0EB] tracking-tight">
                  {item.question}
                </h3>
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#B8ADB2] shrink-0"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#B8ADB2] leading-relaxed border-t border-[rgba(246,240,235,0.05)] pl-[3.25rem]">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
