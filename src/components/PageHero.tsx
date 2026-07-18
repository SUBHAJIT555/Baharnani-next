"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Cookie,
  FileText,
  Layers,
  Mail,
  Newspaper,
  Scale,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import { WhatsAppOutlineIcon } from "@/components/icons/WhatsAppIcon";
import { SectionEyebrow } from "@/components/ui/Section";
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

const ICONS = {
  briefcase: Briefcase,
  building: Building2,
  cookie: Cookie,
  file: FileText,
  layers: Layers,
  mail: Mail,
  newspaper: Newspaper,
  scale: Scale,
  shield: Shield,
  sparkles: Sparkles,
} as const;

const GRID_LINE = "color-mix(in srgb, var(--primary) 22%, transparent)";

export type PageHeroIcon = keyof typeof ICONS;

export type PageHeroAction = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  icon?: "arrow" | "contact" | "whatsapp";
};

export type PageHeroProps = {
  eyebrow?: string;
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

function PageHeroBackground() {
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

  return (
    <div className="pointer-events-none absolute inset-0 z-0 bg-canvas" aria-hidden>
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
  const variant = action.variant ?? "accent";
  const isExternal = /^https?:\/\//.test(action.href);
  const icon =
    action.icon === "contact" ? (
      <MessageForwardIcon className={contactButtonIconClasses} />
    ) : action.icon === "whatsapp" ? (
      <WhatsAppOutlineIcon className={buttonIconClasses} />
    ) : action.icon === "arrow" ? (
      <ArrowRight className={buttonIconClasses} />
    ) : null;

  const className = actionButtonClasses(variant);

  if (isExternal) {
    return (
      <a
        href={action.href}
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
    <Link href={action.href} className={className}>
      {action.label}
      {icon}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  eyebrowIcon,
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
  const Icon: LucideIcon | undefined = eyebrowIcon ? ICONS[eyebrowIcon] : undefined;
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
          {eyebrow ? (
            <Reveal animationNum={0}>
              <SectionEyebrow icon={Icon} className="mx-auto">
                {eyebrow}
              </SectionEyebrow>
            </Reveal>
          ) : null}

          <Reveal
            animationNum={eyebrow ? 1 : 0}
            as="h1"
            className={cn(eyebrow ? "mt-6" : undefined)}
          >
            <span className="mt-6 max-w-4xl text-balance text-display-xl text-ink">
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
              animationNum={eyebrow ? 2 : 1}
              as="p"
              className="mx-auto mt-5 max-w-2xl text-body-md leading-relaxed text-muted sm:mt-6 sm:text-[17px] sm:leading-7"
            >
              {description}
            </Reveal>
          ) : null}

          {hasActions ? (
            <Reveal
              animationNum={
                eyebrow ? (description ? 3 : 2) : description ? 2 : 1
              }
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              {primaryAction ? (
                <PageHeroActionLink
                  action={{
                    ...primaryAction,
                    variant: primaryAction.variant ?? "accent",
                    icon:
                      primaryAction.icon ??
                      (primaryAction.href === "/contact" ? "contact" : "arrow"),
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
