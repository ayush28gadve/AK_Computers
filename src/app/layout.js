import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://akshaycomputers.in'),
  title: {
    default: 'Akshay Computers - CCTV, Laptop Repair & IT Solutions | Aurangabad',
    template: '%s | Akshay Computers',
  },
  description:
    'Premium IT solutions including CCTV systems, laptop repair, networking, and office setup in Chhatrapati Sambhajinagar. 24/7 support available.',
  openGraph: {
    title: 'Akshay Computers - Complete IT Solutions',
    description:
      'Expert CCTV, repairs, networking & security solutions. Call +91 7972082364',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Akshay Computers',
  },
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Akshay Computers',
  description:
    'CCTV installation, laptop and desktop repair, networking solutions, office IT setup, AMC contracts and technical support.',
  telephone: '+917972082364',
  email: 'akggadve@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '5/5/67/1, Anugrah, New Osmanpura, Osmanpura',
    addressLocality: 'Chhatrapati Sambhajinagar',
    addressRegion: 'Maharashtra',
    postalCode: '431005',
    addressCountry: 'IN',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '20:00',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
