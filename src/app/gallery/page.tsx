import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FilterableGallery } from "@/components/sections/gallery/FilterableGallery";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery | Our Facilities & Operations | Zeeshan Metal Recycling",
  description:
    "Take a visual tour of Zeeshan Metal Recycling — explore our factory, fleet, scrap processing, finished ingots, and the team that makes it all happen.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-32">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute -right-40 top-0 size-96 rounded-full bg-brand-copper/20 blur-[100px]" />
        <div className="absolute -left-60 bottom-0 size-80 rounded-full bg-brand-copper/10 blur-[120px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block font-heading text-xl text-brand-copper">
              Visual Tour
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Gallery
            </h1>
            <p className="text-lg text-neutral-300 sm:text-xl">
              A behind-the-scenes look at our state-of-the-art facilities,
              heavy-duty fleet, precision metal processing, and the dedicated
              team powering Zeeshan Metal Recycling.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Filterable Gallery ────────────────────────────────────── */}
      <FilterableGallery />

      {/* ── Call to Action ────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
