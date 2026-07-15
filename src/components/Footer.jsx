import Link from 'next/link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { contactInfo, navLinks, services } from '@/lib/data';

const footerServices = ['cctv', 'laptop', 'networking', 'office-setup', 'amc', 'support'];

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-deep text-white">
      {/* Animated warm gradient top border */}
      <div className="gradient-line" aria-hidden="true" />

      <div className="container-max grid gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-8 w-auto shrink-0" />
            <p className="font-heading text-xl font-bold">
              Akshay <span className="text-gradient">Computers</span>
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
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
                  className="text-sm text-white/70 transition-all duration-300 hover:text-orange-peach hover:drop-shadow-[0_0_8px_rgba(255,179,102,0.6)]"
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
                    className="text-sm text-white/70 transition-all duration-300 hover:text-orange-peach hover:drop-shadow-[0_0_8px_rgba(255,179,102,0.6)]"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-base font-bold">Contact Info</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-orange-peach"
              >
                <Phone className="h-4 w-4 shrink-0 text-orange-peach" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.emailHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-orange-peach"
              >
                <Mail className="h-4 w-4 shrink-0 text-orange-peach" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-peach" aria-hidden="true" />
              <address className="not-italic">
                {contactInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-orange-peach" aria-hidden="true" />
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
        <div className="container-max flex flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-white/50 sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Akshay Computers. All rights reserved.</p>
          <p>
            Privacy Policy <span aria-hidden="true">|</span> Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
