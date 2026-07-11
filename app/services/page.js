import Accordion from '@/components/Accordion';
import CTAButton from '@/components/CTAButton';
import CTASection from '@/components/CTASection';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import { CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { contactInfo, services } from '@/lib/data';

export const metadata = {
  title: 'Our Services - CCTV, Repair & IT Solutions',
  description:
    'Explore our comprehensive IT services: CCTV systems, laptop repair, networking, office setup, AMC, and 24/7 technical support.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Complete IT Solutions for Every Need" />

      <section aria-labelledby="services-grid">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.1}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href="/contact"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-2/40" aria-labelledby="service-details">
        <div className="container-max section-padding">
          <SectionHeading
            title="Detailed Service Breakdown"
            subtitle="Expand a service to see what's included and who it's for"
          />
          <Reveal>
            <Accordion
              idPrefix="service-details"
              items={services.map((service) => ({
                title: service.title,
                content: (
                  <div className="space-y-4">
                    <p>{service.description}</p>
                    <div>
                      <h4 className="mb-2 font-semibold text-white">What&apos;s included</h4>
                      <ul className="space-y-1.5">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle
                              className="mt-0.5 h-4 w-4 shrink-0 text-neon-lime"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      <span className="font-semibold text-white">Who it&apos;s for: </span>
                      {service.audience}
                    </p>
                    <p className="font-semibold text-white">Pricing: Contact us for a free quote</p>
                    <CTAButton
                      href="/contact"
                      variant="whatsapp"
                      className="!min-h-[40px] !px-4 !py-2 !text-sm"
                    >
                      Request Quote
                    </CTAButton>
                  </div>
                ),
              }))}
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Need a Service Not Listed Here?"
        subtitle="Tell us what you need — we'll find a solution"
      />

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-dark-bg/85 p-3 shadow-card-lg backdrop-blur-md md:hidden">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white">Need this service?</p>
          <div className="flex gap-2">
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-card bg-gradient-to-r from-neon-lime to-emerald-400 px-4 py-2 text-sm font-bold text-dark-bg shadow-glow-lime"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </a>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-card bg-gradient-to-r from-neon-cyan to-neon-blue px-4 py-2 text-sm font-bold text-dark-bg shadow-glow-cyan"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
