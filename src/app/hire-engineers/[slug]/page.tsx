import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HIRE_ENGINEERS_DATA } from "@/data/site-content";
import { ServiceDetailTemplate } from "@/components/templates/ServiceDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return HIRE_ENGINEERS_DATA.map((role) => ({
    slug: role.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = HIRE_ENGINEERS_DATA.find((r) => r.slug === slug);

  if (!role) {
    return { title: "Role Not Found | ZNX Labs" };
  }

  return {
    title: `${role.title} | Technical Talent | ZNX Labs`,
    description: role.heroDescription,
    openGraph: {
      title: `${role.title} — ZNX Labs`,
      description: role.heroDescription,
      url: `https://znxlabs.com/hire-engineers/${role.slug}`,
      siteName: "ZNX Labs",
    },
    alternates: {
      canonical: `https://znxlabs.com/hire-engineers/${role.slug}`,
    },
  };
}

async function HireEngineerContent({ params }: PageProps) {
  const { slug } = await params;
  const role = HIRE_ENGINEERS_DATA.find((r) => r.slug === slug);

  if (!role) {
    notFound();
  }

  return (
    <ServiceDetailTemplate
      service={role}
      categoryLabel="Hire Engineers"
      categoryHref="/hire-engineers"
    />
  );
}

export default function HireEngineerDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#090708]" />}>
      <HireEngineerContent params={params} />
    </Suspense>
  );
}
