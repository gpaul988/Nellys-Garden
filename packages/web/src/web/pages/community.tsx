import { Heart, Share2, MessageSquare } from 'lucide-react';

const communityPosts = [
  {
    id: 1,
    author: 'Chioma A.',
    location: 'Lagos',
    title: 'My First Moringa Harvest!',
    description: 'Planted 3 months ago, now harvesting leaves weekly. The nutrition is incredible!',
    image: '🌿',
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    author: 'Kunle O.',
    location: 'Ibadan',
    title: 'Okra Production Tips',
    description: 'This season I got 3x yield with consistent watering and neem spray. No chemical pesticides!',
    image: '🌾',
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    author: 'Amara I.',
    location: 'Abuja',
    title: 'Pepper Garden Update',
    description: 'Red and yellow peppers thriving in my rooftop garden. Drip irrigation makes all the difference.',
    image: '🌶️',
    likes: 167,
    comments: 28,
  },
  {
    id: 4,
    author: 'Tunde B.',
    location: 'Akure',
    title: 'Neem Tree Growing',
    description: 'Started from seeds 6 months ago. Now at 2 feet tall and pest-resistant formula brewing soon!',
    image: '🌳',
    likes: 198,
    comments: 41,
  },
  {
    id: 5,
    author: 'Zainab M.',
    location: 'Kano',
    title: 'Dry Season Gardening Success',
    description: 'With shade cloth and mulch, I maintained productivity all through harmattan. Worth the investment!',
    image: '☀️',
    likes: 145,
    comments: 19,
  },
  {
    id: 6,
    author: 'Chidi N.',
    location: 'Port Harcourt',
    title: 'Cassava for Food Security',
    description: 'Planted 20 stands, planning harvest in 10 months. Soil preparation was key!',
    image: '🥬',
    likes: 210,
    comments: 37,
  },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Community Gallery</h1>
          <p className="text-[#b0b0b0] text-lg mb-8">
            Share your gardening journey, learn from others, and celebrate Nigerian horticulture.
          </p>
          <button className="px-8 py-3 bg-[#1a8d5e] hover:bg-[#158550] text-white rounded-lg font-semibold transition-all duration-200">
            Share Your Garden Photo
          </button>
        </div>
      </section>

      {/* Community Feed */}
      <section className="py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#b0b0b0] mb-8">
            {communityPosts.length} gardeners sharing their success stories
          </p>
          <div className="space-y-6">
            {communityPosts.map((post) => (
              <div
                key={post.id}
                className="p-6 rounded-lg bg-white/5 border border-[#d4a574]/20 backdrop-blur-sm hover:bg-white/10 hover:border-[#00d9ff]/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-white">{post.author}</h3>
                    <p className="text-xs text-[#b0b0b0]">📍 {post.location}</p>
                  </div>
                  <div className="text-3xl">{post.image}</div>
                </div>

                {/* Post Content */}
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-[#b0b0b0] mb-4">{post.description}</p>

                {/* Interaction Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2a2f48]">
                  <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-[#b0b0b0] hover:text-[#1a8d5e] transition-colors">
                      <Heart size={18} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-[#b0b0b0] hover:text-[#00d9ff] transition-colors">
                      <MessageSquare size={18} />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center gap-2 text-[#b0b0b0] hover:text-[#d4a574] transition-colors">
                    <Share2 size={18} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gradient-to-r from-[#1a8d5e]/10 to-[#00d9ff]/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '2,847', label: 'Active Gardeners' },
            { number: '8,392', label: 'Posts Shared' },
            { number: '34K', label: 'Likes Given' },
            { number: '18', label: 'States Represented' },
          ].map((stat, i) => (
            <div key={i} className="p-6 text-center bg-white/5 border border-[#d4a574]/20 rounded-lg">
              <p className="text-4xl font-bold text-[#1a8d5e] mb-2">{stat.number}</p>
              <p className="text-[#b0b0b0]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
