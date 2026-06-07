"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { motionPresets } from "@/constants/theme";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-brand-navy pt-16 lg:pt-0">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
        <div className="zk-gradient-hero absolute inset-0 opacity-90" />
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-neutral-900/40 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={motionPresets.staggerChildren}
            className="flex flex-col items-center gap-8"
          >
            <motion.div variants={motionPresets.fadeUp}>
              <span className="mb-4 inline-flex items-center rounded-full border border-brand-copper/30 bg-brand-copper/10 px-3 py-1 text-sm font-medium text-brand-copper-light">
                Enterprise Metal Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={motionPresets.fadeUp}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Transforming <span className="zk-text-gradient">Scrap</span> Into Value
            </motion.h1>

            <motion.p
              variants={motionPresets.fadeUp}
              className="max-w-2xl text-lg text-neutral-300 sm:text-xl"
            >
              Premier metal recycling and industrial scrap solutions. We provide sustainable, reliable, and enterprise-grade processing services worldwide.
            </motion.p>

            <motion.div
              variants={motionPresets.fadeUp}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="h-14 bg-brand-copper px-8 text-base text-white hover:bg-brand-copper-dark">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
