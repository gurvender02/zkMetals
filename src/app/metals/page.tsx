import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { MetalCategorySection } from "@/components/sections/metals/MetalCategorySection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Metals We Deal In | Copper, Silver, Brass, Aluminium, Steel | Zeeshan Metal Recycling",
  description: "Comprehensive details on the industrial scrap metals we process: Copper, Silver, Brass, Aluminium, and Steel. Discover their applications and recycling benefits.",
};

const metalsData = [
  {
    title: "Copper Scrap",
    description: "Copper is one of the most valuable and highly sought-after metals in the recycling industry. We process all grades of copper, including bare bright wire, #1 and #2 copper tubing, roofing copper, and insulated wire. Our advanced separation techniques ensure maximum purity for foundry melting.",
    applications: [
      "Electrical wiring and circuit boards",
      "Telecommunications infrastructure",
      "Plumbing pipes and HVAC systems",
      "Electric vehicle (EV) components",
    ],
    benefits: [
      "Saves up to 85% of the energy required for primary production",
      "Reduces CO2 emissions and toxic gas releases from smelting",
      "Retains 100% of its physical properties after recycling",
    ],
    imageSrc: "https://images.unsplash.com/photo-1622359416447-bc82a6cd05c6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Silver Scrap",
    description: "Industrial silver recovery is a specialized process requiring precision and advanced chemical or metallurgical extraction. We reclaim silver from electronic waste, photographic processing residues, and manufacturing byproducts, offering high-yield returns for our enterprise clients.",
    applications: [
      "Solar panel conductive pastes",
      "Electronic switches and contacts",
      "Medical devices and chemical catalysts",
      "Aerospace control systems",
    ],
    benefits: [
      "Prevents toxic heavy metals from entering landfills",
      "Conserves highly finite natural silver reserves",
      "Provides significant financial return for industrial e-waste",
    ],
    imageSrc: "https://images.unsplash.com/photo-1616857640277-285652518e9d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Brass Scrap",
    description: "Brass, an alloy of copper and zinc, is heavily utilized in manufacturing due to its acoustic properties, low friction, and corrosion resistance. We process yellow brass, red brass, and spent munitions, ensuring it is cleanly sorted and ready for immediate remelting.",
    applications: [
      "Plumbing fixtures and marine hardware",
      "Ammunition casings",
      "Musical instruments",
      "Precision gears and bearings",
    ],
    benefits: [
      "Highly energy efficient to melt compared to raw copper and zinc",
      "Minimizes zinc depletion",
      "Supports a highly circular manufacturing economy",
    ],
    imageSrc: "https://images.unsplash.com/photo-1542484393-db29107db274?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Aluminium Scrap",
    description: "Lightweight, durable, and highly conductive, aluminium is critical to modern manufacturing. We handle everything from extrusion scrap and lithographic plates to automotive cast aluminium and aerospace alloys. Our baling and shredding facilities process thousands of tons annually.",
    applications: [
      "Automotive and aerospace body panels",
      "Construction materials (window frames, siding)",
      "Consumer packaging and cans",
      "Electrical transmission lines",
    ],
    benefits: [
      "Recycling saves 95% of the energy needed to make new aluminium",
      "Drastically reduces bauxite mining and deforestation",
      "Aluminium can be recycled infinitely without quality loss",
    ],
    imageSrc: "https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Steel Scrap",
    description: "Steel is the most recycled material on the planet. We specialize in heavy melting steel (HMS), plate and structural scrap, and industrial stamping busheling. Our shears and shredders process bulk steel quickly, supplying domestic and international steel mills with furnace-ready charge.",
    applications: [
      "Structural beams for construction and infrastructure",
      "Automotive manufacturing and shipbuilding",
      "Heavy machinery and industrial equipment",
      "Appliance manufacturing",
    ],
    benefits: [
      "Saves over 1 ton of iron ore for every ton of steel recycled",
      "Reduces water pollution by 76% and air pollution by 86%",
      "Maintains the backbone of global sustainable infrastructure",
    ],
    imageSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function MetalsPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-32">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute -left-40 top-0 size-96 rounded-full bg-brand-copper/20 blur-[100px]" />
        
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block font-heading text-xl text-brand-copper">Our Expertise</span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Metals We Deal In
            </h1>
            <p className="text-lg text-neutral-300 sm:text-xl">
              From high-value non-ferrous alloys to bulk structural steel, we possess the infrastructure and metallurgical expertise to process a comprehensive range of industrial metals.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Metal Categories ─────────────────────────────────────── */}
      <div className="flex flex-col">
        {metalsData.map((metal, index) => (
          <MetalCategorySection
            key={metal.title}
            title={metal.title}
            description={metal.description}
            applications={metal.applications}
            benefits={metal.benefits}
            imageSrc={metal.imageSrc}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* ── Final Call to Action ─────────────────────────────────── */}
      <CTASection />
    </>
  );
}
