import Reveal from './Reveal';

// Compact hero banner used on inner pages (Services, Team, About, Contact).
export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden="true"
        className="animate-gradient-shift absolute inset-0 bg-gradient-hero-mesh"
        style={{ backgroundSize: '200% 200%' }}
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -right-20 -top-20 h-72 w-72 bg-gradient-to-br from-orange-coral/20 to-gold-bright/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 bg-gradient-to-tr from-orange-peach/20 to-orange-apricot/15 blur-3xl"
        style={{ animationDelay: '-4s' }}
      />
      <div className="container-max relative px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-gradient font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-soft">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
