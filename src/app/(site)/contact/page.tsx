
import { PageHero } from "@/components/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Get in touch with Baharnani Advertising LLC in Dubai for printing, events, gifts, and full-service marketing."
);

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        eyebrowIcon="mail"
        title="Let’s talk about your next project."
        description="Reach the team for quotes, collaborations, and campaign planning."
      />

      <SectionDivider />

      <section className="w-full bg-canvas">
        <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid border border-hairline sm:grid-cols-3 sm:divide-x sm:divide-hairline">
            {[
              { label: "Address", value: SITE.address },
              {
                label: "Email",
                value: SITE.email,
                href: `mailto:${SITE.email}`,
              },
              {
                label: "Phone",
                value: SITE.phone,
                href: `tel:${SITE.phone.replace(/\s/g, "")}`,
              },
            ].map((item, index) => (
              <Reveal
                key={item.label}
                animationNum={index}
                className="border-b border-hairline p-6 last:border-b-0 sm:border-b-0"
              >
                <p className="text-caption font-medium text-muted">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-title-sm text-ink transition-colors hover:text-brand-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-title-sm text-ink">{item.value}</p>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal
            animationNum={3}
            as="p"
            className="mt-8 text-body-sm text-muted"
          >
            Contact form UI will be added next.
          </Reveal>
        </RevealSection>
      </section>
    </main>
  );
}
