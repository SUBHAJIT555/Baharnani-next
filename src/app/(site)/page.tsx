"use client";

import HomeHero from "@/components/pages/home/HomeHero";
import HomeAboutBrief from "@/components/pages/home/HomeAboutBrief";
import HomeWhyBaharnani from "@/components/pages/home/HomeWhyBaharnani";
import HomeServices from "@/components/pages/home/HomeServices";
import HomeTestimonials from "@/components/pages/home/HomeTestimonials";
import HomeCta from "@/components/pages/home/HomeCta";
import SectionDivider from "@/components/ui/SectionDivider";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <HomeHero />

      <SectionDivider />

      <HomeAboutBrief />

      <SectionDivider />

      <HomeServices />

      <SectionDivider />

      <HomeWhyBaharnani />

      <SectionDivider />

      <HomeTestimonials />

      <SectionDivider />

      <HomeCta />

      <SectionDivider />
    </main>
  );
}
