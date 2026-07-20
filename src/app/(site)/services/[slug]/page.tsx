import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import ServiceDetailLayout from "@/components/pages/services/ServiceDetailLayout";
import SectionDivider from "@/components/ui/SectionDivider";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";
import { getServicePageContent } from "@/lib/service-pages";
import { getServiceBySlug, SERVICES } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

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
        primaryAction={
          service.externalUrl
            ? {
                label: "Visit dedicated site",
                href: service.externalUrl,
                icon: "arrow",
              }
            : {
                label: "Request a quote",
                openQuote: true,
                quoteServiceId: service.slug,
                icon: "contact",
              }
        }
        secondaryAction={
          service.externalUrl
            ? {
                label: "Request a quote",
                openQuote: true,
                quoteServiceId: service.slug,
                icon: "contact",
                variant: "soft",
              }
            : undefined
        }
      />

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
