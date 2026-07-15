// Official Akshay Computers logo mark — gradient "A" cut by a rising swoosh.
// Inline SVG recreation of the brand logo: transparent background, crisp at
// any size, no image request. Decorative — pair it with the brand name text.
export default function Logo({ className = 'h-9 w-auto' }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ak-logo-a" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#E8442E" />
          <stop offset="0.45" stopColor="#FF6B35" />
          <stop offset="1" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="ak-logo-swoosh" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#FFC837" />
        </linearGradient>
        <mask id="ak-logo-gap">
          <rect width="120" height="100" fill="white" />
          <path
            d="M4 92 Q52 68 116 54 Q62 78 4 92 Z"
            fill="black"
            stroke="black"
            strokeWidth="7"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      {/* The two legs of the "A", with a gap carved where the swoosh passes */}
      <g mask="url(#ak-logo-gap)">
        <polygon points="54,4 72,4 26,96 8,96" fill="url(#ak-logo-a)" />
        <polygon points="62,26 76,26 112,96 98,96" fill="url(#ak-logo-a)" />
      </g>
      {/* The swoosh */}
      <path d="M4 92 Q52 68 116 54 Q62 78 4 92 Z" fill="url(#ak-logo-swoosh)" />
    </svg>
  );
}
