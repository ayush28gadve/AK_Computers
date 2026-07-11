import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import StatCounter from '@/components/StatCounter';
import { Compass, Target } from 'lucide-react';
import { expertiseAreas, stats } from '@/lib/data';

export const metadata = {
  title: 'About Akshay Computers - Your Trusted IT Partner',
  description:
    'Akshay Computers is a leading IT service provider in Chhatrapati Sambhajinagar. 500+ installations, 24/7 support.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Akshay Computers" subtitle="Your Trusted IT Solution Partner" />

      <section aria-labelledby="who-we-are">
        <div className="container-max section-padding">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-gray-200">
              <h2 className="text-gradient font-heading text-3xl font-bold tracking-tight">
                Who We Are
              </h2>
              <p>
                Akshay Computers is a leading IT service provider in Chhatrapati Sambhajinagar,
                dedicated to delivering premium technology solutions to businesses,
                organizations, and individuals. With over 15 years of industry experience, we
                specialize in CCTV systems, computer repairs, networking solutions, and
                comprehensive IT infrastructure setup.
              </p>
              <p>
                Our mission is to make quality technology accessible, affordable, and reliable
                for everyone. We believe in building lasting relationships with our clients
                through exceptional service, expert solutions, and 24/7 support.
              </p>
              <p>
                Whether you need a complete office IT setup or emergency laptop repair, Akshay
                Computers is your trusted partner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-dark-2/40" aria-labelledby="our-expertise">
        <div className="container-max section-padding">
          <SectionHeading
            title="Our Expertise"
            subtitle="Six areas where we deliver every day"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area, index) => (
              <Reveal key={area.title} delay={(index % 3) * 0.1}>
                <div className="glass-card flex h-full flex-col gap-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:shadow-glow-cyan">
                  <span className="flex h-12 w-12 items-center justify-center rounded-card border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan transition-transform duration-300 hover:rotate-12 hover:scale-110">
                    <Icon name={area.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">{area.title}</h3>
                  <p className="text-sm text-txt-secondary">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="why-trust-us">
        <div className="container-max section-padding">
          <SectionHeading title="Why Trust Us" subtitle="The numbers speak for themselves" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.1}>
                <StatCounter {...stat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-2/40" aria-labelledby="mission-vision">
        <div className="container-max section-padding">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <div className="glass-card flex h-full flex-col gap-3 p-8 transition-all duration-300 hover:border-neon-lime/40 hover:shadow-glow-lime">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-lime/30 bg-neon-lime/10 text-neon-lime">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-white">Our Mission</h3>
                <p className="text-txt-secondary">
                  To provide affordable, reliable, and expert IT solutions that empower
                  businesses and individuals.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card flex h-full flex-col gap-3 p-8 transition-all duration-300 hover:border-neon-purple/40 hover:shadow-glow-purple">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple">
                  <Compass className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold text-white">Our Vision</h3>
                <p className="text-txt-secondary">
                  To be the most trusted IT service provider in the region.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
