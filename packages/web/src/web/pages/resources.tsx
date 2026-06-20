import { Calendar, Droplet, Leaf, AlertCircle, CheckCircle } from 'lucide-react';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Garden Resources</h1>
          <p className="text-[#b0b0b0] text-lg">
            Essential guides, tools, and information for Nigerian gardeners.
          </p>
        </div>
      </section>

      {/* Planting Calendar */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-[#00d9ff]" size={32} />
            <h2 className="text-3xl font-bold text-white">Annual Planting Calendar</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#2a2f48]">
                  <th className="px-4 py-3 text-left text-[#d4a574] font-semibold">Month</th>
                  <th className="px-4 py-3 text-left text-[#d4a574] font-semibold">Best Crops</th>
                  <th className="px-4 py-3 text-left text-[#d4a574] font-semibold">Season</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { month: 'January', crops: 'Tomato, Pepper, Spinach, Carrot', season: 'Dry' },
                  { month: 'February', crops: 'Pepper, Onion, Lettuce, Cucumber', season: 'Dry' },
                  { month: 'March', crops: 'Okra, Cassava (prep), Melon', season: 'Dry→Wet' },
                  { month: 'April', crops: 'Okra, Cassava, Yam, Cucumber', season: 'Wet' },
                  { month: 'May', crops: 'Okra, Beans, Maize, Pumpkin', season: 'Wet' },
                  { month: 'June', crops: 'Okra, Beans, Leafy greens, Rice', season: 'Wet' },
                  { month: 'July', crops: 'Okra, Watermelon, Squash', season: 'Wet' },
                  { month: 'August', crops: 'Okra, Melon, Late beans', season: 'Wet' },
                  { month: 'September', crops: 'Cassava, Yam, Leafy greens', season: 'Wet' },
                  { month: 'October', crops: 'Cassava, Tomato (start), Pepper (start)', season: 'Wet→Dry' },
                  { month: 'November', crops: 'Tomato, Pepper, Carrot, Onion', season: 'Dry' },
                  { month: 'December', crops: 'Tomato, Pepper, Spinach, Lettuce', season: 'Dry' },
                ].map((row) => (
                  <tr key={row.month} className="border-b border-[#2a2f48] hover:bg-white/5">
                    <td className="px-4 py-3 text-white font-semibold">{row.month}</td>
                    <td className="px-4 py-3 text-[#b0b0b0]">{row.crops}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        row.season === 'Dry' 
                          ? 'bg-[#d4a574]/20 text-[#d4a574]' 
                          : 'bg-[#00d9ff]/20 text-[#00d9ff]'
                      }`}>
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

      {/* Soil Guide */}
      <section className="py-12 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#1a8d5e]/10 to-[#00d9ff]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Leaf className="text-[#1a8d5e]" size={32} />
            <h2 className="text-3xl font-bold text-white">Soil Guide for Nigeria</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ideal Soil Mix',
                items: [
                  '40% Loamy soil',
                  '30% Compost/Organic matter',
                  '20% Sand (for drainage)',
                  '10% Mulch (grass, leaves)',
                ],
              },
              {
                title: 'Soil Preparation',
                items: [
                  'Mix thoroughly before planting',
                  'Add 5-10kg compost per m²',
                  'Add chicken manure (2-3kg per m²)',
                  'Let settle for 1-2 weeks',
                ],
              },
              {
                title: 'Maintenance',
                items: [
                  'Add compost every 3-4 months',
                  'Rotate crops yearly',
                  'Mulch to prevent erosion',
                  'Test pH annually if possible',
                ],
              },
            ].map((section, i) => (
              <div key={i} className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg">
                <h3 className="font-semibold text-white mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-[#b0b0b0] text-sm">
                      <CheckCircle size={16} className="text-[#1a8d5e] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Management */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Droplet className="text-[#00d9ff]" size={32} />
            <h2 className="text-3xl font-bold text-white">Water Management</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#d4a574]">Dry Season</span> (Nov-Mar)
              </h3>
              <ul className="space-y-2 text-[#b0b0b0] text-sm">
                <li>• Water daily (morning 5-7 AM)</li>
                <li>• Check soil moisture before watering</li>
                <li>• Water deeply, not frequently</li>
                <li>• Use drip irrigation if available</li>
                <li>• Heavy mulching to retain moisture</li>
                <li>• Increase shade cloth usage</li>
              </ul>
            </div>
            <div className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg">
              <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#00d9ff]">Wet Season</span> (Apr-Oct)
              </h3>
              <ul className="space-y-2 text-[#b0b0b0] text-sm">
                <li>• Reduce watering frequency</li>
                <li>• Ensure excellent drainage</li>
                <li>• Avoid waterlogging (root rot risk)</li>
                <li>• Use raised beds in low areas</li>
                <li>• Monitor rainfall patterns</li>
                <li>• Clear gutters for water flow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Equipment */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Essential Garden Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Spade/Shovel',
              'Garden hoe',
              'Watering can',
              'Pruning shears',
              'Rake',
              'Pitchfork',
              'Gloves',
              'Wheelbarrow',
              'Sprayer (for pesticide)',
              'Garden fork',
              'Measuring tape',
              'Sieve (for soil)',
            ].map((tool) => (
              <div key={tool} className="p-4 bg-white/5 border border-[#2a2f48] rounded-lg text-center">
                <p className="text-white font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
