"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already made a cookie choice
    try {
      const consent = localStorage.getItem("znx_cookie_consent");
      if (!consent) {
        // Small delay so it animates in smoothly after page loads
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access safe fallback
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("znx_cookie_consent", "accepted");
    } catch {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem("znx_cookie_consent", "essential_only");
    } catch {}
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 pointer-events-auto"
        >
          <div className="rounded-2xl bg-[#110D0F]/95 border border-[rgba(246,240,235,0.14)] p-5 shadow-2xl shadow-black/90 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#492332] text-[#F6F0EB] flex items-center justify-center border border-[#71334B]/60 shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#F6F0EB]">
                    Cookie & Privacy Preferences
                  </h4>
                  <span className="text-[10px] font-mono text-[#d6acc1]">
                    ZNX Labs Enterprise Compliance
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleDecline}
                className="no-shine text-[#B8ADB2] hover:text-[#F6F0EB] p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#B8ADB2] leading-relaxed mb-4">
              We use essential cookies and anonymized telemetry to provide high-performance navigation and analyze site performance. Read our{" "}
              <Link href="/privacy-policy" className="text-[#F6F0EB] underline hover:text-[#d6acc1] transition-colors">
                Privacy Policy
              </Link>
              .
            </p>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleAccept}
                className="btn-shine flex-1 py-2 px-3.5 rounded-xl text-xs font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] border border-[#71334B]/70 shadow-md transition-all cursor-pointer text-center"
              >
                Accept All
              </button>

              <button
                type="button"
                onClick={handleDecline}
                className="btn-shine py-2 px-3.5 rounded-xl text-xs font-medium text-[#B8ADB2] hover:text-[#F6F0EB] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all cursor-pointer text-center"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
