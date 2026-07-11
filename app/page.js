import Link from 'next/link';
import Accordion from '@/components/Accordion';
import CTAButton from '@/components/CTAButton';
import CTASection from '@/components/CTASection';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import StatCounter from '@/components/StatCounter';
import TeamCard from '@/components/TeamCard';
import { Star } from 'lucide-react';
import {
  faqs,
  featuredServiceSlugs,
  processSteps,
  services,
  stats,
  team,
  testimonials,
  whyChooseUs,
} from '@/lib/data';

const featuredServices = featuredServiceSlugs.map((slug) =>
  services.find((service) => service.slug === slug)
);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust indicators */}
      <section className="bg-dark-2/40" aria-label="Company statistics">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1}>
                <StatCounter {...stat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section aria-labelledby="featured-services">
        <div className="container-max section-padding">
          <SectionHeading
            title="Our Featured Services"
            subtitle="Everything your home or business needs, under one roof"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.1}>
                <ServiceCard
                  icon={service.icon}
                  title={service.short}
                  description={service.description}
                  href="/services"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-dark-2/40" aria-labelledby="why-choose-us">
        <div className="container-max section-padding">
          <SectionHeading
            title="Why Choose Akshay Computers"
            subtitle="What sets us apart from the rest"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="glass-card flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:border-neon-lime/40 hover:shadow-glow-lime">
                  <span className="animate-float flex h-14 w-14 items-center justify-center rounded-full border border-neon-lime/30 bg-neon-lime/10 text-neon-lime">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-txt-secondary">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section aria-labelledby="how-we-work">
        <div className="container-max section-padding">
          <SectionHeading title="How We Work" subtitle="Simple, transparent, four-step process" />
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <li className="glass-card relative flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:border-neon-purple/40 hover:shadow-glow-purple">
                  <span className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple font-heading text-sm font-bold text-dark-bg shadow-glow-cyan">
                    {index + 1}
                  </span>
                  <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-card border border-neon-purple/30 bg-neon-purple/10 text-neon-purple transition-transform duration-300 hover:rotate-12 hover:scale-110">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-txt-secondary">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team preview */}
      <section className="bg-dark-2/40" aria-labelledby="team-preview">
        <div className="container-max section-padding">
          <SectionHeading
            title="Meet Our Expert Team"
            subtitle="Certified professionals dedicated to solving your IT problems"
          />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={member.slug} delay={index * 0.1}>
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All services accordion */}
      <section aria-labelledby="all-services">
        <div className="container-max section-padding">
          <SectionHeading
            title="All Our Services"
            subtitle="Expand any service to learn more and request a quote"
          />
          <Reveal>
            <Accordion
              idPrefix="services"
              items={services.map((service) => ({
                title: service.title,
                content: (
                  <div className="space-y-4">
                    <p>{service.description}</p>
                    <CTAButton href="/contact" variant="whatsapp" className="!min-h-[40px] !px-4 !py-2 !text-sm">
                      Get Quote
                    </CTAButton>
                  </div>
                ),
              }))}
            />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-dark-2/40" aria-labelledby="testimonials">
        <div className="container-max section-padding">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Trusted by homes, offices, schools and businesses"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.author} delay={index * 0.1}>
                <figure className="glass-card flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-pink/40 hover:shadow-glow-pink">
                  <div
                    className="flex gap-1 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-gray-200">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm">
                    <span className="font-semibold text-white">{testimonial.author}</span>
                    <span className="text-txt-secondary">, {testimonial.org}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq">
        <div className="container-max section-padding">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers about our services, pricing and support"
          />
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <Accordion
                idPrefix="faq"
                items={faqs.map((faq) => ({ title: faq.question, content: faq.answer }))}
              />
            </div>
          </Reveal>
          <p className="mt-8 text-center text-txt-secondary">
            Still have questions?{' '}
            <Link
              href="/contact"
              className="font-semibold text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
            >
              Get in touch
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
