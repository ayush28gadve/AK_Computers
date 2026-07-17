import Link from 'next/link';

const variants = {
  whatsapp:
    'bg-gradient-to-r from-maroon to-red-dark text-white shadow-medium-brand hover:from-maroon-dark hover:to-maroon hover:shadow-premium-shadow hover:-translate-y-0.5',
  primary:
    'bg-maroon text-white shadow-medium-brand hover:bg-maroon-dark hover:shadow-premium-shadow hover:-translate-y-0.5',
  secondary:
    'border border-maroon bg-white text-maroon hover:bg-maroon hover:text-white shadow-soft-brand',
  outline:
    'border border-maroon/60 bg-transparent text-maroon hover:bg-maroon/5 hover:border-maroon',
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
