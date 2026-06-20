import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-[#b0b0b0] text-lg">
            Have questions about gardening? Want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg">
              <div className="flex items-start gap-4">
                <Mail className="text-[#00d9ff] flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-[#b0b0b0]">hello@nellysgarden.ng</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg">
              <div className="flex items-start gap-4">
                <Phone className="text-[#1a8d5e] flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-[#b0b0b0]">+234 (0) 123 456 7890</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#d4a574] flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-[#b0b0b0]">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-lg bg-white/5 border border-[#d4a574]/20 backdrop-blur-sm"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-[#d4a574]/20 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff]/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-[#d4a574]/20 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff]/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-[#d4a574]/20 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff]/40 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-[#d4a574]/20 rounded-lg text-white placeholder-[#b0b0b0] focus:outline-none focus:border-[#00d9ff]/40 transition-colors resize-none"
                    placeholder="Tell us your thoughts..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-[#1a8d5e] to-[#00ff88] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#00ff88]/30 transition-all duration-200"
                >
                  Send Message <Send size={18} />
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 bg-[#1a8d5e]/20 border border-[#1a8d5e] rounded-lg text-[#00ff88]">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#1a8d5e]/10 to-[#00d9ff]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How can I contribute to Nellys-Garden?',
                a: 'Share your photos, tips, and success stories with the community! Email us at hello@nellysgarden.ng to become a contributor.',
              },
              {
                q: 'Do you offer gardening consultations?',
                a: 'Yes! We offer personalized advice for Nigerian garden setups. Contact us with your location and garden details.',
              },
              {
                q: 'Can I use Nellys-Garden content for my blog?',
                a: 'Absolutely. Most content is free to use with attribution. Contact us for commercial use.',
              },
              {
                q: 'How often is new content added?',
                a: 'We update guides weekly with seasonal tips, plant profiles, and community highlights.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-[#d4a574]/20 rounded-lg hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-[#b0b0b0]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
