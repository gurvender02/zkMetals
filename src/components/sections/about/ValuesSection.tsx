"use client";

import { motion } from "framer-motion";
import { Leaf, Shield, Award, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motionPresets } from "@/constants/theme";

const values = [
  {
    title: "Sustainability First",
    description: "Every process is designed to minimize environmental impact and maximize resource recovery. We are committed to a zero-landfill future.",
    icon: Leaf,
  },
  {
    title: "Uncompromising Integrity",
    description: "Transparent pricing, accurate weighing, and honest assessments form the bedrock of our long-term client relationships.",
    icon: Shield,
  },
  {
    title: "Metallurgical Excellence",
    description: "We employ advanced spectrometer testing and rigorous QA to ensure our processed materials meet the highest industrial standards.",
    icon: Award,
  },
  {
    title: "Collaborative Partnership",
    description: "We don't just buy scrap; we work closely with your team to optimize your waste management and recovery processes.",
    icon: Users,
  },
];

export function ValuesSection() {
  return (
    <section className="zk-section bg-neutral-50 dark:bg-brand-navy-dark">
      <Container>
        <div className="mb-16 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The principles that guide our operations, our partnerships, and our commitment to the planet.
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
          {values.map((value, index) => (
            <motion.div key={index} variants={motionPresets.fadeUp}>
              <Card className="zk-hover-lift h-full border-border/50 bg-white transition-colors hover:border-brand-copper/50 dark:bg-brand-navy-light">
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-brand-copper/10 text-brand-copper">
                    <value.icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
