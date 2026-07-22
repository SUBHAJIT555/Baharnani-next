"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { GlowCard, GlowCardGrid } from "@/components/glow-card-grid";
import {
  BikeIcon,
  BuildingPavilionIcon,
  CodeIcon,
  FileTypographyIcon,
  GiftIcon,
  LayersSelectedIcon,
} from "@/components/icons/ServiceIcons";
import { ExternalSiteNoticeModal } from "@/components/ui/ExternalSiteNoticeModal";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

type ServiceIcon = ComponentType<SVGProps<SVGSVGElement>>;

type ShowcaseCard = {
  name: string;
  handle: string;
  href: string;
  Icon: ServiceIcon;
  glowColor: string;
  externalUrl?: string;
  glowX: number;
  glowY: number;
};

const SERVICE_CARDS: ShowcaseCard[] = [
  {
    name: "Event Management & Exhibition Stands",
    handle:
      "End-to-end events plus custom stand design, build, and install across DWTC, ADNEC, Sharjah, and UAE venues.",
    href: "/services/exhibition-stand",
    externalUrl: "https://exhibitionstandsuae.ae/",
    Icon: BuildingPavilionIcon,
    glowColor: "#A78BFA",
    glowX: 0.7,
    glowY: -0.55,
  },
  {
    name: "Corporate Gifts",
    handle:
      "Luxury and promotional gifts for clients, employees, and partners—curated, branded, and delivered UAE-wide.",
    href: "/services/corporate-gifts",
    externalUrl: "https://corporategiftsdubaii.ae/",
    Icon: GiftIcon,
    glowColor: "#34D399",
    glowX: -0.65,
    glowY: 0.45,
  },
  {
    name: "Printing Services",
    handle:
      "In-house commercial and promotional printing—marketing materials, packaging, and large-format graphics.",
    href: "/services/printing",
    Icon: FileTypographyIcon,
    glowColor: "#FBBF24",
    glowX: 0.25,
    glowY: 0.7,
  },
  {
    name: "Creative Agency",
    handle:
      "Websites, apps, UI/UX, and interactive kiosk experiences through Code Cobble.",
    href: "/services/creative-agency",
    externalUrl: "https://codecobble.com/",
    Icon: CodeIcon,
    glowColor: "#38BDF8",
    glowX: -0.55,
    glowY: -0.5,
  },
  {
    name: "Rider Equipment",
    handle:
      "Custom-branded rider kits and field equipment that put your logo in motion.",
    href: "/services/rider-equipment",
    Icon: BikeIcon,
    glowColor: "#FB923C",
    glowX: 0.6,
    glowY: 0.35,
  },
  {
    name: "Acrylic Fabrication",
    handle:
      "Premium acrylic displays, signage, and joinery crafted in-house for retail and exhibitions.",
    href: "/services/acrylic-fabrication",
    Icon: LayersSelectedIcon,
    glowColor: "#F472B6",
    glowX: -0.3,
    glowY: -0.7,
  },
];

export default function HomeServices() {
  const [externalNotice, setExternalNotice] = useState<{
    name: string;
    url: string;
  } | null>(null);

  return (
    <section id="services" className="w-full overflow-x-hidden bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-6">
        <Reveal
          animationNum={0}
          className="mb-8 grid grid-cols-1 gap-4 lg:mb-10 lg:grid-cols-12 lg:gap-8"
        >
          <div className="lg:col-span-5">
            <h2 className="text-pretty text-display-sm text-ink md:text-display-md">
              Explore Baharnani Services in Dubai for Every Business Need.
            </h2>
          </div>

          <div className="flex items-start lg:col-span-7">
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
                href={card.externalUrl ? undefined : card.href}
                onClick={
                  card.externalUrl
                    ? () =>
                        setExternalNotice({
                          name: card.name,
                          url: card.externalUrl!,
                        })
                    : undefined
                }
                glowColor={card.glowColor}
                glowX={card.glowX}
                glowY={card.glowY}
                external={Boolean(card.externalUrl)}
                icon={<card.Icon className="size-5" />}
              />
            ))}
          </GlowCardGrid>
        </Reveal>
      </RevealSection>

      <ExternalSiteNoticeModal
        open={Boolean(externalNotice)}
        onClose={() => setExternalNotice(null)}
        serviceName={externalNotice?.name ?? ""}
        externalUrl={externalNotice?.url ?? ""}
      />
    </section>
  );
}
