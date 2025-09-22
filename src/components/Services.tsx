import { ShoppingBag, Truck, Database, Settings, Palette, BarChart3 } from 'lucide-react';
import storefrontImage from '@/assets/service-storefront.png';
import shippingImage from '@/assets/service-shipping.png';
import productsImage from '@/assets/service-products.png';

const Services = () => {
  const services = [
    {
      title: 'Custom Shopify Store Setup',
      description: 'Complete store creation with premium themes, custom design, and optimized user experience for maximum conversions.',
      icon: ShoppingBag,
      image: storefrontImage,
      features: ['Custom Theme Development', 'Mobile-First Design', 'SEO Optimization', 'Speed Enhancement'],
      price: 'From $1,500'
    },
    {
      title: 'Dropshipping Automation',
      description: 'End-to-end dropshipping setup with automated product imports, order processing, and supplier integration.',
      icon: Truck,
      image: shippingImage,
      features: ['Supplier Integration', 'Automated Order Processing', 'Inventory Management', 'Price Monitoring'],
      price: 'From $800'
    },
    {
      title: 'Product Data Management',
      description: 'Professional product listing, data entry, inventory management, and catalog optimization services.',
      icon: Database,
      image: productsImage,
      features: ['Bulk Product Import', 'SEO-Optimized Descriptions', 'Image Processing', 'Category Organization'],
      price: 'From $300'
    },
    {
      title: 'App Integration & Setup',
      description: 'Seamless third-party app integration for enhanced functionality, marketing automation, and analytics.',
      icon: Settings,
      image: null,
      features: ['Marketing Apps', 'Analytics Integration', 'Payment Gateways', 'Inventory Apps'],
      price: 'From $200'
    },
    {
      title: 'Theme Customization',
      description: 'Advanced theme modifications, custom sections, and brand-specific design implementations.',
      icon: Palette,
      image: null,
      features: ['Custom Sections', 'Brand Integration', 'UX/UI Enhancement', 'Code Optimization'],
      price: 'From $500'
    },
    {
      title: 'Store Optimization',
      description: 'Comprehensive store audit, performance optimization, and conversion rate improvement services.',
      icon: BarChart3,
      image: null,
      features: ['Performance Audit', 'Conversion Optimization', 'SEO Enhancement', 'Analytics Setup'],
      price: 'From $400'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            🚀 Premium Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Complete <span className="text-accent">Shopify Solutions</span> for Your Business
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial setup to advanced optimization, I provide end-to-end Shopify services 
            that scale with your business and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image or Icon */}
              <div className="mb-6">
                {service.image ? (
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-20 h-20 object-contain mx-auto animate-float"
                    />
                    <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-border/30">
                  <div className="text-lg font-semibold text-accent">{service.price}</div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;