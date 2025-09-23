import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Full Stack Development',
      'React & Next.js Apps',
      'Node.js Backend',
      'Database Design',
      'API Development',
      'QA & Testing'
    ],
    company: [
      'About Me',
      'Portfolio',
      'Projects',
      'Testimonials',
      'Skills',
      'Contact'
    ],
    resources: [
      'Tech Blog',
      'Case Studies',
      'Code Samples',
      'Performance Tips',
      'Best Practices',
      'Resume'
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-background to-background/95 text-foreground relative overflow-hidden">
      {/* Space Background Overlay */}
      <div className="absolute inset-0 bg-gradient-space opacity-80"></div>
      <div className="relative z-10 container-luxury section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="text-2xl font-bold mb-2">
                <span className="text-foreground">Portfolio</span>
                <span className="text-accent">Hub</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer & QA Engineer crafting digital experiences with precision and creativity. 
                Building applications that scale and perform.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:hello@portfoliohub.dev" className="hover:text-accent transition-colors">
                  hello@portfoliohub.dev
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>Available for Projects</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Remote & On-site Available</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-stellar"
              >
                <span className="text-sm font-bold">Li</span>
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-stellar"
              >
                <span className="text-sm font-bold">Gh</span>
              </a>
              <a
                href="https://twitter.com/your-handle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-stellar"
              >
                <span className="text-sm font-bold">Tw</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <div className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <a
                  key={index}
                  href="#about"
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Company</h3>
            <div className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <div className="space-y-3">
              {footerLinks.resources.map((resource, index) => (
                <a
                  key={index}
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                >
                  {resource}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-12 backdrop-blur-sm border border-border">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Stay Connected</h3>
              <p className="text-muted-foreground">
                Get updates on new projects, tech insights, and development tips delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 glow-cosmic">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-border">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 PortfolioHub. All rights reserved. Built with ❤️ for digital excellence.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://example.com/privacy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="https://example.com/terms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group glow-cosmic"
            >
              <ArrowUp className="w-5 h-5 text-accent-foreground group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;