"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
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

interface ContactFormState {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  _hp_company_url: string; // Honeypot
}

const PROJECT_TYPES = [
  "Custom software",
  "AI solution",
  "Business automation",
  "Other business challenge",
];

const BUDGET_OPTIONS = [
  "Under $2,000",
  "$2,000–$10,000",
  "$10,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: "",
    email: "",
    company: "",
    projectType: "Custom software",
    description: "",
    budget: "$2,000–$10,000",
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
      errs.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid work email address.";
    }

    if (!formData.company.trim() || formData.company.trim().length < 2) {
      errs.company = "Please enter your company or business name.";
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description =
        "Please describe the business problem or workflow you would like to improve (minimum 10 characters).";
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
            "Unable to submit enquiry. Please verify your details or email us directly at enquiries@znxlabs.com."
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
    } catch {
      setServerError(
        "A network connection error occurred. Please check your connection or contact us directly at enquiries@znxlabs.com."
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
      projectType: "Custom software",
      description: "",
      budget: "$2,000–$10,000",
      _hp_company_url: "",
    });
    setClientErrors({});
    setServerError(null);
    setSubmissionSuccess(null);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
            {/* Background Lighting Effect (Brand Burgundy & Deep Vine) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Radial dark gradient base with mask */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: "radial-gradient(100% 100% at 0% 0%, #191316 0%, #090708 100%)",
            WebkitMaskImage: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
            maskImage: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Skewed fading brand color streaks */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(140, 60, 92, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(113, 51, 75, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.47) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0.47) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(rgba(140, 60, 92, 0.95) 0%, rgba(73, 35, 50, 0) 100%)",
              WebkitMaskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0.48) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
        </div>

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-5 bg-repeat"
          style={{
            backgroundImage: 'url("https://cdn.21st.dev/assets/mirror/f5/f55dfc553c100e6da0ad95258a042b4100f0ff4bb03a5313d1f541984275e262.png")',
            backgroundSize: "149.76px",
          }}
        />

        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(246, 240, 235, 0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Subtle radial brand glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(113, 51, 75, 0.25) 0%, rgba(73, 35, 50, 0.08) 50%, transparent 80%)",
          }}
        />
      </div>
      <Navbar />

      <main className="flex-1">
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
          <BrandHeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Context & Assurances */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(246,240,235,0.12)] bg-[rgba(246,240,235,0.03)] backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
                  Project Enquiry
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
                Tell us what you&apos;d like to improve.
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                Whether you want to automate a process, build custom software, or explore an AI solution, tell us what your business needs.
              </p>

              {/* Assurances */}
              <div className="pt-6 space-y-4 border-t border-white/10">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#492332]/50 border border-[#7e0e3c]/40 flex items-center justify-center shrink-0 text-white">
                    <Clock className="w-4 h-4 text-[#d6acc1]" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-white">Fast Review by an Engineer</h2>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      Every enquiry is reviewed by a technical engineer within 1 business day.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#492332]/50 border border-[#7e0e3c]/40 flex items-center justify-center shrink-0 text-white">
                    <Lock className="w-4 h-4 text-[#d6acc1]" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-white">Strict Commercial Privacy</h2>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      Your business data and operational challenges remain strictly confidential under NDA standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#492332]/50 border border-[#7e0e3c]/40 flex items-center justify-center shrink-0 text-white">
                    <ShieldCheck className="w-4 h-4 text-[#d6acc1]" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-white">No-Obligation Evaluation</h2>
                    <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                      We give you an honest technical assessment of whether software or automation will deliver real ROI.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct channels */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 text-xs">
                <span className="text-neutral-400 font-mono uppercase tracking-wider block text-[10px]">
                  Prefer Email or Direct Contact?
                </span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Mail className="w-3.5 h-3.5 text-[#d6acc1]" />
                    <span className="text-neutral-400">Enquiries:</span>
                    <a href="mailto:enquiries@znxlabs.com" className="text-white hover:text-[#d6acc1] underline font-mono">
                      enquiries@znxlabs.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Mail className="w-3.5 h-3.5 text-[#d6acc1]" />
                    <span className="text-neutral-400">General:</span>
                    <a href="mailto:contact@znxlabs.com" className="text-white hover:text-[#d6acc1] underline font-mono">
                      contact@znxlabs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-7 sm:p-10 shadow-2xl relative">
                {submissionSuccess ? (
                  /* Success State */
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#492332]/40 border border-[#71334B]/60 text-[#d6acc1] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#d6acc1] font-semibold">
                        Enquiry Confirmed
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Thank You, {formData.fullName.split(" ")[0]}
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                        We have logged your enquiry for <strong className="text-white">{formData.company}</strong>. An engineer will examine your project requirements and follow up within 1 business day.
                      </p>
                    </div>

                    {/* Reference Card */}
                    <div className="max-w-md mx-auto p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                          Project Reference Number
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
                        <span>{copiedRef ? "Copied" : "Copy"}</span>
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
                  /* Active Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Honeypot for spam bots (hidden from humans) */}
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

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          Full Name <span className="text-[#d6acc1]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="e.g. David Ross"
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
                          <p className="mt-1 text-xs text-red-400">
                            {clientErrors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-medium text-neutral-300 mb-1.5"
                        >
                          Work Email <span className="text-[#d6acc1]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="d.ross@company.com"
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
                          <p className="mt-1 text-xs text-red-400">
                            {clientErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-medium text-neutral-300 mb-1.5"
                      >
                        Company Name <span className="text-[#d6acc1]">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        placeholder="e.g. Apex Industrial Supplies"
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
                        <p className="mt-1 text-xs text-red-400">
                          {clientErrors.company}
                        </p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div>
                      <span className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Project Type <span className="text-[#d6acc1]">*</span>
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {PROJECT_TYPES.map((pt) => {
                          const isSelected = formData.projectType === pt;
                          return (
                            <button
                              key={pt}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectType: pt })}
                              className={`px-3 py-2.5 rounded-xl text-left text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-[#492332] text-white border-[#7e0e3c] shadow-sm font-semibold"
                                  : "bg-white/[0.02] text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {pt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Optional Budget Range */}
                    <div>
                      <span className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Estimated Budget <span className="text-neutral-500 font-normal">(Optional)</span>
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGET_OPTIONS.map((opt) => {
                          const isSelected = formData.budget === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: opt })}
                              className={`px-3 py-2 rounded-xl text-center text-xs font-medium border transition-all ${
                                isSelected
                                  ? "bg-[#492332] text-white border-[#7e0e3c] font-semibold"
                                  : "bg-white/[0.02] text-neutral-400 border-white/10 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Business Problem */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-xs font-medium text-neutral-300 mb-1.5"
                      >
                        Business Problem or Workflow to Improve <span className="text-[#d6acc1]">*</span>
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        required
                        placeholder="Tell us what process is consuming too much time, where manual data entry occurs, or what software you need..."
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
                        <p className="mt-1 text-xs text-red-400">
                          {clientErrors.description}
                        </p>
                      ) : (
                        <p className="mt-1 text-[11px] text-neutral-500">
                          Mention any current tools you use (e.g. your CRM, ERP, or spreadsheets) if relevant.
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-shine w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] active:bg-[#381a26] border border-[#7e0e3c]/60 shadow-lg shadow-[#492332]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#7e0e3c] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Your Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Discuss Your Project</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-neutral-500">
                      Your information is protected under our enterprise privacy policy. No marketing spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
