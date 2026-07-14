import { MessageCircle, Phone } from 'lucide-react';
import CTAButton from './CTAButton';
import ParticleBackground from './ParticleBackground';
import Reveal from './Reveal';
import { contactInfo } from '@/lib/data';

export default function CTASection({
  title = 'Ready to Upgrade Your IT Infrastructure?',
  subtitle = 'Get expert solutions tailored to your needs',
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-apricot/30 via-cream to-orange-apricot/30">
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute left-1/4 top-0 h-64 w-64 bg-gradient-to-br from-orange-coral/20 to-gold-bright/15 blur-3xl"
      />
      <ParticleBackground count={20} />
      <div className="container-max section-padding relative text-center">
        <Reveal>
          <h2 className="text-gradient font-heading text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg text-charcoal-soft">{subtitle}</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <CTAButton href={contactInfo.whatsappHref} variant="whatsapp">
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
            </CTAButton>
            <CTAButton href={contactInfo.phoneHref} variant="primary">
              <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Contact Form
            </CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
