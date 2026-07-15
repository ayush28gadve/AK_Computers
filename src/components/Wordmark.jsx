import Image from 'next/image';

// Official Akshay Computers wordmark (public/wordmark.png, 661x142,
// transparent). NOTE: the "kshay" letters are silvery-white — always place
// this on a dark surface (e.g. charcoal) or it disappears into light
// backgrounds.
export default function Wordmark({ className = 'h-6 w-auto' }) {
  return (
    <Image
      src="/wordmark.png"
      alt="Akshay Computers"
      width={661}
      height={142}
      priority
      className={className}
    />
  );
}
