import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTASection() {
  return (
    <section id="contact" className="scroll-mt-36 bg-brand-400 py-16 lg:py-24">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-header text-[0.78rem] font-bold uppercase tracking-[0.2em] text-charcoal">
            Enroll Now
          </p>
          <h2 className="font-heading mt-5 text-balance text-3xl font-normal leading-[1.1] text-charcoal sm:text-4xl lg:text-[3.25rem]">
            Ready to begin your Quran journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-charcoal/80 sm:text-lg">
            Start with a 3-day free trial and discover a learning experience designed around
            your needs — one calm, consistent lesson at a time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={createWhatsAppUrl({ intent: "trial" })}
              variant="dark"
              size="lg"
              external
              ariaLabel="Claim your 3-day free trial on WhatsApp"
            >
              Claim Your Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href={createWhatsAppUrl({ intent: "general" })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-header text-[0.82rem] font-bold uppercase tracking-[0.08em] text-charcoal underline decoration-charcoal/40 underline-offset-8 transition-colors hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
