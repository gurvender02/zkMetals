"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { motionPresets } from "@/constants/theme";

const factoryImages = [
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565626423153-f7200b21e06c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
];

const teamImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509390234148-3162b1b3b246?q=80&w=800&auto=format&fit=crop",
];

export function GallerySection() {
  return (
    <section className="zk-section bg-background">
      <Container>
        {/* Factory Gallery */}
        <div className="mb-20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Our Facilities</h2>
            <p className="mt-4 text-muted-foreground">State-of-the-art processing and recycling yards.</p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.staggerChildren}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {factoryImages.map((src, index) => (
              <motion.div key={index} variants={motionPresets.scaleIn} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
                <img 
                  src={src} 
                  alt={`Factory facility ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-navy/0 transition-colors duration-500 group-hover:bg-brand-navy/20" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Gallery */}
        <div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.fadeUp}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Our Experts</h2>
            <p className="mt-4 text-muted-foreground">The dedicated professionals behind our operations.</p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.staggerChildren}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {teamImages.map((src, index) => (
              <motion.div key={index} variants={motionPresets.scaleIn} className="group relative overflow-hidden rounded-xl aspect-square">
                <img 
                  src={src} 
                  alt={`Team member ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-navy/0 transition-colors duration-500 group-hover:bg-brand-navy/20" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
