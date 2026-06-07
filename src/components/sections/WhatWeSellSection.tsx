"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Box, Layers, Cuboid } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motionPresets } from "@/constants/theme";

const products = [
  {
    title: "Processed Steel",
    description: "High-grade shredded and sheared steel ready for foundry melting.",
    icon: Box,
    href: "/buy-metals#steel",
  },
  {
    title: "Copper Granules",
    description: "99.9% pure copper granules processed from industrial wire scrap.",
    icon: Package,
    href: "/buy-metals#copper",
  },
  {
    title: "Aluminum Ingots",
    description: "Smelted aluminum ingots conforming to international standards.",
    icon: Cuboid,
    href: "/buy-metals#aluminum",
  },
  {
    title: "Brass & Bronze",
    description: "Sorted and cleaned yellow metals for specialized manufacturing.",
    icon: Layers,
    href: "/buy-metals#brass",
  },
];

export function WhatWeSellSection() {
  return (
    <section className="zk-section bg-background">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">What We Sell</h2>
            <p className="mt-4 text-muted-foreground">
              We supply high-quality, furnace-ready recycled metals to foundries and manufacturers globally, ensuring strict quality control and consistent supply.
            </p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
          >
            <Link 
              href="/products" 
              className="inline-flex items-center font-semibold text-brand-navy hover:text-brand-copper dark:text-white dark:hover:text-brand-copper"
            >
              View Full Catalog <ArrowRight className="ml-2 size-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={motionPresets.staggerChildren}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={motionPresets.fadeUp}>
              <Link href={product.href} className="group block h-full">
                <Card className="zk-hover-lift h-full border-border/50 bg-neutral-50 transition-colors hover:border-brand-navy/50 dark:bg-brand-navy-light dark:hover:border-white/50">
                  <CardHeader>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-navy/10 text-brand-navy dark:bg-white/10 dark:text-white">
                      <product.icon className="size-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-brand-navy dark:group-hover:text-white">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
