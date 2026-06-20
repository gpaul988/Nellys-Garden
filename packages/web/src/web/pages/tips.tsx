import { Droplets, Sun, Bug, Zap, Calendar, Wind } from 'lucide-react';

const tips = [
  {
    icon: Droplets,
    title: 'Watering Guide',
    description: 'Nigeria\'s tropical climate means regular watering, especially in dry season.',
    tips: [
      'Water early morning (5-7 AM) to reduce evaporation',
      'Check soil moisture 2-3 inches deep before watering',
      'During dry season, water daily or every other day',
      'Use mulch (grass, leaves) to retain moisture',
      'Drip irrigation is most efficient for vegetables',
      'Reduce watering during rainy season (avoid root rot)',
    ],
  },
  {
    icon: Sun,
    title: 'Sunlight & Positioning',
    description: 'Understanding light needs is crucial for Nigerian gardens.',
    tips: [
      'Most crops need 6-8 hours of direct sunlight daily',
      'Leafy greens tolerate 4-6 hours (partial shade beneficial in extreme heat)',
      'Position garden to catch morning sun, afternoon shade in hot season',
      'Taller plants (tomatoes, pepper) can shade shorter ones in afternoon',
      'Use shade cloth (30-50%) during peak hot season (March-April)',
      'Rotate planting positions seasonally to maximize sun exposure',
    ],
  },
  {
    icon: Bug,
    title: 'Pest & Disease Control',
    description: 'Use organic, sustainable methods for Nigerian gardens.',
    tips: [
      'Plant neem trees around the garden for natural pest control',
      'Neem oil spray kills aphids, mites, and scale insects',
      'Companion planting: marigold with vegetables repels pests',
      'Hand-pick large pests (caterpillars, beetles) daily',
      'Avoid pesticides; use soap spray (detergent + water) for soft-bodied insects',
      'Inspect plants weekly; early detection prevents spread',
    ],
  },
  {
    icon: Zap,
    title: 'Soil Preparation',
    description: 'Good soil is the foundation of healthy plants.',
    tips: [
      'Nigerian soils vary; add compost to improve fertility',
      'Mix loamy soil with organic matter (cow dung, compost) in 2:1 ratio',
      'Avoid waterlogged soil; ensure good drainage',
      'pH 6.0-7.0 ideal for most crops; test if possible',
      'Add chicken manure or compost before planting',
      'Rotate crops yearly to avoid soil depletion',
    ],
  },
  {
    icon: Calendar,
    title: 'Seasonal Planting Calendar',
    description: 'Timing is everything in tropical gardening.',
    tips: [
      'Dry Season (Nov-Mar): Tomato, pepper, spinach, carrot, onion',
      'Wet Season (Apr-Oct): Okra, cassava, melon, cucumber, yam',
      'Year-round: Moringa, neem, bitter leaf, ginger (start), herbs',
      'Avoid planting during peak heat (Mar-Apr) without shade',
      'Start from seeds 4-6 weeks before wet season for vegetables',
      'Early planting = better establishment before rains',
    ],
  },
  {
    icon: Wind,
    title: 'Weather Adaptations',
    description: 'Handle Nigeria\'s climate challenges effectively.',
    tips: [
      'During harmattan (dry wind), increase watering frequency',
      'Heavy rains: Ensure raised beds or mounds prevent waterlogging',
      'Wind breaks: Plant tall crops (maize, cassava) to shield tender plants',
      'Mulching prevents soil erosion during torrential rains',
      'Cover crops during off-season to prevent erosion and boost soil',
      'Monitor weather; adjust watering based on rainfall',
    ],
  },
];

export default function Tips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Growing Tips for Nigeria</h1>
          <p className="text-[#b0b0b0] text-lg">
            Master the art of gardening in our tropical climate with expert tips and techniques.
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((section, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg bg-white/5 border border-[#d4a574]/20 backdrop-blur-sm hover:bg-white/10 hover:border-[#00d9ff]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <section.icon className="text-[#00d9ff] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  <p className="text-[#b0b0b0] text-sm mt-1">{section.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-[#b0b0b0] text-sm">
                    <span className="text-[#1a8d5e] font-bold flex-shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#1a8d5e]/10 to-[#00d9ff]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'When is the best time to start a garden in Nigeria?',
                a: 'The dry season (November to March) is ideal for cool-season crops like tomato and pepper. Wet season (April-October) is best for leafy greens and root crops.',
              },
              {
                q: 'How do I prevent waterlogging in my garden?',
                a: 'Use raised beds, ensure good drainage, add organic matter to improve soil structure, and avoid planting in depressions where water collects.',
              },
              {
                q: 'Can I grow year-round in Nigeria?',
                a: 'Yes! Use shade cloth in hot months, adjust watering based on season, and choose crops suited to each season. Perennials like moringa and neem grow year-round.',
              },
              {
                q: 'How often should I fertilize my crops?',
                a: 'Every 2-3 weeks during growth. Use compost or organic manure. Avoid chemical fertilizers; they degrade soil over time.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-[#b0b0b0]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
