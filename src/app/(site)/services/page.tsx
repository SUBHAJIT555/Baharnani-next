import ServicesCategories from "@/components/pages/services/ServicesCategories";
import ServicesWhyUs from "@/components/pages/services/ServicesWhyUs";
import HomeCta from "@/components/pages/home/HomeCta";
import { PageHero } from "@/components/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import { pageMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata(
  "Services",
  "Explore Baharnani’s full-service offering — creative, exhibition stands, corporate gifts, printing, acrylic, rider equipment, and events."
);

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <PageHero
        eyebrow="Full-service production"
        eyebrowIcon="layers"
        title="Everything your brand"
        titleAccent="needs"
        subtitle="from stands to digital"
        description="Exhibition stands, corporate gifts, commercial print, acrylic fabrication, rider equipment, event management, and creative digital through Code Cobble—strategy and production under one roof in Dubai."
        primaryAction={{
          label: "Request a quote",
          openQuote: true,
          icon: "contact",
        }}
          secondaryAction={{
          label: "Chat on WhatsApp",
          href: getWhatsAppUrl(),
          icon: "whatsapp",
          variant: "soft",
        }}
      />

      <SectionDivider />
      <ServicesCategories />
      <SectionDivider />
      <ServicesWhyUs />
      <SectionDivider />
      <HomeCta
        title={
          <>
            Ready to brief your next{" "}
            <span className="text-brand-accent">stand, gift, or campaign</span>?
          </>
        }
        description="Tell us what you need—exhibition stands, corporate gifts, print, acrylic, rider kits, events, or digital through Code Cobble. Our Dubai team will map scope, timeline, and budget so production starts with a clear plan."
        primaryAction={{
          label: "Request a quote",
          openQuote: true,
          icon: "contact",
        }}
      />
      <SectionDivider />
    </main>
  );
}
