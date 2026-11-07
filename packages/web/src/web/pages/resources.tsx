import { Calendar, Droplet, Leaf, AlertCircle, CheckCircle, TrendingUp, Gauge, Clock, ArrowRight } from 'lucide-react';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d9ff]/5 to-[#1a8d5e]/10"></div>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-float-up-animation">
          <div className="flex items-center gap-4">
            <Gauge className="text-[#00d9ff]" size={40} />
            <div>
              <p className="text-[#d4a574] font-mono text-sm font-bold">OPERATIONAL DASHBOARD</p>
              <h1 className="text-5xl md:text-6xl font-black text-white font-mono">RESOURCE HUB</h1>
            </div>
          </div>
          <p className="text-[#b0b0b0] text-lg font-light max-w-2xl">
            Complete operational data. Calendar integration, soil specifications, water protocols, and equipment manifesto.
          </p>
        </div>
      </section>

      {/* Planting Calendar */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Calendar className="text-[#1a8d5e]" size={32} />
            <h2 className="text-4xl font-black text-white font-mono">ANNUAL SCHEDULE</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#d4a574]/50">
                  <th className="px-4 py-4 text-left">
                    <span className="text-[#00d9ff] font-mono font-black">MONTH</span>
                  </th>
                  <th className="px-4 py-4 text-left">
                    <span className="text-[#1a8d5e] font-mono font-black">CROPS</span>
                  </th>
                  <th className="px-4 py-4 text-left">
                    <span className="text-[#d4a574] font-mono font-black">SEASON</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { month: 'JANUARY', crops: 'Tomato, Pepper, Spinach, Carrot', season: 'DRY' },
                  { month: 'FEBRUARY', crops: 'Pepper, Onion, Lettuce, Cucumber', season: 'DRY' },
                  { month: 'MARCH', crops: 'Okra, Cassava (prep), Melon', season: 'TRANSITION' },
                  { month: 'APRIL', crops: 'Okra, Cassava, Yam, Cucumber', season: 'WET' },
                  { month: 'MAY', crops: 'Okra, Beans, Maize, Pumpkin', season: 'WET' },
                  { month: 'JUNE', crops: 'Okra, Beans, Leafy greens, Rice', season: 'WET' },
                  { month: 'JULY', crops: 'Okra, Watermelon, Squash', season: 'WET' },
                  { month: 'AUGUST', crops: 'Okra, Melon, Late beans', season: 'WET' },
                  { month: 'SEPTEMBER', crops: 'Cassava, Yam, Leafy greens', season: 'WET' },
                  { month: 'OCTOBER', crops: 'Cassava, Tomato (start), Pepper', season: 'TRANSITION' },
                  { month: 'NOVEMBER', crops: 'Tomato, Pepper, Carrot, Onion', season: 'DRY' },
                  { month: 'DECEMBER', crops: 'Tomato, Pepper, Spinach', season: 'DRY' },
                ].map((row, i) => (
                  <tr
                    key={row.month}
                    className="border-b border-[#2a2f48] hover:bg-[#1a8d5e]/10 transition-all group grid-animation"
                    style={{ animationDelay: `${i * 0.03}s` }}
                  >
                    <td className="px-4 py-4 text-white font-bold font-mono group-hover:text-[#00d9ff] transition-colors">{row.month}</td>
                    <td className="px-4 py-4 text-[#b0b0b0] font-light">{row.crops}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold ${
                          row.season === 'DRY'
                            ? 'bg-[#d4a574]/30 text-[#d4a574]'
                            : row.season === 'WET'
                            ? 'bg-[#00d9ff]/30 text-[#00d9ff]'
                            : 'bg-[#1a8d5e]/30 text-[#1a8d5e]'
                        }`}
                      >
                        {row.season}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Soil Specifications */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-24 z-10 bg-gradient-to-r from-[#1a8d5e]/5 to-transparent">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Leaf className="text-[#d4a574]" size={32} />
            <h2 className="text-4xl font-black text-white font-mono">SOIL MATRIX</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'COMPOSITION',
                specs: [
                  '40% Loamy Soil',
                  '30% Compost/Organic',
                  '20% Sand (drainage)',
                  '10% Mulch Layer',
                ],
              },
              {
                title: 'PREPARATION',
                specs: [
                  'Mix thoroughly before',
                  '5-10kg compost per m²',
                  '2-3kg chicken manure',
                  'Settle: 1-2 weeks',
                ],
              },
              {
                title: 'MAINTENANCE',
                specs: [
                  'Compost every 3-4 mo',
                  'Crop rotation yearly',
                  'Mulch application',
                  'pH test annually',
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="grid-animation p-8 glass-pro border-2 border-[#d4a574]/50 hover:border-[#00d9ff]/80 rounded-xl transition-all hover-lift"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-black text-white font-mono mb-6 text-lg flex items-center gap-2">
                  <span className="text-[#1a8d5e]">{'['}</span>
                  {section.title}
                  <span className="text-[#1a8d5e]">{']'}</span>
                </h3>
                <ul className="space-y-3">
                  {section.specs.map((spec, j) => (
                    <li key={j} className="flex gap-3 text-[#b0b0b0] text-sm font-light">
                      <CheckCircle size={16} className="text-[#1a8d5e] flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Management */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <Droplet className="text-[#00d9ff]" size={32} />
            <h2 className="text-4xl font-black text-white font-mono">HYDRO SYSTEM</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid-animation group p-8 glass-pro-dark border-2 border-[#d4a574]/40 rounded-xl hover:border-[#00d9ff]/80 transition-all hover-lift overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-[#d4a574]" size={28} />
                  <h3 className="text-2xl font-black text-white font-mono">DRY PHASE</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Water: Daily (5-7 AM)',
                    'Depth: Soil moisture check',
                    'Method: Deep, not frequent',
                    'Irrigation: Drip if available',
                    'Mulch: Heavy layer required',
                    'Frequency: Every morning',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#b0b0b0] text-sm font-light">
                      <span className="text-[#1a8d5e] font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-[#d4a574]/20">
                  <TrendingUp className="text-[#00ff88] mb-2" size={20} />
                  <p className="text-xs font-mono text-[#00ff88] font-bold">EFFICIENCY: 70-80%</p>
                </div>
              </div>
            </div>

            <div className="grid-animation group p-8 glass-pro-dark border-2 border-[#d4a574]/40 rounded-xl hover:border-[#1a8d5e]/80 transition-all hover-lift overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="text-[#00d9ff]" size={28} />
                  <h3 className="text-2xl font-black text-white font-mono">WET PHASE</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Water: Reduce frequency',
                    'Drainage: Excellent critical',
                    'Risk: Root rot prevention',
                    'Method: Raised beds preferred',
                    'Monitor: Rainfall patterns',
                    'Action: Clear gutters always',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[#b0b0b0] text-sm font-light">
                      <span className="text-[#00d9ff] font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-[#d4a574]/20">
                  <Gauge className="text-[#ff6b6b] mb-2" size={20} />
                  <p className="text-xs font-mono text-[#ff6b6b] font-bold">RISK LEVEL: MONITOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white font-mono mb-8">EQUIPMENT MANIFEST</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Spade/Shovel', 'Garden Hoe', 'Watering Can', 'Pruning Shears',
              'Rake', 'Pitchfork', 'Gloves', 'Wheelbarrow',
              'Sprayer', 'Garden Fork', 'Measuring Tape', 'Sieve',
            ].map((tool, i) => (
              <div
                key={tool}
                className="grid-animation p-4 glass-pro border-2 border-[#d4a574]/40 rounded-lg text-center hover:border-[#00d9ff] transition-all hover-lift group"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                <p className="text-white font-black font-mono group-hover:text-[#00d9ff] transition-colors">{tool}</p>
                <div className="h-1 w-0 bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] mt-2 mx-auto group-hover:w-full transition-all rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-12 justify-center">
            <button 
              onClick={() => window.location.href = '/plants'}
              className="px-8 py-4 bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white font-black rounded-lg hover:shadow-2xl hover:shadow-[#00d9ff]/50 transition-all cursor-pointer hover:scale-105 transform flex items-center gap-2"
            >
              VIEW 40+ PLANTS <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => window.location.href = '/tips'}
              className="px-8 py-4 border-2 border-[#d4a574] text-[#d4a574] font-black rounded-lg hover:bg-[#d4a574]/10 transition-all cursor-pointer hover:border-[#00d9ff] hover:text-[#00d9ff]"
            >
              GROWING GUIDES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
