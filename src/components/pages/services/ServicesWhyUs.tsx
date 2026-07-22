"use client";

import type { ReactNode } from "react";
import {
  BoxAlignBottomIcon,
  BuildingWarehouseIcon,
  ColorFilterIcon,
  MapPin2Icon,
  PackageExportIcon,
  RouteSquare2Icon,
  TransformPointTopRightIcon,
  UserCheckIcon,
  type ServiceIconComponent,
} from "@/components/icons/ServiceIcons";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { cn } from "@/lib/utils";

type ListItem = {
  text: string;
  Icon: ServiceIconComponent;
};

const PRODUCTION_ITEMS: ListItem[] = [
  {
    text: "Exhibition stands designed, fabricated, and installed in-house.",
    Icon: BuildingWarehouseIcon,
  },
  {
    text: "Commercial print, packaging, and large-format graphics under one roof.",
    Icon: TransformPointTopRightIcon,
  },
  {
    text: "Acrylic displays, joinery, and branded fabrication to spec.",
    Icon: BoxAlignBottomIcon,
  },
  {
    text: "Corporate gifts curated, branded, and delivered UAE-wide.",
    Icon: PackageExportIcon,
  },
];

const DELIVERY_ITEMS: ListItem[] = [
  {
    text: "Venue-ready installs at DWTC, ADNEC, Expo Centre, and corporate sites.",
    Icon: MapPin2Icon,
  },
  {
    text: "One accountable team from brief to show-floor and dismantle.",
    Icon: UserCheckIcon,
  },
  {
    text: "Tight timelines with colour control and shared artwork standards.",
    Icon: ColorFilterIcon,
  },
  {
    text: "Strategy plus production—so branding stays consistent across every touchpoint.",
    Icon: RouteSquare2Icon,
  },
];

function CardGridBackground({ variant = "light" }: { variant?: "light" | "dark" }) {
  if (variant === "dark") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #71717a 0, #71717a 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #71717a 0, #71717a 1px, transparent 0, transparent 50%)",
          backgroundSize: "6px 6px",
        }}
      />
    );
  }

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:hidden"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #e5e5e5 0, #e5e5e5 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #e5e5e5 0, #e5e5e5 1px, transparent 0, transparent 50%)",
          backgroundSize: "6px 6px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden opacity-[0.18] dark:block"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #71717a 0, #71717a 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #71717a 0, #71717a 1px, transparent 0, transparent 50%)",
          backgroundSize: "6px 6px",
        }}
      />
    </>
  );
}

function Em({
  children,
  featured = false,
}: {
  children: ReactNode;
  featured?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-extrabold underline decoration-brand-accent decoration-dotted underline-offset-4",
        featured ? "text-zinc-100" : "text-ink",
      )}
    >
      {children}
    </span>
  );
}

type TopicCardProps = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  items: ListItem[];
  footer?: ReactNode;
  featured?: boolean;
};

function TopicCard({
  eyebrow,
  title,
  intro,
  items,
  footer,
  featured = false,
}: TopicCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 md:p-8",
        featured
          ? "border-zinc-700 bg-zinc-900 text-white shadow-xl shadow-zinc-900/15"
          : "border-hairline bg-neutral-50 shadow-sm dark:border-zinc-700 dark:bg-zinc-800",
      )}
    >
      <CardGridBackground variant={featured ? "dark" : "light"} />

      <div className="relative z-10">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
            featured
              ? "border-zinc-700 bg-zinc-800/80 text-zinc-300"
              : "border-dotted border-zinc-200 bg-zinc-50 text-body dark:border-zinc-600 dark:bg-zinc-900/70 dark:text-zinc-300",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              featured ? "bg-blue-400" : "bg-brand-accent",
            )}
          />
          <span
            className={cn(
              "font-semibold uppercase tracking-[0.14em]",
              featured ? "text-blue-400" : "text-brand-accent",
            )}
          >
            {eyebrow}
          </span>
        </span>

        <h3
          className={cn(
            "mt-5 text-pretty text-xl font-semibold leading-tight tracking-tight sm:text-2xl md:text-3xl",
            featured ? "text-zinc-50" : "text-ink",
          )}
        >
          {title}
        </h3>

        <div
          className={cn(
            "mt-4 text-sm leading-relaxed md:text-base",
            featured
              ? "text-zinc-300"
              : "text-muted dark:text-zinc-300",
          )}
        >
          {intro}
        </div>
      </div>

      <div
        className={cn(
          "relative z-10 my-6 h-px w-full",
          featured ? "bg-zinc-700" : "bg-zinc-200 dark:bg-zinc-700",
        )}
      />

      <ul className="relative z-10 flex-1 space-y-3">
        {items.map((item) => {
          const ItemIcon = item.Icon;

          return (
            <li key={item.text} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex shrink-0 items-center justify-center",
                  featured ? "text-blue-400" : "text-brand-accent",
                )}
              >
                <ItemIcon className="size-5" />
              </span>
              <span
                className={cn(
                  "pt-1 text-sm font-medium leading-relaxed md:text-base",
                  featured
                    ? "text-zinc-100"
                    : "text-body dark:text-zinc-100",
                )}
              >
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>

      {footer ? (
        <div
          className={cn(
            "relative z-10 mt-8 rounded-2xl border px-4 py-3.5 text-center text-sm font-medium leading-relaxed md:text-base",
            featured
              ? "border-zinc-600 bg-zinc-800 text-zinc-100"
              : "border-dashed border-zinc-200 bg-zinc-50 text-ink dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100",
          )}
        >
          {footer}
        </div>
      ) : null}
    </article>
  );
}

export default function ServicesWhyUs() {
  return (
    <section id="why-us" className="w-full scroll-mt-24 bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-6 sm:px-6 md:py-6 lg:px-8">
        <Reveal animationNum={0}>
          <h2 className="max-w-3xl text-pretty text-display-sm text-ink md:text-display-md">
            Why brands choose Baharnani for production in Dubai
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal animationNum={1} className="h-full">
            <TopicCard
              eyebrow="Production"
              title="In-house capability under one roof"
              intro={
                <>
                  <p>
                    Great brand moments aren&apos;t assembled from scattered
                    vendors. They&apos;re built by a team that owns{" "}
                    <Em>design, fabrication, print, and install</Em> end to end.
                  </p>
                  <p className="mt-4">
                    On Sheikh Zayed Road, Baharnani runs the full stack
                    in-house—so your brief stays sharp from concept to delivery:
                  </p>
                </>
              }
              items={PRODUCTION_ITEMS}
              footer={
                <>
                  Not a patchwork of suppliers.{" "}
                  <span className="font-extrabold">
                    One production partner accountable before show day.
                  </span>
                </>
              }
            />
          </Reveal>

          <Reveal animationNum={2} className="h-full">
            <TopicCard
              eyebrow="Delivery"
              title="Execution shaped by real UAE venues"
              intro={
                <>
                  The teams behind Baharnani deliver where it counts—trade
                  floors, retail fit-outs, and brand activations across Dubai
                  and the GCC. Professionals who have:
                </>
              }
              items={DELIVERY_ITEMS}
              footer={
                <>
                  &ldquo;This depth of production and on-site control is why
                  brands trust Baharnani—from first sketch to final
                  dismantle.&rdquo;
                </>
              }
              featured
            />
          </Reveal>
        </div>
      </RevealSection>
    </section>
  );
}
