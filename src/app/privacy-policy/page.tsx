import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight, Lock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ZNX Labs",
  description:
    "Enterprise data privacy policy and confidentiality standards for ZNX Labs client projects, source code, and commercial integrations.",
  openGraph: {
    title: "Enterprise Privacy Policy — ZNX Labs",
    description: "Our standards for client confidentiality, data protection, and zero unauthorized data retention.",
    url: "https://znxlabs.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#B8ADB2]">
            <Link href="/" className="hover:text-[#F6F0EB] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-[#F6F0EB] font-medium" aria-current="page">
              Privacy Policy
            </span>
          </nav>

          <div className="space-y-4 mb-12 pb-8 border-b border-[rgba(246,240,235,0.08)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
              <Lock className="w-3.5 h-3.5 text-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Enterprise Standards
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB]">
              Enterprise Privacy & Confidentiality Policy
            </h1>

            <p className="text-xs font-mono text-[#B8ADB2]">
              Effective Date: January 1, 2026 • Version 2.4
            </p>
          </div>

          <div className="space-y-10 text-sm text-[#B8ADB2] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                1. Commercial Confidentiality Commitment
              </h2>
              <p>
                ZNX Labs recognizes that software architecture, internal database schemas, proprietary business logic, customer records, and operational workflows constitute vital intellectual property. All technical engagements, preliminary consultations, and project communications are treated under strict commercial non-disclosure standards.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                2. AI Models and Zero Data Retention Guarantee
              </h2>
              <p>
                Under no circumstances does ZNX Labs use proprietary client data, documents, source code, or internal database records to train or fine-tune public artificial intelligence models. When integrating third-party AI APIs (such as OpenAI, Anthropic, or cloud hyperscalers), we enforce zero-data-retention (ZDR) agreements and private VPC endpoints ensuring customer payloads are discarded immediately after processing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                3. Information We Collect
              </h2>
              <p>
                We collect only the essential business information necessary to evaluate project feasibility and fulfill engineering deliverables:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs">
                <li>Professional contact details (full name, corporate email address, company name).</li>
                <li>Project scope descriptions, business requirements, and architectural notes submitted via our enquiry channels.</li>
                <li>Anonymous, non-identifying telemetry regarding website performance, page latency, and interaction reliability.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                4. Data Protection Standards
              </h2>
              <p>
                All data transmitted to ZNX Labs systems is encrypted in transit using Transport Layer Security (TLS 1.3) and encrypted at rest using AES-256. Access to client codebases, staging environments, and database credentials is restricted strictly to authorized engineers via hardware-bound multi-factor authentication (MFA).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                5. Complete Client Intellectual Property Ownership
              </h2>
              <p>
                Upon completion of agreed contractual milestones, full and unencumbered ownership of all custom software source code, documentation, database schemas, and trained model weights is assigned directly to the client. ZNX Labs claims no residual ownership or licensing fees on custom software engineered for your business.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                6. Contact for Privacy & Security Inquiries
              </h2>
              <p>
                For questions regarding data protection, compliance certifications, or mutual non-disclosure agreements (NDAs), please contact our security team:
              </p>
              <div className="p-4 rounded-xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] font-mono text-xs text-[#F6F0EB]">
                Email: privacy@znxlabs.com • General: contact@znxlabs.com
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
