"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

const FAQS = [
  {
    question:
      "How early should we brief Baharnani for an exhibition stand at DWTC or ADNEC?",
    answer:
      "For custom builds, aim for 6–8 weeks before show day so concept, 3D visuals, venue drawings, fabrication, and graphics can clear approvals without rush fees. Modular or reuse kits can move faster—often 3–4 weeks—if floor plans and brand assets are ready. Share the venue, stand size, and open sides in the first brief so we can flag build and install windows against the organiser’s technical manual.",
  },
  {
    question:
      "Do you outsource printing and acrylic, or is everything produced in-house in Dubai?",
    answer:
      "Core print, acrylic fabrication, branding, and much of our exhibition carpentry and graphics run through our Sheikh Zayed Road facility. That means colour proofs, finishing, and last-minute tweaks stay with one production team instead of bouncing between suppliers. Specialty items may still use trusted partners when needed, but artwork standards and timeline ownership remain with Baharnani.",
  },
  {
    question:
      "Which printing process should we choose for brochures, fabric banners, and hard-surface logos?",
    answer:
      "Offset or digital suits high-volume brochures, magazines, and packaging when colour consistency across a long run matters. Fabric and sublimation are better for apparel, soft banners, and stretch graphics. UV works for plastics, acrylic, glass, and metal when you need durable surface prints; round printing covers mugs, bottles, and cylinders. Tell us material, quantity, and finish—we’ll recommend the process before you lock artwork.",
  },
  {
    question:
      "Can you fabricate and install custom acrylic signage, letter cutouts, and display stands on site?",
    answer:
      "Yes. We CNC-cut, polish, and finish acrylic signage, boxes, stands, and letter cutouts to your drawings, then handle site install for retail, reception, and exhibition features. Share dimensions, mounting surface, and lighting needs early so we can specify thickness, fixings, and edge finish that hold up in busy UAE environments.",
  },
  {
    question:
      "How do corporate gift budgets and branding options usually work for client or employee kits?",
    answer:
      "We tier gifts around your headcount and occasion—executive hampers, promotional merch, or onboarding sets—then apply laser engraving, embroidery, UV print, or embossing after sample approval. Bulk orders include packaging and UAE-wide scheduled delivery. A clear per-unit budget and logo files (vector preferred) in the first conversation speeds quoting and avoids rework on personalisation.",
  },
  {
    question: "What is included when you kit a delivery or field rider fleet?",
    answer:
      "Typical kits cover helmets, gloves, knee and elbow pads, jackets or reflective vests, food delivery bags, and rider uniforms—branded to your colours and logo placement rules. Gear is chosen for daily UAE use: durability, visibility, and comfort on long shifts. Share fleet size, sizing ranges, and must-have PPE so we can quote a full kit or staged rollout.",
  },
  {
    question:
      "What does end-to-end event management cover for a product launch or corporate conference?",
    answer:
      "We own concept, venue sourcing, experience design, AV and stage setup, event branding, entertainment coordination, staffing, and on-site direction through close. You get one accountable lead for vendors and run-of-show instead of managing each supplier yourself. Share date, guest count, city, and goals up front so we can map a realistic production plan and budget bands.",
  },
  {
    question:
      "What artwork files do you need for print, gifts, stands, and exhibition graphics?",
    answer:
      "Vector logos (AI, EPS, or PDF) and high-resolution images work best; we also accept layered files when effects matter. Include pantone or CMYK targets, bleed for print, and scale for large-format or acrylic cut paths. If assets are incomplete, we can rebuild or clean files—but that should be scoped in the quote so production dates stay honest.",
  },
  {
    question:
      "Will we see colour proofs or samples before a full production run?",
    answer:
      "Yes for commercial print, branded gifts, and most specialty finishes. Soft proofs confirm layout; hard proofs or physical samples confirm colour and material before bulk. Exhibition graphics and acrylic often get print or cut samples on the actual substrate when the finish is critical. Approvals are written into the timeline so show-day or delivery dates aren’t guessing games.",
  },
  {
    question:
      "Do you handle delivery, install, and dismantle at major UAE venues?",
    answer:
      "Our teams regularly work DWTC, ADNEC, Expo Centre Sharjah, and corporate sites across Dubai, Sharjah, and Abu Dhabi. Scope can include delivery, build, technical support during the show, and clean dismantle. Venue rules, power, and access windows vary—send the exhibitor manual early so install plans match floor load, height limits, and move-in slots.",
  },
  {
    question:
      "Can you take rush jobs if our event or campaign date is already close?",
    answer:
      "Sometimes—especially for print, gifts, or simpler acrylic—when materials and machines are free and approvals are fast. Complex custom stands and large events need realistic lead time; rushing them risks quality or overtime costs. Contact us with the hard deadline and a short brief; we’ll say clearly what is possible in-house versus what should move to a later date.",
  },
  {
    question:
      "Can one brief cover a stand, print collateral, gifts, and on-site branding together?",
    answer:
      "That’s a common Baharnani workflow. Shared artwork standards and one production calendar keep booth graphics, brochures, gift branding, and acrylic features consistent. We’ll split the quote by workstream but keep a single project owner so colour, timeline, and messaging don’t drift between teams.",
  },
  {
    question: "What information do you need to issue an accurate quote?",
    answer:
      "Service type, quantity or stand size, venue or delivery city, target date, brand guidelines or logos, and budget range if you have one. Sketches, previous stands, or competitor references help for custom fabrication and events. WhatsApp or a quote request with those basics is enough to start; we’ll follow up with process options, timeline, and a scoped price—not a vague ballpark.",
  },
] as const;

export default function AboutWhyChooseUs() {
  return (
    <section id="faqs" className="w-full scroll-mt-24 bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-6 sm:px-6 sm:py-6 md:px-8 md:py-6">
        <Reveal animationNum={0} className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-display-sm text-ink md:text-display-md">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-body-md text-muted sm:text-[17px] sm:leading-7">
            Practical answers on lead times, print processes, acrylic, gifts,
            rider kits, venues, and how we run multi-service projects from our
            Dubai facility.
          </p>
        </Reveal>

        <Reveal animationNum={1} className="mx-auto mt-10 w-full max-w-5xl sm:mt-12">
          <Accordion
            type="single"
            collapsible
            defaultValue="0"
            className="w-full px-1 py-2 sm:px-4 md:px-8"
          >
            {FAQS.map((item, index) => {
              const serial = String(index + 1).padStart(2, "0");

              return (
                <AccordionItem key={item.question} value={String(index)}>
                  <AccordionTrigger className="py-5 text-left text-body-md font-semibold text-ink hover:no-underline sm:py-6 sm:text-[17px] md:text-title-md">
                    <span className="flex gap-3 text-left">
                      <span className="shrink-0 font-mono text-muted">
                        {serial}.
                      </span>
                      <span>{item.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-body-sm leading-relaxed text-muted sm:pb-6 sm:text-body-md sm:leading-7">
                    <div className="pl-0 sm:pl-12">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Reveal>
      </RevealSection>
    </section>
  );
}
