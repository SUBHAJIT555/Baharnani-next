import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/site";

export const metadata = pageMetadata(
  "Services",
  "Explore Baharnani’s full-service offering — creative, exhibition stands, corporate gifts, printing, acrylic, rider equipment, and events."
);

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        eyebrowIcon="layers"
        title="Services we offer"
        description="From concept to production — one team covering the brand surfaces that matter in Dubai and the UAE."
      />

      <SectionDivider />

      <section className="w-full bg-canvas">
        <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid divide-y divide-hairline border border-hairline sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {SERVICES.map((service, index) => (
              <Reveal key={service.slug} animationNum={index}>
                <Link
                  href={service.href}
                  className="flex gap-4 p-6 transition-colors hover:bg-surface-soft sm:min-h-[180px]"
                >
                  <span className="font-mono text-caption text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-title-md text-ink">{service.title}</h2>
                    <p className="mt-2 text-body-sm text-muted">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </RevealSection>
      </section>
    </main>
  );
}
