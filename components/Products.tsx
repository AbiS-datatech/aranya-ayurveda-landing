"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Eye } from "lucide-react";
import { products } from "@/lib/data";
import LeafDivider from "./LeafDivider";

export default function Products() {
  return (
    <section id="products" className="relative bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Bestsellers
          </span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Loved Around the World
          </h2>
        </motion.div>
        <LeafDivider />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="hover-lift group overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-premium"
            >
              <div className="relative h-56 overflow-hidden bg-forest-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-forest-900/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream-100">
                  {product.category}
                </span>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-forest-900/80 py-3 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <button className="flex items-center gap-1.5 rounded-full bg-gold-500 px-4 py-2 text-xs font-semibold text-forest-900 transition-transform hover:scale-105">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                  <button className="flex items-center gap-1.5 rounded-full border border-white/50 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10">
                    <Eye size={14} /> Quick View
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg text-forest-900">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={13}
                      className={
                        idx < Math.round(product.rating)
                          ? "fill-gold-500 text-gold-500"
                          : "fill-transparent text-forest-100"
                      }
                    />
                  ))}
                  <span className="ml-1 text-xs text-ink/50">
                    ({product.reviews})
                  </span>
                </div>
                <p className="mt-3 font-display text-xl text-forest-700">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
