import AboutSection from "@/components/pages/about/AboutSection";
import AboutStats from "@/components/pages/about/AboutStats";
import AboutWhyChooseUs from "@/components/pages/about/AboutWhyChooseUs";
import HomeCta from "@/components/pages/home/HomeCta";
import HomeTestimonials from "@/components/pages/home/HomeTestimonials";
import { PageHero } from "@/components/PageHero";
import SectionDivider from "@/components/ui/SectionDivider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Us",
  "Baharnani Advertising LLC — over 12 years of advertising, printing, events, and brand solutions in Dubai.",
);

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <PageHero
        eyebrow="Dubai's most trusted partner"
        eyebrowIcon="sparkles"
        title="Your strategic"
        titleAccent="partner"
        subtitle="for exhibition, print, gifts & events"
        description="Baharnani Advertising LLC is a Dubai-based agency specializing in exhibition stands, corporate gifts, commercial print, event management, and digital—delivering strategy, production, and execution under one roof."
        primaryAction={{
          label: "Contact us",
          href: "/contact",
        }}
        secondaryAction={{
          label: "Explore our services",
          href: "/services",
        }}
      />

      <SectionDivider />

      <AboutSection />
      <SectionDivider />
      <AboutStats />
      <SectionDivider />
      <HomeTestimonials />
      <SectionDivider />
      <AboutWhyChooseUs />
      <SectionDivider />
      <HomeCta
        title={
          <>
            Stands, gifts, print &amp; events —{" "}
            <span className="text-brand-accent">ready under one roof</span>.
          </>
        }
        description="Browse exhibition stand builds, corporate gifting, commercial print, acrylic fabrication, event management, and digital through Code Cobble—then talk to our Dubai team about scope, timelines, and delivery."
        primaryAction={{
          label: "Explore our services",
          href: "/services",
          icon: "arrow",
        }}
      />
      <SectionDivider />
    </main>
  );
}
