import { BookOpenCheck, BookMarked, BookOpenText, Compass, GraduationCap, MicVocal, MoonStar } from "lucide-react";

export type CourseFeature = {
  icon: typeof BookOpenText;
  title: string;
  text: string;
};

export type CourseSection = {
  title: string;
  content: string;
};

export type CourseContent = {
  slug: string;
  intro: string;
  sections: CourseSection[];
  features: CourseFeature[];
  sidebar: {
    startDate: string;
    studyMode: string;
    duration: string;
    courseFor: string;
    startingFee: string;
  };
};

const commonFeatures: CourseFeature[] = [
  {
    icon: BookOpenText,
    title: "Live class",
    text: "Experience interactive learning in live classes where teachers guide you instantly. Unlike recorded sessions, you can correct mistakes on the spot and enjoy a more engaging, real-time learning experience.",
  },
  {
    icon: GraduationCap,
    title: "Expert tutors",
    text: "Our online academy offers expert tutors for better learning. You can choose international teachers without extra cost and improve your recitation and Arabic accent.",
  },
  {
    icon: MoonStar,
    title: "Flexible timing",
    text: "Online classes are available in flexible timing. You can choose your desired hours for classes. That feature is not commonly available in physical courses.",
  },
];

export const courseContents: CourseContent[] = [
  {
    slug: "noorani-qaida",
    intro:
      "Noorani Qaida is the first step in learning to read the Holy Quran. This course teaches the basic Arabic alphabets, vowels and pronunciation rules that form the foundation of Quranic recitation. It is designed for complete beginners, especially children, who have no prior knowledge of Arabic reading.",
    sections: [
      {
        title: "What is Noorani Qaida?",
        content:
          "Noorani Qaida is a structured primer used worldwide to teach the fundamentals of Arabic pronunciation and Quranic reading. It covers Arabic letters, their shapes in different positions, short and long vowels, joining rules, and basic Tajweed principles — all in a step-by-step progression that makes learning easy and systematic.",
      },
      {
        title: "Who is this course for?",
        content:
          "This course is ideal for children aged 4 and above who are beginning their Quran learning journey, as well as adults who have never learned to read Arabic script. No prior knowledge is required — the course starts from the very basics.",
      },
      {
        title: "How the course works",
        content:
          "In each 30-minute live session, the tutor introduces a new concept using the Noorani Qaida, practices it with the student, and provides immediate feedback. Students progress through the book at their own pace, mastering each lesson before moving on. Regular practice between sessions helps reinforce what is learned.",
      },
    ],
    features: [
      ...commonFeatures,
      {
        icon: BookOpenText,
        title: "Structured curriculum",
        text: "The course follows the proven Noorani Qaida curriculum, progressing step by step from basic letters to complete Quran reading readiness.",
      },
    ],
    sidebar: {
      startDate: "Anytime",
      studyMode: "eLearning",
      duration: "2–3 Months",
      courseFor: "Beginners",
      startingFee: "£25 / $30",
    },
  },
  {
    slug: "quran-reading",
    intro:
      "For learning Quran reading, you should know it in madrassas. There are many online madrassas offering classes for Quran reading. However, some people who want to learn recitation of the Holy Quran may not have the resources to register their selves in physical Quran institutions. Therefore, many online Quran academies offer services teaching Quran and other Islamic Courses. One of these courses is an introductory Quran reading course.",
    sections: [
      {
        title: "Basic Quran Reading Course",
        content:
          "The course is for those who don't know to recite the Holy Quran. The tutors in our online academy teach the basics of recitation of the Holy Quran. First, you will learn the rules of recitation. Gradually, then you will develop your pace and will know it accordingly. In addition, the basic reading course is specially designed for beginners.",
      },
      {
        title: "Basic Quran reading course for beginners",
        content:
          "The beginner's course level for learning the Quran is very easy and simple. In the course hours, you will learn the basic alphabets of the Arabic language and its sounds. Then, there is a method of teaching which you think is better for you.",
      },
      {
        title: "Way of learning reciting the Holy Quran",
        content:
          "In an online learning Quran class, the tutors read the verses of the Holy Quran, and the students follow them. Then, they ask the students to read and listen to them carefully. If the students make any mistakes, the tutors correct them instantly. This way of learning is very effective for beginners. However, after completing the initial days of knowledge, the tutors increase the number of verses according to students' learning capability.",
      },
      {
        title: "Quran reading course for adults",
        content:
          "Most of our clients are those people who had learned Quran in their childhood. But, after spending time apart from Quran, now they cannot read that correctly. So, our online courses are the best choice for them to register and start learning again. However, knowing it again may be challenging for you. Still, with the enthusiastic efforts of tutors in our online Quran school learning academy for kids and adults, you can learn it quickly and effortlessly.",
      },
    ],
    features: [
      ...commonFeatures,
      {
        icon: BookMarked,
        title: "Time-saving",
        text: "Online classes help you save valuable time for further study and practice. Unlike physical classes that require travel, you can learn comfortably from home without wasting hours on commuting.",
      },
    ],
    sidebar: {
      startDate: "Anytime",
      studyMode: "eLearning",
      duration: "3–6 Months",
      courseFor: "Beginners",
      startingFee: "£25 / $30",
    },
  },
  {
    slug: "quran-with-tajweed",
    intro:
      "Tajweed is the set of rules governing the pronunciation of Arabic letters during Quran recitation. Learning Tajweed ensures that the Quran is recited exactly as it was revealed, with proper pronunciation, articulation and rhythm.",
    sections: [
      {
        title: "What is Tajweed?",
        content:
          "Tajweed literally means 'to make better' or 'to improve.' In the context of Quran recitation, it refers to the rules that dictate how each Arabic letter should be pronounced, including where to elongate sounds, where to pause, and how to give each letter its proper rights and characteristics.",
      },
      {
        title: "Who is this course for?",
        content:
          "This course is suitable for students who can already read the Quran and want to improve their recitation quality. Whether you have been reciting for years or are just beginning to learn Tajweed rules, the course adapts to your level.",
      },
      {
        title: "How the course works",
        content:
          "In each 30-minute live session, the tutor introduces one or two Tajweed rules, demonstrates the correct pronunciation, and listens to the student reciting. The tutor provides instant feedback and corrections. Students practice between sessions using recorded recitations and exercises provided by the tutor.",
      },
    ],
    features: [
      ...commonFeatures,
      {
        icon: MicVocal,
        title: "Accurate pronunciation",
        text: "Learn the precise articulation points and characteristics of each Arabic letter to recite the Quran with beautiful, correct Tajweed.",
      },
    ],
    sidebar: {
      startDate: "Anytime",
      studyMode: "eLearning",
      duration: "6–12 Months",
      courseFor: "Intermediate",
      startingFee: "£25 / $30",
    },
  },
  {
    slug: "hifz-ul-quran",
    intro:
      "Hifz-ul-Quran is the noble endeavour of memorising the Holy Quran. This structured course guides students through a proven memorisation plan, with regular revision and support to help them retain what they have learned.",
    sections: [
      {
        title: "What is Hifz-ul-Quran?",
        content:
          "Hifz-ul-Quran means memorising the entire Holy Quran by heart. It is one of the most respected achievements in Islamic education. Students who complete Hifz become Hafiz — a title of great honour in the Muslim community.",
      },
      {
        title: "Who is this course for?",
        content:
          "This course is for students who are committed to memorising the Quran. It requires dedication, consistency and a genuine desire to preserve the Quran in their hearts. The course is open to both children and adults who are ready for this journey.",
      },
      {
        title: "How the course works",
        content:
          "The memorisation journey is divided into manageable daily portions. In each session, the student recites from memory what they have previously memorised, then learns new verses with the tutor's guidance. Regular revision cycles ensure retention, and the tutor tracks progress to keep the student on schedule.",
      },
    ],
    features: [
      ...commonFeatures,
      {
        icon: BookOpenCheck,
        title: "Proven memorisation plan",
        text: "Follow a structured daily plan that breaks the Quran into manageable portions, making the memorisation journey achievable and consistent.",
      },
    ],
    sidebar: {
      startDate: "Anytime",
      studyMode: "eLearning",
      duration: "12–24 Months",
      courseFor: "All Levels",
      startingFee: "£25 / $30",
    },
  },
  {
    slug: "namaz-and-duas",
    intro:
      "Namaz (Salah) is one of the Five Pillars of Islam and an essential part of every Muslim's daily life. This course teaches the practical knowledge needed to perform prayers correctly, along with the essential duas (supplications) for everyday occasions.",
    sections: [
      {
        title: "What you will learn",
        content:
          "The course covers the method of performing each of the five daily prayers, including the required actions, recitations and conditions. You will also learn the essential duas for daily life — before and after eating, when leaving home, when entering the mosque, and many more.",
      },
      {
        title: "Who is this course for?",
        content:
          "This course is ideal for children who are beginning to learn prayer, as well as adults who want to refresh their knowledge or learn the correct method of Salah for the first time. It is also suitable for new Muslims seeking practical guidance.",
      },
      {
        title: "How the course works",
        content:
          "In each 30-minute session, the tutor demonstrates the steps of prayer and explains each recitation. The student practices along, receiving corrections on pronunciation and posture. The course progresses from the basics of Wudu (ablution) through to the complete method of each prayer.",
      },
    ],
    features: [
      ...commonFeatures,
      {
        icon: MoonStar,
        title: "Practical Islamic knowledge",
        text: "Learn the essential prayers and duas that form part of every Muslim's daily life, with clear step-by-step instruction.",
      },
    ],
    sidebar: {
      startDate: "Anytime",
      studyMode: "eLearning",
      duration: "2–3 Months",
      courseFor: "All Levels",
      startingFee: "£25 / $30",
    },
  },
  {
    slug: "basic-islamic-studies",
    intro:
      "This course provides a comprehensive foundation in essential Islamic teachings, covering topics from the basics of faith to practical knowledge for everyday life. It is designed to give students a well-rounded understanding of Islam.",
    sections: [
      {
        title: "What is covered",
        content:
          "The course covers the six articles of faith, the Five Pillars of Islam, stories of the Prophets, Islamic manners and etiquette, basic Fiqh (Islamic jurisprudence), and the importance of good character. Each topic is taught in an age-appropriate, engaging manner.",
      },
      {
        title: "Who is this course for?",
        content:
          "This course is suitable for children and adults who want to build a strong foundation in Islamic knowledge. It is particularly useful for new Muslims, children approaching the age of responsibility, and anyone seeking to strengthen their understanding of the faith.",
      },
      {
        title: "How the course works",
        content:
          "The tutor presents each topic through interactive discussions, stories and real-life examples. Students are encouraged to ask questions and reflect on what they learn. The course is tailored to the student's age and level of understanding.",
      },
    ],
    features: [
      ...commonFeatures,
      {
        icon: GraduationCap,
        title: "Well-rounded education",
        text: "Gain a solid foundation in Islamic beliefs, practices, and character development through a comprehensive and engaging curriculum.",
      },
    ],
    sidebar: {
      startDate: "Anytime",
      studyMode: "eLearning",
      duration: "3–6 Months",
      courseFor: "All Levels",
      startingFee: "£25 / $30",
    },
  },
  {
    slug: "tafseer",
    intro:
      "Tafseer is the study of the meanings and interpretations of the Holy Quran. This course guides students through the deeper layers of Quranic text, helping them understand the context, lessons and guidance contained in each verse.",
    sections: [
      {
        title: "What is Tafseer?",
        content:
          "Tafseer literally means 'explanation' or 'interpretation.' It involves studying the Quran's verses in their historical context, understanding the Arabic language, and drawing lessons that are relevant to modern life. It is one of the most enriching fields of Islamic study.",
      },
      {
        title: "Who is this course for?",
        content:
          "This course is for students who can already read the Quran and want to deepen their understanding. It is suitable for intermediate and advanced learners who are curious about the meanings behind the verses they recite.",
      },
      {
        title: "How the course works",
        content:
          "In each session, the tutor selects a passage from the Quran and explains its meaning, context and lessons. Students are encouraged to reflect, ask questions and discuss how the teachings apply to their lives. The course covers selected surahs (chapters) of the Quran.",
      },
    ],
    features: [
      ...commonFeatures,
      {
        icon: Compass,
        title: "Deep understanding",
        text: "Go beyond recitation to understand the meanings, context and life lessons contained in the verses of the Holy Quran.",
      },
    ],
    sidebar: {
      startDate: "Anytime",
      studyMode: "eLearning",
      duration: "6–12 Months",
      courseFor: "Intermediate",
      startingFee: "£25 / $30",
    },
  },
];
