'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import Icon from './Icon';

function useCountUp(target, start, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out so the count decelerates near the target
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}

export default function StatCounter({ value, suffix = '', label, icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const count = useCountUp(value, inView && !reduceMotion);
  const display = reduceMotion ? value : count;
  const done = display === value;

  return (
    <div
      ref={ref}
      className="glass-card flex flex-col items-center gap-2 p-6 text-center transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-glow-cyan"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan shadow-glow-cyan transition-transform duration-300 hover:rotate-12 hover:scale-110">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span
        className={`font-heading text-4xl font-bold text-white transition-all duration-500 ${
          done ? 'drop-shadow-[0_0_12px_rgba(0,212,255,0.7)]' : ''
        }`}
      >
        {display}
        {suffix}
      </span>
      <span className="text-txt-secondary">{label}</span>
    </div>
  );
}
