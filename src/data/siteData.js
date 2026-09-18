// ---------------------------------------------------------------------------
// R&N Detailing LLC — Central site content & configuration
// Edit the values in this file to update text across the entire website.
// Anything wrapped in [BRACKETS] is a placeholder — replace with real info.
// ---------------------------------------------------------------------------

export const business = {
  name: 'R&N Detailing LLC',
  shortName: 'R&N Detailing',
  tagline: 'Professional Mobile Auto Detailing',
  city: 'Cincinnati',
  state: 'OH',
  serviceRadius: '50 miles',

  // --- REPLACE THESE PLACEHOLDERS WITH YOUR REAL BUSINESS INFO ---
  phone: '(513) 808-0883',
  phoneHref: 'tel:+15138080883',
  email: '[EMAIL ADDRESS]',
  emailHref: 'mailto:info@rndetailingllc.com', // update with real email
  address: '[BUSINESS ADDRESS] — Cincinnati, OH', // or "Mobile service — no storefront" if applicable
  facebookUrl: '#', // e.g. https://facebook.com/rndetailingllc
  instagramUrl: '#', // e.g. https://instagram.com/rndetailingllc
  tiktokUrl: '#', // e.g. https://tiktok.com/@rndetailingllc
  googleBusinessUrl: '#', // your Google Business Profile link
  // -----------------------------------------------------------------
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Ceramic Coating', href: '#ceramic-coating' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const trustPoints = [
  { icon: 'Truck', label: 'Mobile Service' },
  { icon: 'Wrench', label: 'Professional Equipment' },
  { icon: 'CalendarCheck', label: 'Convenient Scheduling' },
  { icon: 'MapPin', label: 'Cincinnati & Surrounding Areas' },
];

export const basicDetailPricing = [
  { type: 'Sedan', price: 225 },
  { type: 'SUV', price: 260 },
  { type: 'Truck', price: 275 },
];

export const addOns = [
  { name: 'Shampoo', price: '$30–$60' },
  { name: 'Wax', price: '$30–$60' },
  { name: 'Polish', price: '$30–$60' },
  { name: 'Pet Hair Removal', price: '$75' },
  { name: 'Ceramic Coating', price: 'Starting at $750' },
];

export const services = [
  {
    icon: 'Sparkles',
    title: 'Basic Detail',
    description:
      'A thorough refresh for daily drivers — full interior vacuum & wipe-down, window cleaning, and a hand exterior wash to bring back that just-cleaned feel.',
    priceLabel: 'Starting at $225',
  },
  {
    icon: 'Droplets',
    title: 'Interior Deep Clean',
    description:
      'Deep vacuuming, steam cleaning, shampooing, and conditioning for carpets, seats, and door panels — perfect for removing stains, odors, and built-up grime.',
    priceLabel: 'Custom Quote',
  },
  {
    icon: 'Car',
    title: 'Exterior Detail',
    description:
      'Hand wash, clay bar treatment, wheel & tire cleaning, and a protective wax or polish to restore shine and protect your paint from the elements.',
    priceLabel: 'Custom Quote',
  },
  {
    icon: 'PawPrint',
    title: 'Pet Hair Removal',
    description:
      'Specialized tools and techniques to lift embedded pet hair from carpets and upholstery that a standard vacuum simply can’t reach.',
    priceLabel: '$75',
  },
  {
    icon: 'ShieldCheck',
    title: 'Ceramic Coating',
    description:
      'A long-lasting, hydrophobic ceramic layer that protects your paint, enhances gloss, and makes future washes faster and easier.',
    priceLabel: 'Starting at $750',
  },
  {
    icon: 'Layers',
    title: 'Wax & Polish',
    description:
      'Machine polish to correct light swirls and imperfections, finished with a durable wax layer for a deep, reflective shine.',
    priceLabel: '$30–$60',
  },
];

