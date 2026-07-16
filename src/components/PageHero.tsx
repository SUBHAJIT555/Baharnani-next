"use client";

import {
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
import { SectionEyebrow, sectionInnerHeroClass } from "@/components/ui/Section";
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

export type PageHeroIcon = keyof typeof ICONS;

type PageHeroProps = {
  eyebrow?: string;
  eyebrowIcon?: PageHeroIcon;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  children,
}: PageHeroProps) {
  const Icon: LucideIcon | undefined = eyebrowIcon
    ? ICONS[eyebrowIcon]
    : undefined;

  return (
    <section className="w-full bg-canvas">
      <RevealSection className={sectionInnerHeroClass}>
        {eyebrow ? (
          <Reveal animationNum={0}>
            <SectionEyebrow icon={Icon}>{eyebrow}</SectionEyebrow>
          </Reveal>
        ) : null}
        <Reveal
          animationNum={1}
          as="h1"
          className={cn("text-display-lg text-ink", eyebrow && "mt-5")}
        >
          {title}
        </Reveal>
        {description ? (
          <Reveal
            animationNum={2}
            as="p"
            className="mt-4 max-w-2xl text-body-md text-muted sm:text-[17px] sm:leading-7"
          >
            {description}
          </Reveal>
        ) : null}
        {children ? (
          <Reveal animationNum={3} className="mt-8">
            {children}
          </Reveal>
        ) : null}
      </RevealSection>
    </section>
  );
}
