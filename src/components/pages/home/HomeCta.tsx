"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  accentButtonClasses,
  buttonIconClasses,
  contactButtonIconClasses,
} from "@/components/ui/button";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const GRID_LINE = "color-mix(in srgb, var(--primary) 14%, transparent)";

const whatsappButtonClasses = cn(
  "group relative inline-flex items-center justify-center gap-1.5",
  "h-11 w-full cursor-pointer select-none rounded-lg px-5 sm:w-auto",
  "text-sm font-medium leading-none tracking-[0.01em] text-white",
  "border border-[#128C7E]/25 dark:border-[#25D366]/20",
  "bg-[linear-gradient(180deg,#4ade80_0%,#25D366_48%,#16a34a_100%)]",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4),inset_0_-1px_0_0_rgba(22,163,74,0.35),0_1px_2px_rgba(22,163,74,0.25)]",
  "transition-[filter,transform] duration-200 ease-out hover:brightness-[1.06] active:scale-[0.98]",
  "dark:bg-[linear-gradient(180deg,#34d399_0%,#25D366_45%,#15803d_100%)]",
  "dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_-1px_0_0_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.35)]",
);

function CtaCornerGridBackground() {
  const gridStyle = {
    backgroundImage: `
      linear-gradient(90deg, ${GRID_LINE} 1px, transparent 0),
      linear-gradient(180deg, ${GRID_LINE} 1px, transparent 0),
      repeating-linear-gradient(45deg, ${GRID_LINE}, transparent 2px 10px)
    `,
    backgroundSize: "24px 24px, 24px 24px, 24px 24px",
    WebkitMaskImage:
      "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, transparent 42%, black 100%)",
    maskImage:
      "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, transparent 42%, black 100%)",
  } as const;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-canvas" aria-hidden>
      <div className="absolute inset-0" style={gridStyle} />
    </div>
  );
}

type HomeCtaProps = {
  title?: ReactNode;
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
    icon?: "contact" | "arrow";
  };
};

export default function HomeCta({
  title,
  description,
  primaryAction = {
    label: "Contact us",
    href: "/contact",
    icon: "contact",
  },
}: HomeCtaProps) {
  return (
    <section id="contact-cta" className="w-full bg-canvas">
      <RevealSection className="relative mx-auto max-w-7xl overflow-hidden border-x border-hairline border-y">
        <CtaCornerGridBackground />

        <Reveal
          animationNum={0}
          className="relative z-10 mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-24 lg:py-28"
        >
          <h2 className="text-balance text-display-sm leading-snug text-ink md:text-display-md lg:text-display-lg lg:leading-tight">
            {title ?? (
              <>
                Designed, Built, and Delivered Across{" "}
                <span className="text-brand-accent">Dubai &amp; the UAE</span>.
              </>
            )}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-body-md leading-relaxed text-muted sm:mt-5 sm:text-[17px] sm:leading-7">
            {description ??
              "We design, build, and install exhibition stands, manage events end to end, handle commercial and promotional printing, and develop websites, apps, exhibition kiosk games, and interactive event tech - one team from brief to delivery across Dubai and the UAE."}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row">
            <Link
              href={primaryAction.href}
              className={accentButtonClasses("group w-full sm:w-auto")}
            >
              {primaryAction.label}
              {primaryAction.icon === "arrow" ? (
                <ArrowUpRightIcon className={buttonIconClasses} />
              ) : (
                <MessageForwardIcon className={contactButtonIconClasses} />
              )}
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={whatsappButtonClasses}
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </RevealSection>
    </section>
  );
}
