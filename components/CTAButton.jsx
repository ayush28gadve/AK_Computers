import Link from 'next/link';

const variants = {
  whatsapp:
    'bg-gradient-to-r from-orange-coral to-orange-golden text-white shadow-glow-orange hover:shadow-[0_0_30px_rgba(255,107,53,0.7)] hover:-translate-y-1',
  primary:
    'bg-gradient-to-r from-orange-golden to-gold-bright text-charcoal-deep shadow-glow-gold hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:-translate-y-1',
  secondary:
    'border border-orange-coral/40 bg-white/80 text-charcoal-deep backdrop-blur-md hover:border-orange-coral hover:text-orange-coral hover:shadow-glow-orange',
  outline:
    'border border-orange-coral/60 bg-transparent text-orange-coral hover:bg-orange-coral/10 hover:shadow-glow-orange',
};

export default function CTAButton({
  href,
  variant = 'primary',
  children,
  external = false,
  className = '',
}) {
  const classes = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-card px-6 py-3 text-base font-bold transition-all duration-300 ease-bounce active:scale-95 ${variants[variant]} ${className}`;

  if (external || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
