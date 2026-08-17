import { siteConfig } from "@/data/site";

export type WhatsAppIntent = "general" | "trial" | "course" | "pricing";

export type WhatsAppOptions = {
  intent?: WhatsAppIntent;
  courseName?: string;
  region?: string;
};

const messages: Record<WhatsAppIntent, (options: WhatsAppOptions) => string> = {
  general: () =>
    "Assalamu Alaikum, I'd like to learn more about your online Quran classes.",
  trial: () =>
    "Assalamu Alaikum, I'd like to claim the 3-day free trial for your Quran classes.",
  course: ({ courseName }) =>
    `Assalamu Alaikum, I'm interested in the ${courseName ?? "Quran"} course. I'd like to know more and claim the 3-day free trial.`,
  pricing: ({ region }) =>
    `Assalamu Alaikum, I'd like to know more about your ${region ?? "UK/USA"} Quran classes and the monthly pricing.`,
};

/**
 * Builds a WhatsApp deep link with a pre-filled, URL-encoded message.
 * The phone number lives in src/data/site.ts only.
 */
export function createWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const intent = options.intent ?? "general";
  const message = messages[intent](options);
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
