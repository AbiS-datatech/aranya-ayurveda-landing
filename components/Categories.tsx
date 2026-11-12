"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="relative bg-forest-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Explore
          </span>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            Featured Categories
          </h2>
          <p className="mt-4 text-sm text-cream-100/70">
            Six essential rituals, drawn from thousands of years of Ayurvedic practice.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.a
              href="#products"
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative block h-80 overflow-hidden rounded-2xl shadow-premium"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                loading="lazy"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/95 via-forest-900/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-white">{cat.title}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-forest-900">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <p className="mt-2 max-h-0 overflow-hidden text-sm text-cream-100/80 opacity-0 transition-all duration-500 ease-out group-hover:max-h-20 group-hover:opacity-100">
                  {cat.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
