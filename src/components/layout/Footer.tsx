"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ArrowUpRight, Globe2, Mail, ShieldCheck } from "lucide-react";
import { PrivacyPolicyModal } from "@/components/ui/PrivacyPolicyModal";

export function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="relative bg-[#090708] border-t border-[rgba(246,240,235,0.1)] text-[#B8ADB2] pt-16 pb-12 sm:pt-20 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[rgba(246,240,235,0.08)]">
          
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="ZNX Labs Homepage">
              <Logo className="h-8 w-auto text-[#F6F0EB]" />
            </Link>

            <p className="text-sm text-[#F6F0EB] font-medium font-mono">
              Building What&apos;s Next.
            </p>

            <p className="text-xs text-[#B8ADB2] leading-relaxed max-w-sm">
              ZNX Labs builds AI solutions, custom software, and intelligent business workflows that help companies reduce repetitive work, improve productivity, connect their systems, and develop better digital products.
            </p>

            <div className="pt-2 text-xs text-[#B8ADB2] font-mono">
              AI Solutions • Custom Software • Engineering Talent
            </div>

            {/* Direct Contact */}
            <div className="pt-4 space-y-2 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] block font-semibold">
                Verified Inquiries
              </span>
              <div>
                <a
                  href="mailto:enquiries@znxlabs.com"
                  className="inline-flex items-center gap-1.5 text-[#F6F0EB] hover:text-[#71334B] font-mono transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#71334B]" />
                  <span>enquiries@znxlabs.com</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:contact@znxlabs.com"
                  className="inline-flex items-center gap-1.5 text-[#B8ADB2] hover:text-[#F6F0EB] font-mono transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-neutral-500" />
                  <span>contact@znxlabs.com</span>
                </a>
              </div>
              <div className="pt-1">
                <a
                  href="https://linkedin.com/company/znxlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#B8ADB2] hover:text-[#F6F0EB] transition-colors"
                >
                  <span>LinkedIn / ZNX Labs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </a>
              </div>
            </div>
          </div>

          {/* AI Solutions (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F6F0EB] font-semibold mb-3">
              AI Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/ai-solutions/ai-agents" className="hover:text-[#F6F0EB] transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions/ai-workflow-automation" className="hover:text-[#F6F0EB] transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions/enterprise-ai" className="hover:text-[#F6F0EB] transition-colors">
                  Enterprise AI
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions/rag-knowledge-assistants" className="hover:text-[#F6F0EB] transition-colors">
                  Knowledge Assistants
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions/document-processing" className="hover:text-[#F6F0EB] transition-colors">
                  Document Processing
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions/ai-integrations" className="hover:text-[#F6F0EB] transition-colors">
                  AI Integrations
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/ai-solutions" className="text-[11px] text-[#71334B] hover:text-[#F6F0EB] font-semibold">
                  All AI Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Development (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F6F0EB] font-semibold mb-3">
              Software Dev
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/software-development/custom-software" className="hover:text-[#F6F0EB] transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/software-development/web-applications" className="hover:text-[#F6F0EB] transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/software-development/mobile-app-development" className="hover:text-[#F6F0EB] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/software-development/saas-products" className="hover:text-[#F6F0EB] transition-colors">
                  SaaS Products
                </Link>
              </li>
              <li>
                <Link href="/software-development/mvp-development" className="hover:text-[#F6F0EB] transition-colors">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link href="/software-development/crm-erp-systems" className="hover:text-[#F6F0EB] transition-colors">
                  CRM & ERP Systems
                </Link>
              </li>
              <li>
                <Link href="/software-development/api-integrations" className="hover:text-[#F6F0EB] transition-colors">
                  API Integrations
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/software-development" className="text-[11px] text-[#71334B] hover:text-[#F6F0EB] font-semibold">
                  All Software Dev →
                </Link>
              </li>
            </ul>
          </div>

          {/* Hire Engineers & Industries (Col 9-10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F6F0EB] font-semibold mb-3">
              Hire Engineers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/hire-engineers/ai-engineers" className="hover:text-[#F6F0EB] transition-colors">
                  AI Engineers
                </Link>
              </li>
              <li>
                <Link href="/hire-engineers/ai-agent-developers" className="hover:text-[#F6F0EB] transition-colors">
                  AI Agent Developers
                </Link>
              </li>
              <li>
                <Link href="/hire-engineers/llm-rag-engineers" className="hover:text-[#F6F0EB] transition-colors">
                  LLM & RAG Engineers
                </Link>
              </li>
              <li>
                <Link href="/hire-engineers/full-stack-developers" className="hover:text-[#F6F0EB] transition-colors">
                  Full-Stack Developers
                </Link>
              </li>
              <li>
                <Link href="/hire-engineers/dedicated-development-teams" className="hover:text-[#F6F0EB] transition-colors">
                  Dedicated Teams
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F6F0EB] font-semibold pt-4 mb-2">
              Industries
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/industries/finance" className="hover:text-[#F6F0EB] transition-colors">
                  Finance & FinTech
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-[#F6F0EB] transition-colors">
                  Education & EdTech
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce" className="hover:text-[#F6F0EB] transition-colors">
                  E-Commerce & Retail
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="hover:text-[#F6F0EB] transition-colors">
                  Healthcare & HealthTech
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="hover:text-[#F6F0EB] transition-colors">
                  Real Estate & PropTech
                </Link>
              </li>
              <li>
                <Link href="/industries/tech-saas" className="hover:text-[#F6F0EB] transition-colors">
                  Tech & SaaS
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-[#F6F0EB] transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/industries/government" className="hover:text-[#F6F0EB] transition-colors">
                  Government Sector
                </Link>
              </li>
              <li>
                <Link href="/industries/legal" className="hover:text-[#F6F0EB] transition-colors">
                  Legal Sector
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Company (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F6F0EB] font-semibold mb-3 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-[#71334B]" />
              <span>Locations We Serve</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/locations/usa" className="hover:text-[#F6F0EB] transition-colors">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/locations/uk" className="hover:text-[#F6F0EB] transition-colors">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/locations/uae" className="hover:text-[#F6F0EB] transition-colors">
                  United Arab Emirates
                </Link>
              </li>
              <li>
                <Link href="/locations/saudi-arabia" className="hover:text-[#F6F0EB] transition-colors">
                  Saudi Arabia
                </Link>
              </li>
              <li>
                <Link href="/locations/india" className="hover:text-[#F6F0EB] transition-colors">
                  India
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F6F0EB] font-semibold pt-4 mb-2">
              Company
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#F6F0EB] transition-colors">
                  About ZNX Labs
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-[#F6F0EB] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#F6F0EB] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F6F0EB] text-[#71334B] font-medium transition-colors">
                  Discuss a Project →
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8ADB2]">
          <p>© 2026 ZNX Labs. All rights reserved. Building What&apos;s Next.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-[#B8ADB2] hover:text-[#F6F0EB] transition-colors underline"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-700">•</span>
            <Link
              href="/terms-of-service"
              className="text-[#B8ADB2] hover:text-[#F6F0EB] transition-colors underline"
            >
              Terms of Service
            </Link>
            <span className="text-neutral-700">•</span>
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="no-shine text-[#B8ADB2] hover:text-[#F6F0EB] transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#71334B]" />
              <span>Enterprise Confidentiality</span>
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Confidentiality / Privacy Policy Modal */}
      <PrivacyPolicyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
