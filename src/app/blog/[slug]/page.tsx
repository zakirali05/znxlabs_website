import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandHeroBackground } from "@/components/ui/BrandHeroBackground";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  BlogPost,
  BlogSection,
  BlogTableOfContentsItem,
} from "@/data/blog-posts";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Compass,
  Cpu,
  Database,
  ExternalLink,
  Info,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | ZNX Labs",
      description: "The requested article could not be found.",
    };
  }

  const canonicalUrl = post.canonicalUrl || `https://znxlabs.com/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      siteName: "ZNX Labs",
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = post.canonicalUrl || `https://znxlabs.com/blog/${post.slug}`;

  // Structured Data: BlogPosting & BreadcrumbList
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    keywords: [post.primaryKeyword, ...post.supportingKeywords].join(", "),
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: {
        "@type": "Organization",
        name: "ZNX Labs",
        url: "https://znxlabs.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "ZNX Labs",
      url: "https://znxlabs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://znxlabs.com/brand/logo.svg",
      },
    },
    articleSection: post.category,
    inLanguage: "en-US",
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  // Find related posts by slugs
  const relatedPosts = BLOG_POSTS.filter((p) =>
    post.relatedArticles?.includes(p.slug)
  );

  const formattedPublishedDate = new Date(post.publishedAt).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      <Navbar />

      <main className="flex-1 pb-24 lg:pb-32">
        {/* Article Hero */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[rgba(246,240,235,0.08)] overflow-hidden">
          <BrandHeroBackground />
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            {/* Breadcrumb nav */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors focus:outline-none focus:underline"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
                </li>
                <li className="text-[#d6acc1] truncate max-w-[200px] sm:max-w-xs">
                  {post.category}
                </li>
              </ol>
            </nav>

            {/* Category badge & Read time */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#d6acc1] bg-[#492332]/35 border border-[#71334B]/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d6acc1]" />
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                {formattedPublishedDate}
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F6F0EB] leading-[1.15]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#B8ADB2] font-normal leading-relaxed border-l-2 border-[#71334B] pl-4">
              {post.excerpt}
            </p>

            {/* Author Byline */}
            <div className="mt-8 pt-6 border-t border-[rgba(246,240,235,0.08)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#492332] border border-[#71334B] flex items-center justify-center text-sm font-bold text-[#F6F0EB]">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F6F0EB]">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {post.author.role} • ZNX Labs
                  </p>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#d6acc1] hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Articles</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section with Sticky Sidebar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Article Body (8 cols) */}
            <article className="lg:col-span-8 space-y-12">
              {/* Mobile Table of Contents */}
              <div className="block lg:hidden rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-6">
                <div className="flex items-center gap-2 mb-4 text-[#d6acc1] font-mono text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Table of Contents</span>
                </div>
                <nav>
                  <ul className="space-y-2.5 text-sm text-[#B8ADB2]">
                    {post.tableOfContents.map((toc: BlogTableOfContentsItem) => (
                      <li key={toc.id}>
                        <a
                          href={`#${toc.id}`}
                          className="hover:text-white hover:underline transition-colors block"
                        >
                          {toc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Loop over article sections */}
              {post.sections.map((section: BlogSection) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 space-y-5"
                >
                  {/* Section Headings */}
                  {section.h2 && (
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white border-b border-[rgba(246,240,235,0.08)] pb-3">
                      {section.h2}
                    </h2>
                  )}

                  {/* Lead paragraph */}
                  {section.leadParagraph && (
                    <p className="text-lg sm:text-xl text-[#F6F0EB] font-medium leading-relaxed">
                      {section.leadParagraph}
                    </p>
                  )}

                  {/* Paragraphs */}
                  {section.paragraphs &&
                    section.paragraphs.map((p: string, pIdx: number) => (
                      <p
                        key={pIdx}
                        className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}

                  {/* Bullet points */}
                  {section.bullets && (
                    <ul className="space-y-3 pl-2 sm:pl-4">
                      {section.bullets.map((b: string, bIdx: number) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#d6acc1] mt-2.5 shrink-0" />
                          <span className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Numbered points */}
                  {section.numbered && (
                    <ol className="space-y-4 pl-1 sm:pl-2">
                      {section.numbered.map((n: string, nIdx: number) => (
                        <li key={nIdx} className="flex items-start gap-3">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#492332] text-xs font-mono font-bold text-[#F6F0EB] shrink-0 mt-0.5 border border-[#71334B]">
                            {nIdx + 1}
                          </span>
                          <span className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
                            {n}
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* Callout box */}
                  {section.callout && (
                    <div
                      className={`rounded-2xl p-6 border ${
                        section.callout.type === "warning"
                          ? "bg-[#2A151C]/50 border-[#8C3C5C]/50 text-neutral-200"
                          : section.callout.type === "checklist"
                          ? "bg-[#1E251E]/50 border-emerald-800/40 text-neutral-200"
                          : "bg-[#181115] border-[#71334B]/40 text-neutral-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#d6acc1]">
                        {section.callout.type === "warning" ? (
                          <AlertTriangle className="w-4 h-4 text-[#d6acc1]" />
                        ) : section.callout.type === "checklist" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Info className="w-4 h-4 text-[#d6acc1]" />
                        )}
                        <span>{section.callout.title}</span>
                      </div>
                      <p className="text-sm sm:text-base text-[#B8ADB2] leading-relaxed">
                        {section.callout.body}
                      </p>
                    </div>
                  )}

                  {/* Subsections if any */}
                  {section.subsections &&
                    section.subsections.map((sub) => (
                      <div
                        key={sub.id}
                        id={sub.id}
                        className="mt-6 pt-4 space-y-4"
                      >
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F6F0EB]">
                          {sub.h3}
                        </h3>
                        {sub.paragraphs.map((sp: string, spIdx: number) => (
                          <p
                            key={spIdx}
                            className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed"
                          >
                            {sp}
                          </p>
                        ))}
                        {sub.bullets && (
                          <ul className="space-y-3 pl-2 sm:pl-4">
                            {sub.bullets.map((sb: string, sbIdx: number) => (
                              <li key={sbIdx} className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#d6acc1] mt-2.5 shrink-0" />
                                <span className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
                                  {sb}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {sub.numbered && (
                          <ol className="space-y-4 pl-1 sm:pl-2">
                            {sub.numbered.map((sn: string, snIdx: number) => (
                              <li key={snIdx} className="flex items-start gap-3">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#492332] text-xs font-mono font-bold text-[#F6F0EB] shrink-0 mt-0.5 border border-[#71334B]">
                                  {snIdx + 1}
                                </span>
                                <span className="text-base sm:text-lg text-[#B8ADB2] leading-relaxed">
                                  {sn}
                                </span>
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    ))}

                  {/* Diagram Steps */}
                  {section.diagramSteps && (
                    <div className="rounded-2xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-6 sm:p-8 space-y-4">
                      <div className="flex items-center justify-between border-b border-[rgba(246,240,235,0.08)] pb-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#d6acc1]">
                          {section.diagramTitle || "Pipeline Flow & Architecture"}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">
                          {section.diagramSteps.length} Sequential Stages
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {section.diagramSteps.map(
                          (
                            step: { step: string; label: string; detail: string },
                            sIdx: number
                          ) => (
                            <div
                              key={sIdx}
                              className="p-4 rounded-xl bg-black/40 border border-[rgba(246,240,235,0.06)] hover:border-[#71334B]/50 transition-colors"
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-xs font-mono font-semibold text-[#d6acc1]">
                                  {step.step}
                                </span>
                                <span className="text-sm font-bold text-white">
                                  {step.label}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-[#B8ADB2] leading-relaxed">
                                {step.detail}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Comparison / Architecture Table */}
                  {section.table && (
                    <div className="overflow-x-auto rounded-2xl border border-[rgba(246,240,235,0.12)] bg-[#110D0F]">
                      <table className="w-full text-left text-sm text-[#B8ADB2]">
                        <thead className="bg-[#181115] text-xs font-mono uppercase tracking-wider text-[#d6acc1] border-b border-[rgba(246,240,235,0.12)]">
                          <tr>
                            {section.table.headers.map(
                              (header: string, hIdx: number) => (
                                <th key={hIdx} className="px-5 py-3.5 font-semibold">
                                  {header}
                                </th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[rgba(246,240,235,0.06)]">
                          {section.table.rows.map(
                            (row: string[], rIdx: number) => (
                              <tr
                                key={rIdx}
                                className="hover:bg-white/[0.02] transition-colors"
                              >
                                {row.map((cell: string, cIdx: number) => (
                                  <td
                                    key={cIdx}
                                    className={`px-5 py-4 leading-relaxed ${
                                      cIdx === 0
                                        ? "font-semibold text-white font-mono text-xs"
                                        : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                      {section.table.caption && (
                        <div className="px-5 py-2.5 text-[11px] font-mono text-neutral-500 bg-[#0c090a] border-t border-[rgba(246,240,235,0.06)]">
                          {section.table.caption}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Paragraphs After Table/Diagram */}
                  {section.paragraphsAfter &&
                    section.paragraphsAfter.map((pa: string, paIdx: number) => (
                      <p
                        key={paIdx}
                        className="text-base sm:text-lg text-[#B8ADB2] font-normal leading-relaxed"
                      >
                        {pa}
                      </p>
                    ))}
                </div>
              ))}

              {/* Author Bio Box */}
              <div className="mt-16 rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-8 flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#492332] border border-[#71334B] flex items-center justify-center text-xl font-bold text-[#F6F0EB] shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-bold text-white">
                      {post.author.name}
                    </h4>
                    <span className="text-xs font-mono text-[#d6acc1]">
                      • {post.author.role}
                    </span>
                  </div>
                  <p className="text-sm text-[#B8ADB2] leading-relaxed">
                    Engineering leads at ZNX Labs build real-world AI automation pipelines, agentic orchestration layers, and custom software architectures for growing organizations.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#d6acc1] hover:underline"
                    >
                      <span>About the ZNX Labs engineering philosophy</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contextual CTA for this specific guide */}
              {post.cta && (
                <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#24131B] via-[#160E13] to-[#0D080A] border border-[#71334B]/60 p-8 sm:p-10 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
                      <Sparkles className="w-3.5 h-3.5 text-[#71334B]" />
                      {post.cta.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {post.cta.headline}{" "}
                      <span className="text-[#d6acc1]">
                        {post.cta.highlightWord}
                      </span>
                    </h3>
                    <p className="text-base text-[#B8ADB2] leading-relaxed">
                      {post.cta.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {post.relatedServices && post.relatedServices[0] && (
                      <Link
                        href={post.relatedServices[0].href}
                        className="px-6 py-3 rounded-full text-xs font-medium font-mono text-[#F6F0EB] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        Explore {post.relatedServices[0].title}
                      </Link>
                    )}
                    <Link
                      href={post.cta.buttonHref || "/contact"}
                      className="px-6 py-3 rounded-full text-xs font-medium font-mono text-[#F6F0EB] bg-[#492332] border border-[#71334B] hover:bg-[#5b2c3f] transition-colors inline-flex items-center gap-2"
                    >
                      <span>{post.cta.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </article>

            {/* Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              {/* Desktop Table of Contents */}
              <div className="hidden lg:block rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-7">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[rgba(246,240,235,0.08)] text-[#d6acc1] font-mono text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-[#71334B]" />
                  <span>Contents</span>
                </div>
                <nav>
                  <ul className="space-y-3 text-xs font-mono text-[#B8ADB2]">
                    {post.tableOfContents.map((toc: BlogTableOfContentsItem) => (
                      <li key={toc.id}>
                        <a
                          href={`#${toc.id}`}
                          className="hover:text-white hover:translate-x-1 transition-all block leading-relaxed"
                        >
                          {toc.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Related Services in Sidebar */}
              {post.relatedServices && post.relatedServices.length > 0 && (
                <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-7 space-y-5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#d6acc1]">
                    <Workflow className="w-4 h-4 text-[#71334B]" />
                    <span>Related Services</span>
                  </div>
                  {post.relatedServices.map((srv, sIdx) => (
                    <div
                      key={sIdx}
                      className="border-b border-[rgba(246,240,235,0.06)] last:border-b-0 pb-4 last:pb-0 space-y-2"
                    >
                      <h4 className="text-sm font-bold text-white">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-[#B8ADB2] leading-relaxed">
                        {srv.description}
                      </p>
                      <Link
                        href={srv.href}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#d6acc1] hover:underline"
                      >
                        <span>View Service</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* Global Navigation Assist */}
              <div className="rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-7 space-y-3">
                <h4 className="text-sm font-bold text-white">
                  Engineering Consultations
                </h4>
                <p className="text-xs text-[#B8ADB2] leading-relaxed">
                  Discuss workflow automation, autonomous agents, or enterprise RAG with our engineering team directly.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono text-white bg-[#492332] border border-[#71334B] hover:bg-[#5b2c3f] transition-colors"
                  >
                    <span>Contact Engineers</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d6acc1] hover:underline pt-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Return to all guides</span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-24 pt-16 border-t border-[rgba(246,240,235,0.08)]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d6acc1]">
                    Recommended Reading
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                    Related Engineering Guides
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#d6acc1] hover:underline"
                >
                  <span>Explore all articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((rel: BlogPost) => (
                  <article
                    key={rel.slug}
                    className="group rounded-3xl bg-[#110D0F] border border-[rgba(246,240,235,0.12)] p-7 transition-all hover:border-[rgba(246,240,235,0.24)] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4">
                      <span className="text-[#d6acc1]">{rel.category}</span>
                      <span>{rel.readingTime}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-[#d6acc1] transition-colors leading-snug">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="mt-3 text-sm text-[#B8ADB2] line-clamp-3 leading-relaxed">
                      {rel.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-xs">
                      <span className="text-neutral-500 font-mono">
                        {new Date(rel.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-[#d6acc1] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Final CTA */}
          <div className="mt-24">
            <FinalCTA />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
