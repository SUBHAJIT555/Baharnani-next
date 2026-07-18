"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Box, Gift, Laptop } from "lucide-react";
import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import {
  accentButtonClasses,
  softButtonClasses,
  contactButtonIconClasses,
  buttonIconClasses,
} from "@/components/ui/button";
import {
  ExternalLinkIcon,
  ExternalSiteNoticeModal,
} from "@/components/ui/ExternalSiteNoticeModal";
import PastelIconBox from "@/components/ui/PastelIconBox";
import GoogleRatingBadge from "@/components/ui/GoogleRatingBadge";
import { ShimmeringText } from "@/components/shimmering-text";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    shortTitle: "Exhibition Stand",
    title: "Exhibition Stand Supplier.",
    // Keep copy length even across slides so line wrap stays stable.
    description:
      "Custom trade-show stands designed, built, and installed across Dubai, Sharjah, and Abu Dhabi—including DWTC, ADNEC, and Expo Centre.",
    tabBlurb:
      "Custom exhibition stand design, build, and installation across the UAE.",
    externalUrl: "https://exhibitionstandsuae.ae/",
    Icon: Box,
    iconColor: "#C1D8FD",
    label: "Design | Build | Install",
    metric: "100+",
    metricLabel: "stands delivered",
    activeLightBg: `
      radial-gradient(ellipse 94% 76% at 8% 10%, rgba(180, 230, 255, 0.26), transparent 72%),
      radial-gradient(ellipse 90% 73% at 80% 24%, rgba(210, 245, 255, 0.30), transparent 74%),
      radial-gradient(ellipse 87% 71% at 16% 84%, rgba(190, 235, 255, 0.23), transparent 76%),
      radial-gradient(ellipse 91% 75% at 90% 88%, rgba(200, 240, 255, 0.28), transparent 74%),
      linear-gradient(165deg, #f5fbff 0%, #edf7ff 50%, #f2f9ff 100%)
    `,
    activeDarkBg: `
      radial-gradient(ellipse 94% 76% at 8% 10%, rgba(60, 140, 200, 0.24), transparent 72%),
      radial-gradient(ellipse 90% 73% at 80% 24%, rgba(90, 170, 230, 0.27), transparent 74%),
      radial-gradient(ellipse 87% 71% at 16% 84%, rgba(50, 130, 190, 0.21), transparent 76%),
      radial-gradient(ellipse 91% 75% at 90% 88%, rgba(80, 160, 220, 0.25), transparent 74%),
      linear-gradient(165deg, #0a1418 0%, #0e1820 50%, #0c1619 100%)
    `,
  },
  {
    shortTitle: "Corporate Gifts",
    title: "Corporate Gifts Supplier.",
    description:
      "Logo-branded gifts, executive hampers, and bulk giveaways for appreciation, onboarding kits, and campaign launches across the UAE.",
    tabBlurb:
      "Custom, luxury, and promotional corporate gifts for Dubai & the UAE.",
    externalUrl: "https://corporategiftsdubaii.ae/",
    Icon: Gift,
    iconColor: "#B6E9C8",
    label: "Custom | Luxury | Promotional",
    metric: "Bulk",
    metricLabel: "quotes ready",
    activeLightBg: `
      radial-gradient(ellipse 94% 78% at 10% 11%, rgba(180, 240, 210, 0.26), transparent 72%),
      radial-gradient(ellipse 90% 75% at 80% 26%, rgba(210, 255, 235, 0.30), transparent 74%),
      radial-gradient(ellipse 87% 72% at 18% 84%, rgba(160, 230, 200, 0.23), transparent 76%),
      radial-gradient(ellipse 91% 76% at 90% 89%, rgba(195, 250, 225, 0.28), transparent 74%),
      linear-gradient(168deg, #f2fff8 0%, #e8faf0 50%, #effdf5 100%)
    `,
    activeDarkBg: `
      radial-gradient(ellipse 94% 78% at 10% 11%, rgba(40, 150, 100, 0.24), transparent 72%),
      radial-gradient(ellipse 90% 75% at 80% 26%, rgba(70, 180, 130, 0.27), transparent 74%),
      radial-gradient(ellipse 87% 72% at 18% 84%, rgba(30, 130, 80, 0.21), transparent 76%),
      radial-gradient(ellipse 91% 76% at 90% 89%, rgba(60, 170, 120, 0.25), transparent 74%),
      linear-gradient(168deg, #081a12 0%, #0e1f16 50%, #0b1c14 100%)
    `,
  },
  {
    shortTitle: "Creative Agency",
    title: "Creative Agency.",
    description:
      "Custom Websites, Apps, and Kiosk Game through Code Cobble - built so your brand looks sharp online and converts when it counts.",
    tabBlurb:
      "Website development, UI/UX, kiosk games, and digital solutions through Code Cobble.",
    externalUrl: "https://codecobble.com/",
    Icon: Laptop,
    iconColor: "#FFF8E1",
    label: "Website | App | Kiosk Game",
    metric: "Full",
    metricLabel: "build stack",
    activeLightBg: `
      radial-gradient(ellipse 93% 77% at 9% 11%, rgba(240, 200, 160, 0.28), transparent 72%),
      radial-gradient(ellipse 89% 74% at 80% 27%, rgba(255, 230, 190, 0.32), transparent 74%),
      radial-gradient(ellipse 86% 72% at 17% 84%, rgba(230, 180, 140, 0.25), transparent 76%),
      radial-gradient(ellipse 90% 76% at 89% 89%, rgba(250, 215, 175, 0.30), transparent 74%),
      linear-gradient(168deg, #fffaf2 0%, #fff4e8 50%, #fff7f0 100%)
    `,
    activeDarkBg: `
      radial-gradient(ellipse 93% 77% at 9% 11%, rgba(160, 90, 40, 0.30), transparent 70%),
      radial-gradient(ellipse 89% 74% at 80% 27%, rgba(190, 120, 70, 0.28), transparent 72%),
      radial-gradient(ellipse 86% 72% at 17% 84%, rgba(140, 70, 30, 0.26), transparent 74%),
      radial-gradient(ellipse 90% 76% at 89% 89%, rgba(180, 110, 60, 0.29), transparent 72%),
      linear-gradient(168deg, #1a100a 0%, #22140c 50%, #1c120b 100%)
    `,
  },
] as const;

