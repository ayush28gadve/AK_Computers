import Link from 'next/link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo, navLinks, services } from '@/lib/data';

const footerServices = ['cctv', 'laptop', 'networking', 'office-setup', 'amc', 'support'];

export default function Footer() {
  return (
    <footer className="relative bg-dark-3 text-white">
      {/* Animated gradient top border */}
      <div className="gradient-line animate-gradient-shift" style={{ backgroundSize: '200% auto' }} aria-hidden="true" />

      <div className="container-max grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-heading text-xl font-bold">
            Akshay <span className="text-gradient">Computers</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-txt-secondary">
            Complete IT Solutions for Your Business
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="font-heading text-base font-bold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-txt-secondary transition-all duration-300 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="font-heading text-base font-bold">Our Services</h2>
          <ul className="mt-4 space-y-2">
            {services
              .filter((service) => footerServices.includes(service.slug))
              .map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-txt-secondary transition-all duration-300 hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-bold">Contact Info</h2>
          <ul className="mt-4 space-y-3 text-sm text-txt-secondary">
            <li>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-neon-cyan"
              >
                <Phone className="h-4 w-4 shrink-0 text-neon-cyan" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.emailHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-neon-cyan"
              >
                <Mail className="h-4 w-4 shrink-0 text-neon-cyan" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" aria-hidden="true" />
              <address className="not-italic">
                {contactInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" aria-hidden="true" />
              <span>
                {contactInfo.hours}
                <br />
                {contactInfo.hoursClosed}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-txt-muted sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Akshay Computers. All rights reserved.</p>
          <p>
            Privacy Policy <span aria-hidden="true">|</span> Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
