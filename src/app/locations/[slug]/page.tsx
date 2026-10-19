import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA } from "@/data/site-content";
import { LocationDetailTemplate } from "@/components/templates/LocationDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS_DATA.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS_DATA.find((l) => l.slug === slug);

  if (!location) {
    return { title: "Location Not Found | ZNX Labs" };
  }

  return {
    title: `Serving Businesses in ${location.country} | ZNX Labs`,
    description: location.description,
    openGraph: {
      title: `Serving Businesses in ${location.country} — ZNX Labs`,
      description: location.description,
      url: `https://znxlabs.com/locations/${location.slug}`,
      siteName: "ZNX Labs",
    },
    alternates: {
      canonical: `https://znxlabs.com/locations/${location.slug}`,
    },
  };
}

async function LocationContent({ params }: PageProps) {
  const { slug } = await params;
  const location = LOCATIONS_DATA.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return <LocationDetailTemplate location={location} />;
}

export default function LocationDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#090708]" />}>
      <LocationContent params={params} />
    </Suspense>
  );
}
