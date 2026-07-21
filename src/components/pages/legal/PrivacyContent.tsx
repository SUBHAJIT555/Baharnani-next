import type { ReactNode } from "react";

import {
  LegalLink,
  LegalList,
  LegalP,
  LegalSection,
  LegalSubheading,
} from "@/components/pages/legal/LegalDocument";
import { SITE } from "@/lib/site";

function LegalInShort({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-3xl rounded-lg border border-hairline bg-surface-soft/60 px-4 py-3 text-sm leading-relaxed text-body">
      <span className="font-semibold text-ink">In Short: </span>
      {children}
    </p>
  );
}

export const PRIVACY_UPDATED = "21 July 2026";

export function PrivacyContent() {
  return (
    <div className="space-y-10">
      <LegalSection id="introduction" title="Privacy Notice">
        <LegalP>
          This Privacy Notice for {SITE.name} (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), describes how and why we might access, collect,
          store, use, and/or share (&quot;process&quot;) your personal
          information when you use our services (&quot;Services&quot;),
          including when you:
        </LegalP>
        <LegalList
          items={[
            <>
              Visit our website at{" "}
              <LegalLink href={SITE.url} external>
                {SITE.url}
              </LegalLink>
              , or any website of ours that links to this Privacy Notice
            </>,
            <>
              Use our advertising and brand solutions, including exhibition
              stand design and build, corporate and promotional gifts, creative
              and digital agency services, commercial printing, branded rider
              equipment, acrylic fabrication, and event management across Dubai
              and the UAE. We specialize in personalized, branded products and
              end-to-end production tailored to reflect your brand identity and
              strengthen business relationships.
            </>,
            "Engage with us in other related ways, including any sales, marketing, or events",
          ]}
        />
        <LegalP>
          Questions or concerns? Reading this Privacy Notice will help you
          understand your privacy rights and choices. We are responsible for
          making decisions about how your personal information is processed. If
          you do not agree with our policies and practices, please do not use our
          Services. If you still have any questions or concerns, please contact
          us at{" "}
          <LegalLink href={`mailto:${SITE.email}`}>{SITE.email}</LegalLink>.
        </LegalP>
      </LegalSection>

      <LegalSection id="summary" title="Summary of Key Points">
        <LegalP>
          This summary provides key points from our Privacy Notice, but you can
          find out more details about any of these topics by using the table of
          contents below to find the section you are looking for.
        </LegalP>
        <LegalList
          ordered
          items={[
            <>
              <strong className="font-semibold text-ink">
                What personal information do we process?
              </strong>{" "}
              When you visit, use, or navigate our Services, we may process
              personal information depending on how you interact with us and
              the Services, the choices you make, and the products and features
              you use.{" "}
              <LegalLink href="#collect">
                Learn more about personal information you disclose to us
              </LegalLink>
              .
            </>,
            <>
              <strong className="font-semibold text-ink">
                Do we process any sensitive personal information?
              </strong>{" "}
              Some of the information may be considered &quot;special&quot; or
              &quot;sensitive&quot; in certain jurisdictions, for example your
              racial or ethnic origins, sexual orientation, and religious
              beliefs. We do not process sensitive personal information.
            </>,
            <>
              <strong className="font-semibold text-ink">
                Do we collect any information from third parties?
              </strong>{" "}
              We do not collect any information from third parties.
            </>,
            <>
              <strong className="font-semibold text-ink">
                How do we process your information?
              </strong>{" "}
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent. We process your
              information only when we have a valid legal reason to do so.{" "}
              <LegalLink href="#process">
                Learn more about how we process your information
              </LegalLink>
              .
            </>,
            <>
              <strong className="font-semibold text-ink">
                In what situations and with which types of parties do we share
                personal information?
              </strong>{" "}
              We may share information in specific situations and with specific
              categories of third parties.{" "}
              <LegalLink href="#share">
                Learn more about when and with whom we share your personal
                information
              </LegalLink>
              .
            </>,
            <>
              <strong className="font-semibold text-ink">
                How do we keep your information safe?
              </strong>{" "}
              We have adequate organizational and technical processes and
              procedures in place to protect your personal information.
              However, no electronic transmission over the internet or
              information storage technology can be guaranteed to be 100%
              secure, so we cannot promise or guarantee that hackers,
              cybercriminals, or other unauthorized third parties will not be
              able to defeat our security and improperly collect, access, steal,
              or modify your information.{" "}
              <LegalLink href="#security">
                Learn more about how we keep your information safe
              </LegalLink>
              .
            </>,
            <>
              <strong className="font-semibold text-ink">
                What are your rights?
              </strong>{" "}
              Depending on where you are located geographically, the applicable
              privacy law may mean you have certain rights regarding your
              personal information.{" "}
              <LegalLink href="#rights">
                Learn more about your privacy rights
              </LegalLink>
              .
            </>,
            <>
              <strong className="font-semibold text-ink">
                How do you exercise your rights?
              </strong>{" "}
              The easiest way to exercise your rights is by visiting{" "}
              <LegalLink href="/contact">our contact page</LegalLink>, or by
              contacting us. We will consider and act upon any request in
              accordance with applicable data protection laws.
            </>,
            <>
              Want to learn more about what we do with any information we
              collect? Review the Privacy Notice in full below.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="contents" title="Table of Contents">
        <LegalList
          items={[
            <LegalLink key="collect" href="#collect">
              What information do we collect?
            </LegalLink>,
            <LegalLink key="process" href="#process">
              How do we process your information?
            </LegalLink>,
            <LegalLink key="share" href="#share">
              When and with whom do we share your personal information?
            </LegalLink>,
            <LegalLink key="cookies" href="#cookies">
              Do we use cookies and other tracking technologies?
            </LegalLink>,
            <LegalLink key="retention" href="#retention">
              How long do we keep your information?
            </LegalLink>,
            <LegalLink key="security" href="#security">
              How do we keep your information safe?
            </LegalLink>,
            <LegalLink key="rights" href="#rights">
              What are your privacy rights?
            </LegalLink>,
            <LegalLink key="dnt" href="#dnt">
              Controls for do-not-track features
            </LegalLink>,
            <LegalLink key="updates" href="#updates">
              Do we make updates to this notice?
            </LegalLink>,
            <LegalLink key="contact" href="#contact">
              How can you contact us about this notice?
            </LegalLink>,
            <LegalLink key="review" href="#review">
              How can you review, update, or delete the data we collect from
              you?
            </LegalLink>,
          ]}
        />
      </LegalSection>

      <LegalSection id="collect" title="1. What Information Do We Collect?">
        <LegalSubheading>Personal information you disclose to us</LegalSubheading>
        <LegalInShort>
          We collect personal information that you provide to us.
        </LegalInShort>
        <LegalP>
          We collect personal information that you voluntarily provide to us when
          you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you participate
          in activities on the Services, or otherwise when you contact us.
        </LegalP>
        <LegalP>
          <strong className="font-semibold text-ink">
            Personal Information Provided by You.
          </strong>{" "}
          The personal information that we collect depends on the context of
          your interactions with us and the Services, the choices you make, and
          the products and features you use. The personal information we collect
          may include the following:
        </LegalP>
        <LegalList
          items={[
            "names",
            "phone numbers",
            "email addresses",
            "mailing addresses",
            "billing addresses",
          ]}
        />
        <LegalP>
          <strong className="font-semibold text-ink">Sensitive Information.</strong>{" "}
          We do not process sensitive information.
        </LegalP>
        <LegalP>
          All personal information that you provide to us must be true, complete,
          and accurate, and you must notify us of any changes to such personal
          information.
        </LegalP>

        <LegalSubheading>Information automatically collected</LegalSubheading>
        <LegalInShort>
          Some information — such as your Internet Protocol (IP) address and/or
          browser and device characteristics — is collected automatically when
          you visit our Services.
        </LegalInShort>
        <LegalP>
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services, and for our internal analytics and reporting purposes.
        </LegalP>
        <LegalP>
          Like many businesses, we also collect information through cookies and
          similar technologies. You can find out more about this in our{" "}
          <LegalLink href="/cookie-policy">Cookie Policy</LegalLink>.
        </LegalP>
        <LegalP>The information we collect includes:</LegalP>
        <LegalList
          items={[
            <>
              <strong className="font-semibold text-ink">Log and Usage Data.</strong>{" "}
              Log and usage data is service-related, diagnostic, usage, and
              performance information our servers automatically collect when you
              access or use our Services and which we record in log files.
              Depending on how you interact with us, this log data may include
              your IP address, device information, browser type, and settings
              and information about your activity in the Services (such as the
              date/time stamps associated with your usage, pages and files
              viewed, searches, and other actions you take such as which
              features you use), device event information (such as system
              activity, error reports (sometimes called &quot;crash dumps&quot;),
              and hardware settings).
            </>,
            <>
              <strong className="font-semibold text-ink">Device Data.</strong> We
              collect device data such as information about your computer,
              phone, tablet, or other device you use to access the Services.
              Depending on the device used, this device data may include
              information such as your IP address (or proxy server), device and
              application identification numbers, location, browser type,
              hardware model, Internet service provider and/or mobile carrier,
              operating system, and system configuration information.
            </>,
            <>
              <strong className="font-semibold text-ink">Location Data.</strong>{" "}
              We collect location data such as information about your
              device&apos;s location, which can be either precise or imprecise.
              How much information we collect depends on the type and settings of
              the device you use to access the Services. For example, we may use
              GPS and other technologies to collect geolocation data that tells
              us your current location (based on your IP address). You can opt
              out of allowing us to collect this information either by refusing
              access to the information or by disabling your Location setting on
              your device. However, if you choose to opt out, you may not be
              able to use certain aspects of the Services.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="process" title="2. How Do We Process Your Information?">
        <LegalInShort>
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent.
        </LegalInShort>
        <LegalP>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </LegalP>
        <LegalList
          items={[
            "To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.",
            "To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.",
            "To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.",
            "To fulfill and manage your orders. We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.",
            "To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.",
            <>
              To send you marketing and promotional communications. We may
              process the personal information you send to us for our marketing
              purposes, if this is in accordance with your marketing
              preferences. You can opt out of our marketing emails at any time.
              For more information, see &quot;What Are Your Privacy Rights?&quot;
              below.
            </>,
            <>
              To deliver targeted advertising to you. We may process your
              information to develop and display personalized content and
              advertising tailored to your interests, location, and more. For
              more information see our{" "}
              <LegalLink href="/cookie-policy">Cookie Policy</LegalLink>.
            </>,
            "To post testimonials. We post testimonials on our Services that may contain personal information.",
          ]}
        />
      </LegalSection>

      <LegalSection
        id="share"
        title="3. When and With Whom Do We Share Your Personal Information?"
      >
        <LegalInShort>
          We may share information in specific situations described in this
          section and/or with the following categories of third parties.
        </LegalInShort>
        <LegalP>
          <strong className="font-semibold text-ink">
            Vendors, Consultants, and Other Third-Party Service Providers.
          </strong>{" "}
          We may share your data with third-party vendors, service providers,
          contractors, or agents (&quot;third parties&quot;) who perform services
          for us or on our behalf and require access to such information to do
          that work. We have contracts in place with our third parties, which
          are designed to help safeguard your personal information. This means
          that they cannot do anything with your personal information unless we
          have instructed them to do it. They will also not share your personal
          information with any organization apart from us. They also commit to
          protect the data they hold on our behalf and to retain it for the
          period we instruct.
        </LegalP>
        <LegalP>
          The categories of third parties we may share personal information with
          are as follows:
        </LegalP>
        <LegalList
          items={[
            "Data Analytics Services",
            "Retargeting Platforms",
            "Sales & Marketing Tools",
          ]}
        />
        <LegalP>
          We also may need to share your personal information in the following
          situations:
        </LegalP>
        <LegalList
          items={[
            "Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
          ]}
        />
      </LegalSection>

      <LegalSection
        id="cookies"
        title="4. Do We Use Cookies and Other Tracking Technologies?"
      >
        <LegalInShort>
          We may use cookies and other tracking technologies to collect and
          store your information.
        </LegalInShort>
        <LegalP>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to gather information when you interact with our Services.
          Some online tracking technologies help us maintain the security of our
          Services and your account, prevent crashes, fix bugs, save your
          preferences, and assist with basic site functions.
        </LegalP>
        <LegalP>
          We also permit third parties and service providers to use online
          tracking technologies on our Services for analytics and advertising,
          including to help manage and display advertisements, to tailor
          advertisements to your interests, or to send abandoned shopping cart
          reminders (depending on your communication preferences). The third
          parties and service providers use their technology to provide
          advertising about products and services tailored to your interests
          which may appear either on our Services or on other websites.
        </LegalP>
        <LegalP>
          Specific information about how we use such technologies and how you
          can refuse certain cookies is set out in our{" "}
          <LegalLink href="/cookie-policy">Cookie Policy</LegalLink>.
        </LegalP>

        <LegalSubheading>Google Analytics</LegalSubheading>
        <LegalP>
          We may share your information with Google Analytics to track and
          analyze the use of the Services. The Google Analytics Advertising
          Features that we may use include: Remarketing with Google Analytics,
          Google Display Network Impressions Reporting and Google Analytics
          Demographics and Interests Reporting. To opt out of being tracked by
          Google Analytics across the Services, visit{" "}
          <LegalLink href="https://tools.google.com/dlpage/gaoptout" external>
            https://tools.google.com/dlpage/gaoptout
          </LegalLink>
          . You can opt out of Google Analytics Advertising Features through Ads
          Settings and Ad Settings for mobile apps. Other opt out means include{" "}
          <LegalLink href="http://optout.networkadvertising.org/" external>
            http://optout.networkadvertising.org/
          </LegalLink>{" "}
          and{" "}
          <LegalLink href="http://www.networkadvertising.org/mobile-choice" external>
            http://www.networkadvertising.org/mobile-choice
          </LegalLink>
          . For more information on the privacy practices of Google, please visit
          the{" "}
          <LegalLink href="https://policies.google.com/privacy" external>
            Google Privacy &amp; Terms page
          </LegalLink>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="retention" title="5. How Long Do We Keep Your Information?">
        <LegalInShort>
          We keep your information for as long as necessary to fulfill the
          purposes outlined in this Privacy Notice unless otherwise required by
          law.
        </LegalInShort>
        <LegalP>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </LegalP>
        <LegalP>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we
          will securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </LegalP>
      </LegalSection>

      <LegalSection id="security" title="6. How Do We Keep Your Information Safe?">
        <LegalInShort>
          We aim to protect your personal information through a system of
          organizational and technical security measures.
        </LegalInShort>
        <LegalP>
          We have implemented appropriate and reasonable technical and
          organizational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </LegalP>
      </LegalSection>

      <LegalSection id="rights" title="7. What Are Your Privacy Rights?">
        <LegalInShort>
          You may review, change, or terminate your account at any time,
          depending on your country, province, or state of residence.
        </LegalInShort>
        <LegalP>
          <strong className="font-semibold text-ink">
            Withdrawing your consent:
          </strong>{" "}
          If we are relying on your consent to process your personal
          information, which may be express and/or implied consent depending on
          the applicable law, you have the right to withdraw your consent at any
          time. You can withdraw your consent at any time by contacting us by
          using the contact details provided in the section &quot;How Can You
          Contact Us About This Notice?&quot; below.
        </LegalP>
        <LegalP>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </LegalP>
        <LegalP>
          <strong className="font-semibold text-ink">
            Opting out of marketing and promotional communications:
          </strong>{" "}
          You can unsubscribe from our marketing and promotional communications
          at any time by clicking on the unsubscribe link in the emails that we
          send, or by contacting us using the details provided in the section
          &quot;How Can You Contact Us About This Notice?&quot; below. You will
          then be removed from the marketing lists. However, we may still
          communicate with you — for example, to send you service-related
          messages that are necessary for the administration and use of your
          account, to respond to service requests, or for other non-marketing
          purposes.
        </LegalP>

        <LegalSubheading>Account Information</LegalSubheading>
        <LegalP>
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
        </LegalP>
        <LegalList
          items={[
            "Log in to your account settings and update your user account.",
            "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.",
          ]}
        />
        <LegalP>
          <strong className="font-semibold text-ink">
            Cookies and similar technologies:
          </strong>{" "}
          Most Web browsers are set to accept cookies by default. If you prefer,
          you can usually choose to set your browser to remove cookies and to
          reject cookies. If you choose to remove cookies or reject cookies,
          this could affect certain features or services of our Services. For
          further information, please see our{" "}
          <LegalLink href="/cookie-policy">Cookie Policy</LegalLink>.
        </LegalP>
        <LegalP>
          If you have questions or comments about your privacy rights, you may
          email us at{" "}
          <LegalLink href={`mailto:${SITE.email}`}>{SITE.email}</LegalLink>.
        </LegalP>
      </LegalSection>

      <LegalSection id="dnt" title="8. Controls for Do-Not-Track Features">
        <LegalP>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&quot;DNT&quot;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected.
          At this stage, no uniform technology standard for recognizing and
          implementing DNT signals has been finalized. As such, we do not
          currently respond to DNT browser signals or any other mechanism that
          automatically communicates your choice not to be tracked online. If a
          standard for online tracking is adopted that we must follow in the
          future, we will inform you about that practice in a revised version of
          this Privacy Notice.
        </LegalP>
      </LegalSection>

      <LegalSection id="updates" title="9. Do We Make Updates to This Notice?">
        <LegalInShort>
          Yes, we will update this notice as necessary to stay compliant with
          relevant laws.
        </LegalInShort>
        <LegalP>
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated &quot;Revised&quot; date at
          the top of this Privacy Notice. If we make material changes to this
          Privacy Notice, we may notify you either by prominently posting a
          notice of such changes or by directly sending you a notification. We
          encourage you to review this Privacy Notice frequently to be informed
          of how we are protecting your information.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="10. How Can You Contact Us About This Notice?">
        <LegalP>
          If you have questions or comments about this notice, you may email us
          at{" "}
          <LegalLink href={`mailto:${SITE.email}`}>{SITE.email}</LegalLink> or
          contact us by post at:
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

      <LegalSection
        id="review"
        title="11. How Can You Review, Update, or Delete the Data We Collect From You?"
      >
        <LegalP>
          You have the right to request access to the personal information we
          collect from you, details about how we have processed it, correct
          inaccuracies, or delete your personal information. You may also have
          the right to withdraw your consent to our processing of your personal
          information. These rights may be limited in some circumstances by
          applicable law. To request to review, update, or delete your personal
          information, please visit:{" "}
          <LegalLink href="/contact">our contact page</LegalLink>.
        </LegalP>
      </LegalSection>
    </div>
  );
}
