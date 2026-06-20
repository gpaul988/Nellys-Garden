import { useState, useEffect } from 'react';
import { ArrowRight, Sprout, Zap, Github, Cpu } from 'lucide-react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);

  const heroTexts = ['Grow', 'Cultivate', 'Harvest', 'Transform'];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] tech-grid overflow-hidden relative">
      {/* Advanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#1a8d5e]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Glitch Lines */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d9ff]/20 to-transparent" style={{ animation: 'scan-line 4s linear infinite' }}></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1a8d5e]/20 to-transparent" style={{ animation: 'scan-line 5s linear infinite', animationDelay: '2s' }}></div>

        {/* Cursor Glow */}
        <div 
          className="absolute w-40 h-40 bg-[#00d9ff]/10 rounded-full blur-3xl pointer-events-none"
          style={{
            left: `${mousePos.x - 80}px`,
            top: `${mousePos.y - 80}px`,
            transition: 'all 0.3s ease-out',
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 pt-40 z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-8 animate-fade-in">
            {/* Top Badge */}
            <div className="inline-block animate-float-up-animation">
              <div className="glass-pro px-6 py-3 rounded-full border border-[#00d9ff]/50">
                <p className="text-[#00d9ff] text-sm font-bold flex items-center gap-2">
                  <Cpu size={16} /> FUTURISTIC HORTICULTURE V2.0
                </p>
              </div>
            </div>

            {/* Main Headline with Animation */}
            <div className="space-y-4">
              <div className="text-7xl sm:text-8xl font-black leading-tight h-24">
                <div className="gradient-animate">
                  {heroTexts[textIndex]} Your Nigeria
                </div>
              </div>
              <h1 className="text-6xl sm:text-7xl font-black text-white leading-tight">
                Garden <span className="neon-text">[NEXUS]</span>
              </h1>
            </div>

            {/* Subheading */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-xl text-[#b0b0b0] leading-relaxed font-light">
                Experience the evolution of tropical gardening. Harness AI-powered insights, access 40+ scientifically-curated plants, and join a revolution of Nigerian horticulturists building the future of food security.
              </p>
              <div className="flex gap-1 text-[#00d9ff] text-sm font-mono">
                <span>{'>'}</span>
                <span className="animate-pulse">ONLINE</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <button className="btn-cyber group relative px-10 py-4 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] text-white font-bold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#00d9ff]/60 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  INITIALIZE GARDEN <ArrowRight size={20} />
                </span>
              </button>
              <button className="group px-10 py-4 border-2 border-[#d4a574] text-[#d4a574] font-bold rounded-lg hover:bg-[#d4a574]/10 transition-all duration-300 cyber-border">
                DOCUMENTATION
              </button>
            </div>

            {/* Tech Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md pt-12">
              {[
                { label: '40+', desc: 'PLANTS' },
                { label: '100%', desc: 'ORGANIC' },
                { label: '2.8K', desc: 'GARDENERS' },
              ].map((stat, i) => (
                <div key={i} className="glass-pro-dark p-4 rounded-lg border border-[#00d9ff]/30 text-center hover-lift" style={{ animationDelay: `${i * 0.1}s` }}>
                  <p className="text-2xl font-black text-[#00ff88] glow-green">{stat.label}</p>
                  <p className="text-xs text-[#b0b0b0] uppercase tracking-wider mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-4">
            <span className="text-[#00d9ff]">{'<'}</span> Featured Ecosystem <span className="text-[#00d9ff]">{'/>'}</span>
          </h2>
          <p className="text-[#b0b0b0] mb-12 text-lg font-light">Next-generation plants designed for tropical dominance</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'MORINGA.ai', desc: 'Superfood Intelligence', icon: '🌿', color: 'border-[#1a8d5e]' },
              { name: 'NEXUS.flora', desc: 'Flower Analytics', icon: '🌺', color: 'border-[#ff69b4]' },
              { name: 'HARVEST.pro', desc: 'Fruit Maximization', icon: '🧡', color: 'border-[#ffa500]' },
            ].map((plant, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-xl bg-[#0f1335]/80 border-2 ${plant.color} backdrop-blur-lg hover-lift scan-line-effect transition-all duration-500 overflow-hidden`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-150 transition-transform duration-300">{plant.icon}</div>
                  <h3 className="text-2xl font-black text-white font-mono mb-2">{plant.name}</h3>
                  <p className="text-[#b0b0b0] font-light">{plant.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-[#00d9ff] font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="h-1 w-8 bg-[#00d9ff]"></span>
                    ACTIVE
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Section */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 z-10 bg-gradient-to-r from-[#1a8d5e]/5 to-[#00d9ff]/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-12">
            <span className="text-[#1a8d5e]">{'>_'}</span> System Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: Sprout, title: 'CULTIVATION', value: '40+' },
              { icon: Zap, title: 'OPTIMIZATION', value: '100%' },
              { icon: Cpu, title: 'PROCESSING', value: '2.8K' },
              { icon: ArrowRight, title: 'EXPANSION', value: '∞' },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-lg glass-pro border border-[#d4a574]/40 hover:border-[#00d9ff]/80 transition-all duration-300 hover-lift text-center"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#00d9ff] group-hover:text-[#1a8d5e] transition-colors" />
                <p className="text-sm font-mono text-[#d4a574] group-hover:text-[#00d9ff] transition-colors font-bold">{item.title}</p>
                <p className="text-3xl font-black text-white mt-2 gradient-animate">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-pro-dark p-12 rounded-2xl border-2 border-[#00d9ff]/50 hover:border-[#1a8d5e] transition-all duration-300">
            <p className="text-[#00d9ff] font-mono text-sm mb-4 animate-pulse">// INITIATING PHASE SHIFT</p>
            <h2 className="text-5xl font-black text-white mb-6 neon-text">
              READY FOR LAUNCH?
            </h2>
            <p className="text-[#b0b0b0] text-xl mb-8 max-w-2xl mx-auto font-light">
              Step into the future of Nigerian horticulture. Access cutting-edge growing guides, plant analytics, and connect with the community.
            </p>
            <button className="btn-cyber px-12 py-5 bg-gradient-to-r from-[#00d9ff] to-[#1a8d5e] text-[#0a0e27] font-black text-lg rounded-lg hover:shadow-2xl hover:shadow-[#00d9ff]/60 transition-all transform hover:scale-110">
              ENTER NEXUS →
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
}
