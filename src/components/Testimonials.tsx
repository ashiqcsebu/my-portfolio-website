import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, Luxury Boutique',
      company: 'Elite Fashion Co.',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      text: 'Working with this developer transformed our online presence completely. Our Shopify store went from basic to absolutely stunning, and our conversion rates increased by 300%. The attention to detail and technical expertise is unmatched.',
      results: '$850K+ revenue increase',
      project: 'Complete store redesign'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, TechGadgets Pro',
      company: 'Electronics Dropship',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      text: 'The dropshipping automation setup was flawless. Everything from supplier integration to order processing runs like clockwork. We\'ve scaled from 100 to 1000+ products without any technical issues.',
      results: '900% scaling achievement',
      project: 'Dropshipping automation'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Organic Skincare Brand',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      text: 'The store optimization work exceeded all expectations. Page load times improved dramatically, SEO rankings skyrocketed, and our mobile experience is now industry-leading. ROI was incredible.',
      results: '200% traffic increase',
      project: 'Performance optimization'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Co-founder',
      company: 'Home Decor Hub',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      text: 'Creating our multi-vendor marketplace required complex custom development. The solution delivered was elegant, scalable, and user-friendly. Our vendors love the custom dashboard features.',
      results: '50+ active vendors',
      project: 'Multi-vendor marketplace'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Ecommerce Manager',
      company: 'Pet Paradise',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      text: 'The complete store overhaul delivered incredible results. Customer retention improved by 60%, cart abandonment dropped significantly, and our customer satisfaction scores are at an all-time high.',
      results: '60% retention boost',
      project: 'UX/UI redesign'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            ⭐ Client Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            What <span className="text-accent">Clients Say</span> About My Work
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real feedback from real clients who've experienced significant growth and success 
            with their Shopify stores.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center space-y-8 animate-fade-in-up">
            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Results Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-accent/10 text-accent rounded-full font-semibold">
              {currentTestimonial.results}
            </div>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-2xl font-bold text-accent">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">{currentTestimonial.role}</p>
                  <p className="text-sm text-accent">{currentTestimonial.company}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-border"></div>
              
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">Project Type</p>
                <p className="font-medium text-foreground">{currentTestimonial.project}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 pt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-card rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 bg-card rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">$8M+</div>
            <div className="text-muted-foreground">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">99%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Become the Next <span className="text-accent">Success Story</span>?
            </h3>
            <p className="text-muted-foreground">
              Join these successful entrepreneurs and start building your premium Shopify store today.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Let's Build Your Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;