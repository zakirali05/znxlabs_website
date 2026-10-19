import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | ZNX Labs",
  description:
    "Standard terms of service, engagement agreements, and delivery conditions for ZNX Labs engineering projects and digital solutions.",
  openGraph: {
    title: "Terms of Service — ZNX Labs",
    description: "Standard terms of service and engineering engagement agreements.",
    url: "https://znxlabs.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
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
              Terms of Service
            </span>
          </nav>

          <div className="space-y-4 mb-12 pb-8 border-b border-[rgba(246,240,235,0.08)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(246,240,235,0.1)] bg-[rgba(246,240,235,0.02)]">
              <FileText className="w-3.5 h-3.5 text-[#71334B]" />
              <span className="text-[11px] font-mono tracking-widest text-[#B8ADB2] uppercase">
                Legal Terms
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB]">
              Terms of Service & Engagement
            </h1>

            <p className="text-xs font-mono text-[#B8ADB2]">
              Effective Date: January 1, 2026 • Version 2.1
            </p>
          </div>

          <div className="space-y-10 text-sm text-[#B8ADB2] leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                1. Engagement Overview
              </h2>
              <p>
                These Terms of Service govern the access and use of the ZNX Labs website, demonstration portals, and digital engineering services. By accessing our services or submitting a project enquiry, you agree to these terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                2. Professional Services Agreements
              </h2>
              <p>
                Specific engineering engagements, bespoke software developments, and talent staffing contracts are governed by individual Statements of Work (SOW) executed between ZNX Labs and the client organization. In the event of a conflict between these general terms and an executed SOW, the specific terms of the SOW shall prevail.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                3. Intellectual Property Rights
              </h2>
              <p>
                All proprietary methodologies, website assets, brand marks, and foundational libraries created by ZNX Labs prior to an engagement remain the property of ZNX Labs. Custom deliverables, bespoke code, and specific product logic engineered specifically for a client under an active SOW are transferred completely to the client upon receipt of milestone payments.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                4. Warranties and Limitation of Liability
              </h2>
              <p>
                ZNX Labs warrants that software deliverables will be constructed in a professional, workmanlike manner adhering to industry engineering standards. We provide post-deployment warranty support windows as defined in individual client agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                5. Governing Law
              </h2>
              <p>
                These terms and any commercial disputes arising from them shall be governed by standard international commercial arbitration principles and the specific jurisdiction specified in executed client agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-[#F6F0EB]">
                6. Contact Information
              </h2>
              <p>
                For legal notices or questions regarding our terms of service:
              </p>
              <div className="p-4 rounded-xl bg-[#110D0F] border border-[rgba(246,240,235,0.08)] font-mono text-xs text-[#F6F0EB]">
                Email: legal@znxlabs.com • Official Channel: enquiries@znxlabs.com
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
