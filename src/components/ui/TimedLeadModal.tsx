"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Clock, Phone, Mail, User, Loader2, Send, Sparkles } from "lucide-react";

export function TimedLeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if dismissed in this session or already submitted
    try {
      if (sessionStorage.getItem("znx_timed_lead_dismissed")) return;
      if (localStorage.getItem("znx_timed_lead_submitted")) return;
    } catch {
      // In case storage is blocked
    }

    // Timer: trigger after 2 minutes (120,000 ms)
    const TWO_MINUTES_MS = 120000;
    const timer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem("znx_timed_lead_dismissed") && !localStorage.getItem("znx_timed_lead_submitted")) {
          setIsOpen(true);
        }
      } catch {
        setIsOpen(true);
      }
    }, TWO_MINUTES_MS);

    const handleOpenModal = () => setIsOpen(true);
    window.addEventListener("open-timed-lead-modal", handleOpenModal);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-timed-lead-modal", handleOpenModal);
    };
  }, []);

  const handleClose = () => {
    try {
      sessionStorage.setItem("znx_timed_lead_dismissed", "true");
    } catch {}
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: "2-Minute Visitor Callback Request",
          projectType: "Priority Callback Request",
          description: `Callback requested via 2-minute browsing popup. Phone: ${formData.phone}`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        try {
          localStorage.setItem("znx_timed_lead_submitted", "true");
        } catch {}
      } else {
        setErrorMessage(data.error || "Unable to submit. Please try again.");
      }
    } catch {
      setErrorMessage("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-3xl bg-[#110D0F] border border-[#71334B]/60 p-6 sm:p-8 shadow-2xl shadow-black/90 z-10 overflow-hidden"
          >
            {/* Background Ambient Glow */}
            <div 
              className="absolute -top-20 -right-20 w-60 h-60 bg-[#492332]/35 rounded-full blur-[80px] pointer-events-none" 
              aria-hidden="true"
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="no-shine absolute top-5 right-5 z-20 p-2.5 rounded-full text-[#B8ADB2] hover:text-[#F6F0EB] hover:bg-white/10 transition-colors cursor-pointer"
              style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              /* Success Confirmation */
              <div className="py-6 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#492332] border border-[#71334B] text-[#F6F0EB] mx-auto flex items-center justify-center shadow-lg shadow-[#492332]/40">
                  <CheckCircle2 className="w-8 h-8 text-[#d6acc1]" />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold">
                    Callback Confirmed
                  </span>
                  <h3 className="text-2xl font-bold text-[#F6F0EB]">
                    Thank you, {formData.fullName.split(" ")[0]}!
                  </h3>
                  <p className="text-sm text-[#B8ADB2] max-w-sm mx-auto leading-relaxed">
                    Our team will reach out to you at <strong className="text-[#F6F0EB]">{formData.phone}</strong> or <strong className="text-[#F6F0EB]">{formData.email}</strong> within <strong>24 hours</strong>. Stay tuned.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="btn-shine px-6 py-3 rounded-xl text-xs font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] border border-[#71334B]/60 transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 pr-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
                    <Clock className="w-3.5 h-3.5 text-[#71334B]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold">
                      Priority Consultation
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB] tracking-tight">
                    Have a project or question in mind?
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed">
                    Leave your details below. Our team will reach out within <span className="text-[#F6F0EB] font-semibold">24 hours</span>, stay tuned.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/50 text-xs text-red-300">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.12)] text-xs text-[#F6F0EB] placeholder:text-neutral-600 focus:outline-none focus:border-[#71334B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.12)] text-xs text-[#F6F0EB] placeholder:text-neutral-600 focus:outline-none focus:border-[#71334B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 234-5678"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.12)] text-xs text-[#F6F0EB] placeholder:text-neutral-600 focus:outline-none focus:border-[#71334B]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shine w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] active:bg-[#381a26] border border-[#71334B]/70 shadow-lg shadow-[#492332]/40 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Callback in 24 Hours</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-[10px] text-neutral-500">
                  Strictly confidential under NDA. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
