"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Partner {
  name: string;
  type?: string;
  logoUrl?: string;
  href?: string;
}

export interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeLabel?: string;
  badgeText?: string;
  title?: string;
  titleHighlight?: string;
  titleLine2?: string;
  styledWord?: string;
  styledWordFont?: "lobster" | "serif";
  styledWordColor?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  trustPoints?: string[];
  partnersTitle?: string;
  partners?: Partner[];
  showHeader?: boolean;
}

function renderWordWithUnderline(
  matchedWord: string,
  styledWordFont: "lobster" | "serif" = "lobster",
  styledWordColor: string = "#d6acc1"
) {
  return (
    <span className="relative inline-block whitespace-nowrap align-baseline px-1 mx-0.5">
      <span
        style={{ color: styledWordColor }}
        className={
          styledWordFont === "lobster"
            ? "font-lobster font-normal text-[1.12em] tracking-normal inline-block select-none not-italic drop-shadow-sm"
            : "font-serif italic font-normal px-1"
        }
      >
        {matchedWord}
      </span>
      <svg
        viewBox="0 0 285 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: styledWordColor }}
        className="absolute -bottom-1 sm:-bottom-2 md:-bottom-2.5 left-0 w-full h-[12px] sm:h-[15px] md:h-[18px] pointer-events-none overflow-visible"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 5 14 C 70 8, 180 5, 280 7"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </span>
  );
}

