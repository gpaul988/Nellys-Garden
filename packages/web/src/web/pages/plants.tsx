import { useState } from 'react';
import { Search, Filter, Zap, TrendingUp, Database } from 'lucide-react';

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
  yield: number;
}

const PLANTS: Plant[] = [
  {
    id: '1', name: 'Okra', scientificName: 'Abelmoschus esculentus', description: 'Warm-season vegetable with continuous pod production.',
    wateringNeeds: 'Regular watering', sunlight: '6-8 hours', season: 'March to November', difficulty: 'Easy', category: 'Vegetable',
    uses: ['Vegetable', 'Nutrition'], emoji: '🌾', yield: 85,
  },
  {
    id: '2', name: 'Moringa', scientificName: 'Moringa oleifera', description: 'Superfood tree with exceptional nutritional value.',
    wateringNeeds: 'Moderate', sunlight: '6-8 hours', season: 'Year-round', difficulty: 'Easy', category: 'Herb',
    uses: ['Food', 'Medicine'], emoji: '🌿', yield: 95,
  },
  {
    id: '3', name: 'Pepper', scientificName: 'Capsicum spp.', description: 'Thrives in tropical climate.',
    wateringNeeds: 'Regular', sunlight: '6-8 hours', season: 'Year-round', difficulty: 'Medium', category: 'Vegetable',
    uses: ['Spice', 'Vegetable'], emoji: '🌶️', yield: 78,
  },
  {
    id: '4', name: 'Hibiscus', scientificName: 'Hibiscus rosa-sinensis', description: 'Tropical shrub with showy flowers.',
    wateringNeeds: 'Regular', sunlight: '6-8 hours', season: 'Year-round', difficulty: 'Easy', category: 'Flower',
    uses: ['Ornamental', 'Tea'], emoji: '🌺', yield: 88,
  },
  {
    id: '5', name: 'Pawpaw', scientificName: 'Carica papaya', description: 'Fast-growing tropical fruit.',
    wateringNeeds: 'Regular', sunlight: '6-8 hours', season: 'Year-round', difficulty: 'Easy', category: 'Fruit',
    uses: ['Fruit', 'Enzyme'], emoji: '🧡', yield: 90,
  },
  {
    id: '6', name: 'Neem', scientificName: 'Azadirachta indica', description: 'Medicinal tree with pest-repellent properties.',
    wateringNeeds: 'Low', sunlight: '6+ hours', season: 'Year-round', difficulty: 'Easy', category: 'Herb',
    uses: ['Pest control', 'Medicine'], emoji: '🌳', yield: 92,
  },
  {
    id: '7', name: 'Rose', scientificName: 'Rosa spp.', description: 'Queen of flowers with multiple varieties.',
    wateringNeeds: 'Regular', sunlight: '6-8 hours', season: 'Year-round', difficulty: 'Medium', category: 'Flower',
    uses: ['Ornamental', 'Perfume'], emoji: '🌹', yield: 75,
  },
  {
    id: '8', name: 'Cassava', scientificName: 'Manihot esculenta', description: 'Staple root crop.',
    wateringNeeds: 'Moderate', sunlight: '6+ hours', season: '8-12 months', difficulty: 'Easy', category: 'Root Crop',
    uses: ['Staple', 'Starch'], emoji: '🥬', yield: 87,
  },
];

const difficultyColor: Record<string, string> = {
  Easy: 'from-[#00ff88] to-[#1a8d5e]',
  Medium: 'from-[#d4a574] to-[#ffa500]',
  Hard: 'from-[#ff4444] to-[#cc0000]',
};

