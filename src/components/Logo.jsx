// Official Akshay Computers mark — maroon "A" cut by a rising swoosh.
// Inline SVG (crisp at any size, no image request). Master files for print
// and external use live in public/brand/.
// variant: 'gradient' (light backgrounds) | 'white' (dark backgrounds)
export default function Logo({ className = 'h-8 w-auto', variant = 'gradient' }) {
  const gradient = variant === 'gradient';
  const legFill = gradient ? 'url(#akLogoA)' : '#FFFFFF';
  const swooshFill = gradient ? 'url(#akLogoS)' : '#FFFFFF';
  const maskId = gradient ? 'akLogoGap' : 'akLogoGapW';

  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true" focusable="false">
      <defs>
        {gradient && (
          <>
            <linearGradient id="akLogoA" x1="60" y1="460" x2="460" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#8B1E1E" />
              <stop offset="0.55" stopColor="#A52A2A" />
              <stop offset="1" stopColor="#C0392B" />
            </linearGradient>
            <linearGradient id="akLogoS" x1="34" y1="0" x2="487" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#A52A2A" />
              <stop offset="1" stopColor="#C0392B" />
            </linearGradient>
          </>
        )}
        <mask id={maskId}>
          <rect width="512" height="512" fill="white" />
          <path
            d="M34 438 Q235 390 487 240 Q275 442 34 438 Z"
            fill="black"
            stroke="black"
            strokeWidth="22"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        <polygon points="238,80 294,80 162,452 106,452" fill={legFill} />
        <polygon points="274,162 330,138 436,452 380,452" fill={legFill} />
      </g>
      <path d="M34 438 Q235 390 487 240 Q275 442 34 438 Z" fill={swooshFill} />
    </svg>
  );
}
