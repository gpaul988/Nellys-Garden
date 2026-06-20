import { useState } from 'react';
import { ArrowRight, Leaf, Droplets, Sun, AlertCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 pt-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
                Grow Your Nigeria{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a8d5e] to-[#00ff88]">
                  Garden
                </span>
              </h1>
              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                Master tropical horticulture with indigenous plants, climate-smart tips, and a community of Nigerian gardeners.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[#1a8d5e] hover:bg-[#158550] text-white rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:shadow-lg hover:shadow-[#00d9ff]/20">
                Explore Plants <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 border border-[#d4a574] text-[#d4a574] hover:text-white hover:border-white rounded-lg font-semibold transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a8d5e]/30 to-[#00d9ff]/20 backdrop-blur-sm border border-[#d4a574]/20 flex items-center justify-center">
              <Leaf size={120} className="text-[#1a8d5e]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Featured Nigerian Plants</h2>
            <p className="text-[#b0b0b0]">Start with plants that thrive in our climate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Moringa', desc: 'Nutrient-rich superfood', icon: '🌿' },
              { name: 'Neem', desc: 'Natural pest control powerhouse', icon: '🌳' },
              { name: 'Cassava', desc: 'Staple crop, easy to grow', icon: '🥬' },
            ].map((plant) => (
              <div
                key={plant.name}
                className="p-6 rounded-lg bg-white/5 border border-[#d4a574]/20 backdrop-blur-sm hover:bg-white/10 hover:border-[#00d9ff]/40 hover:shadow-lg hover:shadow-[#00d9ff]/10 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4">{plant.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{plant.name}</h3>
                <p className="text-[#b0b0b0]">{plant.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#1a8d5e]/10 to-[#00d9ff]/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">Gardening Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Droplets, title: 'Watering', desc: 'Daily in dry season, monitor soil moisture' },
              { icon: Sun, title: 'Sunlight', desc: '6-8 hours daily for most crops' },
              { icon: AlertCircle, title: 'Pests', desc: 'Use neem oil, companion planting' },
              { icon: Leaf, title: 'Soil', desc: 'Rich, well-draining loamy soil preferred' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-white/5 border border-[#2a2f48]">
                <item.icon className="text-[#00d9ff] mb-3" size={32} />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#b0b0b0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Gardening?</h2>
          <p className="text-[#b0b0b0] mb-8 text-lg">
            Join our community and access complete guides for Nigerian gardening.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#1a8d5e] to-[#00ff88] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all duration-200">
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
}
