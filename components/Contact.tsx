"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Get in Touch
          </span>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            We&apos;d Love to Hear From You
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-forest-100 bg-white p-8 shadow-premium lg:col-span-2"
          >
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-50">
                  <MapPin size={19} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Head Office</p>
                  <p className="mt-1 text-sm text-ink/70">
                    Aranya Ayurveda Pvt. Ltd., MG Road, Kochi, Kerala 682016, India
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-50">
                  <Phone size={19} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Phone</p>
                  <p className="mt-1 text-sm text-ink/70">+91 484 234 5678</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-50">
                  <Mail size={19} className="text-forest-600" />
                </div>
                <div>
                  <p className="font-semibold text-forest-900">Email</p>
                  <p className="mt-1 text-sm text-ink/70">hello@aranyaayurveda.com</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3 border-t border-forest-50 pt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-forest-100 text-forest-600 transition-colors hover:border-gold-400 hover:bg-gold-400 hover:text-forest-900"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-h-[320px] overflow-hidden rounded-3xl border border-forest-100 shadow-premium lg:col-span-3"
          >
            <div className="absolute inset-0 bg-forest-100">
              <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#EAF4EA_25%,#F8F5E9_25%,#F8F5E9_50%,#EAF4EA_50%,#EAF4EA_75%,#F8F5E9_75%,#F8F5E9_100%)] bg-[length:32px_32px]">
                <div className="glass flex flex-col items-center gap-2 rounded-2xl px-8 py-6 text-center">
                  <MapPin size={26} className="text-forest-600" />
                  <p className="text-sm font-semibold text-forest-900">
                    Kochi, Kerala — Google Map
                  </p>
                  <p className="text-xs text-ink/50">Interactive map loads here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
