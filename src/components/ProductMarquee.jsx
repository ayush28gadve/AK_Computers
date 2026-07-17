import Image from 'next/image';
import Icon from './Icon';
import SectionHeading from './SectionHeading';

function ProductCard({ product, hidden }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="glass-card group/card flex w-48 shrink-0 flex-col items-center gap-3 p-5 text-center transition-all duration-300 ease-smooth hover:-translate-y-2 hover:border-maroon/40 hover:shadow-glow-maroon sm:w-56"
    >
      <div className="relative flex h-24 w-full items-center justify-center sm:h-28">
        {product.hasImage ? (
          <Image
            src={`/products/${product.image}`}
            alt=""
            fill
            loading="lazy"
            sizes="220px"
            className="object-contain drop-shadow-[0_8px_12px_rgba(44,44,44,0.12)] transition-transform duration-300 group-hover/card:scale-105"
          />
        ) : (
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-maroon/25 bg-maroon/10 text-maroon transition-transform duration-300 group-hover/card:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]">
            <Icon name={product.icon} className="h-8 w-8" />
          </span>
        )}
      </div>
      <div>
        <p className="font-heading text-base font-bold leading-snug text-charcoal-deep">
          {product.name}
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-maroon">
          {product.category}
        </p>
      </div>
    </div>
  );
}

// One infinite row. Content is duplicated so the CSS loop (translateX 0→-50%)
// restarts invisibly. Hover or touch pauses the row.
function MarqueeRow({ products, reverse = false }) {
  const doubled = [...products, ...products];
  return (
    <div className="group relative overflow-hidden py-3">
      <div
        className={`flex w-max gap-5 will-change-transform ${
          reverse ? 'animate-marquee-right' : 'animate-marquee-left'
        } max-sm:[animation-duration:70s] group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]`}
      >
        {doubled.map((product, index) => (
          <ProductCard
            key={`${product.name}-${index}`}
            product={product}
            hidden={index >= products.length}
          />
        ))}
      </div>
    </div>
  );
}

// "Products We Deal In" — dual-direction infinite product showcase.
export default function ProductMarquee({ products }) {
  const mid = Math.ceil(products.length / 2);
  const rowOne = products.slice(0, mid);
  const rowTwo = products.slice(mid);

  return (
    <section
      aria-labelledby="products-we-deal-in"
      className="relative overflow-hidden bg-gradient-to-b from-warm-white via-blush/15 to-warm-white"
    >
      <div className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Products We Deal In"
            subtitle="Complete IT Hardware, Security & Networking Solutions for Homes, Offices, Schools, Businesses and Enterprises."
          />
        </div>

        <div className="relative mx-auto max-w-[1400px]">
          {/* Edge fades so cards emerge from / dissolve into the background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-warm-white to-transparent sm:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-warm-white to-transparent sm:w-28"
          />

          <MarqueeRow products={rowOne} reverse />
          <MarqueeRow products={rowTwo} />
        </div>
      </div>
    </section>
  );
}
