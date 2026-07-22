import { cn } from "@/lib/utils";

export type EmojiIconProps = {
  emoji: string;
  className?: string;
  label?: string;
};

/** Temporary emoji stand-in until custom SVG path icons are wired. */
export function EmojiIcon({ emoji, className, label }: EmojiIconProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn(
        "inline-flex items-center justify-center leading-none select-none",
        className,
      )}
    >
      {emoji}
    </span>
  );
}

/** Named emoji map — mirrors previous Lucide roles for easy SVG swap later. */
export const EMOJI = {
  box: "📦",
  gift: "🎁",
  printer: "🖨️",
  laptop: "💻",
  bike: "🏍️",
  layers: "🧩",
  calendar: "📅",
  sparkles: "✨",
  building: "🏢",
  scale: "⚖️",
  shield: "🛡️",
  cookie: "🍪",
  mapPin: "📍",
  mail: "✉️",
  phone: "📞",
  headphones: "🎧",
  arrowUpRight: "↗",
  x: "✕",
  chevronDown: "▼",
  chevronUp: "▲",
  check: "✓",
  moon: "🌙",
  sun: "☀️",
  arrowUp: "↑",
  quote: "❝",
  star: "⭐",
  home: "🏠",
  clock: "🕐",
  message: "💬",
  file: "📄",
  briefcase: "💼",
  newspaper: "📰",
} as const;

export type EmojiKey = keyof typeof EMOJI;
