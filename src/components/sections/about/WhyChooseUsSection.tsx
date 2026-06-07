"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { motionPresets } from "@/constants/theme";

const reasons = [
  "Global Logistics Network",
  "Real-time Market Pricing",
  "Certified ISO 14001 Facility",
  "Zero-Landfill Processing",
  "Custom Scrap Management Plans",
  "Advanced Metallurgical Lab",
  "Secure Data Destruction (E-waste)",
  "Prompt, Reliable Payments",
];

export function WhyChooseUsSection() {
  return (
    <section className="zk-section overflow-hidden bg-brand-navy text-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.staggerChildren}
          >
            <motion.h2 variants={motionPresets.fadeUp} className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Why Choose ZK Metals?
            </motion.h2>
            <motion.p variants={motionPresets.fadeUp} className="mt-6 text-lg text-neutral-300">
              We offer more than just a place to drop off scrap. We provide an end-to-end industrial recycling partnership designed to increase your operational efficiency and boost your bottom line.
            </motion.p>
            
            <motion.div variants={motionPresets.fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-copper" />
                  <span className="text-neutral-200">{reason}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative/Image Side */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.slideInRight}
            className="relative h-[400px] w-full lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center shadow-2xl" />
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-brand-navy/20 mix-blend-overlay" />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-brand-navy-light/90 p-6 shadow-xl backdrop-blur-md sm:-left-12">
              <div className="text-3xl font-bold text-brand-copper">99.8%</div>
              <div className="mt-1 text-sm font-medium text-neutral-300">Material Recovery Rate</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
