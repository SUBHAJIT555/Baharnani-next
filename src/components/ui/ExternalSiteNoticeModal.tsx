"use client";

import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import {
  accentButtonClasses,
  softButtonClasses,
} from "@/components/ui/button";

const PANEL_TRANSITION = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export type ExternalSiteNoticeModalProps = {
  open: boolean;
  onClose: () => void;
  serviceName: string;
  externalUrl: string;
};

export function ExternalSiteNoticeModal({
  open,
  onClose,
  serviceName,
  externalUrl,
}: ExternalSiteNoticeModalProps) {
  const host = hostnameOf(externalUrl);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const handleContinue = () => {
    window.open(externalUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close notice"
            className="fixed inset-0 z-100 cursor-default border-0 bg-ink/35 backdrop-blur-[2px] dark:bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <div className="pointer-events-none fixed inset-0 z-101 flex items-center justify-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="external-site-notice-title"
              className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-2xl border border-hairline bg-canvas p-2.5 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.28)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={PANEL_TRANSITION}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-[10px] border border-hairline bg-surface-soft p-6 sm:p-8 dark:bg-surface-card">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 rounded-lg p-1.5 text-muted transition-colors hover:bg-canvas hover:text-ink dark:hover:bg-surface-soft"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mb-4 flex items-center justify-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  <p className="text-sm font-medium text-muted">Leaving Baharnani</p>
                </div>

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-hairline bg-canvas">
                  <Image
                    src="/icon.svg"
                    alt=""
                    width={28}
                    height={26}
                    className="h-7 w-7"
                  />
                </div>

                <h2
                  id="external-site-notice-title"
                  className="break-all text-center font-mono text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                >
                  {host}
                </h2>

                <p className="mt-3 text-center text-sm leading-relaxed text-muted sm:text-base">
                  You&apos;re exiting our main website to open the{" "}
                  <span className="font-medium text-ink">{serviceName}</span>{" "}
                  destination in a new tab.
                </p>

                <div className="mt-6 flex flex-col gap-2 border-t border-dashed border-hairline pt-5 sm:flex-row">
                  <button
                    type="button"
                    onClick={onClose}
                    className={softButtonClasses("w-full sm:flex-1")}
                  >
                    Stay here
                  </button>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className={accentButtonClasses("group w-full sm:flex-1")}
                  >
                    Continue
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 15l6 -6" />
      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
    </svg>
  );
}

export { ExternalLinkIcon };
