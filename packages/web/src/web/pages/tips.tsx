import { Droplets, Sun, Bug, Zap, Calendar, Wind, BarChart3, Activity } from 'lucide-react';

const tips = [
  {
    icon: Droplets,
    title: 'HYDRATION PROTOCOL',
    category: 'WATER',
    color: 'from-[#00d9ff]',
    tips: [
      'Water 5-7 AM (minimum evaporation)',
      '2-3 inches depth weekly in dry season',
      'Soil moisture 2-3 inches critical',
      'Mulch retention: 70% water savings',
      'Drip irrigation: 95% efficiency',
      'Rain season: reduce 60%',
    ],
  },
  {
    icon: Sun,
    title: 'PHOTOSYNTHESIS OPTIMIZATION',
    category: 'LIGHT',
    color: 'from-[#1a8d5e]',
    tips: [
      '6-8 hours direct sunlight daily',
      'Shade cloth: 30-50% in peak heat',
      'Morning sun: 75% growth boost',
      'Afternoon shade: heat stress -40%',
      'Position optimization: north-south axis',
      'Season adjustment: dynamic positioning',
    ],
  },
  {
    icon: Bug,
    title: 'BIO-DEFENSE SYSTEM',
    category: 'PROTECTION',
    color: 'from-[#ff69b4]',
    tips: [
      'Neem oil spray: 98% pest elimination',
      'Marigold companions: barrier creation',
      'Weekly inspections: early detection',
      'Hand removal: 0% chemical impact',
      'Companion planting: ecosystem defense',
      'Organic only: soil health +100%',
    ],
  },
  {
    icon: Zap,
    title: 'SOIL ENGINEERING',
    category: 'FOUNDATION',
    color: 'from-[#d4a574]',
    tips: [
      '40% loamy + 30% compost + 20% sand',
      'pH range: 6.0-7.0 optimal',
      '5-10kg compost per m² baseline',
      'Chicken manure: 2-3kg per m²',
      'Crop rotation: nutrient cycling',
      'Test annually: precision farming',
    ],
  },
  {
    icon: Calendar,
    title: 'TEMPORAL SEQUENCING',
    category: 'TIMING',
    color: 'from-[#00ff88]',
    tips: [
      'Dry season (Nov-Mar): tomato, pepper',
      'Wet season (Apr-Oct): okra, leafy greens',
      'Year-round: moringa, neem, herbs',
      '4-6 weeks pre-season: seed starting',
      'Succession planting: continuous yield',
      'Lunar tracking: traditional optimization',
    ],
  },
  {
    icon: Wind,
    title: 'CLIMATE ADAPTATION',
    category: 'WEATHER',
    color: 'from-[#ff6b6b]',
    tips: [
      'Harmattan winds: increase watering 40%',
      'Torrential rains: raised beds mandatory',
      'Wind breaks: 6ft barriers effective',
      'Mulching: erosion prevention 100%',
      'Cover crops: soil protection',
      'Weather monitoring: predictive farming',
    ],
  },
];

export default function Tips() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] tech-grid relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a8d5e]/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00d9ff]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1a8d5e]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 animate-float-up-animation">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg glass-pro border-2 border-[#00d9ff]/50 flex items-center justify-center">
                <Activity className="text-[#00d9ff]" size={32} />
              </div>
              <div>
                <p className="text-[#00d9ff] font-mono text-sm font-bold">EXPERT SYSTEMS</p>
                <h1 className="text-5xl md:text-6xl font-black text-white">
                  CULTIVATION MATRIX
                </h1>
              </div>
            </div>
            <p className="text-[#b0b0b0] text-lg font-light max-w-2xl">
              Advanced agricultural intelligence. Six optimization protocols for maximum yield in Nigerian climate zones.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="relative py-12 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((section, idx) => (
              <div
                key={idx}
                className="group grid-animation hover-lift"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative p-8 rounded-xl glass-pro-dark border-2 border-[#d4a574]/40 group-hover:border-[#00d9ff]/80 transition-all duration-500 overflow-hidden scan-line-effect">
                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} to-transparent`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${section.color} to-transparent`}>
                        <section.icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#d4a574] font-mono text-xs font-bold tracking-wider">{section.category}</p>
                        <h2 className="text-2xl font-black text-white font-mono group-hover:text-[#00d9ff] transition-colors">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Tips List */}
                    <div className="space-y-3 mb-6">
                      {section.tips.map((tip, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="text-[#00d9ff] font-bold text-sm flex-shrink-0 mt-0.5">›</div>
                          <div>
                            <p className="text-[#b0b0b0] text-sm font-light leading-relaxed">{tip}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer Meter */}
                    <div className="pt-6 border-t border-[#d4a574]/20 flex items-center justify-between">
                      <div className="text-xs font-mono text-[#b0b0b0]">IMPACT LEVEL</div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`w-2 h-6 rounded-sm ${i <= 5 ? 'bg-gradient-to-t from-[#1a8d5e] to-[#00d9ff]' : 'bg-[#2a2f48]'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner Brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#00d9ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#1a8d5e] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 z-10 bg-gradient-to-r from-[#1a8d5e]/5 to-[#00d9ff]/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <BarChart3 className="text-[#d4a574]" size={32} />
            <h2 className="text-4xl font-black text-white font-mono">FAQ PROTOCOL</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'OPTIMAL WATERING FREQUENCY?',
                a: 'Dry season: daily. Wet season: every 2-3 days. Always check soil moisture 2-3 inches deep first.',
              },
              {
                q: 'BEST STARTING TIME?',
                a: 'Dry season (Nov-Mar) for cool-weather crops. Wet season (Apr-Oct) for tropical vegetables. Year-round for perennials.',
              },
              {
                q: 'ORGANIC PEST ELIMINATION?',
                a: 'Neem oil spray weekly, companion planting (marigold), hand removal, and water spray for soft-bodied insects.',
              },
              {
                q: 'SOIL PH IMPORTANCE?',
                a: '6.0-7.0 is optimal. Test annually. Add lime if too acidic, sulfur if too alkaline. Adjust gradually.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="group grid-animation p-6 glass-pro border-2 border-[#d4a574]/40 group-hover:border-[#1a8d5e] rounded-lg transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-lg font-black text-white font-mono mb-2 group-hover:text-[#00d9ff] transition-colors">
                  {'>'} {faq.q}
                </h3>
                <p className="text-[#b0b0b0] font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