function renderTextWithStyledWord(
  text: string,
  styledWord?: string,
  styledWordFont: "lobster" | "serif" = "lobster",
  styledWordColor: string = "#d6acc1"
) {
  if (!styledWord) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${styledWord})([.,!?:;]?)`, "i");
  const match = text.match(regex);
  if (!match) {
    return <span>{text}</span>;
  }

  const parts = text.split(regex);
  const prefix = parts[0];
  const matchedWord = match[1];
  const punctuation = match[2];
  const suffix = parts[3] || "";

  return (
    <>
      {prefix && <span>{prefix}</span>}
      {renderWordWithUnderline(matchedWord, styledWordFont, styledWordColor)}
      {punctuation && (
        <span className="font-display font-extrabold text-[#F6F0EB]">
          {punctuation}
        </span>
      )}
      {suffix && <span>{suffix}</span>}
    </>
  );
}

export function ResponsiveHeroBanner({
  logoUrl = "/brand/logo.svg",
  backgroundImageUrl,
  navLinks = [
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "Software Development", href: "/software-development" },
    { label: "Hire Engineers", href: "/hire-engineers" },
    { label: "Industries", href: "/industries" },
    { label: "How We Work", href: "/how-we-work" },
  ],
  ctaButtonText = "Discuss a Project",
  ctaButtonHref = "/contact",
  badgeLabel = "Automate Your Business",
  badgeText = "Run Operations On Autopilot",
  title = "We build custom software & AI tools that",
  titleHighlight = "automate your business.",
  titleLine2,
  styledWord = "business",
  styledWordFont = "lobster",
  styledWordColor = "#d6acc1",
  description = "Stop losing hours to manual spreadsheets, repetitive paperwork, and disconnected software. We build dependable software tailored to your company so your team can focus on growth.",
  primaryButtonText = "Discuss a Project",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Explore What We Do",
  secondaryButtonHref = "#services",
  trustPoints = [
    "Increase Profit Margins",
    "Scale Team Productivity",
    "Eliminate Repetitive Work",
  ],
  partnersTitle = "Trusted by growing businesses across the US, UK, and Europe",
  partners = [
    { name: "APEX INDUSTRIAL", type: "Manufacturing" },
    { name: "HORIZON FREIGHT", type: "Logistics" },
    { name: "CRESTLINE HEALTH", type: "Healthcare" },
    { name: "STERLING ADVISORY", type: "Professional Services" },
    { name: "NEXAFLOW SYSTEMS", type: "Enterprise SaaS" },
    { name: "VANGUARD PROPERTY", type: "Real Estate" },
  ],
  showHeader = false,
}: ResponsiveHeroBannerProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full isolate min-h-[92vh] lg:min-h-screen overflow-hidden relative flex flex-col justify-between pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#090708]">
      {/* Background Pattern: Exact 21st.dev Radial Gradient with ZNX Brand Color */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#71334B_100%)]" 
          aria-hidden="true"
        />
        {/* Subtle background grid lines (opacity boosted +20% more) */}
        <div 
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(246,240,235,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(246,240,235,0.055)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_40%,transparent_100%)]" 
          aria-hidden="true" 
        />
      </div>

      {/* Optional Top Floating Header (if rendered standalone) */}
      {showHeader && (
        <header className="z-20 relative w-full mb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 focus:outline-none"
                aria-label="ZNX Labs"
              >
                <div className="relative w-32 h-8">
                  <Image src={logoUrl} alt="ZNX Labs" fill className="object-contain" priority />
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-[rgba(246,240,235,0.03)] px-2 py-1.5 ring-1 ring-[rgba(246,240,235,0.1)] backdrop-blur-md">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={`px-3.5 py-1.5 text-xs font-medium hover:text-[#F6F0EB] transition-colors rounded-full ${
                        link.isActive ? "text-[#F6F0EB] bg-[#191316]" : "text-[#B8ADB2]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href={ctaButtonHref}
                    className="btn-shine ml-2 inline-flex items-center gap-1.5 rounded-full bg-[#492332] hover:bg-[#5f2d40] px-4 py-1.5 text-xs font-semibold text-[#F6F0EB] border border-[#71334B]/80 transition-all shadow-md"
                  >
                    <span>{ctaButtonText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </nav>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="no-shine md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur text-[#F6F0EB]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Toggle navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Main Hero Center Content */}
      <div className="z-10 relative flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center">
            
            {/* 1. Staggered Animated Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-[rgba(246,240,235,0.04)] px-3.5 py-1.5 ring-1 ring-[rgba(246,240,235,0.12)] backdrop-blur-md animate-fade-slide-in-1">
              {badgeLabel && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#d6acc1] bg-[#492332]/80 border border-[#71334B]/80 rounded-full py-0.5 px-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d6acc1] animate-pulse" />
                  {badgeLabel}
                </span>
              )}
              {badgeText && (
                <span className="text-xs sm:text-sm font-medium text-[#F6F0EB]/90 font-sans tracking-wide">
                  {badgeText}
                </span>
              )}
            </div>

            {/* 2. Main Title (H1 for SEO & AEO) with Animated Reveal */}
            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-4xl font-extrabold text-[#F6F0EB] tracking-tight font-display animate-fade-slide-in-2">
              {renderTextWithStyledWord(title, styledWord, styledWordFont, styledWordColor)}{" "}
              {titleHighlight && renderTextWithStyledWord(titleHighlight, styledWord, styledWordFont, styledWordColor)}
              {titleLine2 && (
                <>
                  <br className="hidden sm:block" />
                  <span>{renderTextWithStyledWord(titleLine2, styledWord, styledWordFont, styledWordColor)}</span>
                </>
              )}
            </h1>

            {/* 3. Description (Semantic AEO Text) with Animated Reveal */}
            <p className="sm:text-lg md:text-xl animate-fade-slide-in-3 text-base text-[#B8ADB2] max-w-2xl mt-6 mx-auto leading-relaxed font-normal">
              {description}
            </p>

            {/* 4. Action Buttons with Animated Reveal and Shiny Sweep Effect */}
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-8 sm:mt-10 gap-3.5 items-center justify-center animate-fade-slide-in-4 w-full sm:w-auto">
              <MagneticButton
                href={primaryButtonHref}
                variant="primary"
                className="w-full sm:w-auto py-3.5 px-7 text-sm font-semibold rounded-full shadow-xl shadow-[#492332]/40"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </MagneticButton>

              <MagneticButton
                href={secondaryButtonHref}
                variant="secondary"
                className="w-full sm:w-auto py-3.5 px-7 text-sm font-medium rounded-full"
              >
                <span>{secondaryButtonText}</span>
                <ChevronRight className="w-4 h-4 ml-1 text-[#B8ADB2]" />
              </MagneticButton>
            </div>

            {/* 5. Trust Signals & Guardrails (Crucial for Client Confidence & AEO) */}
            {trustPoints && trustPoints.length > 0 && (
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-[#B8ADB2] animate-fade-slide-in-4">
                {trustPoints.map((point, index) => (
                  <React.Fragment key={index}>
                    <div className="flex items-center gap-2 italic">
                      <CheckCircle2 className="w-4 h-4 text-[#d6acc1] shrink-0" />
                      <span>{point}</span>
                    </div>
                    {index < trustPoints.length - 1 && (
                      <span className="hidden sm:inline text-neutral-700 " aria-hidden="true">
                        
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* 6. Bottom Client Partners / Social Proof Strip (Integrated from 21st.dev) */}
      {partners && partners.length > 0 && (
        <div className="z-10 relative mx-auto mt-14 sm:mt-18 max-w-6xl w-full px-4 sm:px-6">
          <div className="pt-6 border-t border-[rgba(246,240,235,0.07)]">
            <p className="animate-fade-slide-in-1 text-xs font-mono uppercase tracking-widest text-[#B8ADB2]/80 text-center mb-6">
              {partnersTitle}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 animate-fade-slide-in-2 items-center justify-items-center gap-3 sm:gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-full py-3 px-3 rounded-xl bg-[rgba(246,240,235,0.02)] border border-[rgba(246,240,235,0.05)] hover:border-[#71334B]/60 hover:bg-[#110D0F] transition-all flex flex-col items-center justify-center text-center group cursor-default"
                >
                  <span className="text-xs sm:text-sm font-bold tracking-wider text-[#B8ADB2] group-hover:text-[#F6F0EB] transition-colors font-mono">
                    {partner.name}
                  </span>
                  {partner.type && (
                    <span className="text-[10px] text-neutral-500 mt-0.5">
                      {partner.type}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ResponsiveHeroBanner;
