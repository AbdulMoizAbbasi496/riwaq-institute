import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/data/steps";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-36 bg-ink-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Start Your Learning Journey"
          title="Four simple steps to begin"
          description="Starting your Quran journey shouldn't be complicated. Here's exactly how it works — from your first message to your first class."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={(index % 4) * 90} className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-400 font-heading text-xl text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-5 inline-flex h-10 w-10 items-center justify-center border border-ink-300 bg-white text-brand-500">
                <step.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-14 text-center text-sm text-ink-500">
            Ready to start?{" "}
            <a
              href={createWhatsAppUrl({ intent: "trial" })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-500 underline decoration-brand-400 decoration-2 underline-offset-4 transition-colors hover:text-charcoal"
            >
              Message us on WhatsApp to book your first class
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
