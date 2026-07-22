import { LegalDocument } from "@/components/pages/legal/LegalDocument";
import {
  PRIVACY_UPDATED,
  PrivacyContent,
} from "@/components/pages/legal/PrivacyContent";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  `How ${SITE.name} collects, uses, and protects your information.`
);

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      description={`This Privacy Notice explains how ${SITE.name} processes your personal information when you use our Site and Services.`}
      updated={PRIVACY_UPDATED}
    >
      <PrivacyContent />
    </LegalDocument>
  );
}
