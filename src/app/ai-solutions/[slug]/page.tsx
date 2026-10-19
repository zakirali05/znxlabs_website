import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AI_SOLUTIONS_DATA } from "@/data/site-content";
import { ServiceDetailTemplate } from "@/components/templates/ServiceDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AI_SOLUTIONS_DATA.map((srv) => ({
    slug: srv.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = AI_SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Solution Not Found | ZNX Labs" };
  }

  return {
    title: `${service.title} | AI Solutions | ZNX Labs`,
    description: service.heroDescription,
    openGraph: {
      title: `${service.title} — ZNX Labs`,
      description: service.heroDescription,
      url: `https://znxlabs.com/ai-solutions/${service.slug}`,
      siteName: "ZNX Labs",
    },
    alternates: {
      canonical: `https://znxlabs.com/ai-solutions/${service.slug}`,
    },
  };
}

async function AiSolutionContent({ params }: PageProps) {
  const { slug } = await params;
  const service = AI_SOLUTIONS_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailTemplate
      service={service}
      categoryLabel="AI Solutions"
      categoryHref="/ai-solutions"
    />
  );
}

export default function AiSolutionDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#090708]" />}>
      <AiSolutionContent params={params} />
    </Suspense>
  );
}
