import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export const metadata = {
  title: 'Contact Akshay Computers - CCTV & IT Services',
  description:
    'Get in touch with our team. Phone, WhatsApp, email, or contact form. Available Mon-Sat, 10 AM - 8 PM.',
};

const contactOptions = [
  {
    icon: MessageCircle,
    title: 'Chat on WhatsApp',
    text: 'Fastest way to reach us',
    note: 'Usually responds within 2 hours',
    href: contactInfo.whatsappHref,
    cta: 'Open WhatsApp',
    color:
      'bg-gradient-to-r from-maroon to-red-dark text-white shadow-glow-maroon hover:shadow-[0_8px_24px_rgba(139,30,30,0.25)]',
    iconColor: 'border-maroon/30 bg-maroon/10 text-maroon',
    hoverGlow: 'hover:border-maroon/40 hover:shadow-glow-maroon',
    external: true,
  },
  {
    icon: Phone,
    title: 'Call Us',
    text: contactInfo.phone,
    note: 'Available Mon-Sat, 10 AM - 8 PM',
    href: contactInfo.phoneHref,
    cta: 'Call Now',
    color:
      'bg-crimson text-white shadow-glow-crimson hover:bg-red-dark hover:shadow-[0_8px_24px_rgba(192,57,43,0.22)]',
    iconColor: 'border-red-dark/40 bg-red-dark/10 text-red-dark',
    hoverGlow: 'hover:border-crimson/60 hover:shadow-glow-crimson',
  },
  {
    icon: Mail,
    title: 'Email Us',
    text: contactInfo.email,
    note: 'We reply within 24 hours',
    href: contactInfo.emailHref,
    cta: 'Send Email',
    color:
      'bg-gradient-to-r from-crimson to-maroon text-white shadow-glow-maroon hover:shadow-[0_8px_24px_rgba(165,42,42,0.22)]',
    iconColor: 'border-crimson/30 bg-crimson/10 text-crimson',
    hoverGlow: 'hover:border-crimson/40 hover:shadow-glow-maroon',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Get in Touch" subtitle="Multiple ways to reach our expert team" />

      <section aria-labelledby="contact-options">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 0.1}>
                <div
                  className={`glass-card flex h-full flex-col items-center gap-3 p-8 text-center transition-all duration-300 ${option.hoverGlow}`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full border transition-transform duration-300 hover:rotate-12 hover:scale-110 ${option.iconColor}`}
                  >
                    <option.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h2 className="font-heading text-xl font-bold text-charcoal-deep">
                    {option.title}
                  </h2>
                  <p className="font-semibold text-charcoal-deep">{option.text}</p>
                  <p className="text-sm text-charcoal-soft">{option.note}</p>
                  <a
                    href={option.href}
                    {...(option.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className={`mt-auto inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-card px-6 py-3 font-bold transition-all duration-300 ease-bounce hover:-translate-y-0.5 active:scale-95 ${option.color}`}
                  >
                    {option.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/20" aria-labelledby="contact-form-section">
        <div className="container-max section-padding">
          <SectionHeading
            title="Send Us a Message"
            subtitle="Fill in the form and we'll get back to you within 24 hours"
          />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="glass-card p-6 md:p-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="glass-card flex h-full flex-col gap-5 p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold text-charcoal-deep">Our Office</h3>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
                  <address className="not-italic leading-relaxed text-charcoal-soft">
                    {contactInfo.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
                  <p className="text-charcoal-soft">
                    {contactInfo.hours}
                    <br />
                    {contactInfo.hoursClosed}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
                  <a
                    href={contactInfo.phoneHref}
                    className="text-maroon hover:drop-shadow-[0_1px_2px_rgba(139,30,30,0.35)]"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-maroon" aria-hidden="true" />
                  <a
                    href={contactInfo.emailHref}
                    className="text-maroon hover:drop-shadow-[0_1px_2px_rgba(139,30,30,0.35)]"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=New+Osmanpura+Chhatrapati+Sambhajinagar+431005"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-[44px] items-center justify-center rounded-card border border-maroon/60 px-6 py-3 font-semibold text-maroon transition-all duration-300 hover:bg-maroon/10 hover:shadow-glow-maroon"
                >
                  View on Google Maps
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
