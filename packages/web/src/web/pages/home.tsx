import { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Droplets, Sun, AlertCircle, Sprout, Zap } from 'lucide-react';

export default function Home() {
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    if (animatedCount < 40) {
      const timer = setTimeout(() => setAnimatedCount(animatedCount + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [animatedCount]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1a8d5e]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#d4a574]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 pt-32 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#1a8d5e]/20 to-[#00d9ff]/20 border border-[#00d9ff]/40 rounded-full">
                <p className="text-[#00d9ff] text-sm font-semibold">🌱 Nigerian Horticulture Revolution</p>
              </div>
              <h1 className="text-6xl sm:text-7xl font-black text-white leading-tight mb-4 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] bg-clip-text text-transparent">
                Grow Your Nigeria Garden
              </h1>
              <p className="text-xl text-[#b0b0b0] leading-relaxed">
                Master futuristic tropical horticulture with {animatedCount < 40 ? animatedCount : '40'}+ plants, climate-smart tips, and a thriving Nigerian gardening community.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#1a8d5e] to-[#00ff88] hover:from-[#158550] hover:to-[#00dd77] text-white rounded-lg font-bold flex items-center gap-2 transition-all duration-300 hover:shadow-2xl hover:shadow-[#00ff88]/40 transform hover:scale-105">
                Explore All Plants <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-[#d4a574] text-[#d4a574] hover:text-white hover:border-white hover:bg-white/5 rounded-lg font-bold transition-all duration-300 backdrop-blur-sm">
                View Guides
              </button>
            </div>
          </div>

          {/* 3D-like Card */}
          <div className="relative h-96 rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a8d5e]/30 to-[#00d9ff]/20 backdrop-blur-lg border border-[#d4a574]/30 flex items-center justify-center group-hover:border-[#00d9ff]/60 transition-all duration-500 shadow-2xl shadow-[#00d9ff]/20">
              <div className="text-center">
                <Sprout size={120} className="text-[#1a8d5e]/60 mx-auto mb-4 group-hover:text-[#00d9ff]/80 transition-colors" />
                <p className="text-[#d4a574] font-bold text-lg">The Future of Farming</p>
              </div>
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#1a8d5e] via-[#00d9ff] to-[#d4a574] bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-[#00d9ff] text-sm font-bold uppercase tracking-wider">Popular Choices</span>
            <h2 className="text-5xl font-black text-white mb-2 bg-gradient-to-r from-white to-[#b0b0b0] bg-clip-text text-transparent">
              Featured Nigerian Plants
            </h2>
            <p className="text-[#b0b0b0] text-lg">Start with plants that thrive in our climate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Moringa', desc: 'Superfood tree with year-round nutrition', icon: '🌿', color: 'from-[#1a8d5e]' },
              { name: 'Hibiscus Flower', desc: 'Stunning blooms & herbal tea', icon: '🌺', color: 'from-[#ff69b4]' },
              { name: 'Pawpaw', desc: 'Fast-growing tropical fruit', icon: '🧡', color: 'from-[#ffa500]' },
            ].map((plant) => (
              <div
                key={plant.name}
                className={`group relative p-6 rounded-xl bg-gradient-to-br ${plant.color} to-transparent opacity-20 border border-[#d4a574]/30 backdrop-blur-sm hover:opacity-100 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{plant.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plant.name}</h3>
                  <p className="text-[#b0b0b0] group-hover:text-white transition-colors">{plant.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 relative z-10 bg-gradient-to-r from-[#1a8d5e]/5 to-[#00d9ff]/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">Gardening Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplets, title: 'Water Daily', desc: 'Early mornings (5-7 AM) prevent evaporation' },
              { icon: Sun, title: 'Sunlight Critical', desc: '6-8 hours for most crops, shade cloth in peak heat' },
              { icon: AlertCircle, title: 'Pest Management', desc: 'Neem spray, companion planting, no chemicals' },
              { icon: Leaf, title: 'Rich Soil', desc: 'Mix loamy soil + compost + organic matter' },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-lg bg-white/5 border border-[#d4a574]/30 backdrop-blur-sm hover:bg-white/10 hover:border-[#00d9ff]/60 hover:shadow-lg hover:shadow-[#00d9ff]/20 transition-all duration-300"
              >
                <item.icon className="text-[#00d9ff] mb-4 group-hover:scale-125 transition-transform group-hover:text-[#1a8d5e]" size={36} />
                <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-[#b0b0b0] group-hover:text-white transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '40+', label: 'Plants & Flowers', icon: '🌱' },
            { number: '2.8K+', label: 'Active Gardeners', icon: '👥' },
            { number: '6', label: 'Growing Guides', icon: '📚' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-xl bg-gradient-to-br from-[#1a8d5e]/10 to-[#00d9ff]/10 border border-[#d4a574]/20 hover:border-[#00d9ff]/60 transition-all group">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <p className="text-5xl font-black text-transparent bg-gradient-to-r from-[#00ff88] to-[#00d9ff] bg-clip-text mb-2">
                {stat.number}
              </p>
              <p className="text-[#b0b0b0] text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-r from-[#1a8d5e]/20 to-[#00d9ff]/20 border-2 border-[#d4a574]/40 backdrop-blur-lg">
          <Zap className="mx-auto mb-6 text-[#d4a574]" size={48} />
          <h2 className="text-5xl font-black text-white mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-[#b0b0b0] mb-8 text-xl leading-relaxed">
            Join thousands of Nigerian gardeners mastering tropical horticulture with expert guides and community support.
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] text-white rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 transform hover:scale-105">
            Explore 40+ Plants Now →
          </button>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
