"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/Section";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

export default function AboutSection() {
  return (
    <section className="w-full bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-hairline">
          <Reveal
            animationNum={0}
            as="article"
            className="px-5 py-10 sm:px-6 md:col-span-2 md:px-8 md:py-14"
          >
            <SectionEyebrow icon={Sparkles}>About Baharnani</SectionEyebrow>
            <h2 className="mt-5 text-pretty text-display-sm text-ink md:text-display-md">
              Where Creativity Meets Innovation in Advertising
            </h2>

            <div className="mt-6 space-y-4 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
              <p>
                Since 2012, Baharnani Advertising has been redefining the marketing
                landscape as a dynamic advertising agency in Dubai, helping businesses
                elevate their brand presence across the Middle East. We don&apos;t just
                offer services—we craft experiences that leave a lasting impact.
              </p>
              <p>
                With our state-of-the-art printing services in Dubai, advanced acrylic
                fabrication in Dubai, and bespoke signage solutions in Dubai, we bring
                creative concepts to life with precision and innovation. Our in-house
                production facilities ensure that every project meets the highest
                standards, reinforcing brand identity with impeccable execution.
              </p>
              <p>
                At Baharnani, we understand that no two brands are the same. Whether
                it&apos;s custom printing in UAE, exclusive corporate gifts in Dubai, or
                immersive event management in Dubai, our tailor-made solutions align with
                your business objectives, helping you make a bold statement in a
                competitive marketplace.
              </p>
              <p>
                As a leading marketing agency in Dubai, we blend strategic expertise with
                creative execution, specializing in BTL marketing, exhibition stand design
                in UAE, brand activations, and corporate gift solutions.
              </p>
            </div>
          </Reveal>

          <Reveal
            animationNum={1}
            as="article"
            className="relative flex min-h-[220px] items-center justify-center p-6 md:col-span-1 md:min-h-[320px] md:p-6"
          >
            <Image
              src="/images/HomePage/brand-deal.svg"
              alt="Baharnani partnership and brand collaboration"
              fill
              className="object-contain p-4 md:p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </RevealSection>
    </section>
  );
}