export default function Plants() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'yield'>('name');

  const categories = ['Vegetable', 'Herb', 'Flower', 'Fruit', 'Root Crop', 'Leafy Green'];

  let filtered = PLANTS.filter(
    (plant) =>
      (plant.name.toLowerCase().includes(search.toLowerCase()) ||
       plant.scientificName.toLowerCase().includes(search.toLowerCase())) &&
      (!selectedCategory || plant.category === selectedCategory)
  );

  if (sortBy === 'yield') {
    filtered = [...filtered].sort((a, b) => b.yield - a.yield);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] tech-grid relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1a8d5e]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="animate-float-up-animation">
              <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
                <span className="text-[#00d9ff]">{'{'}</span> PLANT DATABASE <span className="text-[#00d9ff]">{'}'}</span>
              </h1>
              <p className="text-xl text-[#b0b0b0] font-light">
                Advanced botanical intelligence network. {filtered.length} entries optimized for Nigerian climate.
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative group">
                  <Search className="absolute left-4 top-4 text-[#00d9ff]" size={20} />
                  <input
                    type="text"
                    placeholder="QUERY DATABASE..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#0f1335]/60 border-2 border-[#00d9ff]/30 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 backdrop-blur-sm transition-all font-mono"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter size={20} className="text-[#d4a574]" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'name' | 'yield')}
                    className="flex-1 px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/30 rounded-lg text-white focus:outline-none focus:border-[#d4a574] backdrop-blur-sm font-mono"
                  >
                    <option value="name">SORT: NAME</option>
                    <option value="yield">SORT: YIELD</option>
                  </select>
                </div>
              </div>

              {/* Category Chips */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-4 py-2 rounded-lg font-bold font-mono text-sm transition-all ${
                    !selectedCategory
                      ? 'bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white shadow-lg shadow-[#00d9ff]/50'
                      : 'glass-pro border-[#d4a574]/50 text-[#b0b0b0] hover:border-[#00d9ff]/50'
                  }`}
                >
                  ALL
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-bold font-mono text-sm transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white shadow-lg shadow-[#00d9ff]/50'
                        : 'glass-pro border-[#d4a574]/50 text-[#b0b0b0] hover:border-[#00d9ff]/50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="relative py-12 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Database size={24} className="text-[#00d9ff]" />
            <p className="text-[#b0b0b0] font-mono text-lg">
              <span className="text-[#1a8d5e] font-bold">{filtered.length}</span> entries loaded
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((plant, idx) => (
              <div
                key={plant.id}
                className="group grid-animation hover-lift"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className={`relative p-6 rounded-xl bg-gradient-to-br ${difficultyColor[plant.difficulty]}/10 border-2 border-[#00d9ff]/40 backdrop-blur-lg hover:border-[#1a8d5e] transition-all duration-500 overflow-hidden scan-line-effect`}>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-[#00d9ff] font-mono text-xs mb-2 font-bold">{plant.category.toUpperCase()}</p>
                        <h3 className="text-3xl font-black text-white font-mono">{plant.name}</h3>
                        <p className="text-[#b0b0b0] italic text-sm font-light mt-1">{plant.scientificName}</p>
                      </div>
                      <div className="text-5xl group-hover:scale-125 transition-transform duration-300">{plant.emoji}</div>
                    </div>

                    <p className="text-[#b0b0b0] text-sm leading-relaxed mb-4 font-light">{plant.description}</p>

                    {/* Yield Meter */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#d4a574] font-bold">YIELD</span>
                        <span className="text-xs font-mono text-[#1a8d5e] font-bold">{plant.yield}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#0f1335]/60 rounded-full overflow-hidden border border-[#d4a574]/30">
                        <div
                          className="h-full bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] transition-all duration-500"
                          style={{ width: `${plant.yield}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs border-t border-[#d4a574]/20 pt-4">
                      <div>
                        <p className="text-[#00d9ff] font-mono font-bold mb-1">WATER</p>
                        <p className="text-[#b0b0b0] font-light">{plant.wateringNeeds}</p>
                      </div>
                      <div>
                        <p className="text-[#1a8d5e] font-mono font-bold mb-1">LIGHT</p>
                        <p className="text-[#b0b0b0] font-light">{plant.sunlight}</p>
                      </div>
                      <div>
                        <p className="text-[#d4a574] font-mono font-bold mb-1">SEASON</p>
                        <p className="text-[#b0b0b0] font-light">{plant.season}</p>
                      </div>
                      <div>
                        <p className="text-[#ff69b4] font-mono font-bold mb-1">DIFFICULTY</p>
                        <p className="text-[#b0b0b0] font-light">{plant.difficulty}</p>
                      </div>
                    </div>

                    {/* Uses Tags */}
                    <div className="flex flex-wrap gap-2">
                      {plant.uses.map((use) => (
                        <span
                          key={use}
                          className="px-3 py-1 bg-[#00d9ff]/20 border border-[#00d9ff]/50 rounded-full text-xs text-[#00d9ff] font-mono font-bold"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-[#00d9ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-px bg-gradient-to-r from-[#1a8d5e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#b0b0b0] text-xl font-mono">// NO MATCHES FOUND</p>
              <p className="text-[#d4a574] text-sm mt-2 font-light">Try different search parameters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