export const packages = [
  {
    name: 'Basic',
    tagline: 'A quality refresh',
    description:
      'Ideal for customers who want their vehicle looking clean and fresh without the full deep-clean treatment.',
    features: [
      'Full interior vacuum',
      'Wipe-down of dash, console & door panels',
      'Window & glass cleaning (interior & exterior)',
      'Hand exterior wash & dry',
      'Tire shine & wheel wipe-down',
    ],
    highlighted: false,
    ctaLabel: 'Choose Basic',
  },
  {
    name: 'Premium',
    tagline: 'Most popular choice',
    description:
      'For customers who want a deeper clean and more complete detailing service, inside and out.',
    features: [
      'Everything in the Basic package',
      'Interior shampoo (carpets & seats)',
      'Leather cleaning & conditioning (if applicable)',
      'Clay bar exterior treatment',
      'Hand wax for added shine & protection',
      'Door jambs & trim detailing',
    ],
    highlighted: true,
    ctaLabel: 'Choose Premium',
  },
  {
    name: 'Supreme',
    tagline: 'The ultimate detail',
    description:
      'For customers who want the ultimate detail with maximum attention to every inch of their vehicle.',
    features: [
      'Everything in the Premium package',
      'Machine polish for paint correction',
      'Premium wax or sealant application',
      'Deep steam cleaning of interior surfaces',
      'Engine bay wipe-down (on request)',
      'Odor elimination treatment',
      'Final quality-control inspection',
    ],
    highlighted: false,
    ctaLabel: 'Choose Supreme',
  },
];

export const ceramicBenefits = [
  {
    icon: 'Droplets',
    title: 'Hydrophobic Protection',
    description: 'Water and contaminants bead up and slide right off instead of sitting on your paint.',
  },
  {
    icon: 'Sparkles',
    title: 'Enhanced Gloss',
    description: 'A deep, glass-like shine that makes your paint color pop and stay looking freshly detailed.',
  },
  {
    icon: 'Wind',
    title: 'Easier Washing',
    description: 'Dirt and grime release more easily, cutting down on wash time and effort.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Environmental Defense',
    description: 'Added protection against UV rays, bird droppings, tree sap, and road grime.',
  },
  {
    icon: 'Clock',
    title: 'Long-Lasting Results',
    description: 'Durable protection that outlasts traditional wax by months, not weeks.',
  },
];

export const whyChooseUs = [
  {
    icon: 'Truck',
    title: 'Mobile Convenience',
    description: 'We come to your home, office, or anywhere in the Cincinnati area — no need to wait at a shop.',
  },
  {
    icon: 'Wrench',
    title: 'Professional Equipment',
    description: 'We use commercial-grade tools and premium products for a superior, long-lasting result.',
  },
  {
    icon: 'Eye',
    title: 'Attention to Detail',
    description: 'Every panel, seam, and surface is treated with the same level of care and precision.',
  },
  {
    icon: 'CalendarCheck',
    title: 'Convenient Scheduling',
    description: 'Flexible appointment times that work around your schedule, including evenings and weekends.',
  },
  {
    icon: 'UserCheck',
    title: 'Personalized Service',
    description: 'Every detail is tailored to your vehicle’s specific needs — not a one-size-fits-all approach.',
  },
  {
    icon: 'MapPin',
    title: 'Local & Trusted',
    description: 'Proudly serving Cincinnati and surrounding communities with pride in every job we complete.',
  },
];

// Gallery placeholders — replace `beforeImg` / `afterImg` with real photo paths
// once available, e.g. "/images/gallery/job1-before.jpg". Keep the same array
// structure so the Gallery component keeps working without code changes.
export const galleryItems = [
  {
    id: 1,
    label: 'BMW M3 — Exterior Detail',
    beforeImg: null,
    afterImg: '/images/gallery/bmw-m3-exterior-detail.jpg',
  },
  {
    id: 2,
    label: 'BMW 3 Series — Exterior Wash',
    beforeImg: null,
    afterImg: '/images/gallery/bmw-3-series-exterior-wash.jpg',
  },
  { id: 3, label: 'Full Detail Package', beforeImg: null, afterImg: null },
  { id: 4, label: 'Ceramic Coating Finish', beforeImg: null, afterImg: null },
];

