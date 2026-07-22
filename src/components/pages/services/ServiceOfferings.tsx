"use client";

import type { HTMLAttributes } from "react";
import Image from "next/image";
import { EMOJI } from "@/components/icons/EmojiIcon";
import {
  BikeIcon,
  BuildingPavilionIcon,
  FileTypographyIcon,
  LayersSelectedIcon,
  type ServiceIconComponent,
} from "@/components/icons/ServiceIcons";
import { CheckItemText } from "@/components/ui/CheckItemText";
import { FeaturedIcon } from "@/components/ui/FeaturedIcon";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import type {
  ServiceOfferingIcon,
  ServicePageContent,
} from "@/lib/service-pages";
import { cn } from "@/lib/utils";

const OFFERING_ICONS: Record<
  ServiceOfferingIcon,
  ServiceIconComponent | string
> = {
  printer: FileTypographyIcon,
  shirt: "👕",
  layers: LayersSelectedIcon,
  cylinder: "🛢️",
  flame: "🔥",
  droplets: "💧",
  sun: EMOJI.sun,
  gem: "💎",
  box: BuildingPavilionIcon,
  bike: BikeIcon,
  calendar: BuildingPavilionIcon,
  sparkles: EMOJI.sparkles,
  hardhat: "⛑️",
  hand: "✋",
  shield: EMOJI.shield,
  "shield-check": EMOJI.shield,
  bag: "👜",
  uniform: "👔",
  presentation: "📊",
  rocket: "🚀",
  users: "👥",
  type: "🔤",
};

function AlternateImageMockup({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "size-full rounded-[9px] bg-canvas p-[0.9px] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08),0_12px_24px_-12px_rgba(0,0,0,0.12)] ring-1 ring-inset ring-hairline md:rounded-[20px] md:p-0.5 dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.4),0_12px_24px_-12px_rgba(0,0,0,0.55)]",
        className,
      )}
      {...props}
    >
      <div className="size-full rounded-[8px] bg-surface-soft p-0.5 md:rounded-[17px] md:p-[3.5px] dark:bg-surface-card">
        <div className="relative size-full overflow-hidden rounded-[7px] ring-1 ring-hairline md:rounded-[15px]">
          {children}
        </div>
      </div>
    </div>
  );
}

type ServiceOfferingsProps = {
  content: NonNullable<ServicePageContent["offerings"]>;
};

export default function ServiceOfferings({ content }: ServiceOfferingsProps) {
  return (
    <section className="w-full overflow-hidden bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-6 sm:px-6 sm:py-6 md:px-8 md:py-6">
        <Reveal
          animationNum={0}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <h2 className="text-pretty text-display-sm text-ink md:text-display-md">
            {content.title}
          </h2>
          {content.description ? (
            <p className="mt-4 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
              {content.description}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 flex flex-col gap-12 sm:mt-16 sm:gap-16 md:mt-20 md:gap-20 lg:gap-24">
          {content.items.map((item, index) => {
            const icon = OFFERING_ICONS[item.icon];
            const imageOnLeft = index % 2 === 1;

            return (
              <div
                key={item.title}
                className="grid grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  animationNum={index * 2 + 1}
                  className={cn(
                    "max-w-xl self-center",
                    imageOnLeft && "lg:order-last",
                  )}
                >
                  <FeaturedIcon
                    icon={icon}
                    size="lg"
                    color="brand"
                    theme="modern-neue"
                  />
                  <h3 className="mt-5 text-pretty text-xl font-semibold tracking-tight text-ink sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
                    {item.description}
                  </p>
                  <ul className="mt-7 flex flex-col gap-3.5 sm:mt-8 sm:gap-4">
                    {item.points.map((point) => (
                      <CheckItemText key={point} text={point} />
                    ))}
                  </ul>
                </Reveal>


                

                <Reveal
                  animationNum={index * 2 + 2}
                  className="relative aspect-4/3 w-full lg:aspect-auto lg:h-80 xl:h-96"
                >
                  <AlternateImageMockup className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </AlternateImageMockup>
                </Reveal>
              </div>
            );
          })}
        </div>
      </RevealSection>
    </section>
  );
}
