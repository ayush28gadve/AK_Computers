'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

// Premium single-image product showcase for the hero's right side.
// Renders public/hero-products.png with a soft radial glow, a gentle
// fade-in on load and a subtle endless float — no card, no container,
// so the transparent PNG blends straight into the hero background.
export default function ProductShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[560px]"
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Soft circular glow behind the composition */}
      <div
        aria-hidden="true"
        className="absolute inset-[-8%] rounded-full bg-[radial-gradient(circle,rgba(139,30,30,0.08)_0%,rgba(232,180,173,0.12)_40%,transparent_70%)]"
      />

      {/* Gentle endless float (≈4px) */}
      <motion.div
        className="relative aspect-[3/2] w-full"
        animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <Image
          src="/hero-products.png"
          alt="CCTV cameras, DVR, networking equipment, laptop and desktop products offered by Akshay Computers"
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-contain drop-shadow-[0_24px_32px_rgba(44,44,44,0.16)]"
        />
      </motion.div>
    </motion.div>
  );
}
