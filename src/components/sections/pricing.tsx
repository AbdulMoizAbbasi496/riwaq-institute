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
    <section id="pricing" className="scroll-mt-36 bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Monthly Packages"
          title="Simple, honest monthly pricing"
          description="One straightforward monthly plan for students worldwide — choose your currency below, or ask us for pricing in your local currency. 30-minute classes, no hidden costs, and a 3-day free trial before you commit."
        />

        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {pricing.map((plan, index) => (
            <Reveal
              key={plan.code}
              delay={index * 100}
              className="h-full w-[82%] shrink-0 snap-center sm:w-auto"
            >
              <article className="flex h-full flex-col border border-ink-300 bg-white shadow-[0_2px_10px_rgba(25,15,0,0.07)] transition-all duration-200 hover:border-brand-400 hover:shadow-[0_14px_32px_rgba(25,15,0,0.14)]">
                <div className="flex items-center justify-between gap-3 border-b border-ink-300 bg-charcoal px-5 py-4 sm:px-6 sm:py-5">
                  <h3 className="font-heading text-lg text-white sm:text-xl">
                    {plan.title}
                  </h3>
                  <span className="font-header border border-white/40 px-2.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/80 sm:px-3 sm:text-[0.68rem] sm:tracking-[0.14em]">
                    {plan.code}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                  {plan.enquiry ? (
                    <div className="flex items-end gap-2.5">
                      <span className="font-heading text-[1.7rem] leading-tight text-ink-900 sm:text-[1.9rem]">
                        Your local currency
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-end gap-2.5">
                      <span className="font-heading text-[2.75rem] leading-none text-ink-900 sm:text-[3.25rem]">
                        {plan.symbol}
                        {plan.amount}
                      </span>
                      <span className="pb-1.5 text-sm font-medium text-ink-500">/month</span>
                    </div>
                  )}
                  <p className="mt-2 text-sm text-ink-500">{plan.note}</p>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-ink-300 pt-5 sm:mt-8 sm:space-y-3.5 sm:pt-7">
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
                    className="mt-6 w-full sm:mt-9"
                    external
                    ariaLabel={
                      plan.enquiry
                        ? "Ask for pricing in your local currency on WhatsApp"
                        : `Claim your free trial — ${plan.code} pricing — on WhatsApp`
                    }
                  >
                    {plan.enquiry ? "Get Local Pricing" : "Claim Your Free Trial"}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-500">
            Students join from the UK, USA, Europe, Australia and around the world.
            Prefer pricing in your local currency? Contact us on{" "}
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
