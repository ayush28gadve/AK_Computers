/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFEF7',
        'off-white': '#FAFAFA',
        cloud: '#F5F5F5',
        'orange-coral': '#FF6B35',
        'orange-peach': '#FFB366',
        'orange-golden': '#FFA500',
        'orange-burnt': '#E85D3F',
        'orange-apricot': '#FFCC99',
        'gold-warm': '#D4A574',
        'gold-bright': '#FFD700',
        'tan-subtle': '#E8D5C4',
        'charcoal-deep': '#2B2B2B',
        'charcoal-soft': '#4A4A4A',
        'gray-muted': '#7A7A7A',
        'gemini-cyan': '#00D4FF',
        'gemini-purple': '#A855F7',
        'gemini-pink': '#F5A98D',
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
        'soft-orange': '0 2px 8px rgba(255,107,53,0.08)',
        'medium-orange': '0 4px 16px rgba(255,107,53,0.15)',
        'premium-shadow': '0 12px 40px rgba(255,107,53,0.2)',
        'glow-orange': '0 0 20px rgba(255,107,53,0.4)',
        'glow-orange-lg': '0 0 40px rgba(255,107,53,0.25)',
        'glow-gold': '0 0 18px rgba(212,165,116,0.4)',
        'glow-peach': '0 0 15px rgba(255,179,102,0.3)',
      },
      backgroundImage: {
        'gradient-gemini':
          'linear-gradient(135deg, #FF6B35, #FFD700, #00D4FF, #A855F7, #F5A98D)',
        'gradient-hero-mesh':
          'radial-gradient(at 20% 50%, #FFFEF7 0%, #FFE5CC 50%, #FFFEF7 100%)',
        'gradient-orange-gold': 'linear-gradient(90deg, #FF6B35, #FFD700)',
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
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255,107,53,0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(255,107,53,0.8)' },
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
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        blob: 'blobMorph 8s ease-in-out infinite',
        'light-sweep': 'lightSweep 20s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};
