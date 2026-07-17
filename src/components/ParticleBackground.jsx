'use client';

import { useEffect, useRef } from 'react';

// Brand palette: maroon, crimson, soft rose, warm gold
const DEFAULT_COLORS = ['139, 30, 30', '192, 57, 43', '232, 180, 173', '212, 165, 116'];

// Lightweight canvas particle field — soft glowing dots that drift, spawn and
// fade, and gently gravitate toward the cursor. Zero dependencies; disabled
// entirely when prefers-reduced-motion is set.
export default function ParticleBackground({ count = 40, colors = DEFAULT_COLORS, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let frame;
    let particles = [];
    const mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const onMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const spawn = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 2 + Math.random() * 4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0,
      life: 0,
      maxLife: 500 + Math.random() * 700,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: count }, () => {
        const p = spawn();
        p.life = Math.random() * p.maxLife; // stagger lifecycles
        return p;
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // gentle attraction toward the cursor within 150px
        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150 && dist > 1) {
            p.x += (dx / dist) * 0.35;
            p.y += (dy / dist) * 0.35;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        // fade in for the first 10%, fade out for the last 20% of life
        const t = p.life / p.maxLife;
        p.alpha = t < 0.1 ? t / 0.1 : t > 0.8 ? (1 - t) / 0.2 : 1;

        if (p.life >= p.maxLife || p.x < -10 || p.x > canvas.width + 10 || p.y < -10 || p.y > canvas.height + 10) {
          particles[i] = spawn();
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${0.55 * p.alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${p.color}, ${0.7 * p.alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      frame = requestAnimationFrame(tick);
    };

    init();
    frame = requestAnimationFrame(tick);
    window.addEventListener('resize', resize);
    canvas.parentElement?.addEventListener('mousemove', onMouseMove);
    canvas.parentElement?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', onMouseMove);
      canvas.parentElement?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [count, colors]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
