import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { benefits } from "@/data/benefits";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-36 bg-ink-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Why Choose Us"
          title="A learning experience built around you"
          description="While many options exist for online Quran learning, our approach keeps every student's pace and goals at the centre of the classroom."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={(index % 4) * 90} className="h-full">
              <div className="h-full border border-ink-300 bg-white p-7 shadow-[0_2px_10px_rgba(25,15,0,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-[0_14px_32px_rgba(25,15,0,0.14)]">
                <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-400 text-white">
                  <benefit.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
