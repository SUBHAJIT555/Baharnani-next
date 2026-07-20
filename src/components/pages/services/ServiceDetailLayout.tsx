"use client";

import HomeCta from "@/components/pages/home/HomeCta";
import { PageHero } from "@/components/PageHero";
import ServiceAbout from "@/components/pages/services/ServiceAbout";
import ServiceOfferings from "@/components/pages/services/ServiceOfferings";
import SectionDivider from "@/components/ui/SectionDivider";
import type { ServicePageContent } from "@/lib/service-pages";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ServiceDetailLayoutProps = {
  content: ServicePageContent;
};

export default function ServiceDetailLayout({
  content,
}: ServiceDetailLayoutProps) {
  const serviceLabel = `${content.hero.title}${
    content.hero.titleAccent ? ` ${content.hero.titleAccent}` : ""
  }`;
  const whatsappMessage = `Hello! I'm interested in ${serviceLabel}.`;

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
      <ServiceAbout content={content.about} />
      <SectionDivider />
      {content.offerings ? (
        <>
          <ServiceOfferings content={content.offerings} />
          <SectionDivider />
        </>
      ) : null}
      {content.cta ? (
        <>
          <HomeCta
            title={
              <>
                {content.cta.title}{" "}
                {content.cta.titleAccent ? (
                  <span className="text-brand-accent">
                    {content.cta.titleAccent}
                  </span>
                ) : null}
              </>
            }
            description={content.cta.description}
            primaryAction={{
              label: content.cta.primaryLabel ?? "Request a quote",
              href: "/contact",
              icon: "contact",
            }}
            whatsappMessage={whatsappMessage}
          />
          <SectionDivider />
        </>
      ) : null}
    </main>
  );
}
