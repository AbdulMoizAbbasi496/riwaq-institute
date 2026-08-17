export const siteConfig = {
  name: "Al Noor Academy",
  tagline: "Online Quran Academy",
  description:
    "Premium online Quran classes for children and adults in the UK, USA and beyond. One-to-one lessons, 30-minute classes and a 3-day free trial.",
  // NOTE: Replace with the client's real WhatsApp number (digits only, incl. country code, no "+").
  // The site ships with a placeholder so no fake number is published.
  whatsappNumber: "REPLACE_WITH_CLIENT_NUMBER",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alnoor-academy.example",
  trialLabel: "3-Day Free Trial",
  classDurationLabel: "30-Minute Classes",
};

export const pricing = [
  {
    region: "United Kingdom",
    code: "UK",
    symbol: "£",
    amount: "25",
    currency: "GBP",
    note: "per student, per month",
    whatsappRegion: "UK",
  },
  {
    region: "United States",
    code: "USA",
    symbol: "$",
    amount: "30",
    currency: "USD",
    note: "per student, per month",
    whatsappRegion: "USA",
  },
];

// Images are placeholders (live, license-free sources) — swap these URLs to
// replace every hero/about image site-wide in one place.
export const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae",
    alt: "Open Quran resting on a wooden rehal with prayer beads beside it",
    credit: "Placeholder image — replace in src/data/site.ts",
  },
  about: {
    src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    alt: "A young girl learning to read the Quran",
    credit: "Placeholder image — replace in src/data/site.ts",
  },
};

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
