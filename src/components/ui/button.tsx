import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "outlineLight";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 border font-header text-[0.82rem] font-bold uppercase tracking-[0.08em] transition-colors duration-200 select-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-brand-400 bg-brand-400 text-white hover:border-charcoal hover:bg-charcoal",
  dark: "border-charcoal bg-charcoal text-white hover:border-brand-400 hover:bg-brand-400",
  outline:
    "border-ink-300 bg-transparent text-ink-700 hover:border-brand-400 hover:text-brand-500",
  outlineLight:
    "border-white/50 bg-transparent text-white hover:border-white hover:bg-white hover:text-charcoal",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-[0.78rem]",
  md: "px-5 py-2.5",
  lg: "px-7 py-3.5 text-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  ariaLabel,
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
