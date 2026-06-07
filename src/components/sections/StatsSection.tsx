"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { motionPresets } from "@/constants/theme";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "50k+", label: "Tons Recycled Annually" },
  { value: "500+", label: "Industrial Clients" },
  { value: "100%", label: "Eco-Compliant" },
];

export function StatsSection() {
  return (
    <section className="relative -mt-12 z-20">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={motionPresets.fadeUp}
          className="rounded-2xl bg-white p-8 shadow-2xl dark:bg-brand-navy-light sm:p-12"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-border">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center md:px-6"
              >
                <span className="font-heading text-4xl font-bold text-brand-copper sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
