"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Box, Laptop, Printer, Sparkles } from "lucide-react";
import { ArrowUpRightIcon } from "@/components/icons/ArrowUpRightIcon";
import {
  softButtonClasses,
  buttonIconClasses,
} from "@/components/ui/button";
import PastelIconBox from "@/components/ui/PastelIconBox";
import RequestQuoteButton from "@/components/ui/RequestQuoteButton";
import { SectionEyebrow } from "@/components/ui/Section";
import { Reveal, RevealSection } from "@/components/ui/timeline-animation";

const PATHWAYS = [
  {
    title: "In-house production",
    description:
      "Fabrication, print, and finishing on-site—tighter quality control and faster turnarounds.",
    Icon: Printer,
    color: "#FFF8E1",
    panelLight: `
      radial-gradient(ellipse 90% 75% at 12% 12%, rgba(255, 236, 160, 0.45), transparent 70%),
      radial-gradient(ellipse 80% 70% at 88% 88%, rgba(255, 248, 220, 0.55), transparent 72%),
      linear-gradient(165deg, #fffdf5 0%, #fff8e1 50%, #fffcf0 100%)
    `,
    panelDark: `
      radial-gradient(ellipse 90% 75% at 12% 12%, rgba(180, 150, 40, 0.22), transparent 70%),
      radial-gradient(ellipse 80% 70% at 88% 88%, rgba(120, 100, 30, 0.18), transparent 72%),
      linear-gradient(165deg, #16140c 0%, #1a1810 50%, #14120a 100%)
    `,
  },
  {
    title: "Dedicated microsites",
    description:
      "Deep dives for stands, gifts, and creative—via exhibitionstandsuae, corporategiftsdubaii, and Code Cobble.",
    Icon: Laptop,
    color: "#E0F7FA",
    panelLight: `
      radial-gradient(ellipse 90% 75% at 12% 12%, rgba(160, 230, 245, 0.4), transparent 70%),
      radial-gradient(ellipse 80% 70% at 88% 88%, rgba(210, 245, 250, 0.5), transparent 72%),
      linear-gradient(165deg, #f3fcfd 0%, #e0f7fa 50%, #f0fafb 100%)
    `,
    panelDark: `
      radial-gradient(ellipse 90% 75% at 12% 12%, rgba(40, 140, 160, 0.22), transparent 70%),
      radial-gradient(ellipse 80% 70% at 88% 88%, rgba(30, 100, 120, 0.18), transparent 72%),
      linear-gradient(165deg, #0c1416 0%, #10181a 50%, #0a1214 100%)
    `,
  },
  {
    title: "Venue-ready delivery",
    description:
      "Install and coordination for DWTC, ADNEC, Expo Centre Sharjah, and corporate sites.",
    Icon: Box,
    color: "#C1D8FD",
    panelLight: `
      radial-gradient(ellipse 90% 75% at 12% 12%, rgba(160, 200, 255, 0.4), transparent 70%),
      radial-gradient(ellipse 80% 70% at 88% 88%, rgba(200, 220, 255, 0.5), transparent 72%),
      linear-gradient(165deg, #f4f8ff 0%, #e8f0fe 50%, #f0f5ff 100%)
    `,
    panelDark: `
      radial-gradient(ellipse 90% 75% at 12% 12%, rgba(60, 110, 200, 0.24), transparent 70%),
      radial-gradient(ellipse 80% 70% at 88% 88%, rgba(40, 80, 160, 0.18), transparent 72%),
      linear-gradient(165deg, #0c1018 0%, #10141c 50%, #0a0e14 100%)
    `,
  },
] as const;

export default function HomeWhyBaharnani() {
  return (
    <section className="w-full bg-canvas">
      <RevealSection className="relative mx-auto max-w-7xl overflow-hidden border-x border-hairline px-5 py-6 sm:px-6 md:px-8 md:py-6">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, black 70%)",
            backgroundImage:
              "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--primary) 35%, transparent) 1px, transparent 0)",
            backgroundSize: "12px 12px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, black 70%)",
            opacity: 0.50,
          }}
          aria-hidden
        />

        <Reveal
          animationNum={0}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <SectionEyebrow icon={Sparkles}>Why Baharnani</SectionEyebrow>
          <h2 className="mt-5 text-pretty text-display-sm text-ink md:text-display-md">
            Strategy and production under one roof.
          </h2>
          <p className="mt-4 text-body-md leading-relaxed text-muted sm:text-[17px] sm:leading-7">
            Talk through scope, timelines, and branding with our Dubai
            team—we&apos;ll map the right path across exhibition, gifting,
            print, and events.
          </p>
        </Reveal>

        <Reveal
          animationNum={1}
          className="relative z-10 mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3"
        >
          {PATHWAYS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-xl p-6 text-left border border-hairline border-dashed"
            >
              <div
                className="pointer-events-none absolute inset-0 dark:hidden"
                style={{ background: item.panelLight }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 hidden dark:block"
                style={{ background: item.panelDark }}
                aria-hidden
              />
              <div className="relative z-10">
                <PastelIconBox color={item.color} size="md">
                  <item.Icon className="h-5 w-5" strokeWidth={2} />
                </PastelIconBox>
                <p className="mt-5 text-title-md font-semibold text-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-body-sm leading-relaxed text-body">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Reveal>

        <Reveal
          animationNum={2}
          className="relative z-10 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <RequestQuoteButton />
          <Link
            href="/about"
            className={softButtonClasses("group w-full sm:w-auto")}
          >
            About Baharnani
            <ArrowUpRightIcon className={buttonIconClasses} />
          </Link>
        </Reveal>
      </RevealSection>
    </section>
  );
}
