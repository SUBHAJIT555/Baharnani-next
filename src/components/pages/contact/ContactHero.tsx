"use client";

import { Headphones, Mail, Phone } from "lucide-react";
import { WhatsAppOutlineIcon } from "@/components/icons/WhatsAppIcon";
import ContactWorldMap from "@/components/pages/contact/ContactWorldMap";
import { SectionEyebrow } from "@/components/ui/Section";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ContactChannel = {
  title: string;
  description: string;
  value: string;
  href: string;
  external?: boolean;
  icon: "mail" | "whatsapp" | "phone";
};

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    title: "Email support",
    description: "Our friendly team is here to help.",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: "mail",
  },
  {
    title: "Sales & quotes",
    description: "Questions or a brief? Get in touch.",
    value: "Chat on WhatsApp",
    href: getWhatsAppUrl(),
    external: true,
    icon: "whatsapp",
  },
  {
    title: "Call us",
    description: "Sun–Thu, Dubai business hours.",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    icon: "phone",
  },
];

function ChannelIcon({ type }: { type: ContactChannel["icon"] }) {
  const className = "size-4 text-brand-accent";
  if (type === "whatsapp") return <WhatsAppOutlineIcon className={className} />;
  if (type === "phone") return <Phone className={className} />;
  return <Mail className={className} />;
}

export default function ContactHero() {
  return (
    <section className="w-full bg-canvas">
      <RevealSection className="relative mx-auto max-w-7xl overflow-hidden border-x border-hairline">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 70%)",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--primary) 28%, transparent) 1px, transparent 0)",
            backgroundSize: "10px 10px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 0%, black 30%, transparent 70%)",
            opacity: 0.5,
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 pt-24 pb-6 text-center sm:px-6 sm:pt-28 sm:pb-8 lg:pt-26">
          <Reveal animationNum={0}>
            <SectionEyebrow icon={Headphones} className="mx-auto">
              Contact us
            </SectionEyebrow>
          </Reveal>

          <Reveal
            animationNum={1}
            as="h1"
            className="mt-6 text-balance text-display-xl text-ink"
          >
            We&apos;d love to hear from you
          </Reveal>

          <Reveal
            animationNum={2}
            as="p"
            className="mx-auto mt-4 max-w-xl text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7"
          >
            Based in Dubai - serving brands across the UAE, GCC, and beyond.
          </Reveal>
        </div>

        <Reveal animationNum={3} className="relative z-10 px-4 sm:px-8 lg:px-12">
          <ContactWorldMap className="py-2 sm:py-4" />
        </Reveal>

        <div className="relative z-10 mx-auto max-w-5xl px-5 pb-14 sm:px-6 sm:pb-16 lg:pb-10">
          <div className="grid gap-0 border-t border-dashed border-hairline pt-10 sm:grid-cols-3 sm:pt-12">
            {CONTACT_CHANNELS.map((item, index) => (
              <Reveal
                key={item.title}
                animationNum={4 + index}
                className={cn(
                  "px-2 py-8 text-center sm:px-6 sm:py-2",
                  index > 0 &&
                    "border-t border-dashed border-hairline sm:border-t-0 sm:border-l",
                )}
              >
                <span className="mx-auto flex size-10 items-center justify-center rounded-xl border border-dashed border-hairline bg-surface-card shadow-[4px_2px_12px_-2px_rgba(0,0,0,0.08)] dark:shadow-[4px_2px_12px_-2px_rgba(0,0,0,0.35)]">
                  <ChannelIcon type={item.icon} />
                </span>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {item.title}
                </h2>
                <p className="mx-auto mt-2 max-w-[16rem] text-body-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-accent underline decoration-brand-accent/40 decoration-dotted underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
                >
                  {item.value}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
