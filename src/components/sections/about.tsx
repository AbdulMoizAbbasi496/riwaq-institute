import Image from "next/image";
import { ArrowRight, CalendarCheck, Check, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { images, siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const checklist = [
  "30-Minute Classes",
  "For Children & Adults",
  "Learn From Home",
  "3-Day Free Trial",
];

const highlights = [
  {
    icon: UsersRound,
    title: "Learn with dedicated instructors",
    text: "Every student is guided by a dedicated Quran instructor who follows their progress and keeps each lesson clear and encouraging.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible scheduling",
    text: "Short, consistent classes that fit easily around school, work and family life.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-36 py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="border border-ink-300 bg-white p-2 shadow-[0_16px_40px_rgba(25,15,0,0.1)]">
            <div className="relative aspect-[4/5] bg-ink-100">
              <Image
                src={images.about.src}
                alt={images.about.alt}
                fill
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Begin Your Spiritual Journey</p>
            <h2 className="font-heading mt-4 text-balance text-3xl font-normal leading-[1.15] text-ink-900 sm:text-4xl lg:text-[2.5rem]">
              A calm, caring place to learn the Quran online
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              {siteConfig.name} helps children and adults read and understand the Quran with
              confidence. We structure every lesson, keep classes short and consistent, and
              make starting simple — with 30-minute classes and a 3-day free trial.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink-700">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center bg-brand-400 text-white">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="border border-ink-300 bg-ink-100 p-6"
                >
                  <item.icon className="h-6 w-6 text-brand-500" strokeWidth={1.75} />
                  <h3 className="mt-4 text-base font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={createWhatsAppUrl({ intent: "general" })} external>
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
                Talk to Us on WhatsApp
              </Button>
              <Button href="#courses" variant="outline">
                Explore Courses
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
