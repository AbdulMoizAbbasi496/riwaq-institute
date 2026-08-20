export const siteConfig = {
  name: "RIWAQ",
  tagline: "Online Quran Academy",
  description:
    "Premium online Quran classes for children and adults in the UK, USA, Europe, Australia and around the world. One-to-one lessons, 30-minute classes and a 3-day free trial.",
  whatsappNumber: "923153382317",
  whatsappDisplay: "+92 315 3382317",
  email: "hammadquranteacher123@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://riwaqinstitute.com",
  trialLabel: "3-Day Free Trial",
  classDurationLabel: "30-Minute Classes",
};

export type PricingPlan = {
  title: string;
  code: string;
  symbol?: string;
  amount?: string;
  currency: string;
  note: string;
  whatsappRegion: string;
  enquiry?: boolean;
};

export const pricing: PricingPlan[] = [
  {
    title: "Standard Monthly Plan",
    code: "GBP",
    symbol: "£",
    amount: "25",
    currency: "British Pounds",
    note: "per student, per month",
    whatsappRegion: "in GBP (£25/month)",
  },
  {
    title: "Standard Monthly Plan",
    code: "USD",
    symbol: "$",
    amount: "30",
    currency: "US Dollars",
    note: "per student, per month",
    whatsappRegion: "in USD ($30/month)",
  },
  {
    title: "Standard Monthly Plan",
    code: "PKR",
    symbol: "Rs",
    amount: "8,319",
    currency: "Pakistani Rupees",
    note: "per student, per month",
    whatsappRegion: "in PKR (Rs 8,319/month)",
  },
  {
    title: "Worldwide Students",
    code: "GLOBAL",
    currency: "Any country",
    note: "Same one-to-one classes, available in any country",
    whatsappRegion: "for my country",
    enquiry: true,
  },
];

// Site photography lives in public/images — swap files there to replace
// hero/about imagery site-wide in one place.
export const images = {
  hero: {
    src: "/images/hero/man-reading-quran.jpg",
    alt: "A man reading the Quran inside a mosque",
  },
  about: {
    src: "/images/about/children-studying.jpg",
    alt: "Children engaged in study inside a mosque",
  },
};

export const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "Courses", href: "/#courses" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Why Us", href: "/#why-us" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];
