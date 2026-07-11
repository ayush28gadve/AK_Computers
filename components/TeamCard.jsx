import { CheckCircle, Mail, Phone } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function TeamCard({ name, initials, role, expertise, bio }) {
  return (
    <div className="glass-card group flex h-full flex-col gap-5 p-8 transition-all duration-300 ease-smooth hover:border-neon-purple/40 hover:shadow-glow-purple">
      {/* Rotating gradient ring around the avatar */}
      <div className="relative mx-auto h-40 w-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#00d4ff,#a855f7,#ec4899,#00d4ff)] animate-spin-slow"
        />
        <div className="absolute inset-1 flex items-center justify-center rounded-full bg-dark-2 transition-transform duration-300 group-hover:scale-105">
          <span className="text-gradient font-heading text-5xl font-bold">{initials}</span>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-heading text-2xl font-bold text-white transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          {name}
        </h3>
        <p className="mt-1 text-lg text-txt-secondary">{role}</p>
      </div>
      <p className="text-center text-sm leading-relaxed text-txt-secondary">{bio}</p>
      <ul className="space-y-2">
        {expertise.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-200">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-neon-lime" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-4 text-sm">
        <a
          href={contactInfo.phoneHref}
          className="inline-flex min-h-[44px] items-center gap-2 text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> {contactInfo.phone}
        </a>
        <a
          href={contactInfo.emailHref}
          className="inline-flex min-h-[44px] items-center gap-2 text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> {contactInfo.email}
        </a>
      </div>
    </div>
  );
}
