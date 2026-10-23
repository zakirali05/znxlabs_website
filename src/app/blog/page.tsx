import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import { BLOG_POSTS } from "@/data/blog-posts";
import { 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  Cpu, 
  Database, 
  Sparkles, 
  Tag, 
  Workflow 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & AI Blog — Workflow Automation, AI Agents & RAG | ZNX Labs",
  description:
    "Explore in-depth technical guides, architectural comparisons, and practical frameworks on AI workflow automation, enterprise AI agents, and RAG knowledge systems.",
  alternates: {
    canonical: "https://znxlabs.com/blog",
  },
  openGraph: {
    title: "Engineering & AI Blog — ZNX Labs",
    description:
      "Practical engineering insights on AI workflow automation, enterprise agents, and retrieval-augmented generation for business leaders.",
    url: "https://znxlabs.com/blog",
    type: "website",
    siteName: "ZNX Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering & AI Blog — ZNX Labs",
    description:
      "Practical engineering insights on AI workflow automation, enterprise agents, and RAG systems.",
  },
};

export default function BlogLandingPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ZNX Labs Engineering & AI Publications",
    description:
      "Strategic insights, architectural guides, and technical deep-dives into AI workflow automation, agentic systems, and enterprise RAG pipelines.",
    url: "https://znxlabs.com/blog",
    publisher: {
      "@type": "Organization",
      name: "ZNX Labs",
      url: "https://znxlabs.com",
      logo: "https://znxlabs.com/brand/logo.svg",
    },
    hasPart: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://znxlabs.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://znxlabs.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://znxlabs.com/blog",
      },
    ],
  };

  const getCardIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Workflow className="w-5 h-5 text-[#d6acc1]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-[#d6acc1]" />;
      case 2:
        return <Database className="w-5 h-5 text-[#d6acc1]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#d6acc1]" />;
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <Navbar />

      <main className="flex-1 pb-24 lg:pb-32">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
          <BrandHeroBackground />
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(246,240,235,0.12)] bg-[rgba(246,240,235,0.03)] backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71334B]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
                Engineering & Strategy Publications
              </span>
            </div>

            <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F6F0EB] leading-[1.1]">
              Practical engineering analysis for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F0EB] via-neutral-100 to-[#d6acc1]">
                real business operations.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed">
              No hype, empty buzzwords, or unrealistic promises. In-depth technical guides on AI workflow automation, autonomous agent architectures, and enterprise RAG systems built to solve commercial bottlenecks.
            </p>
          </div>
        </section>

        {/* Featured Posts Grid */}
        <section className="mt-16 sm:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[rgba(246,240,235,0.08)] gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#d6acc1] mb-2">
                Curated Deep Dives
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Latest Technical Articles
              </h2>
            </div>
            <p className="text-sm text-[#B8ADB2] max-w-md">
              Comprehensive blueprints, operational trade-offs, and failure-mode analysis written by our engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-7 sm:p-8 transition-all duration-300 hover:border-[rgba(246,240,235,0.24)] hover:shadow-[0_20px_40px_-15px_rgba(73,35,50,0.3)] hover:-translate-y-1"
              >
                {/* Visual Header / Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-[#d6acc1] bg-[#492332]/30 border border-[#71334B]/40">
                      {getCardIcon(idx)}
                      <span className="ml-1">{post.category}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-neutral-500" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-[#d6acc1] transition-colors">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none focus:underline">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#B8ADB2] font-normal leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-8 pt-6 border-t border-[rgba(246,240,235,0.08)] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#492332] border border-[#71334B] flex items-center justify-center text-xs font-bold text-[#F6F0EB]">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#F6F0EB]">
                        {post.author.name}
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#d6acc1] group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Service Alignment Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#181115] via-[#1F141A] to-[#181115] border border-[rgba(246,240,235,0.12)] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-[#d6acc1]">
                <Sparkles className="w-3.5 h-3.5 text-[#71334B]" />
                Custom Engineering Services
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Evaluating an AI automation or custom software build?
              </h3>
              <p className="text-sm text-[#B8ADB2] leading-relaxed">
                We design, build, and deploy production-grade AI pipelines, internal workflow automation, and custom business software tailored to your specific infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-full text-xs font-medium font-mono text-[#F6F0EB] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full text-xs font-medium font-mono text-[#F6F0EB] bg-[#492332] border border-[#71334B] hover:bg-[#5b2c3f] transition-colors flex items-center gap-1.5"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <div className="mt-24">
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
