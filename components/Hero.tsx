"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import FloatingLeaves from "./FloatingLeaves";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?q=80&w=2000&auto=format&fit=crop"
        alt="Ayurvedic herbs, oils and botanicals arranged on a natural surface"
        fill
        priority
        className="object-cover object-center brightness-75"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      <FloatingLeaves />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pt-24 pb-16 sm:px-8 sm:pt-28 lg:px-10 lg:pt-24">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400 backdrop-blur-sm sm:text-xs"
        >
          Rooted in India · Trusted Worldwide
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Pure Ayurvedic Wellness,
          <br />
          <span className="italic text-gold-400">Delivered Worldwide</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-2xl text-sm leading-7 text-cream-100/90 sm:text-base lg:text-lg lg:leading-8"
        >
          Aranya connects India&apos;s most trusted Ayurvedic makers directly to
          your doorstep — certified herbal formulations, cold-pressed oils and
          skin rituals, crafted the traditional way and shipped to over 50
          countries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#products"
            className="btn-ripple group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-forest-900 shadow-gold transition-transform hover:scale-105 sm:w-auto"
          >
            Shop Now
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#about"
            className="btn-ripple inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
          >
            <PlayCircle size={18} />
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6 sm:gap-8"
        >
          {[
            ["50+", "Countries Served"],
            ["120+", "Ayurvedic Formulas"],
            ["30k+", "Happy Customers"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-display text-xl text-white sm:text-3xl">{stat}</p>
              <p className="mt-1 text-xs text-cream-100/70">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 justify-center rounded-full border-2 border-white/40 pt-1.5">
          <span className="h-1.5 w-1 rounded-full bg-gold-400" />
        </div>
      </motion.div>
    </section>
  );
}
