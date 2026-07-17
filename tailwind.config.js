/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAF8F6',
        'off-white': '#FAFAFA',
        cloud: '#F5F5F5',
        maroon: '#8B1E1E',
        'maroon-dark': '#6B1414',
        'red-dark': '#A52A2A',
        crimson: '#C0392B',
        blush: '#F0DEDA',
        'rose-light': '#E8B4AD',
        'gold-warm': '#D4A574',
        'charcoal-deep': '#2C2C2C',
        'charcoal-soft': '#4A4A4A',
        'gray-muted': '#7A7A7A',
        'warm-grey': '#E5E5E5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        'card-sm': '8px',
        card: '12px',
        'card-lg': '16px',
        'card-xl': '24px',
      },
      boxShadow: {
        'soft-brand': '0 2px 8px rgba(139,30,30,0.06)',
        'medium-brand': '0 4px 16px rgba(139,30,30,0.10)',
        'premium-shadow': '0 12px 40px rgba(139,30,30,0.12)',
        'glow-maroon': '0 6px 20px rgba(139,30,30,0.18)',
        'glow-maroon-lg': '0 10px 32px rgba(139,30,30,0.16)',
        'glow-crimson': '0 6px 18px rgba(192,57,43,0.16)',
        'glow-soft': '0 4px 14px rgba(232,180,173,0.35)',
      },
      backgroundImage: {
        'gradient-hero-mesh':
          'radial-gradient(at 20% 50%, #FAF8F6 0%, #F3E4E0 50%, #FAF8F6 100%)',
        'gradient-maroon': 'linear-gradient(90deg, #8B1E1E, #C0392B)',
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 4px 14px rgba(139,30,30,0.18)' },
          '50%': { boxShadow: '0 6px 22px rgba(139,30,30,0.32)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        lightSweep: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        blob: 'blobMorph 10s ease-in-out infinite',
        'light-sweep': 'lightSweep 24s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'marquee-left': 'marquee 55s linear infinite reverse',
        'marquee-right': 'marquee 55s linear infinite',
      },
    },
  },
  plugins: [],
};
