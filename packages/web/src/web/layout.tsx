import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Plants', href: '/plants' },
    { label: 'Growing Tips', href: '/tips' },
    { label: 'Resources', href: '/resources' },
    { label: 'Community', href: '/community' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1335] to-[#0a0e27]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-[#2a2f48]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Leaf className="text-[#1a8d5e]" size={32} />
            <span className="text-2xl font-bold text-white">Nellys-Garden</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#b0b0b0] hover:text-[#d4a574] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f1335] border-t border-[#2a2f48] px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[#b0b0b0] hover:text-[#d4a574] py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-[#2a2f48] bg-[#0a0e27]/50 py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="text-[#1a8d5e]" size={24} />
                <span className="font-bold text-white">Nellys-Garden</span>
              </div>
              <p className="text-[#b0b0b0] text-sm">
                Empowering Nigerian gardeners with tropical horticulture knowledge.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2 text-[#b0b0b0] text-sm">
                <li><a href="/plants" className="hover:text-[#d4a574] transition-colors">Plants</a></li>
                <li><a href="/tips" className="hover:text-[#d4a574] transition-colors">Growing Tips</a></li>
                <li><a href="/resources" className="hover:text-[#d4a574] transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Community</h4>
              <ul className="space-y-2 text-[#b0b0b0] text-sm">
                <li><a href="/community" className="hover:text-[#d4a574] transition-colors">Gallery</a></li>
                <li><a href="/contact" className="hover:text-[#d4a574] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Social</h4>
              <ul className="space-y-2 text-[#b0b0b0] text-sm">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2a2f48] pt-8 text-center text-[#b0b0b0] text-sm">
            <p>&copy; 2024 Nellys-Garden. Growing Nigerian gardens, one plant at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
