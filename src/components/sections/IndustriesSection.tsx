"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { motionPresets } from "@/constants/theme";

const industries = [
  "Automotive Manufacturing",
  "Aerospace & Defense",
  "Construction & Demolition",
  "Telecommunications",
  "Energy & Utility",
  "Heavy Machinery",
  "Shipbuilding",
  "Electronics Manufacturing",
];

export function IndustriesSection() {
  return (
    <section className="zk-section bg-background">
      <Container>
        <div className="mb-12 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Industries We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Providing specialized metal recycling programs tailored to the unique demands of global industrial sectors.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={motionPresets.staggerChildren}
          className="flex flex-wrap justify-center gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={motionPresets.scaleIn}
              className="rounded-full border border-border bg-neutral-50 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-brand-copper hover:text-brand-copper dark:bg-brand-navy-light"
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
