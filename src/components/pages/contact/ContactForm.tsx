"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  { id: "exhibition-stand", label: "Exhibition Stand" },
  { id: "corporate-gifts", label: "Corporate Gifts" },
  { id: "printing", label: "Printing Services" },
  { id: "rider-equipment", label: "Rider Equipment" },
  { id: "acrylic-fabrication", label: "Acrylic Fabrication & Joinery" },
  { id: "event-management", label: "Event Management" },
  { id: "website-development", label: "Website Development" },
  { id: "mobile-app-development", label: "Mobile App Development" },
  { id: "exhibition-kiosk", label: "Exhibition Kiosk" },
  { id: "other", label: "Other" },
];

const fieldClass = cn(
  "w-full rounded-lg border border-hairline bg-canvas px-3.5 py-2.5",
  "text-sm text-ink placeholder:text-muted",
  "focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30",
  "disabled:opacity-60",
);

const labelClass = "mb-1.5 block text-sm font-medium text-ink";

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

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

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

    const selectedLabels = SERVICE_OPTIONS.filter((s) =>
      form.services.includes(s.id),
    ).map((s) => s.label);

    const payload = {
      formType: "CONTACT",
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
      email: form.email.trim(),
      phone: form.phone.trim()
        ? `+971 ${form.phone.trim()}`
        : undefined,
      message: form.message.trim(),
      services: selectedLabels,
    };

    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBase) {
      const subject = encodeURIComponent(
        `Contact enquiry — ${payload.name || "Baharnani"}`,
      );
      const body = encodeURIComponent(
        [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          payload.phone ? `Phone: ${payload.phone}` : null,
          selectedLabels.length
            ? `Services: ${selectedLabels.join(", ")}`
            : null,
          "",
          payload.message,
        ]
          .filter(Boolean)
          .join("\n"),
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setFeedback("Opening your email client…");
      setForm(INITIAL);
      return;
    }

    try {
      const res = await fetch(`${apiBase}/api/v1/contact/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!json.status) throw new Error(json.message ?? "Something went wrong.");

      setStatus("success");
      setFeedback(json.message ?? "Thanks — we’ll get back to you shortly.");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  const busy = status === "loading";

  return (
    <section className="w-full bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
        <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Reveal animationNum={0}>
            <h2 className="text-balance text-display-md text-ink sm:text-display-lg">
              Let&apos;s level up your brand, together
            </h2>
            <p className="mt-3 text-body-md text-muted">
              You can reach us anytime via{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-brand-accent underline decoration-brand-accent/40 decoration-dotted underline-offset-4 transition-colors hover:text-ink"
              >
                {SITE.email}
              </a>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-first-name" className={labelClass}>
                    First name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="contact-first-name"
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
                  <label htmlFor="contact-last-name" className={labelClass}>
                    Last name <span className="text-brand-accent">*</span>
                  </label>
                  <input
                    id="contact-last-name"
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
                <label htmlFor="contact-email" className={labelClass}>
                  Email <span className="text-brand-accent">*</span>
                </label>
                <input
                  id="contact-email"
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
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone number
                </label>
                <div className="flex overflow-hidden rounded-lg border border-hairline focus-within:border-brand-accent focus-within:ring-1 focus-within:ring-brand-accent/30">
                  <span className="inline-flex shrink-0 items-center border-r border-hairline bg-surface-soft px-3 text-sm font-medium text-muted">
                    +971
                  </span>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel-national"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="50 000 0000"
                    disabled={busy}
                    className="min-w-0 flex-1 border-0 bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your project…"
                  disabled={busy}
                  className={cn(fieldClass, "min-h-26 resize-y")}
                />
              </div>

              <fieldset>
                <legend className={labelClass}>Services</legend>
                <div className="mt-1 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {SERVICE_OPTIONS.map((service) => {
                    const checked = form.services.includes(service.id);
                    return (
                      <label
                        key={service.id}
                        className="flex cursor-pointer items-center gap-2.5 text-sm text-ink"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(service.id)}
                          disabled={busy}
                          className={cn(
                            "size-4 shrink-0 appearance-none rounded-[4px] border transition-colors",
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
                        <span>{service.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <Button
                type="submit"
                variant="accent"
                disabled={busy}
                className="h-11 w-full"
              >
                {busy ? "Sending…" : "Get started"}
              </Button>

              {feedback ? (
                <p
                  className={cn(
                    "text-sm",
                    status === "error" ? "text-red-600 dark:text-red-400" : "text-muted",
                  )}
                  role="status"
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal
            animationNum={1}
            className="relative mx-auto hidden w-full max-w-md self-end lg:mx-0 lg:block lg:max-w-none"
          >
            <div className="relative aspect-752/880 w-full">
              <Image
                src="/images/contactPage/contact.svg"
                alt=""
                fill
                className="object-contain object-bottom"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority={false}
              />
            </div>
          </Reveal>
        </div>
      </RevealSection>
    </section>
  );
}
