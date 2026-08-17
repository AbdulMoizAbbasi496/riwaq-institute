import {
  BookOpen,
  CalendarCheck,
  PhoneCall,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    title: "Choose Your Course",
    description: "Select the course that matches your goal — from Noorani Qaida to Tafseer.",
    icon: BookOpen,
  },
  {
    title: "Book Your Free Trial",
    description: "Message us on WhatsApp and we'll arrange your 3-day free trial classes.",
    icon: CalendarCheck,
  },
  {
    title: "Meet Your Teacher",
    description: "Begin your first class with a dedicated Quran instructor.",
    icon: PhoneCall,
  },
  {
    title: "Begin Your Quran Journey",
    description: "Build confidence with regular 30-minute classes, week after week.",
    icon: Sparkles,
  },
];
