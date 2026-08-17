import {
  CalendarCheck,
  GraduationCap,
  Laptop,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  {
    title: "Personalised Learning",
    description: "Classes shaped around each student's pace and goals.",
    icon: UserRound,
  },
  {
    title: "Flexible Online Classes",
    description: "30-minute lessons that fit easily around school, work and family life.",
    icon: CalendarCheck,
  },
  {
    title: "Learn From Anywhere",
    description: "Join from home in the UK, USA or anywhere in the world.",
    icon: Laptop,
  },
  {
    title: "3-Day Free Trial",
    description: "Begin with a free trial to see if the classes are the right fit.",
    icon: GraduationCap,
  },
];
