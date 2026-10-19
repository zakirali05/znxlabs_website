"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { 
  ArrowRight, 
  Bot, 
  ChevronDown, 
  Code2, 
  Menu, 
  Sparkles, 
  Users, 
  Building2, 
  Layers, 
  X 
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface NavCategory {
  title: string;
  href: string;
  icon: React.ElementType;
  items: DropdownItem[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    title: "AI Solutions",
    href: "/ai-solutions",
    icon: Bot,
    items: [
      { name: "AI Agents", href: "/ai-solutions/ai-agents", description: "Autonomous agents executing multi-step tasks" },
      { name: "AI Workflow Automation", href: "/ai-solutions/ai-workflow-automation", description: "Connect systems with intelligent event pipelines" },
      { name: "Enterprise AI", href: "/ai-solutions/enterprise-ai", description: "Private, compliant models in your sovereign VPC" },
      { name: "RAG Knowledge Assistants", href: "/ai-solutions/rag-knowledge-assistants", description: "Grounded semantic search with direct citations" },
      { name: "Document Processing", href: "/ai-solutions/document-processing", description: "Extract structured data from invoices and PDFs" },
      { name: "AI Integrations", href: "/ai-solutions/ai-integrations", description: "Embed state-of-the-art AI into existing software" },
    ],
  },
  {
    title: "Software Development",
    href: "/software-development",
    icon: Code2,
    items: [
      { name: "Custom Software", href: "/software-development/custom-software", description: "Platforms built around your exact operations" },
      { name: "Web Applications", href: "/software-development/web-applications", description: "Modern, high-speed Next.js web applications" },
      { name: "Mobile App Development", href: "/software-development/mobile-app-development", description: "Native & cross-platform iOS and Android apps" },
      { name: "SaaS Products", href: "/software-development/saas-products", description: "Multi-tenant subscription software architecture" },
      { name: "MVP Development", href: "/software-development/mvp-development", description: "Launch focused, production-grade MVPs in weeks" },
      { name: "CRM & ERP Systems", href: "/software-development/crm-erp-systems", description: "Consolidate orders, inventory, and customer data" },
      { name: "API Integrations", href: "/software-development/api-integrations", description: "Secure middleware bridges connecting your tools" },
    ],
  },
  {
    title: "Hire Engineers",
    href: "/hire-engineers",
    icon: Users,
    items: [
      { name: "AI Engineers", href: "/hire-engineers/ai-engineers", description: "Senior applied machine learning specialists" },
      { name: "AI Agent Developers", href: "/hire-engineers/ai-agent-developers", description: "Engineers specializing in agent loop frameworks" },
      { name: "LLM & RAG Engineers", href: "/hire-engineers/llm-rag-engineers", description: "Vector search and precision retrieval experts" },
      { name: "Full-Stack Developers", href: "/hire-engineers/full-stack-developers", description: "Senior TypeScript, React, and Node.js builders" },
      { name: "Dedicated Teams", href: "/hire-engineers/dedicated-development-teams", description: "Complete, autonomous engineering squads" },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    icon: Building2,
    items: [
      { name: "Manufacturing", href: "/industries/manufacturing", description: "Shop-floor tracking and RFQ quotation intake" },
      { name: "E-Commerce & D2C", href: "/industries/ecommerce", description: "Inventory reconciliation and 24/7 care agents" },
      { name: "Professional Services", href: "/industries/professional-services", description: "Client onboarding and knowledge research" },
      { name: "Real Estate", href: "/industries/real-estate", description: "Maintenance triage and lease data extraction" },
      { name: "SaaS & Technology", href: "/industries/saas-and-technology", description: "Engineering muscle and AI feature acceleration" },
    ],
  },
  {
    title: "Company",
    href: "/about",
    icon: Layers,
    items: [
      { name: "About ZNX Labs", href: "/about", description: "Our engineering philosophy and team foundation" },
      { name: "How We Work", href: "/how-we-work", description: "Our transparent 4-stage delivery process" },
      { name: "Our Work", href: "/work", description: "Working software demonstrations and systems" },
      { name: "Contact", href: "/contact", description: "Discuss a project with a technical engineer" },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090708]/90 backdrop-blur-md border-b border-[rgba(246,240,235,0.1)] py-3 shadow-xl shadow-black/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-0 focus:ring-[#71334B] rounded-lg border-0"
          aria-label="ZNX Labs Homepage"
        >
          <Logo className="h-7 sm:h-8 md:h-10 w-auto text-[#F6F0EB] transition-opacity group-hover:opacity-90" />
        </Link>

        {/* Desktop Navigation with Dropdowns */}
        <nav 
          className="hidden lg:flex items-center space-x-1 bg-[rgba(246,240,235,0.03)] border border-[rgba(246,240,235,0.1)] px-3 py-1.5 rounded-full backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {NAV_CATEGORIES.map((cat) => {
            const isOpen = activeDropdown === cat.title;
            const isCategoryActive = pathname.startsWith(cat.href) && (cat.href !== "/" || pathname === "/");

            return (
              <div
                key={cat.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : cat.title)}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    isOpen || isCategoryActive
                      ? "bg-[#492332] text-[#F6F0EB] shadow-sm font-semibold"
                      : "text-[#B8ADB2] hover:text-[#F6F0EB] hover:bg-white/5"
                  }`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                >
                  <span>{cat.title}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#F6F0EB]" : "text-[#B8ADB2]"}`} />
                </button>

                {/* Dropdown Panel */}
                {isOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-96 rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-3 shadow-2xl shadow-black/80 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseEnter={() => handleMouseEnter(cat.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(246,240,235,0.06)] mb-2">
                      <Link
                        href={cat.href}
                        className="text-xs font-semibold text-[#F6F0EB] hover:text-[#B8ADB2] transition-colors flex items-center gap-1.5"
                      >
                        <cat.icon className="w-3.5 h-3.5 text-[#71334B]" />
                        <span>Explore {cat.title} Hub</span>
                      </Link>
                      <Link
                        href={cat.href}
                        className="text-[10px] font-mono uppercase tracking-wider text-[#B8ADB2] hover:text-[#F6F0EB]"
                      >
                        View All →
                      </Link>
                    </div>

                    <div className="space-y-1">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group block px-3 py-2.5 rounded-xl hover:bg-[#191316] transition-colors"
                        >
                          <div className="text-xs font-semibold text-[#F6F0EB] group-hover:text-white flex items-center justify-between">
                            <span>{item.name}</span>
                            <ArrowRight className="w-3 h-3 text-[#B8ADB2] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <p className="text-[11px] text-[#B8ADB2] mt-0.5 leading-snug">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <MagneticButton
            href="/contact"
            variant="primary"
            className="text-xs py-2 px-4"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-shine px-3 py-1.5 text-xs font-semibold text-[#F6F0EB] bg-[#492332] rounded-lg"
          >
            Discuss
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="no-shine p-2 rounded-lg text-[#B8ADB2] hover:text-[#F6F0EB] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#71334B]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Categories */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090708] border-b border-[rgba(246,240,235,0.12)] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3 shadow-2xl">
          <div className="space-y-1">
            {NAV_CATEGORIES.map((cat) => {
              const isExpanded = mobileExpanded === cat.title;

              return (
                <div key={cat.title} className="border-b border-[rgba(246,240,235,0.06)] pb-1">
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={cat.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm font-semibold text-[#F6F0EB] hover:text-white flex items-center gap-2"
                    >
                      <cat.icon className="w-4 h-4 text-[#71334B]" />
                      <span>{cat.title}</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : cat.title)}
                      className="p-2 text-[#B8ADB2]"
                      aria-label={`Toggle ${cat.title} sub-menu`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-6 pb-2 space-y-2">
                      {cat.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-[#B8ADB2] hover:text-[#F6F0EB] py-1"
                        >
                          <div className="font-medium text-[#F6F0EB]">{item.name}</div>
                          <div className="text-[10px] text-neutral-400">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-shine w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#F6F0EB] bg-[#492332] rounded-xl"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
