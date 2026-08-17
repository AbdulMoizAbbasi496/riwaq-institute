import type { Metadata, Viewport } from "next";
import { Alice, Karla, Poppins } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { Navbar } from "@/components/layout/navbar";
import { TopBar } from "@/components/layout/top-bar";
import { courses } from "@/data/courses";
import { siteConfig } from "@/data/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alice",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Online Quran Classes for Children & Adults`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Premium online Quran classes for children and adults in the UK and USA. One-to-one lessons, 30-minute classes and a 3-day free trial — starting on WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Online Quran Classes`,
    description:
      "Learn Quran reading, Tajweed, Hifz, Noorani Qaida, Tafseer, Namaz & Duas and Islamic Studies online. 30-minute classes and a 3-day free trial.",
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Online Quran Classes`,
    description:
      "Premium online Quran learning with 30-minute classes and a 3-day free trial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#190f00",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${alice.variable} ${karla.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.setAttribute('data-js','')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              areaServed: ["GB", "US"],
              knowsAbout: courses.map((course) => course.title),
            }),
          }}
        />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
