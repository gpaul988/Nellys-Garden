import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  wateringNeeds: string;
  sunlight: string;
  season: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Vegetable' | 'Herb' | 'Flower' | 'Fruit' | 'Root Crop' | 'Leafy Green';
  uses: string[];
  emoji: string;
}

const PLANTS: Plant[] = [
  // VEGETABLES
  {
    id: '1',
    name: 'Okra',
    scientificName: 'Abelmoschus esculentus',
    description: 'A warm-season vegetable that produces pods continuously. Highly nutritious and easy to grow.',
    wateringNeeds: 'Regular watering, keep soil moist',
    sunlight: '6-8 hours daily',
    season: 'March to November',
    difficulty: 'Easy',
    category: 'Vegetable',
    uses: ['Vegetable', 'Nutrition'],
    emoji: '🌾',
  },
  {
    id: '2',
    name: 'Pepper',
    scientificName: 'Capsicum spp.',
    description: 'Thrives in Nigeria\'s tropical climate. Sweet and hot varieties available.',
    wateringNeeds: 'Regular, consistent watering',
    sunlight: '6-8 hours daily',
    season: 'Year-round (best March-October)',
    difficulty: 'Medium',
    category: 'Vegetable',
    uses: ['Spice', 'Vegetable', 'Medicine'],
    emoji: '🌶️',
  },
  {
    id: '3',
    name: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    description: 'High-yielding vegetable suited to Nigerian climate. Determinate and indeterminate varieties.',
    wateringNeeds: 'Regular, drip irrigation recommended',
    sunlight: '6-8 hours daily',
    season: 'November to May (dry season best)',
    difficulty: 'Medium',
    category: 'Vegetable',
    uses: ['Vegetable', 'Sauce', 'Fresh market'],
    emoji: '🍅',
  },
  {
    id: '4',
    name: 'Spinach',
    scientificName: 'Spinacia oleracea',
    description: 'Leafy green that grows well in cool seasons and shaded areas in Nigeria.',
    wateringNeeds: 'Keep soil consistently moist',
    sunlight: '3-4 hours (prefers partial shade)',
    season: 'October to March (cool season)',
    difficulty: 'Easy',
    category: 'Leafy Green',
    uses: ['Vegetable', 'Nutrition'],
    emoji: '🥬',
  },
  {
    id: '5',
    name: 'Cucumber',
    scientificName: 'Cucumis sativus',
    description: 'Climbing vine producing crisp fruits. Thrives in warm, moist conditions.',
    wateringNeeds: 'Consistent, abundant watering',
    sunlight: '6-8 hours daily',
    season: 'April to September',
    difficulty: 'Easy',
    category: 'Vegetable',
    uses: ['Fresh vegetable', 'Salads', 'Pickling'],
    emoji: '🥒',
  },
  {
    id: '6',
    name: 'Lettuce',
    scientificName: 'Lactuca sativa',
    description: 'Quick-growing leafy green, perfect for salads. Prefers cooler weather.',
    wateringNeeds: 'Moderate, consistent moisture',
    sunlight: '4-5 hours daily',
    season: 'October to March',
    difficulty: 'Easy',
    category: 'Leafy Green',
    uses: ['Salad', 'Fresh consumption'],
    emoji: '🥗',
  },
  {
    id: '7',
    name: 'Carrot',
    scientificName: 'Daucus carota subsp. sativus',
    description: 'Orange root vegetable rich in beta-carotene. Grows well in loose, well-draining soil.',
    wateringNeeds: 'Regular, moderate watering',
    sunlight: '5-6 hours daily',
    season: 'November to February',
    difficulty: 'Medium',
    category: 'Root Crop',
    uses: ['Vegetable', 'Nutrition', 'Juice'],
    emoji: '🥕',
  },
  {
    id: '8',
    name: 'Onion',
    scientificName: 'Allium cepa',
    description: 'Bulb crop essential in Nigerian cuisine. Long shelf life and easy storage.',
    wateringNeeds: 'Moderate, reduce in final stage',
    sunlight: '6-8 hours daily',
    season: 'November to May',
    difficulty: 'Easy',
    category: 'Root Crop',
    uses: ['Spice', 'Flavoring', 'Vegetable'],
    emoji: '🧅',
  },
  {
    id: '9',
    name: 'Bean',
    scientificName: 'Phaseolus vulgaris',
    description: 'Nitrogen-fixing crop, protein-rich. Can climb or grow as bush variety.',
    wateringNeeds: 'Moderate, avoid waterlogging',
    sunlight: '6-8 hours daily',
    season: 'April to August',
    difficulty: 'Easy',
    category: 'Vegetable',
    uses: ['Food staple', 'Protein', 'Soil improvement'],
    emoji: '🫘',
  },
  {
    id: '10',
    name: 'Melon',
    scientificName: 'Cucumis melo',
    description: 'Sweet, orange-fleshed fruit. Thrives in warm, well-draining soil.',
    wateringNeeds: 'Regular, consistent watering',
    sunlight: '6-8 hours daily',
    season: 'April to September',
    difficulty: 'Medium',
    category: 'Fruit',
    uses: ['Fresh fruit', 'Nutrition', 'Dessert'],
    emoji: '🍈',
  },
  {
    id: '11',
    name: 'Watermelon',
    scientificName: 'Citrullus lanatus',
    description: 'Large, refreshing fruit with high water content. Popular during dry season.',
    wateringNeeds: 'Heavy, consistent watering',
    sunlight: '8+ hours daily',
    season: 'May to August',
    difficulty: 'Medium',
    category: 'Fruit',
    uses: ['Fresh fruit', 'Hydration', 'Seeds'],
    emoji: '🍉',
  },

  // ROOTS & STAPLES
  {
    id: '12',
    name: 'Cassava',
    scientificName: 'Manihot esculenta',
    description: 'A staple root crop that thrives in Nigerian soil. Easy to grow and highly productive.',
    wateringNeeds: 'Moderate; avoid waterlogging',
    sunlight: '6+ hours daily',
    season: '8-12 months growing',
    difficulty: 'Easy',
    category: 'Root Crop',
    uses: ['Food staple', 'Starch production'],
    emoji: '🥬',
  },
  {
    id: '13',
    name: 'Yam',
    scientificName: 'Dioscorea spp.',
    description: 'Premium root crop, cultural significance in Nigeria. Needs stakes for climbing vines.',
    wateringNeeds: 'Moderate during growth',
    sunlight: '6+ hours daily',
    season: 'March to December',
    difficulty: 'Medium',
    category: 'Root Crop',
    uses: ['Food staple', 'Festival crop', 'Cultural'],
    emoji: '🍠',
  },
  {
    id: '14',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    description: 'Aromatic rhizome that grows well in tropical climate. Used fresh or dried.',
    wateringNeeds: 'Regular but well-drained soil',
    sunlight: '4-6 hours daily',
    season: 'Best planted April-May, harvest 8-10 months',
    difficulty: 'Medium',
    category: 'Root Crop',
    uses: ['Spice', 'Medicine', 'Flavor'],
    emoji: '🫚',
  },
  {
    id: '15',
    name: 'Potato',
    scientificName: 'Solanum tuberosum',
    description: 'Cool-season crop. Must be grown in elevated beds in Nigeria for best results.',
    wateringNeeds: 'Consistent, moderate watering',
    sunlight: '6+ hours daily',
    season: 'November to February',
    difficulty: 'Medium',
    category: 'Root Crop',
    uses: ['Staple food', 'Versatile ingredient'],
    emoji: '🥔',
  },

  // HERBS & MEDICINAL
  {
    id: '16',
    name: 'Moringa',
    scientificName: 'Moringa oleifera',
    description: 'A fast-growing superfood tree with exceptional nutritional value. Leaves year-round.',
    wateringNeeds: 'Moderate; drought-tolerant once established',
    sunlight: '6-8 hours daily',
    season: 'Year-round (prefers warm months)',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Food', 'Medicine', 'Animal feed'],
    emoji: '🌿',
  },
  {
    id: '17',
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    description: 'A medicinal tree with powerful pest-repellent properties. Leaves and seeds widely used.',
    wateringNeeds: 'Low to moderate; drought-resistant',
    sunlight: '6+ hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Pest control', 'Medicine', 'Beauty'],
    emoji: '🌳',
  },
  {
    id: '18',
    name: 'Bitter Leaf (Vernonia)',
    scientificName: 'Vernonia amygdalina',
    description: 'A traditional green with medicinal properties. Popular in Nigerian cuisine.',
    wateringNeeds: 'Regular watering',
    sunlight: '4-6 hours daily',
    season: 'Year-round in humid areas',
    difficulty: 'Easy',
    category: 'Leafy Green',
    uses: ['Food', 'Medicine', 'Herbal tea'],
    emoji: '🍃',
  },
  {
    id: '19',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    description: 'Aromatic herb with peppery flavor. Grows quickly and continuously harvested.',
    wateringNeeds: 'Moderate, consistent moisture',
    sunlight: '6-8 hours daily',
    season: 'March to October',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Culinary', 'Medicinal', 'Fragrance'],
    emoji: '🌱',
  },
  {
    id: '20',
    name: 'Mint',
    scientificName: 'Mentha spp.',
    description: 'Refreshing herb, grows vigorously. Used in drinks, cooking, and medicine.',
    wateringNeeds: 'Regular, prefers moist soil',
    sunlight: '4-6 hours (tolerates shade)',
    season: 'Year-round in humid areas',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Beverage', 'Culinary', 'Medicinal'],
    emoji: '🌿',
  },
  {
    id: '21',
    name: 'Rosemary',
    scientificName: 'Rosmarinus officinalis',
    description: 'Woody herb with needle-like leaves. Drought-tolerant and fragrant.',
    wateringNeeds: 'Low to moderate, drought-tolerant',
    sunlight: '6-8 hours daily',
    season: 'Year-round',
    difficulty: 'Medium',
    category: 'Herb',
    uses: ['Culinary', 'Medicinal', 'Aromatherapy'],
    emoji: '🌿',
  },
  {
    id: '22',
    name: 'Thyme',
    scientificName: 'Thymus vulgaris',
    description: 'Tiny-leaved herb with strong flavor. Good groundcover and medicinal.',
    wateringNeeds: 'Low to moderate, drought-tolerant',
    sunlight: '6-8 hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Culinary', 'Medicinal', 'Groundcover'],
    emoji: '🌿',
  },
  {
    id: '23',
    name: 'Parsley',
    scientificName: 'Petroselinum crispum',
    description: 'Versatile culinary herb. Can be curly or flat-leafed varieties.',
    wateringNeeds: 'Moderate, consistent moisture',
    sunlight: '4-6 hours daily',
    season: 'October to April (cool season)',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Culinary', 'Garnish', 'Nutrition'],
    emoji: '🌿',
  },
  {
    id: '24',
    name: 'Oregano',
    scientificName: 'Origanum vulgare',
    description: 'Mediterranean herb with bold flavor. Drought-tolerant perennial.',
    wateringNeeds: 'Low to moderate, drought-tolerant',
    sunlight: '6-8 hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Culinary', 'Medicinal', 'Tea'],
    emoji: '🌿',
  },
  {
    id: '25',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis',
    description: 'Succulent with medicinal gel. Drought-tolerant and low-maintenance.',
    wateringNeeds: 'Low, drought-tolerant',
    sunlight: '6+ hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    category: 'Herb',
    uses: ['Medicinal', 'Skin care', 'Beauty'],
    emoji: '🌵',
  },

  // FRUITS
  {
    id: '26',
    name: 'Mango',
    scientificName: 'Mangifera indica',
    description: '"King of fruits" — thrives in Nigeria. Multiple varieties available.',
    wateringNeeds: 'Moderate during growth, drought-tolerant when mature',
    sunlight: '8+ hours daily',
    season: 'Year-round (fruit March-June)',
    difficulty: 'Medium',
    category: 'Fruit',
    uses: ['Fresh fruit', 'Juice', 'Dried fruit'],
    emoji: '🥭',
  },
  {
    id: '27',
    name: 'Pawpaw',
    scientificName: 'Carica papaya',
    description: 'Fast-growing tropical fruit. Bears fruit within 1 year. Year-round producer.',
    wateringNeeds: 'Regular, consistent watering',
    sunlight: '6-8 hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    category: 'Fruit',
    uses: ['Fresh fruit', 'Papain enzyme', 'Medicinal'],
    emoji: '🧡',
  },
  {
    id: '28',
    name: 'Pineapple',
    scientificName: 'Ananas comosus',
    description: 'Spiky-topped fruit. Low-maintenance and long-producing plant.',
    wateringNeeds: 'Moderate, drought-tolerant once established',
    sunlight: '6-8 hours daily',
    season: 'Year-round (best Dec-April)',
    difficulty: 'Easy',
    category: 'Fruit',
    uses: ['Fresh fruit', 'Juice', 'Industrial'],
    emoji: '🍍',
  },
  {
    id: '29',
    name: 'Banana',
    scientificName: 'Musa spp.',
    description: 'Herbaceous plant producing bunches of fruit. High-yielding.',
    wateringNeeds: 'Heavy, regular watering',
    sunlight: '6-8 hours daily',
    season: 'Year-round (peaks July-November)',
    difficulty: 'Easy',
    category: 'Fruit',
    uses: ['Fruit', 'Nutrition', 'Animal feed'],
    emoji: '🍌',
  },
  {
    id: '30',
    name: 'Guava',
    scientificName: 'Psidium guajava',
    description: 'Hardy tree, prolific fruiter. Rich in vitamin C.',
    wateringNeeds: 'Low to moderate, drought-tolerant',
    sunlight: '6+ hours daily',
    season: 'Year-round (main: June-November)',
    difficulty: 'Easy',
    category: 'Fruit',
    uses: ['Fresh fruit', 'Juice', 'Jam'],
    emoji: '🍐',
  },
  {
    id: '31',
    name: 'Coconut',
    scientificName: 'Cocos nucifera',
    description: 'Tall palm producing nuts and copra. Multi-use plant.',
    wateringNeeds: 'Moderate, established trees drought-tolerant',
    sunlight: '8+ hours daily',
    season: 'Year-round',
    difficulty: 'Medium',
    category: 'Fruit',
    uses: ['Nut', 'Water', 'Copra', 'Oil'],
    emoji: '🥥',
  },
  {
    id: '32',
    name: 'Orange',
    scientificName: 'Citrus sinensis',
    description: 'Citrus tree with sweet fruit. Needs well-drained soil.',
    wateringNeeds: 'Moderate, consistent',
    sunlight: '6-8 hours daily',
    season: 'Year-round (fruit Nov-April)',
    difficulty: 'Medium',
    category: 'Fruit',
    uses: ['Fresh fruit', 'Juice', 'Nutrition'],
    emoji: '🍊',
  },
  {
    id: '33',
    name: 'Lemon',
    scientificName: 'Citrus limon',
    description: 'Acidic citrus fruit. Year-round producer in tropical climates.',
    wateringNeeds: 'Moderate, consistent watering',
    sunlight: '6-8 hours daily',
    season: 'Year-round',
    difficulty: 'Medium',
    category: 'Fruit',
    uses: ['Juice', 'Seasoning', 'Medicinal'],
    emoji: '🍋',
  },

  // FLOWERS
  {
    id: '34',
    name: 'Marigold',
    scientificName: 'Tagetes erecta',
    description: 'Bright yellow/orange flowers. Pest-repellent, edible petals.',
    wateringNeeds: 'Moderate, drought-tolerant',
    sunlight: '6-8 hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    category: 'Flower',
    uses: ['Ornamental', 'Pest control', 'Traditional medicine'],
    emoji: '🌼',
  },
  {
    id: '35',
    name: 'Sunflower',
    scientificName: 'Helianthus annuus',
    description: 'Tall plant with large golden flowers. Seeds are edible.',
    wateringNeeds: 'Moderate, deep watering',
    sunlight: '6-8 hours daily',
    season: 'April to October',
    difficulty: 'Easy',
    category: 'Flower',
    uses: ['Ornamental', 'Seeds', 'Oil'],
    emoji: '🌻',
  },
  {
    id: '36',
    name: 'Hibiscus',
    scientificName: 'Hibiscus rosa-sinensis',
    description: 'Tropical shrub with showy flowers. Multiple colors available.',
    wateringNeeds: 'Regular, consistent moisture',
    sunlight: '6-8 hours daily',
    season: 'Year-round flowering',
    difficulty: 'Easy',
    category: 'Flower',
    uses: ['Ornamental', 'Herbal tea', 'Medicinal'],
    emoji: '🌺',
  },
  {
    id: '37',
    name: 'Rose',
    scientificName: 'Rosa spp.',
    description: 'Queen of flowers. Thrives in tropical Nigeria with proper care.',
    wateringNeeds: 'Regular, morning watering best',
    sunlight: '6-8 hours daily',
    season: 'Year-round (peaks Nov-April)',
    difficulty: 'Medium',
    category: 'Flower',
    uses: ['Ornamental', 'Floral arrangements', 'Perfume'],
    emoji: '🌹',
  },
  {
    id: '38',
    name: 'Lily',
    scientificName: 'Lilium spp.',
    description: 'Elegant flowers with strong fragrance. Many varieties available.',
    wateringNeeds: 'Moderate, well-draining soil',
    sunlight: '6-8 hours daily',
    season: 'October to April (cool season)',
    difficulty: 'Medium',
    category: 'Flower',
    uses: ['Ornamental', 'Cut flowers', 'Religious ceremonies'],
    emoji: '🌸',
  },
  {
    id: '39',
    name: 'Bougainvillea',
    scientificName: 'Bougainvillea spp.',
    description: 'Vibrant flowering vine. Drought-tolerant once established.',
    wateringNeeds: 'Low to moderate, drought-tolerant',
    sunlight: '8+ hours daily',
    season: 'Year-round (peaks Nov-April)',
    difficulty: 'Easy',
    category: 'Flower',
    uses: ['Ornamental', 'Hedge', 'Climbing vine'],
    emoji: '🌷',
  },
  {
    id: '40',
    name: 'Zinnia',
    scientificName: 'Zinnia elegans',
    description: 'Colorful, long-blooming flowers. Attracts pollinators.',
    wateringNeeds: 'Moderate, avoid wetting leaves',
    sunlight: '6-8 hours daily',
    season: 'March to November',
    difficulty: 'Easy',
    category: 'Flower',
    uses: ['Ornamental', 'Cut flowers', 'Pollinator plant'],
    emoji: '🌼',
  },
  {
    id: '41',
    name: 'Cactus Flower',
    scientificName: 'Opuntia spp.',
    description: 'Desert plant with bright flowers. Edible pads and fruit.',
    wateringNeeds: 'Low, drought-tolerant',
    sunlight: '8+ hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    category: 'Flower',
    uses: ['Ornamental', 'Food', 'Medicinal'],
    emoji: '🌵',
  },
  {
    id: '42',
    name: 'Gladiolus',
    scientificName: 'Gladiolus spp.',
    description: 'Tall spikes of colorful flowers. Popular for arrangements.',
    wateringNeeds: 'Moderate, consistent watering',
    sunlight: '6-8 hours daily',
    season: 'November to April (cool season)',
    difficulty: 'Medium',
    category: 'Flower',
    uses: ['Cut flowers', 'Ornamental', 'Floral arrangements'],
    emoji: '🌸',
  },
];

