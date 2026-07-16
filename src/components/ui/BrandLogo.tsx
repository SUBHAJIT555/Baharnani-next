import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Width hint for next/image */
  width?: number;
  priority?: boolean;
};

/** Baharnani wordmark from corporategifts-next-v2 (`/logo.svg`). */
export default function BrandLogo({
  className,
  width = 160,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Baharnani Advertising"
      width={width}
      height={Math.round(width * (11 / 83))}
      priority={priority}
      className={cn("h-auto w-32 dark:brightness-0 dark:invert", className)}
    />
  );
}
