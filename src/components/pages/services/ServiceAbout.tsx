"use client";

import { EMOJI } from "@/components/icons/EmojiIcon";
import { FeaturedIcon } from "@/components/ui/FeaturedIcon";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import type { ServicePageContent } from "@/lib/service-pages";
import { cn } from "@/lib/utils";

type ServiceAboutProps = {
  content: ServicePageContent["about"];
};

export default function ServiceAbout({ content }: ServiceAboutProps) {
  const highlights = content.highlights ?? [];

  return (
    <section className="w-full bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline">
        <div
          className={cn(
            "grid grid-cols-1",
            highlights.length > 0 && "md:grid-cols-3 md:divide-x md:divide-hairline",
          )}
        >
          <Reveal
            animationNum={0}
            as="article"
            className={cn(
              "px-5 py-6 sm:px-6 md:px-8 md:py-6",
              highlights.length > 0 ? "md:col-span-2" : "md:mx-auto md:max-w-3xl",
            )}
          >
            <h2 className="text-pretty text-display-sm text-ink md:text-display-md">
              {content.title}
            </h2>

            {content.subtitle ? (
              <p className="mt-3 text-lg font-medium tracking-tight text-ink/80 sm:text-xl">
                {content.subtitle}
              </p>
            ) : null}

            <div className="mt-6 space-y-4 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {highlights.length > 0 ? (
            <Reveal
              animationNum={1}
              as="aside"
              className="flex flex-col justify-center px-5 py-6 sm:px-6 md:col-span-1 md:px-7 md:py-6"
            >
              <p className="mb-5 text-caption font-medium tracking-wide text-muted uppercase">
                Why Baharnani
              </p>

              <ul className="divide-y divide-dashed divide-hairline border-t border-dashed border-hairline">
                {highlights.map((item) => (
                  <li key={item.label} className="flex gap-3 py-4 first:pt-4 last:pb-4">
                    <FeaturedIcon
                      color="brand"
                      icon={EMOJI.check}
                      theme="modern-neue"
                      size="sm"
                      className="mt-0.5"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight text-ink">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>
      </RevealSection>
    </section>
  );
}
