"use client";

import React from "react";
import { Lock, ShieldCheck, X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div 
        data-lenis-prevent
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0d0d12] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#d6acc1]" />
            <h3 id="privacy-policy-title" className="text-lg font-bold text-white">
              ZNX Labs Enterprise Privacy Policy
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="no-shine p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-1 focus:ring-[#7e0e3c]"
            aria-label="Close privacy policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <p>
            At <strong>ZNX Labs</strong>, we prioritize the confidentiality and security of commercial data. As an engineering firm designing custom business systems, revenue workflows, and enterprise automation, we understand that operational data is among your most valuable corporate assets.
          </p>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-1">
              1. Information We Collect
            </h4>
            <p className="text-neutral-400">
              When you submit a project enquiry through our website, we collect your full name, work email address, company name, project category, estimated budget, and the high-level business problem description you provide.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-1">
              2. How We Use Submitted Information
            </h4>
            <p className="text-neutral-400">
              Submitted information is strictly utilized to evaluate technical feasibility, estimate project architecture, and communicate directly with you regarding your commercial enquiry. We do not sell, rent, or lease your business details or contact info to any third party.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-1">
              3. Data Security & Storage
            </h4>
            <p className="text-neutral-400">
              We employ encryption in transit (HTTPS / TLS 1.3) and secure data isolation practices. Access to project enquiry data is restricted to authorized engineering personnel evaluating system specifications.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-1">
              4. Commercial Confidentiality
            </h4>
            <p className="text-neutral-400">
              All proprietary business logic, internal metrics, and workflows shared during discovery discussions are treated under strict confidentiality standards. Standard mutual Non-Disclosure Agreements (NDAs) are executed prior to accessing live client data or repositories.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-1">
              5. Contacting Our Data Controller
            </h4>
            <p className="text-neutral-400">
              If you have any questions regarding how your project information is stored or wish to request data deletion, contact us directly at:{" "}
              <a href="mailto:privacy@znxlabs.com" className="text-white underline font-mono">
                privacy@znxlabs.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#492332] hover:bg-[#5f2f42] rounded-lg transition-colors"
          >
            Close & Return
          </button>
        </div>
      </div>
    </div>
  );
}
