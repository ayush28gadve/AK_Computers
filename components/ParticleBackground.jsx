'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['0, 212, 255', '168, 85, 247', '236, 72, 153', '14, 165, 233'];

// Lightweight canvas particle field — glowing dots drifting slowly.
// Zero dependencies; pauses entirely when prefers-reduced-motion is set.
export default function ParticleBackground({ count = 30, className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    let frame;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawn = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0,
      life: 0,
      maxLife: 400 + Math.random() * 600,
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
        ctx.fillStyle = `rgba(${p.color}, ${0.5 * p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color}, ${0.8 * p.alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      frame = requestAnimationFrame(tick);
    };

    init();
    frame = requestAnimationFrame(tick);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
