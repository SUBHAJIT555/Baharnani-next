import { Cookie } from "lucide-react";

import { LegalDocument } from "@/components/pages/legal/LegalDocument";
import {
  COOKIE_UPDATED,
  CookieContent,
} from "@/components/pages/legal/CookieContent";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Cookie Policy",
  `How ${SITE.name} uses cookies and similar technologies.`
);

export default function CookiePolicyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      eyebrowIcon={Cookie}
      title="Cookie Policy"
      description={`This Cookie Policy explains how ${SITE.name} uses cookies and similar tracking technologies on our Website.`}
      updated={COOKIE_UPDATED}
    >
      <CookieContent />
    </LegalDocument>
  );
}
