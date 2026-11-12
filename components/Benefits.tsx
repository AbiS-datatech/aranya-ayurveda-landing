"use client";

import { motion } from "framer-motion";
import { Flower2, HeartPulse, BrainCircuit, Sun, Infinity as InfinityIcon } from "lucide-react";
import { benefits } from "@/lib/data";
import LeafDivider from "./LeafDivider";

const icons = [Flower2, HeartPulse, BrainCircuit, Sun, InfinityIcon];

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-cream-100 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            The Ayurvedic Path
          </span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Benefits of Ayurveda
          </h2>
        </motion.div>
        <LeafDivider />

        <div className="relative mt-10">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-forest-100 lg:block" />
          <div className="space-y-10 lg:space-y-0">
            {benefits.map((benefit, i) => {
              const Icon = icons[i];
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-center gap-6 lg:mb-4 lg:w-1/2 ${
                    isEven ? "lg:ml-0 lg:flex-row lg:pr-10 lg:text-right" : "lg:ml-auto lg:flex-row-reverse lg:pl-10"
                  }`}
                >
                  <div
                    className={`hover-lift flex w-full items-center gap-4 rounded-2xl bg-white p-6 shadow-premium ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest-600">
                      <Icon size={22} className="text-cream" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-forest-900">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink/70">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  <span className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold-500 bg-white lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
