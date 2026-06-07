"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { motionPresets } from "@/constants/theme";
import { siteConfig } from "@/constants/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 zk-gradient-copper opacity-90 dark:opacity-100" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
      <div className="absolute -right-40 -top-40 size-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-96 rounded-full bg-black/10 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={motionPresets.fadeUp}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ready to Transform Your Scrap Into Value?
          </h2>
          <p className="mb-10 text-lg text-white/90 sm:text-xl">
            Partner with Zeeshan Metal Recycling for enterprise-grade scrap management, competitive pricing, and sustainable solutions.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 bg-brand-navy px-8 text-base text-white hover:bg-brand-navy-light">
              <Link href="/contact">
                Get a Custom Quote <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 border-white/30 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <PhoneCall className="mr-2 size-5" /> Call {siteConfig.contact.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
