import { CheckCircle, Mail, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function TeamCard({ name, initials, role, expertise, bio }) {
  return (
    <div className="glass-card group flex h-full flex-col gap-5 p-8 transition-all duration-300 ease-bounce hover:border-orange-golden/50 hover:shadow-glow-orange-lg">
      {/* Rotating orange→gold gradient ring around the avatar */}
      <div className="relative mx-auto h-40 w-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#FF6B35,#FFD700,#FFB366,#FF6B35)] animate-spin-slow shadow-glow-peach"
        />
        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-cream transition-transform duration-300 group-hover:scale-105">
          <span className="text-gradient font-heading text-5xl font-bold">{initials}</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-heading text-2xl font-bold text-charcoal-deep transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,107,53,0.5)]">
          {name}
        </h3>
        <p className="mt-1 text-lg text-charcoal-soft">{role}</p>
      </div>
      <p className="text-center text-sm leading-relaxed text-charcoal-soft">{bio}</p>
      <ul className="space-y-2">
        {expertise.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-charcoal-deep">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-golden" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 border-t border-orange-coral/15 pt-4 text-sm">
        <a
          href={contactInfo.phoneHref}
          className="inline-flex min-h-[44px] items-center gap-2 text-orange-coral hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.6)]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> {contactInfo.phone}
        </a>
        <a
          href={contactInfo.emailHref}
          className="inline-flex min-h-[44px] items-center gap-2 text-orange-coral hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.6)]"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> {contactInfo.email}
        </a>
      </div>
    </div>
  );
}
