import { Mail, Phone, MapPin, Send, Zap, Shield, Cpu, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formType, setFormType] = useState<'contact' | 'story'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [storyData, setStoryData] = useState({
    author: '',
    location: '',
    title: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStoryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStoryData({
      ...storyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
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
      setTimeout(() => setSubmitted(false), 3000);
      setStoryData({ author: '', location: '', title: '', description: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error submitting story');
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27] tech-grid overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#1a8d5e]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto space-y-8 animate-float-up-animation">
          <div className="flex items-center gap-4">
            <Cpu className="text-[#d4a574]" size={40} />
            <div>
              <p className="text-[#1a8d5e] font-mono text-sm font-bold">COMMUNICATION INTERFACE</p>
              <h1 className="text-5xl md:text-6xl font-black text-white font-mono">CONTACT PROTOCOL</h1>
            </div>
          </div>
          <p className="text-[#b0b0b0] text-lg font-light max-w-2xl">
            Direct gateway to the Nellys-Garden command center. Submit inquiries, collaboration proposals, feedback, or share your gardening story.
          </p>

          {/* Form Type Selector */}
          <div className="flex gap-4 max-w-2xl">
            <button
              onClick={() => setFormType('contact')}
              className={`px-6 py-3 rounded-lg font-black transition-all ${
                formType === 'contact'
                  ? 'bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white shadow-lg shadow-[#00d9ff]/50'
                  : 'border-2 border-[#d4a574] text-[#d4a574] hover:border-[#00d9ff]'
              }`}
            >
              CONTACT US
            </button>
            <button
              onClick={() => setFormType('story')}
              className={`px-6 py-3 rounded-lg font-black transition-all ${
                formType === 'story'
                  ? 'bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white shadow-lg shadow-[#00d9ff]/50'
                  : 'border-2 border-[#d4a574] text-[#d4a574] hover:border-[#00d9ff]'
              }`}
            >
              SHARE YOUR STORY
            </button>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="relative py-12 px-6 sm:px-12 lg:px-24 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          {formType === 'contact' && (
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: Mail, label: 'EMAIL', value: 'hello@nellysgarden.ng', color: 'from-[#00d9ff]' },
                { icon: Phone, label: 'PHONE', value: '+234 (0) 123 456 7890', color: 'from-[#1a8d5e]' },
                { icon: MapPin, label: 'LOCATION', value: 'Lagos, Nigeria', color: 'from-[#d4a574]' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group grid-animation p-6 glass-pro border-2 border-[#d4a574]/40 rounded-xl hover:border-[#00d9ff]/80 transition-all hover-lift overflow-hidden scan-line-effect`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative z-10">
                    <div className={`p-3 w-fit rounded-lg bg-gradient-to-br ${item.color} to-transparent mb-4`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-black text-white font-mono mb-2 group-hover:text-[#00d9ff] transition-colors">{item.label}</h3>
                    <p className="text-[#b0b0b0] font-light">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Security Badge */}
              <div className="p-6 glass-pro border-2 border-[#1a8d5e]/50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-[#1a8d5e]" size={20} />
                  <p className="text-white font-mono font-bold">ENCRYPTED</p>
                </div>
                <p className="text-xs text-[#b0b0b0] font-light">All transmissions secured & encrypted</p>
              </div>
            </div>
          )}

          {/* Form */}
          <div className={formType === 'contact' ? 'lg:col-span-2' : 'lg:col-span-3'}>
            {formType === 'contact' ? (
              <form
                onSubmit={handleSubmit}
                className="p-8 glass-pro-dark border-2 border-[#d4a574]/40 rounded-xl hover:border-[#1a8d5e] transition-all overflow-hidden scan-line-effect"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">IDENTIFIER</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your designation"
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono"
                    />
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">TRANSMISSION ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@nexus.com"
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono"
                    />
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">SUBJECT CODE</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">DATA PAYLOAD</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Transmit your message..."
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all resize-none font-mono"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] text-[#0a0e27] rounded-lg font-black font-mono flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[#00d9ff]/60 transition-all btn-cyber transform hover:scale-105"
                  >
                    INITIALIZE TRANSMISSION <Send size={20} />
                  </button>

                  {/* Success Message */}
                  {submitted && (
                    <div className="p-4 glass-pro border-2 border-[#1a8d5e] rounded-lg text-[#00ff88] font-mono font-bold">
                      ✓ TRANSMISSION RECEIVED. PROCESSING INITIATED.
                    </div>
                  )}
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleStorySubmit}
                className="p-8 glass-pro-dark border-2 border-[#d4a574]/40 rounded-xl hover:border-[#1a8d5e] transition-all overflow-hidden scan-line-effect"
              >
                <div className="space-y-6">
                  {/* Author Name */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">YOUR NAME</label>
                    <input
                      type="text"
                      name="author"
                      value={storyData.author}
                      onChange={handleStoryChange}
                      required
                      placeholder="Your gardening name"
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono"
                    />
                  </div>

                  {/* Location */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">LOCATION</label>
                    <input
                      type="text"
                      name="location"
                      value={storyData.location}
                      onChange={handleStoryChange}
                      required
                      placeholder="City, State (e.g., Lagos, Nigeria)"
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono"
                    />
                  </div>

                  {/* Story Title */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">STORY TITLE</label>
                    <input
                      type="text"
                      name="title"
                      value={storyData.title}
                      onChange={handleStoryChange}
                      required
                      placeholder="Give your story a title (e.g., MORINGA_JOURNEY)"
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all font-mono"
                    />
                  </div>

                  {/* Story Description */}
                  <div className="group">
                    <label className="block text-white font-black font-mono mb-2">YOUR STORY</label>
                    <textarea
                      name="description"
                      value={storyData.description}
                      onChange={handleStoryChange}
                      required
                      rows={8}
                      placeholder="Share your gardening journey, challenges, victories, and lessons learned..."
                      className="w-full px-4 py-3 bg-[#0f1335]/60 border-2 border-[#d4a574]/40 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff] focus:ring-2 focus:ring-[#00d9ff]/30 transition-all resize-none font-mono text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#1a8d5e] via-[#00ff88] to-[#00d9ff] text-[#0a0e27] rounded-lg font-black font-mono flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[#00d9ff]/60 transition-all btn-cyber transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'UPLOADING...' : 'SUBMIT STORY'} <Send size={20} />
                  </button>

                  {/* Error Message */}
                  {error && (
                    <div className="p-4 glass-pro border-2 border-red-500/50 rounded-lg text-red-400 font-mono font-bold">
                      ✗ ERROR: {error}
                    </div>
                  )}

                  {/* Success Message */}
                  {submitted && (
                    <div className="p-4 glass-pro border-2 border-[#1a8d5e] rounded-lg text-[#00ff88] font-mono font-bold">
                      ✓ STORY UPLOADED. YOUR TRANSMISSION ADDED TO NEXUS FEED.
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 px-6 sm:px-12 lg:px-24 z-10 bg-gradient-to-r from-[#1a8d5e]/5 to-[#00d9ff]/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white font-mono mb-8">
            <span className="text-[#d4a574]">{'<'}</span> FAQ DIRECTORY <span className="text-[#d4a574]">{'/>'}</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'HOW CAN I CONTRIBUTE TO THE NEXUS?',
                a: 'Submit photos, protocols, and cultivation reports. Email hello@nellysgarden.ng with your proposal.',
              },
              {
                q: 'DO YOU OFFER CONSULTATION SERVICES?',
                a: 'Yes. Custom garden setup analysis available. Submit details about your location, space, and goals.',
              },
              {
                q: 'CONTENT USAGE PERMISSIONS?',
                a: 'Most content: free with attribution. Commercial use: contact hello@nellysgarden.ng for licensing.',
              },
              {
                q: 'UPDATE FREQUENCY?',
                a: 'Weekly content deployments. Plant profiles, seasonal protocols, and community highlights monthly.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="grid-animation group p-6 glass-pro border-2 border-[#d4a574]/40 hover:border-[#00d9ff]/80 rounded-lg transition-all hover-lift"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-lg font-black text-white font-mono mb-2 group-hover:text-[#00d9ff] transition-colors">
                  {`// ${faq.q}`}
                </h3>
                <p className="text-[#b0b0b0] font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-12 justify-center">
            <button 
              onClick={() => window.location.href = '/plants'}
              className="px-8 py-4 bg-gradient-to-r from-[#1a8d5e] to-[#00d9ff] text-white font-black rounded-lg hover:shadow-2xl hover:shadow-[#00d9ff]/50 transition-all cursor-pointer hover:scale-105 transform flex items-center gap-2"
            >
              EXPLORE PLANTS <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => window.location.href = '/community'}
              className="px-8 py-4 border-2 border-[#d4a574] text-[#d4a574] font-black rounded-lg hover:bg-[#d4a574]/10 transition-all cursor-pointer hover:border-[#00d9ff] hover:text-[#00d9ff]"
            >
              COMMUNITY
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
