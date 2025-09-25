import { User, Code, TestTube, Award, Download, MapPin, Mail, Calendar } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.png';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Material-UI']
    },
    {
      category: 'Backend Development', 
      icon: <Code className="w-6 h-6" />,
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Quality Assurance',
      icon: <TestTube className="w-6 h-6" />,
      technologies: ['Selenium', 'Jest', 'Cypress', 'Postman', 'Agile/Scrum', 'Test Automation']
    },
    {
      category: 'Tools & Technologies',
      icon: <Award className="w-6 h-6" />,
      technologies: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma', 'Jira']
    }
  ];

  const achievements = [
    {
      title: 'ISTQB Foundation Level',
      description: 'Certified Software Testing Professional',
      date: '2023',
      image: '/placeholder.svg', // Replace with your certificate PNG
      imageType: 'png'
    },
    {
      title: 'AWS Cloud Practitioner',
      description: 'Amazon Web Services Certified',
      date: '2023',
      image: '/placeholder.svg', // Replace with your certificate JPG
      imageType: 'jpg'
    },
    {
      title: 'React Developer Certification',
      description: 'Advanced React Development',
      date: '2022',
      image: '/placeholder.svg', // Replace with your certificate PNG
      imageType: 'png'
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            👨‍💻 About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Get To Know <span className="text-primary">Me Better</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves creating exceptional digital experiences 
            and ensuring they work flawlessly through comprehensive testing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info & Image */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <img
                  src={developerAvatar}
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full h-full object-cover rounded-2xl border border-primary/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="glass-card p-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Personal Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-semibold">Alex Johnson</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-semibold">San Francisco, CA</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-semibold">alex@example.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-semibold">3+ Years</span>
                </div>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Skills & Bio */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer and QA engineer with over 3 years of experience 
                  creating robust web applications and ensuring they deliver exceptional user experiences. 
                  My journey began with a curiosity for how things work, which led me to discover my love 
                  for both building and testing software.
                </p>
                <p>
                  I specialize in modern web technologies like React, Node.js, and TypeScript, while also 
                  maintaining a strong focus on quality assurance through automated testing and comprehensive 
                  QA strategies. This unique combination allows me to not only build features but ensure 
                  they work flawlessly in production.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Skills & Expertise</h3>
              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full hover:bg-accent/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group cursor-pointer">
                {/* Certificate Image */}
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={achievement.image}
                    alt={`${achievement.title} Certificate`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium uppercase">
                    {achievement.imageType}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Certificate Info */}
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;