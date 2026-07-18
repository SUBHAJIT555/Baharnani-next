"use client";

import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
  /** Star rating out of 5. Defaults to 5. */
  rating?: number;
};

const AVATAR_GRADIENTS = [
  {
    light: `
      radial-gradient(ellipse 95% 75% at 10% 10%, rgba(200, 180, 255, 0.28), transparent 72%),
      radial-gradient(ellipse 90% 72% at 78% 28%, rgba(230, 220, 255, 0.32), transparent 74%),
      radial-gradient(ellipse 88% 70% at 18% 82%, rgba(210, 190, 255, 0.25), transparent 76%),
      radial-gradient(ellipse 92% 74% at 88% 88%, rgba(220, 210, 255, 0.30), transparent 74%),
      radial-gradient(ellipse 85% 68% at 50% 50%, rgba(240, 230, 255, 0.20), transparent 78%),
      linear-gradient(180deg, #faf8ff 0%, #f5f2ff 100%)
    `,
    dark: `
      radial-gradient(ellipse 95% 75% at 10% 10%, rgba(120, 80, 200, 0.25), transparent 72%),
      radial-gradient(ellipse 90% 72% at 78% 28%, rgba(150, 110, 220, 0.28), transparent 74%),
      radial-gradient(ellipse 88% 70% at 18% 82%, rgba(100, 60, 180, 0.22), transparent 76%),
      radial-gradient(ellipse 92% 74% at 88% 88%, rgba(140, 100, 210, 0.26), transparent 74%),
      radial-gradient(ellipse 85% 68% at 50% 50%, rgba(160, 120, 230, 0.18), transparent 78%),
      linear-gradient(180deg, #0f0a1a 0%, #140e22 100%)
    `,
    text: "text-violet-700 dark:text-violet-200",
  },
  {
    light: `
      radial-gradient(ellipse 94% 76% at 8% 10%, rgba(180, 230, 255, 0.26), transparent 72%),
      radial-gradient(ellipse 90% 73% at 80% 24%, rgba(210, 245, 255, 0.30), transparent 74%),
      radial-gradient(ellipse 87% 71% at 16% 84%, rgba(190, 235, 255, 0.23), transparent 76%),
      radial-gradient(ellipse 91% 75% at 90% 88%, rgba(200, 240, 255, 0.28), transparent 74%),
      radial-gradient(ellipse 84% 67% at 50% 50%, rgba(220, 248, 255, 0.19), transparent 78%),
      linear-gradient(165deg, #f5fbff 0%, #edf7ff 50%, #f2f9ff 100%)
    `,
    dark: `
      radial-gradient(ellipse 94% 76% at 8% 10%, rgba(60, 140, 200, 0.24), transparent 72%),
      radial-gradient(ellipse 90% 73% at 80% 24%, rgba(90, 170, 230, 0.27), transparent 74%),
      radial-gradient(ellipse 87% 71% at 16% 84%, rgba(50, 130, 190, 0.21), transparent 76%),
      radial-gradient(ellipse 91% 75% at 90% 88%, rgba(80, 160, 220, 0.25), transparent 74%),
      radial-gradient(ellipse 84% 67% at 50% 50%, rgba(100, 180, 240, 0.17), transparent 78%),
      linear-gradient(165deg, #0a1418 0%, #0e1820 50%, #0c1619 100%)
    `,
    text: "text-sky-700 dark:text-sky-200",
  },
  {
    light: `
      radial-gradient(ellipse 95% 77% at 11% 9%, rgba(255, 200, 220, 0.28), transparent 72%),
      radial-gradient(ellipse 91% 74% at 79% 28%, rgba(255, 230, 240, 0.32), transparent 74%),
      radial-gradient(ellipse 88% 71% at 17% 83%, rgba(255, 180, 210, 0.25), transparent 76%),
      radial-gradient(ellipse 92% 75% at 89% 89%, rgba(255, 215, 232, 0.30), transparent 74%),
      radial-gradient(ellipse 85% 68% at 50% 50%, rgba(255, 240, 248, 0.20), transparent 78%),
      linear-gradient(180deg, #fffbfd 0%, #fff5f9 100%)
    `,
    dark: `
      radial-gradient(ellipse 95% 77% at 11% 9%, rgba(180, 60, 120, 0.25), transparent 72%),
      radial-gradient(ellipse 91% 74% at 79% 28%, rgba(210, 90, 150, 0.29), transparent 74%),
      radial-gradient(ellipse 88% 71% at 17% 83%, rgba(160, 50, 110, 0.22), transparent 76%),
      radial-gradient(ellipse 92% 75% at 89% 89%, rgba(200, 80, 140, 0.27), transparent 74%),
      radial-gradient(ellipse 85% 68% at 50% 50%, rgba(220, 100, 160, 0.18), transparent 78%),
      linear-gradient(180deg, #1a0812 0%, #220a16 100%)
    `,
    text: "text-rose-700 dark:text-rose-200",
  },
  {
    light: `
      radial-gradient(ellipse 93% 77% at 9% 11%, rgba(240, 200, 160, 0.28), transparent 72%),
      radial-gradient(ellipse 89% 74% at 80% 27%, rgba(255, 230, 190, 0.32), transparent 74%),
      radial-gradient(ellipse 86% 72% at 17% 84%, rgba(230, 180, 140, 0.25), transparent 76%),
      radial-gradient(ellipse 90% 76% at 89% 89%, rgba(250, 215, 175, 0.30), transparent 74%),
      radial-gradient(ellipse 83% 69% at 50% 50%, rgba(255, 240, 210, 0.20), transparent 78%),
      linear-gradient(168deg, #fffaf2 0%, #fff4e8 50%, #fff7f0 100%)
    `,
    dark: `
      radial-gradient(ellipse 93% 77% at 9% 11%, rgba(160, 90, 40, 0.30), transparent 70%),
      radial-gradient(ellipse 89% 74% at 80% 27%, rgba(190, 120, 70, 0.28), transparent 72%),
      radial-gradient(ellipse 86% 72% at 17% 84%, rgba(140, 70, 30, 0.26), transparent 74%),
      radial-gradient(ellipse 90% 76% at 89% 89%, rgba(180, 110, 60, 0.29), transparent 72%),
      radial-gradient(ellipse 83% 69% at 50% 50%, rgba(200, 130, 80, 0.19), transparent 76%),
      linear-gradient(168deg, #1a100a 0%, #22140c 50%, #1c120b 100%)
    `,
    text: "text-amber-800 dark:text-amber-200",
  },
  {
    light: `
      radial-gradient(ellipse 94% 77% at 10% 10%, rgba(190, 200, 255, 0.27), transparent 72%),
      radial-gradient(ellipse 90% 74% at 79% 28%, rgba(220, 230, 255, 0.31), transparent 74%),
      radial-gradient(ellipse 87% 72% at 18% 83%, rgba(170, 185, 250, 0.24), transparent 76%),
      radial-gradient(ellipse 91% 76% at 90% 89%, rgba(205, 215, 255, 0.29), transparent 74%),
      radial-gradient(ellipse 84% 69% at 50% 50%, rgba(235, 240, 255, 0.19), transparent 78%),
      linear-gradient(172deg, #f8f9ff 0%, #f2f5ff 50%, #f6f8ff 100%)
    `,
    dark: `
      radial-gradient(ellipse 94% 77% at 10% 10%, rgba(80, 100, 200, 0.28), transparent 70%),
      radial-gradient(ellipse 90% 74% at 79% 28%, rgba(110, 130, 230, 0.26), transparent 72%),
      radial-gradient(ellipse 87% 72% at 18% 83%, rgba(60, 80, 180, 0.24), transparent 74%),
      radial-gradient(ellipse 91% 76% at 90% 89%, rgba(100, 120, 220, 0.27), transparent 72%),
      radial-gradient(ellipse 84% 69% at 50% 50%, rgba(130, 150, 240, 0.18), transparent 76%),
      linear-gradient(172deg, #080c18 0%, #0c1020 50%, #0a0e1c 100%)
    `,
    text: "text-indigo-700 dark:text-indigo-200",
  },
  {
    light: `
      radial-gradient(ellipse 94% 76% at 10% 10%, rgba(255, 180, 190, 0.27), transparent 72%),
      radial-gradient(ellipse 90% 73% at 79% 27%, rgba(210, 255, 220, 0.30), transparent 74%),
      radial-gradient(ellipse 87% 71% at 18% 83%, rgba(255, 160, 180, 0.24), transparent 76%),
      radial-gradient(ellipse 91% 75% at 90% 89%, rgba(195, 245, 210, 0.28), transparent 74%),
      radial-gradient(ellipse 84% 68% at 50% 50%, rgba(245, 255, 240, 0.19), transparent 78%),
      linear-gradient(168deg, #fffbfc 0%, #f8fff6 50%, #fefefa 100%)
    `,
    dark: `
      radial-gradient(ellipse 94% 76% at 10% 10%, rgba(200, 60, 80, 0.28), transparent 70%),
      radial-gradient(ellipse 90% 73% at 79% 27%, rgba(100, 180, 120, 0.26), transparent 72%),
      radial-gradient(ellipse 87% 71% at 18% 83%, rgba(180, 50, 70, 0.24), transparent 74%),
      radial-gradient(ellipse 91% 75% at 90% 89%, rgba(90, 170, 110, 0.27), transparent 72%),
      radial-gradient(ellipse 84% 68% at 50% 50%, rgba(160, 200, 140, 0.18), transparent 76%),
      linear-gradient(168deg, #140a0c 0%, #0e1a12 50%, #11140e 100%)
    `,
    text: "text-emerald-800 dark:text-emerald-200",
  },
] as const;

