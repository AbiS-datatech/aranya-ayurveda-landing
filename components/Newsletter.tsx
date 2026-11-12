"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative bg-forest-600 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <Mail size={14} /> Stay Rooted
          </span>
          <h2 className="mt-5 font-display text-3xl text-white sm:text-4xl">
            Join our wellness circle
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-cream-100/80">
            Seasonal Ayurvedic rituals, early access to new formulas and 10% off
            your first order — straight to your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-4 text-cream-100"
            >
              <CheckCircle2 size={18} className="text-gold-400" />
              You&apos;re on the list — welcome to Aranya.
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm text-white placeholder:text-cream-100/50 outline-none transition-colors focus:border-gold-400"
              />
              <button
                type="submit"
                className="btn-ripple inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-900 transition-transform hover:scale-105"
              >
                Subscribe
                <ArrowRight size={15} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
