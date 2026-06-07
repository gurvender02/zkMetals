"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motionPresets } from "@/constants/theme";

export function MissionVisionSection() {
  return (
    <section className="zk-section bg-background">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Mission */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.slideInLeft}
          >
            <Card className="h-full border-border/50 bg-neutral-50 shadow-sm dark:bg-brand-navy-light">
              <CardHeader className="pb-4">
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-brand-copper/10 text-brand-copper">
                  <Target className="size-7" />
                </div>
                <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide sustainable, efficient, and transparent metal recycling solutions that maximize value for our partners while minimizing environmental impact. We strive to process industrial scrap into high-grade resources ready for the manufacturing of tomorrow.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={motionPresets.slideInRight}
          >
            <Card className="h-full border-border/50 bg-neutral-50 shadow-sm dark:bg-brand-navy-light">
              <CardHeader className="pb-4">
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy dark:bg-white/10 dark:text-white">
                  <Lightbulb className="size-7" />
                </div>
                <CardTitle className="text-3xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the global leader in industrial metal recovery, pioneering zero-waste technologies and establishing the standard for integrity and metallurgical excellence in the circular economy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
