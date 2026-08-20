"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const inputClassName =
  "w-full border border-charcoal/30 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-colors focus:border-charcoal";

type FormStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success" }
  | { type: "error"; message: string };

export function FinalCTASection() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.type === "loading") return;

    const form = event.currentTarget;
    if (!accessKey) {
      setStatus({
        type: "error",
        message:
          "The contact form isn't configured yet. Please reach us on WhatsApp or email — we reply quickly.",
      });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const formData = new FormData(form);
      formData.append("access_key", accessKey);
      formData.append("subject", "New enquiry from the RIWAQ website");
      formData.append("reply_to", String(formData.get("email") ?? ""));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as {
        success: boolean;
        message?: string;
      };

      if (data.success) {
        form.reset();
        setStatus({ type: "success" });
        window.setTimeout(() => setStatus({ type: "idle" }), 6000);
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong sending your message. Please try again or contact us on WhatsApp.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "We couldn't send your message right now. Please check your connection and try again, or contact us on WhatsApp.",
      });
    }
  }

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
            Send us a message and we&rsquo;ll help you find the right course — or start
            with a 3-day free trial and discover a learning experience designed around
            your needs, one calm, consistent lesson at a time.
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

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 max-w-xl text-left"
            aria-label="Contact form"
          >
            <p className="font-header text-[0.72rem] font-bold uppercase tracking-[0.16em] text-charcoal">
              Or send us a message
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-header text-[0.68rem] font-bold uppercase tracking-[0.14em] text-charcoal"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={`mt-2 ${inputClassName}`}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="font-header text-[0.68rem] font-bold uppercase tracking-[0.14em] text-charcoal"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={`mt-2 ${inputClassName}`}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="contact-phone"
                className="font-header text-[0.68rem] font-bold uppercase tracking-[0.14em] text-charcoal"
              >
                Phone / WhatsApp
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+44 7000 000000"
                className={`mt-2 ${inputClassName}`}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="font-header text-[0.68rem] font-bold uppercase tracking-[0.14em] text-charcoal"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Tell us which course you're interested in and any questions you have."
                className={`mt-2 min-h-28 resize-y ${inputClassName}`}
              />
            </div>

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex w-full items-center justify-center gap-2 border border-charcoal bg-charcoal px-8 py-3.5 font-header text-[0.82rem] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-200 select-none hover:bg-white hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status.type === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              <div className="min-h-6" aria-live="polite">
                {status.type === "success" ? (
                  <p className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Message sent successfully — we&rsquo;ll get back to you soon!
                  </p>
                ) : status.type === "error" ? (
                  <p className="flex items-start gap-2 text-sm font-semibold text-charcoal">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {status.message}
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}