"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, Zap, Monitor, Truck } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motionPresets } from "@/constants/theme";

const scrapTypes = [
  {
    title: "Ferrous Metals",
    description: "Iron, steel, and mixed scrap from industrial demolition or manufacturing.",
    icon: Settings,
    href: "/sell-scrap#ferrous",
  },
  {
    title: "Non-Ferrous Metals",
    description: "Copper, aluminum, brass, and stainless steel with high recovery value.",
    icon: Zap,
    href: "/sell-scrap#non-ferrous",
  },
  {
    title: "E-Waste",
    description: "Computers, servers, and electronic components containing precious metals.",
    icon: Monitor,
    href: "/sell-scrap#e-waste",
  },
  {
    title: "Industrial Machinery",
    description: "End-of-life heavy equipment, plant teardowns, and obsolete machinery.",
    icon: Truck,
    href: "/sell-scrap#machinery",
  },
];

export function WhatWeBuySection() {
  return (
    <section className="zk-section bg-neutral-50 dark:bg-brand-navy-dark">
      <Container>
        <div className="mb-12 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">What We Buy</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We purchase all grades of industrial scrap metal at competitive market rates, offering seamless logistics and prompt payment.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={motionPresets.staggerChildren}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {scrapTypes.map((type, index) => (
            <motion.div key={index} variants={motionPresets.fadeUp}>
              <Link href={type.href} className="group block h-full">
                <Card className="zk-hover-lift h-full border-border/50 bg-white transition-colors hover:border-brand-copper/50 dark:bg-brand-navy-light">
                  <CardHeader>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-copper/10 text-brand-copper">
                      <type.icon className="size-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-brand-copper">
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {type.description}
                    </CardDescription>
                    <div className="mt-6 flex items-center text-sm font-semibold text-brand-copper">
                      Learn more
                      <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
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
