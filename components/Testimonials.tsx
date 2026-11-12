"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative bg-forest-900 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Voices from Our Community
          </span>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            Customer Testimonials
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <Quote
            size={64}
            className="mx-auto mb-4 text-gold-400/20"
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              className="glass-dark mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12"
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < t.rating
                        ? "fill-gold-400 text-gold-400"
                        : "fill-transparent text-white/20"
                    }
                  />
                ))}
              </div>
              <p className="font-display text-lg italic leading-relaxed text-cream-100 sm:text-xl">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold-400/50">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    loading="lazy"
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-cream-100/60">{t.country}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold-400" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
