import Image from "next/image";
import { cn } from "@/lib/utils";

type ClientLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Brand mark for the logos carousel (distinct from site `BrandLogo`). */
export function ClientLogo({ src, alt, className }: ClientLogoProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-4/3 h-full max-h-14 w-full items-center justify-center overflow-hidden bg-white shadow-sm ring ring-hairline sm:max-h-20 sm:shadow-md md:max-h-24",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className="object-cover"
        sizes="(max-width: 640px) 120px, 160px"
      />
    </div>
  );
}
