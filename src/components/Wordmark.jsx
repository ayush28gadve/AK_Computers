import Image from 'next/image';

// Official Akshay Computers wordmark (661x142, transparent), two variants:
// - /wordmark.png       white "kshay" — for DARK surfaces (footer)
// - /wordmark-dark.png  charcoal "kshay" — for LIGHT surfaces (header)
// Pass onLight when placing it on a light/warm-white background.
export default function Wordmark({ className = 'h-6 w-auto', onLight = false }) {
  return (
    <Image
      src={onLight ? '/wordmark-dark.png' : '/wordmark.png'}
      alt="Akshay Computers"
      width={661}
      height={142}
      priority
      className={className}
    />
  );
}
