import Reveal from './Reveal';

// Compact hero banner used on inner pages (Services, Team, About, Contact).
export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-bg via-dark-2 to-dark-bg pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -right-20 -top-20 h-72 w-72 bg-gradient-to-br from-neon-cyan/15 to-neon-purple/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 bg-gradient-to-tr from-neon-pink/10 to-neon-blue/10 blur-3xl"
        style={{ animationDelay: '-4s' }}
      />
      <div className="container-max relative px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-gradient font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-txt-secondary">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
