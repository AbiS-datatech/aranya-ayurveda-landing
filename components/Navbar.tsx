"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-md shadow-premium py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-10">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
              scrolled
                ? "border-forest/30 bg-forest/10"
                : "border-cream/50 bg-white/10"
            }`}
          >
            <Leaf
              size={18}
              className={scrolled ? "text-forest" : "text-cream"}
              strokeWidth={2}
            />
          </span>
          <span
            className={`font-display text-xl tracking-wide transition-colors ${
              scrolled ? "text-forest-900" : "text-white"
            }`}
          >
            Aranya <span className="text-gold-500 italic">Ayurveda</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-ink hover:text-forest" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#products"
            className="btn-ripple inline-flex items-center rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-cream shadow-gold transition-transform hover:scale-105 hover:bg-forest-700"
          >
            Shop Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`grid h-10 w-10 place-items-center rounded-full lg:hidden ${
            scrolled ? "text-forest" : "text-white"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-cream-50 shadow-premium lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-ink transition-colors hover:bg-forest-50 hover:text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#products"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-forest px-6 py-3 text-center text-sm font-semibold text-cream"
                >
                  Shop Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
