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
import { MessageSquareQuote, Star } from 'lucide-react';
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
import { getAvailableProducts } from '@/lib/products';

const featuredServices = featuredServiceSlugs.map((slug) =>
  services.find((service) => service.slug === slug)
);

export default function HomePage() {
  const products = getAvailableProducts();

  return (
    <>
      <Hero products={products} />

      {/* Trust indicators */}
      <section className="bg-blush/20" aria-label="Company statistics">
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
      <section className="bg-blush/20" aria-labelledby="why-choose-us">
        <div className="container-max section-padding">
          <SectionHeading
            title="Why Choose Akshay Computers"
            subtitle="What sets us apart from the rest"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="glass-card flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:border-crimson/60 hover:shadow-glow-crimson">
                  <span className="animate-float flex h-14 w-14 items-center justify-center rounded-full border border-red-dark/40 bg-red-dark/10 text-red-dark">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-charcoal-deep">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-soft">{item.description}</p>
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
                <li className="glass-card relative flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:border-crimson/40 hover:shadow-glow-maroon">
                  <span className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-maroon to-crimson font-heading text-sm font-bold text-white shadow-glow-maroon">
                    {index + 1}
                  </span>
                  <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-card border border-crimson/30 bg-crimson/10 text-crimson transition-transform duration-300 hover:rotate-12 hover:scale-110">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-charcoal-deep">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal-soft">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team preview */}
      <section className="bg-blush/20" aria-labelledby="team-preview">
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
      <section className="bg-blush/20" aria-labelledby="testimonials">
        <div className="container-max section-padding">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Trusted by homes, offices, schools and businesses"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.length > 0
              ? testimonials.map((testimonial, index) => (
                  <Reveal key={testimonial.author} delay={index * 0.1}>
                    <figure className="glass-card flex h-full flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/50 hover:shadow-glow-crimson">
                      <div
                        className="flex gap-1 text-crimson drop-shadow-[0_1px_2px_rgba(192,57,43,0.4)]"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-5 w-5 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <blockquote className="flex-1 text-charcoal-deep">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <figcaption className="text-sm">
                        <span className="font-semibold text-charcoal-deep">
                          {testimonial.author}
                        </span>
                        <span className="text-charcoal-soft">, {testimonial.org}</span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))
              : // Clean placeholder state until real customer testimonials are added
                Array.from({ length: 3 }).map((_, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className="glass-card flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-crimson/50 hover:shadow-glow-crimson">
                      <MessageSquareQuote
                        className="h-9 w-9 text-maroon/40"
                        aria-hidden="true"
                      />
                      <p className="font-semibold text-charcoal-soft">
                        Customer testimonial coming soon
                      </p>
                      <p className="text-sm text-gray-muted">
                        Real reviews from our happy customers will appear here.
                      </p>
                    </div>
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
          <p className="mt-8 text-center text-charcoal-soft">
            Still have questions?{' '}
            <Link
              href="/contact"
              className="font-semibold text-maroon hover:drop-shadow-[0_1px_2px_rgba(139,30,30,0.35)]"
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
