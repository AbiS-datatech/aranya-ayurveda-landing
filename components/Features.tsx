"use client";

import { motion } from "framer-motion";
import { Sprout, ShieldCheck, Globe2, Leaf } from "lucide-react";
import LeafDivider from "./LeafDivider";

const features = [
  {
    icon: Sprout,
    title: "100% Natural Ingredients",
    description:
      "Every formula begins with whole herbs, roots and oils — no synthetic fillers, ever.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Ayurvedic Products",
    description:
      "Sourced from GMP-certified manufacturers and tested for purity before it reaches you.",
  },
  {
    icon: Globe2,
    title: "Worldwide Shipping",
    description:
      "Tracked, insured delivery to over 50 countries — from Boston to Berlin to Sydney.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    description:
      "Recyclable glass, biodegradable fill and soy-based inks on every shipment we send.",
  },
];

export default function Features() {
  return (
    <section className="relative bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Why Aranya
          </span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Wellness you can trust, wherever you are
          </h2>
        </motion.div>
        <LeafDivider />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hover-lift group rounded-2xl border border-forest-100 bg-white p-8 shadow-premium"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-forest-50 transition-colors group-hover:bg-forest-600">
                <feature.icon
                  size={26}
                  className="text-forest-600 transition-colors group-hover:text-cream"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="mt-6 font-display text-xl text-forest-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
