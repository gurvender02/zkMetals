"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { motionPresets } from "@/constants/theme";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40" />
        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-background to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={motionPresets.staggerChildren}
            className="flex flex-col items-center gap-6"
          >
            <motion.h1
              variants={motionPresets.fadeUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Our <span className="zk-text-gradient">Story</span>
            </motion.h1>

            <motion.p
              variants={motionPresets.fadeUp}
              className="text-lg leading-relaxed text-neutral-300 sm:text-xl"
            >
              Founded with a commitment to environmental stewardship and industrial efficiency, Zeeshan Metal Recycling has grown into a premier partner for global manufacturers. We believe that what others see as waste is the foundation of tomorrow's infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