function avatarGradientFor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash + name.charCodeAt(i) * (i + 1)) % AVATAR_GRADIENTS.length;
  }
  return AVATAR_GRADIENTS[hash];
}

function buildContinuousColumns(
  items: Testimonial[],
  count: number,
  minItemsPerColumn = 4,
) {
  if (count <= 0 || items.length === 0) return [];

  const columns: Testimonial[][] = Array.from({ length: count }, () => []);

  items.forEach((item, idx) => {
    columns[idx % count].push(item);
  });

  columns.forEach((column, columnIndex) => {
    let cursor = columnIndex;
    while (column.length < minItemsPerColumn) {
      column.push(items[cursor % items.length]);
      cursor += count;
    }
  });

  return columns.filter((column) => column.length > 0);
}

function TestimonialAvatar({ name, src }: { name: string; src?: string }) {
  if (src) {
    return (
      <Image
        width={44}
        height={44}
        src={src}
        alt={`Avatar of ${name}`}
        className="h-11 w-11 rounded-full border border-hairline object-cover ring-2 ring-hairline ring-offset-2 ring-offset-canvas dark:ring-offset-surface-soft"
        loading="lazy"
      />
    );
  }

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const tone = avatarGradientFor(name);

  return (
    <div
      aria-hidden
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-semibold ring-2 ring-hairline ring-offset-2 ring-offset-canvas dark:ring-offset-surface-soft",
        tone.text,
      )}
    >
      <div
        className="absolute inset-0 z-0 block dark:hidden"
        style={{ background: tone.light }}
      />
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{ background: tone.dark }}
      />
      <span className="relative z-10">{initials}</span>
    </div>
  );
}

