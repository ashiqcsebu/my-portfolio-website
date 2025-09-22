import { ArrowRight, Download, Code, TestTube } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-tilt"></div>

      <div className="container-luxury section-padding relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
            ✨ Full Stack Developer & QA Engineer
          </div>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Alex Johnson</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold">
              I Build <span className="bg-stellar-gradient bg-clip-text text-transparent">
                Digital Experiences
              </span> & Ensure <span className="text-acc">Quality</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Passionate full-stack developer and QA engineer specializing in React, Node.js, 
              and comprehensive testing strategies. I create robust applications and ensure 
              they deliver exceptional user experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Bug Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              <Code className="mr-2 w-5 h-5" />
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="#contact"
              className="group border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center"
            >
              <TestTube className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Let's Work Together
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center items-center space-x-8 pt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
            <a
              href="#about"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Learn More About Me
            </a>
          </div>
        </div>

        {/* Floating Achievement Cards */}
        <div className="absolute top-1/4 left-8 glass-card p-4 animate-float delay-500 hidden lg:block">
          <div className="text-primary font-bold">React Expert</div>
          <div className="text-xs text-muted-foreground">Advanced Level</div>
        </div>
        
        <div className="absolute bottom-1/4 right-8 glass-card p-4 animate-float delay-700 hidden lg:block">
          <div className="text-accent font-bold">QA Certified</div>
          <div className="text-xs text-muted-foreground">ISTQB Foundation</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;