"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 text-sm font-medium text-muted">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden />
      {children}
    </h3>
  );
}

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!apiBase) {
      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
      return;
    }

    try {
      const res = await fetch(`${apiBase}/api/v1/contact/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, formType: "NEWSLETTER" }),
      });

      const json = await res.json();
      if (!json.status) throw new Error(json.message ?? "Something went wrong.");

      setStatus("success");
      setMessage(json.message ?? "Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="max-w-xs space-y-4">
      <FooterHeading>Newsletter</FooterHeading>
      <p className="text-body-sm text-muted">
        Stay updated with our latest news, industry insights, and exclusive
        offers.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="footer-newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="footer-newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading"}
            className="w-full rounded-lg border border-hairline bg-surface-card px-4 py-2.5 text-body-sm text-ink placeholder:text-muted focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30 disabled:opacity-60"
          />
        </div>
        <Button
          type="submit"
          variant="accent"
          disabled={status === "loading"}
          className="w-full"
        >
          {status === "loading" ? "Submitting…" : "Subscribe"}
        </Button>
        {message && (
          <p
            className={`text-body-sm ${status === "error" ? "text-red-600" : "text-muted"}`}
            role="status"
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
