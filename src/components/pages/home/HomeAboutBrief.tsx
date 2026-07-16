"use client";

import Image from "next/image";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { LogosCarousel } from "@/components/ui/logos-carousel";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";

const CLIENT_LOGOS = [
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

const CLIENT_FAQ = [
  {
    question: "Can one partner handle stands, gifts, and print together?",
    answer:
      "Yes. Baharnani runs fabrication, gifting, and print under one roof on Sheikh Zayed Road—one brief, one timeline, one team accountable before show day.",
  },
  {
    question: "How do we meet tight exhibition and go-live deadlines?",
    answer:
      "In-house production cuts handoffs. We lock scope early, run parallel print and build tracks, and coordinate install slots with venue teams so you are not chasing three vendors the week before doors open.",
  },
  {
    question: "What should we produce in-house vs outsource?",
    answer:
      "We advise on what to build, print, or source locally based on your budget, repeatability, and venue rules—then handle the production we are best placed to deliver ourselves.",
  },
  {
    question: "How do we keep branding consistent across channels?",
    answer:
      "Shared artwork, colour standards, and one production team across stands, gifts, and signage mean your logo, colours, and messaging stay aligned from booth to box.",
  },
  {
    question: "Which corporate gifts fit our budget and audience?",
    answer:
      "We shortlist options by tier—from everyday merch to premium sets—and show samples, MOQs, and branding methods so marketing and procurement can decide quickly.",
  },
  {
    question: "Who manages installation across Dubai venues?",
    answer:
      "Our install crew handles delivery, rigging, and on-site fixes at DWTC, ADNEC, corporate offices, and Sharjah expo halls—with a single point of contact on the ground.",
  },
] as const;

const MARKETS = ["Dubai", "Sharjah", "Abu Dhabi", "UAE"] as const;

function FaqSplitGrid() {
  const half = Math.ceil(CLIENT_FAQ.length / 2);
  const columns = [CLIENT_FAQ.slice(0, half), CLIENT_FAQ.slice(half)];

  return (
    <div className="border-y border-hairline">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-hairline">
        {columns.map((column, colIndex) => (
          <ul
            key={colIndex}
            className={cn(colIndex === 0 ? "md:pr-10" : "md:pl-10")}
          >
            {column.map((item, rowIndex) => {
              const number = colIndex * half + rowIndex + 1;
              return (
                <li
                  key={item.question}
                  className={cn(
                    "flex gap-3 py-5",
                    rowIndex !== column.length - 1 && "border-b border-hairline",
                  )}
                >
                  <span className="shrink-0 font-mono text-body-sm font-medium text-muted">
                    {String(number).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-body-sm font-medium text-ink md:text-body-md">
                      {item.question}
                    </p>
                    <p className="mt-2 text-body-sm leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function HomeAboutBrief() {
  return (
    <section id="about" className="w-full bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline">
        <div className="divide-y divide-hairline">
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-hairline">
            <Reveal
              animationNum={0}
              as="article"
              className="px-5 py-8 sm:px-6 md:px-8 md:py-10"
            >
              <h2 className="text-pretty text-display-sm text-ink md:text-display-md">
                Dubai brands need one partner who can design, produce, and
                deliver.
              </h2>
              <p className="mt-4 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
                <span className="font-medium text-ink">
                  Baharnani Advertising LLC
                </span>{" "}
                has spent twelve years on Sheikh Zayed Road helping UAE teams
                get exhibition stands, corporate gifts, print, and events right
                under one roof—so you&apos;re not juggling three vendors the
                week before go-live.
              </p>
            </Reveal>

            <Reveal
              animationNum={1}
              as="article"
              className="relative min-h-[220px] md:min-h-[280px]"
            >
              <Image
                src="/images/about/production.webp"
                alt="Exhibition production and show floor setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Reveal>
          </div>

          <Reveal
            animationNum={2}
            as="article"
            className="px-5 py-8 sm:px-6 md:px-8 md:py-10"
          >
            <p className="text-body-md font-medium text-ink sm:text-[17px] sm:leading-7">
              Today&apos;s marketing and ops teams across the UAE look for
              partners with hands-on expertise trusted by leading brands:
            </p>

            <div className="relative mt-6 border border-hairline">
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
                  <ClientLogo
                    key={brand.name}
                    src={brand.src}
                    alt={brand.alt}
                  />
                ))}
              </LogosCarousel>
            </div>
          </Reveal>

          <Reveal
            animationNum={3}
            as="article"
            className="px-5 py-8 sm:px-6 md:px-8 md:py-6"
          >
            <p className="text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
              As demand grows across{" "}
              {MARKETS.map((market, index) => (
                <span key={market}>
                  <span className="font-medium text-ink">{market}</span>
                  {index < MARKETS.length - 1 ? ", " : " "}
                </span>
              ))}
              , brand and event leads are still asking:
            </p>
            <div className="mt-6">
              <FaqSplitGrid />
            </div>
          </Reveal>
        </div>
      </RevealSection>
    </section>
  );
}
