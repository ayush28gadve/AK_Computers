/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e27',
        'dark-2': '#1a1f3a',
        'dark-3': '#111827',
        'neon-cyan': '#00d4ff',
        'neon-purple': '#a855f7',
        'neon-lime': '#84cc16',
        'neon-pink': '#ec4899',
        'neon-blue': '#0ea5e9',
        'txt-secondary': '#a0aec0',
        'txt-muted': '#64748b',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space)', 'var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'card-sm': '8px',
        card: '12px',
        'card-lg': '16px',
        'card-xl': '24px',
      },
      boxShadow: {
        'card-sm': '0 4px 6px rgba(0,0,0,0.1)',
        card: '0 8px 16px rgba(0,0,0,0.2)',
        'card-lg': '0 20px 40px rgba(0,0,0,0.4)',
        glass: '0 8px 32px rgba(0,212,255,0.1)',
        'glow-cyan': '0 0 20px rgba(0,212,255,0.3)',
        'glow-cyan-lg': '0 0 35px rgba(0,212,255,0.5)',
        'glow-purple': '0 0 20px rgba(168,85,247,0.3)',
        'glow-lime': '0 0 20px rgba(132,204,22,0.35)',
        'glow-pink': '0 0 15px rgba(236,72,153,0.25)',
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0,212,255,0.6)' },
        },
        glowPulseLime: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(132,204,22,0.35)' },
          '50%': { boxShadow: '0 0 30px rgba(132,204,22,0.65)' },
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
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'glow-pulse-lime': 'glowPulseLime 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        blob: 'blobMorph 8s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};
