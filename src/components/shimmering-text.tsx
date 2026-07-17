"use client";

import * as React from "react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export type ShimmeringTextProps = {
  text: string;
  duration?: number;
  isStopped?: boolean;
  className?: string;
  "aria-hidden"?: boolean;
};

export function ShimmeringText({
  text,
  duration = 1,
  isStopped = false,
  className,
  "aria-hidden": ariaHidden,
}: ShimmeringTextProps) {
  const createCharVariants = React.useCallback(
    (charIndex: number): Variants => ({
      running: {
        color: ["var(--color)", "var(--shimmering-color)", "var(--color)"],
        transition: {
          duration,
          repeat: Infinity,
          repeatType: "loop" as const,
          repeatDelay: text.length * 0.05,
          delay: (charIndex * duration) / text.length,
          ease: "easeInOut",
        },
      },
      stopped: {
        color: "var(--color)",
        transition: {
          duration: duration * 0.5,
          ease: "easeOut",
        },
      },
    }),
    [duration, text.length]
  );

  return (
    <motion.span
      className={cn(
        "inline-block select-none",
        "[--color:var(--muted)] [--shimmering-color:var(--ink)]",
        className
      )}
      aria-hidden={ariaHidden}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-pre"
          initial="stopped"
          animate={isStopped ? "stopped" : "running"}
          variants={createCharVariants(index)}
          aria-hidden
        >
          {char}
        </motion.span>
      ))}
      <span className="sr-only">{text}</span>
    </motion.span>
  );
}
