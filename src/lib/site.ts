export type ServiceItem = {
  title: string;
  slug: string;
  href: string;
  description: string;
  /** Dedicated brand / microsite when the service has its own site */
  externalUrl?: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Exhibition Stand",
    slug: "exhibition-stand",
    href: "/services/exhibition-stand",
    description:
      "Custom exhibition stand design, build, and installation across the UAE.",
    externalUrl: "https://exhibitionstandsuae.ae/",
  },
  
  {
    title: "Corporate Gifts",
    slug: "corporate-gifts",
    href: "/services/corporate-gifts",
    description:
      "Custom, luxury, and promotional corporate gifts for Dubai & the UAE.",
    externalUrl: "https://corporategiftsdubaii.ae/",
  },
  {
    title: "Creative Agency",
    slug: "creative-agency",
    href: "/services/creative-agency",
    description:
      "Website development, UI/UX, kiosk games, and digital solutions through Code Cobble.",
    externalUrl: "https://codecobble.com/",
  },
  {
    title: "Printing Services",
    slug: "printing",
    href: "/services/printing",
    description:
      "High-quality commercial and promotional printing with in-house production.",
  },
  
  {
    title: "Rider Equipment",
    slug: "rider-equipment",
    href: "/services/rider-equipment",
    description:
      "Branded rider equipment for visibility, comfort, and lasting impressions.",
  },
  {
    title: "Acrylic Fabrication",
    slug: "acrylic-fabrication",
    href: "/services/acrylic-fabrication",
    description:
      "Custom acrylic displays, signage, and fabrication crafted to specification.",
  },
  {
    title: "Event Management",
    slug: "event-management",
    href: "/services/event-management",
    description:
      "End-to-end corporate and branded event management across Dubai & the GCC.",
  },
  
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: SERVICES },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;

export const SITE = {
  name: "Baharnani Advertising LLC",
  shortName: "Baharnani",
  email: "info@baharnani.com",
  phone: "+971 52 624 0517",
  whatsappNumber: "971526240517",
  address: "Sheikh Zayed Road – Dubai",
  url: "https://baharnani.com",
  googleRating: 4.9,
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJO7SOrsRpXz4RIm-KxaoNZzQ",
} as const;
