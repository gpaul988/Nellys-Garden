import { Heart, Share2, MessageSquare, Zap, TrendingUp, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { StoryModal } from '../components/story-modal';

interface Story {
  id: string;
  author: string;
  location: string;
  title: string;
  description: string;
  status: 'ACTIVE' | 'VERIFIED';
}

export default function Community() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('/api/stories');
        if (response.ok) {
          const data = await response.json();
          setStories(data);
        }
      } catch (error) {
        console.error('Failed to fetch stories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
    // Refresh stories every 5 seconds
    const interval = setInterval(fetchStories, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] overflow-hidden relative">
      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-float-up-animation">
          <div className="flex items-center gap-4">
            <Users className="text-[#1a8d5e]" size={40} />
            <div>
              <p className="text-[#00d9ff] font-mono text-sm font-bold">SOCIAL NETWORK</p>
              <h1 className="text-5xl md:text-6xl font-black text-white font-mono">GARDENER NEXUS</h1>
            </div>
          </div>
          <p className="text-[#b0b0b0] text-lg font-light max-w-2xl">
            Connected gardeners. Shared victories. Real-time cultivation telemetry. 2,800+ nodes active.
          </p>
          <button 
            onClick={() => setStoryModalOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white rounded-lg font-black hover:shadow-2xl hover:shadow-[#00d9ff]/50 transition-all btn-cyber cursor-pointer hover:scale-105 transform"
          >
            SHARE YOUR STORY
          </button>
        </div>
      </section>

      {/* Feed */}
      <section className="relative py-12 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="text-[#d4a574]" size={24} />
            <p className="text-[#b0b0b0] font-mono">
              <span className="text-[#1a8d5e] font-bold">{stories.length}</span> active transmissions
            </p>
          </div>

          {loading ? (
            <div className="p-8 glass-pro-dark border-2 border-[#d4a574]/40 rounded-xl text-center">
              <p className="text-[#b0b0b0] font-mono">LOADING STORIES...</p>
            </div>
          ) : stories.length === 0 ? (
            <div className="p-8 glass-pro-dark border-2 border-[#d4a574]/40 rounded-xl text-center">
              <p className="text-[#b0b0b0] font-mono mb-4">NO STORIES YET. BE THE FIRST TO SHARE!</p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-6 py-2 bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white rounded-lg font-black hover:shadow-2xl hover:shadow-[#00d9ff]/50 transition-all cursor-pointer"
              >
                SHARE YOUR STORY
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {stories.map((story, idx) => (
                <div
                  key={story.id}
                  className="group grid-animation p-6 glass-pro-dark border-2 border-[#d4a574]/40 rounded-xl hover:border-[#00d9ff]/80 transition-all hover-lift overflow-hidden"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-black text-white font-mono">{story.author}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                            story.status === 'VERIFIED' 
                              ? 'bg-[#1a8d5e]/30 text-[#00ff88]' 
                              : 'bg-[#00d9ff]/30 text-[#00d9ff]'
                          }`}>
                            {story.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#b0b0b0] font-mono">📍 {story.location}</p>
                      </div>
                      <div className="text-4xl">🌿</div>
                    </div>

                    {/* Post Content */}
                    <h2 className="text-2xl font-black text-[#00d9ff] font-mono mb-2 group-hover:text-[#1a8d5e] transition-colors">
                      {story.title}
                    </h2>
                    <p className="text-[#b0b0b0] mb-6 font-light line-clamp-3">{story.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-xs font-mono">
                      <div className="bg-[#1a8d5e]/20 px-3 py-1 rounded">
                        <span className="text-[#1a8d5e] font-bold">ENGAGEMENT:</span> <span className="text-[#b0b0b0]">{Math.floor(Math.random() * 500)}</span>
                      </div>
                      <div className="bg-[#d4a574]/20 px-3 py-1 rounded">
                        <span className="text-[#d4a574] font-bold">REACH:</span> <span className="text-[#b0b0b0]">+{Math.floor(Math.random() * 500)}</span>
                      </div>
                    </div>

                    {/* Interaction Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#2a2f48]">
                      <div className="flex gap-6">
                        <button className="group/btn flex items-center gap-2 text-[#b0b0b0] hover:text-[#1a8d5e] transition-colors font-mono text-sm font-bold">
                          <Heart size={18} className="group-hover/btn:fill-[#1a8d5e]" />
                          {Math.floor(Math.random() * 500)}
                        </button>
                        <button className="group/btn flex items-center gap-2 text-[#b0b0b0] hover:text-[#00d9ff] transition-colors font-mono text-sm font-bold">
                          <MessageSquare size={18} />
                          {Math.floor(Math.random() * 100)}
                        </button>
                      </div>
                      <button className="group/btn flex items-center gap-2 text-[#b0b0b0] hover:text-[#d4a574] transition-colors font-mono text-sm font-bold">
                        <Share2 size={18} />
                        SHARE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-24 z-10 bg-gradient-to-r from-[#1a8d5e]/5 to-[#00d9ff]/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-white font-mono mb-8">NETWORK METRICS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'GARDENERS', value: '2,847', icon: '👥', color: 'from-[#1a8d5e]' },
              { label: 'TRANSMISSIONS', value: '8,392', icon: '📡', color: 'from-[#00d9ff]' },
              { label: 'ENGAGEMENT', value: '34K', icon: '⚡', color: 'from-[#d4a574]' },
              { label: 'REGIONS', value: '18', icon: '🗺️', color: 'from-[#00ff88]' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`grid-animation p-6 text-center glass-pro border-2 border-[#d4a574]/40 rounded-lg bg-gradient-to-br ${stat.color}/10 hover:border-[#00d9ff] transition-all hover-lift`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <p className="text-4xl mb-2">{stat.icon}</p>
                <p className="text-3xl font-black text-[#00ff88] font-mono mb-2">{stat.value}</p>
                <p className="text-[#b0b0b0] font-mono text-xs font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Submission Modal */}
      <StoryModal 
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
        onStorySubmitted={async () => {
          // Refresh stories after submission
          const response = await fetch('/api/stories');
          if (response.ok) {
            const data = await response.json();
            setStories(data);
          }
        }}
      />
    </div>
  );
}
