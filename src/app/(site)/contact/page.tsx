import ContactForm from "@/components/pages/contact/ContactForm";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactLocations from "@/components/pages/contact/ContactLocations";
import SectionDivider from "@/components/ui/SectionDivider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Get in touch with Baharnani Advertising LLC in Dubai for printing, events, gifts, and full-service marketing.",
);

export default function ContactPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <ContactHero />
      <SectionDivider />
      <ContactLocations />
      <SectionDivider />
      <ContactForm />
      <SectionDivider />
    </main>
  );
}
