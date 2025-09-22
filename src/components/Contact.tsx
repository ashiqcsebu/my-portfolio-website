import { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Get a response within 2 hours',
      value: 'hello@shopifypro.dev',
      action: 'mailto:hello@shopifypro.dev'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant support & consultation',
      value: 'Start Live Chat',
      action: '#'
    },
    {
      icon: Phone,
      title: 'Schedule Call',
      description: 'Book a free 30-min consultation',
      value: 'Book Free Call',
      action: '#'
    }
  ];

  const projectTypes = [
    'New Shopify Store Setup',
    'Custom Theme Development',
    'Dropshipping Automation',
    'Store Optimization',
    'App Integration',
    'Data Migration',
    'Other'
  ];

  const budgetRanges = [
    '$500 - $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+'
  ];

  const timelines = [
    'ASAP (Rush Job)',
    '1-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    'Flexible'
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
            🚀 Let's Build Together
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to <span className="text-accent">Transform</span> Your Business?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch today and let's discuss how I can help you build a high-converting 
            Shopify store that drives real results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Tell Me About Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.action}
                  className="group flex items-center p-6 bg-card rounded-2xl hover:shadow-lg transition-all duration-300 hover-lift"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <contact.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                    <p className="text-sm text-accent font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Info */}
            <div className="glass-card p-6 space-y-4">
              <h4 className="font-semibold text-lg">Business Hours</h4>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="w-4 h-4 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Monday - Friday</div>
                    <div className="text-muted-foreground">9:00 AM - 8:00 PM (EST)</div>
                  </div>
                </div>
                
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-accent mr-3" />
                  <div>
                    <div className="font-medium">Remote Services</div>
                    <div className="text-muted-foreground">Serving clients worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="glass-card p-6">
              <h4 className="font-semibold text-lg mb-4">What Happens Next?</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-medium">Initial Consultation</div>
                    <div className="text-sm text-muted-foreground">We'll discuss your project requirements and goals</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-medium">Project Proposal</div>
                    <div className="text-sm text-muted-foreground">Receive a detailed timeline and cost estimate</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-medium">Development Begins</div>
                    <div className="text-sm text-muted-foreground">Start building your premium Shopify store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left p-6 bg-card rounded-2xl">
              <h4 className="font-semibold mb-2">How long does a typical project take?</h4>
              <p className="text-sm text-muted-foreground">Most projects are completed within 2-4 weeks, depending on complexity and requirements.</p>
            </div>
            
            <div className="text-left p-6 bg-card rounded-2xl">
              <h4 className="font-semibold mb-2">Do you provide ongoing support?</h4>
              <p className="text-sm text-muted-foreground">Yes, I offer 24/7 support packages and ongoing maintenance for all clients.</p>
            </div>
            
            <div className="text-left p-6 bg-card rounded-2xl">
              <h4 className="font-semibold mb-2">What's included in the project cost?</h4>
              <p className="text-sm text-muted-foreground">All development, testing, training, and initial support are included in the quoted price.</p>
            </div>
            
            <div className="text-left p-6 bg-card rounded-2xl">
              <h4 className="font-semibold mb-2">Can you help with existing stores?</h4>
              <p className="text-sm text-muted-foreground">Absolutely! I offer optimization, redesign, and enhancement services for existing Shopify stores.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;