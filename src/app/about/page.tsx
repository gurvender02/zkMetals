import type { Metadata } from "next";
import {
  AboutHeroSection,
  MissionVisionSection,
  ValuesSection,
  WhyChooseUsSection,
  GallerySection,
} from "@/components/sections/about";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Zeeshan Metal Recycling",
  description: "Learn about our company story, mission, vision, and the core values that drive our global industrial metal recycling operations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <ValuesSection />
      <WhyChooseUsSection />
      <GallerySection />
      {/* Reusing the CTA from the home page */}
      <CTASection />
    </>
  );
}
