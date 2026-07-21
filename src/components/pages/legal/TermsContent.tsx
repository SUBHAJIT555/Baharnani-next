import {
  LegalEmphasis,
  LegalLink,
  LegalList,
  LegalP,
  LegalSection,
  LegalSubheading,
} from "@/components/pages/legal/LegalDocument";
import { SITE } from "@/lib/site";


export const TERMS_UPDATED = "21 July 2026";

export function TermsContent() {
  return (
    <div className="space-y-10">
      <LegalSection id="agreement" title="Agreement to our Legal Terms">
        <LegalP>
          We are {SITE.name}
          {" "}
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a
          company registered in the United Arab Emirates at {SITE.address}.
        </LegalP>
        <LegalP>
          We operate the website{" "}
          <LegalLink href={SITE.url} external>
            {SITE.url}
          </LegalLink>{" "}
          (the &quot;Site&quot;), as well as any other related products and
          services that refer or link to these legal terms (the &quot;Legal
          Terms&quot;) (collectively, the &quot;Services&quot;).
        </LegalP>
        <LegalP>
          Baharnani Advertising offers end-to-end brand and advertising
          solutions in Dubai and across the UAE. Our Services include exhibition
          stand design and build, corporate and promotional gifts, creative and
          digital agency work, commercial printing, branded rider equipment,
          acrylic fabrication, and event management. We focus on quality,
          customization, and reliable production so every project reflects your
          brand and strengthens business relationships.
        </LegalP>
        <LegalP>
          You can contact us by phone at{" "}
          <LegalLink href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
            {SITE.phone}
          </LegalLink>
          , email at{" "}
          <LegalLink href={`mailto:${SITE.email}`}>{SITE.email}</LegalLink>, or
          by mail to {SITE.address}, United Arab Emirates.
        </LegalP>
        <LegalP>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (&quot;you&quot;),
          and {SITE.name}, concerning your access to and use of the Services.
          You agree that by accessing the Services, you have read, understood,
          and agreed to be bound by all of these Legal Terms.
        </LegalP>
        <LegalEmphasis>
          If you do not agree with all of these Legal Terms, then you are
          expressly prohibited from using the Services and you must discontinue
          use immediately.
        </LegalEmphasis>
        <LegalP>
          We will provide you with prior notice of any scheduled changes to the
          Services you are using. The modified Legal Terms will become effective
          upon posting or notifying you by {SITE.email}, as stated in the email
          message. By continuing to use the Services after the effective date of
          any changes, you agree to be bound by the modified terms.
        </LegalP>
        <LegalP>
          All users who are minors in the jurisdiction in which they reside
          (generally under the age of 18) must have the permission of, and be
          directly supervised by, their parent or guardian to use the Services.
          If you are a minor, you must have your parent or guardian read and
          agree to these Legal Terms prior to you using the Services.
        </LegalP>
        <LegalP>
          We recommend that you print a copy of these Legal Terms for your
          records.
        </LegalP>
      </LegalSection>

      <LegalSection id="services" title="1. Our Services">
        <LegalP>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </LegalP>
      </LegalSection>

      <LegalSection id="ip" title="2. Intellectual Property Rights">
        <LegalSubheading>Our intellectual property</LegalSubheading>
        <LegalP>
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the &quot;Content&quot;), as
          well as the trademarks, service marks, and logos contained therein
          (the &quot;Marks&quot;).
        </LegalP>
        <LegalP>
          Our Content and Marks are protected by copyright and trademark laws
          (and various other intellectual property rights and unfair competition
          laws) and treaties in the United Arab Emirates and around the world.
        </LegalP>
        <LegalP>
          The Content and Marks are provided in or through the Services
          &quot;AS IS&quot; for your personal, non-commercial use or internal
          business purpose only.
        </LegalP>

        <LegalSubheading>Your use of our Services</LegalSubheading>
        <LegalP>
          Subject to your compliance with these Legal Terms, including the
          &quot;Prohibited Activities&quot; section below, we grant you a
          non-exclusive, non-transferable, revocable license to:
        </LegalP>
        <LegalList
          items={[
            "access the Services; and",
            "download or print a copy of any portion of the Content to which you have properly gained access,",
          ]}
        />
        <LegalP>
          solely for your personal, non-commercial use or internal business
          purpose.
        </LegalP>
        <LegalP>
          Except as set out in this section or elsewhere in our Legal Terms, no
          part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
        </LegalP>
        <LegalP>
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section or elsewhere in our Legal Terms,
          please address your request to:{" "}
          <LegalLink href={`mailto:${SITE.email}`}>{SITE.email}</LegalLink>. If
          we ever grant you the permission to post, reproduce, or publicly
          display any part of our Services or Content, you must identify us as
          the owners or licensors of the Services, Content, or Marks and ensure
          that any copyright or proprietary notice appears or is visible on
          posting, reproducing, or displaying our Content.
        </LegalP>
        <LegalP>
          We reserve all rights not expressly granted to you in and to the
          Services, Content, and Marks.
        </LegalP>
        <LegalP>
          Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use our Services
          will terminate immediately.
        </LegalP>

        <LegalSubheading>Your submissions and contributions</LegalSubheading>
        <LegalP>
          Please review this section and the &quot;Prohibited Activities&quot;
          section carefully prior to using our Services to understand the (a)
          rights you give us and (b) obligations you have when you post or
          upload any content through the Services.
        </LegalP>
        <LegalP>
          <strong className="font-semibold text-ink">Submissions:</strong> By
          directly sending us any question, comment, suggestion, idea, feedback,
          or other information about the Services (&quot;Submissions&quot;), you
          agree to assign to us all intellectual property rights in such
          Submission. You agree that we shall own this Submission and be
          entitled to its unrestricted use and dissemination for any lawful
          purpose, commercial or otherwise, without acknowledgment or
          compensation to you.
        </LegalP>
        <LegalP>
          <strong className="font-semibold text-ink">Contributions:</strong> The
          Services may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality during
          which you may create, submit, post, display, transmit, publish,
          distribute, or broadcast content and materials to us or through the
          Services, including but not limited to text, writings, video, audio,
          photographs, music, graphics, comments, reviews, rating suggestions,
          personal information, or other material
          (&quot;Contributions&quot;). Any Submission that is publicly posted
          shall also be treated as a Contribution.
        </LegalP>
        <LegalP>
          You understand that Contributions may be viewable by other users of
          the Services.
        </LegalP>
        <LegalP>
          When you post Contributions, you grant us a license (including use of
          your name, trademarks, and logos): By posting any Contributions, you
          grant us an unrestricted, unlimited, irrevocable, perpetual,
          non-exclusive, transferable, royalty-free, fully-paid, worldwide
          right, and license to: use, copy, reproduce, distribute, sell, resell,
          publish, broadcast, retitle, store, publicly perform, publicly
          display, reformat, translate, excerpt (in whole or in part), and
          exploit your Contributions (including, without limitation, your image,
          name, and voice) for any purpose, commercial, advertising, or
          otherwise, to prepare derivative works of, or incorporate into other
          works, your Contributions, and to sublicense the licenses granted in
          this section. Our use and distribution may occur in any media formats
          and through any media channels.
        </LegalP>
        <LegalP>
          This license includes our use of your name, company name, and
          franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide.
        </LegalP>
        <LegalP>
          You are responsible for what you post or upload. By sending us
          Submissions and/or posting Contributions through any part of the
          Services, you:
        </LegalP>
        <LegalList
          items={[
            <>
              confirm that you have read and agree with our &quot;Prohibited
              Activities&quot; and will not post, send, publish, upload, or
              transmit through the Services any Submission nor post any
              Contribution that is illegal, harassing, hateful, harmful,
              defamatory, obscene, bullying, abusive, discriminatory,
              threatening to any person or group, sexually explicit, false,
              inaccurate, deceitful, or misleading;
            </>,
            "to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;",
            "warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and",
            "warrant and represent that your Submissions and/or Contributions do not constitute confidential information.",
          ]}
        />
        <LegalP>
          You are solely responsible for your Submissions and/or Contributions
          and you expressly agree to reimburse us for any and all losses that we
          may suffer because of your breach of (a) this section, (b) any third
          party&apos;s intellectual property rights, or (c) applicable law.
        </LegalP>
        <LegalP>
          We may remove or edit your Content: Although we have no obligation to
          monitor any Contributions, we shall have the right to remove or edit
          any Contributions at any time without notice if in our reasonable
          opinion we consider such Contributions harmful or in breach of these
          Legal Terms. If we remove or edit any such Contributions, we may also
          suspend or disable your account and report you to the authorities.
        </LegalP>
      </LegalSection>

      <LegalSection id="representations" title="3. User Representations">
        <LegalP>
          By using the Services, you represent and warrant that: (1) all
          registration information you submit will be true, accurate, current,
          and complete; (2) you will maintain the accuracy of such information
          and promptly update such registration information as necessary; (3)
          you have the legal capacity and you agree to comply with these Legal
          Terms; (4) you are not a minor in the jurisdiction in which you
          reside, or if a minor, you have received parental permission to use
          the Services; (5) you will not access the Services through automated
          or non-human means, whether through a bot, script or otherwise; (6)
          you will not use the Services for any illegal or unauthorized purpose;
          and (7) your use of the Services will not violate any applicable law
          or regulation.
        </LegalP>
        <LegalP>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </LegalP>
      </LegalSection>

      <LegalSection id="registration" title="4. User Registration">
        <LegalP>
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </LegalP>
      </LegalSection>

      <LegalSection id="prohibited" title="5. Prohibited Activities">
        <LegalP>
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </LegalP>
        <LegalP>As a user of the Services, you agree not to:</LegalP>
        <LegalList
          items={[
            "Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.",
            "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.",
            "Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.",
            "Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.",
            "Use any information obtained from the Services in order to harass, abuse, or harm another person.",
            "Make improper use of our support services or submit false reports of abuse or misconduct.",
            "Use the Services in a manner inconsistent with any applicable laws or regulations.",
            "Engage in unauthorized framing of or linking to the Services.",
            "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.",
            "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.",
            "Delete the copyright or other proprietary rights notice from any Content.",
            "Attempt to impersonate another user or person or use the username of another user.",
            'Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").',
            "Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.",
            "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.",
            "Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.",
            "Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
            "Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.",
            "Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.",
            "Use a buying agent or purchasing agent to make purchases on the Services.",
            "Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.",
            "Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.",
            "Use the Services to advertise or offer to sell goods and services.",
            "Sell or otherwise transfer your profile.",
          ]}
        />
      </LegalSection>

      <LegalSection id="ugc" title="6. User Generated Contributions">
        <LegalP>
          The Services may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          &quot;Contributions&quot;). Contributions may be viewable by other
          users of the Services and through third-party websites. As such, any
          Contributions you transmit may be treated as non-confidential and
          non-proprietary. When you create or make available any Contributions,
          you thereby represent and warrant that:
        </LegalP>
        <LegalList
          items={[
            "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.",
            "You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.",
            "You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.",
            "Your Contributions are not false, inaccurate, or misleading.",
            "Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.",
            "Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).",
            "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.",
            "Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.",
            "Your Contributions do not violate any applicable law, regulation, or rule.",
            "Your Contributions do not violate the privacy or publicity rights of any third party.",
            "Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.",
            "Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.",
            "Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.",
          ]}
        />
        <LegalP>
          Any use of the Services in violation of the foregoing violates these
          Legal Terms and may result in, among other things, termination or
          suspension of your rights to use the Services.
        </LegalP>
      </LegalSection>

      <LegalSection id="license" title="7. Contribution License">
        <LegalP>
          By posting your Contributions to any part of the Services, you
          automatically grant, and you represent and warrant that you have the
          right to grant, to us an unrestricted, unlimited, irrevocable,
          perpetual, non-exclusive, transferable, royalty-free, fully-paid,
          worldwide right, and license to host, use, copy, reproduce, disclose,
          sell, resell, publish, broadcast, retitle, archive, store, cache,
          publicly perform, publicly display, reformat, translate, transmit,
          excerpt (in whole or in part), and distribute such Contributions
          (including, without limitation, your image and voice) for any purpose,
          commercial, advertising, or otherwise, and to prepare derivative works
          of, or incorporate into other works, such Contributions, and grant and
          authorize sublicenses of the foregoing. The use and distribution may
          occur in any media formats and through any media channels.
        </LegalP>
        <LegalP>
          This license will apply to any form, media, or technology now known or
          hereafter developed, and includes our use of your name, company name,
          and franchise name, as applicable, and any of the trademarks, service
          marks, trade names, logos, and personal and commercial images you
          provide. You waive all moral rights in your Contributions, and you
          warrant that moral rights have not otherwise been asserted in your
          Contributions.
        </LegalP>
        <LegalP>
          We do not assert any ownership over your Contributions. You retain
          full ownership of all of your Contributions and any intellectual
          property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations
          in your Contributions provided by you in any area on the Services. You
          are solely responsible for your Contributions to the Services and you
          expressly agree to exonerate us from any and all responsibility and to
          refrain from any legal action against us regarding your Contributions.
        </LegalP>
        <LegalP>
          We have the right, in our sole and absolute discretion, (1) to edit,
          redact, or otherwise change any Contributions; (2) to re-categorize
          any Contributions to place them in more appropriate locations on the
          Services; and (3) to pre-screen or delete any Contributions at any
          time and for any reason, without notice. We have no obligation to
          monitor your Contributions.
        </LegalP>
      </LegalSection>

      <LegalSection id="reviews" title="8. Guidelines for Reviews">
        <LegalP>
          We may provide you areas on the Services to leave reviews or ratings.
          When posting a review, you must comply with the following criteria:
          (1) you should have firsthand experience with the person/entity being
          reviewed; (2) your reviews should not contain offensive profanity, or
          abusive, racist, offensive, or hateful language; (3) your reviews
          should not contain discriminatory references based on religion, race,
          gender, national origin, age, marital status, sexual orientation, or
          disability; (4) your reviews should not contain references to illegal
          activity; (5) you should not be affiliated with competitors if posting
          negative reviews; (6) you should not make any conclusions as to the
          legality of conduct; (7) you may not post any false or misleading
          statements; and (8) you may not organize a campaign encouraging others
          to post reviews, whether positive or negative.
        </LegalP>
        <LegalP>
          We may accept, reject, or remove reviews in our sole discretion. We
          have absolutely no obligation to screen reviews or to delete reviews,
          even if anyone considers reviews objectionable or inaccurate. Reviews
          are not endorsed by us, and do not necessarily represent our opinions
          or the views of any of our affiliates or partners. We do not assume
          liability for any review or for any claims, liabilities, or losses
          resulting from any review. By posting a review, you hereby grant to us
          a perpetual, non-exclusive, worldwide, royalty-free, fully paid,
          assignable, and sublicensable right and license to reproduce, modify,
          translate, transmit by any means, display, perform, and/or distribute
          all content relating to review.
        </LegalP>
      </LegalSection>

      <LegalSection id="management" title="9. Services Management">
        <LegalP>
          We reserve the right, but not the obligation, to: (1) monitor the
          Services for violations of these Legal Terms; (2) take appropriate
          legal action against anyone who, in our sole discretion, violates the
          law or these Legal Terms, including without limitation, reporting such
          user to law enforcement authorities; (3) in our sole discretion and
          without limitation, refuse, restrict access to, limit the availability
          of, or disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in our sole discretion and
          without limitation, notice, or liability, to remove from the Services
          or otherwise disable all files and content that are excessive in size
          or are in any way burdensome to our systems; and (5) otherwise manage
          the Services in a manner designed to protect our rights and property
          and to facilitate the proper functioning of the Services.
        </LegalP>
      </LegalSection>

      <LegalSection id="privacy" title="10. Privacy Policy">
        <LegalP>
          We care about data privacy and security. Please review our{" "}
          <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>. By using
          the Services, you agree to be bound by our Privacy Policy, which is
          incorporated into these Legal Terms. Please be advised the Services
          are hosted in the United Arab Emirates. If you access the Services
          from any other region of the world with laws or other requirements
          governing personal data collection, use, or disclosure that differ
          from applicable laws in the United Arab Emirates, then through your
          continued use of the Services, you are transferring your data to the
          United Arab Emirates, and you expressly consent to have your data
          transferred to and processed in the United Arab Emirates.
        </LegalP>
      </LegalSection>

      <LegalSection id="term" title="11. Term and Termination">
        <LegalP>
          These Legal Terms shall remain in full force and effect while you use
          the Services.
        </LegalP>
        <LegalEmphasis>
          Without limiting any other provision of these Legal Terms, we reserve
          the right to, in our sole discretion and without notice or liability,
          deny access to and use of the Services (including blocking certain IP
          addresses), to any person for any reason or for no reason, including
          without limitation for breach of any representation, warranty, or
          covenant contained in these Legal Terms or of any applicable law or
          regulation. We may terminate your use or participation in the Services
          or delete your account and any content or information that you posted
          at any time, without warning, in our sole discretion.
        </LegalEmphasis>
        <LegalP>
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, we reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.
        </LegalP>
      </LegalSection>

      <LegalSection id="modifications" title="12. Modifications and Interruptions">
        <LegalP>
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. We will not be liable to you or any third party for any
          modification, price change, suspension, or discontinuance of the
          Services.
        </LegalP>
        <LegalP>
          We cannot guarantee the Services will be available at all times. We may
          experience hardware, software, or other problems or need to perform
          maintenance related to the Services, resulting in interruptions,
          delays, or errors. We reserve the right to change, revise, update,
          suspend, discontinue, or otherwise modify the Services at any time or
          for any reason without notice to you. You agree that we have no
          liability whatsoever for any loss, damage, or inconvenience caused by
          your inability to access or use the Services during any downtime or
          discontinuance of the Services. Nothing in these Legal Terms will be
          construed to obligate us to maintain and support the Services or to
          supply any corrections, updates, or releases in connection therewith.
        </LegalP>
      </LegalSection>

      <LegalSection id="governing-law" title="13. Governing Law">
        <LegalP>
          These Legal Terms shall be governed by and defined following the laws
          of the United Arab Emirates. {SITE.name} and yourself irrevocably
          consent that the courts of the United Arab Emirates shall have
          exclusive jurisdiction to resolve any dispute which may arise in
          connection with these Legal Terms.
        </LegalP>
      </LegalSection>

      <LegalSection id="disputes" title="14. Dispute Resolution">
        <LegalSubheading>Informal Negotiations</LegalSubheading>
        <LegalP>
          To expedite resolution and control the cost of any dispute,
          controversy, or claim related to these Legal Terms (each a
          &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;)
          brought by either you or us (individually, a &quot;Party&quot; and
          collectively, the &quot;Parties&quot;), the Parties agree to first
          attempt to negotiate any Dispute (except those Disputes expressly
          provided below) informally for at least thirty (30) days before
          initiating arbitration. Such informal negotiations commence upon
          written notice from one Party to the other Party.
        </LegalP>

        <LegalSubheading>Binding Arbitration</LegalSubheading>
        <LegalP>
          Any dispute arising out of or in connection with these Legal Terms,
          including any question regarding its existence, validity, or
          termination, shall be referred to and finally resolved by the
          International Commercial Arbitration Court under the European
          Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according
          to the Rules of this ICAC, which, as a result of referring to it, is
          considered as the part of this clause. The number of arbitrators shall
          be three (3). The seat, or legal place, of arbitration shall be Dubai,
          United Arab Emirates. The language of the proceedings shall be
          English. The governing law of these Legal Terms shall be substantive
          law of the United Arab Emirates.
        </LegalP>

        <LegalSubheading>Restrictions</LegalSubheading>
        <LegalP>
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law,
          (a) no arbitration shall be joined with any other proceeding; (b)
          there is no right or authority for any Dispute to be arbitrated on a
          class-action basis or to utilize class action procedures; and (c)
          there is no right or authority for any Dispute to be brought in a
          purported representative capacity on behalf of the general public or
          any other persons.
        </LegalP>

        <LegalSubheading>
          Exceptions to Informal Negotiations and Arbitration
        </LegalSubheading>
        <LegalP>
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning informal negotiations and binding
          arbitration: (a) any Disputes seeking to enforce or protect, or
          concerning the validity of, any of the intellectual property rights of
          a Party; (b) any Dispute related to, or arising from, allegations of
          theft, piracy, invasion of privacy, or unauthorized use; and (c) any
          claim for injunctive relief. If this provision is found to be illegal
          or unenforceable, then neither Party will elect to arbitrate any
          Dispute falling within that portion of this provision found to be
          illegal or unenforceable and such Dispute shall be decided by a court
          of competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
        </LegalP>
      </LegalSection>

      <LegalSection id="corrections" title="15. Corrections">
        <LegalP>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </LegalP>
      </LegalSection>

      <LegalSection id="disclaimer" title="16. Disclaimer">
        <LegalEmphasis>
          The Services are provided on an as-is and as-available basis. You
          agree that your use of the Services will be at your sole risk. To the
          fullest extent permitted by law, we disclaim all warranties, express
          or implied, in connection with the Services and your use thereof,
          including, without limitation, the implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. We make no warranties or representations about the
          accuracy or completeness of the Services&apos; content or the content
          of any websites or mobile applications linked to the Services and we
          will assume no liability or responsibility for any (1) errors,
          mistakes, or inaccuracies of content and materials, (2) personal
          injury or property damage, of any nature whatsoever, resulting from
          your access to and use of the Services, (3) any unauthorized access to
          or use of our secure servers and/or any and all personal information
          and/or financial information stored therein, (4) any interruption or
          cessation of transmission to or from the Services, (5) any bugs,
          viruses, Trojan horses, or the like which may be transmitted to or
          through the Services by any third party, and/or (6) any errors or
          omissions in any content and materials or for any loss or damage of
          any kind incurred as a result of the use of any content posted,
          transmitted, or otherwise made available via the Services. We do not
          warrant, endorse, guarantee, or assume responsibility for any product
          or service advertised or offered by a third party through the
          Services, any hyperlinked website, or any website or mobile
          application featured in any banner or other advertising, and we will
          not be a party to or in any way be responsible for monitoring any
          transaction between you and any third-party providers of products or
          services. As with the purchase of a product or service through any
          medium or in any environment, you should use your best judgment and
          exercise caution where appropriate.
        </LegalEmphasis>
      </LegalSection>

      <LegalSection id="liability" title="17. Limitations of Liability">
        <LegalEmphasis>
          In no event will we or our directors, employees, or agents be liable
          to you or any third party for any direct, indirect, consequential,
          exemplary, incidental, special, or punitive damages, including lost
          profit, lost revenue, loss of data, or other damages arising from your
          use of the Services, even if we have been advised of the possibility
          of such damages.
        </LegalEmphasis>
      </LegalSection>

      <LegalSection id="indemnification" title="18. Indemnification">
        <LegalP>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys&apos; fees and
          expenses, made by any third party due to or arising out of: (1) your
          Contributions; (2) use of the Services; (3) breach of these Legal
          Terms; (4) any breach of your representations and warranties set forth
          in these Legal Terms; (5) your violation of the rights of a third
          party, including but not limited to intellectual property rights; or
          (6) any overt harmful act toward any other user of the Services with
          whom you connected via the Services. Notwithstanding the foregoing, we
          reserve the right, at your expense, to assume the exclusive defense
          and control of any matter for which you are required to indemnify us,
          and you agree to cooperate, at your expense, with our defense of such
          claims. We will use reasonable efforts to notify you of any such
          claim, action, or proceeding which is subject to this indemnification
          upon becoming aware of it.
        </LegalP>
      </LegalSection>

      <LegalSection id="user-data" title="19. User Data">
        <LegalP>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </LegalP>
      </LegalSection>

      <LegalSection
        id="electronic"
        title="20. Electronic Communications, Transactions, and Signatures"
      >
        <LegalP>
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications we provide to you
          electronically, via email and on the Services, satisfy any legal
          requirement that such communication be in writing.
        </LegalP>
        <LegalEmphasis>
          You hereby agree to the use of electronic signatures, contracts,
          orders, and other records, and to electronic delivery of notices,
          policies, and records of transactions initiated or completed by us or
          via the Services. You hereby waive any rights or requirements under
          any statutes, regulations, rules, ordinances, or other laws in any
          jurisdiction which require an original signature or delivery or
          retention of non-electronic records, or to payments or the granting of
          credits by any means other than electronic means.
        </LegalEmphasis>
      </LegalSection>

      <LegalSection id="sms" title="21. SMS Text Messaging">
        <LegalSubheading>Opting Out</LegalSubheading>
        <LegalP>
          If at any time you wish to stop receiving SMS messages from us, simply
          reply to the text with &quot;STOP.&quot; You may receive an SMS
          message confirming your opt out.
        </LegalP>
        <LegalSubheading>Message and Data Rates</LegalSubheading>
        <LegalP>
          Please be aware that message and data rates may apply to any SMS
          messages sent or received. The rates are determined by your carrier
          and the specifics of your mobile plan.
        </LegalP>
        <LegalSubheading>Support</LegalSubheading>
        <LegalP>
          If you have any questions or need assistance regarding our SMS
          communications, please email us at{" "}
          <LegalLink href={`mailto:${SITE.email}`}>{SITE.email}</LegalLink> or
          call at{" "}
          <LegalLink href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
            {SITE.phone}
          </LegalLink>
          .
        </LegalP>
      </LegalSection>

      <LegalSection id="misc" title="22. Miscellaneous">
        <LegalP>
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. Our failure to
          exercise or enforce any right or provision of these Legal Terms shall
          not operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. We may assign any or
          all of our rights and obligations to others at any time. We shall not
          be responsible or liable for any loss, damage, delay, or failure to
          act caused by any cause beyond our reasonable control. If any
          provision or part of a provision of these Legal Terms is determined to
          be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Legal Terms and does not
          affect the validity and enforceability of any remaining provisions.
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services. You agree that these Legal Terms will
          not be construed against us by virtue of having drafted them. You
          hereby waive any and all defenses you may have based on the electronic
          form of these Legal Terms and the lack of signing by the parties
          hereto to execute these Legal Terms.
        </LegalP>
      </LegalSection>

      <LegalSection id="contact" title="23. Contact Us">
        <LegalP>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
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
