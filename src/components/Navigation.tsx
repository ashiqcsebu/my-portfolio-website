import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="container-luxury section-padding py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/">
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-primary">Ashiqul </span>
              <span className="text-accent">Islam</span>
            </div>
          </a>


          {/* Desktop Navigation (lg and above) */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button (lg and above) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile & Tablet Menu Button (below lg) */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile & Tablet Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mt-4 py-4 border-t border-border/20 transition-all duration-300 glass-nav shadow-lg`}
          >
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold text-center mt-4"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
