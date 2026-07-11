'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import CTAButton from './CTAButton';
import ParticleBackground from './ParticleBackground';
import { contactInfo } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-bg via-dark-2 to-dark-bg pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Morphing gradient blobs */}
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 bg-gradient-to-tr from-neon-pink/15 to-neon-lime/10 blur-3xl"
        style={{ animationDelay: '-4s' }}
      />

      {/* Floating glowing particles */}
      <ParticleBackground count={30} />

      <motion.div
        className="container-max relative px-4 sm:px-6 lg:px-8"
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? false : 'visible'}
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={reduceMotion ? undefined : fadeInUp}
            className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Complete IT Solutions for Your Business —{' '}
            <span className="text-gradient">Trusted for 15+ Years</span>
          </motion.h1>
          <motion.p
            variants={reduceMotion ? undefined : fadeInUp}
            className="mt-5 text-lg text-txt-secondary md:text-xl"
          >
            CCTV, Repairs, Networking &amp; Security — One-Stop IT Service Provider in
            Chhatrapati Sambhajinagar
          </motion.p>
          <motion.div
            variants={reduceMotion ? undefined : fadeInUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <CTAButton href={contactInfo.whatsappHref} variant="whatsapp">
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
            </CTAButton>
            <CTAButton href={contactInfo.phoneHref} variant="primary">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call Now: {contactInfo.phone}
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
