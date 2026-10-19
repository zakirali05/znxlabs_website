"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Lock, ShieldCheck, CheckCircle2, Loader2, Sparkles, Send } from "lucide-react";
import { MotionReveal } from "@/components/ui/MotionReveal";

interface FinalCTAProps {
  title?: string;
  highlightedText?: string;
  subtitle?: string;
  defaultService?: string;
}

export function FinalCTA({
  title = "Ready to eliminate your team’s",
  highlightedText = "operational bottlenecks?",
  subtitle = "Tell us what is slowing your team down or what digital product you need engineered. Our senior team will evaluate technical feasibility and propose a practical milestone roadmap.",
  defaultService = "Custom Software & Mobile App",
}: FinalCTAProps = {}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: defaultService,
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
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
          projectType: formData.projectType,
          description: formData.description || `Fast enquiry from footer CTA for ${formData.projectType}. Phone: ${formData.phone}`,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.error || "Unable to submit enquiry. Please try again.");
      }
    } catch {
      setErrorMessage("Connection error. Please try again or reach out at contact@znxlabs.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 lg:py-36 bg-[#090708] overflow-hidden border-t border-[rgba(246,240,235,0.06)]">
      {/* Immersive Deep Vine & Burgundy Radial Atmosphere */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#492332]/30 blur-[180px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-[#71334B]/20 blur-[140px] pointer-events-none rounded-full" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Availability Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[rgba(246,240,235,0.12)] bg-[rgba(246,240,235,0.03)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#71334B] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
                  Accepting Q2/Q3 Enterprise Sprints
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
                {title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] via-neutral-100 to-[#d6acc1]">
                  {highlightedText}
                </span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
                {subtitle}
              </p>

              {/* Reassurance Badges */}
              <div className="pt-4 space-y-3.5 text-xs text-[#B8ADB2]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#492332]/40 border border-[#71334B]/40 flex items-center justify-center text-[#d6acc1] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#F6F0EB] font-medium">Engineer follow-up within 24 hours guaranteed</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#492332]/40 border border-[#71334B]/40 flex items-center justify-center text-[#d6acc1] shrink-0">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#F6F0EB] font-medium">Strict commercial confidentiality (NDA standard)</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#492332]/40 border border-[#71334B]/40 flex items-center justify-center text-[#d6acc1] shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#F6F0EB] font-medium">No-obligation technical evaluation & architecture review</span>
                </div>
              </div>

              {/* Alternative route */}
              <div className="pt-4 text-xs text-[#B8ADB2]">
                Prefer a direct conversation?{" "}
                <Link href="/contact" className="text-[#F6F0EB] underline hover:text-[#d6acc1] transition-colors font-semibold">
                  Schedule a full consultation call →
                </Link>
              </div>
            </div>

            {/* Right Column: Embedded Quick-Enquiry Form */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-6 sm:p-8 shadow-2xl shadow-black/80 relative">
                
                {isSuccess ? (
                  /* Success Confirmation */
                  <div className="py-8 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-[#492332]/40 border border-[#71334B]/60 text-[#d6acc1] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold">
                        Request Received
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F6F0EB]">
                        Thank you, {formData.fullName.split(" ")[0]}!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B8ADB2] max-w-sm mx-auto leading-relaxed">
                        Our engineering team will review your requirements and reach out within <strong>24 hours</strong>. Stay tuned.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          projectType: "Custom Software & Mobile App",
                          description: "",
                        });
                      }}
                      className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] border border-[#71334B]/60 transition-all cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  /* Inline Form */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#d6acc1] font-semibold block mb-1">
                        Fast Project Inquiry
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F6F0EB]">
                        Get an Architecture & Cost Estimate
                      </h3>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/40 text-xs text-red-300">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Alex Mercer"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.1)] text-xs text-[#F6F0EB] placeholder:text-neutral-600 focus:outline-none focus:border-[#71334B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.1)] text-xs text-[#F6F0EB] placeholder:text-neutral-600 focus:outline-none focus:border-[#71334B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.1)] text-xs text-[#F6F0EB] placeholder:text-neutral-600 focus:outline-none focus:border-[#71334B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                          Service of Interest
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#191316] border border-[rgba(246,240,235,0.1)] text-xs text-[#F6F0EB] focus:outline-none focus:border-[#71334B]"
                        >
                          <option value="Custom Software & Mobile App">Custom Software & Mobile App</option>
                          <option value="Mobile App Development">Mobile App Development (iOS/Android)</option>
                          <option value="AI Solutions & Automation">AI Solutions & Automation</option>
                          <option value="Dedicated Developers">Dedicated Engineering Team</option>
                          <option value="General Architecture Consultation">General Architecture Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#B8ADB2] mb-1">
                        Brief Project Details (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Tell us what workflow or application you want to build..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.1)] text-xs text-[#F6F0EB] placeholder:text-neutral-600 focus:outline-none focus:border-[#71334B] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-shine w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#F6F0EB] bg-[#492332] hover:bg-[#5f2d40] active:bg-[#381a26] border border-[#71334B]/70 shadow-lg shadow-[#492332]/30 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request 24-Hour Engineer Response</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] text-neutral-500">
                      Your details are protected under NDA. No unsolicited spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
