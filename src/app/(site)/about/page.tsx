import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Us",
  "Baharnani Advertising LLC — over 12 years of advertising, printing, events, and brand solutions in Dubai."
);

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        eyebrowIcon="building"
        title="Your strategic partner in Dubai."
        description="We are more than an advertising company. We help brands overcome a competitive market with tailored strategies, in-house production, and reliable execution across the UAE."
      />

      <SectionDivider />

      <section className="w-full bg-canvas">
        <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <Reveal
            animationNum={0}
            className="max-w-3xl space-y-4 text-body-md text-muted sm:text-[17px] sm:leading-7"
          >
            <p>
              Baharnani Advertising LLC operates from Sheikh Zayed Road, Dubai,
              delivering printing, acrylic fabrication, corporate gifts, rider
              equipment, exhibition stands, event management, and creative digital
              work under one roof.
            </p>
            <p>
              Content for this page will be expanded next — structure, rails, and
              motion are ready.
            </p>
          </Reveal>
        </RevealSection>
      </section>
    </main>
  );
}
