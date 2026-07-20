"use client";

import { useState } from "react";
import DottedMap from "dotted-map";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const DUBAI = { lat: 25.2, lng: 55.27 };

const map = new DottedMap({ height: 58, grid: "diagonal" });
const points = map.getPoints();
const { width, height } = map.image;
const dubaiPin = map.getPin(DUBAI);
const pinLeft = dubaiPin ? `${(dubaiPin.x / width) * 100}%` : "72%";
const pinTop = dubaiPin ? `${(dubaiPin.y / height) * 100}%` : "42%";

export default function ContactWorldMap({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative mx-auto w-full max-w-4xl", className)}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full overflow-visible"
        aria-hidden
      >
        <g className="fill-ink/20 dark:fill-ink/30">
          {points.map((point) => (
            <circle
              key={`${point.x}-${point.y}`}
              cx={point.x}
              cy={point.y}
              r={0.22}
            />
          ))}
        </g>
      </svg>

      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: pinLeft, top: pinTop }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <a
          href={SITE.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${SITE.name} — ${SITE.address}. Open in Google Maps`}
          className="relative flex size-10 items-center justify-center sm:size-12"
        >
          <span className="absolute inset-0 rounded-full border border-brand-accent/50 animate-ping opacity-40" />
          <span className="absolute size-7 rounded-full border border-brand-accent/40 sm:size-8" />
          <span className="absolute size-4 rounded-full border border-brand-accent/60 sm:size-5" />
          <span className="relative size-2.5 rounded-full bg-brand-accent shadow-sm sm:size-3" />
        </a>

        <div
          role="tooltip"
          className={cn(
            "absolute bottom-full left-1/2 z-20 mb-3 w-56 -translate-x-1/2",
            "rounded-xl border border-hairline bg-surface-card p-3 text-left shadow-lg",
            "transition-all duration-200",
            open
              ? "pointer-events-auto visible translate-y-0 opacity-100"
              : "pointer-events-none invisible translate-y-1 opacity-0",
          )}
        >
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
              <MapPin className="size-3.5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{SITE.name}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">
                {SITE.address}
              </p>
              <p className="mt-1.5 text-[11px] font-medium text-brand-accent">
                Open in Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
