import { useState } from 'react';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Modern e-commerce platform built with Next.js, Stripe integration, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: 'https://example-store.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management SaaS',
      category: 'frontend',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      liveUrl: 'https://taskmanager-demo.com',
      githubUrl: 'https://github.com/username/task-manager',
      featured: true
    },
    {
      id: 3,
      title: 'API Testing Suite',
      category: 'testing',
      description: 'Comprehensive API testing framework with automated test generation and reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Jest', 'Postman', 'MongoDB'],
      liveUrl: 'https://api-tester.com',
      githubUrl: 'https://github.com/username/api-testing-suite',
      featured: false
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'fullstack',
      description: 'Property listing platform with advanced search, virtual tours, and agent management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'AWS S3'],
      liveUrl: 'https://realestate-platform.com',
      githubUrl: 'https://github.com/username/realestate-platform',
      featured: true
    },
    {
      id: 5,
      title: 'Mobile Testing Framework',
      category: 'testing',
      description: 'Cross-platform mobile testing framework supporting both iOS and Android applications.',
      image: '/api/placeholder/600/400',
      technologies: ['Appium', 'Python', 'Selenium', 'TestNG'],
      liveUrl: 'https://mobile-test-framework.com',
      githubUrl: 'https://github.com/username/mobile-testing',
      featured: false
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      category: 'frontend',
      description: 'Interactive data visualization dashboard with real-time metrics and custom reports.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'D3.js', 'Chart.js', 'Vuetify'],
      liveUrl: 'https://analytics-dashboard.com',
      githubUrl: 'https://github.com/username/analytics-dashboard',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'testing', label: 'QA/Testing', count: projects.filter(p => p.category === 'testing').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            🚀 Featured Work
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Projects</span> & <span className="text-accent">Achievements</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my development projects, testing frameworks, and technical solutions 
            that demonstrate my skills in full-stack development and quality assurance.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300 border border-primary/20 hover:border-primary/40">
                  {/* Project Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-200"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary text-secondary-foreground rounded-full hover:scale-110 transition-transform duration-200"
                        >
                          <Code className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-1 bg-card rounded-2xl border border-border">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300 border border-border hover:border-primary/40">
                {/* Project Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-primary text-primary px-3 py-2 rounded-lg text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 flex items-center justify-center"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Interested in <span className="text-primary">Working Together</span>?
            </h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;