/**
 * Seed script — populates Sanity with all existing static content.
 * Usage: node scripts/seed.mjs YOUR_SANITY_TOKEN
 *
 * Get a token at: sanity.io/manage → your project → API → Tokens → Add API token (Editor)
 */

import { createClient } from '@sanity/client';

const token = process.argv[2];
if (!token) {
  console.error('Usage: node scripts/seed.mjs YOUR_SANITY_TOKEN');
  process.exit(1);
}

const client = createClient({
  projectId: '9x9xb4j2',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

// ─── Content ─────────────────────────────────────────────────────────────────

const businessInfo = {
  _id: 'businessInfo',
  _type: 'businessInfo',
  phone: '7134685665',
  phoneDisplay: '(713) 468-5665',
  email: 'alex@factoryeyeglassoutlet.com',
  address: '7921 Katy Fwy',
  city: 'Houston, TX 77024',
  turnaround: '3–5 Business Days',
  hours: [
    { _key: 'h1', days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
    { _key: 'h2', days: 'Saturday', hours: '10:00 AM – 4:00 PM' },
    { _key: 'h3', days: 'Sunday', hours: 'Closed' },
  ],
  heroHeadline: 'Live Life',
  heroSubheadline: 'in the Clear',
  heroTagline: 'Over three decades of expertise. Personalized fittings, high-end designer frames, and innovative lenses tailored to your lifestyle.',
  aboutHeadline: 'A Legacy of Clear Vision',
  aboutBody1: 'As a second-generation optician with over 30 years of dedicated service in the greater Houston area, Alexander brings unmatched expertise and a personal touch to every fitting.',
  aboutBody2: 'From innovative lens technology to handcrafted frames, Alex consults on solutions tailored to your lifestyle — not just your prescription.',
  aboutQuote: 'I don\'t just fit glasses — I consult on the most innovative lenses to match your vision and your life.',
};

const services = [
  {
    _id: 'service-01',
    _type: 'service',
    order: 1,
    number: '01',
    icon: '◈',
    tag: 'Signature Service',
    title: 'Taylor Fit™ Adjustments',
    subtitle: 'Personalized to Your Face',
    description: 'Every frame is precision-adjusted to the unique geometry of your face. Your glasses should feel like they were born on your face.',
    details: ['Custom nose pad adjustment', 'Temple arm contouring', 'Pupillary distance optimization', 'Weight balance calibration'],
  },
  {
    _id: 'service-02',
    _type: 'service',
    order: 2,
    number: '02',
    icon: '◎',
    tag: 'Expert Consultation',
    title: 'High-End Lens Consultation',
    subtitle: 'Innovative & Lifestyle-Matched',
    description: 'Alex personally consults on the latest lens technologies to fit your lifestyle. From progressives to anti-fatigue and blue-light solutions.',
    details: ['Progressive & bifocal lenses', 'Blue light & anti-fatigue', 'Photochromic & transitions', 'High-index ultra-thin lenses'],
  },
  {
    _id: 'service-03',
    _type: 'service',
    order: 3,
    number: '03',
    icon: '◇',
    tag: 'Luxury Collection',
    title: 'Designer & Luxury Frames',
    subtitle: '1000+ Frames In-Store',
    description: 'Hand-selected from the world\'s finest frame makers. The lightest materials in the industry — titanium and acetate from Silhouette, Tom Ford, Prada, and beyond.',
    details: ['Handcrafted frames', 'Industry\'s lightest materials', 'Titanium & premium acetate', 'Over 1,000 styles in stock'],
  },
  {
    _id: 'service-04',
    _type: 'service',
    order: 4,
    number: '04',
    icon: '◉',
    tag: 'Authorized Dealer',
    title: 'Designer Sunglass Store',
    subtitle: 'Authorized Dealer',
    description: 'As an authorized dealer, we carry the full range of designer sunglasses from the most prestigious houses. Authenticity guaranteed.',
    details: ['Ray-Ban, Prada, Gucci & more', 'Authentic authorized stock', 'Prescription sunglass lenses', 'UV & polarized options'],
  },
  {
    _id: 'service-05',
    _type: 'service',
    order: 5,
    number: '05',
    icon: '○',
    tag: 'Full Service',
    title: 'Contact Lenses',
    subtitle: 'All Types & Prescriptions',
    description: 'Complete contact lens service including fitting, ordering, and follow-up care. Daily, monthly, toric, multifocal — all with personalized attention.',
    details: ['Daily & monthly disposables', 'Toric lenses for astigmatism', 'Multifocal contacts', 'Professional fitting included'],
  },
  {
    _id: 'service-06',
    _type: 'service',
    order: 6,
    number: '06',
    icon: '◫',
    tag: 'Fast Turnaround',
    title: 'Repair & Courier Center',
    subtitle: '3–5 Business Day Turnaround',
    description: 'Fast, expert repair services with a 3–5 business day turnaround. Frame soldering, lens replacement, and courier services for brands.',
    details: ['Frame soldering & welding', 'Lens replacement service', '3–5 business day turnaround', 'Courier center for brands'],
  },
];

const testimonials = [
  {
    _id: 'testimonial-01',
    _type: 'testimonial',
    order: 1,
    name: 'Maria G.',
    location: 'Houston Heights',
    rating: 5,
    text: 'Alex has been my optician for over 15 years. The Taylor Fit adjustment is unlike anything you get at a chain store — my glasses actually fit my face perfectly. I wouldn\'t trust anyone else.',
  },
  {
    _id: 'testimonial-02',
    _type: 'testimonial',
    order: 2,
    name: 'David R.',
    location: 'Memorial, Houston',
    rating: 5,
    text: 'Incredible selection of designer frames and Alex really knows his lenses. He recommended a progressive lens I\'d never heard of that\'s completely changed how I work at my computer. Real expertise.',
  },
  {
    _id: 'testimonial-03',
    _type: 'testimonial',
    order: 3,
    name: 'Sandra T.',
    location: 'River Oaks',
    rating: 5,
    text: 'I needed my Tom Ford frames repaired urgently before a trip. Alex had them back to me in 2 days looking brand new. Fast, honest, and incredibly skilled.',
  },
  {
    _id: 'testimonial-04',
    _type: 'testimonial',
    order: 4,
    name: 'James L.',
    location: 'Katy, TX',
    rating: 5,
    text: 'Second generation optician and it shows. He helped me find the lightest titanium frames I\'ve ever worn — I forget I have glasses on. Amazing service.',
  },
  {
    _id: 'testimonial-05',
    _type: 'testimonial',
    order: 5,
    name: 'Patricia M.',
    location: 'Tanglewood',
    rating: 5,
    text: 'My whole family has been coming here for years. Alex knows each of us by name. The personalized service you simply cannot find anywhere else in the city.',
  },
  {
    _id: 'testimonial-06',
    _type: 'testimonial',
    order: 6,
    name: 'Carlos V.',
    location: 'Energy Corridor',
    rating: 5,
    text: 'Alex\'s consultations are thorough and he genuinely cares about finding the right fit. Best eyewear experience I\'ve had in Houston.',
  },
];

const frameBrands = [
  'Tom Ford', 'Prada', 'Gucci', 'Versace', 'Dior', 'Fendi',
  'Burberry', 'Tiffany & Co.', 'Carolina Herrera', 'Silhouette',
  'Ray-Ban', 'Michael Kors', 'Ralph Lauren', 'Armani Exchange',
  'Emporio Armani', 'Tory Burch', 'Hugo Boss', 'John Varvatos',
  'Rodenstock', 'Lucky Brand',
].map((name, i) => ({
  _id: `frame-${String(i + 1).padStart(2, '0')}`,
  _type: 'frame',
  name,
  order: i + 1,
  featured: i < 8,
}));

// ─── Seed ────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Seeding Sanity...\n');

  const transaction = client.transaction();

  // createOrReplace so it's safe to run multiple times
  transaction.createOrReplace(businessInfo);
  for (const s of services) transaction.createOrReplace(s);
  for (const t of testimonials) transaction.createOrReplace(t);
  for (const f of frameBrands) transaction.createOrReplace(f);

  await transaction.commit();

  // Publish all drafts
  const ids = [
    businessInfo._id,
    ...services.map(s => s._id),
    ...testimonials.map(t => t._id),
    ...frameBrands.map(f => f._id),
  ];

  for (const id of ids) {
    try {
      await client.patch(`drafts.${id}`)
        .set({ _id: id })
        .commit()
        .catch(() => {}); // already published
    } catch (_) {}
  }

  console.log(`✅ Business Info`);
  console.log(`✅ ${services.length} Services`);
  console.log(`✅ ${testimonials.length} Testimonials`);
  console.log(`✅ ${frameBrands.length} Frame Brands`);
  console.log('\n🎉 Done! Open the Studio to review and publish the content.');
}

seed().catch(err => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
