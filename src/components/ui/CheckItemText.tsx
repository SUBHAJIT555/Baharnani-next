import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckItemTextProps = {
  text: string;
  className?: string;
};

export function CheckItemText({ text, className }: CheckItemTextProps) {
  return (
    <li className={cn("flex items-start gap-3", className)}>
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-brand-accent/30 text-brand-accent">
        <Check className="size-3" strokeWidth={2.5} aria-hidden />
      </span>
      <span className="text-sm leading-relaxed text-body md:text-base">{text}</span>
    </li>
  );
}
