"use client";

import { motion } from "framer-motion";
import { Globe2, Zap, PackageCheck, RotateCcw } from "lucide-react";
import { shippingHighlights } from "@/lib/data";

const icons = [Globe2, Zap, PackageCheck, RotateCcw];

const dots = [
  { top: "28%", left: "18%" }, // North America
  { top: "62%", left: "28%" }, // South America
  { top: "24%", left: "48%" }, // Europe
  { top: "38%", left: "52%" }, // Middle East
  { top: "34%", left: "68%" }, // India (origin)
  { top: "55%", left: "72%" }, // South East Asia
  { top: "70%", left: "84%" }, // Australia
  { top: "22%", left: "44%" }, // UK
];

export default function Shipping() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            From Our Doors to Yours
          </span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Global Shipping, Handled with Care
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-14 aspect-[2/1] max-w-4xl overflow-hidden rounded-3xl border border-forest-100 bg-forest-900">
          <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 h-full w-full opacity-40"
            aria-hidden="true"
          >
            <defs>
              <pattern id="dotgrid" width="14" height="14" patternUnits="userSpaceOnUse">
                <circle cx="1.2" cy="1.2" r="1.2" fill="#F8F5E9" fillOpacity="0.25" />
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#dotgrid)" />
          </svg>

          {/* Origin: India */}
          <div
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ top: "34%", left: "68%" }}
          >
            <span className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-gold-400 ring-2 ring-white/60" />
            </span>
            <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-500 px-2 py-0.5 text-[10px] font-semibold text-forest-900">
              India · Origin
            </span>
          </div>

          {dots.slice(0, 7).map((dot, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream-100/80 ring-2 ring-forest-600"
              style={{ top: dot.top, left: dot.left }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xs text-cream-100/60">
            Illustrative shipping network — actual routes optimised per order
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {shippingHighlights.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="hover-lift rounded-2xl border border-forest-100 bg-white p-6 text-center shadow-premium"
              >
                <Icon size={26} className="mx-auto text-forest-600" strokeWidth={1.75} />
                <p className="mt-4 font-display text-xl text-forest-900">{item.label}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                  {item.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
