import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, DollarSign, Globe2, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { courses } from "@/data/courses";
import { courseContents } from "@/data/course-content";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const content = courseContents.find((c) => c.slug === slug);
  if (!course || !content) return {};

  return {
    title: `${course.title} | ${siteConfig.name}`,
    description: content.intro.slice(0, 160),
  };
}

const sidebarIcons = {
  startDate: Calendar,
  studyMode: Globe2,
  duration: Clock,
  courseFor: Users,
  startingFee: DollarSign,
} as const;

const sidebarLabels = {
  startDate: "Start Date",
  studyMode: "Study Mode",
  duration: "Duration",
  courseFor: "Course For",
  startingFee: "Starting Fee",
} as const;

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  const content = courseContents.find((c) => c.slug === slug);

  if (!course || !content) {
    return (
      <main className="py-40 text-center">
        <Container>
          <h1 className="font-heading text-3xl text-ink-900">Course not found</h1>
          <Link href="/courses" className="mt-4 inline-block text-brand-500 underline">
            Back to courses
          </Link>
        </Container>
      </main>
    );
  }

  const whatsappUrl = createWhatsAppUrl({
    intent: "course",
    courseName: course.title,
  });

  const sidebarEntries = Object.entries(content.sidebar) as [
    keyof typeof sidebarLabels,
    string,
  ][];

  return (
    <main>
      <div className="border-b border-ink-200 bg-ink-50 pt-32 pb-12 lg:pt-40 lg:pb-16">
        <Container>
          <nav className="text-xs text-ink-500">
            <Link href="/" className="hover:text-brand-500">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/courses" className="hover:text-brand-500">Courses</Link>
            <span className="mx-2">/</span>
            <span className="text-ink-700">{course.title}</span>
          </nav>
          <h1 className="font-heading mt-4 text-3xl text-ink-900 sm:text-4xl lg:text-[2.5rem]">
            {course.title}
          </h1>
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-ink-300 bg-ink-100">
              <Image
                src={course.image.src}
                alt={course.image.alt}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8">
              <h2 className="font-heading text-2xl text-ink-900">
                {course.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-500">
                <p>{content.intro}</p>
                {content.sections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-heading mt-6 text-lg font-semibold text-ink-900">
                      {section.title}
                    </h3>
                    <p className="mt-2">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-ink-300 pt-10">
              <h3 className="font-heading text-xl text-ink-900">
                Features of {course.title}
              </h3>
              <ul className="mt-6 space-y-6">
                {content.features.map((feature) => (
                  <li key={feature.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-400 text-white">
                      <feature.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-ink-900">
                        {feature.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500">
                        {feature.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="border border-ink-300 bg-white p-7 shadow-[0_2px_10px_rgba(25,15,0,0.07)]">
                <h3 className="font-heading text-lg text-ink-900">Course Details</h3>
                <ul className="mt-5 space-y-4 border-t border-ink-300 pt-5">
                  {sidebarEntries.map(([key, value]) => {
                    const Icon = sidebarIcons[key];
                    return (
                      <li key={key} className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand-50 text-brand-500">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <div>
                          <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-400">
                            {sidebarLabels[key]}
                          </span>
                          <span className="text-sm font-semibold text-ink-900">
                            {value}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Button
                  href={whatsappUrl}
                  className="mt-7 w-full"
                  external
                  ariaLabel={`Enroll in ${course.title} on WhatsApp`}
                >
                  Enroll Now
                </Button>
              </div>

              <div className="border border-ink-300 bg-ink-50 p-7">
                <h4 className="text-sm font-semibold text-ink-900">
                  Need help choosing?
                </h4>
                <p className="mt-2 text-sm text-ink-500">
                  Message us on WhatsApp and we&apos;ll help you find the right course.
                </p>
                <Button
                  href={createWhatsAppUrl({ intent: "general" })}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  external
                >
                  Ask on WhatsApp
                </Button>
              </div>

              <div className="border border-ink-300 bg-white p-7">
                <h4 className="text-sm font-semibold text-ink-900">Other Courses</h4>
                <ul className="mt-4 space-y-2">
                  {courses
                    .filter((c) => c.slug !== slug)
                    .slice(0, 4)
                    .map((c) => (
                      <li key={c.slug}>
                        <a
                          href={`/courses/${c.slug}`}
                          className="flex items-center gap-2 text-sm text-ink-500 transition-colors hover:text-brand-500"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {c.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
