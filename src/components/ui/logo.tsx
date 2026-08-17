import { BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export function Logo({ dark = false, className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-brand-400 text-white">
        <BookOpen className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.3rem] leading-none",
            dark ? "text-white" : "text-ink-900",
          )}
        >
          Al Noor Academy
        </span>
        <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.32em] text-brand-500">
          Online Quran Classes
        </span>
      </span>
    </span>
  );
}