function SideRails() {
  return (
    <div className="relative hidden w-3 shrink-0 self-stretch overflow-hidden border-x border-hairline bg-canvas sm:block sm:w-6 md:w-8 lg:w-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px), radial-gradient(circle, color-mix(in srgb, var(--primary) 55%, transparent) 1px, transparent 1px)",
          backgroundPosition: "0 0, 4px 4px",
          backgroundSize: "8px 8px, 8px 8px",
          opacity: 0.4,
        }}
        aria-hidden
      />
    </div>
  );
}

function FeatureTab({
  title,
  blurb,
  Icon,
  isActive,
  progress,
  activeLightBg,
  activeDarkBg,
  onClick,
}: {
  title: string;
  blurb: string;
  Icon: typeof Box;
  isActive: boolean;
  progress: number;
  activeLightBg: string;
  activeDarkBg: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "relative flex h-full w-full cursor-pointer flex-col items-start justify-start gap-2 overflow-hidden bg-surface-soft px-5 py-5 text-left transition-colors sm:px-6 sm:py-6 md:flex-1",
        !isActive && "hover:bg-surface-card",
      )}
      onClick={onClick}
    >
      {isActive ? (
        <>
          <div
            className="absolute inset-0 z-0 block dark:hidden"
            style={{ background: activeLightBg }}
            aria-hidden
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block"
            style={{ background: activeDarkBg }}
            aria-hidden
          />
          <div className="absolute top-0 left-0 z-1 h-[2px] w-full">
            <div
              className="h-full bg-brand-accent transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      ) : null}

      <Icon
        className={cn(
          "relative z-1 h-5 w-5 shrink-0",
          isActive ? "text-ink" : "text-body",
        )}
        strokeWidth={2}
      />
      <div
        className={cn(
          "relative z-1 self-stretch text-sm font-semibold tracking-tight md:text-base",
          isActive ? "text-ink" : "text-ink",
        )}
      >
        {title}
      </div>
      <div className="relative z-1 line-clamp-3 min-h-12 self-stretch text-body-sm leading-relaxed text-muted">
        {blurb}
      </div>
    </button>
  );
}

