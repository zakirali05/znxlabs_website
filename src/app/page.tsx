import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { CorePillars } from "@/components/sections/CorePillars";
import { OurProducts } from "@/components/sections/OurProducts";
import { DataImpact } from "@/components/sections/DataImpact";
import { WhyUs } from "@/components/sections/WhyUs";
import { AboutSection } from "@/components/sections/AboutSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { Approach } from "@/components/sections/Approach";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ZNX Labs — Custom Software & AI Tools That Automate Your Business",
  description:
    "ZNX Labs builds custom software, AI tools, and smart automation that help growing businesses eliminate manual work, speed up operations, and scale with confidence.",
  openGraph: {
    title: "ZNX Labs — Building What's Next",
    description:
      "We build custom software and AI tools that automate your business. 100% code ownership, fixed pricing, and direct engineer access.",
    url: "https://znxlabs.com",
    siteName: "ZNX Labs",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ZNX Labs",
    alternateName: "ZNX Labs - Automate Your Business",
    url: "https://znxlabs.com",
    logo: "https://znxlabs.com/brand/logo.svg",
    image: "https://znxlabs.com/brand/poster.jpeg",
    description:
      "ZNX Labs builds custom software, AI tools, and smart automation that help growing companies reduce repetitive work and improve productivity.",
    slogan: "Building What's Next.",
    email: "enquiries@znxlabs.com",
    sameAs: ["https://linkedin.com/company/znxlabs"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ZNX Labs Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Solutions & Automation",
            description: "Automate repetitive daily tasks, document processing, and customer workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software & Web Apps",
            description: "Bespoke portals, client dashboards, and internal business platforms.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedicated Developers",
            description: "Senior software and AI engineers ready to join your development sprints.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative flex flex-col min-h-screen bg-[#090708] text-[#F6F0EB]">
        {/* Navigation */}
        <Navbar />

        <main id="main-content" className="flex-1">
          {/* 1. Hero: Clear, punchy headline, non-academic language & 3D visual */}
          <Hero />

          {/* 2. Proof / Client Logos: Social proof & credibility strip */}
          <ClientLogos />

          {/* 3. Services: 3 clear services (AI Solutions, Custom Software, Dedicated Developers) */}
          <CorePillars />

          {/* 4. Our Products: Real practical software systems built for clients */}
          <OurProducts />

          {/* 5. Some Data: Big bold impact numbers (15k+ hours saved, 85% faster quotes) */}
          <DataImpact />

          {/* 6. Why Us: Clear comparison between typical agencies and ZNX Labs */}
          <WhyUs />

          {/* 7. About Us: Honest company philosophy and commitment to client code ownership */}
          <AboutSection />

          {/* 8. Industries: Sector-specific software tailored to your operational needs */}
          <IndustriesSection />

          {/* 9. Our Process: 4 predictable, simple steps from discovery to rollout */}
          <Approach />

          {/* 10. Testimonials: Authentic client feedback with concrete business outcomes */}
          <TestimonialsSection />

          {/* 11. Call to Action: Direct, inviting conversion section */}
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
