"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { cn } from "@/lib/utils";

export type GlowCardGridProps = React.ComponentPropsWithoutRef<"div"> & {
  cardRadius?: number;
  iconBlur?: number;
  iconSaturate?: number;
  iconBrightness?: number;
  iconScale?: number;
  iconOpacity?: number;
  borderWidth?: number;
  borderBlur?: number;
  borderSaturate?: number;
  borderBrightness?: number;
  borderContrast?: number;
  children: React.ReactNode;
};

export function GlowCardGrid({
  cardRadius = 16,
  iconBlur = 25,
  iconSaturate = 5.0,
  iconBrightness = 1.3,
  iconScale = 4,
  iconOpacity = 0.3,
  borderWidth = 3,
  borderBlur = 10,
  borderSaturate = 4.2,
  borderBrightness = 2.5,
  borderContrast = 2.5,
  className,
  style,
  ...props
}: GlowCardGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    const handlePointerMove = (event: PointerEvent) => {
      // Touch / coarse pointers keep the per-card resting glow position.
      if (!isFinePointer) return;

      const cards = grid.querySelectorAll<HTMLElement>("[data-slot='glow-card']");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (event.clientX - centerX) / (rect.width / 2);
        const y = (event.clientY - centerY) / (rect.height / 2);
        card.style.setProperty("--pointer-x", x.toFixed(3));
        card.style.setProperty("--pointer-y", y.toFixed(3));
      });
    };

    const resetToRest = () => {
      if (!isFinePointer) return;
      const cards = grid.querySelectorAll<HTMLElement>("[data-slot='glow-card']");
      cards.forEach((card) => {
        const restX = card.dataset.glowRestX ?? "0.35";
        const restY = card.dataset.glowRestY ?? "-0.25";
        card.style.setProperty("--pointer-x", restX);
        card.style.setProperty("--pointer-y", restY);
      });
    };

    document.addEventListener("pointermove", handlePointerMove);
    grid.addEventListener("pointerleave", resetToRest);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      grid.removeEventListener("pointerleave", resetToRest);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className={cn(
        "grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3",
        className,
      )}
      style={
        {
          "--card-radius": `${cardRadius}px`,
          "--card-icon-blur": `${iconBlur}px`,
          "--card-icon-saturate": iconSaturate,
          "--card-icon-brightness": iconBrightness,
          "--card-icon-scale": iconScale,
          "--card-icon-opacity": iconOpacity,
          "--card-border-width": `${borderWidth}px`,
          "--card-border-blur": `${borderBlur}px`,
          "--card-border-saturate": borderSaturate,
          "--card-border-brightness": borderBrightness,
          "--card-border-contrast": borderContrast,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export type GlowCardProps = {
  name: string;
  handle?: string;
  avatar?: string;
  /** Lucide / custom icon — used for glow trail + foreground mark */
  icon?: ReactNode;
  /** Unique glow bloom color (like avatar hues in the demo) */
  glowColor?: string;
  /**
   * Resting “hover” glow position (-1…1). Used on mobile / before pointer moves
   * so each card can bloom in a different corner.
   */
  glowX?: number;
  glowY?: number;
  href?: string;
  onClick?: () => void;
  /** When true, corner cue reads as leaving the site */
  external?: boolean;
  className?: string;
};

export function GlowCard({
  name,
  handle,
  avatar,
  icon,
  glowColor = "#3b82f6",
  glowX = 0.35,
  glowY = -0.25,
  href,
  onClick,
  external = false,
  className,
}: GlowCardProps) {
  const isInteractive = Boolean(href || onClick);
  const cueLabel = external ? "Open site" : "Explore";

  const content = (
    <div
      data-slot="glow-card"
      data-glow-rest-x={glowX}
      data-glow-rest-y={glowY}
      className={cn(
        "@container relative flex h-full min-h-52 w-full overflow-hidden rounded-(--card-radius) bg-canvas ring-1 ring-hairline transition-[translate,scale,ring-color] select-none active:scale-[0.98]",
        isInteractive && "cursor-pointer group-hover/card:ring-brand-accent/35",
        className,
      )}
      style={
        {
          "--glow-color": glowColor,
          "--pointer-x": glowX,
          "--pointer-y": glowY,
        } as React.CSSProperties
      }
    >
      <div className="flex size-full overflow-hidden rounded-(--card-radius) [clip-path:inset(0_round_var(--card-radius))]">
        {/* Colored bloom — resting position on mobile; tracks pointer on desktop */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 flex items-center justify-center",
            "translate-x-[calc(var(--pointer-x)*50cqi)] translate-y-[calc(var(--pointer-y)*50cqh)] translate-z-0 scale-(--card-icon-scale)",
            "blur-(--card-icon-blur) brightness-(--card-icon-brightness) saturate-(--card-icon-saturate)",
            "opacity-(--card-icon-opacity) will-change-[transform,filter]",
            /* Always-on bloom on small screens (no hover) */
            "max-md:opacity-65",
          )}
        >
          {avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="size-20" src={avatar} alt="" />
          ) : (
            <span className="relative flex size-28 items-center justify-center max-md:size-32">
              <span
                className="absolute inset-0 rounded-full"
                style={{ background: glowColor }}
                aria-hidden
              />
              {icon ? (
                <span
                  className="relative z-10 flex items-center justify-center [&_svg]:size-16"
                  style={{ color: glowColor }}
                >
                  {icon}
                </span>
              ) : null}
            </span>
          )}
        </div>

        <div className="z-1 flex flex-1 flex-col gap-5 p-5 text-left sm:p-6">
          <div
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-full border",
              "[&_svg]:size-5 [&_svg]:stroke-[2.25]",
            )}
            style={
              {
                "--glow": glowColor,
                background: "color-mix(in srgb, var(--glow) 36%, white)",
                borderColor: "color-mix(in srgb, var(--glow) 42%, transparent)",
              } as React.CSSProperties
            }
          >
            {icon ? (
              /* Always dark stroke — badge bg stays a light pastel in both themes */
              <span className="text-neutral-900">{icon}</span>
            ) : avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="size-10 rounded-full object-cover"
                src={avatar}
                alt=""
              />
            ) : null}
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-2">
            <h3 className="text-title-md font-semibold leading-snug text-ink transition-colors duration-300 group-hover/card:text-brand-accent">
              {name}
            </h3>
            {handle ? (
              <p className="text-body-sm leading-relaxed text-muted">{handle}</p>
            ) : null}
          </div>

          {/* In-flow CTA — always visible, never overlaps copy */}
          {isInteractive ? (
            <div
              className={cn(
                "mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-brand-accent/40 bg-canvas/80 py-1.5 pr-1.5 pl-3",
                "text-xs font-semibold tracking-wide text-brand-accent",
                "transition-[background-color,border-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "group-hover/card:border-solid group-hover/card:border-brand-accent group-hover/card:bg-brand-accent group-hover/card:text-white",
                "group-hover/card:shadow-[0_8px_20px_-12px_rgba(59,130,246,0.65)]",
                "group-focus-visible/card:border-solid group-focus-visible/card:border-brand-accent group-focus-visible/card:bg-brand-accent group-focus-visible/card:text-white",
              )}
            >
              <span>{cueLabel}</span>
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full bg-brand-accent/10",
                  "transition-colors duration-300",
                  "group-hover/card:bg-white/20 group-focus-visible/card:bg-white/20",
                )}
              >
                <ArrowUpRightIcon className="size-3.5" />
              </span>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute inset-0 translate-z-0 rounded-(--card-radius)",
          "border-(length:--card-border-width) border-solid border-transparent",
          "backdrop-blur-(--card-border-blur) backdrop-brightness-(--card-border-brightness) backdrop-contrast-(--card-border-contrast) backdrop-saturate-(--card-border-saturate)",
          "[clip-path:inset(0_round_var(--card-radius))]",
        )}
        style={
          {
            maskImage:
              "linear-gradient(#fff 0 100%), linear-gradient(#fff 0 100%)",
            maskOrigin: "border-box, padding-box",
            maskClip: "border-box, padding-box",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          } as React.CSSProperties
        }
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group/card block h-full outline-none focus-visible:rounded-(--card-radius)"
      >
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group/card block h-full w-full text-left outline-none focus-visible:rounded-(--card-radius)"
      >
        {content}
      </button>
    );
  }

  return content;
}
