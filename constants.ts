
import { Product, ContactInfo } from './types';

// Link Logo & Splash Screen
export const LOGO_URL = 'https://files.catbox.moe/zn215z.png';

export const CONTACT_INFO: ContactInfo = {
  telegram: 'https://t.me/XBhigh',
  whatsapp: 'https://wa.me/62895337806967'
};

export const CATEGORIES = ['All', 'Treatment', 'Serum', 'Mask', 'Cleanse', 'Styling'];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Smoothing Keratin Pro',
    price: 'Rp 150.000',
    image: 'https://files.catbox.moe/jsjdjjdd.jpg',
    description: 'Formula keratin premium untuk hasil rambut lurus jatuh dan berkilau alami.',
    category: 'Treatment'
  },
  {
    id: 2,
    name: 'Smoothing Hair Serum',
    price: 'Rp 85.000',
    image: 'https://files.catbox.moe/kushs.jpg',
    description: 'Serum anti-frizz yang memberikan kilau instan tanpa rasa lengket.',
    category: 'Serum'
  },
  {
    id: 3,
    name: 'Ultra Smoothing Mask',
    price: 'Rp 120.000',
    image: 'https://files.catbox.moe/2ljsjxfghhc.jpg',
    description: 'Deep conditioning treatment untuk memperbaiki struktur rambut yang rusak.',
    category: 'Mask'
  },
  {
    id: 4,
    name: 'Smoothing Shampoo Gold',
    price: 'Rp 75.000',
    image: 'https://files.catbox.moe/2ljsjndjfjfxc.jpg',
    description: 'Pembersih lembut dengan Vitamin E untuk menjaga kelembapan rambut.',
    category: 'Cleanse'
  },
  {
    id: 5,
    name: 'Conditioner Silk Touch',
    price: 'Rp 75.000',
    image: 'https://files.catbox.moe/2ljsjxchhshhd.jpg',
    description: 'Menutup kutikula rambut agar hasil smoothing lebih tahan lama.',
    category: 'Cleanse'
  },
  {
    id: 6,
    name: 'Hair Vitamin Spray',
    price: 'Rp 45.000',
    image: 'https://files.catbox.moe/2ljshehbejxc.jpg',
    description: 'Perlindungan ekstra dari panas hair dryer dan sinar matahari.',
    category: 'Serum'
  },
  {
    id: 7,
    name: 'Smoothing Clay Wax',
    price: 'Rp 65.000',
    image: 'https://files.catbox.moe/2ljsjbdbdxc.jpg',
    description: 'Gaya rambut lurus yang tetap fleksibel dan mudah diatur.',
    category: 'Styling'
  },
  {
    id: 8,
    name: 'Smoothing Essence Oil',
    price: 'Rp 110.000',
    image: 'https://files.catbox.moe/2ljsjxbdnbdc.jpg',
    description: 'Minyak esensial organik untuk nutrisi maksimal akar rambut.',
    category: 'Serum'
  },
  {
    id: 9,
    name: 'Intensive Repair Cream',
    price: 'Rp 135.000',
    image: 'https://files.catbox.moe/2ljshsbdbjxc.jpg',
    description: 'Perawatan malam hari untuk pemulihan tekstur rambut ekstrem.',
    category: 'Treatment'
  },
  {
    id: 10,
    name: 'Smoothing Travel Kit',
    price: 'Rp 250.000',
    image: 'https://files.catbox.moe/2ljbdbbddsjxc.jpg',
    description: 'Set lengkap ukuran travel untuk perawatan rambut profesional di mana saja.',
    category: 'Treatment'
  }
];
