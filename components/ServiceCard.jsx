import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';

export default function ServiceCard({ icon, title, description, href = '/services' }) {
  return (
    <div className="glass-card group relative flex h-full flex-col gap-4 overflow-hidden p-6 transition-all duration-300 ease-smooth hover:-translate-y-2 hover:border-neon-cyan/40 hover:shadow-glow-cyan">
      {/* corner accent line */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-neon-cyan to-transparent opacity-60 transition-all duration-300 group-hover:w-24 group-hover:opacity-100"
      />
      <span className="flex h-12 w-12 items-center justify-center rounded-card border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-glow-cyan">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="font-heading text-lg font-bold text-white transition-colors duration-300 group-hover:text-neon-cyan">
        {title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-txt-secondary">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-neon-cyan transition-all duration-300 hover:gap-2 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
      >
        Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
