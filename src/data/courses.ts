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
      src: "/images/courses/noorani-qaida.jpg",
      alt: "A young boy in traditional attire reading the Quran at a classroom desk",
    },
    meta: { duration: "10 Weeks", badge: "Beginners" },
  },
  {
    title: "Quran Reading",
    shortTitle: "Quran Reading",
    slug: "quran-reading",
    description:
      "Learn to read the Quran clearly and confidently with gentle, guided instruction at your own pace.",
    icon: BookMarked,
    image: {
      src: "/images/courses/quran-reading.jpg",
      alt: "A young boy in a traditional outfit reading the Quran in a classroom setting",
    },
    meta: { duration: "24 Weeks", badge: "Beginners" },
  },
  {
    title: "Quran with Tajweed",
    shortTitle: "Quran with Tajweed",
    slug: "quran-with-tajweed",
    description:
      "Improve your pronunciation and recitation by learning the principles of Tajweed with careful, personalised feedback.",
    icon: MicVocal,
    image: {
      src: "/images/courses/quran-with-tajweed.jpg",
      alt: "A young girl in a hijab reciting the Quran indoors",
    },
    meta: { duration: "30 Weeks", badge: "Beginners" },
  },
  {
    title: "Hifz-ul-Quran",
    shortTitle: "Hifz-ul-Quran",
    slug: "hifz-ul-quran",
    description:
      "A structured approach to memorising the Quran with consistent guidance, revision and gentle encouragement.",
    icon: BookOpenCheck,
    image: {
      src: "/images/courses/hifz-ul-quran.jpg",
      alt: "A person reading an open Quran, viewed from above",
    },
    meta: { duration: "48 Weeks", badge: "All Levels" },
  },
  {
    title: "Namaz & Duas",
    shortTitle: "Namaz & Duas",
    slug: "namaz-and-duas",
    description:
      "Learn the essential prayers, duas and practical Islamic knowledge for everyday life.",
    icon: MoonStar,
    image: {
      src: "/images/courses/namaz-and-duas-man-praying.jpg",
      alt: "A man engaged in prayer inside a mosque, beside a Quran",
    },
    meta: { duration: "8 Weeks", badge: "Beginners" },
  },
  {
    title: "Basic Islamic Studies",
    shortTitle: "Islamic Studies",
    slug: "basic-islamic-studies",
    description:
      "Build a strong foundation in essential Islamic teachings and everyday knowledge, step by step.",
    icon: GraduationCap,
    image: {
      src: "/images/courses/basic-islamic-studies.jpg",
      alt: "A group of children in traditional attire reading religious texts",
    },
    meta: { duration: "12 Weeks", badge: "Beginners" },
  },
  {
    title: "Tafseer",
    shortTitle: "Tafseer",
    slug: "tafseer",
    description:
      "Explore the meanings and lessons of the Quran through calm, guided study and reflection.",
    icon: Compass,
    image: {
      src: "/images/courses/tafseer.jpg",
      alt: "A person in traditional attire reading an open Quran, viewed from above",
    },
    meta: { duration: "20 Weeks", badge: "Intermediate" },
  },
];
