import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { softButtonClasses } from "@/components/ui/button";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Blog",
  "Exhibition, branding, printing, and marketing insights from Baharnani Advertising."
);

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        eyebrowIcon="newspaper"
        title="Latest insights"
        description="Thoughts on exhibition design, printing, digital, and brand work across Dubai and the UAE."
      />

      <SectionDivider />

      <section className="w-full bg-canvas">
        <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <Reveal
            animationNum={0}
            as="p"
            className="max-w-2xl text-body-md text-muted sm:text-[17px] sm:leading-7"
          >
            Blog listing will pull posts here. For now, see the live archive on{" "}
            <a
              href="https://baharnani.com/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline underline-offset-4"
            >
              baharnani.com/blog
            </a>
            .
          </Reveal>
          <Reveal animationNum={1} className="mt-6">
            <Link
              href="/blog/sample-post"
              className={softButtonClasses()}
            >
              Sample post route
            </Link>
          </Reveal>
        </RevealSection>
      </section>
    </main>
  );
}
