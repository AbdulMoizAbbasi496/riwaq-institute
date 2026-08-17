import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { courses } from "@/data/courses";
import { images, siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const stats = [
  { value: String(courses.length), label: "Quran Courses" },
  { value: "UK & USA", label: "Students Served" },
  { value: "30 Min", label: "Class Duration" },
  { value: "3-Day", label: "Free Trial" },
];

export function Hero() {
  return (
    <section id="home" className="scroll-mt-36">
      <div className="relative isolate">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/55"
        />

        <Container className="relative py-24 sm:py-28 lg:py-40">
          <div className="max-w-2xl">
            <Reveal>
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-2xl leading-relaxed text-brand-200 sm:text-3xl"
              >
                السَّلَامُ عَلَيْكُمْ، أَهْلًا بِكُمْ فِي أَكَادِيمِيَّةِ النُّور
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-heading mt-3 text-balance text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
                Online Quran Classes for Kids &amp; Adults
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 sm:text-lg">
                Learn to read, recite and understand the Quran from home. Personalised
                one-to-one lessons in {siteConfig.classDurationLabel.toLowerCase()}, with a{" "}
                {siteConfig.trialLabel.toLowerCase()} to begin.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href={createWhatsAppUrl({ intent: "trial" })}
                  size="lg"
                  external
                  ariaLabel="Start your 3-day free trial on WhatsApp"
                >
                  Start Your 3-Day Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={createWhatsAppUrl({ intent: "general" })}
                  variant="outlineLight"
                  size="lg"
                  external
                >
                  <WhatsAppIcon className="h-[1.05rem] w-[1.05rem] text-whatsapp-500" />
                  Chat on WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      <div className="border-b border-ink-200 bg-white">
        <Container>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="border-b border-ink-200 px-4 py-7 text-center lg:border-b-0 lg:border-r lg:py-9 lg:last:border-r-0"
              >
                <span className="font-heading block text-2xl text-ink-900 sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block font-header text-[0.72rem] font-bold uppercase tracking-[0.16em] text-brand-500">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
