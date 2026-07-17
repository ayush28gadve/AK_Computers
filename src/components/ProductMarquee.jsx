'use client';

import { useEffect, useRef } from 'react';
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
            draggable={false}
            className="select-none object-contain drop-shadow-[0_8px_12px_rgba(44,44,44,0.12)] transition-transform duration-300 group-hover/card:scale-105"
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

// One infinite row, driven by a physics loop instead of a CSS animation:
//  - auto-scrolls at `speed` px/s (direction per row)
//  - hover (mouse) eases it to a stop; leaving eases it back
//  - drag/swipe moves it directly, with momentum after release
//  - after an interaction, auto-scroll resumes smoothly ~2.5s later
// Content is duplicated so the offset wraps invisibly at half track width.
function MarqueeRow({ products, reverse = false }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const doubled = [...products, ...products];

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    const baseSpeed = (isMobile ? 42 : 48) * (reverse ? -1 : 1); // px/s

    let half = track.scrollWidth / 2;
    const ro = new ResizeObserver(() => {
      half = track.scrollWidth / 2;
    });
    ro.observe(track);

    let offset = 0;
    let vel = reduceMotion ? 0 : baseSpeed;
    let hovered = false;
    let dragging = false;
    let waiting = false;
    let resumeTimer = null;

    // drag state
    let dragPointerId = null;
    let lastX = 0;
    let lastT = 0;
    let dragVel = 0;

    const scheduleResume = (delay) => {
      clearTimeout(resumeTimer);
      waiting = true;
      resumeTimer = setTimeout(() => {
        waiting = false;
      }, delay);
    };

    const onPointerDown = (e) => {
      dragging = true;
      dragPointerId = e.pointerId;
      lastX = e.clientX;
      lastT = performance.now();
      dragVel = 0;
      clearTimeout(resumeTimer);
      waiting = true;
      viewport.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!dragging || e.pointerId !== dragPointerId) return;
      const now = performance.now();
      const dx = e.clientX - lastX;
      const dt = Math.max(now - lastT, 1);
      offset -= dx;
      // smoothed release velocity (offset moves opposite to pointer)
      dragVel = 0.8 * dragVel + 0.2 * (-dx / dt) * 1000;
      lastX = e.clientX;
      lastT = now;
    };

    const endDrag = (e) => {
      if (!dragging || (e && e.pointerId !== dragPointerId)) return;
      dragging = false;
      vel = Math.max(-1600, Math.min(1600, dragVel)); // momentum, clamped
      scheduleResume(2500);
    };

    const onPointerEnter = (e) => {
      if (e.pointerType === 'mouse') hovered = true;
    };
    const onPointerLeave = (e) => {
      if (e.pointerType === 'mouse') {
        hovered = false;
        if (!dragging) scheduleResume(1000);
      }
    };

    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('pointerenter', onPointerEnter);
    viewport.addEventListener('pointerleave', onPointerLeave);

    let frame;
    let prev = performance.now();
    const tick = (now) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;

      if (!dragging) {
        const autoTarget = reduceMotion || hovered || waiting ? 0 : baseSpeed;
        // frame-rate independent easing toward the target speed
        vel += (autoTarget - vel) * (1 - Math.exp(-dt * 3.5));
        offset += vel * dt;
      }

      if (half > 0) {
        offset = ((offset % half) + half) % half;
      }
      track.style.transform = `translate3d(${-offset}px,0,0)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resumeTimer);
      ro.disconnect();
      viewport.removeEventListener('pointerdown', onPointerDown);
      viewport.removeEventListener('pointermove', onPointerMove);
      viewport.removeEventListener('pointerup', endDrag);
      viewport.removeEventListener('pointercancel', endDrag);
      viewport.removeEventListener('pointerenter', onPointerEnter);
      viewport.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [reverse]);

  return (
    <div
      ref={viewportRef}
      className="relative cursor-grab touch-pan-y select-none overflow-hidden py-3 active:cursor-grabbing"
    >
      <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
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
