"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BikeIcon,
  BuildingPavilionIcon,
  CodeIcon,
  FileTypographyIcon,
  GiftIcon,
  LayersSelectedIcon,
  type ServiceIconComponent,
} from "@/components/icons/ServiceIcons";
import {
  accentButtonClasses,
  buttonIconClasses,
} from "@/components/ui/button";
import { ExternalSiteNoticeModal } from "@/components/ui/ExternalSiteNoticeModal";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";

type ServiceCategory = {
  slug: string;
  href: string;
  heading: string;
  paragraph: ReactNode;
  points: string[];
  image: string;
  Icon: ServiceIconComponent;
  externalUrl?: string;
};

function Em({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium text-ink underline decoration-brand-accent decoration-dotted underline-offset-4">
      {children}
    </span>
  );
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "exhibition-stand",
    href: "/services/exhibition-stand",
    heading: "Exhibition Stands",
    paragraph: (
      <>
        We design, fabricate, and install{" "}
        <Em>custom exhibition stands</Em> that pull visitors in and keep your
        brand memorable on the show floor. From modular booths to{" "}
        <Em>double-deck builds</Em>, every project covers concept,{" "}
        <Em>3D visuals</Em>, engineering drawings, and on-site install at{" "}
        <Em>DWTC, ADNEC, Expo Centre Sharjah</Em>, and venues across Dubai,
        Sharjah, and Abu Dhabi—with dismantle handled when the show closes.
      </>
    ),
    points: [
      "Concept development, photorealistic 3D visuals, and fabrication-ready drawings",
      "In-house carpentry, graphics, and lighting—built to venue and brand guidelines",
      "Full on-site install, technical support during the show, and clean dismantle",
    ],
    image: "/images/services/exhibition-stand.webp",
    Icon: BuildingPavilionIcon,
    externalUrl: "https://exhibitionstandsuae.ae/",
  },
  {
    slug: "corporate-gifts",
    href: "/services/corporate-gifts",
    heading: "Corporate Gifts",
    paragraph: (
      <>
        Curated <Em>corporate gifts</Em> and <Em>executive hampers</Em> that
        feel intentional—whether you are thanking a client, onboarding a team,
        or launching a campaign. We help you pick the right tier, apply your{" "}
        <Em>branding</Em> cleanly, and deliver across{" "}
        <Em>Dubai and the wider UAE</Em> so every piece arrives on time and on
        brand.
      </>
    ),
    points: [
      "Luxury sets, promotional merch, and seasonal hampers matched to your budget",
      "Laser engraving, embroidery, UV print, and embossing with sample approval",
      "Bulk ordering, gift packaging, and scheduled UAE-wide delivery",
    ],
    image: "/images/services/corporate-gifts.webp",
    Icon: GiftIcon,
    externalUrl: "https://corporategiftsdubaii.ae/",
  },
  {
    slug: "creative-agency",
    href: "/services/creative-agency",
    heading: "Creative Agency",
    paragraph: (
      <>
        Through <Em>Code Cobble</Em>, we build digital products that look sharp
        and work hard—
        <Em>marketing sites</Em>, <Em>web apps</Em>, UI/UX systems, and{" "}
        <Em>interactive experiences</Em> for exhibitions and events. From first
        wireframe to launch, the focus stays on clarity, speed, and{" "}
        <Em>conversion</Em> so your brand performs online and on the show floor.
      </>
    ),
    points: [
      "Custom websites, web apps, and end-to-end UI/UX design",
      "Interactive kiosk games and engagement tech for exhibitions and events",
      "Performance, accessibility, and launch support after go-live",
    ],
    image: "/images/services/creative-agency.webp",
    Icon: CodeIcon,
    externalUrl: "https://codecobble.com/",
  },
  {
    slug: "printing",
    href: "/services/printing",
    heading: "Printing Services",
    paragraph: (
      <>
        <Em>In-house commercial and promotional printing</Em> with colour
        accuracy you can trust before show day. We produce brochures, packaging,
        business stationery, roll-ups, banners, and{" "}
        <Em>large-format graphics</Em>
        —proofed, finished, and ready for retail floors, exhibitions, and
        campaign launches across the <Em>UAE</Em>.
      </>
    ),
    points: [
      "Offset and digital runs for collateral, packaging, and stationery",
      "Large-format banners, wall wraps, roll-ups, and exhibition graphics",
      "Colour proofs, finishing options, and quality checks before every delivery",
    ],
    image: "/images/services/printing.webp",
    Icon: FileTypographyIcon,
  },
  {
    slug: "rider-equipment",
    href: "/services/rider-equipment",
    heading: "Rider Equipment",
    paragraph: (
      <>
        <Em>Custom-branded rider kits</Em> and field gear that turn every
        delivery and activation into <Em>mobile brand exposure</Em>. We kit out
        jackets, bags, helmets, and accessories for comfort in Dubai&apos;s
        climate—durable enough for daily use, finished so your{" "}
        <Em>logo stays sharp</Em> mile after mile.
      </>
    ),
    points: [
      "Full kit design: apparel, bags, helmets, and campaign accessories",
      "Weather-ready materials and finishes built for daily field use",
      "Logo placement, colour matching, and volume production for fleets",
    ],
    image: "/images/services/rider-equipment.webp",
    Icon: BikeIcon,
  },
  {
    slug: "acrylic-fabrication",
    href: "/services/acrylic-fabrication",
    heading: "Acrylic Fabrication",
    paragraph: (
      <>
        Precision <Em>acrylic displays</Em>, illuminated letters, counters, and{" "}
        <Em>joinery</Em> crafted in-house to your drawings and brand specs.
        Ideal for <Em>retail fit-outs</Em>, exhibition features, reception
        desks, and product showcases—cut, bonded, and finished so edges stay
        clean and installations look premium on day one.
      </>
    ),
    points: [
      "Custom acrylic displays, logos, letters, and product stands",
      "Joinery for counters, plinths, and branded furniture pieces",
      "CNC cutting, polishing, lighting integration, and site install",
    ],
    image: "/images/services/acrylic-fabrication.webp",
    Icon: LayersSelectedIcon,
  },
  {
    slug: "event-management",
    href: "/services/event-management",
    heading: "Event Management",
    paragraph: (
      <>
        End-to-end management for <Em>corporate launches</Em>, conferences,{" "}
        <Em>brand activations</Em>, and private functions across{" "}
        <Em>Dubai and the GCC</Em>. One accountable team owns the brief—venue,
        production, vendors, staffing, and show-day run-of-show—so you stay
        focused on guests while we keep every detail on timeline.
      </>
    ),
    points: [
      "Concept, budgeting, venue sourcing, and full production planning",
      "Vendor coordination for AV, staging, catering, and décor",
      "On-site direction, staffing, and a single point of contact through close",
    ],
    image: "/images/services/event-management.webp",
    Icon: BuildingPavilionIcon,
  },
];

function PointerCollaborationIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.987 13.943l1.957 5.016c.563 1.445 2.633 1.367 3.087 -.116l3.895 -12.727c.384 -1.253-.79 -2.426 -2.042 -2.042l-12.727 3.895c-1.483 .454 -1.56 2.524-.116 3.087l5.017 1.957c.426 .166 .763 .503 .929 .93" />
      <path d="M9 20l-1.064 -3.151a1.25 1.25 0 0 0 -.785-.785l-3.151 -1.064" />
    </svg>
  );
}

function AsteriskSimpleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12v-9" />
      <path d="M12 12l-9 -2.5" />
      <path d="M12 12l9 -2.5" />
      <path d="M12 12l6 8.5" />
      <path d="M12 12l-6 8.5" />
    </svg>
  );
}

function CardHatchBg() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e5e5e5 0, #e5e5e5 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #e5e5e5 0, #e5e5e5 1px, transparent 0, transparent 50%)",
          backgroundSize: "6px 6px",
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #52525b 0, #52525b 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #52525b 0, #52525b 1px, transparent 0, transparent 50%)",
          backgroundSize: "6px 6px",
          opacity: 0.35,
        }}
      />
    </>
  );
}

export default function ServicesCategories() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [externalNotice, setExternalNotice] = useState<{
    name: string;
    url: string;
  } | null>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const openService = (step: ServiceCategory) => {
    if (step.externalUrl) {
      setExternalNotice({ name: step.heading, url: step.externalUrl });
      return;
    }
    router.push(step.href);
  };

  useEffect(() => {
    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight * 0.36;
      let bestIndex = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      setActiveIndex((prev) => (prev !== bestIndex ? bestIndex : prev));
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="service-categories" className="w-full scroll-mt-24 bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-6 sm:px-6 sm:py-6 md:py-6 lg:px-8">
        {/* Mobile */}
        <div className="w-full md:hidden">
          <Reveal
            animationNum={0}
            className="grid grid-cols-1 gap-4"
          >
            <div>
              <h2 className="text-pretty text-display-sm text-ink">
                Everything your brand needs—designed, built, and delivered in Dubai.
              </h2>
            </div>
            <p className="text-body-md leading-relaxed text-muted">
              Exhibition stands, corporate gifts, printing, acrylic fabrication,
              rider equipment, event management, and digital through Code
              Cobble. One brief, one timeline, one team accountable from concept
              to show-floor and beyond across Dubai and the UAE.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {SERVICE_CATEGORIES.map((step) => (
              <article
                key={step.slug}
                className="relative overflow-hidden  border border-hairline bg-neutral-50 p-3 dark:border-zinc-700 dark:bg-zinc-900"
              >
                <CardHatchBg />
                <div className="relative z-10">
                  <div className="relative mb-4 h-28 overflow-hidden rounded-sm border border-hairline bg-surface-card sm:h-32">
                    <Image
                      src={step.image}
                      alt={`${step.heading} visual`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-canvas text-ink shadow-sm">
                      <step.Icon className="size-4" />
                    </span>
                    <h3 className="text-title-md text-ink">{step.heading}</h3>
                  </div>
                  <p className="mt-3 text-body-sm leading-relaxed text-muted">
                    {step.paragraph}
                  </p>
                  <div className="my-3 h-px w-full bg-hairline" />
                  <ul className="space-y-1.5">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-body-sm text-muted"
                      >
                        <AsteriskSimpleIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-success" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => openService(step)}
                    className={cn(accentButtonClasses("group mt-5 w-full"))}
                  >
                    Explore this service
                    <PointerCollaborationIcon className={buttonIconClasses} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <Reveal
            animationNum={0}
            className="mb-14 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-12 lg:gap-10"
          >
            <div className="lg:col-span-5">
              <h2 className="text-pretty text-display-sm text-ink md:text-display-md">
                Everything your brand needs - designed, built, and delivered in
                Dubai.
              </h2>
            </div>
            <div className="flex items-start lg:col-span-7">
              <p className="text-body-md text-muted sm:text-[17px] sm:leading-7">
                Exhibition stands, corporate gifts, printing, acrylic
                fabrication, rider equipment, event management, and digital
                through Code Cobble. One brief, one timeline, one team
                accountable from concept to show-floor and beyond across Dubai
                and the UAE.
              </p>
            </div>
          </Reveal>

          <div className="w-full space-y-16 md:space-y-24">
            {SERVICE_CATEGORIES.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={step.slug}
                  className="relative flex flex-col gap-5 md:flex-row md:gap-16 lg:gap-20"
                  aria-current={isActive ? "true" : "false"}
                >
                  <div className="top-32 flex h-min w-64 shrink-0 flex-col gap-3 self-start lg:w-72 md:sticky lg:top-36">
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-brand-accent transition-all duration-300",
                          isActive
                            ? "border-hairline bg-surface-soft shadow-md"
                            : "border-hairline bg-canvas",
                        )}
                      >
                        <step.Icon className="size-4" />
                      </span>
                      <div className="flex min-w-0 flex-col">
                        <span className="text-title-md text-ink lg:text-title-lg">
                          {step.heading}
                        </span>
                        <span className="mt-0.5 font-mono text-caption font-extrabold! text-muted/50">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(SERVICE_CATEGORIES.length).padStart(2, "0")}
                        </span>
                        {/* Compact CTA — stays under the title when the card collapses */}
                        <button
                          type="button"
                          onClick={() => openService(step)}
                          className={cn(
                            "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-opacity duration-300 hover:text-ink",
                            isActive
                              ? "pointer-events-none h-0 overflow-hidden opacity-0"
                              : "opacity-100",
                          )}
                          tabIndex={isActive ? -1 : undefined}
                          aria-hidden={isActive}
                        >
                          Explore
                          <PointerCollaborationIcon className="h-3.5 w-3.5 shrink-0" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    ref={(el) => {
                      sentinelRefs.current[index] = el;
                    }}
                    aria-hidden
                    className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                  />

                  <article
                    className={cn(
                      "relative flex w-full max-w-4xl flex-col overflow-hidden rounded-md border border-dotted p-4 transition-all duration-300 md:p-5",
                      isActive
                        ? "border-hairline bg-neutral-50 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.28)] ring-1 ring-hairline dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[0_20px_50px_-35px_rgba(0,0,0,0.55)] dark:ring-zinc-700"
                        : "border-hairline bg-neutral-50 shadow-sm dark:border-zinc-700 dark:bg-zinc-900",
                    )}
                  >
                    <CardHatchBg />
                    <div className="relative z-10 flex flex-col">
                      <div
                        className={cn(
                          "relative mb-4 overflow-hidden rounded-md border border-hairline bg-surface-card transition-all duration-300",
                          isActive ? "h-32 lg:h-36" : "h-28 lg:h-32",
                        )}
                      >
                        <Image
                          src={step.image}
                          alt={`${step.heading} visual`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 70vw, 640px"
                        />
                      </div>

                      <div className="space-y-3">
                        <p
                          className={cn(
                            "text-body-md leading-relaxed transition-all sm:text-[17px] sm:leading-7",
                            isActive
                              ? "line-clamp-none text-muted"
                              : "line-clamp-3 text-muted",
                          )}
                        >
                          {step.paragraph}
                        </p>
                      </div>

                      <div
                        className={cn(
                          "grid transition-all duration-500 ease-out",
                          isActive
                            ? "mt-4 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className=" border-t border-b border-hairline bg-neutral-50 border-dashed p-4 dark:border-zinc-700 dark:bg-zinc-800/80">
                            <ul className="space-y-2">
                              {step.points.map((point) => (
                                <li
                                  key={point}
                                  className="flex items-start gap-2 text-body-sm text-muted sm:text-body-md"
                                >
                                  <AsteriskSimpleIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-success" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            type="button"
                            onClick={() => openService(step)}
                            className={cn(
                              accentButtonClasses("group mt-4 w-full sm:w-auto"),
                            )}
                          >
                            Explore this service
                            <PointerCollaborationIcon
                              className={buttonIconClasses}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
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
