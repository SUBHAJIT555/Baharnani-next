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
        "relative flex aspect-2/1 h-full max-h-16 w-full items-center justify-center overflow-hidden rounded  bg-[#141414] p-2 sm:max-h-20 sm:p-3 md:max-h-24" ,
        className,
      )}
    >
      <div
        className="absolute inset-0 z-0"
        
        aria-hidden
      />
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        className="absolute inset-0 z-10 object-contain p-4"
        sizes="(max-width: 640px) 120px, 160px"
      />
    </div>
  );
}
