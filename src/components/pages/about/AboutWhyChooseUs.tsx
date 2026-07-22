"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

const REASONS = [
  {
    value: "in-house",
    title: "In-house production under one roof",
    content:
      "Print, acrylic fabrication, signage, stands, gifts, and events are handled by one Dubai team on Sheikh Zayed Road—tighter quality control, clearer timelines, and fewer handoffs before go-live.",
  },
  {
    value: "tailored",
    title: "Tailored solutions for every brand",
    content:
      "No two brands share the same goals. We scope custom printing, gifting tiers, exhibition layouts, and event flows around your audience, budget, and compliance needs—so every deliverable feels built for you.",
  },
  {
    value: "venues",
    title: "Venue-ready delivery across the UAE",
    content:
      "Our install and logistics teams know DWTC, ADNEC, Expo Centre Sharjah, and corporate sites. We coordinate delivery, rigging, and on-site fixes with a single point of contact on the ground.",
  },
  {
    value: "expertise",
    title: "Strategic expertise with creative execution",
    content:
      "As a marketing agency in Dubai since 2012, we blend BTL strategy with hands-on production—exhibition stand design, brand activations, corporate gifts, and commercial print that hold up on the show floor.",
  },
  {
    value: "accountability",
    title: "One accountable project partner",
    content:
      "You get clear ownership from brief to install. Shared artwork standards, colour control, and one production team keep branding consistent across booths, boxes, and on-site materials.",
  },
] as const;

export default function AboutWhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full scroll-mt-24 bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <Reveal animationNum={0} className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-display-sm text-ink md:text-display-md">
            Why brands choose Baharnani
          </h2>
          <p className="mt-4 text-body-md text-muted sm:text-[17px] sm:leading-7">
            Choosing the right advertising partner shapes how your brand shows up
            at events, in gifts, and in print. Here&apos;s what makes Baharnani a
            reliable choice across Dubai and the UAE.
          </p>
        </Reveal>

        <Reveal animationNum={1} className="mx-auto mt-10 w-full max-w-5xl sm:mt-12">
          <Accordion
            type="single"
            collapsible
            defaultValue={REASONS[0].value}
            className="w-full px-1 py-2 sm:px-4 md:px-8"
          >
            {REASONS.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="py-5 text-body-md font-semibold text-ink hover:no-underline sm:py-6 sm:text-[17px] md:text-title-md">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-body-sm leading-relaxed text-muted sm:pb-6 sm:text-body-md sm:leading-7">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </RevealSection>
    </section>
  );
}
