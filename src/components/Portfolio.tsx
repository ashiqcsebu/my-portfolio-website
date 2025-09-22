import { ExternalLink, Github, Smartphone, Monitor, Tablet } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Luxury Fashion Boutique',
      category: 'theme',
      description: 'Premium fashion store with custom product configurator and subscription box integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Shopify Liquid', 'JavaScript', 'Custom CSS', 'Subscription APIs'],
      results: ['300% increase in conversions', '50% faster page load', '24/7 automated customer service'],
      liveUrl: '#',
      revenue: '$850K+ generated'
    },
    {
      id: 2,
      title: 'Electronics Dropshipping Store',
      category: 'dropshipping',
      description: 'Automated dropshipping platform with real-time inventory sync and multi-supplier integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Shopify APIs', 'Node.js', 'Supplier Integration', 'Automation Tools'],
      results: ['Fully automated order processing', '99.8% uptime', '1000+ products managed'],
      liveUrl: '#',
      revenue: '$1.2M+ generated'
    },
    {
      id: 3,
      title: 'Organic Skincare Brand',
      category: 'optimization',
      description: 'Performance-optimized store with advanced SEO, mobile-first design, and conversion tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['Performance Optimization', 'SEO', 'Analytics', 'Mobile Enhancement'],
      results: ['Page speed improved by 85%', 'Organic traffic up 200%', 'Mobile conversions up 180%'],
      liveUrl: '#',
      revenue: '$650K+ generated'
    },
    {
      id: 4,
      title: 'Home Decor Marketplace',
      category: 'theme',
      description: 'Multi-vendor marketplace with custom vendor dashboard and advanced product filtering.',
      image: '/api/placeholder/600/400',
      technologies: ['Multi-vendor Setup', 'Custom Dashboard', 'Advanced Filtering', 'Payment Integration'],
      results: ['50+ active vendors', 'Advanced search functionality', 'Automated commission system'],
      liveUrl: '#',
      revenue: '$2.1M+ generated'
    },
    {
      id: 5,
      title: 'Fitness Equipment Store',
      category: 'dropshipping',
      description: 'Health & fitness dropshipping store with automated product reviews and fitness content integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Content Integration', 'Review Automation', 'Fitness Apps', 'Social Media APIs'],
      results: ['Automated content publishing', '95% positive reviews', 'Social media integration'],
      liveUrl: '#',
      revenue: '$900K+ generated'
    },
    {
      id: 6,
      title: 'Pet Supplies Optimization',
      category: 'optimization',
      description: 'Complete store overhaul with UX improvements, checkout optimization, and customer retention features.',
      image: '/api/placeholder/600/400',
      technologies: ['UX Design', 'Checkout Optimization', 'Customer Retention', 'Email Marketing'],
      results: ['Cart abandonment reduced by 40%', 'Customer retention up 60%', 'Average order value up 35%'],
      liveUrl: '#',
      revenue: '$1.5M+ generated'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'theme', label: 'Custom Themes' },
    { id: 'dropshipping', label: 'Dropshipping' },
    { id: 'optimization', label: 'Optimization' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            💼 Portfolio Showcase
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Success Stories & <span className="text-accent">Live Projects</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of premium Shopify stores I've built, optimized, and scaled 
            for clients across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center space-x-2">
                      <Monitor className="w-8 h-8 text-accent" />
                      <Tablet className="w-6 h-6 text-accent opacity-75" />
                      <Smartphone className="w-5 h-5 text-accent opacity-50" />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Responsive Design
                    </div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform duration-300">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'theme' ? 'bg-blue-100 text-blue-700' :
                      project.category === 'dropshipping' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-accent">{project.revenue}</div>
                  <div className="space-y-1">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border/30">
                  <a
                    href={project.liveUrl}
                    className="flex items-center justify-between w-full text-accent hover:text-accent-foreground hover:bg-accent p-3 rounded-xl transition-all duration-300 font-medium"
                  >
                    <span>View Live Store</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join These Success Stories?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help you build a high-converting Shopify store that drives real results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;