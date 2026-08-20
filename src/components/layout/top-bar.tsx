import { Clock3, Globe2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function TopBar() {
  return (
    <div className="bg-charcoal text-white/80">
      <Container className="flex h-10 items-center justify-between gap-6">
        <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80">
          <Globe2 className="h-3.5 w-3.5 text-brand-400" />
          Online Quran Academy · Worldwide
        </p>
        <div className="flex items-center gap-5">
          <p className="hidden items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/80 sm:flex">
            <Clock3 className="h-3.5 w-3.5 text-brand-400" />
            {siteConfig.classDurationLabel} · {siteConfig.trialLabel}
          </p>
          <a
            href={createWhatsAppUrl({ intent: "general" })}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-brand-400"
          >
            <WhatsAppIcon className="h-3.5 w-3.5 text-whatsapp-500" />
            {siteConfig.whatsappDisplay}
          </a>
        </div>
      </Container>
    </div>
  );
}
