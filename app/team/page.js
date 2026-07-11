import CTASection from '@/components/CTASection';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import TeamCard from '@/components/TeamCard';
import { team, teamValues } from '@/lib/data';

export const metadata = {
  title: 'Meet Our Expert Team',
  description:
    'Meet Prasad and Kailash, certified IT professionals with 15+ years of experience in CCTV, repairs, and IT solutions.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Expert Team"
        subtitle="Dedicated professionals with years of IT expertise — your trusted partners for all IT solutions"
      />

      <section aria-labelledby="team-members">
        <div className="container-max section-padding">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={member.slug} delay={index * 0.1}>
                <TeamCard {...member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-2/40" aria-labelledby="team-values">
        <div className="container-max section-padding">
          <SectionHeading title="Our Commitments" subtitle="The values behind every job we do" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.1}>
                <div className="glass-card flex h-full flex-col items-center gap-3 p-6 text-center transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-glow-cyan">
                  <span className="animate-float flex h-14 w-14 items-center justify-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
                    <Icon name={value.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">{value.title}</h3>
                  <p className="text-sm text-txt-secondary">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Connect with the Team"
        subtitle="Have questions? Reach out to us directly"
      />
    </>
  );
}
