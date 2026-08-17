import { Quote } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

// Renders only when genuine testimonials exist in src/data/testimonials.ts.
// The section stays hidden until the client supplies real quotes.
export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-label="Testimonials" className="bg-ink-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Real Stories"
          title="What our students and parents say"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.name} delay={(index % 3) * 80} className="h-full">
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
      </Container>
    </section>
  );
}
