import { Leaf } from "lucide-react";
import { navLinks, categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-forest-900 pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-400/40 bg-white/5">
                <Leaf size={18} className="text-gold-400" />
              </span>
              <span className="font-display text-xl text-white">
                Aranya <span className="italic text-gold-400">Ayurveda</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/60">
              Certified Ayurvedic wellness, sourced from India&apos;s finest
              makers and delivered to your door — wherever you are.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold-400">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold-400">
              Categories
            </h4>
            <ul className="mt-5 space-y-3">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.title}>
                  <a
                    href="#products"
                    className="text-sm text-cream-100/70 transition-colors hover:text-white"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-gold-400">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/70">
              <li>MG Road, Kochi, Kerala 682016, India</li>
              <li>+91 484 234 5678</li>
              <li>hello@aranyaayurveda.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-cream-100/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Aranya Ayurveda. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