const difficultyColor: Record<string, string> = {
  Easy: 'bg-[#00ff88]/20 text-[#00ff88]',
  Medium: 'bg-[#d4a574]/20 text-[#d4a574]',
  Hard: 'bg-[#ff4444]/20 text-[#ff4444]',
};

const categoryColor: Record<string, string> = {
  'Vegetable': 'border-[#1a8d5e]',
  'Herb': 'border-[#00ff88]',
  'Flower': 'border-[#ff69b4]',
  'Fruit': 'border-[#ffa500]',
  'Root Crop': 'border-[#d4a574]',
  'Leafy Green': 'border-[#00d9ff]',
};

export default function Plants() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = ['Vegetable', 'Herb', 'Flower', 'Fruit', 'Root Crop', 'Leafy Green'];

  const filtered = PLANTS.filter(
    (plant) =>
      (plant.name.toLowerCase().includes(search.toLowerCase()) ||
       plant.scientificName.toLowerCase().includes(search.toLowerCase())) &&
      (!selectedCategory || plant.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-[#1a8d5e]/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] bg-clip-text text-transparent">
            Nigerian Plants & Flowers
          </h1>
          <p className="text-[#b0b0b0] text-lg mb-8">
            Discover 40+ plants, flowers, vegetables, herbs, and fruits curated for Nigeria's tropical climate.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mb-8">
            <Search className="absolute left-4 top-3 text-[#b0b0b0]" size={20} />
            <input
              type="text"
              placeholder="Search plants, flowers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-[#d4a574]/30 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 backdrop-blur-sm transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                !selectedCategory
                  ? 'bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white shadow-lg'
                  : 'bg-white/5 text-[#b0b0b0] border border-[#2a2f48] hover:border-[#d4a574]/30'
              }`}
            >
              All Plants
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white shadow-lg'
                    : 'bg-white/5 text-[#b0b0b0] border border-[#2a2f48] hover:border-[#d4a574]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#b0b0b0] mb-8 flex items-center gap-2">
            <Filter size={18} />
            {filtered.length} plants found
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((plant) => (
              <div
                key={plant.id}
                className={`p-6 rounded-lg bg-white/5 border-2 ${categoryColor[plant.category]} backdrop-blur-sm hover:bg-white/15 hover:shadow-lg hover:shadow-[#00d9ff]/30 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1`}
              >
                {/* Plant Emoji & Name */}
                <div className="mb-4">
                  <div className="text-6xl mb-3 group-hover:scale-125 transition-transform">{plant.emoji}</div>
                  <h3 className="text-2xl font-bold text-white">{plant.name}</h3>
                  <p className="text-[#b0b0b0] italic text-sm">{plant.scientificName}</p>
                </div>

                {/* Description */}
                <p className="text-[#b0b0b0] text-sm leading-relaxed mb-4">{plant.description}</p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[plant.difficulty]}`}>
                    {plant.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00d9ff]/20 text-[#00d9ff]">
                    {plant.category}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm border-t border-[#2a2f48] pt-4">
                  <div>
                    <p className="text-[#00d9ff] font-semibold text-xs">WATERING</p>
                    <p className="text-[#b0b0b0] text-xs">{plant.wateringNeeds}</p>
                  </div>
                  <div>
                    <p className="text-[#1a8d5e] font-semibold text-xs">SUNLIGHT</p>
                    <p className="text-[#b0b0b0] text-xs">{plant.sunlight}</p>
                  </div>
                  <div>
                    <p className="text-[#d4a574] font-semibold text-xs">SEASON</p>
                    <p className="text-[#b0b0b0] text-xs">{plant.season}</p>
                  </div>
                </div>

                {/* Uses */}
                <div>
                  <p className="text-[#00ff88] font-semibold text-xs mb-2">USES</p>
                  <div className="flex flex-wrap gap-1">
                    {plant.uses.map((use) => (
                      <span
                        key={use}
                        className="px-2 py-1 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded text-xs text-[#00d9ff]"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#b0b0b0] text-lg">No plants found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
