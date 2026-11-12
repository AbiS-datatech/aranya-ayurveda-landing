"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Target, Eye as EyeIcon, MapPin } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Our Story",
    text: "Aranya began in 2019 in the herb markets of Kerala, where our founders watched generations-old Ayurvedic knowledge stay confined to local shelves. We built a bridge — connecting certified Indian manufacturers directly to wellness seekers abroad, without the markup of foreign middlemen.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To make authentic, lab-verified Ayurveda accessible outside India — with full transparency on sourcing, ingredients and the artisans behind every formula.",
  },
  {
    icon: EyeIcon,
    title: "Our Vision",
    text: "A world where ancient wellness wisdom and modern convenience meet, so that anyone, anywhere, can build a daily ritual rooted in nature.",
  },
  {
    icon: MapPin,
    title: "Global Presence",
    text: "From our fulfilment partners in Kochi and Mumbai to customers in New York, London and Sydney, Aranya now ships to more than 50 countries worldwide.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative h-[520px] overflow-hidden rounded-3xl shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop"
              alt="Ayurvedic practitioner preparing herbal formulations by hand"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="glass absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-2xl p-5 shadow-gold sm:block">
            <p className="font-display text-3xl text-forest-700">6+ yrs</p>
            <p className="mt-1 text-xs text-ink/60">
              Sourcing directly from certified Ayurvedic makers across India
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            About Aranya
          </span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Ancient wisdom, made for the modern world
          </h2>

          <div className="mt-10 space-y-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-50">
                  <pillar.icon size={20} className="text-forest-600" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-forest-900">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
