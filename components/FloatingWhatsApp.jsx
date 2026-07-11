'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function FloatingWhatsApp() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={contactInfo.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Akshay Computers on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-neon-lime/40 bg-gradient-to-br from-neon-lime to-emerald-500 text-dark-bg shadow-glow-lime transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(132,204,22,0.7)] md:h-[70px] md:w-[70px]"
      animate={
        reduceMotion
          ? undefined
          : { y: [0, -8, 0], scale: [1, 1.05, 1] }
      }
      transition={
        reduceMotion
          ? undefined
          : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.12 }}
    >
      <MessageCircle className="h-8 w-8" aria-hidden="true" />
    </motion.a>
  );
}
