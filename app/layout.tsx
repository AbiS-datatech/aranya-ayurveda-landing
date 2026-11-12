import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aranya Ayurveda | Pure Ayurvedic Wellness Delivered Worldwide",
  description:
    "Aranya Ayurveda connects India's most trusted Ayurvedic makers to the world — certified herbal supplements, oils, skin care and wellness kits, shipped to 50+ countries.",
  keywords: [
    "Ayurveda",
    "Ayurvedic products online",
    "herbal supplements",
    "Ayurvedic skin care",
    "organic wellness",
    "India to USA shipping",
  ],
  openGraph: {
    title: "Aranya Ayurveda | Pure Ayurvedic Wellness Delivered Worldwide",
    description:
      "Certified Ayurvedic supplements, oils and skin care, sourced directly from India's finest makers and shipped worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body antialiased bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
