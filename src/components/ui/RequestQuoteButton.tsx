"use client";

import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import {
  accentButtonClasses,
  contactButtonIconClasses,
} from "@/components/ui/button";
import { useQuoteRequest } from "@/components/ui/QuoteRequestProvider";
import { cn } from "@/lib/utils";

type RequestQuoteButtonProps = {
  label?: string;
  className?: string;
  preselectedServiceId?: string;
};

export default function RequestQuoteButton({
  label = "Request a quote",
  className,
  preselectedServiceId,
}: RequestQuoteButtonProps) {
  const { openQuoteRequest } = useQuoteRequest();

  return (
    <button
      type="button"
      onClick={() => openQuoteRequest(preselectedServiceId)}
      className={cn(accentButtonClasses("group w-full sm:w-auto"), className)}
    >
      {label}
      <MessageForwardIcon className={contactButtonIconClasses} />
    </button>
  );
}
