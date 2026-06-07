"use client";

import { motion } from "framer-motion";
import { 
  ClipboardList, 
  FlaskConical, 
  TestTube, 
  Handshake, 
  Truck, 
  Factory, 
  Globe 
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    title: "1. Scrap Assessment",
    description: "Initial evaluation of the material type, estimated volume, and logistics requirements. Our experts review the initial photos and details provided via your inquiry.",
    icon: ClipboardList,
  },
  {
    title: "2. Sample Collection",
    description: "For large industrial loads, we dispatch a representative to collect physical samples from your facility to ensure accurate grading.",
    icon: FlaskConical,
  },
  {
    title: "3. Lab Testing",
    description: "Samples undergo rigorous spectrometer testing in our advanced metallurgical lab to determine the precise chemical composition and purity.",
    icon: TestTube,
  },
  {
    title: "4. Price Negotiation",
    description: "Based on the lab results and real-time LME (London Metal Exchange) indices, we offer a transparent, highly competitive purchasing price.",
    icon: Handshake,
  },
  {
    title: "5. Pickup Arrangement",
    description: "We handle all logistics. Roll-off containers or specialized fleets are deployed to your facility for safe and compliant material extraction.",
    icon: Truck,
  },
  {
    title: "6. Material Processing",
    description: "Materials arrive at our ISO-certified yards where they are sorted, sheared, shredded, or baled to exact furnace-ready specifications.",
    icon: Factory,
  },
  {
    title: "7. Delivery To Buyers",
    description: "The processed, high-grade secondary raw materials are packed, containerized, and shipped globally to foundries and manufacturing partners.",
    icon: Globe,
  },
];

export function TimelineSection() {
  return (
    <section className="zk-section bg-neutral-50 dark:bg-background overflow-hidden py-24">
      <Container>
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line (Centered on md+, left-aligned on mobile) */}
          <div className="absolute left-6 top-4 bottom-4 w-1 bg-border/50 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.title}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Center Node Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute left-6 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-brand-copper text-white shadow-md dark:border-brand-navy md:left-1/2"
                  >
                    <step.icon className="size-5" />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="ml-16 w-full md:ml-0 md:w-[45%]"
                  >
                    <Card className="zk-hover-lift border-border/50 bg-white shadow-sm dark:bg-brand-navy-light relative">
                      {/* Connector Arrow (Desktop) */}
                      <div 
                        className={`absolute top-6 hidden size-4 rotate-45 border-border/50 bg-white dark:bg-brand-navy-light md:block ${
                          isEven 
                            ? "-left-2 border-b border-l" 
                            : "-right-2 border-t border-r"
                        }`}
                      />
                      <CardContent className="p-6 sm:p-8">
                        <h3 className="mb-3 text-xl font-bold text-brand-navy dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
