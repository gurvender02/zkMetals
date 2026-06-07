import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { TimelineSection } from "@/components/sections/process/TimelineSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Process | Zeeshan Metal Recycling",
  description: "Discover our end-to-end industrial scrap metal recycling process. From initial assessment and lab testing to processing and global delivery.",
};

export default function ProcessPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565626423153-f7200b21e06c?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-80" />
        
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block font-heading text-xl text-brand-copper">Transparency & Efficiency</span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How We Work
            </h1>
            <p className="text-lg text-neutral-300 sm:text-xl">
              Our 7-step process is engineered for maximum material recovery, strict environmental compliance, and seamless logistics for our enterprise partners.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Animated Timeline ────────────────────────────────────── */}
      <TimelineSection />

      {/* ── Final Call to Action ─────────────────────────────────── */}
      <CTASection />
    </>
  );
}
