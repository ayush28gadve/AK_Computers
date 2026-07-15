import Image from 'next/image';

// Official Akshay Computers logo (public/logo.png, 624x400, transparent).
// Rendered small — size is controlled by the height class passed in.
export default function Logo({ className = 'h-8 w-auto' }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={624}
      height={400}
      priority
      className={className}
    />
  );
}
