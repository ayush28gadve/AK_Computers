'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Integrated product composition for the hero's right column.
// Blending recipe (so the PNG reads as part of the scene, not a cut-out):
//   1. layered ambient glows behind the products (warm wash + maroon core)
//   2. a radial mask that softly fades the image's outer edges
//   3. stacked elliptical floor shadows that seat it on an invisible surface
//   4. barely-there motion: fade-in, 3px float, slight scroll parallax
export default function ProductShowcase() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [10, -14]);

  return (
    <motion.div
      ref={ref}
      className="relative mx-auto w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[600px]"
      style={{ y: reduceMotion ? 0 : parallaxY }}
      initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.97 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Ambient lighting: broad warm wash */}
      <div
        aria-hidden="true"
        className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(232,180,173,0.28)_0%,rgba(240,222,218,0.14)_45%,transparent_72%)]"
      />
      {/* Ambient lighting: tighter maroon core glow */}
      <div
        aria-hidden="true"
        className="absolute inset-[2%] rounded-full bg-[radial-gradient(circle,rgba(139,30,30,0.10)_0%,transparent_65%)]"
      />

      {/* Gentle endless float (≈3px) */}
      <motion.div
        className="relative aspect-[3/2] w-full"
        animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        {/* Radial mask fades the outer edges into the background */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_82%_78%_at_50%_46%,black_58%,transparent_99%)]">
          <Image
            src="/hero-products.png"
            alt="CCTV cameras, DVR, networking equipment, laptop and desktop products offered by Akshay Computers"
            fill
            loading="lazy"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 45vw"
            className="object-contain drop-shadow-[0_18px_28px_rgba(44,44,44,0.14)]"
          />
        </div>
      </motion.div>

      {/* Floor shadows: broad soft base + tighter core, seat the composition */}
      <div
        aria-hidden="true"
        className="absolute -bottom-3 left-1/2 h-14 w-[88%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(44,44,44,0.10),transparent_70%)] blur-md"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-1 left-1/2 h-6 w-[55%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(44,44,44,0.14),transparent_70%)] blur-sm"
      />
    </motion.div>
  );
}
