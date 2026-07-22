import type { ReactNode } from "react";
import Link from "next/link";

import {
  sectionInnerClass,
  sectionOuterClass,
} from "@/components/ui/Section";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";

type LegalDocumentProps = {
  title: string;
  description?: string;
  updated?: string;
  children: ReactNode;
};

export function LegalDocument({
  title,
  description,
  updated,
  children,
}: LegalDocumentProps) {
  return (
    <main className="w-full overflow-x-hidden">
      <section className={sectionOuterClass}>
        <RevealSection
          className={cn(
            sectionInnerClass,
            "pt-24 pb-0 sm:pt-28 sm:pb-0 lg:pt-32 lg:pb-0",
          )}
        >
          <Reveal
            animationNum={0}
            as="header"
            className="flex flex-col gap-6  pb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pb-12"
          >
            <div className="min-w-0 max-w-3xl">
              <h1 className="text-display-sm font-semibold tracking-tight text-ink sm:text-display-md">
                {title}
              </h1>
              {description ? (
                <p className="mt-4 text-body-md text-muted sm:text-[17px] sm:leading-7">
                  {description}
                </p>
              ) : null}
            </div>
            {updated ? (
              <p className="shrink-0 text-caption text-muted-soft sm:pb-1 sm:text-right">
                Last updated
                <span className="mt-1 block text-sm font-medium text-ink">
                  {updated}
                </span>
              </p>
            ) : null}
          </Reveal>
        </RevealSection>
      </section>

      <SectionDivider />

      <section className={sectionOuterClass}>
        <RevealSection className={cn(sectionInnerClass, "pt-10 sm:pt-12")}>
          <Reveal
            animationNum={0}
            as="article"
            className="legal-prose w-full min-w-0"
          >
            {children}
          </Reveal>
        </RevealSection>
      </section>

      <SectionDivider />
    </main>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-hairline py-8 first:border-t-0 first:pt-0 last:pb-0 sm:py-10"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]">
        <h2 className="text-lg font-semibold tracking-tight text-ink sm:text-xl lg:sticky lg:top-24 lg:self-start">
          {title}
        </h2>
        <div className="min-w-0 space-y-4 text-body-md leading-relaxed text-body">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalP({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("max-w-3xl", className)}>{children}</p>;
}

export function LegalEmphasis({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-3xl rounded-xl border border-dashed border-hairline bg-surface-soft px-4 py-3 text-sm font-medium uppercase leading-relaxed tracking-wide text-ink sm:px-5 sm:text-[15px]">
      {children}
    </p>
  );
}

export function LegalList({
  items,
  ordered = false,
}: {
  items: ReactNode[];
  ordered?: boolean;
}) {
  const ListTag = ordered ? "ol" : "ul";
  return (
    <ListTag
      className={cn(
        "max-w-3xl space-y-2 pl-5 text-body",
        ordered ? "list-decimal" : "list-disc",
      )}
    >
      {items.map((item, index) => (
        <li key={index} className="pl-1 marker:text-muted-soft">
          {item}
        </li>
      ))}
    </ListTag>
  );
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="max-w-3xl pt-2 text-base font-semibold text-ink sm:text-lg">
      {children}
    </h3>
  );
}

export function LegalLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-brand-accent underline decoration-brand-accent/30 underline-offset-2 transition-colors hover:decoration-brand-accent"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="font-medium text-brand-accent underline decoration-brand-accent/30 underline-offset-2 transition-colors hover:decoration-brand-accent"
    >
      {children}
    </Link>
  );
}
