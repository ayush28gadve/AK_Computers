'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// One positioned product in the composition: fades in on load, idles with a
// gentle float, and drifts subtly with scroll (parallax scaled by depth).
function ShowcaseItem({ slot, scrollYProgress, reduceMotion }) {
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -36 * slot.depth]);

  return (
    <motion.div
      className={`absolute ${slot.pos}`}
      style={{ zIndex: slot.z, y: reduceMotion ? 0 : parallaxY }}
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: slot.delay, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        className="relative aspect-square w-full"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -4, 0], rotate: [0, slot.rotate, 0] }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 4.5 + slot.delay * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: slot.delay,
              }
        }
      >
        {slot.glow && (
          <div
            aria-hidden="true"
            className="absolute inset-[-25%] rounded-full bg-[radial-gradient(circle,rgba(139,30,30,0.18),transparent_65%)]"
          />
        )}
        <Image
          src={`/products/${slot.file}`}
          alt={slot.alt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 40vw, 20vw"
          className="object-contain drop-shadow-[0_16px_24px_rgba(44,44,44,0.18)]"
        />
      </motion.div>
    </motion.div>
  );
}

// Premium layered product composition for the hero's right side.
// Renders nothing when no product images are available.
export default function ProductShowcase({ products = [] }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  if (products.length === 0) return null;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[540px]">
      {/* Soft circular glow behind the composition */}
      <div
        aria-hidden="true"
        className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(139,30,30,0.08)_0%,rgba(232,180,173,0.10)_35%,transparent_70%)]"
      />

      {/* The square canvas the products are choreographed on */}
      <div className="relative aspect-square w-full">
        {products.map((slot) => (
          <ShowcaseItem
            key={slot.file}
            slot={slot}
            scrollYProgress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* Floor shadow to seat the composition */}
      <div
        aria-hidden="true"
        className="absolute -bottom-4 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(44,44,44,0.14),transparent_70%)] blur-sm"
      />
    </div>
  );
}