// Testimonial placeholders — clearly labeled as placeholders. Replace with
// real Google/Facebook reviews (name, quote, star rating) when available.
export const testimonials = [
  {
    id: 1,
    name: '[Customer Name]',
    vehicle: '[Vehicle, e.g. 2021 Honda Accord]',
    rating: 5,
    quote:
      'This is placeholder testimonial text. Replace with a real customer quote describing their experience with R&N Detailing.',
    placeholder: true,
  },
  {
    id: 2,
    name: '[Customer Name]',
    vehicle: '[Vehicle, e.g. 2019 Ford F-150]',
    rating: 5,
    quote:
      'This is placeholder testimonial text. Replace with a real customer quote describing the results they saw after their detail.',
    placeholder: true,
  },
  {
    id: 3,
    name: '[Customer Name]',
    vehicle: '[Vehicle, e.g. 2022 Jeep Grand Cherokee]',
    rating: 5,
    quote:
      'This is placeholder testimonial text. Replace with a real customer quote about the ceramic coating or mobile convenience.',
    placeholder: true,
  },
];

export const faqs = [
  {
    question: 'Do you come to my location?',
    answer:
      'Yes! R&N Detailing is a fully mobile service. We bring our professional equipment and supplies directly to your home, office, or another convenient location.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We proudly serve Cincinnati, Ohio and surrounding areas within approximately a 50-mile radius. If you’re unsure whether you’re in our service area, just reach out and ask.',
  },
  {
    question: 'How long does a detail take?',
    answer:
      'Service time depends on the package and your vehicle’s size and condition. A Basic Detail typically takes 1-2 hours, while Premium and Supreme packages can take 3-5+ hours.',
  },
  {
    question: 'Do I need to provide water or electricity?',
    answer:
      'It’s helpful if water and electricity are available at your location, but we come equipped to handle most situations. Let us know your setup when booking so we can plan accordingly.',
  },
  {
    question: 'How much does detailing cost?',
    answer:
      'Basic Detail pricing starts at $225 for sedans, $260 for SUVs, and $275 for trucks. Add-ons like shampoo, wax, polish, pet hair removal, and ceramic coating are available. Final pricing depends on your vehicle’s size, condition, and the services selected — request a free quote for an exact price.',
  },
  {
    question: 'Do you remove pet hair?',
    answer:
      'Yes, we offer specialized pet hair removal for $75 using tools designed to lift embedded hair from carpets and upholstery.',
  },
  {
    question: 'Do you offer ceramic coatings?',
    answer:
      'Absolutely. Our ceramic coating service starts at $750 and provides long-lasting paint protection, enhanced gloss, and easier washing.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer:
      'Simply fill out the quote request form on this website with your vehicle details and preferred date/time, and we’ll follow up to confirm your appointment.',
  },
  {
    question: 'Do prices change depending on vehicle condition?',
    answer:
      'Yes. Heavily soiled interiors, excessive pet hair, or oxidized paint may require additional time and products, which can affect final pricing. We’ll always confirm pricing with you before starting any work.',
  },
];

export const vehicleTypes = ['Sedan', 'Coupe', 'SUV', 'Truck', 'Van/Minivan', 'Other'];

export const vehicleConditions = [
  'Excellent — light maintenance clean',
  'Good — normal everyday use',
  'Fair — visible dirt, stains, or pet hair',
  'Poor — heavy buildup or neglect',
];

export const serviceInterestOptions = [
  'Basic Detail',
  'Premium Package',
  'Supreme Package',
  'Interior Deep Clean',
  'Exterior Detail',
  'Ceramic Coating',
  'Pet Hair Removal',
  'Not sure — need recommendation',
];
