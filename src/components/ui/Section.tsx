import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Outer section fill — full-bleed canvas */
export const sectionOuterClass = "w-full bg-canvas";

/** Inner content rails — max-w-7xl + vertical hairlines */
export const sectionInnerClass =
  "mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-16";

export const sectionInnerCompactClass =
  "mx-auto max-w-7xl border-x border-hairline px-5 py-3 sm:px-6 sm:py-4 lg:py-6";

export const sectionInnerHeroClass =
  "mx-auto max-w-7xl border-x border-hairline px-5 pt-20 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20";

/** Dashed eyebrow / badge pill */
export const sectionEyebrowClass = cn(
  "inline-flex items-center gap-1.5 rounded-lg border border-dashed border-hairline",
  "bg-surface-card px-3 py-1 text-caption font-medium text-body",
  "shadow-[8px_2px_16px_-2px_rgba(0,0,0,0.12)] dark:shadow-[8px_2px_16px_-2px_rgba(0,0,0,0.35)]"
);

type SectionEyebrowProps = {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
};

export function SectionEyebrow({
  children,
  icon: Icon,
  className,
}: SectionEyebrowProps) {
  return (
    <span className={cn(sectionEyebrowClass, className)}>
      {Icon ? <Icon className="h-3.5 w-3.5 text-brand-accent" /> : null}
      {children}
    </span>
  );
}

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  compact?: boolean;
  id?: string;
};

export function SectionShell({
  children,
  className,
  innerClassName,
  compact = false,
  id,
}: SectionShellProps) {
  return (
    <section id={id} className={cn(sectionOuterClass, className)}>
      <div
        className={cn(
          compact ? sectionInnerCompactClass : sectionInnerClass,
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
