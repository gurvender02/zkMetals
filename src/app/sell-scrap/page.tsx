import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SellScrapForm } from "@/components/forms/SellScrapForm";
import { Scale, Truck, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Sell Scrap Metal | Zeeshan Metal Recycling",
  description: "Request a quote to sell your industrial scrap metal. We offer competitive pricing, transparent weighing, and global logistics.",
};

export default function SellScrapPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-20 text-white lg:py-28">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-copper/20 blur-[100px]" />
        
        <Container className="relative z-10 text-center">
          <span className="mb-4 inline-block font-heading text-xl text-brand-copper">Partner With Us</span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sell Your Industrial Scrap
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-300">
            Get the best market rates for your ferrous, non-ferrous, and e-waste materials. Fill out the inquiry form below, and our procurement team will contact you within 24 hours.
          </p>
        </Container>
      </section>

      {/* ── Process Highlights ───────────────────────────────────── */}
      <section className="border-b border-border bg-neutral-50 py-12 dark:bg-brand-navy-dark">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-copper/10 text-brand-copper">
                <Scale className="size-6" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Transparent Weighing</h3>
              <p className="text-sm text-muted-foreground">Certified digital scales ensure you get paid for every exact pound.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-navy/10 text-brand-navy dark:bg-white/10 dark:text-white">
                <DollarSign className="size-6" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Competitive Pricing</h3>
              <p className="text-sm text-muted-foreground">Rates tied directly to real-time LME global market indices.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-copper/10 text-brand-copper">
                <Truck className="size-6" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">Seamless Logistics</h3>
              <p className="text-sm text-muted-foreground">We provide roll-off containers and handle all transportation.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Form Section ─────────────────────────────────────────── */}
      <section className="zk-section bg-background">
        <Container size="md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Material Inquiry Form</h2>
            <p className="mt-2 text-muted-foreground">Please provide details about your scrap materials.</p>
          </div>
          
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
            <SellScrapForm />
          </div>
        </Container>
      </section>
    </>
  );
}
