import Link from 'next/link';

const variants = {
  whatsapp:
    'bg-gradient-to-r from-neon-lime to-emerald-400 text-dark-bg shadow-glow-lime hover:shadow-[0_0_35px_rgba(132,204,22,0.6)] hover:-translate-y-0.5',
  primary:
    'bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg shadow-glow-cyan hover:shadow-glow-cyan-lg hover:-translate-y-0.5',
  secondary:
    'border border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-neon-cyan/60 hover:bg-white/10 hover:shadow-glow-cyan',
  outline:
    'border border-neon-cyan/50 bg-transparent text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-cyan',
};

export default function CTAButton({
  href,
  variant = 'primary',
  children,
  external = false,
  className = '',
}) {
  const classes = `inline-flex min-h-[44px] items-center justify-center gap-2 rounded-card px-6 py-3 text-base font-bold transition-all duration-300 ease-smooth active:scale-95 ${variants[variant]} ${className}`;

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
