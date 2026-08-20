import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export function Logo({ dark = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {dark ? (
        <span className="bg-white p-2.5">
          <Image
            src="/images/brand/riwaq_logo.svg"
            alt="RIWAQ"
            width={2708}
            height={1477}
            unoptimized
            className="h-10 w-auto object-contain"
          />
        </span>
      ) : (
        <Image
          src="/images/brand/riwaq_logo.svg"
          alt="RIWAQ"
          width={2708}
          height={1477}
          unoptimized
          priority
          className="h-12 w-auto object-contain"
        />
      )}
    </span>
  );
}