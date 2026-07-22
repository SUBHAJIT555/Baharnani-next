"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import { WhatsAppOutlineIcon } from "@/components/icons/WhatsAppIcon";
import MagicRings from "@/components/ui/MagicRings";
import { useQuoteRequest } from "@/components/ui/QuoteRequestProvider";
import {
  accentButtonClasses,
  buttonIconClasses,
  contactButtonIconClasses,
  darkButtonClasses,
  softButtonClasses,
  type ButtonVariant,
} from "@/components/ui/button";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";

const GRID_LINE = "color-mix(in srgb, var(--primary) 22%, transparent)";

export type PageHeroIcon =
  | "bike"
  | "briefcase"
  | "building"
  | "calendar"
  | "cookie"
  | "file"
  | "layers"
  | "mail"
  | "newspaper"
  | "scale"
  | "shield"
  | "sparkles";

export type PageHeroAction = {
  label: string;
  href?: string;
  /** Opens the sitewide quote request modal instead of navigating. */
  openQuote?: boolean;
  variant?: ButtonVariant;
  icon?: "arrow" | "contact" | "whatsapp";
  /** Pre-select a service checkbox when opening the quote modal. */
  quoteServiceId?: string;
};

export type PageHeroProps = {
  /** @deprecated Eyebrow badges are no longer rendered. */
  eyebrow?: string;
  /** @deprecated Eyebrow badges are no longer rendered. */
  eyebrowIcon?: PageHeroIcon;
  title: string;
  /** Highlighted word(s) in brand accent — shown inline after `title`. */
  titleAccent?: string;
  /** Second headline line under the main title. */
  subtitle?: string;
  description?: string;
  primaryAction?: PageHeroAction;
  secondaryAction?: PageHeroAction;
  children?: React.ReactNode;
  compact?: boolean;
  className?: string;
};

function useIsDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

function PageHeroBackground() {
  const isDark = useIsDarkMode();

  const gridStyle = {
    backgroundImage: `
      linear-gradient(90deg, ${GRID_LINE} 1px, transparent 0),
      linear-gradient(180deg, ${GRID_LINE} 1px, transparent 0),
      repeating-linear-gradient(45deg, ${GRID_LINE}, transparent 2px 10px)
    `,
    backgroundSize: "24px 24px, 24px 24px, 24px 24px",
    WebkitMaskImage:
      "radial-gradient(ellipse 88% 72% at 50% 48%, transparent 0%, transparent 40%, black 100%)",
    maskImage:
      "radial-gradient(ellipse 88% 72% at 50% 48%, transparent 0%, transparent 40%, black 100%)",
  } as const;

  const edgeFadeStyle = {
    background:
      "linear-gradient(to bottom, color-mix(in srgb, var(--canvas) 55%, transparent) 0%, transparent 8%, transparent 68%, color-mix(in srgb, var(--canvas) 85%, transparent) 88%, var(--canvas) 100%)",
  } as const;

  const rings = isDark
    ? {
        color: "#60a5fa",
        colorTwo: "#38bdf8",
        opacity: 0.55,
        attenuation: 12,
        lineThickness: 1.4,
        noiseAmount: 0.3,
        ringCount: 6,
      }
    : {
        color: "#3b82f6",
        colorTwo: "#60a5fa",
        opacity: 0.46,
        attenuation: 15,
        lineThickness: 1.25,
        noiseAmount: 0.06,
        ringCount: 6,
      };

  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-canvas" aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center opacity-50 dark:opacity-100">
        <div className="absolute inset-0 scale-110 sm:scale-100">
          <MagicRings
            color={rings.color}
            colorTwo={rings.colorTwo}
            ringCount={rings.ringCount}
            speed={1.5}
            attenuation={rings.attenuation}
            lineThickness={rings.lineThickness}
            baseRadius={0.15}
            radiusStep={0.09}
            scaleRate={0.08}
            opacity={rings.opacity}
            blur={0.5}
            noiseAmount={rings.noiseAmount}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={false}
            clickBurst={false}
            hoverScale={1}
            parallax={0}
          />
        </div>
      </div>
      {!isDark ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 48% 40% at 50% 42%, color-mix(in srgb, var(--canvas) 38%, transparent) 0%, transparent 68%)",
          }}
        />
      ) : null}
      <div className="absolute inset-0" style={gridStyle} />
      <div className="absolute inset-0" style={edgeFadeStyle} />
    </div>
  );
}

