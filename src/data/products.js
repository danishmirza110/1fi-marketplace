


export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'electronics', label: 'Electronics' },
  { id: 'jewellery', label: 'Jewellery' },
  { id: 'travel', label: 'Travel' },
  { id: 'auto', label: 'Two Wheelers' },
]

export const PRODUCTS = [
  {
    id: 'p-iphone-15-pro',
    name: 'iPhone 15 Pro',
    brand: 'Apple Premium Reseller',
    category: 'electronics',
    price: 134900,
    rating: 4.8,
    reviewCount: 2140,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
      'https://images.unsplash.com/photo-1592286927505-1def25115481?w=800&q=80',
      'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=800&q=80',
    ],
    description:
      'Titanium design with the A17 Pro chip, a 48MP main camera and all-day battery life. Comes with Apple standard warranty via an Apple Premium Reseller.',
    highlights: ['A17 Pro chip', 'Titanium build', '48MP camera', 'Apple warranty included'],
    variantGroups: [
      {
        id: 'storage',
        label: 'Storage',
        options: [
          { id: '128gb', label: '128GB', priceDelta: 0 },
          { id: '256gb', label: '256GB', priceDelta: 10000 },
          { id: '512gb', label: '512GB', priceDelta: 30000 },
        ],
      },
      {
        id: 'color',
        label: 'Colour',
        options: [
          { id: 'natural', label: 'Natural Titanium', swatch: '#8E8577', priceDelta: 0 },
          { id: 'blue', label: 'Blue Titanium', swatch: '#3E5769', priceDelta: 0 },
          { id: 'white', label: 'White Titanium', swatch: '#E7E4DC', priceDelta: 0 },
        ],
      },
    ],
  },
  {
    id: 'p-macbook-air-m3',
    name: 'MacBook Air M3',
    brand: 'Apple Premium Reseller',
    category: 'electronics',
    price: 114900,
    rating: 4.9,
    reviewCount: 985,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
    ],
    description:
      '13-inch Liquid Retina display powered by the M3 chip. Fanless design, up to 18 hours of battery life, built for everyday work.',
    highlights: ['Apple M3 chip', '18-hour battery', 'Fanless silent design', 'Liquid Retina display'],
    variantGroups: [
      {
        id: 'storage',
        label: 'Storage',
        options: [
          { id: '256gb', label: '256GB SSD', priceDelta: 0 },
          { id: '512gb', label: '512GB SSD', priceDelta: 16000 },
        ],
      },
      {
        id: 'color',
        label: 'Colour',
        options: [
          { id: 'midnight', label: 'Midnight', swatch: '#33394A', priceDelta: 0 },
          { id: 'starlight', label: 'Starlight', swatch: '#F0E6D3', priceDelta: 0 },
          { id: 'graphite', label: 'Space Grey', swatch: '#5F6266', priceDelta: 0 },
        ],
      },
    ],
  },
  {
    id: 'p-galaxy-s24-ultra',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung Experience Store',
    category: 'electronics',
    price: 129999,
    rating: 4.6,
    reviewCount: 1520,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
      'https://images.unsplash.com/photo-1610792516286-524726503fb5?w=800&q=80',
    ],
    description:
      'A 200MP camera system with Galaxy AI, a titanium frame and the built-in S Pen for note-taking on the go.',
    highlights: ['200MP camera', 'Built-in S Pen', 'Galaxy AI', 'Titanium frame'],
    variantGroups: [
      {
        id: 'storage',
        label: 'Storage',
        options: [
          { id: '256gb', label: '256GB', priceDelta: 0 },
          { id: '512gb', label: '512GB', priceDelta: 12000 },
        ],
      },
      {
        id: 'color',
        label: 'Colour',
        options: [
          { id: 'black', label: 'Titanium Black', swatch: '#2B2B2E', priceDelta: 0 },
          { id: 'violet', label: 'Titanium Violet', swatch: '#9B8AA6', priceDelta: 0 },
        ],
      },
    ],
  },
  {
    id: 'p-caratlane-pendant',
    name: 'Solitaire Pendant',
    brand: 'CaratLane',
    category: 'jewellery',
    price: 45999,
    rating: 4.7,
    reviewCount: 640,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80',
    ],
    description:
      'A certified solitaire pendant crafted with IGI-certified diamonds, backed by CaratLane\u2019s lifetime exchange policy.',
    highlights: ['IGI certified', 'Lifetime exchange', 'BIS hallmarked gold', 'Free home trial'],
    variantGroups: [
      {
        id: 'metal',
        label: 'Metal',
        options: [
          { id: 'yellow-gold', label: '18K Yellow Gold', swatch: '#E8C468', priceDelta: 0 },
          { id: 'rose-gold', label: '18K Rose Gold', swatch: '#E7B4A3', priceDelta: 1500 },
          { id: 'platinum', label: 'Platinum', swatch: '#D9D9E0', priceDelta: 8000 },
        ],
      },
    ],
  },
  {
    id: 'p-caratlane-ring',
    name: 'Eternity Diamond Ring',
    brand: 'CaratLane',
    category: 'jewellery',
    price: 62999,
    rating: 4.8,
    reviewCount: 402,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
      'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800&q=80',
    ],
    description:
      'A timeless eternity band set with round brilliant diamonds, finished by hand and ready to resize at any CaratLane store.',
    highlights: ['Handcrafted finish', 'Free resizing', 'Certificate of authenticity'],
    variantGroups: [
      {
        id: 'size',
        label: 'Ring Size',
        options: [
          { id: '5', label: 'Size 5', priceDelta: 0 },
          { id: '6', label: 'Size 6', priceDelta: 0 },
          { id: '7', label: 'Size 7', priceDelta: 0 },
          { id: '8', label: 'Size 8', priceDelta: 0 },
        ],
      },
    ],
  },
  {
    id: 'p-airindia-bali',
    name: 'Bali Holiday Package',
    brand: 'Air India Holidays',
    category: 'travel',
    price: 89999,
    rating: 4.5,
    reviewCount: 218,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1518544866330-4d091d9c8f5d?w=800&q=80',
    ],
    description:
      '5 nights / 6 days round trip to Bali including flights, a beachfront stay and daily breakfast, fulfilled by Air India Holidays.',
    highlights: ['Return flights included', '5-night beachfront stay', 'Daily breakfast', 'Visa assistance'],
    variantGroups: [
      {
        id: 'class',
        label: 'Travel Class',
        options: [
          { id: 'economy', label: 'Economy', priceDelta: 0 },
          { id: 'premium-economy', label: 'Premium Economy', priceDelta: 18000 },
          { id: 'business', label: 'Business', priceDelta: 55000 },
        ],
      },
    ],
  },
  {
    id: 'p-cgh-earth-kerala',
    name: 'Kerala Backwater Retreat',
    brand: 'CGH Earth',
    category: 'travel',
    price: 54999,
    rating: 4.9,
    reviewCount: 176,
    image: 'https://images.unsplash.com/photo-1602301413632-2f2b4b7fb2ef?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602301413632-2f2b4b7fb2ef?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    ],
    description:
      '3 nights at a CGH Earth heritage property on the backwaters, with houseboat cruises and Ayurvedic wellness sessions included.',
    highlights: ['Heritage property stay', 'Houseboat cruise', 'Ayurvedic wellness sessions'],
    variantGroups: [
      {
        id: 'room',
        label: 'Room Type',
        options: [
          { id: 'heritage', label: 'Heritage Room', priceDelta: 0 },
          { id: 'pool-villa', label: 'Pool Villa', priceDelta: 21000 },
        ],
      },
    ],
  },
  {
    id: 'p-re-classic-350',
    name: 'Classic 350',
    brand: 'Royal Enfield',
    category: 'auto',
    price: 224000,
    rating: 4.6,
    reviewCount: 890,
    image: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558980664-10e7170b5df9?w=800&q=80',
      'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80',
    ],
    description:
      'The iconic Classic 350, powered by the J-series engine with a double-cradle chassis for a smooth, planted ride.',
    highlights: ['349cc J-series engine', 'Double-cradle chassis', 'On-road ready'],
    variantGroups: [
      {
        id: 'color',
        label: 'Colour',
        options: [
          { id: 'stealth-black', label: 'Stealth Black', swatch: '#1D1D1F', priceDelta: 0 },
          { id: 'gunmetal', label: 'Gunmetal Grey', swatch: '#4B4E52', priceDelta: 3000 },
          { id: 'chrome', label: 'Chrome Bronze', swatch: '#B08D57', priceDelta: 9000 },
        ],
      },
    ],
  },
]
