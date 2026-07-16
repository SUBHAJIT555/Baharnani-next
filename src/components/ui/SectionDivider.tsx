/**
 * SectionDivider — Cal.com-style horizontal separation with + ticks at content rails.
 */
type SectionDividerProps = {
  className?: string;
  maxWidth?: string;
};

function PlusMark({ side }: { side: "left" | "right" }) {
  const position =
    side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2";

  return (
    <span
      className={`absolute top-1/2 z-10 block h-6 w-6 -translate-y-1/2 ${position}`}
    >
      <span className="absolute inset-0 bg-canvas" />
      <span className="absolute top-1/2 left-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-neutral-300 dark:bg-neutral-600" />
      <span className="absolute top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-neutral-300 dark:bg-neutral-600" />
    </span>
  );
}

export default function SectionDivider({
  className = "",
  maxWidth = "max-w-7xl",
}: SectionDividerProps) {
  return (
    <div
      className={`relative z-10 flex h-6 w-full items-center overflow-visible bg-canvas ${className}`}
      aria-hidden="true"
    >
      <div className="h-px w-full bg-hairline" />
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        <div className={`relative mx-auto h-full ${maxWidth}`}>
          <PlusMark side="left" />
          <PlusMark side="right" />
        </div>
      </div>
    </div>
  );
}
