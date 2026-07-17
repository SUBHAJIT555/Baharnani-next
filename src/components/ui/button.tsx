import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "accent" | "soft" | "dark";

const BASE = cn(
  "relative inline-flex items-center justify-center gap-1.5",
  "h-11 cursor-pointer select-none rounded-lg px-5",
  "text-sm font-medium leading-none tracking-[0.01em]",
  "transition-[filter,transform,background] duration-200 ease-out",
  "active:scale-[0.98]"
);

/** Accent pill — brand blue, white label, soft top bevel (ref: tactile CTA). */
const ACCENT = cn(
  "text-white",
  "border border-blue-700/25 dark:border-white/15",
  "bg-[linear-gradient(180deg,#60a5fa_0%,#3b82f6_48%,#2563eb_100%)]",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45),inset_0_-1px_0_0_rgba(29,78,216,0.35),0_1px_2px_rgba(37,99,235,0.25)]",
  "hover:brightness-[1.06]",
  "dark:bg-[linear-gradient(180deg,#60a5fa_0%,#3b82f6_45%,#1d4ed8_100%)]",
  "dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),inset_0_-1px_0_0_rgba(0,0,0,0.3),0_1px_2px_rgba(0,0,0,0.35)]"
);

/** Soft secondary — same pill depth, light surface + accent-tinted edge. */
const SOFT = cn(
  "text-ink",
  "border border-brand-accent/25 dark:border-white/12",
  "bg-[linear-gradient(180deg,#ffffff_0%,#f0f6ff_55%,#dbeafe_100%)]",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),inset_0_-1px_0_0_rgba(59,130,246,0.12),0_1px_2px_rgba(15,23,42,0.06)]",
  "hover:brightness-[1.02]",
  "dark:text-white",
  "dark:bg-[linear-gradient(180deg,#2a3548_0%,#1e293b_50%,#162032_100%)]",
  "dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(0,0,0,0.35),0_1px_2px_rgba(0,0,0,0.35)]"
);

/** Dark pill — charcoal version of the same tactile style. */
const DARK = cn(
  "text-white",
  "border border-white/10",
  "bg-[linear-gradient(180deg,#3a3a3a_0%,#1a1a1a_48%,#0a0a0a_100%)]",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),inset_0_-1px_0_0_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.2)]",
  "hover:brightness-110",
  "dark:border-white/12",
  "dark:bg-[linear-gradient(180deg,#404040_0%,#1c1c1c_48%,#0d0d0d_100%)]",
  "dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_-1px_0_0_rgba(0,0,0,0.55),0_1px_2px_rgba(0,0,0,0.4)]"
);

const VARIANT: Record<ButtonVariant, string> = {
  accent: ACCENT,
  soft: SOFT,
  dark: DARK,
};

export const buttonClasses = (
  variant: ButtonVariant = "accent",
  className?: string
) => cn(BASE, VARIANT[variant], className);

export const accentButtonClasses = (className?: string) =>
  buttonClasses("accent", className);

export const softButtonClasses = (className?: string) =>
  buttonClasses("soft", className);

export const darkButtonClasses = (className?: string) =>
  buttonClasses("dark", className);

/** Chevron / trailing icon — slightly muted so the label stays primary. */
export const buttonIconClasses =
  "h-3.5 w-3.5 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5";

/** Contact / message-forward icon — a touch larger for legibility. */
export const contactButtonIconClasses =
  "h-4 w-4 shrink-0 opacity-80 transition-transform group-hover:translate-x-0.5";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  className,
  variant = "accent",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
