"use client";

import { motion } from "framer-motion";
import { Search, Factory, ShieldCheck, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { motionPresets } from "@/constants/theme";

const processSteps = [
  {
    title: "1. Collection & Auditing",
    description: "We deploy specialized fleets to collect scrap, followed by a rigorous material audit and weighing process.",
    icon: Search,
  },
  {
    title: "2. Sorting & Processing",
    description: "Advanced magnetic and eddy-current separators sort materials before shearing, shredding, or baling.",
    icon: Factory,
  },
  {
    title: "3. Quality Assurance",
    description: "Spectrometer testing ensures all processed metals meet exact metallurgical specifications.",
    icon: ShieldCheck,
  },
  {
    title: "4. Distribution",
    description: "Furnace-ready materials are shipped globally to foundries and manufacturing partners.",
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  return (
    <section className="zk-section bg-neutral-900 text-white dark:bg-brand-navy">
      <Container>
        <div className="mb-16 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Our Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              A transparent, efficient, and environmentally responsible approach to metal recycling.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-white/10 lg:block" />

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.staggerChildren}
            className="grid gap-12 lg:grid-cols-4 lg:gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={motionPresets.fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex size-20 items-center justify-center rounded-full border-4 border-neutral-900 bg-brand-copper text-white shadow-xl dark:border-brand-navy">
                  <step.icon className="size-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-neutral-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
