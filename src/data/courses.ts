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
      src: "https://images.pexels.com/photos/9127599/pexels-photo-9127599.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A young boy in traditional attire reading the Quran at a classroom desk",
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
      src: "https://images.pexels.com/photos/11758987/pexels-photo-11758987.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A young boy in a traditional outfit reading the Quran in a classroom setting",
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
      src: "https://images.pexels.com/photos/4369958/pexels-photo-4369958.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A young girl in a hijab reciting the Quran indoors",
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
      src: "https://images.pexels.com/photos/19339019/pexels-photo-19339019.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A person reading an open Quran, viewed from above",
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
      src: "https://images.pexels.com/photos/36212007/pexels-photo-36212007.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A young woman in a white hijab reading the Quran inside a mosque",
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
      src: "https://images.pexels.com/photos/33451744/pexels-photo-33451744.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A group of children in traditional attire reading religious texts",
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
      src: "https://images.pexels.com/photos/37491420/pexels-photo-37491420.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "A person in traditional attire reading an open Quran, viewed from above",
    },
    meta: { lessons: 100, duration: "20 Weeks", badge: "Intermediate" },
  },
];
