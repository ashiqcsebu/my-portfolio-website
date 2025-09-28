import {
  User,
  Code,
  Award,
  Download,
  MapPin,
  Mail,
  Calendar,
  X,
  ZoomIn,
  ShoppingCart,
  SettingsIcon,
  Bug,
  School2Icon
} from "lucide-react";
import { useState } from "react";
import certificate1 from "../assets/reviews/Certificate.png";
import certificate2 from "../assets/reviews/Certificcate_page.jpg";
import certificate3 from "../assets/reviews/joining poster.jpg";
import certificate4 from "../assets/reviews/programming hero expertise.jpg";

const achievements = [
  {
    title: "Best Employee Award",
    description: "Appeciation for Outstanding Performance",
    date: "2024",
    image: certificate1,
  },
  {
    title: "Web Development Certification",
    description: "Programming Hero Web Development Course",
    date: "2023",
    image: certificate2,
  },
  // {
  //   title: "React Developer Certification",
  //   description: "Advanced React Development",
  //   date: "2022",
  //   image: certificate3,
  // },
  {
    title: "Black Belt in Web Development",
    description: "Full Stack Web Development",
    date: "2023",
    image: certificate4,
  },
];

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<
    typeof achievements[0] | null
  >(null);

  const skills = [
    {
      category: "Shopify Frontend Development",
      icon: <Code className="w-6 h-6" />,
      technologies: [
        "Shopify Liquid",
        "Javascript",
        "Theme Customization",
          "High Converting UI/UX",
        "Responsive Design",
        "Shopify Themes",
          "HTML",
        "Custom CSS",
      ],
    },
    {
      category: "Shopify Backend & E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      technologies: [
        "Shopify Apps",
        "Payment Gateway Integration",
        "Shipping & Tax Setup",
        "Dropshipping Integration",
        "Store Optimization",
        "Product Import",
        "Product Upload",
        "Bulk Product Management",
          "Data Entry",
      ],
    },
    // {
    //   category: "Quality Assurance & Testing",
    //   icon: <Bug className="w-6 h-6" />,
    //   technologies: [
    //     "Store Testing",
    //     "Bug Detection",
    //     "Performance Optimization",
    //     "App Integration QA",
    //     "Cross-Browser Testing",
    //     "Responsive Design",
    //   ],
    // },
    {
      category: "Dropshipping Tools & Technologies",
      icon: <SettingsIcon className="w-6 h-6" />,
      technologies: [
        "DSers",
        "Oberlo",
        "Spocket",
        "CJ Dropshipping",
        "Figma for UI/UX",
        "Shopify CLI",
        "Git",
      ],
    },
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
            I’m a passionate coder, tech enthusiast, and visionary who loves
            exploring new technologies, building innovative solutions, and
            solving challenging problems with creativity and curiosity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Info & Image */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-100 mx-auto relative">
                <img
                  src={`https://i.ibb.co/P1z5Zhf/prof.jpg`}
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full h-full object-cover rounded-2xl border border-primary/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="glass-card p-6 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Personal Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-semibold">Ashiqul Islam Shabu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <School2Icon className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-semibold">
                    BSc in Computer Science & Engineering.
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-semibold">Dhaka,Bangladesh</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-semibold">ashiq.cse3.bu@gmail.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Experience:</span>
                  <span className="font-semibold">1.5+ Years</span>
                </div>
              </div>

              {/* <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a> */}
            </div>
            
          </div>

          {/* Skills & Bio */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Story</h3>
              <div
                className="space-y-4 text-muted-foreground leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                <p>
                  I completed my BSc in CSE and am a passionate full-stack
                  developer with 5+ years of experience in JavaScript, React,
                  and Node.js. I specialize in Shopify development, combining
                  coding expertise with e-commerce strategies to create
                  high-performing, user-friendly online stores that drive real
                  business growth.
                </p>
                <p>
                  I have worked with startups and established brands to
                  transform ideas into thriving e-commerce platforms. My
                  expertise includes Shopify store setup, theme customization,
                  app integration, dropshipping solutions, SEO, and performance
                  optimization. I focus on building responsive,
                  conversion-driven stores that deliver measurable results and
                  long-term client success.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Skills & Expertise
              </h3>
              <div className="grid gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {skill.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ">
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
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
              >
                {/* Certificate Image */}
                <div
                  className="relative mb-4 overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedCertificate(achievement)}
                >
                  <img
                    src={achievement.image}
                    alt={`${achievement.title} Certificate`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium uppercase">
                    {achievement.imageType}
                  </div> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary/90 text-primary-foreground p-3 rounded-full">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-12 right-0 bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/80 transition-colors duration-200 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Certificate Image */}
              <div className="glass-card p-4 rounded-xl">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} Certificate`}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />

                {/* Certificate Info */}
                <div className="mt-4 text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedCertificate.description}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {selectedCertificate.date}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium uppercase">
                      {selectedCertificate.imageType}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
