import { X, Send, Zap, Shield, Cpu } from 'lucide-react';
import { useState } from 'react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStorySubmitted: () => void;
}

export function StoryModal({ isOpen, onClose, onStorySubmitted }: StoryModalProps) {
  const [storyData, setStoryData] = useState({
    author: '',
    location: '',
    title: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStoryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStoryData({
      ...storyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(storyData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit story');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setStoryData({ author: '', location: '', title: '', description: '' });
        onStorySubmitted();
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error submitting story');
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a8d5e]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="glass-pro-dark border-2 border-[#d4a574]/60 rounded-2xl overflow-hidden shadow-2xl shadow-[#00d9ff]/30">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-[#1a8d5e]/20 via-[#00d9ff]/10 to-transparent border-b border-[#d4a574]/40 p-8">
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Cpu className="text-[#d4a574]" size={32} />
                  <div>
                    <p className="text-[#1a8d5e] font-mono text-xs font-bold tracking-widest">STORY TRANSMISSION PROTOCOL</p>
                    <h2 className="text-3xl md:text-4xl font-black text-white font-mono">SHARE YOUR GARDEN JOURNEY</h2>
                  </div>
                </div>
                <p className="text-[#b0b0b0] font-light mt-2 text-sm">
                  Transmit your cultivation story to the Nexus. Inspire 2,800+ gardeners across Nigeria with your experience.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
              >
                <X size={24} className="text-[#d4a574]" />
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <form onSubmit={handleStorySubmit} className="space-y-6">
              {/* Author Name */}
              <div className="group">
                <label className="block text-white font-black font-mono mb-2 text-sm tracking-wider">
                  <span className="text-[#1a8d5e]">{'<'}</span> YOUR NAME <span className="text-[#1a8d5e]">{'/>'}</span>
                </label>
                <input
                  type="text"
                  name="author"
                  value={storyData.author}
                  onChange={handleStoryChange}
                  required
                  placeholder="Your gardening designation..."
                  className="w-full px-4 py-3 bg-[#0f1335]/80 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono text-sm group-hover:border-[#d4a574]/60"
                />
              </div>

              {/* Location */}
              <div className="group">
                <label className="block text-white font-black font-mono mb-2 text-sm tracking-wider">
                  <span className="text-[#1a8d5e]">{'<'}</span> LOCATION NODE <span className="text-[#1a8d5e]">{'/>'}</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={storyData.location}
                  onChange={handleStoryChange}
                  required
                  placeholder="City, State (e.g., Lagos, Nigeria)"
                  className="w-full px-4 py-3 bg-[#0f1335]/80 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono text-sm group-hover:border-[#d4a574]/60"
                />
              </div>

              {/* Story Title */}
              <div className="group">
                <label className="block text-white font-black font-mono mb-2 text-sm tracking-wider">
                  <span className="text-[#1a8d5e]">{'<'}</span> STORY PROTOCOL ID <span className="text-[#1a8d5e]">{'/>'}</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={storyData.title}
                  onChange={handleStoryChange}
                  required
                  placeholder="e.g., MORINGA_HARVEST_2026, PEPPER_GARDEN_NEXUS"
                  className="w-full px-4 py-3 bg-[#0f1335]/80 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono text-sm group-hover:border-[#d4a574]/60"
                />
              </div>

              {/* Story Description */}
              <div className="group">
                <label className="block text-white font-black font-mono mb-2 text-sm tracking-wider">
                  <span className="text-[#1a8d5e]">{'<'}</span> STORY DATA PAYLOAD <span className="text-[#1a8d5e]">{'/>'}</span>
                </label>
                <div className="relative">
                  <textarea
                    name="description"
                    value={storyData.description}
                    onChange={handleStoryChange}
                    required
                    rows={8}
                    placeholder="Share your gardening journey:&#10;- What plants did you grow?&#10;- What challenges did you face?&#10;- What victories did you achieve?&#10;- Lessons learned and tips for others...&#10;&#10;Be detailed, be authentic, inspire the community!"
                    className="w-full px-4 py-3 bg-[#0f1335]/80 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all resize-none font-mono text-sm group-hover:border-[#d4a574]/60"
                  />
                  <div className="absolute bottom-3 right-3 text-[#b0b0b0] text-xs font-mono">
                    {storyData.description.length} / 2000
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="p-4 bg-[#1a8d5e]/10 border-2 border-[#1a8d5e]/40 rounded-lg flex gap-3">
                <Shield className="text-[#1a8d5e] flex-shrink-0 mt-1" size={20} />
                <div className="text-sm">
                  <p className="text-[#1a8d5e] font-bold font-mono">TRANSMISSION SECURE</p>
                  <p className="text-[#b0b0b0] text-xs">Your story will be verified and featured in the community nexus feed within minutes.</p>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 glass-pro border-2 border-red-500/50 rounded-lg text-red-400 font-mono font-bold text-sm flex gap-2">
                  <span>✗</span>
                  <span>{error}</span>
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className="p-4 glass-pro border-2 border-[#1a8d5e] rounded-lg text-[#00ff88] font-mono font-bold text-sm animate-pulse">
                  ✓ STORY UPLOADED. TRANSMITTING TO NEXUS FEED...
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] text-[#0a0e27] rounded-lg font-black font-mono flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[#00d9ff]/60 transition-all btn-cyber transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wider"
              >
                {loading ? (
                  <>
                    <Zap size={20} className="animate-spin" />
                    UPLOADING TRANSMISSION...
                  </>
                ) : submitted ? (
                  <>
                    <Zap size={20} />
                    STORY LOCKED IN NEXUS
                  </>
                ) : (
                  <>
                    TRANSMIT STORY <Send size={20} />
                  </>
                )}
              </button>

              {/* Close hint */}
              {!submitted && (
                <p className="text-center text-[#b0b0b0] text-xs font-mono">Press ESC to close</p>
              )}
            </form>
          </div>

          {/* Footer decoration */}
          <div className="h-1 bg-gradient-to-r from-[#1a8d5e] via-[#00d9ff] to-[#d4a574]"></div>
        </div>
      </div>

      {/* Close on ESC */}
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') onClose();
        }}
        className="absolute inset-0 z-0"
      />
    </div>
  );
}
