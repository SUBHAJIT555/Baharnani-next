"use client";

import { MessageSquareQuote } from "lucide-react";
import {
  AnimatedTestimonials,
  type Testimonial,
} from "@/components/ui/AnimatedTestimonials";
import { SectionEyebrow } from "@/components/ui/Section";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ahmed Hassan",
    quote:
      "Baharnani's exhibition stands transformed our trade show presence completely. Their attention to detail and creative designs helped us stand out from the competition.",
    designation: "CEO, Dubai Tech Solutions",
  },
  {
    name: "Sarah Johnson",
    quote:
      "Working with this team was an absolute pleasure. They delivered exactly what we envisioned and more. Our exhibition stand was the talk of the event.",
    designation: "Brand Manager, Global Innovations",
  },
  {
    name: "Mohammed Al Rashid",
    quote:
      "Professional, reliable, and incredibly creative. They understood our brand vision and brought it to life in ways we never imagined possible.",
    designation: "Director of Marketing, Emirates Group",
  },
  {
    name: "Lisa Chen",
    quote:
      "The quality of their work is outstanding. From concept to execution, every detail was perfect. We've received countless compliments on our exhibition stand.",
    designation: "Event Coordinator, International Expo",
  },
  {
    name: "Fatima Al Mazrouei",
    quote:
      "From corporate gifts to print and install, Baharnani kept everything on one timeline. Responsive team, clear communication, and delivery we could trust before show day.",
    designation: "Marketing Director, Abu Dhabi",
  },
];

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="w-full overflow-x-hidden bg-canvas">
      <RevealSection className="mx-auto max-w-7xl border-x border-hairline px-5 py-10 sm:px-6 sm:py-14 lg:py-6">
        <Reveal
          animationNum={0}
          className="mb-8 grid grid-cols-1 gap-4 lg:mb-10 lg:grid-cols-12 lg:gap-8"
        >
          <div className="lg:col-span-5">
            <SectionEyebrow icon={MessageSquareQuote}>
              Testimonials
            </SectionEyebrow>
            <h2 className="mt-4 text-pretty text-display-sm text-ink md:text-display-md">
              What UAE brands say about working with Baharnani.
            </h2>
          </div>

          <div className="flex items-start lg:col-span-7 lg:pt-11">
            <p className="text-body-md text-muted lg:text-[17px] lg:leading-7">
              From exhibition stands and corporate gifting to print and
              on-site install, clients across Dubai and the UAE rely on us for
              quality, speed, and one team accountable from brief to delivery.
            </p>
          </div>
        </Reveal>

        <Reveal animationNum={1}>
          <AnimatedTestimonials testimonials={TESTIMONIALS} />
        </Reveal>
      </RevealSection>
    </section>
  );
}
