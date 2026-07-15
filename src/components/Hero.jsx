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
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Layer 1: warm animated mesh gradient base */}
      <div
        aria-hidden="true"
        className="animate-gradient-shift absolute inset-0 bg-gradient-hero-mesh"
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Layer 2: morphing gradient blobs */}
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 bg-gradient-to-br from-orange-coral/25 to-gold-bright/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 bg-gradient-to-tr from-orange-peach/25 to-orange-apricot/20 blur-3xl"
        style={{ animationDelay: '-4s' }}
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -left-20 top-1/4 h-72 w-72 bg-gradient-to-br from-gold-warm/20 to-orange-coral/15 blur-3xl"
        style={{ animationDelay: '-2s' }}
      />

      {/* Layer 3: light sweep */}
      <div
        aria-hidden="true"
        className="animate-light-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      {/* Layer 4: floating warm particles (mouse-reactive) */}
      <ParticleBackground count={80} />

      <motion.div
        className="container-max relative px-4 sm:px-6 lg:px-8"
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        animate={reduceMotion ? false : 'visible'}
      >
        <div className="max-w-3xl">
          <motion.h1
            variants={reduceMotion ? undefined : fadeInUp}
            className="font-heading text-3xl font-bold leading-tight tracking-tight text-charcoal-deep sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Complete IT Solutions for Your Business —{' '}
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(255,107,53,0.25)]">
              Trusted for 35+ Years
            </span>
          </motion.h1>
          <motion.p
            variants={reduceMotion ? undefined : fadeInUp}
            className="mt-5 text-lg text-charcoal-soft md:text-xl"
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
