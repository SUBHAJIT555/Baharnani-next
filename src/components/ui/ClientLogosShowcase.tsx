"use client";

import { Building2 } from "lucide-react";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { LogosCarousel } from "@/components/ui/logos-carousel";
import { SectionEyebrow } from "@/components/ui/Section";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

export const CLIENT_LOGOS = [
  { src: "/images/clients/fab.webp", alt: "FAB", name: "FAB" },
  { src: "/images/clients/himalaya.webp", alt: "Himalaya", name: "Himalaya" },
  { src: "/images/clients/talabat.webp", alt: "Talabat", name: "Talabat" },
  { src: "/images/clients/careem.webp", alt: "Careem", name: "Careem" },
  { src: "/images/clients/imperial.webp", alt: "Imperial", name: "Imperial" },
  { src: "/images/clients/rently.webp", alt: "Rently", name: "Rently" },
  { src: "/images/clients/rit.webp", alt: "RIT", name: "RIT" },
  {
    src: "/images/clients/tradeling.webp",
    alt: "Tradeling",
    name: "Tradeling",
  },
] as const;

type ClientLogosShowcaseProps = {
  /** Intro / supporting line under the heading (standalone) or as body (nested) */
  intro?: string;
  /** When false, renders without outer section rails (for nesting in HomeAboutBrief) */
  standalone?: boolean;
  className?: string;
};

const DEFAULT_INTRO =
  "Today's marketing and ops teams across the UAE look for partners with hands-on expertise trusted by leading brands.";

function LogoRow() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 grid grid-cols-2 lg:grid-cols-4"
        aria-hidden
      >
        <div className="border-r border-dashed border-hairline" />
        <div className="hidden border-r border-dashed border-hairline lg:block" />
        <div className="hidden border-r border-dashed border-hairline lg:block" />
      </div>

      <LogosCarousel
        columnCount={4}
        className="py-2 sm:py-3 [--column-count:2] lg:[--column-count:4]"
      >
        {CLIENT_LOGOS.map((brand) => (
          <ClientLogo key={brand.name} src={brand.src} alt={brand.alt} />
        ))}
      </LogosCarousel>
    </div>
  );
}

export default function ClientLogosShowcase({
  intro = DEFAULT_INTRO,
  standalone = true,
  className,
}: ClientLogosShowcaseProps) {
  if (!standalone) {
    return (
      <Reveal
        animationNum={0}
        as="article"
        className={className ?? "px-5 py-8 sm:px-6 md:px-8 md:py-10"}
      >
        <p className="text-body-md font-medium text-ink sm:text-[17px] sm:leading-7">
          {intro}
        </p>
        <div className="mt-6">
          <LogoRow />
        </div>
      </Reveal>
    );
  }

  return (
    <section className="w-full bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal animationNum={0}>
            <SectionEyebrow icon={Building2} className="mx-auto">
              Our clients
            </SectionEyebrow>
          </Reveal>

          <Reveal
            animationNum={1}
            as="h2"
            className="mt-5 text-balance text-display-sm text-ink md:text-display-md"
          >
            Trusted by leading brands across the UAE
          </Reveal>

          <Reveal
            animationNum={2}
            as="p"
            className="mt-4 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7"
          >
            {intro}
          </Reveal>
        </div>

        <Reveal animationNum={3} className="mt-8 sm:mt-10">
          <LogoRow />
        </Reveal>
      </RevealSection>
    </section>
  );
}
