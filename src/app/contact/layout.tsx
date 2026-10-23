import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ZNX Labs — Discuss Your AI & Custom Software Project",
  description:
    "Schedule a technical consultation with ZNX Labs engineers. Discuss custom software development, AI workflow automation, RAG knowledge assistants, and enterprise agentic systems.",
  alternates: {
    canonical: "https://znxlabs.com/contact",
  },
  openGraph: {
    title: "Contact ZNX Labs — Engineering Consultation",
    description:
      "Connect directly with ZNX Labs technical engineers to review your operational bottlenecks, software architecture, and AI automation requirements.",
    url: "https://znxlabs.com/contact",
    type: "website",
    siteName: "ZNX Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ZNX Labs — Engineering Consultation",
    description:
      "Connect directly with ZNX Labs technical engineers to review your operational bottlenecks and custom software requirements.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ZNX Labs",
    description:
      "Direct technical consultation and project inquiry intake for ZNX Labs custom software and AI engineering services.",
    url: "https://znxlabs.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "ZNX Labs",
      url: "https://znxlabs.com",
      email: "hello@znxlabs.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "technical consulting and project intake",
        email: "hello@znxlabs.com",
        availableLanguage: ["English"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      {children}
    </>
  );
}
