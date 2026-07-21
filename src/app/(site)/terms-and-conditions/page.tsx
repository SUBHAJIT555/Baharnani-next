import { Scale } from "lucide-react";

import { LegalDocument } from "@/components/pages/legal/LegalDocument";
import {
  TERMS_UPDATED,
  TermsContent,
} from "@/components/pages/legal/TermsContent";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Terms & Conditions",
  `Legal terms governing your use of ${SITE.name} websites and services.`
);

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      eyebrowIcon={Scale}
      title="Terms & Conditions"
      description={`These Legal Terms form a binding agreement between you and ${SITE.name} regarding access to and use of our Site and Services.`}
      updated={TERMS_UPDATED}
    >
      <TermsContent />
    </LegalDocument>
  );
}
