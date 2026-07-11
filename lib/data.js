export const contactInfo = {
  phone: '+91 7972082364',
  phoneHref: 'tel:+917972082364',
  whatsappHref:
    "https://wa.me/917972082364?text=Hi%20Akshay%20Computers!%20I'm%20interested%20in%20your%20services.",
  email: 'ak.gadve@gmail.com',
  emailHref: 'mailto:ak.gadve@gmail.com',
  addressLines: [
    '5/5/67/1, Anugrah,',
    'New Osmanpura, Osmanpura,',
    'Chhatrapati Sambhajinagar (Aurangabad),',
    'Maharashtra – 431005, India',
  ],
  hours: 'Mon – Sat: 10:00 AM – 8:00 PM',
  hoursClosed: 'Sunday: Closed',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Installations', icon: 'CheckCircle' },
  { value: 15, suffix: '+', label: 'Years Service', icon: 'Calendar' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: 'Phone' },
  { value: 100, suffix: '%', label: 'Customer Satisfaction', icon: 'Star' },
];

export const services = [
  {
    slug: 'cctv',
    icon: 'Cctv',
    title: 'CCTV Camera Sales, Installation & Maintenance',
    short: 'CCTV Systems',
    description:
      'Professional CCTV system installation with HD cameras, 24/7 monitoring, and regular maintenance support.',
    included: ['HD & IP camera setup', 'DVR/NVR configuration', 'Remote mobile viewing', 'Regular maintenance visits'],
    audience: 'Homes, offices, schools, shops and institutions',
  },
  {
    slug: 'intercom',
    icon: 'PhoneCall',
    title: 'Intercom Systems',
    short: 'Intercom Systems',
    description:
      'Modern intercom systems for offices, schools, and organizations. Easy communication, reliable performance.',
    included: ['Audio & video intercoms', 'Multi-unit wiring', 'Integration with security systems'],
    audience: 'Apartments, offices, schools and organizations',
  },
  {
    slug: 'laptop',
    icon: 'Laptop',
    title: 'Laptop Sales & Repair',
    short: 'Laptop Repair',
    description:
      'Buy new laptops or repair yours. Quick diagnostics, genuine parts, warranty support.',
    included: ['Screen, keyboard & battery replacement', 'OS installation & tune-ups', 'Genuine parts with warranty'],
    audience: 'Home users, students and businesses',
  },
  {
    slug: 'desktop',
    icon: 'Monitor',
    title: 'Desktop/CPU Sales & Repair',
    short: 'Desktop Repair',
    description:
      'Custom desktop builds, repairs, upgrades, and troubleshooting by certified technicians.',
    included: ['Custom PC builds', 'Component upgrades', 'Diagnostics & repairs'],
    audience: 'Offices, gamers, home users',
  },
  {
    slug: 'monitor',
    icon: 'MonitorCheck',
    title: 'Monitor Sales & Repair',
    short: 'Monitor Sales',
    description:
      'Premium quality monitors for work and gaming. Professional repair service available.',
    included: ['New monitor sales', 'Panel & backlight repair', 'Multi-monitor setup'],
    audience: 'Offices, designers, gamers',
  },
  {
    slug: 'accessories',
    icon: 'Keyboard',
    title: 'Computer Accessories',
    short: 'Accessories',
    description:
      'Wide range of keyboards, mice, cables, adapters, and other IT accessories.',
    included: ['Keyboards & mice', 'Cables & adapters', 'Storage devices & peripherals'],
    audience: 'Everyone — home to enterprise',
  },
  {
    slug: 'networking',
    icon: 'Network',
    title: 'Networking Solutions',
    short: 'Networking Setup',
    description:
      'LAN setup, Wi-Fi solutions, routers, and network maintenance for offices and homes.',
    included: ['LAN cabling & switches', 'Wi-Fi coverage planning', 'Router configuration & maintenance'],
    audience: 'Offices, homes, institutes',
  },
  {
    slug: 'office-setup',
    icon: 'Building2',
    title: 'Office IT Setup',
    short: 'Office Solutions',
    description:
      'Complete IT infrastructure setup for new offices, including computers, networks, and security systems.',
    included: ['Workstation deployment', 'Network & server setup', 'CCTV & security integration'],
    audience: 'New offices, expanding businesses',
  },
  {
    slug: 'amc',
    icon: 'FileCheck',
    title: 'Annual Maintenance Contracts (AMC)',
    short: 'System Maintenance',
    description:
      'Hassle-free annual support with regular maintenance, emergency repairs, and priority service.',
    included: ['Scheduled maintenance visits', 'Priority emergency support', 'Discounted repairs & parts'],
    audience: 'Businesses, schools, organizations',
  },
  {
    slug: 'support',
    icon: 'Wrench',
    title: 'Technical Support & Hardware Troubleshooting',
    short: 'Emergency Support',
    description:
      'Expert diagnosis and repair for any hardware issue. Fast turnaround, guaranteed solutions.',
    included: ['On-site & remote support', 'Hardware diagnostics', 'Fast turnaround repairs'],
    audience: 'Anyone facing urgent IT issues',
  },
];

// The 6 services featured on the homepage grid
export const featuredServiceSlugs = ['cctv', 'laptop', 'networking', 'amc', 'office-setup', 'support'];

