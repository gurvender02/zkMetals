import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BuyMetalsForm } from "@/components/forms/BuyMetalsForm";
import { ShieldCheck, Globe, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Buy Furnace-Ready Metals | Zeeshan Metal Recycling",
  description: "Purchase high-quality, processed scrap metal including Copper Ingots, Copper Blocks, Silver Material, and Brass Material for your manufacturing needs.",
};

const products = [
  {
    title: "Copper Ingots",
    description: "Smelted 99.9% pure copper ingots, perfect for high-end electrical manufacturing and alloying.",
    image: "https://images.unsplash.com/photo-1622359416447-bc82a6cd05c6?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Copper Blocks",
    description: "Dense, hydraulically baled copper blocks optimized for maximum furnace efficiency and minimal melt loss.",
    image: "https://images.unsplash.com/photo-1582299863777-2f16b2e31e5f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Silver Material",
    description: "Recovered and refined silver components extracted from high-grade electronic waste.",
    image: "https://images.unsplash.com/photo-1616857640277-285652518e9d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Brass Material",
    description: "Sorted and cleaned yellow metals, free of attachments, ready for specialized foundry applications.",
    image: "https://images.unsplash.com/photo-1542484393-db29107db274?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BuyMetalsPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent opacity-80" />
        
        <Container className="relative z-10 text-center">
          <span className="mb-4 inline-block font-heading text-xl text-brand-copper">Premium Raw Materials</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Furnace-Ready Metals
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-300">
            Source high-grade, rigorously tested recycled metals tailored for foundries, mills, and global manufacturers.
          </p>
        </Container>
      </section>

      {/* ── Why Buy From Us ──────────────────────────────────────── */}
      <section className="border-b border-border bg-neutral-50 py-12 dark:bg-brand-navy-dark">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-copper/10 text-brand-copper">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Spectrometer Tested</h3>
              <p className="text-sm text-muted-foreground">Every batch is analyzed to guarantee precise metallurgical composition.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy dark:bg-white/10 dark:text-white">
                <Zap className="size-6" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Furnace Optimized</h3>
              <p className="text-sm text-muted-foreground">Processed, sheared, and baled to maximize your melt efficiency.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-copper/10 text-brand-copper">
                <Globe className="size-6" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Global Export</h3>
              <p className="text-sm text-muted-foreground">ISRI compliant shipping worldwide with full customs documentation.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Product Catalog ──────────────────────────────────────── */}
      <section className="zk-section bg-background">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Available Commodities</h2>
            <p className="mt-2 text-muted-foreground">Select from our premium processed materials.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <Card key={index} className="zk-hover-lift overflow-hidden border-border/50 bg-white dark:bg-brand-navy-light">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Purchasing Form ──────────────────────────────────────── */}
      <section className="zk-section bg-neutral-50 dark:bg-brand-navy-dark" id="inquiry-form">
        <Container size="md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Request a Quote</h2>
            <p className="mt-2 text-muted-foreground">Provide your requirements and our sales team will contact you promptly.</p>
          </div>
          
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <BuyMetalsForm />
          </div>
        </Container>
      </section>
    </>
  );
}
