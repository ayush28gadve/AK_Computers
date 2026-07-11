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
      className="animate-glow-pulse fixed bottom-5 right-5 z-40 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gold-bright/50 bg-gradient-to-br from-orange-coral to-orange-golden text-white transition-shadow duration-300 md:h-[70px] md:w-[70px]"
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
