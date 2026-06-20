import { useState } from 'react';
import { Search } from 'lucide-react';

interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  wateringNeeds: string;
  sunlight: string;
  season: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  uses: string[];
  emoji: string;
}

const PLANTS: Plant[] = [
  {
    id: '1',
    name: 'Moringa',
    scientificName: 'Moringa oleifera',
    description: 'A fast-growing superfood tree with exceptional nutritional value. Leaves can be harvested year-round.',
    wateringNeeds: 'Moderate; drought-tolerant once established',
    sunlight: '6-8 hours daily',
    season: 'Year-round (prefers warm months)',
    difficulty: 'Easy',
    uses: ['Food', 'Medicine', 'Animal feed'],
    emoji: '🌿',
  },
  {
    id: '2',
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    description: 'A medicinal tree with powerful pest-repellent properties. Leaves and seeds are widely used.',
    wateringNeeds: 'Low to moderate; drought-resistant',
    sunlight: '6+ hours daily',
    season: 'Year-round',
    difficulty: 'Easy',
    uses: ['Pest control', 'Medicine', 'Beauty'],
    emoji: '🌳',
  },
  {
    id: '3',
    name: 'Cassava',
    scientificName: 'Manihot esculenta',
    description: 'A staple root crop that thrives in Nigerian soil. Easy to grow and highly productive.',
    wateringNeeds: 'Moderate; avoid waterlogging',
    sunlight: '6+ hours daily',
    season: '8-12 months growing',
    difficulty: 'Easy',
    uses: ['Food staple', 'Starch production'],
    emoji: '🥬',
  },
  {
    id: '4',
    name: 'Okra',
    scientificName: 'Abelmoschus esculentus',
    description: 'A warm-season vegetable that produces pods continuously. Highly nutritious and easy to grow.',
    wateringNeeds: 'Regular watering, keep soil moist',
    sunlight: '6-8 hours daily',
    season: 'March to November',
    difficulty: 'Easy',
    uses: ['Vegetable', 'Nutritional supplement'],
    emoji: '🌾',
  },
  {
    id: '5',
    name: 'Bitter Leaf (Vernonia)',
    scientificName: 'Vernonia amygdalina',
    description: 'A traditional green with medicinal properties. Popular in Nigerian cuisine.',
    wateringNeeds: 'Regular watering',
    sunlight: '4-6 hours daily',
    season: 'Year-round in humid areas',
    difficulty: 'Easy',
    uses: ['Food', 'Medicine', 'Herbal tea'],
    emoji: '🍃',
  },
  {
    id: '6',
    name: 'Calabash',
    scientificName: 'Lagenaria siceraria',
    description: 'A climbing vine producing large, hard-shelled fruits used for storage and crafts.',
    wateringNeeds: 'Moderate during growth',
    sunlight: '6+ hours daily',
    season: 'March to September',
    difficulty: 'Medium',
    uses: ['Containers', 'Food', 'Crafts'],
    emoji: '🎃',
  },
  {
    id: '7',
    name: 'Pepper',
    scientificName: 'Capsicum spp.',
    description: 'Thrives in Nigeria\'s tropical climate. Sweet and hot varieties available.',
    wateringNeeds: 'Regular, consistent watering',
    sunlight: '6-8 hours daily',
    season: 'Year-round (best March-October)',
    difficulty: 'Medium',
    uses: ['Spice', 'Vegetable', 'Medicine'],
    emoji: '🌶️',
  },
  {
    id: '8',
    name: 'Spinach',
    scientificName: 'Spinacia oleracea',
    description: 'Leafy green that grows well in cool seasons and shaded areas in Nigeria.',
    wateringNeeds: 'Keep soil consistently moist',
    sunlight: '3-4 hours (prefers partial shade)',
    season: 'October to March (cool season)',
    difficulty: 'Easy',
    uses: ['Vegetable', 'Nutrition'],
    emoji: '🥬',
  },
  {
    id: '9',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    description: 'Aromatic rhizome that grows well in tropical climate. Used fresh or dried.',
    wateringNeeds: 'Regular but well-drained soil',
    sunlight: '4-6 hours daily',
    season: 'Best planted April-May, harvest 8-10 months',
    difficulty: 'Medium',
    uses: ['Spice', 'Medicine', 'Flavor'],
    emoji: '🫚',
  },
  {
    id: '10',
    name: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    description: 'High-yielding vegetable suited to Nigerian climate. Determinate and indeterminate varieties.',
    wateringNeeds: 'Regular, drip irrigation recommended',
    sunlight: '6-8 hours daily',
    season: 'November to May (dry season best)',
    difficulty: 'Medium',
    uses: ['Vegetable', 'Sauce', 'Fresh market'],
    emoji: '🍅',
  },
];

const difficultyColor: Record<string, string> = {
  Easy: 'bg-[#00ff88]/20 text-[#00ff88]',
  Medium: 'bg-[#d4a574]/20 text-[#d4a574]',
  Hard: 'bg-[#ff4444]/20 text-[#ff4444]',
};

export default function Plants() {
  const [search, setSearch] = useState('');

  const filtered = PLANTS.filter(
    (plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Nigerian Plants Guide</h1>
          <p className="text-[#b0b0b0] text-lg mb-8">
            Discover the best plants for your Nigerian garden. Each thrives in our tropical climate.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-3 text-[#b0b0b0]" size={20} />
            <input
              type="text"
              placeholder="Search plants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-[#d4a574]/20 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff]/40 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#b0b0b0] mb-8">{filtered.length} plants found</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((plant) => (
              <div
                key={plant.id}
                className="p-6 rounded-lg bg-white/5 border border-[#d4a574]/20 backdrop-blur-sm hover:bg-white/10 hover:border-[#00d9ff]/40 transition-all duration-300"
              >
                {/* Plant Emoji & Name */}
                <div className="mb-4">
                  <div className="text-5xl mb-3">{plant.emoji}</div>
                  <h3 className="text-2xl font-bold text-white">{plant.name}</h3>
                  <p className="text-[#b0b0b0] italic text-sm">{plant.scientificName}</p>
                </div>

                {/* Description */}
                <p className="text-[#b0b0b0] text-sm leading-relaxed mb-4">{plant.description}</p>

                {/* Difficulty Badge */}
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[plant.difficulty]}`}>
                    {plant.difficulty}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-4 text-sm">
                  <div>
                    <p className="text-[#d4a574] font-semibold">Watering</p>
                    <p className="text-[#b0b0b0]">{plant.wateringNeeds}</p>
                  </div>
                  <div>
                    <p className="text-[#d4a574] font-semibold">Sunlight</p>
                    <p className="text-[#b0b0b0]">{plant.sunlight}</p>
                  </div>
                  <div>
                    <p className="text-[#d4a574] font-semibold">Growing Season</p>
                    <p className="text-[#b0b0b0]">{plant.season}</p>
                  </div>
                </div>

                {/* Uses */}
                <div>
                  <p className="text-[#d4a574] font-semibold text-sm mb-2">Uses</p>
                  <div className="flex flex-wrap gap-2">
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
