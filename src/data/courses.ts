import {
  BookOpenCheck,
  BookMarked,
  BookOpenText,
  Compass,
  GraduationCap,
  MicVocal,
  MoonStar,
  type LucideIcon,
} from "lucide-react";

export type CourseImage = {
  src: string;
  alt: string;
};

export type CourseMeta = {
  lessons: number;
  duration: string;
  badge: string;
};

export type Course = {
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: CourseImage;
  meta: CourseMeta;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    title: "Noorani Qaida",
    shortTitle: "Noorani Qaida",
    slug: "noorani-qaida",
    description:
      "Build a strong foundation in Quran reading and pronunciation — the ideal starting point for children and new learners.",
    icon: BookOpenText,
    featured: true,
    image: {
      src: "https://images.unsplash.com/photo-1585036156171-3b41b35e5bda",
      alt: "A child reading the Quran with guidance",
    },
    meta: { lessons: 50, duration: "10 Weeks", badge: "Beginners" },
  },
  {
    title: "Quran Reading",
    shortTitle: "Quran Reading",
    slug: "quran-reading",
    description:
      "Learn to read the Quran clearly and confidently with gentle, guided instruction at your own pace.",
    icon: BookMarked,
    image: {
      src: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f",
      alt: "Open Quran pages with clear Arabic text",
    },
    meta: { lessons: 120, duration: "24 Weeks", badge: "Beginners" },
  },
  {
    title: "Quran with Tajweed",
    shortTitle: "Quran with Tajweed",
    slug: "quran-with-tajweed",
    description:
      "Improve your pronunciation and recitation by learning the principles of Tajweed with careful, personalised feedback.",
    icon: MicVocal,
    image: {
      src: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53",
      alt: "A person reciting the Quran with Tajweed",
    },
    meta: { lessons: 140, duration: "30 Weeks", badge: "Beginners" },
  },
  {
    title: "Hifz-ul-Quran",
    shortTitle: "Hifz-ul-Quran",
    slug: "hifz-ul-quran",
    description:
      "A structured approach to memorising the Quran with consistent guidance, revision and gentle encouragement.",
    icon: BookOpenCheck,
    image: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      alt: "Hands holding an open Quran for memorisation",
    },
    meta: { lessons: 240, duration: "48 Weeks", badge: "All Levels" },
  },
  {
    title: "Namaz & Duas",
    shortTitle: "Namaz & Duas",
    slug: "namaz-and-duas",
    description:
      "Learn the essential prayers, duas and practical Islamic knowledge for everyday life.",
    icon: MoonStar,
    image: {
      src: "https://images.unsplash.com/photo-1519817650634-16bac2117534",
      alt: "Prayer beads and a prayer mat",
    },
    meta: { lessons: 40, duration: "8 Weeks", badge: "Beginners" },
  },
  {
    title: "Basic Islamic Studies",
    shortTitle: "Islamic Studies",
    slug: "basic-islamic-studies",
    description:
      "Build a strong foundation in essential Islamic teachings and everyday knowledge, step by step.",
    icon: GraduationCap,
    image: {
      src: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53",
      alt: "Islamic calligraphy and educational materials",
    },
    meta: { lessons: 60, duration: "12 Weeks", badge: "Beginners" },
  },
  {
    title: "Tafseer",
    shortTitle: "Tafseer",
    slug: "tafseer",
    description:
      "Explore the meanings and lessons of the Quran through calm, guided study and reflection.",
    icon: Compass,
    image: {
      src: "https://images.unsplash.com/photo-1585036156171-3b41b35e5bda",
      alt: "Studying the Quran for understanding and reflection",
    },
    meta: { lessons: 100, duration: "20 Weeks", badge: "Intermediate" },
  },
];
