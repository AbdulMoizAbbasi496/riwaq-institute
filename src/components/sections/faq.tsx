"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/faqs";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-36 bg-ink-50 py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Helpful Answers"
              title="Questions parents and students ask"
              description="A few of the most common questions — answered simply and honestly."
            />
            <Reveal delay={120}>
              <div className="mt-9 border border-ink-300 bg-white p-7 shadow-[0_2px_10px_rgba(25,15,0,0.07)]">
                <span className="inline-flex h-11 w-11 items-center justify-center bg-brand-400 text-white">
                  <MessageCircleQuestion className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  Still have a question?
                </h3>
                <p className="mt-1.5 text-sm text-ink-500">
                  Message us on WhatsApp and we&rsquo;ll be happy to help you find the right course.
                </p>
                <Button
                  href={createWhatsAppUrl({ intent: "general" })}
                  size="sm"
                  className="mt-5"
                  external
                >
                  Ask on WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="lg:col-span-7">
          <div className="divide-y divide-ink-200 border-y border-ink-200">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-trigger-${index}`}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "text-base font-semibold transition-colors sm:text-lg",
                          open ? "text-brand-500" : "text-ink-900 group-hover:text-brand-500",
                        )}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300",
                          open
                            ? "rotate-180 border-brand-400 bg-brand-400 text-white"
                            : "border-ink-300 text-ink-500 group-hover:border-brand-400 group-hover:text-brand-500",
                        )}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-xl pb-7 text-sm leading-relaxed text-ink-500 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
