import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOFTWARE_DEV_DATA } from "@/data/site-content";
import { ServiceDetailTemplate } from "@/components/templates/ServiceDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SOFTWARE_DEV_DATA.map((srv) => ({
    slug: srv.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SOFTWARE_DEV_DATA.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found | ZNX Labs" };
  }

  return {
    title: `${service.title} | Software Development | ZNX Labs`,
    description: service.heroDescription,
    openGraph: {
      title: `${service.title} — ZNX Labs`,
      description: service.heroDescription,
      url: `https://znxlabs.com/software-development/${service.slug}`,
      siteName: "ZNX Labs",
    },
    alternates: {
      canonical: `https://znxlabs.com/software-development/${service.slug}`,
    },
  };
}

async function SoftwareDevContent({ params }: PageProps) {
  const { slug } = await params;
  const service = SOFTWARE_DEV_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceDetailTemplate
      service={service}
      categoryLabel="Software Development"
      categoryHref="/software-development"
    />
  );
}

export default function SoftwareDevDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#090708]" />}>
      <SoftwareDevContent params={params} />
    </Suspense>
  );
}
