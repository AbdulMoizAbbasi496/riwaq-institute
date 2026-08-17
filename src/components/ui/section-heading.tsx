import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("eyebrow", dark && "text-brand-400")}>{eyebrow}</p>
      <h2
        className={cn(
          "font-heading mt-4 text-balance text-3xl font-normal leading-[1.15] text-ink-900 sm:text-4xl lg:text-[2.5rem]",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-balance text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-ink-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
