import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { pricing } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const included = [
  "30-Minute Classes",
  "3-Day Free Trial",
  "One-to-one lessons",
  "Flexible scheduling",
  "All levels welcome",
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-36 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Monthly Packages"
          title="Simple, honest monthly pricing"
          description="One straightforward plan per region — 30-minute classes, no hidden costs, and a 3-day free trial before you commit."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {pricing.map((plan, index) => (
            <Reveal key={plan.code} delay={index * 100} className="h-full">
              <article className="flex h-full flex-col border border-ink-300 bg-white shadow-[0_2px_10px_rgba(25,15,0,0.07)] transition-all duration-200 hover:border-brand-400 hover:shadow-[0_14px_32px_rgba(25,15,0,0.14)]">
                <div className="flex items-center justify-between gap-4 border-b border-ink-300 bg-charcoal px-7 py-5">
                  <h3 className="font-heading text-xl text-white">{plan.region}</h3>
                  <span className="font-header border border-white/40 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/80">
                    {plan.code}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-end gap-2.5">
                    <span className="font-heading text-[3.25rem] leading-none text-ink-900">
                      {plan.symbol}
                      {plan.amount}
                    </span>
                    <span className="pb-1.5 text-sm font-medium text-ink-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-ink-500">{plan.note}</p>

                  <ul className="mt-8 flex-1 space-y-3.5 border-t border-ink-300 pt-7">
                    {included.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-ink-700">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center bg-brand-400 text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={createWhatsAppUrl({
                      intent: "pricing",
                      region: plan.whatsappRegion,
                    })}
                    className="mt-9 w-full"
                    external
                    ariaLabel={`Claim your free trial for ${plan.region} classes on WhatsApp`}
                  >
                    Claim Your Free Trial
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm text-ink-500">
            Contact us on{" "}
            <a
              href={createWhatsAppUrl({ intent: "general" })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-500 underline decoration-brand-400 decoration-2 underline-offset-4 transition-colors hover:text-charcoal"
            >
              WhatsApp
              <WhatsAppIcon className="h-3.5 w-3.5 text-whatsapp-600" />
            </a>{" "}
            to choose a suitable course and schedule.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
