import { Mail, MapPin, ArrowUp, X, Contact, } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className=" bg-gradient-to-t from-background via-background/95 to-background/90 text-foreground relative overflow-hidden border-t border-border/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-stellar opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Main Footer Content */}
      
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* Brand Section */}
          <div className="space-y-6 mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-foreground">Ashiqul</span>
                <span className="text-accent"> Islam</span>
                <span className="text-foreground"> Shabu</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Shopify Expert Full Stack Developer.
                <br />
                BSc. in Computer Science and Engineering.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:ashiq.cse3.bu@gmail.com" className="hover:text-accent transition-colors">
                  ashiq.cse3.bu@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FaWhatsapp className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">+88 01758877006</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 mx-auto">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm  transform"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Follow me On</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ashiqcsebu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted/50 border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105 glow-stellar"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashiq-cse-bu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted/50 border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105 glow-stellar"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/ashikul006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted/50 border border-border rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105 glow-stellar"
                aria-label="Twitter"
              >
                <FaTelegram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Let's build something amazing together.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-2 mt-6 border-t border-border/50">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0 mx-auto">
            © {new Date().getFullYear()} All rights reserved by Ashiqul Islam Shabu.
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 group glow-cosmic"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;