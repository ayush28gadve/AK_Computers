import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon';

export default function ServiceCard({ icon, title, description, href = '/services' }) {
  return (
    <div className="glass-card group relative flex h-full flex-col gap-4 overflow-hidden p-6 transition-all duration-300 ease-bounce hover:-translate-y-2 hover:border-maroon/50 hover:shadow-glow-maroon-lg">
      {/* corner accent line */}
      <span
        aria-hidden="true"
        className="absolute right-0 top-0 h-px w-16 bg-gradient-to-l from-maroon to-transparent opacity-60 transition-all duration-300 group-hover:w-24 group-hover:opacity-100"
      />
      {/* shimmer sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100"
      />
      <span className="flex h-12 w-12 items-center justify-center rounded-card border border-maroon/30 bg-maroon/10 text-maroon transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-glow-maroon">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="font-heading text-lg font-bold text-charcoal-deep transition-colors duration-300 group-hover:text-maroon">
        {title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-charcoal-soft">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-maroon transition-all duration-300 hover:gap-2 hover:drop-shadow-[0_1px_2px_rgba(139,30,30,0.35)]"
      >
        Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
