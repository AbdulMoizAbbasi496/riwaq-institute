"use client";

import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "invisible translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <a
          href={createWhatsAppUrl({ intent: "general" })}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-ink-300 text-ink-700 transition-colors hover:border-whatsapp-500/60 hover:text-whatsapp-600"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <a
          href={createWhatsAppUrl({ intent: "trial" })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center bg-brand-400 px-5 font-header text-[0.82rem] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-charcoal"
        >
          Start Free Trial
        </a>
      </div>
    </div>
  );
}
