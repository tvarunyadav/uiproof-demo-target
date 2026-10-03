import type { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Apex Mechanical Keyboard v2',
    description: 'Ultra-responsive RGB mechanical gaming keyboard with hot-swappable tactile switches.',
    price: 149.99,
    category: 'Peripherals',
    rating: 4.8,
    stock: 24,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
    badge: 'Best Seller'
  },
  {
    id: 'prod-2',
    name: 'UltraVision 4K Pro Monitor',
    description: '32-inch IPS monitor with 144Hz refresh rate, HDR600, and 99% DCI-P3 color gamut.',
    price: 599.99,
    category: 'Displays',
    rating: 4.9,
    stock: 12,
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
    badge: 'Pro Display'
  },
  {
    id: 'prod-3',
    name: 'Quantum Sound Wireless ANC Headphones',
    description: 'High-fidelity audio with active noise cancellation, 40-hour battery, and spatial audio.',
    price: 249.99,
    category: 'Audio',
    rating: 4.6,
    stock: 18,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    badge: 'Audio'
  },
  {
    id: 'prod-4',
    name: 'ErgoFlow Mesh Office Chair',
    description: 'Ergonomic lumbar support chair with adjustable armrests and dynamic tilt lock.',
    price: 329.99,
    category: 'Furniture',
    rating: 4.5,
    stock: 5,
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=80',

    badge: 'Ergonomic'
  },
  {
    id: 'prod-5',
    name: 'Custom Braided Tech Cable Pack',
    description: 'High-speed 240W USB-C data cable with custom aviator connector.',
    price: 29.99, // Restored to number (Fixes DEF-005 NaN bug)
    category: 'Accessories',
    rating: 4.7,
    stock: 45,
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
    badge: 'Cable Pack'
  },
  {
    id: 'prod-6',
    name: 'Lumico Smart Desk Lamp',
    description: 'Dimmable LED desk light with wireless phone charging pad and color temperature presets.',
    price: 79.99,
    category: 'Peripherals',
    rating: 4.4,
    stock: 30,
    imageUrl: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=600&auto=format&fit=crop&q=80'
  }
];