export const team = [
  {
    slug: 'prasad-nilangekar',
    name: 'Prasad Nilangekar',
    initials: 'PN',
    role: 'Senior IT & Service Engineer',
    expertise: [
      'CCTV System Installation & Maintenance',
      'Network Setup & Configuration',
      'Hardware Repair & Troubleshooting',
      'Client Consultation & Design',
    ],
    bio: 'With 15+ years of experience, Prasad leads our technical team in delivering top-quality IT solutions for businesses of all sizes.',
  },
  {
    slug: 'kailash-gadve',
    name: 'Kailash Gadve',
    initials: 'KG',
    role: 'IT Support & Field Service Engineer',
    expertise: [
      'On-Site Technical Support',
      'Hardware Troubleshooting',
      'Installation & Setup',
      'Customer Service Excellence',
    ],
    bio: 'Kailash brings dedicated expertise in customer service and hands-on technical support, ensuring every client receives prompt and professional assistance.',
  },
];

export const whyChooseUs = [
  {
    icon: 'Award',
    title: 'Expert Team',
    description: 'Certified professionals with 15+ years experience',
  },
  {
    icon: 'Zap',
    title: 'Quick Response',
    description: 'Same-day service for urgent issues',
  },
  {
    icon: 'IndianRupee',
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising quality',
  },
  {
    icon: 'Headset',
    title: '24/7 Support',
    description: 'Available when you need us most',
  },
];

export const processSteps = [
  { icon: 'Phone', title: 'Contact Us', description: 'Reach us via WhatsApp, call, or the contact form.' },
  { icon: 'CheckCircle', title: 'Free Consultation', description: 'We understand your needs and suggest the right solution.' },
  { icon: 'Wrench', title: 'Fast Installation/Repair', description: 'Our engineers get the job done quickly and cleanly.' },
  { icon: 'Shield', title: 'Ongoing Support', description: 'We stay available for maintenance and emergencies.' },
];

export const testimonials = [
  {
    quote:
      'Akshay Computers installed our CCTV system flawlessly. Professional team, great service!',
    author: 'School Principal',
    org: 'CSN School',
  },
  {
    quote: 'Fast and reliable repair service. They fixed my laptop within 24 hours!',
    author: 'Office Manager',
    org: 'Tech Solutions Inc.',
  },
  {
    quote: 'Best networking setup we could ask for. Highly recommended!',
    author: 'Business Owner',
    org: 'Local Retail Store',
  },
];

export const faqs = [
  {
    question: 'How quickly can you respond to a repair request?',
    answer: 'Same-day or next-day service depending on urgency.',
  },
  {
    question: 'Do you provide warranty on repairs?',
    answer: 'Yes, all repairs include a 30-day warranty.',
  },
  {
    question: 'What are your service charges?',
    answer: 'Charges depend on the service. Contact us for a free quote.',
  },
  {
    question: 'Do you offer AMC contracts?',
    answer: 'Yes, customized AMC packages are available for businesses.',
  },
  {
    question: 'Can you install systems at odd hours?',
    answer: 'Special requests are available with prior notice.',
  },
  {
    question: 'Do you work on weekends?',
    answer: 'Call us to schedule weekend appointments.',
  },
  {
    question: 'What brands do you support?',
    answer: 'We support all major brands (Dell, HP, Lenovo, ASUS, etc.).',
  },
  {
    question: 'Do you provide on-site support?',
    answer: 'Yes, on-site support is available for businesses.',
  },
  {
    question: 'How is data security handled during repair?',
    answer: 'We ensure confidentiality and can factory reset devices if requested.',
  },
  {
    question: 'Can you help with network issues remotely?',
    answer: 'Yes, remote support is available for many issues.',
  },
];

export const expertiseAreas = [
  { icon: 'Cctv', title: 'CCTV & Security Systems', description: 'End-to-end surveillance solutions with professional installation.' },
  { icon: 'Wrench', title: 'Computer Repair & Maintenance', description: 'Fast, reliable repairs for laptops, desktops and monitors.' },
  { icon: 'Network', title: 'Networking Solutions', description: 'LAN, Wi-Fi and router setups that just work.' },
  { icon: 'Building2', title: 'Office IT Infrastructure', description: 'Complete IT setup for new and growing offices.' },
  { icon: 'Headset', title: 'Technical Support Services', description: 'On-site and remote support when you need it.' },
  { icon: 'HardDrive', title: 'Hardware Sales & Upgrades', description: 'Genuine parts, accessories and upgrade advice.' },
];

export const teamValues = [
  { icon: 'Award', title: 'Expert Solutions', description: 'Trusted expertise in every project' },
  { icon: 'Zap', title: 'Fast Response', description: 'Quick turnaround on all requests' },
  { icon: 'HeartHandshake', title: 'Customer First', description: 'Your satisfaction is our priority' },
  { icon: 'Clock', title: '24/7 Availability', description: 'Here when you need us' },
];

export const serviceFormOptions = [
  'CCTV Systems',
  'Laptop Repair',
  'Networking',
  'Office Setup',
  'AMC',
  'Other',
  'General Inquiry',
];