export default function HomeHero() {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [leaveNoticeOpen, setLeaveNoticeOpen] = useState(false);
  const activeSlide = HERO_SLIDES[activeCard];
  const ActiveIcon = activeSlide.Icon;

  useEffect(() => {
    if (leaveNoticeOpen) return;

    const progressInterval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((current) => (current + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => window.clearInterval(progressInterval);
  }, [leaveNoticeOpen]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setProgress(0);
  };

  return (
    <section className="w-full bg-canvas">
      <div className="mx-auto max-w-7xl border-x border-hairline">
        {/* Intro — dot grid background */}
        <RevealSection className="relative flex flex-col items-center overflow-hidden px-5 pt-24 pb-10 text-center sm:px-6 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14">
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 70%)",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--primary) 28%, transparent) 1px, transparent 0)",
              backgroundSize: "10px 10px",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 70%)",
              opacity: 0.80,
            }}
          />

          <Reveal
            animationNum={0}
            className="relative z-10 flex w-full flex-col items-center"
          >
            <GoogleRatingBadge
              showLocation
              className="rounded-lg border border-dashed border-hairline bg-surface-card px-3 py-1 text-caption font-medium text-body shadow-[8px_2px_16px_-2px_rgba(0,0,0,0.08)] dark:shadow-[8px_2px_16px_-2px_rgba(0,0,0,0.35)]"
            />

            <h1 className="mt-6 max-w-4xl text-balance text-display-xl text-ink">
              Exhibition stands, corporate gifts, print & events - produced
              in-house in Dubai.
            </h1>
          </Reveal>

          <Reveal
            animationNum={1}
            as="p"
            className="relative z-10 mt-5 max-w-2xl text-body-md text-muted sm:text-[17px] sm:leading-7"
          >
            For twelve years we&apos;ve helped UAE brands get production right
            under one roof—so you&apos;re not juggling three vendors the week
            before go-live.
          </Reveal>

          <Reveal
            animationNum={2}
            className="relative z-10 mt-8 flex w-full flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/contact"
              className={accentButtonClasses("group w-full sm:w-auto")}
            >
              Request a quote
              <MessageForwardIcon className={contactButtonIconClasses} />
            </Link>
            <Link
              href="/services"
              className={softButtonClasses("group w-full sm:w-auto")}
            >
              Browse all services
              <ArrowRight className={buttonIconClasses} />
            </Link>
          </Reveal>
        </RevealSection>

        {/* Active service — grows on small screens so copy is not clipped */}
        <div className="relative min-h-[320px] overflow-hidden border-y border-hairline sm:min-h-[300px] lg:min-h-[280px]">
          <div
            className="absolute inset-0 z-0 block dark:hidden transition-[background] duration-500"
            style={{ background: activeSlide.activeLightBg }}
            aria-hidden
          />
          <div
            className="absolute inset-0 z-0 hidden dark:block transition-[background] duration-500"
            style={{ background: activeSlide.activeDarkBg }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto grid min-h-[inherit] max-w-7xl grid-cols-1 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:px-10">
            <div className="flex flex-col justify-center py-7 sm:py-8">
              <div className="flex items-center gap-3">
                <PastelIconBox color={activeSlide.iconColor} size="sm">
                  <ActiveIcon className="h-4 w-4" strokeWidth={2} />
                </PastelIconBox>
                <span className="text-caption font-medium text-muted ">
                  {activeSlide.label}
                </span>
              </div>

              <h2 className="mt-4 text-pretty text-display-sm text-ink font-pixel! sm:text-display-md">
                {activeSlide.title}
              </h2>

              <p className="mt-2 line-clamp-3 max-w-xl text-body-md leading-relaxed text-muted sm:line-clamp-2 sm:min-h-13 sm:leading-7">
                {activeSlide.description}
              </p>

              <button
                type="button"
                onClick={() => setLeaveNoticeOpen(true)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-accent underline group underline-offset-4 decoration-brand-accent decoration-dotted cursor-pointer"
                aria-label={`Explore ${activeSlide.title} on its dedicated site`}
              >
                <ExternalLinkIcon className="h-4 w-4 shrink-0" />
                <ShimmeringText
                  text="Explore this Service"
                  duration={1.4}
                  className="underline underline-offset-4 decoration-brand-accent decoration-dotted [--color:var(--ink)] [--shimmering-color:var(--brand-accent)]"
                />
              </button>
            </div>

            <div className="hidden flex-col justify-center border-l border-ink/15 pl-10 dark:border-white/20 lg:flex">
              <p className="font-mono text-caption text-muted">
                0{activeCard + 1} / 0{HERO_SLIDES.length}
              </p>
              <p className="mt-2 text-display-lg text-ink">{activeSlide.metric}</p>
              <p className="mt-1 max-w-40 text-body-sm text-muted">
                {activeSlide.metricLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Switcher tabs — equal height row */}
        <div className="flex items-stretch justify-center border-b border-hairline bg-surface-soft">
          <SideRails />

          <div className="grid min-w-0 flex-1 grid-cols-1 divide-y divide-dotted divide-hairline md:grid-cols-3 md:divide-x md:divide-y-0">
            {HERO_SLIDES.map((slide, index) => (
              <FeatureTab
                key={slide.shortTitle}
                title={slide.shortTitle}
                blurb={slide.tabBlurb}
                Icon={slide.Icon}
                isActive={activeCard === index}
                progress={activeCard === index ? progress : 0}
                activeLightBg={slide.activeLightBg}
                activeDarkBg={slide.activeDarkBg}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>

          <SideRails />
        </div>
      </div>

      <ExternalSiteNoticeModal
        open={leaveNoticeOpen}
        onClose={() => setLeaveNoticeOpen(false)}
        serviceName={activeSlide.title}
        externalUrl={activeSlide.externalUrl}
      />
    </section>
  );
}
