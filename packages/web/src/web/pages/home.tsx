import { useState, useEffect } from 'react';
import { ArrowRight, Sprout, Zap, ChevronDown, Leaf, Droplets, Sun, Bug, TrendingUp, Users, BookOpen, Cpu } from 'lucide-react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

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
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] overflow-hidden relative">
      {/* Advanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Massive Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#1a8d5e]/20 to-transparent rounded-full blur-3xl"
          style={{
            top: '-200px',
            left: '-200px',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        ></div>
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#00d9ff]/15 to-transparent rounded-full blur-3xl"
          style={{
            bottom: '-200px',
            right: '-200px',
            animation: 'pulse 8s ease-in-out infinite',
            animationDelay: '2s',
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#d4a574]/10 to-transparent rounded-full blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 10s ease-in-out infinite',
            animationDelay: '4s',
          }}
        ></div>

        {/* Cursor Glow */}
        <div 
          className="absolute w-60 h-60 bg-[#00d9ff]/15 rounded-full blur-3xl pointer-events-none"
          style={{
            left: `${mousePos.x - 120}px`,
            top: `${mousePos.y - 120}px`,
            transition: 'all 0.2s ease-out',
          }}
        ></div>

      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center py-24 px-6 sm:px-12 lg:px-24 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-block">
                <div className="glass-pro px-6 py-3 rounded-full border-2 border-[#00d9ff]/50 hover:border-[#1a8d5e] transition-all group cursor-pointer">
                  <p className="text-[#00d9ff] text-sm font-bold flex items-center gap-2 group-hover:text-[#1a8d5e] transition-colors">
                    <Cpu size={16} /> FUTURISTIC HORTICULTURE v2.0
                  </p>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <div className="relative h-auto">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight transition-all duration-700 whitespace-normal">
                      <span className="gradient-animate text-transparent bg-clip-text">
                        {heroTexts[textIndex]}
                      </span>
                    </h1>
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight text-white">
                      Your Nigeria
                    </h1>
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight neon-text text-[#1a8d5e]">
                      [GARDEN]
                    </h1>
                  </div>
                </div>
              </div>

              {/* Subheading */}
              <div className="space-y-4 max-w-xl">
                <p className="text-2xl font-black text-[#d4a574] glow-gold">
                  Experience the future of tropical gardening
                </p>
                <p className="text-lg text-[#b0b0b0] leading-relaxed font-light">
                  Master horticulture with 40+ scientifically-curated plants, advanced growing protocols, and connect with 2,800+ Nigerian gardeners building the future of food security.
                </p>
                <div className="flex gap-1 text-[#00d9ff] text-sm font-mono pt-4">
                  <span>{'>'}</span>
                  <span className="animate-pulse">SYSTEM READY</span>
                </div>
              </div>

              {/* CTA Buttons - NOW FUNCTIONAL */}
              <div className="flex flex-wrap gap-4 pt-8">
                <button 
                  onClick={() => navigateTo('/plants')}
                  className="btn-cyber group relative px-10 py-5 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] text-white font-bold rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-[#00d9ff]/60 transition-all duration-300 transform hover:scale-110 text-lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    EXPLORE 40+ PLANTS <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button 
                  onClick={() => navigateTo('/tips')}
                  className="group px-10 py-5 border-2 border-[#d4a574] text-[#d4a574] font-bold rounded-xl hover:bg-[#d4a574]/10 hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300 text-lg cyber-border"
                >
                  GROWING GUIDES
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 max-w-md">
                {[
                  { label: '40+', desc: 'PLANTS' },
                  { label: '100%', desc: 'ORGANIC' },
                  { label: '2.8K', desc: 'COMMUNITY' },
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="glass-pro-dark p-4 rounded-lg border border-[#00d9ff]/30 text-center hover-lift group cursor-pointer"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <p className="text-2xl font-black text-[#00ff88] glow-green group-hover:scale-125 transition-transform">{stat.label}</p>
                    <p className="text-xs text-[#b0b0b0] uppercase tracking-wider mt-1 group-hover:text-[#00d9ff] transition-colors">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-h-96">
                {/* Main Visual Card */}
                <div className="absolute inset-0 group cursor-pointer" onClick={() => navigateTo('/plants')}>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden glass-pro border-2 border-[#d4a574]/40 group-hover:border-[#1a8d5e] transition-all duration-500 hover-lift group-hover:shadow-2xl group-hover:shadow-[#1a8d5e]/40">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a8d5e]/30 via-[#00d9ff]/10 to-[#d4a574]/20"></div>

                    {/* Center Content */}
                    <div className="relative w-full h-full flex flex-col items-center justify-center space-y-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="relative">
                        <Sprout size={120} className="text-[#1a8d5e]/60 group-hover:text-[#00d9ff]/80 transition-all duration-500" />
                        <div className="absolute inset-0 bg-[#00d9ff]/20 rounded-full blur-2xl group-hover:blur-3xl transition-all"></div>
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-[#d4a574] font-bold text-lg">THE FUTURE OF FARMING</p>
                        <p className="text-[#b0b0b0] text-sm">Click to explore plants →</p>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-[#1a8d5e] via-[#00d9ff] to-[#d4a574] bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-32 rounded-full border border-[#00d9ff]/20 group-hover:border-[#00d9ff]/60 transition-all duration-500"
                    style={{
                      top: `${20 + i * 30}%`,
                      right: `${-20 + i * 15}%`,
                      animation: `particle-float 6s ease-in-out infinite`,
                      animationDelay: `${i * 1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-[#00d9ff]" size={32} />
          </div>
        </div>
      </section>

      {/* ===== FEATURED SECTION ===== */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 z-10 bg-gradient-to-b from-transparent via-[#1a8d5e]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-6xl font-black text-white">
                <span className="text-[#00d9ff]">{'<'}</span> Featured System <span className="text-[#00d9ff]">{'/>'}</span>
              </h2>
              <p className="text-xl text-[#b0b0b0] font-light">Next-generation plants optimized for Nigerian climate</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'MORINGA.ai', desc: 'Superfood Intelligence', icon: '🌿', path: '/plants', color: 'border-[#1a8d5e]' },
                { name: 'HIBISCUS.flora', desc: 'Flower Excellence', icon: '🌺', path: '/plants', color: 'border-[#ff69b4]' },
                { name: 'HARVEST.pro', desc: 'Fruit Maximization', icon: '🧡', path: '/plants', color: 'border-[#ffa500]' },
              ].map((plant, i) => (
                <button
                  key={i}
                  onClick={() => navigateTo(plant.path)}
                  className={`group relative p-8 rounded-xl bg-[#0f1335]/80 border-2 ${plant.color} backdrop-blur-lg hover-lift transition-all duration-500 overflow-hidden text-left hover:border-[#00d9ff] cursor-pointer`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 group-hover:scale-150 transition-transform duration-300">{plant.icon}</div>
                    <h3 className="text-2xl font-black text-white font-mono mb-2">{plant.name}</h3>
                    <p className="text-[#b0b0b0] font-light">{plant.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#00d9ff] font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="h-1 w-8 bg-[#00d9ff]"></span>
                      EXPLORE
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-12 text-center">
            <span className="text-[#1a8d5e]">{'>_'}</span> Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: 'GUIDES', desc: '6 advanced protocols', action: '/tips', color: 'from-[#00d9ff]' },
              { icon: Droplets, title: 'HYDRATION', desc: 'Smart watering systems', action: '/resources', color: 'from-[#1a8d5e]' },
              { icon: Users, title: 'COMMUNITY', desc: '2,800+ gardeners', action: '/community', color: 'from-[#d4a574]' },
              { icon: Sun, title: 'RESOURCES', desc: 'Calendar & specs', action: '/resources', color: 'from-[#00ff88]' },
              { icon: Bug, title: 'PROTECTION', desc: 'Organic defense', action: '/tips', color: 'from-[#ff69b4]' },
              { icon: TrendingUp, title: 'OPTIMIZATION', desc: 'Yield maximization', action: '/plants', color: 'from-[#ffa500]' },
            ].map((feature, i) => (
              <button
                key={i}
                onClick={() => navigateTo(feature.action)}
                className={`group p-6 rounded-lg glass-pro border-2 border-[#d4a574]/40 hover:border-[#00d9ff] transition-all hover-lift cursor-pointer text-left`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`p-4 w-fit rounded-lg bg-gradient-to-br ${feature.color} to-transparent mb-4 group-hover:scale-125 transition-transform`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#00d9ff] transition-colors">{feature.title}</h3>
                <p className="text-[#b0b0b0] text-sm font-light">{feature.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-pro-dark p-12 rounded-2xl border-2 border-[#00d9ff]/50 hover:border-[#1a8d5e] transition-all duration-300 text-center space-y-8">
            <p className="text-[#00d9ff] font-mono text-sm animate-pulse">// INITIATING PHASE SHIFT</p>
            <h2 className="text-5xl font-black text-white neon-text">
              READY FOR LAUNCH?
            </h2>
            <p className="text-[#b0b0b0] text-xl max-w-2xl mx-auto font-light">
              Step into the future of Nigerian horticulture. Access cutting-edge guides, explore 40+ plants, and connect with our thriving community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button 
                onClick={() => navigateTo('/plants')}
                className="btn-cyber px-12 py-5 bg-gradient-to-r from-[#00d9ff] to-[#1a8d5e] text-[#0a0e27] font-black text-lg rounded-lg hover:shadow-2xl hover:shadow-[#00d9ff]/60 transition-all transform hover:scale-110 cursor-pointer"
              >
                ENTER NEXUS →
              </button>
              <button 
                onClick={() => navigateTo('/community')}
                className="px-12 py-5 border-2 border-[#d4a574] text-[#d4a574] font-black rounded-lg hover:bg-[#d4a574]/10 hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all cursor-pointer"
              >
                JOIN COMMUNITY
              </button>
            </div>
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
