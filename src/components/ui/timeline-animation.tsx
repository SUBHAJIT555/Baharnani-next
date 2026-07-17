"use client";

import {
  createContext,
  useContext,
  useMemo,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type UseInViewOptions,
  type Variants,
} from "motion/react";

type ViewMargin = UseInViewOptions["margin"];

export const revealVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.45,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: 16,
    opacity: 0,
  },
};

type RevealContextValue = {
  ref: RefObject<HTMLElement | null>;
  once: boolean;
  margin: ViewMargin;
};

const RevealContext = createContext<RevealContextValue | null>(null);

type TimelineContentProps<T extends keyof HTMLElementTagNameMap> = {
  children?: ReactNode;
  animationNum: number;
  className?: string;
  timelineRef: RefObject<HTMLElement | null>;
  as?: T;
  customVariants?: Variants;
  once?: boolean;
  margin?: ViewMargin;
} & HTMLMotionProps<T>;

export const TimelineContent = <T extends keyof HTMLElementTagNameMap = "div">({
  children,
  animationNum,
  timelineRef,
  className,
  as,
  customVariants,
  once = true,
  margin = "-80px 0px -80px 0px",
  ...props
}: TimelineContentProps<T>) => {
  const sequenceVariants = customVariants || revealVariants;

  const isInView = useInView(timelineRef, {
    once,
    margin,
  });

  const MotionComponent = motion[as || "div"] as React.FC<
    HTMLMotionProps<"div"> & { children?: ReactNode }
  >;

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={sequenceVariants}
      className={className}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </MotionComponent>
  );
};

type RevealSectionProps = {
  children?: ReactNode;
  className?: string;
  once?: boolean;
  margin?: ViewMargin;
};

export function RevealSection({
  children,
  className,
  once = true,
  margin = "-80px 0px -80px 0px",
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const value = useMemo(() => ({ ref, once, margin }), [once, margin]);

  return (
    <RevealContext.Provider value={value}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </RevealContext.Provider>
  );
}

type RevealProps<T extends keyof HTMLElementTagNameMap> = {
  animationNum: number;
  children?: ReactNode;
  className?: string;
  as?: T;
  variants?: Variants;
} & Omit<
  HTMLMotionProps<T>,
  "initial" | "animate" | "custom" | "variants" | "children"
>;

export function Reveal<T extends keyof HTMLElementTagNameMap = "div">({
  animationNum,
  children,
  className,
  as,
  variants,
  ...props
}: RevealProps<T>) {
  const ctx = useContext(RevealContext);

  if (!ctx) {
    return <div className={className}>{children}</div>;
  }

  return (
    <TimelineContent
      animationNum={animationNum}
      timelineRef={ctx.ref}
      customVariants={variants ?? revealVariants}
      once={ctx.once}
      margin={ctx.margin}
      as={as}
      className={className}
      {...props}
    >
      {children}
    </TimelineContent>
  );
}
