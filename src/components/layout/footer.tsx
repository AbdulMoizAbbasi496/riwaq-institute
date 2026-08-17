import { Clock3, GraduationCap, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { courses } from "@/data/courses";
import { navigationItems, pricing, siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
          <Button
            href={createWhatsAppUrl({ intent: "general" })}
            variant="primary"
            size="sm"
            className="mt-7"
            external
          >
            <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
            Chat on WhatsApp
          </Button>
        </div>

        <nav aria-label="Explore" className="lg:col-span-2">
          <h3 className="font-header text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
            Important Links
          </h3>
          <ul className="mt-5 space-y-3">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/75 transition-colors hover:text-brand-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Courses" className="lg:col-span-3">
          <h3 className="font-header text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
            Our Courses
          </h3>
          <ul className="mt-5 space-y-3">
            {courses.map((course) => (
              <li key={course.slug}>
                <a
                  href="#courses"
                  className="text-sm text-white/75 transition-colors hover:text-brand-400"
                >
                  {course.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="font-header text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <a
                href={createWhatsAppUrl({ intent: "general" })}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/75 transition-colors hover:text-brand-400"
              >
                WhatsApp — fastest reply
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span className="text-sm text-white/75">
                {siteConfig.classDurationLabel}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <span className="text-sm text-white/75">{siteConfig.trialLabel}</span>
            </li>
          </ul>
          <ul className="mt-6 space-y-1 border-t border-white/10 pt-5">
            {pricing.map((plan) => (
              <li key={plan.code} className="flex items-baseline gap-2 text-sm">
                <span className="font-medium text-white/80">{plan.region}</span>
                <span className="font-heading text-base text-white">
                  {plan.symbol}
                  {plan.amount}
                </span>
                <span className="text-xs text-white/65">/month</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Online Quran classes for students in the UK, USA and beyond.</p>
        </Container>
      </div>
    </footer>
  );
}
