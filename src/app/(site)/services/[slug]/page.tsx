import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import { MessageForwardIcon } from "@/components/icons/MessageForwardIcon";
import { PageHero } from "@/components/PageHero";
import ServiceDetailLayout from "@/components/pages/services/ServiceDetailLayout";
import {
  accentButtonClasses,
  softButtonClasses,
  contactButtonIconClasses,
  buttonIconClasses,
} from "@/components/ui/button";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { getServicePageContent } from "@/lib/service-pages";
import { getServiceBySlug, SERVICES } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePageContent(slug);
  const service = getServiceBySlug(slug);
  if (!service && !page) return {};

  if (page) {
    return pageMetadata(
      `${page.hero.title}${page.hero.titleAccent ? ` ${page.hero.titleAccent}` : ""}`,
      page.hero.description ?? service?.description ?? "",
    );
  }

  return pageMetadata(service!.title, service!.description);
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const pageContent = getServicePageContent(slug);
  if (pageContent) {
    return <ServiceDetailLayout content={pageContent} />;
  }

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Service"
        eyebrowIcon="briefcase"
        title={service.title}
        description={service.description}
      >
        <div className="flex flex-wrap gap-3">
          {service.externalUrl ? (
            <a
              href={service.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(accentButtonClasses("group w-full sm:w-auto"), "gap-2")}
            >
              Visit dedicated site
              <ArrowUpRightIcon className={buttonIconClasses} />
            </a>
          ) : null}
          <Link
            href="/contact"
            className={
              service.externalUrl
                ? softButtonClasses("group w-full sm:w-auto")
                : accentButtonClasses("group w-full sm:w-auto")
            }
          >
            Request a quote
            <MessageForwardIcon className={contactButtonIconClasses} />
          </Link>
        </div>
      </PageHero>

      <SectionDivider />

      <section className="w-full bg-canvas">
        <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-16">
          <Reveal
            animationNum={0}
            as="p"
            className="max-w-2xl text-body-md text-muted sm:text-[17px] sm:leading-7"
          >
            Detailed content for {service.title} will be built next. Route shell
            is ready at{" "}
            <span className="font-mono text-sm text-ink">
              /services/{service.slug}
            </span>
            .
          </Reveal>
        </RevealSection>
      </section>
    </main>
  );
}
