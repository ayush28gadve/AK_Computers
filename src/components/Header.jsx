'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { contactInfo, navLinks } from '@/lib/data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const linkClasses = (href) =>
    `relative pb-1 text-base font-semibold transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-maroon after:to-crimson after:transition-all after:duration-300 hover:text-maroon hover:drop-shadow-[0_0_8px_rgba(139,30,30,0.4)] ${
      pathname === href
        ? 'text-maroon after:w-full'
        : 'text-charcoal-deep after:w-0 hover:after:w-full'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-maroon/15 bg-white/95 shadow-medium-brand backdrop-blur-md'
          : 'border-transparent bg-white/75 backdrop-blur-sm'
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-maroon via-crimson to-maroon"
        style={{ scaleX: progress }}
      />

      <div className="container-max flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(139,30,30,0.4)]"
        >
          <span className="font-heading text-2xl font-bold text-charcoal-deep">
            Akshay <span className="text-maroon">Computers</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="animate-glow-pulse inline-flex min-h-[44px] items-center gap-2 rounded-card bg-gradient-to-r from-maroon to-red-dark px-5 py-2.5 font-bold text-white transition-all duration-300 ease-bounce hover:-translate-y-0.5 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-card text-charcoal-deep transition-colors hover:text-maroon lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-charcoal-deep/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              aria-label="Mobile navigation"
              className="fixed left-0 top-0 z-50 flex h-screen w-[min(80vw,300px)] flex-col gap-2 border-r border-maroon/15 bg-warm-white/95 p-6 pt-20 backdrop-blur-md lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <button
                type="button"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-charcoal-deep transition-transform duration-300 hover:rotate-90 hover:text-maroon"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-card px-4 py-3 text-base font-semibold transition-colors ${
                      pathname === link.href
                        ? 'bg-maroon/10 text-maroon'
                        : 'text-charcoal-deep hover:bg-blush/20 hover:text-maroon'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-maroon/15 pt-4">
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-card bg-gradient-to-r from-maroon to-red-dark px-4 py-3 font-bold text-white shadow-glow-maroon"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp
                </a>
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-card bg-crimson px-4 py-3 font-bold text-white shadow-glow-crimson"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
