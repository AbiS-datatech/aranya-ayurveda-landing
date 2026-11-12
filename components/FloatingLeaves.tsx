"use client";

import { motion } from "framer-motion";

type Leaf = {
  top: string;
  left: string;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
  opacity: number;
};

const leaves: Leaf[] = [
  { top: "12%", left: "8%", size: 34, delay: 0, duration: 7, rotate: -12, opacity: 0.85 },
  { top: "22%", left: "88%", size: 26, delay: 1.2, duration: 6, rotate: 20, opacity: 0.7 },
  { top: "68%", left: "6%", size: 22, delay: 0.6, duration: 8, rotate: 10, opacity: 0.6 },
  { top: "78%", left: "82%", size: 30, delay: 1.8, duration: 7.5, rotate: -18, opacity: 0.8 },
  { top: "44%", left: "94%", size: 18, delay: 0.3, duration: 6.5, rotate: 8, opacity: 0.55 },
  { top: "8%", left: "45%", size: 20, delay: 2, duration: 9, rotate: -6, opacity: 0.5 },
];

function LeafShape({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
      <path
        d="M4 20C4 12 8 4 20 4C20 12 16 20 4 20Z"
        fill="#F8F5E9"
        fillOpacity="0.18"
        stroke="#F8F5E9"
        strokeOpacity="0.55"
        strokeWidth="1"
      />
      <path
        d="M5 19C10 14 13 9 19 5"
        stroke="#C9A227"
        strokeOpacity="0.7"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export default function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: leaf.top, left: leaf.left }}
          animate={{
            y: [0, -22, 0],
            rotate: [leaf.rotate, leaf.rotate + 14, leaf.rotate],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <LeafShape size={leaf.size} opacity={leaf.opacity} />
        </motion.div>
      ))}
    </div>
  );
}
