import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { courses, type Course } from "@/data/courses";
import { pricing } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

function CourseCard({ course }: { course: Course }) {
  const whatsappUrl = createWhatsAppUrl({
    intent: "course",
    courseName: course.title,
  });

  return (
    <Reveal as="article" className="group h-full">
      <div className="flex h-full flex-col border border-ink-300 bg-white shadow-[0_2px_10px_rgba(25,15,0,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-[0_14px_32px_rgba(25,15,0,0.14)] sm:flex-row">
        <div className="relative shrink-0 sm:w-2/5">
          <div className="relative aspect-[16/10] bg-ink-100 sm:aspect-auto sm:h-full sm:min-h-[200px]">
            <Image
              src={course.image.src}
              alt={course.image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <span className="absolute left-3 top-3 bg-brand-400 px-2.5 py-1 font-header text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white">
            {course.meta.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-brand-500" />
              {course.meta.duration}
            </span>
          </div>

          <h3 className="font-heading text-lg text-ink-900 sm:text-xl">
            {course.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
            {course.description}
          </p>

          <div className="mt-4 flex flex-col gap-3 border-t border-ink-300 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-500 transition-colors hover:text-charcoal"
            >
              Learn More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Button href={whatsappUrl} size="sm" external>
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function CoursesSection() {
  const featuredCourse = courses.find((course) => course.featured) ?? courses[0];
  const otherCourses = courses.filter((course) => course !== featuredCourse);
  const featuredWhatsapp = createWhatsAppUrl({
    intent: "course",
    courseName: featuredCourse.title,
  });

  return (
    <section id="courses" className="scroll-mt-36 bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our Featured Courses"
          title="Courses designed around your Quran learning journey"
          description="Seven structured paths — from the very first letters of Arabic to thoughtful study of the Quran's meaning."
        />

        <div className="mt-14 space-y-6">
          <Reveal>
            <div className="flex flex-col border border-ink-300 bg-white shadow-[0_2px_10px_rgba(25,15,0,0.07)] sm:flex-row">
              <div className="relative shrink-0 bg-brand-400 p-8 sm:w-5/12 sm:p-10">
                <p className="font-header text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/80">
                  Course 01 · Your Starting Point
                </p>
                <h3 className="font-heading mt-3 text-2xl text-white sm:text-3xl">
                  {featuredCourse.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                  {featuredCourse.description} A calm, structured first step — for children and
                  adults alike.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={featuredWhatsapp}
                  variant="dark"
                  size="sm"
                  external
                  ariaLabel={`Enroll in the ${featuredCourse.title} course on WhatsApp`}
                >
                  Enroll Now
                </Button>
<Link
                  href={`/courses/${featuredCourse.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-white"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                </div>
              </div>

              <div className="hidden border-l border-ink-300 p-8 lg:block lg:w-7/12">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-header text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-500">
                      Class Length
                    </p>
                    <p className="mt-2 font-heading text-3xl text-ink-900">
                      30 Minutes
                    </p>
                  </div>
                  <div>
                    <p className="font-header text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-500">
                      Duration
                    </p>
                    <p className="mt-2 font-heading text-3xl text-ink-900">
                      {featuredCourse.meta.duration}
                    </p>
                  </div>
                  <div>
                    <p className="font-header text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-500">
                      Level
                    </p>
                    <p className="mt-2 font-heading text-3xl text-ink-900">
                      {featuredCourse.meta.badge}
                    </p>
                  </div>
                  <div>
                    <p className="font-header text-[0.72rem] font-bold uppercase tracking-[0.18em] text-ink-500">
                      Pricing
                    </p>
                    <p className="mt-2 font-heading text-2xl text-ink-900">
                      {pricing
                        .filter((plan) => !plan.enquiry)
                        .map((plan) => `${plan.symbol}${plan.amount}`)
                        .join(" · ")}
                      <span className="text-sm text-ink-500"> /mo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-6 sm:grid-cols-2">
            {otherCourses.map((course) => (
              <li key={course.slug}>
                <CourseCard course={course} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
