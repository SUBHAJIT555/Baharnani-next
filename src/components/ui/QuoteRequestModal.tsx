"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { EmojiIcon, EMOJI } from "@/components/icons/EmojiIcon";
import {
  SERVICE_ICONS,
  type ServiceIconComponent,
} from "@/components/icons/ServiceIcons";
import { accentButtonClasses } from "@/components/ui/button";
import { QUOTE_SERVICE_OPTIONS } from "@/lib/quote-services";
import { cn } from "@/lib/utils";

const PANEL_TRANSITION = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

const SERVICE_FALLBACK_EMOJIS: Record<string, string> = {
  "mobile-app-development": "📱",
  "exhibition-kiosk": "🎮",
  other: "⋯",
};

const fieldClass = cn(
  "w-full rounded-lg border border-hairline bg-canvas px-3.5 py-2.5",
  "text-sm text-ink placeholder:text-muted",
  "focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30",
  "disabled:opacity-60",
);

const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
      <p className="text-sm font-medium text-muted">{children}</p>
    </div>
  );
}

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
};

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  services: [],
};

type QuoteRequestModalProps = {
  open: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
};

export default function QuoteRequestModal({
  open,
  onClose,
  preselectedServiceId,
}: QuoteRequestModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");
  const busy = status === "loading";

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

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    setFeedback("");
    setForm({
      ...INITIAL,
      services: preselectedServiceId ? [preselectedServiceId] : [],
    });
  }, [open, preselectedServiceId]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(id: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const selectedLabels = QUOTE_SERVICE_OPTIONS.filter((s) =>
      form.services.includes(s.id),
    ).map((s) => s.label);

    const payload = {
      formType: "QUOTE",
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() ? `+971 ${form.phone.trim()}` : undefined,
      message: form.message.trim(),
      services: selectedLabels,
    };

    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBase) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      console.info("Quote request (pending backend):", payload);
      setStatus("success");
      setFeedback(
        "Thanks — your quote request was received. We’ll get back to you shortly.",
      );
      setForm(INITIAL);
      return;
    }

    try {
      const res = await fetch(`${apiBase}/api/v1/contact/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setFeedback("Thanks — we’ll get back to you shortly.");
      setForm(INITIAL);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again or email us directly.");
    }
  }

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close quote request"
            className="fixed inset-0 z-100 cursor-default border-0 bg-ink/35 backdrop-blur-[2px] dark:bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <div className="pointer-events-none fixed inset-0 z-101 flex items-end justify-center p-0 sm:items-center sm:p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-request-title"
              className="pointer-events-auto relative w-full max-w-180 overflow-hidden rounded-t-2xl border border-hairline bg-canvas p-2.5 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.28)] sm:max-h-[90dvh] sm:rounded-2xl dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 16 }}
              transition={PANEL_TRANSITION}
              onClick={(event) => event.stopPropagation()}
            >
              <form
                onSubmit={handleSubmit}
                className="flex max-h-[calc(92dvh-1.25rem)] flex-col overflow-hidden rounded-[10px] border border-hairline bg-surface-soft sm:max-h-[calc(90dvh-1.25rem)] dark:bg-surface-card"
              >
                <div className="flex shrink-0 items-start justify-between gap-4 border-b border-dashed border-hairline px-5 py-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <p className="text-sm font-medium text-muted">Get a quote</p>
                    </div>
                    <h2
                      id="quote-request-title"
                      className="mt-2 text-lg font-semibold tracking-tight text-ink sm:text-xl"
                    >
                      Request a quote
                    </h2>
                    <p className="mt-1 text-[12px] leading-snug text-muted sm:text-sm">
                      Tell us what you need — we’ll come back with a clear plan.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg p-1.5 text-muted transition-colors hover:bg-canvas hover:text-ink dark:hover:bg-surface-soft"
                    aria-label="Close"
                  >
                    <EmojiIcon emoji={EMOJI.x} className="text-lg" />
                  </button>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-0 p-5 sm:flex-row">
                    <div className="flex flex-1 flex-col gap-3.5 sm:pr-5">
                      <SectionHeading>Your details</SectionHeading>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                          <label htmlFor="quote-first-name" className={labelClass}>
                            First name <span className="text-brand-accent">*</span>
                          </label>
                          <input
                            id="quote-first-name"
                            name="firstName"
                            required
                            autoComplete="given-name"
                            value={form.firstName}
                            onChange={(e) => update("firstName", e.target.value)}
                            placeholder="First name"
                            disabled={busy}
                            className={fieldClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="quote-last-name" className={labelClass}>
                            Last name <span className="text-brand-accent">*</span>
                          </label>
                          <input
                            id="quote-last-name"
                            name="lastName"
                            required
                            autoComplete="family-name"
                            value={form.lastName}
                            onChange={(e) => update("lastName", e.target.value)}
                            placeholder="Last name"
                            disabled={busy}
                            className={fieldClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="quote-email" className={labelClass}>
                          Email <span className="text-brand-accent">*</span>
                        </label>
                        <input
                          id="quote-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="you@company.com"
                          disabled={busy}
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="quote-phone" className={labelClass}>
                          Contact number{" "}
                          <span className="text-brand-accent">*</span>
                        </label>
                        <div className="flex overflow-hidden rounded-lg border border-hairline bg-canvas focus-within:border-brand-accent focus-within:ring-1 focus-within:ring-brand-accent/30">
                          <span className="inline-flex shrink-0 items-center border-r border-hairline bg-surface-card px-3 text-sm font-medium text-muted dark:bg-surface-soft">
                            +971
                          </span>
                          <input
                            id="quote-phone"
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel-national"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            placeholder="50 000 0000"
                            disabled={busy}
                            className="min-w-0 flex-1 border-0 bg-transparent px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none disabled:opacity-60"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="quote-message" className={labelClass}>
                          Message
                        </label>
                        <textarea
                          id="quote-message"
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={(e) => update("message", e.target.value)}
                          placeholder="Tell us about your project, timeline, or quantity…"
                          disabled={busy}
                          className={cn(fieldClass, "min-h-20 resize-y")}
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex flex-1 flex-col border-t border-dashed border-hairline pt-5 sm:mt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5">
                      <SectionHeading>
                        Service looking for{" "}
                        <span className="text-brand-accent">*</span>
                      </SectionHeading>

                      <div className="flex flex-col gap-0.5">
                        {QUOTE_SERVICE_OPTIONS.map((service) => {
                          const checked = form.services.includes(service.id);
                          const ServiceIcon: ServiceIconComponent | undefined =
                            SERVICE_ICONS[service.id];
                          const fallbackEmoji =
                            SERVICE_FALLBACK_EMOJIS[service.id] ?? "⋯";
                          return (
                            <label
                              key={service.id}
                              className={cn(
                                "group/item flex cursor-pointer items-start gap-2.5 rounded-lg px-1.5 py-2.5 transition-colors",
                                "hover:bg-canvas dark:hover:bg-surface-soft",
                                checked && "bg-canvas dark:bg-surface-soft",
                              )}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleService(service.id)}
                                disabled={busy}
                                className={cn(
                                  "mt-0.5 size-4 shrink-0 appearance-none rounded-[4px] border transition-colors",
                                  "border-hairline bg-canvas",
                                  "checked:border-brand-accent checked:bg-brand-accent",
                                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/35",
                                  "disabled:opacity-60",
                                  "dark:border-white/25 dark:bg-transparent",
                                  "dark:checked:border-brand-accent dark:checked:bg-brand-accent",
                                  checked &&
                                    "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222.2%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M3.5%208.5%206.5%2011.5%2012.5%204.5%22%2F%3E%3C%2Fsvg%3E')] bg-center bg-no-repeat",
                                )}
                              />
                              {ServiceIcon ? (
                                <ServiceIcon
                                  className={cn(
                                    "mt-0.5 size-4 shrink-0 text-body transition-colors",
                                    checked
                                      ? "text-brand-accent"
                                      : "group-hover/item:text-brand-accent",
                                  )}
                                />
                              ) : (
                                <EmojiIcon
                                  emoji={fallbackEmoji}
                                  className={cn(
                                    "mt-0.5 text-sm text-body transition-colors",
                                    checked
                                      ? "text-brand-accent"
                                      : "group-hover/item:text-brand-accent",
                                  )}
                                />
                              )}
                              <span
                                className={cn(
                                  "min-w-0 text-sm font-semibold transition-colors",
                                  checked
                                    ? "text-brand-accent"
                                    : "text-ink group-hover/item:text-brand-accent",
                                )}
                              >
                                {service.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>

                      {form.services.length === 0 ? (
                        <p className="mt-2 text-[12px] text-muted">
                          Select at least one service.
                        </p>
                      ) : null}
                    </div>
                  </div>

                  {feedback ? (
                    <p
                      className={cn(
                        "border-t border-dashed border-hairline px-5 py-3 text-sm",
                        status === "error"
                          ? "text-red-600 dark:text-red-400"
                          : "text-muted",
                      )}
                    >
                      {feedback}
                    </p>
                  ) : null}
                </div>

                <div className="shrink-0 border-t border-dashed border-hairline px-5 py-4">
                  <button
                    type="submit"
                    disabled={busy || form.services.length === 0}
                    className={accentButtonClasses(
                      "w-full disabled:pointer-events-none disabled:opacity-60",
                    )}
                  >
                    {busy ? "Sending…" : "Submit quote request"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
