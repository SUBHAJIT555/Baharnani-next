import type { PageHeroIcon } from "@/components/PageHero";

export type ServicePageContent = {
  slug: string;
  hero: {
    eyebrow: string;
    eyebrowIcon?: PageHeroIcon;
    title: string;
    titleAccent?: string;
    subtitle?: string;
    description?: string;
  };
};

export const PRINTING_SERVICE_PAGE: ServicePageContent = {
  slug: "printing",
  hero: {
    eyebrow: "Printing Services",
    eyebrowIcon: "layers",
    title: "Printing Services",
    titleAccent: "in Dubai",
    description:
      "In-house offset, digital, fabric, UV, and more — quality production at competitive rates.",
  },
};

const SERVICE_PAGES: Record<string, ServicePageContent> = {
  [PRINTING_SERVICE_PAGE.slug]: PRINTING_SERVICE_PAGE,
};

export function getServicePageContent(slug: string) {
  return SERVICE_PAGES[slug] ?? null;
}
