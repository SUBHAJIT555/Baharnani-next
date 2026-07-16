import { cn } from "@/lib/utils";

const ICON_CLASS_MAP: Record<string, string> = {
  "#B6E9C8": "text-ink dark:text-[#B6E9C8]",
  "#FFF7BD": "text-ink dark:text-[#FFF7BD]",
  "#C1D8FD": "text-ink dark:text-[#C1D8FD]",
  "#FFD6F8": "text-ink dark:text-[#FFD6F8]",
  "#FFECB3": "text-ink dark:text-[#FFECB3]",
  "#FFE5EC": "text-ink dark:text-[#FFE5EC]",
  "#E0F7FA": "text-ink dark:text-[#E0F7FA]",
  "#EDE7F6": "text-ink dark:text-[#EDE7F6]",
  "#FFF8E1": "text-ink dark:text-[#FFF8E1]",
};

export function getPastelIconStyles(iconColor: string) {
  const key = iconColor.trim().toUpperCase();

  return {
    bgClass: "",
    iconClass: ICON_CLASS_MAP[key] ?? "text-ink dark:text-brand-accent",
  };
}

type PastelIconBoxProps = {
  color: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
};

export default function PastelIconBox({
  color,
  children,
  size = "sm",
  className,
}: PastelIconBoxProps) {
  const styles = getPastelIconStyles(color);

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center",
        size === "sm" ? "h-10 w-10" : "h-11 w-11",
        className
      )}
    >
      <span className={cn("flex items-center justify-center", styles.iconClass)}>
        {children}
      </span>
    </span>
  );
}
