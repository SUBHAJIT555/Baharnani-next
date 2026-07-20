"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import QuoteRequestModal from "@/components/ui/QuoteRequestModal";

type QuoteRequestContextValue = {
  openQuoteRequest: (preselectedServiceId?: string) => void;
  closeQuoteRequest: () => void;
};

const QuoteRequestContext = createContext<QuoteRequestContextValue | null>(
  null,
);

export function QuoteRequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<
    string | undefined
  >();

  const openQuoteRequest = useCallback((serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setOpen(true);
  }, []);

  const closeQuoteRequest = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openQuoteRequest, closeQuoteRequest }),
    [openQuoteRequest, closeQuoteRequest],
  );

  return (
    <QuoteRequestContext.Provider value={value}>
      {children}
      <QuoteRequestModal
        open={open}
        onClose={closeQuoteRequest}
        preselectedServiceId={preselectedServiceId}
      />
    </QuoteRequestContext.Provider>
  );
}

export function useQuoteRequest() {
  const ctx = useContext(QuoteRequestContext);
  if (!ctx) {
    throw new Error("useQuoteRequest must be used within QuoteRequestProvider");
  }
  return ctx;
}
