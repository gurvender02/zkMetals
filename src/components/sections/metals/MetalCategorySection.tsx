"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { motionPresets } from "@/constants/theme";

interface MetalCategorySectionProps {
  title: string;
  description: string;
  applications: string[];
  benefits: string[];
  imageSrc: string;
  reverse?: boolean;
}

export function MetalCategorySection({
  title,
  description,
  applications,
  benefits,
  imageSrc,
  reverse = false,
}: MetalCategorySectionProps) {
  return (
    <section className="zk-section border-b border-border bg-background last:border-b-0 even:bg-neutral-50 dark:even:bg-brand-navy-dark/30">
      <Container>
        <div className={`flex flex-col items-center gap-12 lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={motionPresets.staggerChildren}
            className="flex-1 space-y-8"
          >
            <motion.div variants={motionPresets.fadeUp}>
              <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Applications */}
              <motion.div variants={motionPresets.fadeUp} className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-brand-navy dark:text-white">Industrial Applications</h3>
                <ul className="space-y-3">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 size-1.5 shrink-0 rounded-full bg-brand-copper" />
                      {app}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={motionPresets.fadeUp} className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-brand-navy dark:text-white">Recycling Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={motionPresets.fadeUp}>
              <Button asChild size="lg" className="bg-brand-copper text-white hover:bg-brand-copper-dark">
                <Link href="/sell-scrap">
                  Sell {title} <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={reverse ? motionPresets.slideInLeft : motionPresets.slideInRight}
            className="flex-1 w-full"
          >
            <div className="relative aspect-square max-w-xl overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-2xl lg:aspect-[4/3]">
              <div className="absolute inset-0 bg-brand-navy/10 mix-blend-overlay z-10" />
              <img 
                src={imageSrc} 
                alt={`${title} recycling process`} 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