function actionButtonClasses(variant: ButtonVariant = "dark") {
  if (variant === "dark") return darkButtonClasses("group w-full sm:w-auto");
  if (variant === "accent") return accentButtonClasses("group w-full sm:w-auto");
  return softButtonClasses("group w-full sm:w-auto");
}

function PageHeroActionLink({ action }: { action: PageHeroAction }) {
  const { openQuoteRequest } = useQuoteRequest();
  const variant = action.variant ?? "accent";
  const icon =
    action.icon === "contact" ? (
      <MessageForwardIcon className={contactButtonIconClasses} />
    ) : action.icon === "whatsapp" ? (
      <WhatsAppOutlineIcon className={buttonIconClasses} />
    ) : action.icon === "arrow" ? (
      <ArrowUpRightIcon className={buttonIconClasses} />
    ) : null;

  const className = actionButtonClasses(variant);

  if (action.openQuote) {
    return (
      <button
        type="button"
        onClick={() => openQuoteRequest(action.quoteServiceId)}
        className={className}
      >
        {action.label}
        {icon}
      </button>
    );
  }

  const href = action.href ?? "/contact";
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {action.label}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {action.label}
      {icon}
    </Link>
  );
}

export function PageHero({
  title,
  titleAccent,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  children,
  compact = false,
  className,
}: PageHeroProps) {
  const hasActions = primaryAction || secondaryAction || children;

  const paddingClass = compact
    ? "px-5 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12"
    : "px-5 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20";

  return (
    <section className={cn("w-full bg-canvas", className)}>
      <RevealSection className="relative mx-auto max-w-7xl overflow-hidden border-x border-hairline">
        <PageHeroBackground />

        <div
          className={cn(
            "relative z-10 mx-auto max-w-3xl text-center",
            paddingClass,
          )}
        >
          <Reveal animationNum={0} as="h1">
            <span className="max-w-4xl text-balance text-display-xl text-ink">
              {title}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="text-brand-accent">{titleAccent}</span>
                </>
              ) : null}
            </span>
            {subtitle ? (
              <span className="mt-3 block text-balance text-display-lg text-ink sm:text-display-md">
                {subtitle}
              </span>
            ) : null}
          </Reveal>

          {description ? (
            <Reveal
              animationNum={1}
              as="p"
              className="mx-auto mt-5 max-w-2xl text-body-md leading-relaxed text-muted sm:mt-6 sm:text-[17px] sm:leading-7"
            >
              {description}
            </Reveal>
          ) : null}

          {hasActions ? (
            <Reveal
              animationNum={description ? 2 : 1}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              {primaryAction ? (
                <PageHeroActionLink
                  action={{
                    ...primaryAction,
                    variant: primaryAction.variant ?? "accent",
                    icon:
                      primaryAction.icon ??
                      (primaryAction.openQuote ||
                      primaryAction.href === "/contact"
                        ? "contact"
                        : "arrow"),
                  }}
                />
              ) : null}
              {secondaryAction ? (
                <PageHeroActionLink
                  action={{
                    ...secondaryAction,
                    variant: secondaryAction.variant ?? "soft",
                    icon: secondaryAction.icon ?? "arrow",
                  }}
                />
              ) : null}
              {children}
            </Reveal>
          ) : null}
        </div>
      </RevealSection>
    </section>
  );
}
