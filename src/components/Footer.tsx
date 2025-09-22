import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      'Shopify Store Setup',
      'Custom Theme Development',
      'Dropshipping Automation',
      'Store Optimization',
      'App Integration',
      'Data Management'
    ],
    company: [
      'About Me',
      'Portfolio',
      'Services',
      'Testimonials',
      'Process',
      'Contact'
    ],
    resources: [
      'Shopify Guide',
      'Best Practices',
      'Case Studies',
      'Performance Tips',
      'SEO Guide',
      'Support'
    ]
  };

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="container-luxury section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="text-2xl font-bold mb-2">
                <span className="text-primary-foreground">Shopify</span>
                <span className="text-accent">Pro</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Premium Shopify development services that transform your eCommerce vision into reality. 
                Building stores that convert and scale.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@shopifypro.dev</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Remote Services Worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <span className="text-sm font-bold">Li</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <span className="text-sm font-bold">Gh</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <span className="text-sm font-bold">Tw</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <a
                  key={index}
                  href="#services"
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <div className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="space-y-3">
              {footerLinks.resources.map((resource, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                >
                  {resource}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary-foreground/10 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Get the latest Shopify tips, case studies, and exclusive insights delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-primary-foreground/20">
          <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © 2024 ShopifyPro. All rights reserved. Built with ❤️ for eCommerce success.
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
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