import {
  LegalLink,
  LegalList,
  LegalP,
  LegalSection,
  LegalSubheading,
} from "@/components/pages/legal/LegalDocument";
import { SITE } from "@/lib/site";

export const COOKIE_UPDATED = "21 July 2026";

export function CookieContent() {
  return (
    <div className="space-y-10">
      <LegalSection id="introduction" title="1. Introduction">
        <LegalP>
          This Cookie Policy explains how {SITE.name} (&quot;we&quot;,
          &quot;our&quot;, or &quot;us&quot;) uses cookies and similar tracking
          technologies on our website{" "}
          <LegalLink href={SITE.url} external>
            {SITE.url}
          </LegalLink>{" "}
          (&quot;Website&quot;).
        </LegalP>
        <LegalP>
          By continuing to browse or use our Website, you consent to the use of
          cookies as described below.
        </LegalP>
        <LegalP>
          You can manage or disable cookies anytime through your browser
          settings.
        </LegalP>
      </LegalSection>

      <LegalSection id="what-are-cookies" title="2. What Are Cookies">
        <LegalP>
          Cookies are small text files stored on your device (computer, tablet,
          or smartphone) when you visit a website.
        </LegalP>
        <LegalP>
          They help websites function properly, remember preferences, and analyze
          user activity for performance and improvement.
        </LegalP>
      </LegalSection>

      <LegalSection id="types" title="3. Types of Cookies We Use">
        <LegalSubheading>a. Essential Cookies</LegalSubheading>
        <LegalP>
          These cookies are required for the basic operation of our Website —
          such as page navigation, security verification, and form submission.
        </LegalP>
        <LegalP>
          Disabling them may cause parts of the site to stop functioning
          correctly.
        </LegalP>

        <LegalSubheading>b. Performance &amp; Analytics Cookies</LegalSubheading>
        <LegalP>
          We use cookies (e.g., Google Analytics) to understand how visitors
          interact with our Website — pages visited, time spent, and referral
          sources.
        </LegalP>
        <LegalP>
          This helps us improve our content and user experience.
        </LegalP>

        <LegalSubheading>c. Functional Cookies</LegalSubheading>
        <LegalP>
          These cookies remember your preferences — such as language choice or
          form inputs — so that your experience is smoother on return visits.
        </LegalP>

        <LegalSubheading>d. Marketing &amp; Third-Party Cookies</LegalSubheading>
        <LegalP>
          Occasionally, third-party tools (e.g., embedded maps, social media
          links, or YouTube videos) may set cookies to track engagement or view
          counts.
        </LegalP>
        <LegalP>We do not control these cookies directly.</LegalP>
      </LegalSection>

      <LegalSection id="managing" title="4. Managing or Disabling Cookies">
        <LegalP>
          You can control cookie behavior through your browser settings:
        </LegalP>
        <LegalList
          items={[
            "Google Chrome: Settings → Privacy & Security → Cookies and Other Site Data",
            "Safari: Preferences → Privacy",
            "Microsoft Edge / Firefox: Settings → Privacy & Security",
          ]}
        />
        <LegalP>
          You can choose to block, delete, or restrict cookies.
        </LegalP>
        <LegalP>
          Please note that disabling certain cookies may affect the
          Website&apos;s performance or functionality.
        </LegalP>
      </LegalSection>

      <LegalSection
        id="third-party"
        title="5. Third-Party Tools and Services"
      >
        <LegalP>
          We may integrate analytics, advertising, or embedded services that use
          cookies, such as:
        </LegalP>
        <LegalList
          items={[
            "Google Analytics (traffic measurement)",
            "Google Maps (location display)",
            "Social Media Widgets (LinkedIn, Instagram, Facebook links)",
          ]}
        />
        <LegalP>
          Each third-party service follows its own privacy and cookie policy.
        </LegalP>
        <LegalP>
          We recommend reviewing their individual policies for more details. For
          how we handle personal data more broadly, see our{" "}
          <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>.
        </LegalP>
      </LegalSection>

      <LegalSection id="updates" title="6. Updates to This Policy">
        <LegalP>
          We may revise this Cookie Policy periodically to reflect changes in
          technology, legal requirements, or our operations.
        </LegalP>
        <LegalP>
          Any updates will be posted on this page with a revised &quot;Last
          Updated&quot; date.
        </LegalP>
        <LegalP>
          Your continued use of our Website implies acceptance of the updated
          version.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="7. Contact Us">
        <LegalP>
          For any questions regarding our Cookie Policy or data practices,
          please reach out to:
        </LegalP>
        <address className="max-w-3xl not-italic rounded-xl border border-dashed border-hairline bg-surface-soft px-4 py-4 text-body sm:px-5">
          <p className="font-semibold text-ink">{SITE.name}</p>
          <p className="mt-2">{SITE.address}</p>
          <p>United Arab Emirates</p>
          <p className="mt-3">
            Phone:{" "}
            <LegalLink href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
              {SITE.phone}
            </LegalLink>
          </p>
          <p>
            Email:{" "}
            <LegalLink href={`mailto:${SITE.email}`}>{SITE.email}</LegalLink>
          </p>
        </address>
      </LegalSection>
    </div>
  );
}
