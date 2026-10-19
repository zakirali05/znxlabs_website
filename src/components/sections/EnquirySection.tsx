"use client";

import React, { useState } from "react";
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Loader2, 
  Lock, 
  Mail, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  company: string;
  category: string;
  budget: string;
  description: string;
  _hp_company_url: string; // Honeypot
}

const CATEGORIES = [
  "AI and workflow automation",
  "Revenue and lead management",
  "Custom software and integrations",
  "Other business challenge",
];

const BUDGETS = [
  "Under $2,000",
  "$2,000–$10,000",
  "$10,000+",
  "Not sure yet",
];

export function EnquirySection() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    category: "AI and workflow automation",
    budget: "$2,000–$10,000",
    description: "",
    _hp_company_url: "",
  });

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = "Please provide your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid work email.";
    }

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      errs.company = "Please enter your company or organization name.";
    }

    if (!formData.category) {
      errs.category = "Please select a project category.";
    }

    if (!formData.budget) {
      errs.budget = "Please select an estimated budget range.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description =
        "Please describe your operational challenge or project goals (minimum 10 characters).";
    }

    setClientErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setServerError(
          data.error ||
            "Unable to submit enquiry. Please check your inputs or email us directly at enquiries@znxlabs.com."
        );
        if (data.details) {
          setClientErrors(data.details);
        }
      } else {
        setSubmissionSuccess({
          referenceId: data.referenceId,
          message: data.message,
        });
      }
    } catch (err) {
      setServerError(
        "A network connection error occurred. Please verify your connection or contact enquiries@znxlabs.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyReference = () => {
    if (submissionSuccess?.referenceId) {
      navigator.clipboard.writeText(submissionSuccess.referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      category: "AI and workflow automation",
      budget: "$2,000–$10,000",
      description: "",
      _hp_company_url: "",
    });
    setClientErrors({});
    setServerError(null);
    setSubmissionSuccess(null);
  };

  return (
    <section id="enquire" className="relative py-24 lg:py-32 bg-[#000000] border-t border-white/5">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#492332]/25 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Final CTA & Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono tracking-widest text-[#d6acc1] uppercase">
              06 / Final CTA & Enquiry
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
              Let&apos;s solve a problem that&apos;s slowing your business down.
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              Tell us what you&apos;re trying to improve. We&apos;ll explore whether AI, automation, or custom software is the right solution.
            </p>

            <div className="pt-6 space-y-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#492332]/50 border border-[#7e0e3c]/40 flex items-center justify-center shrink-0 text-white">
                  <Clock className="w-4 h-4 text-[#d6acc1]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">Fast Technical Review</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    An engineer reviews every enquiry within 1 business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#492332]/50 border border-[#7e0e3c]/40 flex items-center justify-center shrink-0 text-white">
                  <Lock className="w-4 h-4 text-[#d6acc1]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">Confidential & Secure</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    We treat all business processes and operational data under strict NDA standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#492332]/50 border border-[#7e0e3c]/40 flex items-center justify-center shrink-0 text-white">
                  <ShieldCheck className="w-4 h-4 text-[#d6acc1]" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-white">No Obligation Scope</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    You receive an honest technical evaluation of feasibility, architecture, and estimated ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-400">
              <span className="text-neutral-300 font-medium block mb-1">Direct Engineering Contact:</span>
              Prefer email? Reach our team directly at{" "}
              <a
                href="mailto:enquiries@znxlabs.com"
                className="text-white hover:text-[#d6acc1] underline font-mono"
              >
                enquiries@znxlabs.com
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#09090c] border border-white/10 p-7 sm:p-10 shadow-2xl relative overflow-hidden">
              {submissionSuccess ? (
                /* Success View */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#492332]/40 border border-[#71334B] text-[#d6acc1] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#d6acc1]">
                      Enquiry Successfully Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Thank You, {formData.fullName.split(" ")[0]}
                    </h3>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Your enquiry for <span className="text-white font-medium">{formData.company}</span> has been logged into our technical queue. An engineer will review your project requirements and follow up shortly.
                    </p>
                  </div>

                  {/* Reference Ticket Card */}
                  <div className="max-w-md mx-auto p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                    <div className="text-left">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                        Project Enquiry Reference
                      </span>
                      <span className="font-mono text-sm font-semibold text-white">
                        {submissionSuccess.referenceId}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyReference}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10 flex items-center gap-1.5 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedRef ? "Copied" : "Copy Ref"}</span>
                    </button>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-neutral-400 hover:text-white underline font-medium transition-colors"
                    >
                      Submit another enquiry or update details
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot field for spam bots (hidden from human visitors) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="_hp_company_url">Do not fill this field</label>
                    <input
                      id="_hp_company_url"
                      name="_hp_company_url"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData._hp_company_url}
                      onChange={(e) =>
                        setFormData({ ...formData, _hp_company_url: e.target.value })
                      }
                    />
                  </div>

                  {serverError && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-medium text-neutral-300 mb-2"
                      >
                        Full Name <span className="text-[#d6acc1]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (clientErrors.fullName) {
                            setClientErrors({ ...clientErrors, fullName: "" });
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#7e0e3c] transition-all ${
                          clientErrors.fullName
                            ? "border-red-500/80 bg-red-950/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {clientErrors.fullName && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {clientErrors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-neutral-300 mb-2"
                      >
                        Work Email <span className="text-[#d6acc1]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="s.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (clientErrors.email) {
                            setClientErrors({ ...clientErrors, email: "" });
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#7e0e3c] transition-all ${
                          clientErrors.email
                            ? "border-red-500/80 bg-red-950/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {clientErrors.email && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {clientErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-medium text-neutral-300 mb-2"
                    >
                      Company Name <span className="text-[#d6acc1]">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Systems"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (clientErrors.company) {
                          setClientErrors({ ...clientErrors, company: "" });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#7e0e3c] transition-all ${
                        clientErrors.company
                          ? "border-red-500/80 bg-red-950/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {clientErrors.company && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {clientErrors.company}
                      </p>
                    )}
                  </div>

                  {/* Project Category Selection */}
                  <div>
                    <span className="block text-xs font-medium text-neutral-300 mb-2">
                      Project Category <span className="text-[#d6acc1]">*</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {CATEGORIES.map((cat) => {
                        const isSelected = formData.category === cat;
                        return (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setFormData({ ...formData, category: cat })}
                            className={`px-3.5 py-2.5 rounded-xl text-left text-xs font-medium border transition-all ${
                              isSelected
                                ? "bg-[#492332] text-white border-[#7e0e3c] shadow-sm"
                                : "bg-white/[0.02] text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <span className="block text-xs font-medium text-neutral-300 mb-2">
                      Estimated Project Budget <span className="text-[#d6acc1]">*</span>
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGETS.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`px-3 py-2 rounded-xl text-center text-xs font-medium border transition-all ${
                              isSelected
                                ? "bg-[#492332] text-white border-[#7e0e3c]"
                                : "bg-white/[0.02] text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Business Problem Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-xs font-medium text-neutral-300 mb-2"
                    >
                      Business Problem Description <span className="text-[#d6acc1]">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      required
                      placeholder="Tell us about the workflow bottleneck, manual process, or system integration you are looking to solve..."
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value });
                        if (clientErrors.description) {
                          setClientErrors({ ...clientErrors, description: "" });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#7e0e3c] transition-all ${
                        clientErrors.description
                          ? "border-red-500/80 bg-red-950/10"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {clientErrors.description ? (
                      <p className="mt-1.5 text-xs text-red-400">
                        {clientErrors.description}
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-neutral-500">
                        Include any current software in use (e.g. ERP, CRM, custom databases) if applicable.
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-shine w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] active:bg-[#381a26] border border-[#7e0e3c]/60 shadow-lg shadow-[#492332]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#7e0e3c] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Validating & Submitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit a Project Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-neutral-500">
                    By submitting, your data is handled strictly under our enterprise privacy policy. No marketing spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
