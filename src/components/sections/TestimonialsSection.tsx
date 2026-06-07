"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { motionPresets } from "@/constants/theme";

const testimonials = [
  {
    quote: "ZK Metals revolutionized our scrap management. Their transparent pricing and timely pickups have made them an invaluable partner for our manufacturing operations.",
    author: "Sarah Jenkins",
    role: "Operations Director",
    company: "Apex Manufacturing",
  },
  {
    quote: "The quality of copper granules we receive from Zeeshan Metal is consistently superior. They understand the strict metallurgical requirements of our foundry.",
    author: "David Chen",
    role: "Procurement Lead",
    company: "Global Foundries Ltd.",
  },
  {
    quote: "Professional, reliable, and environmentally conscious. Their zero-landfill initiative aligns perfectly with our corporate sustainability goals.",
    author: "Michael Ross",
    role: "Sustainability Officer",
    company: "TechBuild Corp",
  },
];

export function TestimonialsSection() {
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
            <h2 className="text-3xl font-bold sm:text-4xl">Client Testimonials</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Don't just take our word for it. Here is what our industrial partners have to say about working with us.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={motionPresets.staggerChildren}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={motionPresets.fadeUp}>
              <Card className="h-full border-border/50 bg-white shadow-sm dark:bg-brand-navy-light">
                <CardContent className="flex h-full flex-col p-8">
                  <Quote className="mb-6 size-8 text-brand-copper/40" />
                  <p className="mb-8 flex-1 text-lg italic text-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-brand-copper">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
