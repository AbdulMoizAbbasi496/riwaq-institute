import { AboutSection } from "@/components/sections/about";
import { WhyChooseUs } from "@/components/sections/benefits";
import { CoursesSection } from "@/components/sections/courses";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { PricingSection } from "@/components/sections/pricing";
import { TeacherSection } from "@/components/sections/teacher";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <HowItWorksSection />
      <CoursesSection />
      <WhyChooseUs />
      <PricingSection />
      <FAQSection />
      <TeacherSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>
  );
}
