"use client";

import type { LucideIcon } from "lucide-react";
import {
  Bike,
  Box,
  Gift,
  Laptop,
  Layers,
  Printer,
} from "lucide-react";
import { GlowCard, GlowCardGrid } from "@/components/glow-card-grid";
import { SectionEyebrow } from "@/components/ui/Section";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

type ShowcaseCard = {
  name: string;
  handle: string;
  href: string;
  Icon: LucideIcon;
  glowColor: string;
  /** Resting glow position so mobile shows a “hover” bloom in different corners */
  glowX: number;
  glowY: number;
};

/** Six home showcase cards — Event Management + Exhibition Stand combined. */
const SERVICE_CARDS: ShowcaseCard[] = [
  {
    name: "Event Management & Exhibition Stands",
    handle:
      "End-to-end events plus custom stand design, build, and install across DWTC, ADNEC, Sharjah, and UAE venues.",
    href: "/services/exhibition-stand",
    Icon: Box,
    glowColor: "#A78BFA",
    glowX: 0.7,
    glowY: -0.55,
  },
  {
    name: "Corporate Gifts",
    handle:
      "Luxury and promotional gifts for clients, employees, and partners—curated, branded, and delivered UAE-wide.",
    href: "/services/corporate-gifts",
    Icon: Gift,
    glowColor: "#34D399",
    glowX: -0.65,
    glowY: 0.45,
  },
  {
    name: "Printing Services",
    handle:
      "In-house commercial and promotional printing—marketing materials, packaging, and large-format graphics.",
    href: "/services/printing",
    Icon: Printer,
    glowColor: "#FBBF24",
    glowX: 0.25,
    glowY: 0.7,
  },
  {
    name: "Creative Agency",
    handle:
      "Websites, apps, UI/UX, and interactive kiosk experiences through Code Cobble.",
    href: "/services/creative-agency",
    Icon: Laptop,
    glowColor: "#38BDF8",
    glowX: -0.55,
    glowY: -0.5,
  },
  {
    name: "Rider Equipment",
    handle:
      "Custom-branded rider kits and field equipment that put your logo in motion.",
    href: "/services/rider-equipment",
    Icon: Bike,
    glowColor: "#FB923C",
    glowX: 0.6,
    glowY: 0.35,
  },
  {
    name: "Acrylic Fabrication & Joinery",
    handle:
      "Premium acrylic displays, signage, and joinery crafted in-house for retail and exhibitions.",
    href: "/services/acrylic-fabrication",
    Icon: Layers,
    glowColor: "#F472B6",
    glowX: -0.3,
    glowY: -0.7,
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="w-full overflow-x-hidden bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-6">
        <Reveal
          animationNum={0}
          className="mb-8 grid grid-cols-1 gap-4 lg:mb-10 lg:grid-cols-12 lg:gap-8"
        >
          <div className="lg:col-span-5">
            <SectionEyebrow icon={Layers}>Services</SectionEyebrow>
            <h2 className="mt-4 text-display-md text-ink">
              Explore Baharnani Services in Dubai for Every Business Need.
            </h2>
          </div>

          <div className="flex items-start lg:col-span-7 lg:pt-11">
            <p className="text-body-md text-muted lg:text-[17px] lg:leading-7">
              From exhibition stands and corporate gifts to printing, acrylic
              fabrication, rider equipment, event management, and creative
              digital through Code Cobble—Baharnani covers the full brand stack
              under one roof across Dubai and the UAE.
            </p>
          </div>
        </Reveal>

        <Reveal animationNum={1}>
          <GlowCardGrid
            iconOpacity={0.5}
            iconSaturate={6.5}
            iconBrightness={1.45}
            iconScale={4.2}
          >
            {SERVICE_CARDS.map((card) => (
              <GlowCard
                key={card.name}
                name={card.name}
                handle={card.handle}
                href={card.href}
                glowColor={card.glowColor}
                glowX={card.glowX}
                glowY={card.glowY}
                icon={<card.Icon strokeWidth={2} />}
              />
            ))}
          </GlowCardGrid>
        </Reveal>
      </RevealSection>
    </section>
  );
}
