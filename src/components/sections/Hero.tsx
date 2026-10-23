"use client";

import React from "react";
import { ResponsiveHeroBanner } from "@/components/ui/responsive-hero-banner";

export function Hero() {
  return (
    <ResponsiveHeroBanner
      badgeLabel="Automate Your Business"
      badgeText="Run Operations On Autopilot"
      title="We build custom AI solutions & softwares that"
      titleHighlight="automate your business."
      description="Stop losing hours to manual spreadsheets, repetitive paperwork, and disconnected software. We build dependable software tailored to your company so your team can focus on growth."
      primaryButtonText="Discuss a Project"
      primaryButtonHref="/contact"
      secondaryButtonText="Explore What We Do"
      secondaryButtonHref="#services"
      trustPoints={[
        "Increase Profit Margins",
        "Scale Team Productivity",
        "Eliminate Repetitive Work",
      ]}
      showHeader={false}
      partners={[]}
    />
  );
}