function StarRating({ rating = 5 }: { rating?: number }) {
  const clamped = Math.min(5, Math.max(0, rating));

  return (
    <div
      className="relative mb-4 flex items-center gap-0.5"
      aria-label={`${clamped} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < Math.round(clamped);
        return (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              filled
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-hairline",
            )}
            strokeWidth={1.75}
            aria-hidden
          />
        );
      })}
    </div>
  );
}

function TestimonialsColumn({
  items,
  duration,
  className,
}: {
  items: Testimonial[];
  duration: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="m-0 flex list-none flex-col gap-5 bg-transparent p-0 pb-5"
      >
        {new Array(2).fill(0).map((_, loopIndex) => (
          <div key={loopIndex} className="contents">
            {items.map((item, idx) => (
              <motion.li
                key={`${loopIndex}-${idx}-${item.name}`}
                aria-hidden={loopIndex === 1}
                className={cn(
                  "relative w-full max-w-sm overflow-hidden rounded-2xl border border-hairline bg-canvas p-6",
                  "shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]",
                  "dark:bg-surface-soft dark:shadow-[0_1px_2px_rgba(0,0,0,0.35),0_12px_28px_-14px_rgba(0,0,0,0.55)]",
                )}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 360, damping: 24 },
                }}
              >
                <Quote
                  className="absolute top-5 right-5 h-8 w-8 text-brand-accent/20"
                  strokeWidth={1.75}
                  aria-hidden
                />

                <StarRating rating={item.rating ?? 5} />

                <p className="relative pr-8 text-body-md leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <footer className="relative mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                  <TestimonialAvatar name={item.name} src={item.src} />
                  <div className="flex min-w-0 flex-col">
                    <cite className="truncate text-body-sm font-semibold not-italic leading-5 text-ink">
                      {item.name}
                    </cite>
                    <span className="mt-0.5 truncate text-caption text-muted">
                      {item.designation}
                    </span>
                  </div>
                </footer>
              </motion.li>
            ))}
          </div>
        ))}
      </motion.ul>
    </div>
  );
}

type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
};

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  className,
}: AnimatedTestimonialsProps) {
  const desktopColumns = buildContinuousColumns(testimonials, 3, 4);
  const mobileColumn = buildContinuousColumns(testimonials, 1, 6)[0] ?? [];
  const speedBase = autoplay ? 24 : 32;

  return (
    <div
      className={cn(
        "relative overflow-hidden py-4 mask-[linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className="flex max-h-[min(420px,55vh)] justify-center gap-6 overflow-hidden md:max-h-[740px]">
        <TestimonialsColumn
          items={mobileColumn}
          className="md:hidden"
          duration={speedBase}
        />
        {desktopColumns[0] ? (
          <TestimonialsColumn
            items={desktopColumns[0]}
            className="hidden md:block"
            duration={speedBase}
          />
        ) : null}
        {desktopColumns[1] ? (
          <TestimonialsColumn
            items={desktopColumns[1]}
            className="hidden md:block"
            duration={speedBase + 4}
          />
        ) : null}
        {desktopColumns[2] ? (
          <TestimonialsColumn
            items={desktopColumns[2]}
            className="hidden lg:block"
            duration={speedBase + 2}
          />
        ) : null}
      </div>
    </div>
  );
}
