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
      'bg-gradient-to-r from-neon-lime to-emerald-400 text-dark-bg shadow-glow-lime hover:shadow-[0_0_35px_rgba(132,204,22,0.6)]',
    iconColor: 'border-neon-lime/30 bg-neon-lime/10 text-neon-lime',
    hoverGlow: 'hover:border-neon-lime/40 hover:shadow-glow-lime',
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
      'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg shadow-glow-cyan hover:shadow-glow-cyan-lg',
    iconColor: 'border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan',
    hoverGlow: 'hover:border-neon-cyan/40 hover:shadow-glow-cyan',
  },
  {
    icon: Mail,
    title: 'Email Us',
    text: contactInfo.email,
    note: 'We reply within 24 hours',
    href: contactInfo.emailHref,
    cta: 'Send Email',
    color:
      'bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-glow-purple hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]',
    iconColor: 'border-neon-purple/30 bg-neon-purple/10 text-neon-purple',
    hoverGlow: 'hover:border-neon-purple/40 hover:shadow-glow-purple',
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
                  <h2 className="font-heading text-xl font-bold text-white">{option.title}</h2>
                  <p className="font-semibold text-gray-200">{option.text}</p>
                  <p className="text-sm text-txt-secondary">{option.note}</p>
                  <a
                    href={option.href}
                    {...(option.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className={`mt-auto inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-card px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${option.color}`}
                  >
                    {option.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-2/40" aria-labelledby="contact-form-section">
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
                <h3 className="font-heading text-xl font-bold text-white">Our Office</h3>
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
                  <address className="not-italic leading-relaxed text-txt-secondary">
                    {contactInfo.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
                  <p className="text-txt-secondary">
                    {contactInfo.hours}
                    <br />
                    {contactInfo.hoursClosed}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
                  <a
                    href={contactInfo.phoneHref}
                    className="text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
                  <a
                    href={contactInfo.emailHref}
                    className="text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=New+Osmanpura+Chhatrapati+Sambhajinagar+431005"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-[44px] items-center justify-center rounded-card border border-neon-cyan/50 px-6 py-3 font-semibold text-neon-cyan transition-all duration-300 hover:bg-neon-cyan/10 hover:shadow-glow-cyan"
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
