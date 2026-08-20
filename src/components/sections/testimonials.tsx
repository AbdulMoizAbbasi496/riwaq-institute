import { Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

// Renders only when genuine testimonials exist in src/data/testimonials.ts.
// A single testimonial is shown as an intentional centred feature card; multiple
// testimonials are shown in a responsive grid.
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-label="Testimonials" className="bg-ink-50 py-16 lg:py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real Stories"
          title="What our students and parents say"
        />

        {testimonials.length === 1 ? (
          <Reveal className="mx-auto mt-14 max-w-2xl">
            <figure className="border border-ink-300 bg-white p-10 text-center shadow-[0_2px_10px_rgba(25,15,0,0.07)] sm:p-12">
              <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-400 text-white">
                <Quote className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </span>
              <blockquote className="mt-7 text-balance text-lg leading-relaxed text-ink-700 sm:text-xl">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8">
                <span className="block font-header text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand-500">
                  {testimonials[0].name}
                </span>
                <span className="mt-1 block text-sm text-ink-500">
                  {testimonials[0].relation}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ) : (
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                as="li"
                key={testimonial.name}
                delay={(index % 3) * 80}
                className="h-full"
              >
                <figure className="flex h-full flex-col border border-ink-300 bg-white p-8 shadow-[0_2px_10px_rgba(25,15,0,0.07)]">
                  <Quote className="h-6 w-6 text-brand-400" strokeWidth={1.5} aria-hidden />
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-700">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink-300 pt-5">
                    <span className="block text-base font-semibold text-ink-900">
                      {testimonial.name}
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-500">
                      {testimonial.relation}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}