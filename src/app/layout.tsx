import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif, Lobster } from "next/font/google";
import "locomotive-scroll/locomotive-scroll.css";
import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { TimedLeadModal } from "@/components/ui/TimedLeadModal";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZNX Labs | Intelligent AI Workflows & Custom Software Engineering",
  description:
    "We build intelligent systems that help growing B2B businesses capture opportunities, eliminate manual bottlenecks, and scale operations through AI, automation, and custom software.",
  metadataBase: new URL("https://znxlabs.com"),
  keywords: [
    "AI workflow automation",
    "custom software engineering",
    "B2B revenue systems",
    "business process automation",
    "connected business software",
    "enterprise AI systems",
  ],
  authors: [{ name: "ZNX Labs" }],
  openGraph: {
    title: "ZNX Labs — Automate Your Business.",
    description:
      "Intelligent AI workflows, revenue systems, and custom software engineering for growing businesses.",
    url: "https://znxlabs.com",
    siteName: "ZNX Labs",
    images: [
      {
        url: "/brand/poster.jpeg",
        width: 1536,
        height: 1024,
        alt: "ZNX Labs — Automate Your Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZNX Labs | Automate Your Business.",
    description:
      "We build intelligent systems that help businesses grow. AI workflows, revenue systems, and connected software.",
    images: ["/brand/poster.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} ${lobster.variable} scroll-smooth antialiased`}
    >
      <body 
        suppressHydrationWarning
        className="min-h-screen bg-[#000000] text-[#f4f4f6] font-sans selection:bg-[#492332] selection:text-white flex flex-col"
      >
        <SmoothScrollProvider>
          {children}
          <CookieConsent />
          <TimedLeadModal />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

