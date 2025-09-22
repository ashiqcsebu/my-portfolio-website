import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-3d-devices.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent/20 rounded-full blur-lg animate-tilt"></div>

      <div className="container-luxury section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                ✨ Premium Shopify Development
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your <span className="text-accent">Shopify Partner</span> for{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Growth
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transform your eCommerce vision into a premium Shopify store that converts visitors into customers. 
                Specializing in custom development, dropshipping automation, and store optimization.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Stores Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="#portfolio"
                className="group border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                View Portfolio
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up delay-200">
            <div className="relative">
              <img
                src={heroImage}
                alt="3D Shopify Devices Mockup"
                className="w-full h-auto animate-float"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl opacity-30 animate-glow"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-8 -left-8 glass-card p-4 animate-float delay-500">
              <div className="text-accent font-bold">$2.4M+</div>
              <div className="text-xs text-muted-foreground">Revenue Generated</div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-card p-4 animate-float delay-700">
              <div className="text-accent font-bold">98.5%</div>
              <div className="text-xs text-muted-foreground">Uptime Score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;