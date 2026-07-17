"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
};

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
        width={40}
        height={40}
        src={src}
        alt={`Avatar of ${name}`}
        className="h-10 w-10 rounded-full border border-hairline object-cover ring-2 ring-surface-card ring-offset-2 ring-offset-canvas"
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

  return (
    <div
      aria-hidden
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-card text-caption font-semibold text-ink ring-2 ring-surface-card ring-offset-2 ring-offset-canvas"
    >
      {initials}
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
                className="w-full max-w-sm rounded-xl border border-dashed border-hairline bg-surface-card p-6 shadow-[8px_2px_16px_-2px_rgba(0,0,0,0.08)] dark:shadow-[8px_2px_16px_-2px_rgba(0,0,0,0.35)]"
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  transition: { type: "spring", stiffness: 360, damping: 24 },
                }}
              >
                <p className="text-body-sm leading-relaxed text-body">
                  {item.quote}
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <TestimonialAvatar name={item.name} src={item.src} />
                  <div className="flex flex-col">
                    <cite className="text-body-sm font-semibold not-italic leading-5 text-ink">
                      {item.name}
                    </cite>
                    <span className="text-caption text-muted">
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
        "relative overflow-hidden py-4 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]",
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
