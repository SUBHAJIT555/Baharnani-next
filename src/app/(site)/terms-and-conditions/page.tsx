
import { PageHero } from "@/components/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "Terms and conditions for using Baharnani Advertising LLC websites and services."
);

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        eyebrowIcon="scale"
        title="Terms & Conditions"
        description="This placeholder page is ready for your legal copy."
      />
      <SectionDivider />
      <section className="w-full bg-canvas">
        <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <Reveal
            animationNum={0}
            as="p"
            className="max-w-3xl text-body-md text-muted"
          >
            Terms and conditions content will be added here.
          </Reveal>
        </RevealSection>
      </section>
    </main>
  );
}
