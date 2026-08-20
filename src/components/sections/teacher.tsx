import Image from "next/image";
import { Award, Check, Languages } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const qualifications = ["Hafiz-e-Quran", "Alim", "Tajweed Qualified"];

const languages = ["Urdu", "English", "Arabic"];

export function TeacherSection() {
  return (
    <section id="teacher" className="scroll-mt-36 py-16 lg:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="border border-ink-300 bg-white p-2 shadow-[0_16px_40px_rgba(25,15,0,0.1)]">
            <div className="relative aspect-[3/4] bg-ink-100">
              <Image
                src="/images/teachers/hafiz-hammad.jpg"
                alt="Hafiz Hammad — senior Quran, Tajweed and Islamic Studies instructor"
                fill
                sizes="(min-width: 1024px) 36vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-5 border border-ink-300 bg-white px-7 py-6 shadow-[0_2px_10px_rgba(25,15,0,0.07)]">
            <span className="font-heading text-4xl leading-none text-brand-500">
              5+
            </span>
            <span>
              <span className="block font-header text-[0.68rem] font-bold uppercase tracking-[0.16em] text-ink-500">
                Years Experience
              </span>
              <span className="mt-1 block text-sm font-semibold text-ink-900">
                Teaching the Quran, Tajweed &amp; Islamic Studies
              </span>
            </span>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Our Teacher</p>
            <h2 className="font-heading mt-4 text-balance text-3xl font-normal leading-[1.15] text-ink-900 sm:text-4xl lg:text-[2.5rem]">
              Meet Hafiz Hammad
            </h2>
            <p className="font-header mt-4 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-brand-500">
              Senior Quran, Tajweed &amp; Islamic Studies Instructor
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Hafiz Hammad teaches children and adults to read, recite and understand
              the Quran through calm, personalised online lessons. As a Hafiz-e-Quran
              and Alim with over five years of experience, he guides students through
              Noorani Qaida, Quran Reading, Tajweed, Hifz, Tafseer, Namaz &amp; Duas
              and Islamic Studies.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="border border-ink-300 bg-ink-100 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-400 text-white">
                  <Award className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  Qualifications &amp; Certifications
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {qualifications.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-ink-700"
                    >
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center bg-brand-400 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-ink-300 bg-ink-100 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-400 text-white">
                  <Languages className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  Languages Spoken
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {languages.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-ink-700"
                    >
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center bg-brand-400 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href={createWhatsAppUrl({ intent: "trial" })}
                external
                ariaLabel="Book a free trial class with Hafiz Hammad on WhatsApp"
              >
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
                Book a Trial with Hafiz Hammad
              </Button>
              <Button
                href={createWhatsAppUrl({ intent: "general" })}
                variant="outline"
                external
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}