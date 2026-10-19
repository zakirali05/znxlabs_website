import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES_DATA } from "@/data/site-content";
import { IndustryDetailTemplate } from "@/components/templates/IndustryDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found | ZNX Labs" };
  }

  return {
    title: `${industry.name} Software & AI Solutions | ZNX Labs`,
    description: industry.heroDescription,
    openGraph: {
      title: `${industry.name} — ZNX Labs`,
      description: industry.heroDescription,
      url: `https://znxlabs.com/industries/${industry.slug}`,
      siteName: "ZNX Labs",
    },
    alternates: {
      canonical: `https://znxlabs.com/industries/${industry.slug}`,
    },
  };
}

async function IndustryContent({ params }: PageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailTemplate industry={industry} />;
}

export default function IndustryDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#090708]" />}>
      <IndustryContent params={params} />
    </Suspense>
  );
}
