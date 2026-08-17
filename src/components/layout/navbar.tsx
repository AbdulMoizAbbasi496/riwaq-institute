"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Clock3, GraduationCap, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { courses } from "@/data/courses";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses", dropdown: true },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300",
        scrolled && "shadow-[0_6px_24px_rgba(25,15,0,0.1)]",
      )}
    >
      <div className="border-b border-ink-200">
        <Container className="flex h-20 items-center justify-between gap-6">
          <a
            href="#home"
            aria-label="Al Noor Academy — back to top"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center border border-ink-200 text-brand-500">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                  3-Day Free Trial
                </span>
                <span className="block text-sm font-semibold text-ink-900">
                  Start without commitment
                </span>
              </span>
            </div>
            <div className="hidden items-center gap-3 xl:flex">
              <span className="inline-flex h-10 w-10 items-center justify-center border border-ink-200 text-brand-500">
                <Clock3 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-500">
                  Class Length
                </span>
                <span className="block text-sm font-semibold text-ink-900">
                  30-Minute Lessons
                </span>
              </span>
            </div>
            <Button
              href={createWhatsAppUrl({ intent: "trial" })}
              size="sm"
              external
            >
              Start Free Trial
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-ink-300 text-ink-900 transition-colors hover:border-brand-400 hover:text-brand-500 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      <div className="border-b border-ink-200 bg-white">
        <Container className="relative">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navItems.map((item) =>
                item.dropdown ? (
                  <li key={item.label} className="group relative">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-ink-700 transition-colors hover:text-brand-500"
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <ul className="invisible absolute left-0 top-full z-10 w-64 border border-ink-300 bg-white py-2 opacity-0 shadow-[0_18px_40px_rgba(25,15,0,0.12)] transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                      {courses.map((course) => (
                        <li key={course.slug}>
                          <a
                            href={`/courses/${course.slug}`}
                            className="block px-5 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-500"
                          >
                            {course.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-3.5 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-ink-700 transition-colors hover:text-brand-500"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div
            id="mobile-nav"
            className={cn(
              "absolute inset-x-0 top-full z-10 overflow-y-auto border-b border-ink-200 bg-white transition-[opacity,transform] duration-300 ease-out lg:hidden",
              open
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none invisible -translate-y-2 opacity-0",
            )}
            style={{ maxHeight: "calc(100dvh - 10rem)" }}
          >
            <nav aria-label="Mobile" className="px-5 py-6 sm:px-8">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-500"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="mt-2 space-y-1 border-t border-ink-200 pt-4">
                {courses.map((course) => (
                  <li key={course.slug}>
                    <a
                      href={`/courses/${course.slug}`}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-sm text-ink-500 transition-colors hover:text-brand-500"
                    >
                      {course.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 border-t border-ink-200 pt-6">
                <Button
                  href={createWhatsAppUrl({ intent: "trial" })}
                  size="lg"
                  className="w-full"
                  external
                >
                  Start Your 3-Day Free Trial
                </Button>
                <Button
                  href={createWhatsAppUrl({ intent: "general" })}
                  variant="outline"
                  size="lg"
                  className="w-full"
                  external
                >
                  <WhatsAppIcon className="h-[1.05rem] w-[1.05rem] text-whatsapp-600" />
                  Chat on WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
