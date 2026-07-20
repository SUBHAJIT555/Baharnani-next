import type { ComponentType, ReactNode, Ref, SVGProps } from "react";
import { isValidElement } from "react";
import { cn } from "@/lib/utils";

const iconClassBySize = {
  sm: "size-4 stroke-[2.25]",
  md: "size-5",
  lg: "size-6",
  xl: "size-7",
} as const;

const styles = {
  light: {
    base: "rounded-full",
    sizes: {
      sm: "size-8",
      md: "size-10",
      lg: "size-12",
      xl: "size-14",
    },
    colors: {
      brand: "bg-brand-accent/10 text-brand-accent",
      gray: "bg-surface-card text-muted",
      error: "bg-error/10 text-error",
      warning: "bg-warning/10 text-warning",
      success: "bg-success/10 text-success",
    },
  },
  modern: {
    base: "bg-canvas shadow-sm ring-1 ring-inset ring-hairline",
    sizes: {
      sm: "size-8 rounded-md",
      md: "size-10 rounded-lg",
      lg: "size-12 rounded-[10px]",
      xl: "size-14 rounded-xl",
    },
    colors: {
      brand: "text-brand-accent",
      gray: "text-muted",
      error: "text-error",
      warning: "text-warning",
      success: "text-success",
    },
  },
  "modern-neue": {
    base: [
      "bg-canvas ring-1 ring-inset ring-hairline before:pointer-events-none before:absolute before:inset-1 before:z-0 before:bg-canvas",
      "before:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_3px_3px_0px_rgba(0,0,0,0.09),1px_8px_5px_0px_rgba(0,0,0,0.05),2px_21px_6px_0px_rgba(0,0,0,0),0px_0px_0px_1px_rgba(0,0,0,0.08),1px_13px_5px_0px_rgba(0,0,0,0.01),0px_-2px_2px_0px_rgba(0,0,0,0.13)_inset] before:ring-1 before:ring-hairline",
      "dark:bg-surface-card dark:ring-hairline dark:before:bg-surface-soft dark:before:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.35),0px_3px_3px_0px_rgba(0,0,0,0.28),0px_0px_0px_1px_rgba(255,255,255,0.06),0px_-2px_2px_0px_rgba(0,0,0,0.45)_inset] dark:before:ring-white/5",
    ].join(" "),
    sizes: {
      sm: "size-8 rounded-[8px] before:rounded-[4px]",
      md: "size-10 rounded-[10px] before:rounded-[6px]",
      lg: "size-12 rounded-[12px] before:rounded-[8px]",
      xl: "size-14 rounded-[14px] before:rounded-[10px]",
    },
    colors: {
      brand: "text-brand-accent",
      gray: "text-muted",
      error: "text-error",
      warning: "text-warning",
      success: "text-success",
    },
  },
} as const;

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

function isIconComponent(component: unknown): component is IconComponent {
  return (
    typeof component === "function" ||
    (typeof component === "object" &&
      component !== null &&
      "$$typeof" in component)
  );
}

export type FeaturedIconProps = {
  ref?: Ref<HTMLDivElement>;
  children?: ReactNode;
  className?: string;
  icon?: IconComponent | ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "brand" | "gray" | "success" | "warning" | "error";
  theme?: "light" | "modern" | "modern-neue";
};

export function FeaturedIcon({
  size = "sm",
  theme = "light",
  color = "brand",
  icon: Icon,
  className,
  children,
  ref,
  ...otherProps
}: FeaturedIconProps) {
  const variant = styles[theme];

  return (
    <div
      ref={ref}
      data-featured-icon
      className={cn(
        "relative flex shrink-0 items-center justify-center",
        variant.base,
        variant.sizes[size],
        variant.colors[color],
        className,
      )}
      {...otherProps}
    >
      {isIconComponent(Icon) ? (
        <Icon
          aria-hidden
          className={cn("relative z-10", iconClassBySize[size])}
        />
      ) : null}
      {isValidElement(Icon) ? (
        <div className="relative z-10">{Icon}</div>
      ) : null}
      {children}
    </div>
  );
}
