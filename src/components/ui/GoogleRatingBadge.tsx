"use client";

import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { ShimmeringText } from "@/components/shimmering-text";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type GoogleRatingBadgeProps = {
  className?: string;
  showLocation?: boolean;
};

export default function GoogleRatingBadge({
  className,
  showLocation = true,
}: GoogleRatingBadgeProps) {
  return (
    <a
      href={SITE.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 transition-opacity hover:opacity-85",
        className
      )}
      aria-label={`${SITE.googleRating} star rating on Google — view our reviews`}
    >
      <GoogleIcon className="size-3.5 shrink-0" />
      <ShimmeringText
        text="★★★★★"
        duration={1.2}
        className="text-sm leading-none [--color:#b45309] [--shimmering-color:#f59e0b] dark:[--color:#fbbf24] dark:[--shimmering-color:#fde047]"
        aria-hidden
      />
      <span className="font-semibold text-ink">{SITE.googleRating}</span>
      {showLocation ? (
        <span className="text-body-sm text-muted">Rating on Google</span>
      ) : null}
    </a>
  );
}
