import Image from 'next/image';
import { CheckCircle, Mail, Phone } from 'lucide-react';

export default function TeamCard({
  name,
  initials,
  role,
  expertise,
  bio,
  phone,
  phoneHref,
  email,
  emailHref,
  image,
}) {
  return (
    <div className="glass-card group flex h-full flex-col gap-5 p-8 transition-all duration-300 ease-bounce hover:border-red-dark/50 hover:shadow-glow-maroon-lg">
      {/* Rotating orange→gold gradient ring around the avatar */}
      <div className="relative mx-auto h-40 w-40">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#8B1E1E,#C0392B,#E8B4AD,#8B1E1E)] animate-spin-slow shadow-glow-soft"
        />
        <div className="absolute inset-1 flex items-center justify-center overflow-hidden rounded-full bg-warm-white transition-transform duration-300 group-hover:scale-105">
          {image ? (
            <Image
              src={image}
              alt={`Photo of ${name}`}
              fill
              sizes="160px"
              className="rounded-full object-cover"
              style={{ objectPosition: '50% 15%' }}
            />
          ) : (
            <span className="text-gradient font-heading text-5xl font-bold">{initials}</span>
          )}
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-heading text-2xl font-bold text-charcoal-deep transition-all duration-300 group-hover:drop-shadow-[0_2px_4px_rgba(139,30,30,0.3)]">
          {name}
        </h3>
        <p className="mt-1 text-lg text-charcoal-soft">{role}</p>
      </div>
      <p className="text-center text-sm leading-relaxed text-charcoal-soft">{bio}</p>
      <ul className="space-y-2">
        {expertise.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-charcoal-deep">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-dark" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-col gap-2 border-t border-maroon/15 pt-4 text-sm">
        {phone && (
          <a
            href={phoneHref}
            className="inline-flex min-h-[44px] items-center gap-2 text-maroon hover:drop-shadow-[0_1px_2px_rgba(139,30,30,0.35)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {phone}
          </a>
        )}
        {email && (
          <a
            href={emailHref}
            className="inline-flex min-h-[44px] items-center gap-2 text-maroon hover:drop-shadow-[0_1px_2px_rgba(139,30,30,0.35)]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" /> {email}
          </a>
        )}
      </div>
    </div>
  );
}
