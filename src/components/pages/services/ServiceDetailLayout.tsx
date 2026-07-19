"use client";

import { PageHero } from "@/components/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import type { ServicePageContent } from "@/lib/service-pages";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ServiceDetailLayoutProps = {
  content: ServicePageContent;
};

export default function ServiceDetailLayout({
  content,
}: ServiceDetailLayoutProps) {
  const whatsappMessage = `Hello! I'm interested in ${content.hero.title}${
    content.hero.titleAccent ? ` ${content.hero.titleAccent}` : ""
  }.`;

  return (
    <main className="w-full overflow-x-hidden">
      <PageHero
        eyebrow={content.hero.eyebrow}
        eyebrowIcon={content.hero.eyebrowIcon}
        title={content.hero.title}
        titleAccent={content.hero.titleAccent}
        subtitle={content.hero.subtitle}
        description={content.hero.description}
        primaryAction={{
          label: "Request a quote",
          href: "/contact",
          icon: "contact",
        }}
        secondaryAction={{
          label: "Chat on WhatsApp",
          href: getWhatsAppUrl(whatsappMessage),
          variant: "soft",
          icon: "whatsapp",
        }}
      />
      <SectionDivider />
    </main>
  );
}
