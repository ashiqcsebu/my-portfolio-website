import { Award, Users, Zap, Shield } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.png';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Certified Expert',
      description: 'Shopify Partner with advanced certifications in theme development and app integration.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: '50+ successful projects delivered with 99% client satisfaction rate.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality and attention to detail.'
    },
    {
      icon: Shield,
      title: 'Reliable Support',
      description: '24/7 ongoing support and maintenance to keep your store running smoothly.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Main Avatar */}
              <div className="relative z-10">
                <img
                  src={developerAvatar}
                  alt="Shopify Developer Professional Avatar"
                  className="w-full max-w-lg mx-auto hover-lift"
                />
              </div>
              
              {/* Background Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute top-12 left-8 glass-card p-3 animate-float">
                <div className="w-8 h-8 bg-accent rounded text-accent-foreground flex items-center justify-center text-xs font-bold">
                  JS
                </div>
              </div>
              
              <div className="absolute bottom-16 right-12 glass-card p-3 animate-float delay-300">
                <div className="w-8 h-8 bg-primary rounded text-primary-foreground flex items-center justify-center text-xs font-bold">
                  PHP
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                👋 Meet Your Developer
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                Building Premium{' '}
                <span className="text-accent">Shopify Experiences</span> Since 2020
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Shopify developer and virtual assistant specializing in creating 
                  high-converting eCommerce stores that drive real business results. With expertise in 
                  custom theme development, dropshipping automation, and store optimization.
                </p>
                
                <p>
                  My approach combines technical excellence with business strategy to deliver stores 
                  that not only look amazing but also perform exceptionally well in today's competitive 
                  eCommerce landscape.
                </p>
              </div>
            </div>

            {/* Achievement Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <achievement.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {['Shopify Liquid', 'JavaScript', 'CSS/SCSS', 'PHP', 'Node.js', 'React', 'Shopify APIs', 'Dropshipping Tools'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;